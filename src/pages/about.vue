<template>
  <div class="about">
    <div class="about-introduction">
      <div class="about-introduction-title">
        {{ t("$in.title")
        }}<span style="color: var(--purple)">{{ t("$in.title.2") }}</span>
      </div>
      <div class="about-introduction-caption">{{ t("$in.caption") }}</div>
    </div>
    <div class="about-profile">
      <div class="about-profile-list">
        <ul>
          <li v-for="item in profile.personal" :key="item.label">
            <p class="about-profile-list-label">{{ item.label }}</p>
            <p class="about-profile-list-text">{{ item.text }}</p>
          </li>
        </ul>
        <div class="about-profile-list-actions">
          <button type="button" class="btn">{{ t("button.download") }}</button>
          <button type="button" class="btn">{{ t("button.contact") }}</button>
        </div>
      </div>
      <div class="about-profile-skill"></div>
    </div>
    <div class="about-experience">
      <div class="about-experience-left left">
        <h1 class="about-experience-title"></h1>
        <ul class="about-experience-list">
          <li></li>
        </ul>
      </div>
      <div class="about-experience-right right">
        <h1 class="about-experience-title"></h1>
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
      $in: "pages.about.introduce",
    });
    const profile = reactive({
      name: t("$home.name"),
      personal: [
        {
          label: t("$in.label.birthday"),
          text: "1998-09-02",
        },
        {
          label: t("$in.label.age"),
          text: "24",
        },
        {
          label: t("$in.label.web"),
          text: "https://github.com/chiyum/introduction_project",
        },
        {
          label: t("$in.label.mail"),
          text: "pray870712@gmail.com",
        },
        {
          label: t("$in.label.phone"),
          text: "0975-698910",
        },
        {
          label: t("$in.label.city"),
          text: t("$in.label.city.answer"),
        },
      ],
    });
    return {
      t,
      profile,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/about.scss";
</style>
