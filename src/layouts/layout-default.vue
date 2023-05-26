<template>
  <div class="layout-default-nav">
    <div
      class="layout-default-nav-logo"
      :class="{ 'layout-default-nav-logo--jump': isAnimation }"
      @mouseenter="logoAnimation"
    >
      <svg class="layout-default-nav-logo-brackets left">
        <line
          x1="0"
          y1="0"
          x2="0"
          y2="30"
          style="stroke: var(--orange); stroke-width: 8"
        />
        <line
          x1="0"
          y1="0"
          x2="30"
          y2="0"
          style="stroke: var(--orange); stroke-width: 8"
        />
      </svg>
      <!-- <img
        src="@/assets/images/banner/api_placeholder_boardgame_single.png"
        alt=""
      /> -->
      <div class="layout-default-nav-logo-font">
        <h1>G</h1>
        <h3>eorge</h3>
      </div>
      <svg class="layout-default-nav-logo-brackets right">
        <line
          x1="50"
          y1="50"
          x2="20"
          y2="50"
          style="stroke: var(--orange); stroke-width: 8"
        />
        <line
          x1="50"
          y1="20"
          x2="50"
          y2="50"
          style="stroke: var(--orange); stroke-width: 8"
        />
      </svg>
    </div>
    <ul class="layout-default-nav-list">
      <li
        class="layout-default-nav-list-item"
        v-for="item in navs"
        :key="item.text"
      >
        <ion-icon
          :name="item.icon"
          class="layout-default-nav-list-item-icon"
        ></ion-icon>
        <span>{{ item.text }}</span>
        <router-link :to="item.link"></router-link>
      </li>
    </ul>
    <div class="layout-default-nav-actions">
      <ion-icon
        class="layout-default-nav-actions-icon"
        name="settings"
      ></ion-icon>
      <div>{{ t("$nav.lang") }}</div>
    </div>
  </div>
  <div class="layout-default-main">
    <slot />
  </div>
</template>

<script>
import { useI18n } from "@/hooks/use-i18n";
import { ref } from "vue";

export default {
  setup() {
    const { t, setPrefix } = useI18n();
    setPrefix({
      $nav: "app.nav",
    });
    const navs = [
      {
        text: t("$nav.home"),
        icon: "home",
        link: "/home",
      },
      {
        text: t("$nav.about"),
        icon: "person",
        link: "/about",
      },
      {
        text: t("$nav.project"),
        icon: "document",
        link: "/project",
      },
      {
        text: t("$nav.contact"),
        icon: "chatbubbles",
        link: "/contact",
      },
    ];
    const isAnimation = ref(false);
    const logoAnimation = () => {
      /* 執行中則不觸發 依照動畫執行速度在動畫結束後取消calss */
      console.log("觸發");
      if (isAnimation.value) return;
      isAnimation.value = true;
      setTimeout(() => {
        isAnimation.value = false;
      }, 3000);
    };
    return {
      t,
      logoAnimation,
      navs,
      isAnimation,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/mixin.scss";
.layout-default {
  &-nav {
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 0 0 3rem;
    width: 350px;
    height: 100%;
    background: var(--grey);
    color: #fff;
    cursor: default;
    &-logo {
      position: relative;
      margin: 3rem 0rem 0;
      width: 220px;
      letter-spacing: 2.2px;
      &-brackets {
        position: absolute;
        width: 50px;
        height: 50px;
        &.left {
          top: 0;
          left: 0;
        }
        &.right {
          bottom: 0;
          right: 0;
        }
      }
      &-font {
        @include flex-center-center;
        color: #fff;
        height: 7rem;
        font-family: Comic Sans MS;
        h1 {
          font-size: 3rem;
        }
        h3 {
          font-size: 2rem;
        }
      }
      &--jump {
        h1 {
          animation-name: jump;
          animation-duration: 3s;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
        }
      }
    }
    &-list {
      display: flex;
      flex-direction: column;
      // align-items: center;
      font-size: 1.3rem;
      letter-spacing: 2.2px;
      &-item {
        @include flex-row-center;
        position: relative;
        justify-content: flex-start;
        padding: 0.2rem 1.5rem;
        margin: 0.5rem 0;
        font-weight: 400;
        border-bottom: 1px solid #444444;
        cursor: pointer;
        transition: color 0.3s;
        &-icon {
          font-size: 1.2rem;
          margin-right: 1.5rem;
        }
        a {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }
        &:hover {
          color: var(--orange);
        }
      }
    }
    &-actions {
      @include flex-row-center;
      cursor: pointer;
      &-icon {
        font-size: 1.2rem;
        margin-right: 0.5rem;
      }
      &:hover {
        color: var(--orange);
      }
    }
  }
  &-main {
    margin-left: 350px;
    width: calc(100% - 350px);
  }
}
@keyframes jump {
  from,
  20%,
  53%,
  80%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    -webkit-transform: translate3d(0, -30px, 0);
    transform: translate3d(0, -30px, 0);
  }

  70% {
    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    -webkit-transform: translate3d(0, -15px, 0);
    transform: translate3d(0, -15px, 0);
  }

  90% {
    -webkit-transform: translate3d(0, -4px, 0);
    transform: translate3d(0, -4px, 0);
  }
}
</style>
