<template>
  <div class="about">
    <div class="about-introduction">
      <div class="about-introduction-title"></div>
      <div class="about-introduction-caption"></div>
    </div>
    <div class="about-profile">
      <div class="about-profile-list"></div>
      <div class="about-profile-skill"></div>
    </div>
    <div class="about-experience">
      <div class="about-experience-left left">
        <h1 class="about-experience-title">title</h1>
        <ul class="about-experience-list">
          <li></li>
        </ul>
      </div>
      <div class="about-experience-right right">
        <h1 class="about-experience-title">title</h1>
        <ul class="about-experience-list">
          <li></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { useI18n } from "@/hooks/use-i18n";
import { reactive } from "vue";
export default {
  breadcrumb: "pages.about.title",
  setup() {
    const { t, setPrefix } = useI18n();
    setPrefix({
      $home: "pages.home",
      $about: "pages.about",
    });
    const profile = reactive({
      name: t("$home.name"),
    });
    return {
      profile,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/about.scss";
</style>
