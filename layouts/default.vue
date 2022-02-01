<template>
  <div class="min-h-screen flex flex-col">
    <Navbar />
    <Nuxt class="flex-1" />
    <WvFooter dark />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import WvFooter from '@wevisdemo/ui/components/footer.vue';

export default Vue.extend({
  components: {
    WvFooter,
  },
  data() {
    return {
      showStagingBanner: false,
    };
  },
  mounted() {
    this.showStagingBanner = window.location.hostname.includes('github');
  },
});
</script>
