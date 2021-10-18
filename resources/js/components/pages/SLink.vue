<template>
  <li :class="[linkClass]">
    <Link :href="href" v-smooth-scroll v-if="linkClass === 'banner__link'"
      ><slot></slot
    ></Link>
    <Link :href="href" v-else><slot></slot></Link>
  </li>
</template>

<script>
import { Link } from "@inertiajs/inertia-vue";
export default {
  name: "Slink",
  components: {
    Link,
  },
  props: {
    href: {
      require: true,
      type: String,
    },
  },
  inject: ["linkClass"],
};
</script>

<style lang="scss" scoped>
</style>