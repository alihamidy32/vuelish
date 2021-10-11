<template>
 <article>
   <loading v-if="loading"/>
   <modal v-if="modalActive" @close-modal="closeModal" :modalMessage="modalMessage"/>
    <div class="container">
      <div class="main">
        <form class="login-form">
          <h1 class="reset">
            بازیابی گذر واژه
          </h1>
          <p class="title">
            رمز عبور خود را فراموش نموده اید؟برای بازیابی آن لطفا ادرس ایمیل خود را وارد نمایید.
          </p>
          <input type="email" placeholder="ایمیل" v-model="email" class="re-mail">
          <button @click.prevent="resetPassword" class="re-btn">
            بازیابی
          </button>
        </form>
      </div>
    </div>
  </article>
</template>

<script>
import Loading from '../components/Loading.vue'
import Modal from '../components/Modal.vue'
import firebase from "firebase/app";
import "firebase/auth"
export default {
  name:'Remember',
  components:{Modal, Loading ,},
  data(){
    return{
      modalActive:false,
      email:"",
      modalMessage:"",
      loading:null
    }
  }, 
  methods:{
    resetPassword(){
      this.loading = true;
      firebase.auth().sendPasswordResetEmail(this.email)
      .then(() =>{
        this.loading = false;
        this.modalMessage = "درخواست بازنشانی گذرواژه تان به ادرس ایمیل شما ارسال شد."
        this.modalActive = true
      })
      .catch(err =>{
        this.modalMessage = err.message
        this.modalActive =true
        this.loading = false
      })
    },
    closeModal(){
      this.modalActive = !this.modalActive
      this.email = !this.email
    }
  }
}
</script>

<style scoped>
article{
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: rgb(246, 255, 208);
}
.container{
  max-width: 95rem;
  height: 50rem;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.main{
  width: 35rem;
  height: 25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 1.5rem;
}
.login-form{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
}
.reset{
  text-align: center;
  width: 100%;
}
.reset,
.title{
  font-family: 'yekan';
  margin-bottom: 1.5rem;
}
.re-mail{
  width: 100%;
  padding: .5rem .8rem;
  outline: none;
  font-family: 'yekan';
  font-size: 1.2rem;
  direction: ltr;
  margin-bottom: 1.5rem;
}
.re-btn{
  outline: none;
  padding: .5rem 1.2rem;
  border-radius: .5rem;
  background-color: yellowgreen;
  color: white;
  font-size: 1.1rem;
  font-family: 'yekan';
  align-self: center;
}
</style>