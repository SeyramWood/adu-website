<template>
  <section class="about">
    <div class="banner__wrapper">
      <banner bg="pages/gallery/banner.jpg" title="Gallery">
        <template #description>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed
          recusandae officia, similique quam, accusamus tempore consequuntur
        </template>
      </banner>
    </div>
    <section class="album">
      <div class="album__card" v-for="g in gallery" :key="g.name">
        <lightbox css="h-400 " :cells="5" :items="g.images"></lightbox>
        <div class="details">
          <div class="details__content">
            <span>Album</span>
            <span>{{ g.album }}</span>
          </div>
          <div class="details__content">
            <span>Date</span>
            <span>{{ g.date }}</span>
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
      gallery: [
        {
          album: "Community Service",
          date: "Nov. 9, 2021",
          images: [
            "/storage/pages/gallery/community_service/1.jpeg",
            "/storage/pages/gallery/community_service/2.jpeg",
            "/storage/pages/gallery/community_service/3.jpeg",
            "/storage/pages/gallery/community_service/4.jpeg",
            "/storage/pages/gallery/community_service/5.jpeg",
            "/storage/pages/gallery/community_service/6.jpeg",
            "/storage/pages/gallery/community_service/7.jpeg",
            "/storage/pages/gallery/community_service/8.jpeg",
          ],
        },
        {
          album: "Cultural Day",
          date: "Nov. 9, 2021",
          images: [
            "/storage/pages/gallery/cultural_day/1.jpg",
            "/storage/pages/gallery/cultural_day/2.jpg",
            "/storage/pages/gallery/cultural_day/3.jpg",
            "/storage/pages/gallery/cultural_day/4.jpg",
            "/storage/pages/gallery/cultural_day/5.jpg",
            "/storage/pages/gallery/cultural_day/6.jpg",
            "/storage/pages/gallery/cultural_day/7.jpg",
            "/storage/pages/gallery/cultural_day/8.jpg",
            "/storage/pages/gallery/cultural_day/9.jpg",
          ],
        },
        {
          album: "Faculty",
          date: "Nov. 9, 2021",
          images: [
            "/storage/pages/gallery/faculty/1.jpg",
            "/storage/pages/gallery/faculty/2.jpg",
            "/storage/pages/gallery/faculty/3.jpg",
            "/storage/pages/gallery/faculty/4.jpg",
            "/storage/pages/gallery/faculty/5.jpg",
            "/storage/pages/gallery/faculty/6.jpg",
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>