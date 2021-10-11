<template>
  <article>
    <div class="main-article">
      <div class="article-control">
        <div class="article-container">
            <div class="text">
              <h1 class="titr-text">
                مقالات
              </h1>
            </div>
        </div>
        <cardinfo :items="blogPosts" />
      </div>
    </div>
  </article>
</template>

<script>
import Cardinfo from './Cardinfo.vue'

export default {
  components: { Cardinfo },

data(){
  return{
    activeToggle:false
  }
},
computed:{
  blogPosts(){
    return this.$store.state.blogPosts
  }
},
methods:{},
}
</script>

<style scoped>
article{
  position: relative;
  top: 15rem;
  z-index: 77;
  max-width: 95rem;
  margin: auto;
  height:auto;
}
.main-article{
  padding: 0 2.5rem;
}
.article-control{
  padding: 2.5rem 0;
}
.article-container{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.titr-btn{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  position: relative;
}
.list-btn{
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 1rem;
  background-color: rgba(79, 107, 0, 0.904);
  color: white;
  padding: .5rem 2.5rem;
  border-radius: .5rem ;
}
.btn-titr{
  margin-right: .3rem
}
.titr-text{
  margin-bottom: .5rem;
  font-family: 'shabnam';
}
.list-of-btn{
  position: relative;
  width: 100%;
}
.list-items{
  position: absolute;
  top: 0;
  padding: .5rem;
  text-align: center;
  width: 15.5%;
  background-color:  rgba(79, 107, 0, 0.904);
  border-radius:.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  z-index: 200;
}
.item{
  list-style: none;
  font-size: 1.5rem;
  /* padding: .7rem 1rem; */
  color: white;
  cursor: pointer;
  width: 100%;
}
.item:hover{
  background-color:  rgba(192, 247, 43, 0.904);
  border-radius: .5rem;
}


@media screen and (max-width:50.6875rem) {
article{
  position: relative;
  top: 6rem;
}
.article-control{
  padding: 1.5rem 0;
}
.list-btn{
  display: none;
}
}
</style>