<template>
  <section class="academics">
    <div class="banner__wrapper">
      <banner bg="pages/academics/banner.jpeg" title="academics">
        <template #description>
          {{ $t("pages.academics.banner") }}
        </template>
        <template #links>
          <s-links>
            <s-link href="#BusinessManagement">{{
              $t("pages.academics.link.1")
            }}</s-link>
            <s-link href="#ArtificialIntelligence">{{
              $t("pages.academics.link.2")
            }}</s-link>
            <s-link href="#EnglishProgramme">{{
              $t("pages.academics.link.3")
            }}</s-link>
          </s-links>
        </template>
      </banner>
    </div>
    <section class="academics__calenda">
      <div class="academics__calenda__title">
        {{ $t("pages.academics.ac") }}
      </div>
      <div class="academics__calenda__slider">
        <vueper-slides
          class="no-shadow"
          arrows-outside
          :visible-slides="3"
          :dragging-distance="70"
          slide-multiple
          :gap="3"
          :bullets="false"
          :fixed-height="true"
          style="margin-bottom: 0px"
        >
          <vueper-slide
            v-for="(cal, i) in calendar"
            :key="i"
            :content="cal.content"
            style="height: 100%"
            @click.native="openCalendarModal(cal)"
          />
        </vueper-slides>
      </div>
      <div class="academics__calenda__btn">
        <Link href="#"> {{ $t("pages.academics.vfc") }}</Link>
      </div>
    </section>
    <section class="academics__major" id="BusinessManagement">
      <h1 class="title">{{ $t("pages.academics.title.1") }}</h1>
      <div class="academics__major__links">
        <div class="link">
          <h3 class="title">{{ $t("pages.academics.title.2") }}</h3>
          <div class="link__box">
            <a @click="lawModal = !lawModal"> {{ $t("pages.academics.vm") }}</a>
          </div>
        </div>
        <div class="link">
          <h3 class="title">{{ $t("pages.academics.title.3") }}</h3>
          <div class="link__box">
            <a @click="projectModal = !projectModal">
              {{ $t("pages.academics.vm") }}</a
            >
          </div>
        </div>
        <div class="link">
          <h3 class="title">{{ $t("pages.academics.title.4") }}</h3>
          <div class="link__box">
            <a @click="accountModal = !accountModal">
              {{ $t("pages.academics.vm") }}</a
            >
          </div>
        </div>
        <div class="link">
          <h3 class="title">{{ $t("pages.academics.title.5") }}</h3>
          <div class="link__box">
            <a @click="misModal = !misModal"> {{ $t("pages.academics.vm") }}</a>
          </div>
        </div>
      </div>
    </section>
    <section
      class="article__wrapper article__wrapper--aip"
      id="ArtificialIntelligence"
    >
      <page-article
        :title="$t('pages.academics.title.6')"
        image="pages/academics/ai.jpg"
        :ltr="true"
        :btn="true"
        :btnText="$t('pages.academics.rm')"
      >
        <template #article>
          <p>
            {{ $t("pages.academics.ai") }}
          </p>
          <div class="article__content__btn">
            <button @click="aiModal = !aiModal">
              {{ $t("pages.academics.rm") }}
            </button>
          </div>
        </template>
      </page-article>
    </section>

    <section
      class="article__wrapper article__wrapper--epbg"
      id="EnglishProgramme"
    >
      <page-article
        :title="$t('pages.academics.title.7')"
        image="pages/academics/english.jpeg"
      >
        <template #article>
          <p>
            {{ $t("pages.academics.ep") }}
          </p>
          <div class="article__content__btn">
            <button @click="englishModal = !englishModal">
              {{ $t("pages.academics.rm") }}
            </button>
          </div>
        </template>
      </page-article>
    </section>

    <s-modal v-model="englishModal" width="70rem">
      <div class="english-programme-details">
        <div class="section syllabus">
          <h1>{{ $t("pages.academics.epd.sh1") }}</h1>
          <p>
            {{ $t("pages.academics.epd.sp") }}
          </p>
        </div>

        <div class="section packages">
          <h1>{{ $t("pages.academics.epd.ph1") }}</h1>
          <p v-html="$t('pages.academics.epd.pp1')"></p>
          <p v-html="$t('pages.academics.epd.pp2')"></p>
          <p v-html="$t('pages.academics.epd.pp3')"></p>
          <p v-html="$t('pages.academics.epd.pp4')"></p>
        </div>
        <div class="section certificate">
          <div>
            <h1>{{ $t("pages.academics.epd.ch1") }}</h1>
            <p>
              {{ $t("pages.academics.epd.cp") }}
            </p>
          </div>
        </div>

        <p class="info" v-html="$t('pages.academics.info')"></p>
      </div>
    </s-modal>
    <s-modal v-model="aiModal" width="70rem">
      <div class="english-programme-details">
        <div class="section syllabus">
          <h1>{{ $t("pages.academics.aid.sh1") }}</h1>
          <p>
            {{ $t("pages.academics.aid.sp") }}
          </p>
        </div>
        <div class="section">
          <h1>{{ $t("pages.academics.aid.sh2") }}</h1>
          <p>
            {{ $t("pages.academics.aid.sp1") }}
          </p>
        </div>

        <div class="section packages">
          <h1>{{ $t("pages.academics.aid.sh3") }}</h1>
          <p v-html="$t('pages.academics.aid.pp1')"></p>
          <p v-html="$t('pages.academics.aid.pp2')"></p>
          <p v-html="$t('pages.academics.aid.pp3')"></p>
        </div>
        <p class="info" v-html="$t('pages.academics.info')"></p>
      </div>
    </s-modal>
    <s-modal v-model="lawModal" width="70rem">
      <div class="english-programme-details">
        <div class="section syllabus">
          <h1>{{ $t("pages.academics.law.h1") }}</h1>
          <p>
            {{ $t("pages.academics.law.p") }}
          </p>
        </div>
        <p class="info" v-html="$t('pages.academics.info')"></p>
      </div>
    </s-modal>
    <s-modal v-model="projectModal" width="70rem">
      <div class="english-programme-details">
        <div class="section syllabus">
          <h1>{{ $t("pages.academics.pm.h1") }}</h1>
          <p>
            {{ $t("pages.academics.pm.p1") }}
          </p>
          <p>
            {{ $t("pages.academics.pm.p2") }}
          </p>
        </div>
        <p class="info" v-html="$t('pages.academics.info')"></p>
      </div>
    </s-modal>
    <s-modal v-model="accountModal" width="70rem">
      <div class="english-programme-details">
        <div class="section">
          <h1>{{ $t("pages.academics.accounting.h1") }}</h1>
          <p>
            {{ $t("pages.academics.accounting.p1") }}
          </p>
          <div class="section packages">
            <p v-html="$t(`pages.academics.accounting.p2`)"></p>
            <p v-html="$t(`pages.academics.accounting.p3`)"></p>
            <p v-html="$t(`pages.academics.accounting.p4`)"></p>
          </div>
        </div>
        <p class="info" v-html="$t('pages.academics.info')"></p>
      </div>
    </s-modal>
    <s-modal v-model="misModal" width="70rem">
      <div class="english-programme-details">
        <div class="section syllabus">
          <h1>{{ $t(`pages.academics.mis.h1`) }}</h1>
          <p>
            {{ $t(`pages.academics.mis.p1`) }}
          </p>
          <p>
            {{ $t(`pages.academics.mis.p2`) }}
          </p>
          <p>
            {{ $t(`pages.academics.mis.p3`) }}
          </p>
        </div>

        <p class="info" v-html="$t('pages.academics.info')"></p>
      </div>
    </s-modal>
    <s-modal v-model="calendarModal" width="70rem">
      <div class="academic-calendar" v-if="currentCalendar">
        <table>
          <thead>
            <tr>
              <th>First Year</th>
              <th>Continuing students</th>
              <th>Weeks</th>
              <th>Start Date</th>
              <th>End Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="sub-heading">Semester 1</td>
            </tr>
            <tr>
              <td>First Year Orientation & Registration</td>
              <td>Registration for Courses</td>
              <td>1 Week</td>
              <td>18-Oct-21</td>
              <td>29-Oct-21</td>
            </tr>
            <tr>
              <td>Semester 2</td>
            </tr>
            <tr>
              <td>fhgjfdghj</td>
              <td>fhgjfdghj</td>
              <td>fhgjfdghj</td>
              <td>fhgjfdghj</td>
              <td>fhgjfdghj</td>
            </tr>
          </tbody>
        </table>
      </div>
    </s-modal>
  </section>
