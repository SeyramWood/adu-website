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
            {{ $t("pages.home.title.7") }}
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
              <Link href="/academics">{{ $t("pages.home.title.11") }}</Link>
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
        <div class="image__wrapper content--1" v-if="getSpotlight[0]">
          <figure class="image">
            <Link
              class="image__link"
              href="javascript::"
              @click.prevent="readSpotlight(getSpotlight[0])"
            >
              <img :src="getSpotlight[0].image" alt="" srcset="" />
              <div class="overlay"></div>
            </Link>
            <figcaption class="image__footer">
              <h5 class="title">{{ getSpotlight[0].title }}</h5>
              <div class="details">
                <p>{{ getSpotlight[0].text.substr(0, 40) }}</p>
              </div>
              <Link
                href="javascript::"
                @click.prevent="readSpotlight(getSpotlight[0])"
              >
                {{ $t("pages.home.rm") }}
              </Link>
            </figcaption>
          </figure>
        </div>

        <div class="image__wrapper content--2">
          <div class="wrapper--1" v-if="getSpotlight[1]">
            <figure class="image">
              <Link
                class="image__link"
                href="javascript::"
                @click.prevent="readSpotlight(getSpotlight[1])"
              >
                <img :src="getSpotlight[1].image" alt="" srcset="" />
                <div class="overlay"></div>
              </Link>
              <figcaption class="image__footer">
                <h5 class="title">{{ getSpotlight[1].title }}</h5>
                <div class="details">
                  <p>{{ getSpotlight[1].text.substr(0, 40) }}</p>
                </div>
                <Link
                  href="javascript::"
                  @click.prevent="readSpotlight(getSpotlight[1])"
                >
                  {{ $t("pages.home.rm") }}
                </Link>
              </figcaption>
            </figure>
          </div>
          <div class="wrapper--1" v-if="getSpotlight[2]">
            <figure class="image">
              <Link
                class="image__link"
                href="javascript::"
                @click.prevent="readSpotlight(getSpotlight[2])"
              >
                <img :src="getSpotlight[2].image" alt="" srcset="" />
                <div class="overlay"></div>
              </Link>
              <figcaption class="image__footer">
                <h5 class="title">{{ getSpotlight[2].title }}</h5>
                <div class="details">
                  <p>{{ getSpotlight[2].text.substr(0, 40) }}</p>
                </div>
                <Link
                  href="javascript::"
                  @click.prevent="readSpotlight(getSpotlight[2])"
                >
                  {{ $t("pages.home.rm") }}
                </Link>
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
        <div class="s__col c--4" v-for="(news, index) in getNews" :key="index">
          <div class="news__container">
            <div class="image">
              <img :src="news.image[index]" alt="" srcset="" />
            </div>
            <h1 class="title">{{ news.title }}</h1>
            <div class="text" v-html="news.text.substr(0, 200)"></div>
            <div class="link">
              <Link href="javascript::" @click.prevent="readNews(news)">{{
                $t("pages.home.title.16")
              }}</Link>
              <span>&rarr;</span>
            </div>
          </div>
        </div>
      </div>
      <div class="view__more">
        <Link as="button">{{ $t("pages.home.rm") }}</Link>
      </div>
    </div>

    <s-modal v-model="newsModal" width="70rem">
      <div class="english-programme-details" v-if="currentNews">
        <div class="section syllabus">
          <div style="width: 70%; margin: 0 auto 2rem auto">
            <vueper-slides
              fade
              autoplay
              :touchable="false"
              fixed-height="40rem"
            >
              <vueper-slide
                v-for="(image, i) in currentNews.image"
                :key="i"
                :image="image"
                style="height: 100%"
              />
            </vueper-slides>
          </div>
          <h1>{{ currentNews.title }}</h1>
          <div v-html="currentNews.text"></div>
        </div>
      </div>
    </s-modal>
    <s-modal v-model="spotlightModal" width="70rem">
      <div class="english-programme-details" v-if="currentSpotlight">
        <div class="section syllabus">
          <h1>{{ currentSpotlight.title }}</h1>
          <p v-html="currentSpotlight.text"></p>
        </div>
      </div>
    </s-modal>
  </div>
</template>

<script>
import FrontEndLayout from "../../components/FrontEndLayout";
import { Link } from "@inertiajs/inertia-vue";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
import SModal from "../../components/SModal";
export default {
  name: "Home",
  layout: FrontEndLayout,
  components: {
    Link,
    VueperSlides,
    VueperSlide,
    SModal,
  },
  computed: {
    getNews() {
      return this.news;
    },
    getSpotlight() {
      return this.spotlight;
    },
  },
  mounted() {
    this.$watch(
      () => this.$lang.locale,
      (locale) => {
        this.news = this.$lang.messages[`${locale}.pages`].home.news;
        this.spotlight = this.$lang.messages[`${locale}.pages`].home.spotlight;
      },
      { immediate: true }
    );
  },
  data() {
    return {
      newsModal: false,
      currentNews: null,
      spotlightModal: false,
      currentSpotlight: null,
      news: [],
      spotlight: [],
      slides: [
        {
          image: "/storage/pages/home/slides/3.jpg",
          content: `<div class='home__cta__box'><h6 class=''>Welcome to</h6><h4>African Development Universalis</h4></div>`,
        },
        {
          image: "/storage/pages/home/slides/2.jpg",
          title: `<div class="slide__title"><p>We are leaders, innovators and entreprenuers</p></div>`,
        },
        {
          image: "/storage/pages/home/slides/1.jpg",
          title: `<div class="slide__title"><p>We are changing the future of the Sahel one leader at a time</p></div>`,
        },
        {
          image: "/storage/pages/home/slides/4.jpg",
          title: `<div class="slide__title"><p>Are you ready to change the conversation about the Sahel?</p></div>`,
        },
      ],
    };
  },
  methods: {
    readNews(data) {
      this.currentNews = data;
      this.$nextTick(() => {
        this.newsModal = true;
      });
    },
    readSpotlight(data) {
      this.currentSpotlight = data;
      this.$nextTick(() => {
        this.spotlightModal = true;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>