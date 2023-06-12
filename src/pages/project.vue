<template>
  <div class="project animate__animated animate__slow animate__fadeIn">
    <div class="project-title">
      {{ t("$current.introduction") }}
    </div>
    <ul class="project-list">
      <li class="project-list-item" v-for="item in list" :key="item.title">
        <img
          v-lazy="{
            src: item.img,
            loading: loading,
          }"
          :alt="item.title"
        />
        <div class="project-list-item-caption">
          {{ item.title }}
        </div>
        <!-- <div class="project-list-item-caption">
          <span>{{ t("$current.list.view") }}</span>
          <lord-icon
            src="https://cdn.lordicon.com/msoeawqm.json"
            trigger="loop"
            colors="primary:#ffffff,secondary:#eb6dff"
            style="width: 1.5rem; height: 1.5rem"
          >
          </lord-icon>
        </div> -->
        <a :href="item.url" v-if="item.url !== ''" target="_blank"></a>
        <router-link
          :to="{
            path: '/project/' + item.articleType,
          }"
          v-else-if="item.isArticle"
        ></router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import loading from "@/assets/images/loading.gif";
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
        url: "",
        isArticle: true,
        articleType: "ant",
      },
      {
        title: t("$current.list.title.3"),
        img: getImageUrl("portfolio/vivi.png"),
        url: "",
        isArticle: true,
        articleType: "vivi",
      },
      {
        title: t("$current.list.title.2"),
        img: getImageUrl("portfolio/electricity.png"),
        url: "https://chiyum.github.io/electricity/",
        isArticle: false,
      },
      {
        title: t("$current.list.title.4"),
        img: getImageUrl("portfolio/dog.png"),
        url: "https://chiyum.github.io/holdkibor/data/jay/index.html#/home",
        isArticle: false,
      },
      {
        title: t("$current.list.title.5"),
        img: getImageUrl("portfolio/u.png"),
        url: "https://chiyum.github.io/restaurant/index.html",
        isArticle: false,
      },
      {
        title: t("$current.list.title.6"),
        img: getImageUrl("portfolio/blog.png"),
        url: "https://chiyum.github.io/holdkibor/data/webtree/index.html",
        isArticle: false,
      },
    ]);
    return {
      t,
      list,
      loading,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/project.scss";
</style>
