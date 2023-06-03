<template>
  <div class="project-detail">
    <!-- {{ route.params.id }} -->
    <Article
      v-for="(item, index) in msg"
      :key="`article-${index}`"
      :text="item.text"
      :img="item?.img"
      :id="index"
      :keyword="item?.keyword ?? []"
    ></Article>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import Article from "@/widgets/pages/article";
import { articles } from "@/pages/project/constants";
import { computed } from "vue";
export default {
  breadcrumb: "pages.project.detail.title",
  components: {
    Article,
  },
  setup() {
    const route = useRoute();
    console.log(route.params.id);
    const msg = computed(() => articles[route.params.id]);
    return {
      msg,
      route,
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/project.scss";
</style>
