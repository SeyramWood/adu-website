<template>
  <section class="about">
    <div class="banner__wrapper">
      <banner bg="stats.jpg" title="Gallery">
        <template #description>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed
          recusandae officia, similique quam, accusamus tempore consequuntur
        </template>
      </banner>
    </div>
    <section class="album">
      <div class="album__card">
        <lightbox css="h-400 " :cells="5" :items="images"></lightbox>
        <div class="details">
          <div class="details__content">
            <span>Album</span>
            <span>29th Graduation</span>
          </div>
          <div class="details__content">
            <span>Date</span>
            <span>Oct 15, 2021</span>
          </div>
        </div>
      </div>
      <div class="album__card">
        <lightbox css="h-400 " :cells="5" :items="images"></lightbox>
        <div class="details">
          <div class="details__content">
            <span>Album</span>
            <span>29th Graduation</span>
          </div>
          <div class="details__content">
            <span>Date</span>
            <span>Oct 15, 2021</span>
          </div>
        </div>
      </div>
      <div class="album__card">
        <lightbox css="h-400 " :cells="5" :items="images"></lightbox>
        <div class="details">
          <div class="details__content">
            <span>Album</span>
            <span>2009 Matriculation</span>
          </div>
          <div class="details__content">
            <span>Date</span>
            <span>Oct 15, 2021</span>
          </div>
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
  name: "Gallery",
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
      images: [
        "/storage/images/academics.jpg",
        "/storage/images/ai.jpg",
        "/storage/images/business-1.jpg",
        "/storage/images/business.jpg",
        "/storage/images/news.jpg",
        "/storage/images/news-2.jpg",
        "/storage/images/news-1.jpg",
      ],
      slides: [
        {
          title: "Blossoming flower",
          content:
            "This video is autoplayed, played in loop, has no controls and is not reacting to user interactions.",
          image: `${process.env.BASE_URL}images/flower.jpg`,
          video: {
            url: "https://www.youtube.com/embed/ehJg_OlcjpE?rel=0&showinfo=0&controls=0&fs=0&modestbranding=1&color=white&iv_load_policy=3&autohide=1&enablejsapi=1",
            // webm: `${process.env.BASE_URL}images/flower.webm`,
            // mp4: `${process.env.BASE_URL}images/flower.mp4`,
            props: { autoplay: true, loop: true, controls: false, muted: true },
          },
        },
        {
          title: "Blossoming flower",
          content:
            "This video is played once, has controls and is reacting to user interactions.",
          image: `${process.env.BASE_URL}images/flower.jpg`,
          video: {
            webm: `${process.env.BASE_URL}images/flower.webm`,
            mp4: `${process.env.BASE_URL}images/flower.mp4`,
          },
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>