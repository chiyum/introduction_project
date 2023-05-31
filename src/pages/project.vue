<template>
  <div class="contact">
    {{ profile.name }}
  </div>
</template>

<script>
import { useI18n } from "@/hooks/use-i18n";
import { reactive } from "vue";
export default {
  breadcrumb: "pages.project.title",
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
