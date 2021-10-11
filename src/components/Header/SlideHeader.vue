<template>
  <header>
    <div class="main-slide">
      <div class="slide-content">
        <div class="content">
          <router-link class="link" to="/"> صفحه اصلی </router-link>
          <router-link class="link" to="/blog"> بلاگ </router-link>
          <router-link class="link" to="/about"> درباره ما </router-link>
        </div>
        <div class="form-brand-control">
          <div class="brand">
            <h1 class="logo">vuelish</h1>
          </div>
          <div class="form-control">
            <div v-if="!user" class="sign-up">
              <router-link class="link-a" to="/signup"> عضویت </router-link>
            </div>
            <div class="log-in">
              <router-link v-if="!user" class="link-a" to="/login">
                ورود
              </router-link>
              <router-link @click="signOut" v-if="user" class="link-a" to="#">
                خروج
              </router-link>
            </div>
            <div class="create-post">
              <router-link class="link-a" to="/create-post">
                ایجاد پست <i class="fa fa-plus"></i>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
export default {
  props: {
    activeSlider: {
      type: Boolean,
      required: false,
    },
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  data() {
    return {};
  },
  methods: {
    signOut() {
      firebase.auth().signOut();
      window.location.reload();
    },
  },
};
</script>

<style scoped>
.main-slide {
  background-color: rgb(255, 255, 255);
  width: 100vw;
  padding: 5rem 0;
  height: 25rem;
  position: fixed;
  top: 6.8rem;
  transition: 0.5s;
  animation-name: slider;
  animation-duration: 0.5s;
  animation-timing-function: ease-in-out;
}
.slide-content {
  padding: 0 3rem;
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.link {
  list-style: none;
  font-family: "vazir";
  width: 85vw;
  margin-bottom: 0.5rem;
  background-color: rgb(212, 228, 243);
  border-radius: 0.5rem;
  text-decoration: none;
  font-size: 1.5rem;
  padding: 0 1.5rem;
  color: rgba(0, 119, 255, 0.849);
}
.form-brand-control {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  padding: 0 1.5rem;
}
.logo {
  font-size: 5rem;
  color: rgb(73, 70, 241);
  font-family: "Great Vibes", cursive;
  letter-spacing: 1.2rem;
}
.form-control {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.link-a {
  font-size: large;
  text-decoration: none;
  font-family: "shabnam";
  color: white;
}
.log-in {
  margin-right: 0.5rem;
  padding: 0.5rem 1.8rem;
  background-color: rgb(231, 156, 17);
  border-radius: 0.5rem;
  cursor: pointer;
}
.sign-up {
  padding: 0.5rem 1.8rem;
  background-color: rgb(231, 156, 17);
  border-radius: 0.5rem;
  cursor: pointer;
}
.log-in:hover {
  background-color: rgb(255, 200, 19);
}
.sign-up:hover {
  background-color: rgb(255, 200, 19);
}
.create-post {
  margin-right: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: rgb(0, 255, 64);
  border-radius: 0.5rem;
  cursor: pointer;
}
@keyframes slider {
  from {
    top: 5.8rem;
  }
  to {
    top: 6.8rem;
  }
}

@media screen and (max-width: 50.6875rem) {
  .main-slide {
    background-color: rgb(255, 255, 255);
    padding: 2rem 0;
    height: 20rem;
    width: 100%;
    border-radius: 1.5rem;
  }
  .slide-content {
    padding: 0 1.2rem;
  }
  .content {
    padding: 0.2rem 0;
  }
  .logo {
    font-size: 3rem;
    letter-spacing: 0.5rem;
  }
  .form-brand-control {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
    padding: 0 1rem;
  }
  .link-a {
    font-size: medium;
    text-decoration: none;
    font-family: "shabnam";
    color: white;
  }
}

@media screen and (max-width: 35.25rem) {
  .main-slide {
    background-color: rgb(255, 255, 255);
    padding: 1rem 0;
    height: 15rem;
  }
  .slide-content {
    padding: 0 1.2rem;
  }
  .logo {
    font-size: 2rem;
    letter-spacing: 0.2rem;
  }
  .link-a {
    font-size: small;
  }
  .log-in {
    margin-right: 0.2rem;
    padding: 0.2rem 0.8rem;
    background-color: rgb(231, 156, 17);
    border-radius: 0.2rem;
    cursor: pointer;
  }
  .sign-up {
    padding: 0.2rem 0.8rem;
    background-color: rgb(231, 156, 17);
    border-radius: 0.2rem;
    cursor: pointer;
  }
  .create-post {
    margin-right: 0.2rem;
    padding: 0.2rem 0.5rem;
    background-color: rgb(0, 255, 64);
    border-radius: 0.2rem;
    cursor: pointer;
  }
  .form-brand-control {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
    padding: 0 0.2rem;
  }
}

@media screen and (max-width: 17.5rem) {
  .main-slide {
    background-color: rgb(255, 255, 255);
    padding: 0.4rem 0;
    height: 14rem;
  }
  .slide-content {
    padding: 0 0.2rem;
  }
  .logo {
    font-size: 1.5rem;
  }
  .link-a {
    font-size: small;
  }
  .log-in {
    margin-right: 0.2rem;
    padding: 0.2rem 0.3rem;
    background-color: rgb(231, 156, 17);
    border-radius: 0.2rem;
    cursor: pointer;
  }
  .sign-up {
    padding: 0.2rem 0.3rem;
    background-color: rgb(231, 156, 17);
    border-radius: 0.2rem;
    cursor: pointer;
  }
  .create-post {
    margin-right: 0.2rem;
    padding: 0.2rem 0.1rem;
    background-color: rgb(0, 255, 64);
    border-radius: 0.2rem;
    cursor: pointer;
  }
  .form-brand-control {
    display: flex;
    justify-content: space-between;
    margin-top: 0.5rem;
    padding: 0 0.2rem;
  }
}
</style>