</template>

<script>
import FrontEndLayout from "../../components/FrontEndLayout";
import { Link } from "@inertiajs/inertia-vue";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
import SLinks from "../../components/pages/SLinks";
import SLink from "../../components/pages/SLink";
import Banner from "../../components/pages/Banner";
import PageArticle from "../../components/pages/PageArticle";
import SModal from "../../components/SModal";
export default {
  name: "Academics",
  layout: FrontEndLayout,
  components: {
    Link,
    VueperSlides,
    VueperSlide,
    Banner,
    SLinks,
    SLink,
    PageArticle,
    SModal,
  },
  data() {
    return {
      englishModal: false,
      aiModal: false,
      lawModal: false,
      projectModal: false,
      accountModal: false,
      misModal: false,
      calendarModal: false,
      currentCalendar: null,
      calendar: [
        {
          content: `<div class='calenda__box'><h6 class='calenda__box__date'>TUE, NOV  2021</h6><h4 class='calenda__box__title'>African Development Universalis</h4></div>`,
        },
        {
          content: `<div class='calenda__box'><h6 class='calenda__box__date'>TUE, NOV  2021</h6><h4 class='calenda__box__title'>African Development Universalis</h4></div>`,
        },
        {
          content: `<div class='calenda__box'><h6 class='calenda__box__date'>TUE, NOV  2021</h6><h4 class='calenda__box__title'>African Development Universalis</h4></div>`,
        },
        {
          content: `<div class='calenda__box'><h6 class='calenda__box__date'>TUE, NOV  2021</h6><h4 class='calenda__box__title'>African Development Universalis</h4></div>`,
        },
        {
          content: `<div class='calenda__box'><h6 class='calenda__box__date'>TUE, NOV  2021</h6><h4 class='calenda__box__title'>African Development Universalis</h4></div>`,
        },
        {
          content: `<div class='calenda__box'><h6 class='calenda__box__date'>TUE, NOV  2021</h6><h4 class='calenda__box__title'>African Development Universalis</h4></div>`,
        },
        {
          content: `<div class='calenda__box'><h6 class='calenda__box__date'>TUE, NOV  2021</h6><h4 class='calenda__box__title'>African Development Universalis</h4></div>`,
        },
      ],
    };
  },
  methods: {
    openCalendarModal(data) {
      this.currentCalendar = data;
      this.$nextTick(() => {
        this.calendarModal = true;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.ex--center-mode {
  width: 600px;
  max-width: 100%;
  margin: auto;
}
</style>