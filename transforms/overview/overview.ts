import { ConstitutionRow } from '../../extractors/constitution-row.model.ts';
import { RecordRow } from '../../extractors/overview/record-row.model.ts';
import { ConstitutionPageCategory } from './constitution.model.ts';
import { Overview } from './overview.model.ts';

export function transform(rows: RecordRow[], cons: ConstitutionRow[]): Overview {
  return { categories: [], constitutions: cons.map(c => {
    const pages = transformPages(rows.filter(r => r.constitutionId === c.id));
    return {
      id: c.id,
      name: c.name,
      year: c.year,
      context: c.context,
      isTemporaryEdition: c.isTemporary,
      isWrittenByCoup: c.isWrittenbyCoup,
      pageCount: pages.length,
      pages: pages,
    }
  }) };
}

export function transformPages(rows: RecordRow[]): ConstitutionPageCategory[][] {
  rows.sort((first, second) => 
    first.fromPage === second.fromPage ? 0 :
    first.fromPage > second.fromPage ? 1 : -1
  );

  const pages: ConstitutionPageCategory[][] = [];
  const maxPage = Math.floor(rows[rows.length - 1].toPage);
  for (let i = 0; i < maxPage; i++) pages.push([]);

  let progress = 1;

  for (const row of rows) {
    let rowRemainer = row.toPage - row.fromPage;

    while (rowRemainer > 0) {
      const currentPageRemainer = getNextPage(progress) - progress;
      if (currentPageRemainer > rowRemainer) {
        // The remainer of the catogery can be fitted to current page
        pages[Math.floor(progress) - 1].push({
          categoryId: row.categoryId,
          pageRatio: rowRemainer.toFixed(2)
        });
        progress += rowRemainer;
        rowRemainer = 0;
      } else {
        pages[Math.floor(progress) - 1].push({
          categoryId: row.categoryId,
          pageRatio: currentPageRemainer.toFixed(2)
        });
        progress += currentPageRemainer;
        rowRemainer -= currentPageRemainer;
      }
    }
  }

  return pages;
}


function getNextPage(target: number): number {
  if (Number.isInteger(target)) {
    return target + 1;
  }
  return Math.ceil(target);
}
