<template>
  <header>
    <div class="main-header">
      <div class="header">
        <div class="brand">
          <h1 class="logo">
          vuelish
          </h1>
        </div>
        <div class="form-control">
          <div v-if="!user" class="sign-up">
            <router-link class="link" to="/signup">   عضویت  </router-link> 
          </div>
          <div class="log-in">
            <router-link v-if="!user" class="link" to="/login">   ورود </router-link> 
            <router-link @click="signOut" v-if="user" class="link" to="#">   خروج </router-link> 
          </div>
          <div v-if="user"  class="create-post">
            <router-link class="link" to="/create-post">   ایجاد پست <i class="fa fa-plus"></i> </router-link> 
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth'
export default {
    computed:{
    user(){
      return this.$store.state.user;
    }
  },
  methods:{
    signOut(){
      firebase.auth().signOut();
      window.location.reload();
    }
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@497;700&family=Great+Vibes&display=swap');
header{
  background-color: rgb(255, 255, 255);
  position: fixed;
  top:6.9rem;
  z-index: 101;
}
.main-header{
  width:100vw;
  padding: 0 5rem;
}
.header{
  width: 100%;
  height: 8rem;
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
}
.logo{
  font-size: 5rem;
  color: rgb(73, 70, 241);
  font-family: 'Great Vibes', cursive;
  letter-spacing: 1.2rem;
}
.form-control{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.link{
  font-size: large;
  text-decoration: none;
  font-family: 'shabnam';
  color: white;
}
.log-in{
  margin-right: .5rem;
  padding:.5rem 1.8rem;
  background-color: rgb(231, 156, 17);
  border-radius: .5rem;
  cursor: pointer;
}
.create-post{
  margin-right: .5rem;
  padding:.5rem 1rem;
  background-color: rgb(0, 255, 64);
  border-radius: .5rem;
  cursor: pointer;
}
.sign-up{
  padding:.5rem 1.8rem;
  background-color: rgb(231, 156, 17);
  border-radius: .5rem;
  cursor: pointer;
}
.log-in:hover{
  background-color: rgb(255, 200, 19);
}
.sign-up:hover{
  background-color: rgb(255, 200, 19);
}

@media screen and (max-width:50.6875rem) {
  header{
   display: none;
  }
}


@media screen and (max-width:35.25rem) {
  header{
   display: none;
  }
}
</style>