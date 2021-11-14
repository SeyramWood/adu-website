<template>
  <section class="about">
    <div class="banner__wrapper">
      <banner bg="bg/banner.jpg" :title="$t('pages.about.title.1')">
        <template #description>
          {{ $t('pages.about.banner') }}
        </template>
        <template #links>
          <s-links>
            <s-link href="#welcome">{{ $t('pages.about.link.1') }}</s-link>
            <s-link href="#why">{{ $t('pages.about.link.2') }}</s-link>
            <s-link href="#leadership">{{ $t('pages.about.link.3') }}</s-link>
          </s-links>
        </template>
      </banner>
    </div>

    <section class="article__wrapper article__wrapper--welcome" id="welcome">
      <page-article
        :title="$t('pages.about.title.2')"
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
        <template #sideText>
          <p>
            {{ $t('pages.about.welcome') }}
          </p>
        </template>
      </page-article>
    </section>
    <section class="article__wrapper article__wrapper--bg-image" id="why">
      <page-article :title="$t('pages.about.title.3')">
        <template #article>
          <p>
            {{ $t('pages.about.why.p1') }}
            <v-btn
              text
              class="color-primary"
              @click="showMore = true"
              v-show="!showMore"
              >{{ $t('pages.about.why.btnMore') }}</v-btn
            >
          </p>
          <article v-show="showMore">
            <p >
           {{ $t('pages.about.why.p2.content') }} 
            <ol style="margin-left:4rem">
              <li>{{ $t('pages.about.why.p2.l1') }}
            </li>
              <li>{{ $t('pages.about.why.p2.l2') }}</li>
            </ol>
          </p>
          <p>
              {{ $t('pages.about.why.p3') }} <v-btn text class="color-primary" @click="showMore = false"
              >{{ $t('pages.about.why.btnLess') }}</v-btn
            >
            </p>
            
          </article>
          
        </template>
      </page-article>
    </section>
    <section class="leadership" id="leadership">
      <h1 class="title">{{$t('pages.about.title.4')}}</h1>
      <main class="leadership__container">
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
          title: "Chancellor’s Message",
          content:
            "This video is autoplayed, played in loop, has no controls and is not reacting to user interactions.",
          image: "https://i.ytimg.com/vi_webp/ehJg_OlcjpE/maxresdefault.webp",
          video: {
            url: "https://www.youtube.com/embed/2d_7v9bda24",
            // props: { autoplay: true, loop: true, controls: false, muted: true },
            props: {
              allow:
                "accelerometer; autoplay; encrypted-media; picture-in-picture",
            },
          },
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>