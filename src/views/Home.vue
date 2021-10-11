<template>
<div class="home" >
  <back-drop v-if="activeDrop" />
  <div>
  <the-header 
  @showDrop="showBackDrop"
  @ellipses="showMainSlider"/>
  <off-header />
  </div>
  <main-article />
  <slide-article v-if="logSlide" />
  <the-footer v-if="!footer" />
</div>


</template>

<script>
import MainArticle from '../components/Article/MainArticle.vue'
import SlideArticle from '../components/Article/SlideArticle.vue'
import BackDrop from '../components/BackDrop.vue'
import OffHeader from '../components/Header/OffHeader.vue'
import TheHeader from '../components/Header/TheHeader.vue'
import TheFooter from '../components/TheFooter.vue'
import firebase from "firebase/app"
import "firebase/auth"
export default {
  components: { TheHeader, MainArticle, BackDrop, SlideArticle, TheFooter, OffHeader},
  data(){
    return{
      logSlide:false,
      activeDrop:false,
      footer:null
    }
  },
  created(){
    firebase.auth().onAuthStateChanged(async(user)=>{
      this.$store.commit("updateUser" , user);
      if(user){
        this.$store.dispatch("getCurrentUser");
      }
    })
    this.checkRoute();
    this.$store.dispatch("getPost")
  },
  methods:{
    showBackDrop(){
      this.activeDrop = !this.activeDrop
    },
    showMainSlider(){
      this.logSlide = !this.logSlide
      this.activeDrop = !this.activeDrop
    },
    checkRoute(){
      if(this.$route.name === "SignUp"){
        this.footer = true;
        return;
      }else{
        this.footer = false
      }
    }
  },
  watch:{
    $route(){
      this.checkRoute();
    }
  }
}
</script>

<style>
.home{
  position: relative;
}
</style>