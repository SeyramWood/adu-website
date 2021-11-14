<template>
  <section class="admissions">
    <div class="banner__wrapper">
      <banner bg="bg/banner.jpg" :title="$t('pages.admission.title.1')">
        <template #description>
          {{ $t("pages.admission.banner") }}
        </template>
        <template #links>
          <s-links>
            <s-link href="#TheADUAdvantage">{{
              $t("pages.admission.link.1")
            }}</s-link>
            <s-link href="#ScholarshipInformation">{{
              $t("pages.admission.link.2")
            }}</s-link>
            <s-link href="#AcademicProgramsSummary">{{
              $t("pages.admission.link.3")
            }}</s-link>
            <s-link href="#ContactAdmissionTeam">{{
              $t("pages.admission.link.4")
            }}</s-link>
          </s-links>
        </template>
      </banner>
    </div>

    <section class="admissions__advantage" id="TheADUAdvantage">
      <h1 class="title">{{ $t("pages.admission.title.2") }}</h1>
      <div class="advantages">
        <div class="advantages__card">
          <span>
            <v-icon>mdi-account-group-outline</v-icon>
          </span>
          <p>{{ $t("pages.admission.advantage.1") }}</p>
        </div>
        <div class="advantages__card">
          <span>
            <v-icon>mdi-book-education-outline</v-icon>
          </span>
          <p>{{ $t("pages.admission.advantage.2") }}</p>
        </div>
        <div class="advantages__card">
          <span>
            <v-icon>mdi-school-outline</v-icon>
          </span>
          <p>{{ $t("pages.admission.advantage.3") }}</p>
        </div>
        <div class="advantages__card">
          <span>
            <v-icon>mdi-focus-field</v-icon>
          </span>
          <p>{{ $t("pages.admission.advantage.4") }}</p>
        </div>
        <div class="advantages__card">
          <span>
            <v-icon>mdi-chair-school</v-icon>
          </span>
          <p>{{ $t("pages.admission.advantage.5") }}</p>
        </div>
        <div class="advantages__card">
          <span>
            <v-icon>mdi-cast-education</v-icon>
          </span>
          <p>{{ $t("pages.admission.advantage.6") }}</p>
        </div>
        <div class="advantages__card">
          <span>
            <v-icon>mdi-translate</v-icon>
          </span>
          <p>{{ $t("pages.admission.advantage.7") }}</p>
        </div>
        <div class="advantages__card">
          <span>
            <v-icon>mdi-toolbox-outline</v-icon>
          </span>
          <p>{{ $t("pages.admission.advantage.8") }}</p>
        </div>
      </div>
    </section>
    <section class="article__wrapper" id="ScholarshipInformation">
      <page-article
        :title="$t('pages.admission.title.3')"
        image="pages/admissions/scholarship.jpg"
        :imageRround="true"
        :ltr="true"
      >
        <template #article>
          <strong class="" style="font-style: italic">
            <q> {{ $t("pages.admission.si.p1") }} </q>
          </strong>
          <p>
            {{ $t("pages.admission.si.p2") }}
            <a
              href="https://aduilimi-my.sharepoint.com/:b:/g/personal/fafagnibo_ilimi_edu_ne/Efz0yLO5bV1AkPv22eCnkKsBn13Yy1sUJkBTASqsSC2sGw?e=7vG1V8"
              target="_blank"
              rel="noopener noreferrer"
              class="color-primary"
              >{{ $t("pages.admission.si.apply") }}</a
            >
          </p>
        </template>
        <template #links>
          <s-links type="article">
            <s-link href="/kfdjklfdjhkl">{{
              $t("pages.admission.si.link.1")
            }}</s-link>
            <s-link href="/kfdjklfdjhkl">{{
              $t("pages.admission.si.link.2")
            }}</s-link>
          </s-links>
        </template>
      </page-article>
    </section>
    <section class="article__wrapper" id="AcademicProgramsSummary">
      <page-article
        :title="$t('pages.admission.title.4')"
        image="pages/admissions/programmes.jpeg"
        :imageRround="true"
      >
        <template #article>
          <p style="margin-bottom: 2rem">
            {{ $t("pages.admission.ap.p") }}
          </p>
        </template>
        <template #links>
          <Link
            as="button"
            href="/academics"
            class="read-more-btn"
            style="margin-left: -1.5rem"
            >{{ $t("pages.admission.ap.link.readMore") }}</Link
          >
        </template>
        <template #linksRight>
          <s-links type="article">
            <s-link
              href="https://aduilimi-my.sharepoint.com/:b:/g/personal/fafagnibo_ilimi_edu_ne/Efz0yLO5bV1AkPv22eCnkKsBn13Yy1sUJkBTASqsSC2sGw?e=7vG1V8"
              :external="true"
              >{{ $t("pages.admission.ap.link.hta") }}</s-link
            >
            <s-link href="https://applications.eduappgh.com" :external="true">{{
              $t("pages.admission.ap.link.cta")
            }}</s-link>
          </s-links>
        </template>
      </page-article>
    </section>
    <section class="contact" id="ContactAdmissionTeam">
      <h1 class="title">{{ $t("pages.admission.title.5") }}</h1>
      <article>
        <p>
          {{ $t("pages.admission.cat.p") }}
        </p>
        <ul style="list-style-type: disc; margin-left: 1.2rem">
          <li>
            <a href="mailto:admissions@ilimi.edu.ne" class="color-primary"
              >admissions@ilimi.edu.ne</a
            >
          </li>
          <li>
            <a href="tel:+22792396868" class="color-primary"
              >+227 92 39 68 68 (WhatsApp)</a
            >
          </li>
          <li>
            <a href="tel:+22793396868" class="color-primary"
              >+227 93 39 68 68</a
            >
          </li>
        </ul>
      </article>
    </section>
  </section>
</template>

<script>
import FrontEndLayout from "../../components/FrontEndLayout";
import SLinks from "../../components/pages/SLinks";
import SLink from "../../components/pages/SLink";
import Banner from "../../components/pages/Banner";
import PageArticle from "../../components/pages/PageArticle";

import { Link } from "@inertiajs/inertia-vue";

const COLORS = ["info", "warning", "error", "success"];
const ICONS = {
  info: "mdi-information",
  warning: "mdi-alert",
  error: "mdi-alert-circle",
  success: "mdi-check-circle",
};

export default {
  name: "Academics",
  layout: FrontEndLayout,
  components: {
    Link,
    Banner,
    SLinks,
    SLink,
    PageArticle,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
</style>