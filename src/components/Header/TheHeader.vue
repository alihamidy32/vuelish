<template>
  <header>
    <top-header @clickEllipse="activeSlider" @backDrop="activeDrop" />
    <down-header />
  </header>
</template>

<script>
import DownHeader from "./DownHeader.vue";
import TopHeader from "./TopHeader.vue";
export default {
  components: { TopHeader, DownHeader },
  data() {
    return {};
  },
  methods: {
    activeDrop() {
      this.$emit("showDrop");
    },
    activeSlider() {
      this.$emit("ellipses");
    },
  },
};
</script>

<style></style>
