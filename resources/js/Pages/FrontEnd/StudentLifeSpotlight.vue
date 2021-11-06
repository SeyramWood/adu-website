<template>
  <section class="about">
    <div class="banner__wrapper">
      <banner bg="stats.jpg" title="Student Life">
        <template #description>
          <p style="padding-bottom: 4rem">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed
            recusandae officia, similique quam, accusamus tempore consequuntur
            dolores sapiente non, omnis blanditiis molestiae tempora aspernatur
            distinctio a debitis qui quas necessitatibus!
          </p>
        </template>
      </banner>
    </div>

    <section class="detail__article">
      <aside class="detail__article__aside">
        <ul class="links">
          <li class="link active">
            <Link>ilimi Student Government</Link>
          </li>
          <li class="link">
            <Link>Internship and Career Services</Link>
          </li>
          <li class="link">
            <Link>Clubs and Societies</Link>
          </li>
          <li class="link">
            <Link>Guest Lecture Series</Link>
          </li>
          <li class="link">
            <Link>Health and Webeing</Link>
          </li>
          <li class="link">
            <Link>Student Success Center</Link>
          </li>
          <li class="link">
            <Link>Alumni</Link>
          </li>
        </ul>
      </aside>
      <article class="detail__article__main">
        <div class="detail__article__main__title">
          <h1>ilimi Student Government</h1>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
          laboriosam error quidem deserunt, sequi sint voluptas perferendis
          reprehenderit nemo, corrupti commodi. Qui dolorem distinctio ex ab
          nesciunt eum minima dolores.
        </p>
      </article>
    </section>
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
  name: "StudentLifeSpotlight",
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