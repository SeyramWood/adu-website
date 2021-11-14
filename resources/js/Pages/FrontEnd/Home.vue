<template>
  <div class="home">
    <div class="home__cta">
      <vueper-slides
        fade
        autoplay
        :touchable="false"
        :parallax="1"
        :fixed-height="true"
      >
        <vueper-slide
          v-for="(slide, i) in slides"
          :key="i"
          :image="slide.image"
          :title="slide.title"
          :content="slide.content"
          style="height: 100%"
        />
      </vueper-slides>
    </div>

    <div class="home__values">
      <div class="home__values__link">
        <Link>{{ $t("pages.home.title.1") }}</Link>
      </div>
      <div class="home__values__line"></div>
      <div class="home__values__link">
        <Link>{{ $t("pages.home.title.2") }}</Link>
      </div>
      <div class="home__values__line"></div>
      <div class="home__values__link">
        <Link>{{ $t("pages.home.title.3") }}</Link>
      </div>
    </div>
    <div class="home__stats">
      <div class="content">
        <div class="stat">
          <div class="icon">
            <v-icon>mdi-chart-bar</v-icon>
          </div>
          <div class="percentage">100%</div>
          <div class="title">{{ $t("pages.home.title.4") }}</div>
        </div>
        <div class="stat">
          <div class="icon">
            <v-icon>mdi-finance</v-icon>
          </div>
          <div class="percentage">70%</div>
          <div class="title">{{ $t("pages.home.title.5") }}</div>
        </div>
        <div class="stat">
          <div class="icon">
            <v-icon>mdi-account-supervisor</v-icon>
          </div>
          <div class="percentage">70%</div>
          <div class="title">{{ $t("pages.home.title.6") }}</div>
        </div>
        <div class="stat">
          <div class="icon">
            <v-icon>mdi-currency-usd</v-icon>
          </div>
          <div class="percentage">$10 million</div>
          <div class="title">
            {{ $t("pages.home.title.7") }}Required For 1,000 leaders Over 10yrs
          </div>
        </div>
      </div>
    </div>
    <div class="home__news">
      <div class="header primary mb-4">
        <div class="line"></div>
        <h4 class="title">{{ $t("pages.home.title.8") }}</h4>
        <div class="line"></div>
      </div>
      <div class="s__row">
        <div class="s__col c--4">
          <div class="news__container">
            <div class="image">
              <img src="/storage/pages/academics/law.jpg" alt="" srcset="" />
            </div>
            <h1 class="title">{{ $t("pages.home.title.9") }}</h1>
            <p class="text">
              {{ $t("pages.home.p") }}
            </p>
            <div class="link">
              <Link href="/academics">{{ $t("pages.home.title.9") }}</Link>
              <span>&rarr;</span>
            </div>
          </div>
        </div>
        <div class="s__col c--4">
          <div class="news__container">
            <div class="image">
              <img src="/storage/pages/academics/ai.jpg" alt="" srcset="" />
            </div>
            <h1 class="title">{{ $t("pages.home.title.10") }}</h1>
            <p class="text">
              {{ $t("pages.home.p1") }}
            </p>
            <div class="link">
              <Link href="/academics">{{ $t("pages.home.title.10") }}</Link>
              <span>&rarr;</span>
            </div>
          </div>
        </div>
        <div class="s__col c--4">
          <div class="news__container">
            <div class="image">
              <img
                src="/storage/pages/academics/english.jpeg"
                alt=""
                srcset=""
              />
            </div>
            <h1 class="title">{{ $t("pages.home.title.11") }}</h1>
            <p class="text">
              {{ $t("pages.home.p2") }}
            </p>
            <div class="link">
              <Link href="/academics">{{ $t("pages.home.rm") }}</Link>
              <span>&rarr;</span>
            </div>
          </div>
        </div>
      </div>
      <div class="view__more">
        <Link as="button" href="/academics">{{ $t("pages.home.rm") }}</Link>
      </div>
    </div>
    <div class="home__spotlight">
      <div class="header primary mb-4">
        <div class="line"></div>
        <h4 class="title">{{ $t("pages.home.title.12") }}</h4>
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
              <h5 class="title">{{ $t("pages.home.title.13") }}</h5>
              <div class="details">
                <p>Give back and impact current and future generations</p>
              </div>
              <Link> {{ $t("pages.home.rm") }} </Link>
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
                <h5 class="title">{{ $t("pages.home.title.13") }}</h5>
                <div class="details">
                  <p>Give back and impact current and future generations</p>
                </div>
                <Link> {{ $t("pages.home.rm") }} </Link>
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
                <h5 class="title">{{ $t("pages.home.title.13") }}</h5>
                <div class="details">
                  <p>Give back and impact current and future generations</p>
                </div>
                <Link> {{ $t("pages.home.rm") }} </Link>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="home__happening">
      <div class="header primary mb-4">
        <div class="line"></div>
        <h4 class="title">What's happening</h4>
        <div class="line"></div>
      </div>
    </div> -->

    <div class="home__news">
      <div class="header primary mb-4">
        <div class="line"></div>
        <h4 class="title">{{ $t("pages.home.title.14") }}</h4>
        <div class="line"></div>
      </div>
      <div class="s__row">
        <div class="s__col c--4">
          <div class="news__container">
            <div class="image">
              <img src="/storage/images/news-1.jpg" alt="" srcset="" />
            </div>
            <h1 class="title">{{ $t("pages.home.title.15") }}</h1>
            <p class="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum aut, quaerat fugiat tempora itaque esse, natus deleniti
              pariatur temporibus doloribus at maiores autem minima mollitia
              libero maxime ipsam minus officia.
            </p>
            <div class="link">
              <Link>{{ $t("pages.home.title.16") }}</Link>
              <span>&rarr;</span>
            </div>
          </div>
        </div>
        <div class="s__col c--4">
          <div class="news__container">
            <div class="image">
              <img src="/storage/images/news.jpg" alt="" srcset="" />
            </div>
            <h1 class="title">{{ $t("pages.home.title.17") }}</h1>
            <p class="text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
              a dolor sequi omnis dolore quia iure facilis suscipit, itaque
              ipsam quis repudiandae exercitationem quidem magnam explicabo
              fugit non odio. Accusantium!
            </p>
            <div class="link">
              <Link>{{ $t("pages.home.title.17") }}</Link>
              <span>&rarr;</span>
            </div>
          </div>
        </div>
        <div class="s__col c--4">
          <div class="news__container">
            <div class="image">
              <img src="/storage/slides/slide-1.jpg" alt="" srcset="" />
            </div>
            <h1 class="title">{{ $t("pages.home.title.17") }}</h1>
            <p class="text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi,
              blanditiis! Distinctio minus, blanditiis, quos repellat dolore
              sint at eveniet aut, cum dignissimos tempora! Omnis praesentium
              incidunt eius explicabo minus dolorum.
            </p>
            <div class="link">
              <Link>{{ $t("pages.home.title.17") }}</Link>
              <span>&rarr;</span>
            </div>
          </div>
        </div>
      </div>
      <div class="view__more">
        <Link as="button">{{ $t("pages.home.rm") }}</Link>
      </div>
    </div>
  </div>
</template>

<script>
import FrontEndLayout from "../../components/FrontEndLayout";
import { Link } from "@inertiajs/inertia-vue";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
export default {
  name: "Home",
  layout: FrontEndLayout,
  components: {
    Link,
    VueperSlides,
    VueperSlide,
  },

  data() {
    return {
      slides: [
        {
          image: "/storage/pages/home/slides/3.jpg",
          content: `<div class='home__cta__box'><h6 class=''>Welcome to</h6><h4>African Development Universalis</h4></div>`,
        },
        {
          image: "/storage/pages/home/slides/2.jpg",
          title: `<h4 class="slide__title">We are leaders, innovators and entreprenuers</h4>`,
        },
        {
          image: "/storage/pages/home/slides/1.jpg",
          title: `<h4 class="slide__title">We are changing the future of the Sahel one leader at a time</h4>`,
        },
        {
          image: "/storage/pages/home/slides/4.jpg",
          title: `<h4 class="slide__title">Are you ready to change the conversation about the Sahel?</h4>`,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>