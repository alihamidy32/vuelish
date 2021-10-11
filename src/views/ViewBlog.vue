<template>
  <div class="container" v-if="currentBlog">
    <h2 class="title">
      {{currentBlog[0].blogTitle}}
    </h2>
    <img :src="currentBlog[0].blogCoverPhoto" alt="">
    <div>
      <p class="cata">
      {{currentBlog[0].blogCataloge}}
    </p>
    <p class="desc">
      {{currentBlog[0].blogHtml}}
    </p>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      currentBlog:null,
    }
  },
  async mounted(){
    this.currentBlog = await this.$store.state.blogPosts.filter((item) =>{
      return item.blogID === this.$route.params.blogid
    })
  },
  computed:{
    blogPosts(){
      return this.$store.state.blogPosts
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
  width: 15%;
  color: white;
  margin-bottom: 1rem;
  text-align: center;
  height: 2rem;
  line-height: 2rem;
}
.desc{
  font-family: 'yekan';
  font-size: 1.5rem;
}
</style>