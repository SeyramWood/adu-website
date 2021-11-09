<template>
  <section class="admissions">
    <div class="banner__wrapper">
      <banner bg="bg/banner.jpg" title="admissions">
        <template #description>
          African Development University (A.D.U) is a university of excellence
          based in Niamey (Niger). Our mission is to prepare the most talented
          young people in Niger and Francophone Africa to design and drive the
          development of their nations as ethical and effective leaders in
          public, private and not for profit sectors.
        </template>
        <template #links>
          <s-links>
            <s-link href="#TheADUAdvantage">The A.D.U Advantage</s-link>
            <s-link href="#ScholarshipInformation"
              >Scholarship Information</s-link
            >
            <s-link href="#AcademicProgramsSummary"
              >Academic Programs Summary</s-link
            >
            <s-link href="#ContactAdmissionTeam">Contact Admission Team</s-link>
          </s-links>
        </template>
      </banner>
    </div>

    <section class="admissions__advantage" id="TheADUAdvantage">
      <h1 class="title">The A.D.U. Advantage</h1>
      <div class="advantages">
        <div class="advantages__card">
          <p>Student centered institution – Student FIRST</p>
        </div>
        <div class="advantages__card">
          <p>US style Highee Education Model - liberal arts education</p>
        </div>
        <div class="advantages__card">
          <p>International opportunities and exchange programs for students</p>
        </div>
        <div class="advantages__card">
          <p>Entrepreneurial Focused</p>
        </div>
        <div class="advantages__card">
          <p>Student Development Trough Experiential Learning</p>
        </div>
        <div class="advantages__card">
          <p>Blended learning - in-person and virtual modes</p>
        </div>
        <div class="advantages__card">
          <p>Bilingual education - English and French</p>
        </div>
        <div class="advantages__card">
          <p>Effective career services and placement support</p>
        </div>
      </div>
    </section>
    <section class="article__wrapper" id="ScholarshipInformation">
      <page-article
        title="Scholarship Information"
        image="pages/admissions/scholarship.jpg"
        :imageRround="true"
        :ltr="true"
      >
        <template #article>
          <strong class="" style="font-style: italic">
            "The mission of A.D.U. is to prepare the most talented young people
            in Niger and in Francophone Africa to design and drive the
            development of their nations as ethical and effective leaders in the
            public, private and not-for-profit sectors."
          </strong>
          <p>
            Therefore, A.D.U. offers Scholarship for talented student who are
            experiencing economic and social hardship so that they will be able
            to achieve their goals and impact their community. You can apply for
            a scholarship by filling this form
            <a
              href="https://aduilimi-my.sharepoint.com/:b:/g/personal/fafagnibo_ilimi_edu_ne/Efz0yLO5bV1AkPv22eCnkKsBn13Yy1sUJkBTASqsSC2sGw?e=7vG1V8"
              target="_blank"
              rel="noopener noreferrer"
              class="color-primary"
              >Apply Now</a
            >
          </p>
        </template>
        <template #links>
          <s-links type="article">
            <s-link href="/kfdjklfdjhkl">A.D.U. Scholarship</s-link>
            <s-link href="/kfdjklfdjhkl"
              >MasterCard Foundation Scholarships</s-link
            >
          </s-links>
        </template>
      </page-article>
    </section>
    <section class="article__wrapper" id="AcademicProgramsSummary">
      <page-article
        title="Academic Programs Summary"
        image="tour.jpg"
        :imageRround="true"
      >
        <template #article>
          <p style="margin-bottom: 2rem">
            Our 3-year bachelor program is both nationally and internationally
            recognized. Our degree programs are all accredited by Ministry of
            Higher Education, Research and Innovation, Niger. We offer two
            Bachelors: Business Administration & Artificial Intelligence.
          </p>
        </template>
        <template #links>
          <Link
            as="button"
            href="/academics"
            class="read-more-btn"
            style="margin-left: -1.5rem"
            >Read More</Link
          >
        </template>
        <template #linksRight>
          <s-links type="article">
            <s-link
              href="https://aduilimi-my.sharepoint.com/:b:/g/personal/fafagnibo_ilimi_edu_ne/Efz0yLO5bV1AkPv22eCnkKsBn13Yy1sUJkBTASqsSC2sGw?e=7vG1V8"
              :external="true"
              >How to Apply</s-link
            >
            <s-link href="https://applications.eduappgh.com" :external="true"
              >Click to Apply</s-link
            >
          </s-links>
        </template>
      </page-article>
    </section>
    <section class="contact" id="ContactAdmissionTeam">
      <h1 class="title">CONTACT ADMISSION TEAM</h1>
      <article>
        <p>
          For additional questions and/or inquiry regarding the status of your
          application, you can reach us through:
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