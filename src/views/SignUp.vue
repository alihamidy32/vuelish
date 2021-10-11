<template>
  <article>
    <div class="container">
      <div class="main">
        <div class="box">
          <div class="title">
            <h1 class="title-desc">
              vuelish blog
            </h1>
          </div>
          <tabs-wrapper>
            <tabs title="ثبت نام از بلاگ">
              <sign-up-blog/>
            </tabs>
            <tabs title="ثبت نام از صفحات اجتماعی">
              <sign-up-social/> 
            </tabs>
          </tabs-wrapper>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import TabsWrapper from '../components/TabsWrapper.vue';
import Tabs from '../components/Tabs.vue'
import SignUpBlog from '../components/SignUpBlog.vue';
import SignUpSocial from '../components/SignUpSocial.vue';

export default {
  components: { TabsWrapper , Tabs, SignUpBlog, SignUpSocial },
data(){
  return{
    tabs:['' , ''],
    activeTab:true,
    currentTab:0,

  }
},
methods:{
  log(index){
    console.log(index);
  }
}
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@497;700&family=Great+Vibes&display=swap');
article{
  background-color: rgb(84, 186, 245);
  width: 100%;
}
.container{
  max-width: 95rem;
  margin: auto;
  padding: 0 4rem;
}
.main{
  padding: 8rem 0;
}
.box{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.title-desc{
  font-family: 'Great Vibes', cursive;
  font-size: 3rem;
  color: white;
}


@media screen and (max-width:50.6875rem) {
.container{
  padding: 0 1.5rem;
}
}
</style>