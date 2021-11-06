<template>
  <div class="page">
    <nav class="page__header__top">
      <div class="page__header__top__brand">
        <Link href="/">African Development Universalis</Link>
      </div>
      <ul class="page__header__top__navigation">
        <li class="page__header__top__navigation__link">
          <a
            href="https://ilimi.edu.ne/my-ilimi"
            target="_blank"
            rel="noopener noreferrer"
            >My Ilimi</a
          >
        </li>
        <li class="page__header__top__navigation__link">
          <Link href="#">Donate</Link>
        </li>
        <li class="page__header__top__navigation__link">
          <a
            href="https://applications.eduappgh.com"
            class="button"
            target="_blank"
            rel="noopener noreferrer"
            >Apply</a
          >
        </li>
      </ul>
    </nav>
    <nav class="page__header__main" ref="mainNav">
      <div :class="['page__header__logo', getLogoClass]">
        <img src="/storage/logo.png" alt="A.D.U LOGO" srcset="" />
      </div>
      <div class="page__header__main__left">
        <ul class="page__header__main__navigation">
          <li
            :class="[
              'page__header__main__navigation__link',
              route().current('about') && 'active',
            ]"
          >
            <Link href="/about">About</Link>
          </li>
          <li
            :class="[
              'page__header__main__navigation__link',
              route().current('admissions') && 'active',
            ]"
          >
            <Link href="/admissions">Admissions</Link>
          </li>
          <li
            :class="[
              'page__header__main__navigation__link',
              route().current('academics') && 'active',
            ]"
          >
            <Link href="/academics">Academics</Link>
          </li>
        </ul>
      </div>
      <div class="page__header__main__right">
        <ul class="page__header__main__navigation">
          <li
            :class="[
              'page__header__main__navigation__link',
              route().current('iilab*') && 'active',
            ]"
          >
            <Link href="/iilab">IILab</Link>
          </li>
          <li
            :class="[
              'page__header__main__navigation__link',
              route().current('studentLife*') && 'active',
            ]"
          >
            <Link href="/student-life">Student Life</Link>
          </li>
          <li
            :class="[
              'page__header__main__navigation__link',
              route().current('gallery') && 'active',
            ]"
          >
            <Link href="/gallery">Gallery</Link>
          </li>
        </ul>
      </div>
    </nav>
    <nav class="page__mobile__nav">
      <div class="page__mobile__nav__content">
        <div class="page__mobile__nav__content__brand">
          <div class="logo">
            <Link href="/">
              <img src="/storage/logo-2.png" alt="A.D.U LOGO" srcset="" />
            </Link>
          </div>
          <Link href="#" as="button">Apply</Link>
        </div>
        <div
          class="page__mobile__nav__content__icon"
          role="button"
          @click="toggleMobileNav = !toggleMobileNav"
        >
          <span :class="['menu', toggleMobileNav && 'active']"></span>
        </div>
      </div>
    </nav>
    <section :class="['page__mobile__drawer']" v-show="toggleMobileNav">
      <div
        :class="['page__mobile__drawer__content', toggleMobileNav && 'open']"
      >
        <ul class="mobile__navigation">
          <li
            :class="[
              'mobile__navigation__link',
              route().current('about') && 'active',
            ]"
          >
            <Link href="/about">About</Link>
          </li>
          <li
            :class="[
              'mobile__navigation__link',
              route().current('admissions') && 'active',
            ]"
          >
            <Link href="/admissions">Admissions</Link>
          </li>
          <li
            :class="[
              'mobile__navigation__link',
              route().current('academics') && 'active',
            ]"
          >
            <Link href="/academics">Academics</Link>
          </li>
          <li class="mobile__navigation__link">
            <Link href="#">My Ilimi</Link>
          </li>
          <li class="mobile__navigation__link">
            <Link href="#">Donate</Link>
          </li>
        </ul>
      </div>
    </section>
    <main class="page__main">
      <slot></slot>
    </main>
    <section class="page__footer__social">
      <div class="page__footer__social__line"></div>
      <div class="page__footer__social__icons">
        <v-icon>mdi-facebook</v-icon>
        <v-icon>mdi-twitter</v-icon>
        <v-icon>mdi-whatsapp</v-icon>
        <v-icon>mdi-instagram</v-icon>
        <v-icon>mdi-snpchat</v-icon>
      </div>
      <div class="page__footer__social__line"></div>
    </section>
    <footer class="page__footer">
      <!-- <section class="page__footer__top">
        <div class="s__row">
          <div class="s__col c--3">
            <div class="page__footer__top__content">
              <h3 class="page__footer__top__content__header">About A.D.U</h3>
              <ul class="page__footer__top__content__links">
                <li class="page__footer__top__content__links__link">
                  <Link href="#">A.D.U at a Glance</Link>
                </li>
                <li class="page__footer__top__content__links__link">
                  <Link href="#">A.D.U at a Glance</Link>
                </li>
                <li class="page__footer__top__content__links__link">
                  <Link href="#">A.D.U at a Glance</Link>
                </li>
              </ul>
            </div>
            <div class="page__footer__top__content">
              <h3 class="page__footer__top__content__header">Global Scope</h3>
              <ul class="page__footer__top__content__links">
                <li class="page__footer__top__content__links__link">
                  <Link href="#">A.D.U at a Glance</Link>
                </li>
                <li class="page__footer__top__content__links__link">
                  <Link href="#">A.D.U at a Glance</Link>
                </li>
                <li class="page__footer__top__content__links__link">
                  <Link href="#">A.D.U at a Glance</Link>
                </li>
              </ul>
            </div>
          </div>
          <div class="s__col c--3">
            <div class="page__footer__top__content">
              <h3 class="page__footer__top__content__header">Admissions</h3>
              <ul class="page__footer__top__content__links">
                <li class="page__footer__top__content__links__link">
                  <Link href="#">A.D.U at a Glance</Link>
                </li>
                <li class="page__footer__top__content__links__link">
                  <Link href="#">A.D.U at a Glance</Link>
                </li>
                <li class="page__footer__top__content__links__link">
                  <Link href="#">A.D.U at a Glance</Link>
                </li>
              </ul>
            </div>
          </div>
          <div class="s__col c--3">
            <div class="page__footer__top__content">
              <h3 class="page__footer__top__content__header">
                Academics Resources
              </h3>
              <ul class="page__footer__top__content__links">
                <li class="page__footer__top__content__links__link">
                  <Link href="#">A.D.U at a Glance</Link>
                </li>
                <li class="page__footer__top__content__links__link">
                  <Link href="#">A.D.U at a Glance</Link>
                </li>
                <li class="page__footer__top__content__links__link">
                  <Link href="#">A.D.U at a Glance</Link>
                </li>
              </ul>
            </div>
            <div class="page__footer__top__content">
              <h3 class="page__footer__top__content__header">
                Services/Resources
              </h3>
              <ul class="page__footer__top__content__links">
                <li class="page__footer__top__content__links__link">
                  <Link href="#">A.D.U at a Glance</Link>
                </li>
                <li class="page__footer__top__content__links__link">
                  <Link href="#">A.D.U at a Glance</Link>
                </li>
                <li class="page__footer__top__content__links__link">
                  <Link href="#">A.D.U at a Glance</Link>
                </li>
              </ul>
            </div>
          </div>
          <div class="s__col c--3">
            <div class="page__footer__top__right">
              <ul class="page__footer__top__right__links">
                <li class="page__footer__top__right__links__link">
                  <Link href="#">A.D.U at a Glance</Link>
                </li>
                <li class="page__footer__top__right__links__link">
                  <Link href="#">A.D.U at a Glance</Link>
                </li>
                <li class="page__footer__top__right__links__link">
                  <Link href="#">A.D.U at a Glance</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <section class="page__footer__top__social">
          <div class="page__footer__top__social__line"></div>
          <div class="page__footer__top__social__icons">
            <v-icon>mdi-facebook</v-icon>
            <v-icon>mdi-twitter</v-icon>
            <v-icon>mdi-whatsapp</v-icon>
            <v-icon>mdi-instagram</v-icon>
            <v-icon>mdi-snpchat</v-icon>
          </div>
          <div class="page__footer__top__social__line"></div>
        </section>
      </section> -->
      <section class="page__footer__bottom">
        <div class="page__footer__bottom__brand">
          <div class="logo">
            <img src="/storage/logo-1.png" alt="A.D.U LOGO" srcset="" />
          </div>
        </div>
        <div class="page__footer__bottom__links">
          <ul class="">
            <li class="page__footer__bottom__links__link">
              <Link href="#"
                >A.D.U at a GlanceADU at a GlanceADU at a Glance</Link
              >
            </li>
            <li class="page__footer__bottom__links__link">
              <Link href="#">A.D.U at a Glance</Link>
            </li>
            <li class="page__footer__bottom__links__link">
              <Link href="#">A.D.U at a Glance</Link>
            </li>
          </ul>
        </div>
        <div class="page__footer__bottom__links">
          <ul class="">
            <li class="page__footer__bottom__links__link">
              <Link href="#"
                >A.D.U at a Glance A.D.U at a Glance A.D.U at a Glance</Link
              >
            </li>
            <li class="page__footer__bottom__links__link">
              <Link href="#">A.D.U at a Glance</Link>
            </li>
            <li class="page__footer__bottom__links__link">
              <Link href="#">A.D.U at a Glance</Link>
            </li>
          </ul>
        </div>
        <div class="page__footer__bottom__links">
          <ul class="">
            <li class="page__footer__bottom__links__link">
              <Link href="#"
                >A.D.U at a GlanceADU at a GlanceADU at a Glance</Link
              >
            </li>
            <li class="page__footer__bottom__links__link">
              <Link href="#">A.D.U at a Glance</Link>
            </li>
            <li class="page__footer__bottom__links__link">
              <Link href="#">A.D.U at a Glance</Link>
            </li>
          </ul>
        </div>
      </section>
      <section class="page__footer__copyright">
        <span
          >&copy;{{ new Date().getUTCFullYear() }} A.D.U, All Right
          Reserved</span
        >
      </section>
    </footer>
  </div>
</template>

<script>
import { Link } from "@inertiajs/inertia-vue";
export default {
  name: "FrontEndLayout",
  components: {
    Link,
  },
  computed: {
    getLogoClass() {
      return this.logoClass;
    },
  },
  mounted() {
    const el = this.$refs.mainNav;
    window.addEventListener("scroll", () => {
      if (el.getBoundingClientRect().top === 0) {
        this.logoClass = "small";
      } else {
        this.logoClass = "big";
      }
    });
  },
  data() {
    return {
      logoClass: "big",
      toggleMobileNav: false,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>