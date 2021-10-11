<template>
  <article>
    <div class="container">
      <div class="main">
        <form class="login-form">
          <div class="us-na">
          <label for="username" class="username">
           نام کاربری :
            <input type="email" name="" v-model="email" class="username">
          </label>
          </div>
          <div class="us-pa">
          <label for="password" class="pass">
          رمز عبور :
            <input type="password" name="" v-model="pass" class="pass">
          </label>
          </div>
          <div class="us-rem">
          <input type="checkbox" name="rememberme" id="">
          <p class="rem">
            مرا به خاطر بسپار
          </p>
          </div>
          <div v-show="error" class="error">{{errorMsg}}</div>
          <div class="los-rem-pa">
            <router-link :to="{name : 'Remember'}" class="los-pa">
              فراموشی رمز عبور
            </router-link>
            <button @click.prevent="signIn" class="in">
              ورود
            </button>
          </div>
        </form>
      </div>
    </div>
  </article>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth"
export default {
  name:'LogIn',
  data(){
    return{
      email:"",
      pass:"",
      error:null,
      errorMsg:""
    }
  },
  methods:{
    signIn(){
      firebase.auth().signInWithEmailAndPassword(this.email , this.pass)
      .then(()=>{
        this.$router.push({name:"Home"})
        this.error = false;
        this.errorMsg = "";
      })
      .catch((err) =>{
        this.error = true;
        this.errorMsg =err.message
      })
    }
  }
}
</script>

<style scoped>
article{
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: honeydew;
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
.us-na,
.us-pa,
.us-rem,
.los-rem-pa{
  padding: 1rem;
  width: 100%;
  font-family: 'shabnam';
  display: flex;
  align-items: center;
}
.los-rem-pa{
  justify-content: space-between;
}
.username,
.pass{
  width: 100%;
  height: 1.5rem;
  outline: none;
}
.rem{
  margin-right: 1rem;
}
.los-pa,
.in{
  text-decoration: none;
  padding: .3rem .5rem;
  background-color: yellowgreen;
  color: white;
  font-family: 'shabnam';
  border-radius: .5rem;
  outline: none;
  cursor: pointer;
  transition: .5s ease all;
}
.los-pa:hover{
  background-color: white;
  color: yellowgreen;
}
.error{
  text-align: center;
  font-family: 'vazir';
  font-size: 1.2rem;
  color: red;
}
</style>