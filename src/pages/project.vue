<template>
  <div class="project">
    <div class="project-title">
      {{ t("$current.introduction") }}
    </div>
    <ul class="project-list">
      <li class="project-list-item" v-for="item in list" :key="item.title">
        <img :src="item.img" :alt="item.title" />
        <div class="project-list-item-caption">read more</div>
      </li>
    </ul>
  </div>
</template>

<script>
import { useI18n } from "@/hooks/use-i18n";
import { ref } from "vue";
import { getImageUrl } from "@/tool";
export default {
  breadcrumb: "pages.project.title",
  setup() {
    const { t, setPrefix } = useI18n();
    setPrefix({
      $current: "pages.project",
    });
    const list = ref([
      {
        title: t("$current.list.title.1"),
        img: getImageUrl("portfolio/ant.png"),
        caption: "test text",
        url: "",
        isArticle: false,
      },
      {
        title: t("$current.list.title.1"),
        img: getImageUrl("portfolio/electricity.png"),
        caption: "test text",
        url: "",
        isArticle: false,
      },
      {
        title: t("$current.list.title.1"),
        img: getImageUrl("portfolio/vivi.png"),
        caption: "test text",
        url: "",
        isArticle: false,
      },
      {
        title: t("$current.list.title.1"),
        img: getImageUrl("portfolio/dog.png"),
        caption: "test text",
        url: "",
        isArticle: false,
      },
      {
        title: t("$current.list.title.1"),
        img: getImageUrl("portfolio/vivi.png"),
        caption: "test text",
        url: "",
        isArticle: false,
      },
      {
        title: t("$current.list.title.1"),
        img: getImageUrl("portfolio/blog.png"),
        caption: "test text",
        url: "",
        isArticle: false,
      },
    ]);
    return {
      t,
      list,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/project.scss";
</style>
