<template>
  <div class="container">
    <h2 class="title">
      {{blogTitle}}
    </h2>
    <img :src="blogCoverPhoto" alt="">
    <div>
      <p class="cata">
      {{blogCataloge}}
    </p>
    <p>
      {{blogHtml}}
    </p>
    </div>
  </div>
</template>

<script>
export default {
  computed:{
    blogTitle(){
      return this.$store.state.blogTitle
    },
    blogHtml(){
      return this.$store.state.blogHtml
    },
    blogCoverPhoto(){
      return this.$store.state.blogPhotoFileURL
    },
    blogCataloge(){
      return this.$store.state.blogCataloge
    }
  }
}
</script>

<style scoped>
.container{
  max-width: 95rem;
  margin: auto;
  padding: 4rem 3.5rem;
  display: flex;
  align-items:flex-start;
  flex-direction: column;
  justify-content: space-between;
}
.title{
  font-size: 3.5rem;
  margin-bottom: 1rem;
  align-self: flex-start;
}
img{
  width: 100%;
  height: 100%;
  margin-bottom: 1rem;
}
.cata{
  background-color: rgb(93, 182, 241);
  border-radius: 10%;
  color: white;
  margin-bottom: 1rem;
  text-align: center;
  height: 2rem;
  line-height: 2rem;
}
</style>