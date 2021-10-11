<template>
  <div>
    <img :src="blogCoverPhoto" alt="" />
  </div>
</template>

<script>
export default {
  computed: {
    blogCoverPhoto() {
      return this.$store.state.blogPhotoFileURL;
    },
  },
};
</script>

<style scoped>
img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
</style>
