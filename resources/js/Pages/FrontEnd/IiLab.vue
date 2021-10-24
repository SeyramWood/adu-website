<template>
  <section class="about">
    <div class="banner__wrapper">
      <banner bg="stats.jpg" title="iiLab">
        <template #description>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed
          recusandae officia, similique quam, accusamus tempore
        </template>
        <template #links>
          <s-links>
            <s-link href="#welcome">About iiLab</s-link>
            <s-link href="#services">Services</s-link>
            <s-link href="#events">Events</s-link>
            <s-link href="#showroom">Showroom</s-link>
            <s-link href="#spotlight ">Spotlight</s-link>
          </s-links>
        </template>
      </banner>
    </div>

    <section class="article__wrapper" id="welcome">
      <page-article title="Welcome to IILab" image="stats.jpg">
        <template #article>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste illo,
          tenetur dolore placeat cumque dignissimos!Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Iste illo, tenetur dolore placeat cumque
          dignissimos! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <button class="btn services--btn">Read more</button>
        </template>
      </page-article>
    </section>
    <section class="article__wrapper article__wrapper--services" id="services">
      <page-article title="Services" image="stats.jpg" :ltr="true">
        <template #article>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste illo,
          tenetur dolore placeat cumque dignissimos!Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Iste illo, tenetur dolore placeat cumque
          <button class="btn services--btn">Read more</button>
        </template>
      </page-article>
    </section>
    <div class="home__news" id="events">
      <div class="header primary mb-4">
        <div class="line"></div>
        <h4 class="title">events</h4>
        <div class="line"></div>
      </div>
      <div class="s__row">
        <div class="s__col c--5">
          <div class="iilab__events__link">
            <span>OCT 24</span>
            <Link>Lorem ipsum dolor sit ametLorem ipsum dolor sit amet</Link>
          </div>
          <div class="iilab__events__link">
            <span>SEP 15</span>
            <Link>Lorem ipsum dolor sit amet</Link>
          </div>
          <div class="iilab__events__link">
            <span>SEP 01</span>
            <Link>Lorem ipsum dolor sit amet</Link>
          </div>
          <div class="iilab__events__link__more">
            <Link>More events</Link>
            <span>&rarr;</span>
          </div>
        </div>
        <div class="s__col c--7">
          <div class="iilab__events s__row">
            <div class="iilab__events__event s__col c--6">
              <div class="image">
                <img
                  src="/storage/images/business-1.jpg"
                  alt="event image"
                  srcset=""
                />
              </div>
              <div class="date">October 03, 2021</div>
              <Link class="link">Event name</Link>
              <div class="description">
                The show will be at 7:30pm in consectetur adipisicing elit.
                Ratione illum quo saepe incidunt vero quod fuga
              </div>
            </div>
            <div class="iilab__events__event s__col c--6">
              <div class="image">
                <img
                  src="/storage/images/business-1.jpg"
                  alt="event image"
                  srcset=""
                />
              </div>
              <div class="date">October 03, 2021</div>
              <Link class="link">Event name</Link>
              <div class="description">
                The show will be at 7:30pm in consectetur adipisicing elit.
                Ratione illum quo saepe incidunt vero quod fuga
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="home__news" id="showroom">
      <div class="header primary mb-4">
        <div class="line"></div>
        <h4 class="title">Showroom</h4>
        <div class="line"></div>
      </div>
      <div class="s__row">
        <div class="s__col c--4">
          <div class="news__container">
            <div class="image">
              <img src="/storage/images/business-1.jpg" alt="" srcset="" />
            </div>
            <h1 class="title">Virtual showroom,</h1>
            <p class="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              soluta numquam, distinctio omnis doloremque repellendus error
              repudiandae tempore obcaecati. Dolores vitae ratione ut delectus
            </p>
            <div class="link">
              <Link>Read more</Link>
              <span>&rarr;</span>
            </div>
          </div>
        </div>
        <div class="s__col c--4">
          <div class="news__container">
            <div class="image">
              <img src="/storage/images/ai.jpg" alt="" srcset="" />
            </div>
            <h1 class="title">Young leaders businesses and contacts</h1>
            <p class="text">
              Rich learning experiences that provide a broad liberal arts
              foundation and deep subject-area expertise
            </p>
            <div class="link">
              <Link>Read more</Link>
              <span>&rarr;</span>
            </div>
          </div>
        </div>
        <div class="s__col c--4">
          <div class="news__container">
            <div class="image">
              <img src="/storage/images/academics.jpg" alt="" srcset="" />
            </div>
            <h1 class="title">Project Name</h1>
            <p class="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              eaque corporis fugit ullam nobis exercitationem ipsum quo
              doloribus reiciendis eos ducimus, temporibus excepturi, maxime
            </p>
            <div class="link">
              <Link>Read more</Link>
              <span>&rarr;</span>
            </div>
          </div>
        </div>
      </div>
      <div class="view__more">
        <Link as="button">View all</Link>
      </div>
    </div>
    <section class="feed__wrapper" id="spotlight">
      <div class="feed__wrapper__content feed__wrapper__content--left-bg">
        <div class="image">
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
        </div>
        <div class="content">
          <h1 class="title">Mr. Kojo Manu</h1>
          <p class="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia nemo
            neque odit consequuntur incidunt magni, veniam quisquam aut eligendi
            sed harum, voluptatum natus, optio aspernatur velit ad alias impedit
            temporibus?
          </p>
          <Link class="link">Read More</Link>
        </div>
      </div>
      <div class="feed__wrapper__content feed__wrapper__content--right-bg">
        <div class="image">
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
        </div>
        <div class="content">
          <h1 class="title">Miss Ama Evelyn</h1>
          <p class="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia nemo
            neque odit consequuntur incidunt magni, veniam quisquam aut eligendi
            sed harum, voluptatum natus, optio aspernatur velit ad alias impedit
            temporibus?
          </p>
          <Link class="link">Read More</Link>
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
  name: "IiLab",
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