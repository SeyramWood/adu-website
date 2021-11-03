<template>
  <div class="banner" ref="banner">
    <div class="banner__cta">
      <div class="banner__cta__content">
        <h1 class="banner__cta__content__title">{{ title }}</h1>
        <article class="banner__cta__content__article">
          <slot name="description"></slot>
        </article>
      </div>
      <div class="banner__cta__links">
        <slot name="links"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  props: {
    bg: {
      type: String,
      require: true,
    },
    title: {
      type: String,
      require: true,
    },
  },
  mounted() {
    this.$refs.banner.style = `background-image:linear-gradient(
                to right,
                rgba(38, 38, 38, 0.8),
                rgba(38, 38, 38, 0.766),
                rgba(38, 38, 38, 0.766),
                rgba(38, 38, 38, 0.99)
            ), url("/storage/bg/${this.bg}");`;
  },
};
</script>

<style lang="scss" scoped>
</style>