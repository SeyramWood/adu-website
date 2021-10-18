<template>
  <ul :class="[getParentLinkClass]">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: "Slinks",
  props: {
    type: {
      type: String,
      default: "",
    },
  },
  computed: {
    getParentLinkClass() {
      switch (this.type) {
        case "article":
          return "article__links";
        default:
          return "banner__links";
      }
    },
    getChildLinkClass() {
      switch (this.type) {
        case "article":
          return "article__link";
        default:
          return "banner__link";
      }
    },
  },
  provide() {
    return {
      linkClass: this.getChildLinkClass,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>