<template>
  <section class="about">
    <div class="banner__wrapper">
      <banner bg="images/library-2.jpeg" title="entrepreneures">
        <template #description>
          <p style="padding-bottom: 4rem">
            {{ $t("pages.iilab.banner") }}
          </p>
        </template>
      </banner>
    </div>

    <div class="home__news" id="showroom">
      <div class="showrooms">
        <div
          class="showrooms__card"
          v-for="show in showrooms"
          :key="show.title"
        >
          <div class="news__container">
            <div class="image">
              <img :src="show.image" alt="" srcset="" />
            </div>
            <h1 class="title">
              {{
                `${show.title.substr(0, 50)} ${
                  show.title.length > 50 ? "..." : ""
                }`
              }}
            </h1>
            <p class="text">
              {{
                `${show.description.substr(0, 150)} ${
                  show.description.length > 150 ? "..." : "."
                }`
              }}
            </p>
            <div class="link" @click="getShowroomData(show)" role="button">
              <a ref="javascript:">Read more</a>
              <span>&rarr;</span>
            </div>
          </div>
        </div>
      </div>

      <div class="view__more">
        <Link as="button" href="/iilab/entrepreneures">Load more</Link>
      </div>
    </div>

    <s-modal v-model="showroomModal" width="50rem">
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
  name: "IilabEntrepreneure",
  layout: FrontEndLayout,
  components: {
    Link,
    Banner,
    SLinks,
    SLink,
    PageArticle,
    SModal,
  },
  mounted() {
    this.$watch(
      () => this.$lang.locale,
      (locale) => {
        this.events = this.$lang.messages[`${locale}.pages`].iilab.events;
        this.showrooms = this.$lang.messages[`${locale}.pages`].iilab.showrooms;
      },
      { immediate: true }
    );
  },
  data() {
    return {
      showroomModal: false,
      currentShowroom: null,
      showrooms: [
        {
          title: "Aichatou Mahamane (Kagame Cohort): CEO of Tallit Design",
          description:
            "Tallit Design is a new company aiming to promote African and mainly Nigerien culture through the making of accessories for men and women and clothing combining modernity and culture. Tallit Design is also in the field of interior design and events, highlighting African cultures, using our various traditional loincloths. To date, Tallit has had to participate in several events and organized its very first fashion show for the launch of its collection named Mahba. Thanks to the success of such a fashion show, Tallit Design had the privilege to dress the hostesses during the opening ceremony of King Abdullah bin Abdulaziz Al Saoud University, organized by the Waqf authority, among other opportunities. Do not hesitate to contact them at 89257766 or via their email address tallitdesign227@gmail.com and follow them on",
          image: "/storage/images/ceo-1.jpg",
          social: [
            "Facebook: tallit design",
            "Instagram: tallitforculture",
            "Twitter: tallit design",
            "LinkedIn: tallit design",
          ],
        },
        {
          title:
            "Mahaman Sani A. Souleymane (Obama Cohort): CEO of Kakaki Multimedia",
          description: `Kakaki is an agency specializing in global business communication. We do all kinds of design, printing on any medium, embroidery, personalized advertising gadgets, business flyers, community management etc. Kakaki is also involved in major communication projects such as branding of buildings, vehicles, illuminated signs, totems, 3D illuminated initials, painting, etc. The very first companies to trust our services are (among others) EBTP Grand Projet (for which we crafted golden initials, and community management), SOPAMIN (for their new website), Le SULTAN (for their totem and community management), Polyclinic Magori (we branding their cars, sewing their blouses, digital embroidery, goodies, etc.), ADU (for kakemonos, photo frames, and others), Nikki Hotel (for their luminous initials), ETS Zaao (for their luminous initials and t-shirts), and Guimbia make-up (for their luminous initials). For all your communication needs, do not hesitate to contact them at 91912329/89417277, or via their email address contactkakaki@gmail.com / souleymanemsani@gmail.com. You can follow them on`,
          image: "/storage/images/ceo-2.jpg",
          social: [
            "Facebook: kakaki multimedia",
            "Instagram: kakakimultimedia",
            "Twitter: kakaki multimedia",
          ],
        },
        {
          title:
            "Abdoul-Rachid Maman Kadade (Kagame Cohort): CEO of Sahel Solar Academy",
          description: `Sahel Solar Academy is a non-profit technical and vocational training institution on the various installation and maintenance techniques of solar power plants as well as underground water pumps powered by PV. It is a center where people will come to learn how to install and maintain PV powered power plants, solar panels and underground water pumps in households, businesses, communities, villages and any particular place it either commercial, industrial, institutional or residential.`,
          image: "/storage/images/ceo-3.jpg",
          social: [],
        },
        {
          title: "Aichatou Mahamane (Kagame Cohort): CEO of Tallit Design",
          description:
            "Tallit Design is a new company aiming to promote African and mainly Nigerien culture through the making of accessories for men and women and clothing combining modernity and culture. Tallit Design is also in the field of interior design and events, highlighting African cultures, using our various traditional loincloths. To date, Tallit has had to participate in several events and organized its very first fashion show for the launch of its collection named Mahba. Thanks to the success of such a fashion show, Tallit Design had the privilege to dress the hostesses during the opening ceremony of King Abdullah bin Abdulaziz Al Saoud University, organized by the Waqf authority, among other opportunities. Do not hesitate to contact them at 89257766 or via their email address tallitdesign227@gmail.com and follow them on",
          image: "/storage/images/ceo-1.jpg",
          social: [
            "Facebook: tallit design",
            "Instagram: tallitforculture",
            "Twitter: tallit design",
            "LinkedIn: tallit design",
          ],
        },
        {
          title:
            "Mahaman Sani A. Souleymane (Obama Cohort): CEO of Kakaki Multimedia",
          description: `Kakaki is an agency specializing in global business communication. We do all kinds of design, printing on any medium, embroidery, personalized advertising gadgets, business flyers, community management etc. Kakaki is also involved in major communication projects such as branding of buildings, vehicles, illuminated signs, totems, 3D illuminated initials, painting, etc. The very first companies to trust our services are (among others) EBTP Grand Projet (for which we crafted golden initials, and community management), SOPAMIN (for their new website), Le SULTAN (for their totem and community management), Polyclinic Magori (we branding their cars, sewing their blouses, digital embroidery, goodies, etc.), ADU (for kakemonos, photo frames, and others), Nikki Hotel (for their luminous initials), ETS Zaao (for their luminous initials and t-shirts), and Guimbia make-up (for their luminous initials). For all your communication needs, do not hesitate to contact them at 91912329/89417277, or via their email address contactkakaki@gmail.com / souleymanemsani@gmail.com. You can follow them on`,
          image: "/storage/images/ceo-2.jpg",
          social: [
            "Facebook: kakaki multimedia",
            "Instagram: kakakimultimedia",
            "Twitter: kakaki multimedia",
          ],
        },
        {
          title:
            "Abdoul-Rachid Maman Kadade (Kagame Cohort): CEO of Sahel Solar Academy",
          description: `Sahel Solar Academy is a non-profit technical and vocational training institution on the various installation and maintenance techniques of solar power plants as well as underground water pumps powered by PV. It is a center where people will come to learn how to install and maintain PV powered power plants, solar panels and underground water pumps in households, businesses, communities, villages and any particular place it either commercial, industrial, institutional or residential.`,
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