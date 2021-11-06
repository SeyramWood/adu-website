<template>
  <section class="academics">
    <div class="banner__wrapper">
      <banner bg="images/library-3.jpeg" title="academics">
        <template #description>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed
          recusandae officia, similique quam, accusamus tempore consequuntur
          dolores sapiente non, omnis blanditiis molestiae tempora aspernatur
          distinctio a debitis qui quas necessitatibus!
        </template>
        <template #links>
          <s-links>
            <s-link href="#BusinessManagement">Business Management</s-link>
            <s-link href="#ArtificialIntelligence"
              >Artificial Intelligence</s-link
            >
            <s-link href="#EnglishProgramme">English Programme</s-link>
          </s-links>
        </template>
      </banner>
    </div>
    <section class="academics__calenda">
      <div class="academics__calenda__title">Academic Calendar</div>
      <div class="academics__calenda__slider">
        <vueper-slides
          class="no-shadow"
          arrows-outside
          :visible-slides="3"
          :dragging-distance="70"
          slide-multiple
          :gap="3"
          :bullets="false"
          :fixed-height="true"
          style="margin-bottom: 0px"
        >
          <vueper-slide
            v-for="(cal, i) in calendar"
            :key="i"
            :content="cal.content"
            style="height: 100%"
          />
        </vueper-slides>
      </div>
      <div class="academics__calenda__btn">
        <Link href="#">View full calendar</Link>
      </div>
    </section>
    <section class="academics__major" id="BusinessManagement">
      <h1 class="title">Business Administration Majors</h1>
      <div class="academics__major__links">
        <div class="link">
          <h3 class="title">Law</h3>
          <div class="link__box">
            <a @click.stop="openDialog('Law')"> View More</a>
          </div>
        </div>
        <div class="link">
          <h3 class="title">Project Management</h3>
          <div class="link__box">
            <a @click.stop="openDialog('Project Management')"> View More</a>
          </div>
        </div>
      </div>
      <div class="academics__major__links">
        <div class="link">
          <h3 class="title">Accounting</h3>
          <div class="link__box">
            <a @click.stop="openDialog('Accounting')"> View More</a>
          </div>
        </div>
        <div class="link">
          <h3 class="title">Management Information System</h3>
          <div class="link__box">
            <a @click.stop="openDialog('Management Information System')">
              View More</a
            >
          </div>
        </div>
      </div>
    </section>
    <section
      class="article__wrapper ArtificialIntelligence"
      id="ArtificialIntelligence"
    >
      <page-article
        title="Artificial Intelligence"
        image="ai.jpg"
        :ltr="true"
        :btn="true"
        btnText="Read more"
      >
        <template #article>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste illo,
            tenetur dolore placeat cumque dignissimos!Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Iste illo, tenetur dolore placeat
            cumque dignissimos! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Iste illo, tenetur dolore placeat cumque
            dignissimos!Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Iste illo, tenetur dolore placeat cumque dignissimos!
          </p>
          <div class="article__content__btn">
            <button @click="aiModal = !aiModal">read more</button>
          </div>
        </template>
      </page-article>
    </section>
    <section
      class="article__wrapper article__wrapper--epbg"
      id="EnglishProgramme"
    >
      <page-article
        title="English Programme"
        image="library-1.jpeg"
        :ltr="true"
      >
        <template #article>
          <p>
            The ADU English program is an English Learning establishment of the
            African Development University that is focused on building the
            English language proficiency of professionals, businessmen and
            businesswomen etc., especially in the francophone region and is
            committed to taking learners through an exciting language learning
            journey with courses tailored to give learners an all-round study of
            the language.
          </p>
          <div class="article__content__btn">
            <button @click="englishModal = !englishModal">read more</button>
          </div>
        </template>
      </page-article>
    </section>

    <s-modal v-model="englishModal" width="70rem">
      <div class="english-programme-details">
        <div class="section intro">
          <h1>WHY DO YOU NEED TO LEARN ENGLISH?</h1>
          <p>
            English is a global language and has approximately 1.348 billion
            speakers around the world which makes it one of the most spoken
            languages in our time and this cuts across different sectors of
            business, media, entertainment, literature, research and academics,
            etc.
          </p>
          <div class="image">
            <img src="/storage/pages/academics/english.png" alt="" srcset="" />
          </div>
          <p>
            English is the main language of America and some of the most
            developed countries that are the centers of business transactions
            and where key decisions of the world are made. Being able to speak,
            understand, read and write English gives you easy access to a whole
            world of information, entertainment, introduction to new cultures of
            people who speak English and gives you more opportunities in the
            English-speaking countries of the world.
          </p>
        </div>

        <div class="section syllabus">
          <h1>COURSE SYLLABUS (What You will learn)</h1>
          <p>
            Our syllabus is comprised of topics in English grammar, vocabulary
            and the four major language skills: listening, reading, writing,
            speaking. Students will learn how to speak English with a higher
            level of proficiency in both public speaking and normal English
            conversations to help boost their communication skills.
          </p>
        </div>

        <div class="section methodology">
          <h1>Methodology:</h1>
          <p>Our courses are delivered using the following methods:</p>
          <ul>
            <li>Teacher-led mode of instruction</li>
            <li>
              Student-led mode of teaching: using debates, oral and written
              presentations etc
            </li>
            <li>Instructional video and audio materials</li>
          </ul>

          <h1>PROFICIENY LEVELS</h1>
          <h4>Beginner (A1)</h4>
          <h4>Pre-intermediate (A2)</h4>
          <h4>Intermediate (B1)</h4>
          <h4>High-intermediate (B2)</h4>

          <h1>Our Teachers</h1>
          <p>
            Our teachers and support staff have a wealth of national and
            international teaching experience. Because of their experiences,
            they can easily empathize with the difficulties students regularly
            face in learning a new language and proffer solutions that will
            greatly assist students in their English language learning journey.
            It is important to note that our teachers are multi-lingual with the
            abilities to speak English, French, Hausa and Zarma.
          </p>
        </div>
        <div class="section testimonials">
          <h1>Testimonials</h1>
          <p class="cta">
            Since our inception, we served over 300 learners and still counting
            due to the unique nature of our English program. Testimonials from
            our students:
          </p>
          <div class="testimonial">
            <q>
              I am excited to share my English learning journey at ADU with you.
              I am a French-speaking Law Tutor with basic level of English
              Language at ADU. ADU English program has been really helpful. The
              mode of teaching and commitment of tutors coupled with my
              determination have made this journey, an interesting one. My
              colleagues at ADU are surprised at my proficiency in English after
              few months being enrolled on the English program. I am able to
              hold conversation with colleagues and students in English. Since
              ADU is a bilingual university, I even teach some of my classes in
              English. This is a huge challenge for me and I am rising up to it.
            </q>
            <p>
              <strong
                >Djibrillou Abdoul-Aziz Manzo - Faculty Associate, African
                Development University. Niamey.</strong
              >
            </p>
          </div>
          <div class="testimonial">
            <q>
              A.D.U’s English Program has been of great help to me. I’m no
              longer embarrassed when I have to express myself in English. This
              was an obstacle for me but I have overcome it. I can now speak
              English with a certain level of ease. This is evident in my work
              as I am more interactive and my colleagues are happy about my new
              level of proficiency in English. I am happy because there is a
              difference in my level of proficiency in English over the months
              as compared to when I enrolled on the program. Although, I realize
              that I still have some difficulties, I am working on getting
              better.
            </q>
            <p>
              <strong
                >Harouna Raina Doula - Savanna Energy Niamey, Niger.
              </strong>
            </p>
          </div>
        </div>
        <div class="section packages">
          <h1>OUR PACKAGES</h1>
          <p>
            <strong>IN-CAMPUS PACKAGE:</strong> We are located at Village de la
            Francophonie where our physical classes are held. Classes on campus
            take place every Tuesday and Thursday, 6:30pm.
          </p>
          <p>
            <strong>ONLINE PACKAGE:</strong> We understand that there are people
            who want to learn English but have time constraints and that is why
            we offer virtual classes based on client’s demand. We use a Learning
            Management system and Zoom as an online platform for classes.
          </p>
          <p>
            <strong>COMPANY PACKAGE:</strong> We also have a learning package
            for companies and organizations who want members of their staff to
            learn English. Our teachers are available to come to your companies
            and teach based on the schedule that works for you. The only
            requirement for this package is for a class to have a minimum of 10
            students/learners.
          </p>
          <h1>ADDITIONAL PACKAGE (English Hub)</h1>
          <p>
            As an English learner, it is very important to be in a community of
            learners, just like you. That is why, we have an English club that
            allows learners to interact with each other, learn together, network
            and build a supportive community that encourages learners to speak
            confidently. The English club holds every Saturday by 4pm in our
            campus at Village de la Francophonie. This club also includes public
            speaking classes that build learners’ confidence in speaking in
            front of people.
          </p>
        </div>
        <div class="section certificate">
          <div>
            <h1>CERTIFICATE</h1>
            <p>
              A certificate of completion will be issued to students at the end
              of every course taken in the English Program.
            </p>
          </div>

          <div>
            <h1>COURSE DURATION</h1>
            <p>
              We currently run a trimester program which lasts for 3 months.
              This 3-months program is broken down into a schedule for the
              on-campus classes and different schedules for the off-campus
              classes.
            </p>
            <ul>
              <li>
                2 days a week, 2 hours per day: Tuesdays and Thursdays
                (On-campus)
              </li>
            </ul>
          </div>

          <div>
            <h1>WHO CAN ENROLL?</h1>
            <p>
              Students, professionals, businessmen, businesswomen etc. What we
              are trying to say is, as long as you’re interested in learning
              English, our doors are open to welcome you.
            </p>
          </div>

          <div>
            <h1>HOW TO REGISTER</h1>
            <p>You can enroll in the ADU English program via:</p>
            <ul>
              <li>
                • OFFLINE: To register over the counter, kindly visit our camp
                us at Village de la Francophonie, close to BM Trading station.
              </li>
              <li>
                • ONLINE: You can also register at the comfort of your home and
                offices by calling us on these numbers: (+227)92 39 6868 /93 39
                6868
              </li>
            </ul>
          </div>
        </div>

        <div class="section more-info">
          <p>
            For further information, please do not hesitate to contact us via
            phone calls or you can also visit our campus. We would love to see
            you start an exciting learning journey with us.
          </p>
        </div>
      </div>
    </s-modal>
    <s-modal v-model="aiModal" width="70rem">
      <div class="english-programme-details">
        <div class="section intro">
          <h1>ARTIFICIAL INTELLIGENCE</h1>
          <div class="image">
            <img src="/storage/images/ai.jpg" alt="" srcset="" />
          </div>
        </div>
      </div>
    </s-modal>
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
import SModal from "../../components/SModal";
export default {
  name: "Academics",
  layout: FrontEndLayout,
  components: {
    Link,
    VueperSlides,
    VueperSlide,
    Banner,
    SLinks,
    SLink,
    PageArticle,
    SModal,
  },
  data() {
    return {
      englishModal: false,
      aiModal: false,
      dialogTitle: "",
      calendar: [
        {
          content: `<div class='calenda__box'><h6 class='calenda__box__date'>TUE, NOV  2021</h6><h4 class='calenda__box__title'>African Development Universalis</h4></div>`,
        },
        {
          content: `<div class='calenda__box'><h6 class='calenda__box__date'>TUE, NOV  2021</h6><h4 class='calenda__box__title'>African Development Universalis</h4></div>`,
        },
        {
          content: `<div class='calenda__box'><h6 class='calenda__box__date'>TUE, NOV  2021</h6><h4 class='calenda__box__title'>African Development Universalis</h4></div>`,
        },
        {
          content: `<div class='calenda__box'><h6 class='calenda__box__date'>TUE, NOV  2021</h6><h4 class='calenda__box__title'>African Development Universalis</h4></div>`,
        },
        {
          content: `<div class='calenda__box'><h6 class='calenda__box__date'>TUE, NOV  2021</h6><h4 class='calenda__box__title'>African Development Universalis</h4></div>`,
        },
        {
          content: `<div class='calenda__box'><h6 class='calenda__box__date'>TUE, NOV  2021</h6><h4 class='calenda__box__title'>African Development Universalis</h4></div>`,
        },
        {
          content: `<div class='calenda__box'><h6 class='calenda__box__date'>TUE, NOV  2021</h6><h4 class='calenda__box__title'>African Development Universalis</h4></div>`,
        },
      ],
    };
  },
  methods: {
    openDialog(data) {
      this.dialogTitle = data;
      this.$nextTick(() => {
        this.dialog = true;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.ex--center-mode {
  width: 600px;
  max-width: 100%;
  margin: auto;
}
</style>