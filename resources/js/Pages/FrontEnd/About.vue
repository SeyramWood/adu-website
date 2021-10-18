<template>
  <section class="about">
    <div class="banner__wrapper">
      <banner bg="stats.jpg" title="about">
        <template #description>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed
          recusandae officia, similique quam, accusamus tempore consequuntur
          dolores sapiente non, omnis blanditiis molestiae tempora aspernatur
          distinctio a debitis qui quas necessitatibus!
        </template>
        <template #links>
          <s-links>
            <s-link href="#welcome">Welcome by Chancellor</s-link>
            <s-link href="#why">Our Why</s-link>
            <s-link href="#mission">Mission</s-link>
            <s-link href="#vision">Vision</s-link>
            <s-link href="#leadership">Leadership</s-link>
          </s-links>
        </template>
      </banner>
    </div>

    <section class="article__wrapper" id="welcome">
      <page-article
        title="Welcome to ilimi"
        image="stats.jpg"
        :btn="true"
        btnText="Take a virtual tour"
      >
        <template #article>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste illo,
          tenetur dolore placeat cumque dignissimos!Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Iste illo, tenetur dolore placeat cumque
          dignissimos! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Iste illo, tenetur dolore placeat cumque dignissimos!Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Iste illo, tenetur dolore
          placeat cumque dignissimos!
        </template>
        <template #links>
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
        </template>
      </page-article>
    </section>
    <section class="article__wrapper" id="why">
      <page-article title="Our Why" image="stats.jpg">
        <template #article>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste illo,
          tenetur dolore placeat cumque dignissimos!Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Iste illo, tenetur dolore placeat cumque
          dignissimos! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Iste illo, tenetur dolore placeat cumque dignissimos!Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Iste illo, tenetur dolore
          placeat cumque dignissimos!
        </template>
        <template #links>
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
        </template>
      </page-article>
    </section>
    <section class="article__wrapper" id="mission">
      <page-article title="Mission" image="stats.jpg">
        <template #article>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste illo,
          tenetur dolore placeat cumque dignissimos!Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Iste illo, tenetur dolore placeat cumque
          dignissimos! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Iste illo, tenetur dolore placeat cumque dignissimos!Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Iste illo, tenetur dolore
          placeat cumque dignissimos!
        </template>
        <template #links>
          <s-links type="article">
            <s-link href="/kfdjklfdjhkl">I am a link</s-link>
            <s-link href="/kfdjklfdjhkl">I am a link</s-link>
            <s-link href="/kfdjklfdjhkl">I am a link</s-link>
            <s-link href="/kfdjklfdjhkl">I am a link</s-link>
          </s-links>
        </template>
      </page-article>
    </section>
    <section class="article__wrapper" id="vision">
      <page-article title="Vision" image="stats.jpg">
        <template #article>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste illo,
          tenetur dolore placeat cumque dignissimos!Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Iste illo, tenetur dolore placeat cumque
          dignissimos! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Iste illo, tenetur dolore placeat cumque dignissimos!Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Iste illo, tenetur dolore
          placeat cumque dignissimos!
        </template>
        <template #links>
          <s-links type="article">
            <s-link href="/kfdjklfdjhkl">I am a link</s-link>
            <s-link href="/kfdjklfdjhkl">I am a link</s-link>
            <s-link href="/kfdjklfdjhkl">I am a link</s-link>
            <s-link href="/kfdjklfdjhkl">I am a link</s-link>
          </s-links>
        </template>
      </page-article>
    </section>
    <section class="article__wrapper" id="leadership">
      <page-article title="Leadership" image="stats.jpg" :ltr="true">
        <template #article>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste illo,
          tenetur dolore placeat cumque dignissimos!Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Iste illo, tenetur dolore placeat cumque
          dignissimos! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Iste illo, tenetur dolore placeat cumque dignissimos!Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Iste illo, tenetur dolore
          placeat cumque dignissimos!
        </template>
        <template #links>
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
        </template>
      </page-article>
    </section>
  </section>
</template>

<script>
import FrontEndLayout from "../../components/FrontEndLayout";
import { Link } from "@inertiajs/inertia-vue";
import SLinks from "../../components/pages/SLinks";
import SLink from "../../components/pages/SLink";
import Banner from "../../components/pages/Banner";
import PageArticle from "../../components/pages/PageArticle";
export default {
  name: "About",
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