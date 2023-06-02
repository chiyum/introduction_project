<template>
  <div class="project-detail">
    {{ route.params.id }}
  </div>
</template>

<script>
import { useRoute } from "vue-router";
export default {
  breadcrumb: "pages.project.detail.title",
  setup() {
    const route = useRoute();
    return {
      route,
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/project.scss";
</style>
