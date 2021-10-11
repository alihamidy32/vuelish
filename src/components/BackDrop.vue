<template>
  <div class="backdrop"></div>
</template>

<script>
export default {
  props:{
    activeDrop:{
      type:Boolean,
      required:true
    }
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.backdrop {
  width: 100%;
  height: 100%;
  background-color: rgb(131, 131, 134);
  position: fixed;
  opacity: .5;
  top: 0;
  z-index: 99;
}
</style>
