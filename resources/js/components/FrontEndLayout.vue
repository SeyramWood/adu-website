<template>
  <div class="page">
    <nav class="page__header__top">
      <div class="page__header__top__brand">
        <Link href="/">African Development Universalis</Link>
      </div>
      <ul class="page__header__top__navigation">
        <li class="page__header__top__navigation__link">
          <a
            href=" https://myilimilms.net/moodle"
            target="_blank"
            rel="noopener noreferrer"
            >{{ $t("pages.navigation.8") }}</a
          >
        </li>
        <li class="page__header__top__navigation__link">
          <Link href="/donate">{{ $t("pages.navigation.6") }}</Link>
        </li>
        <li class="page__header__top__navigation__link">
          <a
            href="https://applications.eduappgh.com"
            class="button"
            target="_blank"
            rel="noopener noreferrer"
            >{{ $t("pages.navigation.4") }}</a
          >
        </li>
      </ul>
      <div class="locale-btn" title="Translate">
        <span>
          <!-- <v-icon>mdi-translate</v-icon> -->
          {{ $t("pages.navigation.9") }}
        </span>
        <div class="btns">
          <button type="button" @click="changeLocale('en')">English</button>
          <button type="button" @click="changeLocale('fr')">French</button>
        </div>
      </div>
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
            <Link href="/about">{{ $t("pages.navigation.1") }}</Link>
          </li>
          <li
            :class="[
              'page__header__main__navigation__link',
              route().current('admissions') && 'active',
            ]"
          >
            <Link href="/admissions">{{ $t("pages.navigation.2") }}</Link>
          </li>
          <li
            :class="[
              'page__header__main__navigation__link',
              route().current('academics') && 'active',
            ]"
          >
            <Link href="/academics">{{ $t("pages.navigation.3") }}</Link>
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
            <Link href="/student-life">{{ $t("pages.navigation.7") }}</Link>
          </li>
          <li
            :class="[
              'page__header__main__navigation__link',
              route().current('gallery') && 'active',
            ]"
          >
            <Link href="/gallery">{{ $t("pages.navigation.5") }}</Link>
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
          <div class="locale-btn" title="Translate">
            <span>
              <!-- <v-icon>mdi-translate</v-icon> -->
              {{ $t("pages.navigation.9") }}
            </span>
            <div class="btns">
              <button type="button" @click="changeLocale('en')">English</button>
              <button type="button" @click="changeLocale('fr')">French</button>
            </div>
          </div>
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
            @click="toggleMobileNav = !toggleMobileNav"
          >
            <Link href="/about">{{ $t("pages.navigation.1") }}</Link>
          </li>
          <li
            :class="[
              'mobile__navigation__link',
              route().current('admissions') && 'active',
            ]"
            @click="toggleMobileNav = !toggleMobileNav"
          >
            <Link href="/admissions">{{ $t("pages.navigation.2") }}</Link>
          </li>
          <li
            :class="[
              'mobile__navigation__link',
              route().current('academics') && 'active',
            ]"
            @click="toggleMobileNav = !toggleMobileNav"
          >
            <Link href="/academics">{{ $t("pages.navigation.3") }}</Link>
          </li>
          <li
            :class="[
              'mobile__navigation__link',
              route().current('academics') && 'active',
            ]"
            @click="toggleMobileNav = !toggleMobileNav"
          >
            <Link href="/iilab">IILab</Link>
          </li>
          <li
            :class="[
              'mobile__navigation__link',
              route().current('academics') && 'active',
            ]"
            @click="toggleMobileNav = !toggleMobileNav"
          >
            <Link href="/student-life">{{ $t("pages.navigation.7") }}</Link>
          </li>
          <li
            :class="[
              'mobile__navigation__link',
              route().current('academics') && 'active',
            ]"
            @click="toggleMobileNav = !toggleMobileNav"
          >
            <Link href="/gallery">{{ $t("pages.navigation.5") }}</Link>
          </li>
          <li
            class="mobile__navigation__link"
            @click="toggleMobileNav = !toggleMobileNav"
          >
            <a
              href=" https://myilimilms.net/moodle"
              target="_blank"
              rel="noopener noreferrer"
              >{{ $t("pages.navigation.8") }}</a
            >
          </li>
          <li
            :class="[
              'mobile__navigation__link',
              route().current('academics') && 'active',
            ]"
            @click="toggleMobileNav = !toggleMobileNav"
          >
            <Link href="/donate">{{ $t("pages.navigation.6") }}</Link>
          </li>
          <li
            :class="[
              'mobile__navigation__link button',
              route().current('academics') && 'active',
            ]"
            @click="toggleMobileNav = !toggleMobileNav"
          >
            <a
              href="https://applications.eduappgh.com"
              class="button"
              target="_blank"
              rel="noopener noreferrer"
              >{{ $t("pages.navigation.4") }}</a
            >
          </li>
        </ul>
      </div>
    </section>
    <main class="page__main">
      <slot></slot>
    </main>
    <section class="page__footer__social">
      <div class="page__footer__social__line"></div>
      <div
        class="page__footer__social__icons"
        data-aos="zoom-in"
        data-aos-anchor-placement="bottom-bottom"
        data-aos-duration="1000"
      >
        <a
          href="https://www.facebook.com/pg/aduniversalis/about/"
          target="_blank"
          rel="noopener noreferrer"
          ><v-icon>mdi-facebook</v-icon></a
        >
        <a
          href="https://twitter.com/ADULeads?s=20"
          target="_blank"
          rel="noopener noreferrer"
          ><v-icon>mdi-twitter</v-icon></a
        >
        <a
          href="instagram.com/africandevelopmentuniversalis"
          target="_blank"
          rel="noopener noreferrer"
          ><v-icon>mdi-instagram</v-icon></a
        >
        <a
          href="https://www.linkedin.com/school/african-development-university"
          target="_blank"
          rel="noopener noreferrer"
          ><v-icon>mdi-linkedin</v-icon></a
        >
      </div>
      <div class="page__footer__social__line"></div>
    </section>
    <footer class="page__footer">
      <section class="page__footer__bottom">
        <div class="page__footer__bottom__brand">
          <div class="logo">
            <img src="/storage/logo-1.png" alt="A.D.U LOGO" srcset="" />
          </div>
        </div>
        <div class="page__footer__bottom__links">
          <h3 class="title">{{ $t("pages.footer.ba") }}</h3>
          <div class="address">
            <p>
              {{ $t("pages.footer.email") }}:
              <a href="mailto:admissions@ilimi.edu.ne"
                >admissions@ilimi.edu.ne</a
              >
            </p>
            <p>
              {{ $t("pages.footer.phone") }}:
              <a href="tel:+22792396868">(+227) 92-39-68-68</a>/<a
                href="tel:+22793396868"
                >(+227) 93-39-68-68</a
              >
            </p>
          </div>
        </div>
        <div class="page__footer__bottom__links">
          <h3 class="title">{{ $t("pages.footer.ai") }}</h3>
          <div class="address">
            <p>
              {{ $t("pages.footer.email") }}:
              <a href="mailto:admissions@ilimi.edu.ne"
                >admissions@ilimi.edu.ne</a
              >
            </p>
            <p>
              {{ $t("pages.footer.phone") }}:
              <a href="tel:+22792396868">(+227) 92-39-68-68</a>/<a
                href="tel:+22793396868"
                >(+227) 93-39-68-68</a
              >
            </p>
          </div>
        </div>
        <div class="page__footer__bottom__links">
          <h3 class="title">{{ $t("pages.footer.ep") }}</h3>
          <div class="address">
            <p>
              {{ $t("pages.footer.email") }}:
              <a href="mailto:admissions@ilimi.edu.ne"
                >admissions@ilimi.edu.ne</a
              >
            </p>
            <p>
              {{ $t("pages.footer.phone") }}:
              <a href="tel:+22792396868">(+227) 92-39-68-68</a>/<a
                href="tel:+22793396868"
                >(+227) 93-39-68-68</a
              >
            </p>
          </div>
        </div>
      </section>
      <section class="page__footer__copyright">
        <span
          >&copy;{{ new Date().getUTCFullYear() }} A.D.U, All Right
          Reserved</span
        >
        <!-- {{ $t("attribute-name") }} -->
      </section>
    </footer>
  </div>
