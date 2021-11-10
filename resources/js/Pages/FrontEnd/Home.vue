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
        <Link>Leadership</Link>
      </div>
      <div class="home__values__line"></div>
      <div class="home__values__link">
        <Link>Innovation</Link>
      </div>
      <div class="home__values__line"></div>
      <div class="home__values__link">
        <Link>Excellence</Link>
      </div>
    </div>
    <div class="home__stats">
      <div class="content">
        <div class="stat">
          <div class="icon">
            <v-icon>mdi-chart-bar</v-icon>
          </div>
          <div class="percentage">100%</div>
          <div class="title">Internships / Starting Own Companies</div>
        </div>
        <div class="stat">
          <div class="icon">
            <v-icon>mdi-finance</v-icon>
          </div>
          <div class="percentage">70%</div>
          <div class="title">Undergraduates Receive Financial Aid</div>
        </div>
        <div class="stat">
          <div class="icon">
            <v-icon>mdi-account-supervisor</v-icon>
          </div>
          <div class="percentage">70%</div>
          <div class="title">Women to Fulfil Gender Equality</div>
        </div>
        <div class="stat">
          <div class="icon">
            <v-icon>mdi-currency-usd</v-icon>
          </div>
          <div class="percentage">$10 million</div>
          <div class="title">Required For 1,000 leaders Over 10yrs</div>
        </div>
      </div>
    </div>
    <div class="home__news">
      <div class="header primary mb-4">
        <div class="line"></div>
        <h4 class="title">Academics</h4>
        <div class="line"></div>
      </div>
      <div class="s__row">
        <div class="s__col c--4">
          <div class="news__container">
            <div class="image">
              <img src="/storage/pages/academics/law.jpg" alt="" srcset="" />
            </div>
            <h1 class="title">Law</h1>
            <p class="text">
              A.D.U. offers a three-year degree in Business Law that teaches
              courses in many different aspects of legal work. Students entering
              this program should have a strong commitment to justice and
              equality and fighting corruption.
            </p>
            <div class="link">
              <Link href="/academics">Law</Link>
              <span>&rarr;</span>
            </div>
          </div>
        </div>
        <div class="s__col c--4">
          <div class="news__container">
            <div class="image">
              <img src="/storage/pages/academics/ai.jpg" alt="" srcset="" />
            </div>
            <h1 class="title">Artificial Intelligence</h1>
            <p class="text">
              The Bachelor of Science in Artificial Intelligence - BS(AI)
              program provides learners the knowledge and skills to transform
              complex inputs of text, vision, language and large databases into
              intelligible and actionable decisions to enhance human
              capabilities.
            </p>
            <div class="link">
              <Link href="/academics">Artificial Intelligence</Link>
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
            <h1 class="title">English Programme</h1>
            <p class="text">
              The ADU English program is an English Learning establishment of
              the African Development University that is focused on building the
              English language proficiency of professionals, businessmen and
              businesswomen etc.
            </p>
            <div class="link">
              <Link href="/academics">English Programme</Link>
              <span>&rarr;</span>
            </div>
          </div>
        </div>
      </div>
      <div class="view__more">
        <Link as="button" href="/academics">read more</Link>
      </div>
    </div>
    <div class="home__spotlight">
      <div class="header primary mb-4">
        <div class="line"></div>
        <h4 class="title">IN THE SPOTLIGHT</h4>
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
        <h4 class="title">Ilimi News</h4>
        <div class="line"></div>
      </div>
      <div class="s__row">
        <div class="s__col c--4">
          <div class="news__container">
            <div class="image">
              <img src="/storage/images/news-1.jpg" alt="" srcset="" />
            </div>
            <h1 class="title">The Best Reactions</h1>
            <p class="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum aut, quaerat fugiat tempora itaque esse, natus deleniti
              pariatur temporibus doloribus at maiores autem minima mollitia
              libero maxime ipsam minus officia.
            </p>
            <div class="link">
              <Link>The Best Reactions</Link>
              <span>&rarr;</span>
            </div>
          </div>
        </div>
        <div class="s__col c--4">
          <div class="news__container">
            <div class="image">
              <img src="/storage/images/news.jpg" alt="" srcset="" />
            </div>
            <h1 class="title">ADU Scholarships</h1>
            <p class="text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
              a dolor sequi omnis dolore quia iure facilis suscipit, itaque
              ipsam quis repudiandae exercitationem quidem magnam explicabo
              fugit non odio. Accusantium!
            </p>
            <div class="link">
              <Link>ADU Scholarships</Link>
              <span>&rarr;</span>
            </div>
          </div>
        </div>
        <div class="s__col c--4">
          <div class="news__container">
            <div class="image">
              <img src="/storage/slides/slide-1.jpg" alt="" srcset="" />
            </div>
            <h1 class="title">Lorem ipsum, dolor sit amet</h1>
            <p class="text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi,
              blanditiis! Distinctio minus, blanditiis, quos repellat dolore
              sint at eveniet aut, cum dignissimos tempora! Omnis praesentium
              incidunt eius explicabo minus dolorum.
            </p>
            <div class="link">
              <Link>Lorem ipsum, dolor sit amet</Link>
              <span>&rarr;</span>
            </div>
          </div>
        </div>
      </div>
      <div class="view__more">
        <Link as="button">read more</Link>
      </div>
    </div>

    <div class="home__donate">
      <div class="home__donate__content">
        <h3>ARE YOU READY TO CHANGE THE CONVERSATION ABOUT THE SAHEL?</h3>
        <h1>Be part of the solution</h1>
        <p>
          A.D.U. is reshaping the future for the region by educating <br />
          its most exceptional young women and men. We need your help.
        </p>
        <Link as="button" href="/donate">Donate Now</Link>
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