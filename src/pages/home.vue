<template>
  <div class="home">
    <div class="home-left">
      <div class="home-left-title">
        {{ t("$current.self.name") }}
        <span class="keyword--purple">{{ t("$current.name") }}</span>
      </div>
      <div class="home-left-typing">
        {{ t("$current.self.profession") }}
        <span class="keyword--purple">
          <TextTyping :to-rotate="[t('$current.self.profession.color')]" />
        </span>
      </div>
      <div class="home-left-caption">{{ t("$current.self.caption") }}</div>
      <div class="home-left-btn btn">
        {{ t("$current.self.read") }}
        <router-link to="/about"></router-link>
      </div>
    </div>
    <div class="home-right">
      <div class="home-right-img">
        <img
          src="https://qoopio.com/wp-content/uploads/2020/05/%E5%BD%A2%E8%B1%A1%E7%85%A7jpg.jpg"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import { useI18n } from "@/hooks/use-i18n";
import TextTyping from "@/widgets/text-typing.vue";
const { t, setPrefix } = useI18n();
setPrefix({
  $current: "pages.home",
});
</script>
<style lang="scss">
@import "@/assets/scss/home.scss";
</style>
