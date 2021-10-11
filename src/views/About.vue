<template>
  <div class="about">
    <back-drop v-if="activeDrop" />
    <the-header @showDrop="showBackDrop" @ellipses="showMainSlider" />
    <slide-article v-if="logSlide" />
    <div class="about-content">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis minus,
      facere eos facilis eaque nam quod fugiat laboriosam rerum illo delectus
      dolorum adipisci aperiam accusantium cupiditate at illum odit officiis?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, magnam
      eos, totam molestiae distinctio accusantium vero, quas id eligendi
      incidunt amet cumque doloremque? Dolorum vero quam eaque eum dolorem
      praesentium? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      Corporis inventore odio deleniti dolores nostrum, eius veritatis sint.
      Voluptatibus, totam quia quibusdam tempora numquam vel non rem ut laborum
      alias nemo! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      Atque soluta earum reprehenderit eligendi nihil et corporis quidem eos,
      animi error doloremque debitis, dolores, dolor laboriosam delectus illo
      nesciunt. Quos, suscipit! Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Consequatur pariatur animi molestias dolore accusantium
      ex nam facilis repudiandae perferendis distinctio! Quos sapiente
      voluptatum similique dolore voluptates mollitia, soluta quia quibusdam!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quia in
      recusandae voluptate saepe ad sint mollitia voluptatum. Sit cum quasi
      dolorem dolor magnam, neque cupiditate nemo at ipsa aliquam! Lorem ipsum
      dolor sit amet consectetur adipisicing elit. Dignissimos error dolorum
      autem, magnam, hic, similique aliquam assumenda molestias vitae atque ut
      dolore iste adipisci maxime doloremque blanditiis quas! Quibusdam, est.
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque mollitia
      libero dolore! Cupiditate recusandae illo adipisci illum natus, facilis
      quas! Quisquam quas nam, nostrum maxime reiciendis repudiandae odit culpa
      excepturi? Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Architecto animi, corporis labore dicta aliquid ea accusamus, dolore saepe
      voluptates facilis aspernatur, ducimus voluptatibus reprehenderit
      excepturi illum. Perferendis similique eveniet provident.
    </div>
  </div>
</template>

<script>
import SlideArticle from "../components/Article/SlideArticle.vue";
import BackDrop from "../components/BackDrop.vue";

import TheHeader from "../components/Header/TheHeader.vue";
export default {
  components: { TheHeader, BackDrop, SlideArticle },
  data() {
    return {
      logSlide: false,
      activeDrop: false,
    };
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
.about-content {
  position: relative;
  top: 15rem;
  background-color: rgb(235, 229, 229);
}
</style>
