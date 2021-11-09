<template>
  <section class="about">
    <div class="banner__wrapper">
      <banner bg="images/student-life-1.jpg" title="Student Life">
        <template #description>
          <p style="padding-bottom: 4rem">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed
            recusandae officia, similique quam, accusamus tempore consequuntur
            dolores sapiente non, omnis blanditiis molestiae tempora aspernatur
            distinctio a debitis qui quas necessitatibus!
          </p>
        </template>
        <template #links>
          <s-links>
            <s-link href="#lifeOnCampus">Life on Campus</s-link>
            <s-link href="#spotlight">Spotlight</s-link>
          </s-links>
        </template>
      </banner>
    </div>

    <section class="academics__major" id="lifeOnCampus">
      <h1 class="title">LIFE ON CAMPUS</h1>
      <div class="academics__major__links">
        <div class="link">
          <h3 class="title">ilimi Student Government</h3>
          <div class="link__box">
            <Link
              :href="`student-life/life-on-campuse/${1}/ilimi-student-government`"
            >
              View More</Link
            >
          </div>
        </div>
        <div class="link">
          <h3 class="title">Internship and Career Services</h3>
          <div class="link__box">
            <Link> View More</Link>
          </div>
        </div>
      </div>
      <div class="academics__major__links">
        <div class="link">
          <h3 class="title">Clubs and Societies</h3>
          <div class="link__box">
            <Link> View More</Link>
          </div>
        </div>
        <div class="link">
          <h3 class="title">Guest Lecture Series</h3>
          <div class="link__box">
            <Link> View More</Link>
          </div>
        </div>
      </div>
      <div class="academics__major__links">
        <div class="link">
          <h3 class="title">Health and Well-being</h3>
          <div class="link__box">
            <Link> View More</Link>
          </div>
        </div>
        <div class="link">
          <h3 class="title">Student Success Center</h3>
          <div class="link__box">
            <Link> View More</Link>
          </div>
        </div>
      </div>
      <div class="academics__major__links">
        <div class="link">
          <h3 class="title">Alumni</h3>
          <div class="link__box">
            <Link> View More</Link>
          </div>
        </div>
      </div>
    </section>

    <div class="home__spotlight" id="spotlight">
      <div class="header primary mb-4">
        <div class="line"></div>
        <h4 class="title">STUDENT SPOTLIGHT</h4>
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
              <h5 class="title">SPIRIT OF GIVING CROWDFUNDING</h5>
              <div class="details">
                <p>Give back and impact current and future generations</p>
              </div>
              <Link> Read more </Link>
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