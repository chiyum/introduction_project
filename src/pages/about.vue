<template>
  <div class="about">
    {{ profile.name }}
  </div>
</template>

<script setup>
import { useI18n } from "@/hooks/use-i18n";
import { reactive } from "vue";
const { t, setPrefix } = useI18n();
setPrefix({
  $home: "pages.home",
  $about: "pages.about",
});
const profile = reactive({
  name: t("$home.name"),
});
</script>
