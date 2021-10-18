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
    this.$refs.banner.style = `background-image: url("/storage/bg/${this.bg}");`;
  },
};
</script>

<style lang="scss" scoped>
</style>