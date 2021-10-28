<template>
  <section class="academics">
    <div class="banner__wrapper">
      <banner bg="stats.jpg" title="academics">
        <template #description>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed
          recusandae officia, similique quam, accusamus tempore consequuntur
          dolores sapiente non, omnis blanditiis molestiae tempora aspernatur
          distinctio a debitis qui quas necessitatibus!
        </template>
        <template #links>
          <s-links>
            <s-link href="#BusinessManagement">Business Management</s-link>
            <s-link href="#ArtificialIntelligence"
              >Artificial Intelligence</s-link
            >
            <s-link href="#EnglishProgramme">English Programme</s-link>
          </s-links>
        </template>
      </banner>
    </div>
    <section class="academics__calenda">
      <div class="academics__calenda__title">Academic Calendar</div>
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
            v-for="(cal, i) in calenda"
            :key="i"
            :content="cal.content"
            style="height: 100%"
          />
        </vueper-slides>
      </div>
      <div class="academics__calenda__btn">
        <Link href="#">View full calenda</Link>
      </div>
    </section>
    <section class="academics__major" id="BusinessManagement">
      <h1 class="title">Business Management Major</h1>
      <div class="academics__major__links">
        <div class="link">
          <h3 class="title">Law</h3>
          <div class="link__box">
            <Link> View More</Link>
          </div>
        </div>
        <div class="link">
          <h3 class="title">Project Management</h3>
          <div class="link__box">
            <Link> View More</Link>
          </div>
        </div>
      </div>
      <div class="academics__major__links">
        <div class="link">
          <h3 class="title">Accounting</h3>
          <div class="link__box">
            <Link> View More</Link>
          </div>
        </div>
        <div class="link">
          <h3 class="title">Management Information System</h3>
          <div class="link__box">
            <Link> View More</Link>
          </div>
        </div>
      </div>
    </section>
    <section class="article__wrapper" id="ArtificialIntelligence">
      <page-article
        title="Artificial Intelligence"
        image="stats.jpg"
        :ltr="true"
        :btn="true"
        btnText="Read more"
      >
        <template #article>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste illo,
          tenetur dolore placeat cumque dignissimos!Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Iste illo, tenetur dolore placeat cumque
          dignissimos! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Iste illo, tenetur dolore placeat cumque dignissimos!Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Iste illo, tenetur dolore
          placeat cumque dignissimos!
        </template>
      </page-article>
    </section>
    <section
      class="article__wrapper article__wrapper--epbg"
      id="EnglishProgramme"
    >
      <page-article
        title="English Programme"
        image="stats.jpg"
        :ltr="true"
        :btn="true"
        btnText="Read more"
      >
        <template #article>
          <p>
            The ADU English program is an English Learning establishment of the
            African Development University that is focused on building the
            English language proficiency of professionals, businessmen and
            businesswomen etc., especially in the francophone region and is
            committed to taking learners through an exciting language learning
            journey with courses tailored to give learners an all-round study of
            the language.
          </p>
        </template>
      </page-article>
    </section>
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
  },
  data() {
    return {
      calenda: [
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
};
</script>

<style lang="scss" scoped>
.ex--center-mode {
  width: 600px;
  max-width: 100%;
  margin: auto;
}
</style>