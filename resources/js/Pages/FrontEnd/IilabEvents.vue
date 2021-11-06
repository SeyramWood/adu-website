<template>
  <section class="about">
    <div class="banner__wrapper">
      <banner bg="images/library-2.jpeg" title="iiLab events">
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

    <div class="home__news" id="events">
      <div class="s__row">
        <div class="s__col c--5">
          <div class="iilab__events__link" v-for="e in events" :key="e.name">
            <span
              >{{ e.date.split(" ")[0].substr(0, 3) }}
              {{ e.date.split(" ")[1].substr(0, 2) }}</span
            >
            <a role="button" @click="getEventData(e)">{{
              `${e.title.substr(0, 50)} ${e.title.length > 50 ? "..." : ""}`
            }}</a>
          </div>
          <div class="iilab__events__link__more">
            <Link href="/iilab/events">Load more</Link>
            <span>&rarr;</span>
          </div>
        </div>
        <div class="s__col c--7">
          <div class="iilab__events s__row">
            <div
              class="iilab__events__event s__col c--6"
              v-for="e in events"
              :key="e.name"
            >
              <div class="image">
                <img :src="e.image" alt="event image" srcset="" />
              </div>
              <div class="date">{{ e.date }}</div>
              <a
                ref="javascript:"
                class="link"
                @click="getEventData(e)"
                role="button"
              >
                {{
                  `${e.title.substr(0, 32)} ${e.title.length > 32 ? "..." : ""}`
                }}
              </a>
              <div class="description">
                {{
                  `${e.description.substr(0, 70)} ${
                    e.description.length > 70 ? "..." : "."
                  }`
                }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <s-modal v-model="eventModal" width="50rem">
      <div class="event-details" v-if="currentEvent">
        <div class="image">
          <img :src="currentEvent.image" alt="event image" srcset="" />
        </div>
        <h1>{{ currentEvent.title }}</h1>

        <p>
          {{ currentEvent.description }}
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
  name: "StudentLifeSpotlight",
  layout: FrontEndLayout,
  components: {
    Link,
    Banner,
    SLinks,
    SLink,
    PageArticle,
    SModal,
  },
  data() {
    return {
      eventModal: false,
      currentEvent: null,
      events: [
        {
          title: "In collaboration with E-TAKARA",
          description:
            "In collaboration with E-Takara, the iiLab of A.D.U held an info session yesterday on the A.D.U campus. We were privileged to have previous laureates of the competition such as Latifa Salissou Hassane (via audio recording), Rafiou Ala Roi Fhad (in person) and Idriss Laouali Abdou (via video-recording) share with ADU Young Leaders about the incredible experience their participation in the competition has been for them. The E-Takara team also shared more about the vision behind the competition, as well as the selection criteria, before encouraging A.D.U Young Leaders to apply massively.",
          date: "December 25, 2021",
          image: "/storage/images/event-2.jpg",
        },
        {
          title: "iiLab Open House for the Kagamé cohort",
          description: `As lifelong members of the ilimi community, the iiLab’s support to the Kagamé cohort (which just graduated) will always be available. Nonetheless, for the upcoming months, the iiLab has an exciting and comprehensive entrepreneurship support program in store, just for the Kagamé Cohort, made up of large-group sessions, one-on-one sessions, some funding, and other activities aiming to equip our Kagame Cohort Young Leaders with tools and resources for them to catalyze their growth as entrepreneurs and that of their ideas, regardless of their current advancement level. The Open House allowed the iiLab to give out more details about the program which will be informed by insights from a currently ongoing needs-assessment process.
Note: The iiLab also has exciting plans for the Wangari, Johnson and Jean cohorts, once they return to campus.
`,
          date: "September 14, 2021",
          image: "/storage/images/event-1.jpeg",
        },
      ],
    };
  },

  methods: {
    getEventData(event) {
      this.currentEvent = event;
      this.$nextTick(() => {
        this.eventModal = !this.eventModal;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>