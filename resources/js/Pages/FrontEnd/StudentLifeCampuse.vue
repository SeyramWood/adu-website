<template>
  <section class="student__life">
    <div class="banner__wrapper">
      <banner bg="images/student-life-1.jpg" title="Student Life">
        <template #description>
          <p style="padding-bottom: 4rem">
            {{ $t("pages.studentLife.banner") }}
          </p>
        </template>
      </banner>
    </div>

    <section class="detail__article">
      <aside class="detail__article__aside">
        <ul class="links">
          <li
            :class="[
              'link',
              lifeType === 'ilimi-student-government' && 'active',
            ]"
          >
            <Link
              :href="`/student-life/life-on-campuse/ilimi-student-government`"
              >ilimi Student Government</Link
            >
          </li>
          <li
            :class="[
              'link',
              lifeType === 'internship-and-career-services' && 'active',
            ]"
          >
            <Link
              :href="`/student-life/life-on-campuse/internship-and-career-services`"
              >Internship and Career Services</Link
            >
          </li>
          <li :class="['link', lifeType === 'clubs-and-societies' && 'active']">
            <Link :href="`/student-life/life-on-campuse/clubs-and-societies`"
              >Clubs and Societies</Link
            >
          </li>
          <li
            :class="['link', lifeType === 'guest-lecture-series' && 'active']"
          >
            <Link :href="`/student-life/life-on-campuse/guest-lecture-series`"
              >Guest Lecture Series</Link
            >
          </li>
          <li
            :class="['link', lifeType === 'health-and-well-being' && 'active']"
          >
            <Link :href="`/student-life/life-on-campuse/health-and-well-being`"
              >Health and Well-being</Link
            >
          </li>
          <li
            :class="['link', lifeType === 'student-success-center' && 'active']"
          >
            <Link :href="`/student-life/life-on-campuse/student-success-center`"
              >Student Success Center</Link
            >
          </li>
          <li :class="['link', lifeType === 'alumni' && 'active']">
            <Link :href="`/student-life/life-on-campuse/alumni`">Alumni</Link>
          </li>
        </ul>
      </aside>
      <article class="detail__article__main">
        <section
          class="services"
          v-if="lifeType === 'internship-and-career-services'"
        >
          <h1 class="title">Internship and Career Services</h1>
          <p class="text">
            Career Services – is a unit within Student and Community Affairs,
            which provides career readiness and preparation to our young
            leaders. The goal of career services is to provide career assistance
            for students in their career choices and help them to find
            work-study positions, internships and full-time positions upon
            graduation.
          </p>
          <p class="text">
            The Career Services organizes workshops, provides career counseling
            and assists students with a variety of career development needs.
            This office focuses on employer relations at the national and
            international level to provide employment opportunities for current
            students and alumni.
          </p>
          <p class="text">Career Services revolves around the following:</p>
          <div class="advantages">
            <div
              class="advantages__card"
              v-for="service in services"
              :key="service.text"
            >
              <span>
                <v-icon>{{ service.icon }}</v-icon>
              </span>
              <p>{{ service.text }}</p>
            </div>
          </div>
        </section>
        <section v-else-if="lifeType === 'ilimi-student-government'">
          <h1 class="title">ilimi Student Government</h1>
          <div class="student-govenment">
            <div
              class="student-govenment__card"
              v-for="(g, index) in gallery"
              :key="index"
            >
              <img :src="g" alt="" srcset="" />
            </div>
          </div>
        </section>
        <section v-else-if="lifeType === 'clubs-and-societies'">
          <h1 class="title">Clubs and societies</h1>
          <div class="home__news clubs-and-societies">
            <div class="clubs-and-societies">
              <div
                class="clubs-and-societies__card"
                v-for="show in showrooms"
                :key="show.title"
              >
                <div class="news__container">
                  <div class="image">
                    <img :src="show.image" alt="" srcset="" />
                  </div>
                  <h1 class="title">
                    {{
                      `${show.title.substr(0, 30)} ${
                        show.title.length > 30 ? "..." : ""
                      }`
                    }}
                  </h1>
                  <p class="text">
                    {{
                      `${show.description.substr(0, 65)} ${
                        show.description.length > 65 ? "..." : "."
                      }`
                    }}
                  </p>
                  <div
                    class="link"
                    @click="getShowroomData(show)"
                    role="button"
                  >
                    <a ref="javascript:">Read more</a>
                    <span>&rarr;</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="view__more">
              <Link as="button" href="#">Load more</Link>
            </div>
          </div>
        </section>
        <section class="cntent" v-else-if="lifeType === 'guest-lecture-series'">
          <h1 class="title">Guest Lecture Series</h1>
          <p class="text">
            As the learning experiences of our students is so important, we
            being back in our program : Guest speaker series . A.D.U. regularly
            invited guest speakers who have an incredible story , great
            experience, good influence to come and interact with students and
            lecture in fact to inspire , guide and give them energy to achieve
            their goals .
          </p>
        </section>
        <section
          class="cntent"
          v-else-if="lifeType === 'student-success-center'"
        >
          <h1 class="title">Student Success Center</h1>
          <p class="text">
            As part of the journey of a ILIMI YoungLeader , Student life is the
            daily life of a student, typically involving social activities
            within the educational campus, or the time spent with school-mates
            and teachers within the classes and outside . The goal of student
            life is to create a good environment where students will grow and
            have a very good experience before and after getting theirs degree .
          </p>
        </section>
        <section class="cntent" v-else-if="lifeType === 'alumni'">
          <h1 class="title">Alumni</h1>
          <p class="text">
            Our Alumni community is getting hug and hug . At this point we have
            two Cohort of graduated student , The Obama’s ( first cohort of
            A.D.U. ) and the Kagame’s ( second cohort of A.D.U. ) . Alumni are
            student that ended their 3 years Bachelor at A.D.U. some of them
            already work in local companies , and some that their own startups .
          </p>
        </section>
        <section v-else>
          <p>No data to load</p>
        </section>
      </article>
    </section>

    <s-modal v-model="showroomModal" width="50rem" class="seyram">
      <div class="event-details" v-if="currentShowroom">
        <div class="image">
          <img :src="currentShowroom.image" alt="event image" srcset="" />
        </div>
        <h1>{{ currentShowroom.title }}</h1>

        <p>
          {{ currentShowroom.description }}
        </p>
      </div>
    </s-modal>
  </section>
