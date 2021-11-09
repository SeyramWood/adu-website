<template>
  <section class="academics">
    <div class="banner__wrapper">
      <banner bg="pages/academics/banner.jpeg" title="academics">
        <template #description>
          A.D.U. offers 3-year liberal arts undergraduate programs; the only
          university of its kind in the Sahel, and we hope to be a model that
          other schools will follow. To further enhance the educational
          experience, teaching at A.D.U. is split between on-the-ground faculty
          who each have international education and experience, and top-tier
          remote-based faculty from around the world.
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
            @click.native="openCalendarModal(cal)"
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
            <a @click="lawModal = !lawModal"> View More</a>
          </div>
        </div>
        <div class="link">
          <h3 class="title">Project Management</h3>
          <div class="link__box">
            <a @click="projectModal = !projectModal"> View More</a>
          </div>
        </div>
      </div>
      <div class="academics__major__links">
        <div class="link">
          <h3 class="title">Accounting</h3>
          <div class="link__box">
            <a @click="accountModal = !accountModal"> View More</a>
          </div>
        </div>
        <div class="link">
          <h3 class="title">Management Information System</h3>
          <div class="link__box">
            <a @click="misModal = !misModal"> View More</a>
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
        image="pages/academics/ai.jpg"
        :ltr="true"
        :btn="true"
        btnText="Read more"
      >
        <template #article>
          <p>
            The Bachelor of Science in Artificial Intelligence - BS(AI) program
            provides learners the knowledge and skills to transform complex
            inputs of text, vision, language and large databases into
            intelligible and actionable decisions to enhance human capabilities.
            222The curriculum provides hands-on experience in various aspects of
            Artificial Intelligence including data science, machine learning,
            artificial neural networks, and developing data products. to address
            societal and organisational issues in agriculture, commerce,
            education, health, industry and governance etc.
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
        image="pages/academics/english.jpeg"
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

        <div class="section packages">
          <h1>OUR PACKAGES</h1>
          <p>
            <strong>IN-CAMPUS PACKAGE:</strong> Classes on campus take place
            every Tuesday and Thursday, 6:30pm.
          </p>
          <p>
            <strong>ONLINE PACKAGE:</strong> Virtual classes are offered based
            on client’s demand.
          </p>
          <p>
            <strong>COMPANY PACKAGE:</strong> This is for organizations who want
            their staff to learn English.
          </p>
          <p>
            <strong>ENGLISH HUB PACKAGE:</strong>The English club holds every
            Saturday by 4pm in our campus at Village de la Francophonie.
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
        </div>

        <p class="info">
          For further information, please contact us via
          <span>(+227)92 39 6868 /93 39 6868</span> or you can also visit our
          campus.
        </p>
      </div>
    </s-modal>
    <s-modal v-model="aiModal" width="70rem">
      <div class="english-programme-details">
        <div class="section syllabus">
          <h1>Background</h1>
          <p>
            Niger 2.0 Smart Villages program was launched in August 2018 by the
            Government of Niger and its partners (ITU, FAO, UNESCO, WHO, WB), to
            expand internet access to digitally enabled services in education
            and other sectors (health, agriculture, commerce etc.). Yet, there
            is a lack of quality technology education programs in Niger and
            across the Sahel region. Thus, the Bachelor of Science in Artificial
            Intelligence (BS-AI) program is designed to bridge the
            Science-Technology-Innovation (STI) workforce gap and to drive the
            digital transformation agenda of Niger and the Sahel region.
          </p>
        </div>
        <div class="section">
          <h1>Program Description</h1>
          <p>
            The Bachelor of Science in Artificial Intelligence - BS(AI) program
            provides learners the knowledge and skills to transform complex
            inputs of text, vision, language and large databases into
            intelligible and actionable decisions to enhance human capabilities.
            222The curriculum provides hands-on experience in various aspects of
            Artificial Intelligence including data science, machine learning,
            artificial neural networks, and developing data products. to address
            societal and organisational issues in agriculture, commerce,
            education, health, industry and governance etc.
          </p>
        </div>

        <div class="section packages">
          <h1>Competencies & Skills</h1>
          <p>
            <strong>Technology:</strong> Web and mobile software engineering,
            computer architecture, databases, computer science theory.
          </p>
          <p>
            <strong>Data/Analytics:</strong> Mathematics machine learning,
            artificial neural networks, deep learning, and AI concepts and
            software tools
          </p>
          <p>
            <strong>Entrepreneurship:</strong> Innovation, strategy, problem
            solving, management skills.
          </p>
        </div>
        <p class="info">
          For further information, please contact us via
          <span>(+227)92 39 6868 /93 39 6868</span> or you can also visit our
          campus.
        </p>
      </div>
    </s-modal>
    <s-modal v-model="lawModal" width="70rem">
      <div class="english-programme-details">
        <div class="section syllabus">
          <h1>Law</h1>
          <p>
            A.D.U. offers a three-year degree in Business Law that teaches
            courses in many different aspects of legal work. Students entering
            this program should have a strong commitment to justice and equality
            and fighting corruption. The types of careers that graduates can
            expect are Jurist of Enterprises, Magistrate in Public
            Jurisdictions, Legal Consultant, Notary Public.
          </p>
        </div>
        <p class="info">
          For further information, please contact us via
          <span>(+227)92 39 6868 /93 39 6868</span> or you can also visit our
          campus.
        </p>
      </div>
    </s-modal>
    <s-modal v-model="projectModal" width="70rem">
      <div class="english-programme-details">
        <div class="section syllabus">
          <h1>Project Management</h1>
          <p>
            Project Managers are trained to make certain that complex projects
            go according to schedule. Project management positions are essential
            in construction and civil engineering etc. These types of projects
            include building new infrastructures such as bridges and office
            buildings, as well as repairing old infrastructures, such as homes
            or businesses.
          </p>
          <p>
            In keeping with the Ilimi concept, each course is designed and
            taught with a thread of ethical conduct woven through it to
            reinforce the responsibility of graduates to press ethical practice
            in their work-places. Courses also stress a commitment to combat
            social injustice and to make the world a better place for the less
            fortunate.
          </p>
        </div>
        <p class="info">
          For further information, please contact us via
          <span>(+227)92 39 6868 /93 39 6868</span> or you can also visit our
          campus.
        </p>
      </div>
    </s-modal>
    <s-modal v-model="accountModal" width="70rem">
      <div class="english-programme-details">
        <div class="section">
          <h1>Bachelor of Accounting</h1>
          <p>
            A degree in Accounting and Finance will train you to work as a
            financial examiner, or a financial analyst, or a finance manager or
            as a business consultant who helps guide small entrepreneurs. It is
            a very exacting work…it requires a high level of attention to
            detail.
          </p>
          <div class="section packages">
            <p>
              <strong>Financial Examiner:</strong> With a career as a financial
              examiner, you’ll help ensure compliance with laws governing banks
              and how they lend money, Or, you could be responsible for
              analyzing the financial strength of a business that is looking to
              expand.
            </p>
            <p>
              <strong>Financial Analyst:</strong> You can expect to work with
              individuals and organizations to make strategic decisions based on
              investments
            </p>
            <p>
              <strong>Business and Financial Consultant:</strong> As a business
              consultant, you can help other business owners manage start-up
              costs and investments, create a financial plan for their business
              and monitor day-to-day bookkeeping.
            </p>
          </div>
        </div>
        <p class="info">
          For further information, please contact us via
          <span>(+227)92 39 6868 /93 39 6868</span> or you can also visit our
          campus.
        </p>
      </div>
    </s-modal>
    <s-modal v-model="misModal" width="70rem">
      <div class="english-programme-details">
        <div class="section syllabus">
          <h1>Bachelor of Management Information System:</h1>
          <p>
            Information Technology is diverse. It will allow you to take your
            profession in several different directions. It is practical. You
            will not only learn the theory but also get the opportunity to make
            things.
          </p>
          <p>
            There are many careers to follow when studying IT. As technology
            progresses, the need for IT graduates will only increase. Moreover,
            the better your skillset, the more in demand you will be.
          </p>
          <p>
            Technology positions available in IT often include jobs such as
            creating software, analyzing new forms of data, and developing
            solutions for today's highly technological world. In the next
            ten-years Niger will be fully digital and nearly every company and
            organization will be using digital technology. A.D.U.’s program will
            place you into the center of that exciting field by training you to
            create new technologies. Security will also be in large demand,
            people will want their mobiles and laptops to be secure from hackers
            and from people trying to steal their personal information.
          </p>
        </div>

        <p class="info">
          For further information, please contact us via
          <span>(+227)92 39 6868 /93 39 6868</span> or you can also visit our
          campus.
        </p>
      </div>
    </s-modal>
    <s-modal v-model="calendarModal" width="70rem">
      <div class="academic-calendar" v-if="currentCalendar">
        <table>
          <thead>
            <tr>
              <th>First Year</th>
              <th>Continuing students</th>
              <th>Weeks</th>
              <th>Start Date</th>
              <th>End Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="sub-heading">Semester 1</td>
            </tr>
            <tr>
              <td>First Year Orientation & Registration</td>
              <td>Registration for Courses</td>
              <td>1 Week</td>
              <td>18-Oct-21</td>
              <td>29-Oct-21</td>
            </tr>
            <tr>
              <td>Semester 2</td>
            </tr>
            <tr>
              <td>fhgjfdghj</td>
              <td>fhgjfdghj</td>
              <td>fhgjfdghj</td>
              <td>fhgjfdghj</td>
              <td>fhgjfdghj</td>
            </tr>
          </tbody>
        </table>
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
      lawModal: false,
      projectModal: false,
      accountModal: false,
      misModal: false,
      calendarModal: false,
      currentCalendar: null,
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
    openCalendarModal(data) {
      this.currentCalendar = data;
      this.$nextTick(() => {
        this.calendarModal = true;
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