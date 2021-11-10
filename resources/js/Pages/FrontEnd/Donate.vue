<template>
  <section class="donate">
    <div class="banner__wrapper">
      <banner bg="pages/gallery/banner.jpg" title="Donate to Change">
        <!-- <template #description> Donate to Change </template> -->
      </banner>
    </div>
    <section class="donate__cta">
      <p>
        When you donate to African Development University (A.D.U), you invest in
        the young people who will become the future leaders of Niger. Your
        support will allow us to put higher education in reach for talented
        students. Niger is one of the poorest countries in the world with an
        annual GDP under $400 per capita. For many promising students, paying
        the annual A.D.U. tuition of $4,000 is an impossible dream. Your
        donation will enable us to select students without regard to their
        financial situation. A.D.U. students are accepted based on exceptional
        intellectual potential, demonstrated work ethic, and commitment to
        leading change in Niger. Act now to empower the next generation of
        leaders, thinkers, and changemakers!
      </p>
    </section>
    <div class="donate__logo-banner">
      <div class="logo">
        <img src="/storage/logo-2.png" alt="" srcset="" />
      </div>
    </div>
    <div class="donate__info">
      <div class="donate__info__header">
        <h1>FOR U.S. DONORS:</h1>
        <p>
          US donors can make tax deductible contributions to the ADU ILIMI US
          Fund through the
          <span>King Baudouin Foundation United States (KBFUS)</span>. KBFUS is
          a registered US 501(c)(3) and 509(a)(1) charity; donors may claim the
          maximum tax benefits allowed by U.S. law.
        </p>
      </div>
      <div class="adonate__info__main">
        <s-accordions>
          <s-accordion>
            <template #header>
              <h1>Gifts By Check</h1>
            </template>
            <div class="collapse__content">
              <p>Address your check to KBFUS, write:</p>
              <p>
                ADU ILIMI US Fund in the memo section <br />
                10 Rockefeller Plaza <br />
                16th Floor New York, NY 10020
              </p>
            </div>
          </s-accordion>
          <s-accordion>
            <template #header>
              <h1>Donate Via Wire Transfer</h1>
            </template>
            <div class="collapse__content">
              <p>
                Gifts by wire transfer or to contribute other types of property:
                Contact KBFUS via phone
                <a href="tel:+2127137660">(212) 713-7660</a> or
                <a href="mailto:info@kbfus.org">info@kbfus.org</a>
              </p>
            </div>
          </s-accordion>
        </s-accordions>
      </div>
      <div class="donate__info__header mt">
        <h1>FOR AFRICAN, EUROPEAN AND OTHER INTERNATIONAL DONORS:</h1>
      </div>
      <div class="adonate__info__main">
        <s-accordions>
          <s-accordion>
            <template #header>
              <h1>Bank Details</h1>
            </template>
            <div class="collapse__content">
              <div class="bank-png">
                <img src="/storage/pages/donate/orabank.png" alt="" srcset="" />
              </div>
            </div>
          </s-accordion>
        </s-accordions>
      </div>
    </div>
  </section>
</template>

<script>
import FrontEndLayout from "../../components/FrontEndLayout";
import { Link } from "@inertiajs/inertia-vue";
import SLinks from "../../components/pages/SLinks";
import SLink from "../../components/pages/SLink";
import Banner from "../../components/pages/Banner";
import SAccordions from "../../components/accordion/SAccordions";
import SAccordion from "../../components/accordion/SAccordion";
export default {
  name: "Donate",
  layout: FrontEndLayout,
  components: {
    Link,
    Banner,
    SLinks,
    SLink,
    SAccordions,
    SAccordion,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>