</template>

<script>
import { Link } from "@inertiajs/inertia-vue";
import { Inertia } from "@inertiajs/inertia";
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
  beforeMount() {
    this.setLocale();
  },
  mounted() {
    const el = this.$refs.mainNav;
    window.addEventListener("scroll", () => {
      if (el.getBoundingClientRect().top === 0) {
        this.logoClass = "small";
      } else {
        this.logoClass = "big";
      }
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        this.isTranslateButton = true;
      } else {
        this.isTranslateButton = false;
      }
    });
  },
  data() {
    return {
      logoClass: "big",
      toggleMobileNav: false,
      isTranslateButton: false,
    };
  },

  methods: {
    changeLocale(locale) {
      Inertia.visit(`/locale/${locale}`, {
        preserveScroll: true,
        onSuccess: (page) => {
          const now = new Date();
          now.setDate(now.getDate() + 7);
          document.cookie = `locale=${locale}; expires=${now.toUTCString()}; SameSite=Lax; Secure`;
          this.$lang.setLocale(locale);
        },
      });
    },

    setLocale() {
      if (
        document.cookie
          .split(";")
          .some((item) => item.trim().startsWith("locale="))
      ) {
        this.$lang.setLocale(
          document.cookie
            .split(";")
            .find((item) => item.startsWith("locale="))
            .split("=")[1]
        );
      } else {
        this.$lang.setLocale(navigator.language.split("-")[0]);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>