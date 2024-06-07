<template>
  <div class="about animate__animated animate__slow animate__fadeIn">
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
          <li
            v-for="item in profile.personal"
            :key="item.label"
            :class="{ '--point': item.link }"
          >
            <p class="about-profile-list-label">{{ item.label }}</p>
            <p class="about-profile-list-text">{{ item.text }}</p>
            <a v-if="item.link !== ''" :href="item.link" target="_blank"></a>
          </li>
        </ul>
        <div class="about-profile-list-actions">
          <button type="button" class="btn" @click="download">
            {{ t("button.download") }}
          </button>
          <button type="button" class="btn" @click="mailLink">
            {{ t("button.contact") }}
          </button>
        </div>
      </div>
      <div class="about-profile-skill">
        <div
          class="about-profile-skill-item"
          v-for="item in profile.skill"
          :key="item.name"
        >
          <div class="about-profile-skill-item-label">
            <p>{{ item.name }}</p>
            <p>{{ item.percent }}%</p>
          </div>
          <div class="about-profile-skill-item-progress">
            <div
              class="about-profile-skill-item-progress-bar"
              :style="{ width: `${item.percent}%` }"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <div class="about-experience">
      <div class="about-experience-block left">
        <h1 class="about-experience-block-title">
          {{ t("$about.experience.education") }}
        </h1>
        <ul class="about-experience-block-list">
          <li v-for="(item, index) in profile.education" :key="item">
            <div class="about-experience-block-list-graphics">
              <span class="about-experience-block-list-graphics-circle"></span>
              <span class="about-experience-block-list-graphics-line"></span>
            </div>
            <div class="about-experience-block-list-data">
              <div class="about-experience-block-list-data-date">
                <ion-icon name="calendar-clear"></ion-icon>
                <span>{{ item.date }}</span>
              </div>
              <div class="about-experience-block-list-data-title">
                {{ item.place }}
              </div>
              <div
                class="about-experience-block-list-data-caption"
                :class="{
                  'about-experience-block-list-data-caption--last':
                    index === profile.experience.length - 1,
                }"
              >
                {{ item.caption }}
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="about-experience-block right">
        <h1 class="about-experience-block-title">
          {{ t("$about.experience.experience") }}
        </h1>
        <ul class="about-experience-block-list">
          <li v-for="(item, index) in profile.experience" :key="item">
            <div class="about-experience-block-list-graphics">
              <span class="about-experience-block-list-graphics-circle"></span>
              <span class="about-experience-block-list-graphics-line"></span>
            </div>
            <div class="about-experience-block-list-data">
              <div class="about-experience-block-list-data-date">
                <ion-icon name="calendar-clear"></ion-icon>
                <span>{{ item.date }}</span>
              </div>
              <div class="about-experience-block-list-data-title">
                {{ item.place }}
              </div>
              <div
                class="about-experience-block-list-data-caption"
                :class="{
                  'about-experience-block-list-data-caption--last':
                    index === profile.experience.length - 1,
                }"
              >
                {{ item.caption }}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { useI18n } from "@/hooks/use-i18n";
import { reactive } from "vue";
import { openUrl } from "@/tool";
import cv from "@/assets/resume.pdf";
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
          link: "",
        },
        {
          label: t("$in.label.age"),
          text: "26",
          link: "",
        },
        {
          label: t("$in.label.web"),
          text: "https://github.com/chiyum/chiyum",
          link: "https://github.com/chiyum/chiyum",
        },
        {
          label: t("$in.label.mail"),
          text: "pray870712@gmail.com",
          link: "mailto: pray870712@gmail.com",
        },
        {
          label: t("$in.label.phone"),
          text: "0975-698910",
          link: "tel:+886-975-698910",
        },
        {
          label: t("$in.label.city"),
          text: t("$in.label.city.answer"),
          link: "",
        },
      ],
      skill: [
        {
          name: "Vue",
          percent: 95,
        },
        {
          name: "React",
          percent: 80,
        },
        {
          name: "TS",
          percent: 80,
        },
        {
          name: "Node.JS",
          percent: 70,
        },
      ],
      experience: [
        {
          date: "2024 - now",
          place: t("$about.experience.experience.title.5"),
          caption: t("$about.experience.experience.caption.5"),
        },
        {
          date: "2023 - 2024",
          place: t("$about.experience.experience.title.4"),
          caption: t("$about.experience.experience.caption.4"),
        },
        {
          date: "2022 - 2023",
          place: t("$about.experience.experience.title.1"),
          caption: t("$about.experience.experience.caption.1"),
        },
        {
          date: "2021 - 2022",
          place: t("$about.experience.experience.title.2"),
          caption: t("$about.experience.experience.caption.2"),
        },
        {
          date: "2014 - 2021",
          place: t("$about.experience.experience.title.3"),
          caption: t("$about.experience.experience.caption.3"),
        },
      ],
      education: [
        {
          date: "2020",
          place: t("$about.experience.education.title.1"),
          caption: t("$about.experience.education.caption.1"),
        },
        {
          date: "2014 - 2016",
          place: t("$about.experience.education.title.2"),
          caption: t("$about.experience.education.caption.2"),
        },
        {
          date: "2011 - 2014",
          place: t("$about.experience.education.title.3"),
          caption: t("$about.experience.education.caption.3"),
        },
      ],
    });

    const download = () => {
      openUrl(cv, { isDownload: true });
    };

    const mailLink = () => {
      openUrl("mailto: pray870712@gmail.com", { isBlank: true });
    };

    return {
      t,
      download,
      mailLink,
      profile,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/about.scss";
</style>
