<template>
  <article>
    <div class="blog">
      <back-drop v-if="activeDrop" />
      <the-header @showDrop="showBackDrop" @ellipses="showMainSlider" />
      <slide-article v-if="logSlide" />
      <div class="contact-content">
        <cardinfo :items="blogPosts" />
      </div>
    </div>
  </article>
</template>

<script>
import Cardinfo from "../components/Article/Cardinfo.vue";
import SlideArticle from "../components/Article/SlideArticle.vue";
import BackDrop from "../components/BackDrop.vue";
import TheHeader from "../components/Header/TheHeader.vue";

export default {
  components: { TheHeader, BackDrop, SlideArticle, Cardinfo },
  data() {
    return {
      logSlide: false,
      activeDrop: false,
    };
  },
  computed: {
    blogPosts() {
      return this.$store.state.blogPosts;
    },
  },
  methods: {
    showBackDrop() {
      this.activeDrop = !this.activeDrop;
    },
    showMainSlider() {
      this.logSlide = !this.logSlide;
      this.activeDrop = !this.activeDrop;
    },
  },
};
</script>

<style scoped>
.contact-content {
  max-width: 95rem;
  margin: auto;
  padding: 0 2rem;
  position: relative;
  top: 15rem;
}
.blog {
  position: relative;
  top: 15rem;
  z-index: 77;
}
</style>
