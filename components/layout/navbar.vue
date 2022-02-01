<template>
  <WvNavbar title="RE-CONSTITUTION">
    <NuxtLink to="/">
      <WvNavButton>ภาพรวม</WvNavButton>
    </NuxtLink>
    <WvNavDropdown label="ดูตามหมวด">
      <NuxtLink
        v-for="category in categories"
        :key="category.id"
        :to="`/categories/${category.id}`"
        class="w-full"
      >
        <WvNavDropdownItem>
          <div class="flex flex-row items-center space-x-1">
            <div
              class="rounded-full w-2 h-2 md:w-3 md:h-3"
              :style="{ backgroundColor: category.color }"
            />
            <span class="wv_b7">
              {{ category.title }}
            </span>
          </div>
        </WvNavDropdownItem>
      </NuxtLink>
    </WvNavDropdown>
    <NuxtLink to="/about">
      <WvNavButton>เกี่ยวกับโครงการ</WvNavButton>
    </NuxtLink>
    <WvNavButton>
      <img src="~/assets/images/icon-search.svg" alt="search" />
    </WvNavButton>
  </WvNavbar>
</template>

<script lang="ts">
import Vue from 'vue';
import WvNavbar from '@wevisdemo/ui/components/navbar.vue';
import WvNavButton from '@wevisdemo/ui/components/nav-button.vue';
import WvNavDropdown from '@wevisdemo/ui/components/nav-dropdown.vue';
import WvNavDropdownItem from '@wevisdemo/ui/components/nav-dropdown-item.vue';

import { TopicIndex } from './search-bar.vue';
import { getAllTopics } from '~/utils/strapi';
import constitutionOverview, {
  CategoryOverview,
} from '~/data/constitution-overview';

export default Vue.extend({
  components: {
    WvNavbar,
    WvNavButton,
    WvNavDropdown,
    WvNavDropdownItem,
  },
  data() {
    return {
      showSearchBar: false,
      categories: [] as CategoryOverview[],
      topicsIndex: [] as TopicIndex[],
    };
  },
  async fetch() {
    const topics = await getAllTopics();

    this.topicsIndex = topics.map(({ category_id, id, name }) => ({
      category_id,
      id,
      name,
    }));

    const catagoryIdsHavingTopics = new Set(
      topics.map(({ category_id }) => category_id)
    );

    this.categories = constitutionOverview.categories.filter(({ id }) =>
      catagoryIdsHavingTopics.has(id)
    );
  },
});
</script>
