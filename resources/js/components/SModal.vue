<template>
  <transition name="modal-fade">
    <div class="modal-backdrop" v-show="value">
      <div
        class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
        :style="`${width && `width:${width};`}`"
      >
        <header class="modal-header">
          <button type="button" class="btn-close" @click="close">
            <span>&times;</span>
          </button>
        </header>
        <section class="modal-body">
          <slot> </slot>
        </section>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "SModal",
  props: ["value", "width"],
  created() {
    this.$watch(
      () => this.value,
      (status) => {
        if (status) {
          const scrollY =
            document.documentElement.style.getPropertyValue("--scroll-y");
          document.body.style.position = "fixed";
          document.body.style.top = `-${scrollY}`;
        } else {
          const scrollY = document.body.style.top;
          document.body.style.position = "";
          document.body.style.top = "";
          window.scrollTo(0, parseInt(scrollY || "0") * -1);
        }
      }
    );
    window.addEventListener("scroll", () => {
      document.documentElement.style.setProperty(
        "--scroll-y",
        `${window.scrollY}px`
      );
    });
  },
  methods: {
    close() {
      this.$emit("input", !this.value);
    },
    data() {
      return {};
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-backdrop {
  position: fixed;
  z-index: 9999;
  overflow-x: hidden;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.534);
}

.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  border-radius: 5px;
  margin: 3rem auto;
  width: 600px;
}

.modal-header {
}

.modal-header {
  width: 100%;
  padding: 0.5rem;
  display: flex;
  justify-content: flex-end;
  border-bottom: 1px solid #eeeeee;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.btn-close {
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  font-weight: bold;
  color: #99001c;
  background: transparent;
  border-radius: 99999px;
  transition: all 0.2s ease-in;
  &:hover {
    background: #99001c;
    color: #ffffff;
  }
}

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.2s ease-in;
}
</style>