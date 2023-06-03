<template>
  <div class="project-detail">
    <!-- {{ route.params.id }} -->
    <Article
      v-for="(item, index) in msg"
      :key="`article-${index}`"
      :text="item.text"
      :img="item?.img"
    ></Article>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import Article from "@/widgets/pages/article";
export default {
  breadcrumb: "pages.project.detail.title",
  components: {
    Article,
  },
  setup() {
    const route = useRoute();
    const msg = [
      {
        img: "https://themewagon.com/wp-content/uploads/2020/10/EcoHosting.png",
        text:
          "民進黨主席、副總統賴清德今天（6/03）上午針對民進黨的性平事件，再度向受害者與台灣社會致歉，同時也感謝受害者勇敢站出來。賴清德表示，面對職場霸凌以及性平事件，絕對不必要「大局為重」。他強調，性平是民進黨的價值，也長期與社會各界一起努力，民進黨不會退卻，嚴肅的面對每一個性平案件，不會因為考量到因為選舉的因素，而有任何改變。",
      },
      {
        text:
          "民進黨主席、副總統賴清德今天（6/03）上午針對民進黨的性平事件，再度向受害者與台灣社會致歉，同時也感謝受害者勇敢站出來。賴清德表示，面對職場霸凌以及性平事件，絕對不必要「大局為重」。他強調，性平是民進黨的價值，也長期與社會各界一起努力，民進黨不會退卻，嚴肅的面對每一個性平案件，不會因為考量到因為選舉的因素，而有任何改變。",
      },
      {
        text:
          "民進黨主席、副總統賴清德今天（6/03）上午針對民進黨的性平事件，再度向受害者與台灣社會致歉，同時也感謝受害者勇敢站出來。賴清德表示，面對職場霸凌以及性平事件，絕對不必要「大局為重」。他強調，性平是民進黨的價值，也長期與社會各界一起努力，民進黨不會退卻，嚴肅的面對每一個性平案件，不會因為考量到因為選舉的因素，而有任何改變。",
      },
    ];
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