</template>

<script>
import FrontEndLayout from "../../components/FrontEndLayout";
import { Link } from "@inertiajs/inertia-vue";
import SLinks from "../../components/pages/SLinks";
import SLink from "../../components/pages/SLink";
import Banner from "../../components/pages/Banner";
import PageArticle from "../../components/pages/PageArticle";
import SModal from "../../components/SModal";
export default {
  name: "StudentLifeCampuse",
  layout: FrontEndLayout,
  components: {
    Link,
    Banner,
    SLinks,
    SLink,
    PageArticle,
    SModal,
  },
  props: {
    lifeType: {
      require: true,
      type: String,
    },
  },
  data() {
    return {
      showroomModal: false,
      currentShowroom: null,
      gallery: [
        "/storage/pages/student-life/1.jpg",
        "/storage/pages/student-life/2.jpg",
        "/storage/pages/student-life/3.jpg",
        "/storage/pages/student-life/4.jpg",
        "/storage/pages/student-life/5.jpg",
      ],
      services: [
        {
          text: "Students’ Career Development",
          icon: "mdi-account-group-outline",
        },
        {
          text: "Career and Self-Assessments",
          icon: "mdi-briefcase-check-outline",
        },
        {
          text: "Career Counselling and Coaching",
          icon: "mdi-coach-lamp",
        },
        {
          text: "Professional Week Series",
          icon: "mdi-calendar-outline",
        },
        {
          text: "Mentorship Program",
          icon: "mdi-card-account-details-outline",
        },
        {
          text: "Work Study Opportunities",
          icon: "mdi-card-account-details-outline",
        },
        {
          text: "Seniors Exit Strategy",
          icon: "mdi-strategy",
        },
        {
          text: "Internships and Job Opportunities",
          icon: "mdi-briefcase-outline",
        },
        {
          text: "Practical and Technical Training Platforms",
          icon: "mdi-billboard",
        },
        {
          text: "Employer Engagement",
          icon: "mdi-gantry-crane",
        },
        {
          text: "Developing and supporting Alumni on a case by case basis",
          icon: "mdi-cog-transfer-outline",
        },
      ],
      showrooms: [
        {
          title: "The Humanitarian club: Latifa Amadou Sayo",
          description:
            "The Humanitarian Club is an organized student association that drives ADU students to foster and cultural service to their communities. The main goal of the club is to bring help and solve problems in our society following the humanitarian aids principles. We aim to bring education, growth, health, and development to our community and our country.",
          image: "/storage/images/ceo-1.jpg",
          social: [
            "Facebook: tallit design",
            "Instagram: tallitforculture",
            "Twitter: tallit design",
            "LinkedIn: tallit design",
          ],
        },
        {
          title: "The E-Games Club: Hamida Abdou Abdoul Karim",
          description: `This Club gathers exclusively students from African Development University passionate about gaming. The motivation is to create the first ecosystem for e-sports competition in our university. The members are gamers, they play it as a sport, and they are professionals.`,
          image: "/storage/images/ceo-2.jpg",
          social: [
            "Facebook: kakaki multimedia",
            "Instagram: kakakimultimedia",
            "Twitter: kakaki multimedia",
          ],
        },
        {
          title: "The Cooking Club: Haleematou Moussa",
          description: `The cooking club aims to gather students passionate about cooking experience, learn and teach among themselves different cooking styles and dishes. The vision of this club is to discover and share the culinary experiences that each member knows. In this club, students do not only learn Nigerian dishes but travel a bit of everything among the countries of Africa or even out of our continent to have more experiences.`,
          image: "/storage/images/ceo-3.jpg",
          social: [],
        },
      ],
    };
  },
  methods: {
    getShowroomData(showroom) {
      this.currentShowroom = showroom;
      this.$nextTick(() => {
        this.showroomModal = !this.showroomModal;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>