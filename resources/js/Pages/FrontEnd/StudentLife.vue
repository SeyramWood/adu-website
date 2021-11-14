<template>
  <section class="about">
    <div class="banner__wrapper">
      <banner
        bg="images/student-life-1.jpg"
        :title="$t('pages.studentLife.title.1')"
      >
        <template #description>
          <p>
            {{ $t("pages.studentLife.banner") }}
          </p>
        </template>
        <template #links>
          <s-links>
            <s-link href="#lifeOnCampus">{{
              $t("pages.studentLife.link.1")
            }}</s-link>
            <s-link href="#spotlight">{{
              $t("pages.studentLife.link.2")
            }}</s-link>
          </s-links>
        </template>
      </banner>
    </div>

    <section class="academics__major" id="lifeOnCampus">
      <h1 class="title">{{ $t("pages.studentLife.title.2") }}</h1>
      <div class="academics__major__links">
        <div class="link">
          <h3 class="title">{{ $t("pages.studentLife.title.3") }}</h3>
          <div class="link__box">
            <Link
              :href="`/student-life/life-on-campuse/ilimi-student-government`"
            >
              {{ $t("pages.studentLife.rm") }}</Link
            >
          </div>
        </div>
        <div class="link">
          <h3 class="title">{{ $t("pages.studentLife.title.4") }}</h3>
          <div class="link__box">
            <Link
              :href="`/student-life/life-on-campuse/internship-and-career-services`"
            >
              {{ $t("pages.studentLife.rm") }}</Link
            >
          </div>
        </div>
      </div>
      <div class="academics__major__links">
        <div class="link">
          <h3 class="title">{{ $t("pages.studentLife.title.5") }}</h3>
          <div class="link__box">
            <Link :href="`/student-life/life-on-campuse/clubs-and-societies`">
              {{ $t("pages.studentLife.rm") }}</Link
            >
          </div>
        </div>
        <div class="link">
          <h3 class="title">{{ $t("pages.studentLife.title.6") }}</h3>
          <div class="link__box">
            <Link :href="`/student-life/life-on-campuse/guest-lecture-series`">
              {{ $t("pages.studentLife.rm") }}</Link
            >
          </div>
        </div>
      </div>
      <div class="academics__major__links">
        <div class="link">
          <h3 class="title">{{ $t("pages.studentLife.title.7") }}</h3>
          <div class="link__box">
            <Link :href="`/student-life/life-on-campuse/health-and-well-being`">
              {{ $t("pages.studentLife.rm") }}</Link
            >
          </div>
        </div>
        <div class="link">
          <h3 class="title">{{ $t("pages.studentLife.title.8") }}</h3>
          <div class="link__box">
            <Link
              :href="`/student-life/life-on-campuse/student-success-center`"
            >
              {{ $t("pages.studentLife.rm") }}</Link
            >
          </div>
        </div>
      </div>
      <div class="academics__major__links">
        <div class="link">
          <h3 class="title">{{ $t("pages.studentLife.title.9") }}</h3>
          <div class="link__box">
            <Link :href="`/student-life/life-on-campuse/alumni`">
              {{ $t("pages.studentLife.rm") }}</Link
            >
          </div>
        </div>
      </div>
    </section>

    <div class="home__spotlight" id="spotlight">
      <div class="header primary mb-4">
        <div class="line"></div>
        <h4 class="title">{{ $t("pages.studentLife.title.10") }}</h4>
        <div class="line"></div>
      </div>
      <div class="home__spotlight__container">
        <div class="image__wrapper content--1">
          <figure class="image">
            <Link class="image__link">
              <img src="/storage/images/news-2.jpg" alt="" srcset="" />
              <div class="overlay"></div>
            </Link>
            <figcaption class="image__footer">
              <h5 class="title">{{ $t("pages.studentLife.title.11") }}</h5>
              <div class="details">
                <p>Give back and impact current and future generations</p>
              </div>
              <Link> {{ $t("pages.studentLife.rm") }} </Link>
            </figcaption>
          </figure>
        </div>

        <div class="image__wrapper content--2">
          <div class="wrapper--1">
            <figure class="image">
              <Link class="image__link">
                <img src="/storage/images/business.jpg" alt="" srcset="" />
                <div class="overlay"></div>
              </Link>
              <figcaption class="image__footer">
                <h5 class="title">SPIRIT OF GIVING CROWDFUNDING</h5>
                <div class="details">
                  <p>Give back and impact current and future generations</p>
                </div>
                <Link> Read more </Link>
              </figcaption>
            </figure>
          </div>
          <div class="wrapper--1">
            <figure class="image">
              <Link class="image__link">
                <img src="/storage/slides/slide-1.jpg" alt="" srcset="" />
                <div class="overlay"></div>
              </Link>
              <figcaption class="image__footer">
                <h5 class="title">SPIRIT OF GIVING CROWDFUNDING</h5>
                <div class="details">
                  <p>Give back and impact current and future generations</p>
                </div>
                <Link> Read more </Link>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import FrontEndLayout from "../../components/FrontEndLayout";
import { Link } from "@inertiajs/inertia-vue";
import SLinks from "../../components/pages/SLinks";
import SLink from "../../components/pages/SLink";
import Banner from "../../components/pages/Banner";
import PageArticle from "../../components/pages/PageArticle";
export default {
  name: "StudentLife",
  layout: FrontEndLayout,
  components: {
    Link,
    Banner,
    SLinks,
    SLink,
    PageArticle,
  },
  data() {
    return {
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