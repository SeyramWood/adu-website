<template>
  <section class="admissions">
    <div class="banner__wrapper">
      <banner bg="stats.jpg" title="admissions">
        <template #description>
          African Development University (A.D.U) is a university of excellence
          based in Niamey (Niger). Our mission is to prepare the most talented
          young people in Niger and Francophone Africa to design and drive the
          development of their nations as ethical and effective leaders in
          public, private and not for profit sectors.
        </template>
        <template #links>
          <s-links>
            <s-link href="#TheADUAdvantage">The A.D.U Advantage</s-link>
            <s-link href="#ScholarshipInformation"
              >Scholarship Information</s-link
            >
            <s-link href="#AcademicProgramsSummary"
              >Academic Programs Summary</s-link
            >
            <s-link href="#ContactAdmissionTeam">Contact Admission Team</s-link>
          </s-links>
        </template>
      </banner>
    </div>

    <section class="article__wrapper" id="TheADUAdvantage">
      <page-article title="The ADU Advantage" image="stats.jpg" :ltr="true">
        <template #article>
          <ul style="list-style-type: disc; margin-left: 4rem">
            <li>
              We are an institution that is student centered – Students FIRST
            </li>
            <li>US-Style Higher Education Model</li>
            <li>
              Liberal Arts Framework: an educational model that develops problem
              solving, freedom of choice, breadth of knowledge and transferable
              skills
            </li>
            <li>Entrepreneurial Focused</li>
            <li>
              Student Development Trough Experiential Learning: building
              student’s leadership, relations, life skills, social & emotional
              skills and intellectual curiosity
            </li>
            <li>
              Blended Learning: a combination of in-person and virtual teaching
              & learning
            </li>
            <li>
              Bilingual Education and Campus Environment (English & French)
            </li>
            <li>We provide high level career placement support</li>
          </ul>
        </template>
        <!-- <template #links>
          <s-links type="article">
            <s-link href="/kfdjklfdjhkl">I am a link</s-link>
            <s-link href="/kfdjklfdjhkl">I am a link</s-link>
            <s-link href="/kfdjklfdjhkl">I am a link</s-link>
            <s-link href="/kfdjklfdjhkl">I am a link</s-link>
          </s-links>
        </template> -->
      </page-article>
    </section>
    <section class="article__wrapper" id="ScholarshipInformation">
      <page-article
        title="Scholarship Information"
        image="stats.jpg"
        :ltr="true"
      >
        <template #article>
          <strong class="" style="font-style: italic">
            "The mission of A.D.U. is to prepare the most talented young people
            in Niger and in Francophone Africa to design and drive the
            development of their nations as ethical and effective leaders in the
            public, private and not-for-profit sectors."
          </strong>
          <p>
            Therefore, A.D.U. offers Scholarship for talented student who are
            experiencing economic and social hardship so that they will be able
            to achieve their goals and impact their community. You can apply for
            a scholarship by filling this form
            <a
              href="https://aduilimi-my.sharepoint.com/:b:/g/personal/fafagnibo_ilimi_edu_ne/Efz0yLO5bV1AkPv22eCnkKsBn13Yy1sUJkBTASqsSC2sGw?e=7vG1V8"
              target="_blank"
              rel="noopener noreferrer"
              class="color-primary"
              >Apply Now</a
            >
          </p>
        </template>
        <template #links>
          <s-links type="article">
            <s-link href="/kfdjklfdjhkl">A.D.U. Scholarship</s-link>
            <s-link href="/kfdjklfdjhkl"
              >MasterCard Foundation Scholarships</s-link
            >
          </s-links>
        </template>
      </page-article>
    </section>
    <section class="article__wrapper" id="AcademicProgramsSummary">
      <page-article title="Academic Programs Summary" image="stats.jpg">
        <template #article>
          <h1>Program Info</h1>
          <p>
            Our 3-year bachelor program is both nationally and internationally
            recognized. Our degree programs are all accredited by Ministry of
            Higher Education, Research and Innovation, Niger. We offer two
            Bachelors: Business Administration & Sciences
          </p>
          <article>
            <h5>Our BBA degree program has</h5>
            <ol style="margin-left: 4rem">
              <li>Two Core courses: Leadership and Management.</li>
              <li>
                Main Majors:
                <ul style="list-style-type: disc; margin-left: 4rem">
                  <li>LAW</li>
                  <li>ACCOUNTING</li>
                  <li>PROJECT MANAGEMENT</li>
                  <li>IT</li>
                </ul>
              </li>
            </ol>
          </article>
          <article>
            <h5>Our BS</h5>
            <ol style="margin-left: 4rem">
              <li>Two Core courses: Leadership and Management.</li>
              <li>Major: Artificial Intelligence</li>
            </ol>
          </article>
        </template>
        <template #links>
          <s-links type="article">
            <s-link href="/kfdjklfdjhkl">How to Apply</s-link>
            <s-link href="/kfdjklfdjhkl">Entry requirements</s-link>
            <s-link href="/kfdjklfdjhkl">Click to Apply</s-link>
          </s-links>
        </template>
        <!-- <template #linksRight>
          <s-links type="article">
            <s-link href="/kfdjklfdjhkl">I am a link</s-link>
            <s-link href="/kfdjklfdjhkl">I am a link</s-link>
            <s-link href="/kfdjklfdjhkl">I am a link</s-link>
            <s-link href="/kfdjklfdjhkl">I am a link</s-link>
          </s-links>
        </template> -->
      </page-article>
    </section>
    <section class="article__wrapper" id="ContactAdmissionTeam">
      <page-article
        title="Contact Admission Team"
        image="stats.jpg"
        :ltr="true"
      >
        <template #article>
          <p>
            For additional questions and/or inquiry regarding the status of your
            application, you can reach us through:
          </p>
          <ul style="list-style-type: disc; margin-left: 4rem">
            <li>
              <a href="mailto:admissions@ilimi.edu.ne" class="color-primary"
                >admissions@ilimi.edu.ne</a
              >
            </li>
            <li>
              <a href="tel:+22792396868" class="color-primary"
                >+227 92 39 68 68 (WhatsApp)</a
              >
            </li>
            <li>
              <a href="tel:+22793396868" class="color-primary"
                >+227 93 39 68 68</a
              >
            </li>
          </ul>
        </template>
        <!-- <template #links>
          <s-links type="article">
            <s-link href="/kfdjklfdjhkl">I am a link</s-link>
            <s-link href="/kfdjklfdjhkl">I am a link</s-link>
            <s-link href="/kfdjklfdjhkl">I am a link</s-link>
            <s-link href="/kfdjklfdjhkl">I am a link</s-link>
          </s-links>
        </template>
        <template #linksRight>
          <s-links type="article">
            <s-link href="/kfdjklfdjhkl">I am a link</s-link>
            <s-link href="/kfdjklfdjhkl">I am a link</s-link>
            <s-link href="/kfdjklfdjhkl">I am a link</s-link>
            <s-link href="/kfdjklfdjhkl">I am a link</s-link>
          </s-links>
        </template> -->
      </page-article>
    </section>
  </section>
</template>

<script>
import FrontEndLayout from "../../components/FrontEndLayout";
import SLinks from "../../components/pages/SLinks";
import SLink from "../../components/pages/SLink";
import Banner from "../../components/pages/Banner";
import PageArticle from "../../components/pages/PageArticle";
import { Link } from "@inertiajs/inertia-vue";
export default {
  name: "Academics",
  layout: FrontEndLayout,
  components: {
    Link,
    Banner,
    SLinks,
    SLink,
    PageArticle,
  },
};
</script>

<style lang="scss" scoped>
</style>