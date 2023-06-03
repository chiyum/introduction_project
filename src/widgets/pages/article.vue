<template>
  <div class="article" :class="{ 'had-img': img !== '' }">
    <div class="article-text">{{ text }}</div>
    <img v-if="img !== ''" class="article-img" :src="img" alt="" />
  </div>
</template>

<script setup>
defineProps({
  img: {
    type: String,
    default: "",
  },
  text: String,
});
</script>

<style lang="scss" scoped>
.article {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  &-img {
    position: relative;
    z-index: 1;
    background: var(--darkpurple);
    max-height: 20rem;
    object-fit: cover;
  }
  &-text {
    position: relative;
    white-space: pre-wrap;
  }
  &.had-img {
    margin-bottom: 3rem;
    .article-img,
    .article-text {
      width: 50%;
    }
    .article-text {
      display: flex;
      //   align-items: center;
      justify-content: center;
      padding: 2rem 0rem 0;
      padding-right: 1rem;
    }
  }
}
@media (max-width: 720px) {
  .article {
    &.had-img {
      flex-direction: column-reverse;
      .article-img,
      .article-text {
        width: 100%;
      }
    }
  }
}
</style>
