<template>
  <section class="about">
    <div class="banner__wrapper">
      <banner bg="bg/banner.jpg" title="about">
        <template #description>
          A.D.U. is a rapidly growing non-profit organization and we bring together the most talented individuals from Niger and around the globe. If you share our values, believe that higher education can transform the Sahel region, and want to be part of that transformation and adventure, we want to talk with you. 
        </template>
        <template #links>
          <s-links>
            <s-link href="#welcome">Welcome by Chancellor</s-link>
            <s-link href="#why">Our Why</s-link>
            <s-link href="#leadership">Leadership</s-link>
          </s-links>
        </template>
      </banner>
    </div>

    <section class="article__wrapper" id="welcome">
      <page-article
        title="Welcome to ilimi"
        image='welcome.jpg'
        :imageRround="true"
        :video="true"
      >
        <template #video>
          <vueper-slides
            :dragging-distance="50"
            :arrows="false"
            :bullets="false"
            :fixed-height="true"
          >
            <vueper-slide
              v-for="(slide, i) in slides"
              :key="i"
              :video="slide.video"
            />
          </vueper-slides>
        </template>
      </page-article>
    </section>
    <section class="article__wrapper article__wrapper--bg-image" id="why">
      <page-article title="Our Why">
        <template #article>
          <p>
            African Development University (A.D.U.) is an innovative
            not-for-profit university with a mission to prepare the most
            talented young people in Niger and in Francophone Africa to design
            and drive the development of their nations as ethical and effective
            leaders in the public, private and not-for-profit sectors. A.D.U. is
            the first not-for-profit university located in Niamey, Niger, and is
            the first institution to offer world-class education for students
            from the Sahel region.
            <v-btn
              text
              class="color-primary"
              @click="showMore = true"
              v-show="!showMore"
              >view more</v-btn
            >
          </p>
          <article v-show="showMore">
            <p >
            Founded in October 2017, A.D.U. currently offers undergraduate
            programs accredited by the Ministry of Research, Higher Education
            and Innovation, Niger, an MBA program, as well as Executive Courses.
            Over the next decade, A.D.U. aspires to become the hub of innovation
            and excellence in higher education in West Africa. A.D.U. was
            established to address two of the most pressing problems facing the
            region: 
            <ol style="margin-left:4rem">
              <li>The dearth of quality tertiary educational institutions.
            </li>
              <li>The increasing cohort of young adults unprepared for participation and leadership in the 21st-century workforce.</li>
            </ol>
          </p>
          <p>
              Niger is a rapidly growing country of 20 million people, and our desire is to
              train a new generation of skilled, ethical leaders is motivated by
              our commitment to advance Niger’s development and improve living
              standards for all. Ultimately, through our work, we aim to advance
              the quality of human capital of countries throughout the Sahel and
              across the African continent. <v-btn text class="color-primary" @click="showMore = false"
              >view less</v-btn
            >
            </p>
            
          </article>
          
        </template>
        <!-- <template #links>
          <s-links type="article">
            <s-link href="/kfdjklfdjhkl">I am a link</s-link>
            <s-link href="/kfdjklfdjhkl">I am a link</s-link>
            <s-link href="/kfdjklfdjhkl">I am a link</s-link>
            <s-link href="/kfdjklfdjhkl">I am a link</s-link>
          </s-links>
        </template>
        <template #linksRight>
          <s-links type="article">
            <s-link href="/kfdjklfdjhkl">I am a link</s-link>
            <s-link href="/kfdjklfdjhkl">I am a link</s-link>
            <s-link href="/kfdjklfdjhkl">I am a link</s-link>
            <s-link href="/kfdjklfdjhkl">I am a link</s-link>
          </s-links>
        </template> -->
      </page-article>
    </section>
    <section class="leadership" id="leadership">
      <h1 class="title">leadership</h1>
      <main class="leadership__container">
        <!-- <article class="leadership__article">
        <p>
            A.D.U. is a rapidly growing organization, and we bring together the
            most talented individuals from Niger and around the globe. If you
            share our values, believe that higher education can transform the
            Sahel region, and want to be part of that transformation and
            adventure, we want to talk with you. Have a look below to get some
            ideas as to ways to engage with A.D.U. If you are interested in one
            of these opportunities—or something else—please send us your CV and
            a cover note explaining your interest:
            <a
              href="mailto:talent@ilimi.edu.ne"
              class="color-primary"
              >talent@ilimi.edu.ne</a
            >.
          </p>
      </article> -->
      <div class="leadership__avatar">
            <div
              class="leadership__avatar__card"
              v-for="leader in leadership"
              :key="leader.name"
            >
            <div class="avatar">
              <img :src="leader.image" alt="" srcset="" />
            </div>
              <div class="info">
                  <p class="name">{{ leader.name }}</p>
                  <p class="position">{{ leader.position }}</p>
                </div>
            </div>
      </div>
      
      </main>
    </section>
    <section class="feed__wrapper">
      <div class="feed__wrapper__content feed__wrapper__content--left-bg">
        <div class="image">
          <img src="/storage/images/tour-1.jpeg" alt="" srcset="" />
        </div>
        <div class="content">
          <h1 class="title">Tour Ilimi</h1>
          <p class="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia nemo
            neque odit consequuntur incidunt magni, veniam quisquam aut eligendi
            sed harum, voluptatum natus, optio aspernatur velit ad alias impedit
            temporibus?
          </p>
          <Link class="link">Learn More</Link>
        </div>
      </div>
      <div class="feed__wrapper__content feed__wrapper__content--right-bg">
        <div class="image">
          <img src="/storage/images/tour.jpg" alt="" srcset="" />
        </div>
        <div class="content">
          <h1 class="title">Tour Ilimi</h1>
          <p class="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia nemo
            neque odit consequuntur incidunt magni, veniam quisquam aut eligendi
            sed harum, voluptatum natus, optio aspernatur velit ad alias impedit
            temporibus?
          </p>
          <Link class="link">Learn More</Link>
        </div>
      </div>
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
  name: "About",
  layout: FrontEndLayout,
  components: {
    VueperSlides,
    VueperSlide,
    Link,
    Banner,
    SLinks,
    SLink,
    PageArticle,
  },
  data() {
    return {
      showMore: false,
      leadership: [
        {
          name: "Kader Kaneye",
          faculty: "",
          position: "Founder and President, A.D.U",
          image: "/storage/pages/about/KaderKaneye.jpg",
        },
        {
          name: "ALMOKTAR ALLAHOURY",
          faculty: "",
          position: "CEO, Total Chad",
          image: "/storage/pages/about/AlmoktarAllahoury.jpg",
        },
        {
          name: `KHADIJAH DIALLO`,
          faculty: "",
          position: `CEO, High Authority of Waqf Is DB Senior Officer in Niger`,
          image: "/storage/pages/about/KhadijahDiallo.jpeg",
        },
        {
          name: `ROSE A. DODD`,
          faculty: "",
          position: `Director, the Education Collaborative Ashesi University`,
          image: "/storage/pages/about/RoseDodd.jpg",
        },
        {
          name: `FATI N'ZI-HASSANE`,
          faculty: "",
          position: `Head of Human Capital and Institutions Development, African Union Development
                    Agency (AUDA-NEPAD)`,
          image: "/storage/pages/about/FatiNzi-Hassane.jpg",
        },

        {
          name: `MANON KARAMOKO `,
          faculty: "",
          position: `CEO, Unilever Cote d'Ivoire`,
          image: "/storage/pages/about/ManonKaramoko.jpg",
        },
        {
          name: "Carl Manlan",
          faculty: "",
          position: "Vice President, Social Impact, CEMEA at Visa",
          image: "/storage/pages/about/CarlManlan.jpg",
        },
      ],
      slides: [
        {
          title: "Blossoming flower",
          content:
            "This video is autoplayed, played in loop, has no controls and is not reacting to user interactions.",
          image: `${process.env.BASE_URL}images/flower.jpg`,
          video: {
            url: "https://www.youtube.com/embed/2d_7v9bda24",
            props: { autoplay: true, loop: true, controls: false, muted: true },
          },
        },
        {
          title: "Blossoming flower",
          content:
            "This video is played once, has controls and is reacting to user interactions.",
          image: `${process.env.BASE_URL}images/flower.jpg`,
          video: {
            url: "https://www.youtube.com/embed/2d_7v9bda24",
          },
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>