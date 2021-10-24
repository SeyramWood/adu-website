<template>
  <div :class="['article', ltr && 'ltr']">
    <div class="article__content">
      <h1 class="article__content__title">{{ title }}</h1>

      <section class="article__content__video" v-if="video">
        <slot name="video"></slot>
      </section>

      <article class="article__content__body">
        <slot name="article"></slot>
      </article>

      <section class="article__content__leadership">
        <slot name="leadership"></slot>
      </section>

      <section class="article__content__links">
        <div class="article__content__links__left">
          <slot name="links"></slot>
        </div>
        <div class="article__content__links__right">
          <slot name="linksRight"></slot>
        </div>
      </section>

      <div class="article__content__btn" v-if="btn">
        <Link>
          {{ btnText }}
        </Link>
      </div>
    </div>
    <div class="article__image">
      <div class="image">
        <img :src="`/storage/bg/${image}`" alt="article image" srcset="" />
      </div>
    </div>
  </div>
</template>

<script>
import { Link } from "@inertiajs/inertia-vue";
export default {
  name: "PageArticle",
  components: {
    Link,
  },
  props: {
    image: {
      type: String,
      require: true,
    },
    title: {
      type: String,
      require: true,
    },
    btn: {
      type: Boolean,
      default: false,
    },
    btnText: {
      type: String,
      require: true,
      default: "button",
    },
    ltr: {
      type: Boolean,
      default: false,
    },
    video: {
      type: Boolean,
      default: false,
    },
  },

  mounted() {},
};
</script>

<style lang="scss" scoped>
.article {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  &__content {
    padding-right: 10rem;
  }
  &.ltr {
    flex-direction: row-reverse;
    & > .article__content {
      padding-right: 0;
    }
    & > .article__image {
      padding-right: 10rem;
    }
  }
}
</style>