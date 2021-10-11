<template>
  <article>
    <div class="blog">
      <div class="content">
        <h3 class="desc">
          شما می توانید تنها با کلیک بر روی یکی از این شبکه ها به راحتی و سرعت
          در بلاگ ویولیش عضو شوید
        </h3>
        <div class="social-media">
          <div class="social g-s">
            <p class="title" @click="signIn">عضویت با جی میل</p>
          </div>
          <div class="social y-s">
            <p class="title" @click="signInYahoo">عضویت با یاهو</p>
          </div>
          <div class="social l-s">
            <p class="title">عضویت با لینکدین</p>
          </div>
          <div class="social git-s">
            <p class="title">عضویت با گیت هاب</p>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";

export default {
  methods: {
    signIn() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((res) => {
          console.log(res);
        })
        .then(() => {
          this.$router.push({ name: "Home" });
        })
        .catch((err) => {
          console.log("err:" + err);
        });
    },
    signInYahoo() {
      const provider = new firebase.auth.signInYahoo();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((res) => {
          console.log(res);
        });
    },
  },
};
</script>

<style scoped>
.blog {
  padding: 10.5rem 4.5rem;
  width: 100%;
  height: 91%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.social-media {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.g-s {
  background-color: yellowgreen;
}
.g-s:hover {
  background-color: rgb(182, 206, 134);
}
.y-s {
  background-color: rgb(205, 50, 184);
}
.y-s:hover {
  background-color: rgb(202, 126, 192);
}
.l-s {
  background-color: rgb(66, 50, 205);
}
.l-s:hover {
  background-color: rgb(114, 104, 201);
}
.git-s {
  background-color: rgba(0, 0, 0, 0.274);
}
.git-s:hover {
  background-color: rgba(107, 107, 107, 0.274);
}
.desc {
  font-family: "vazir";
  color: white;
  margin-bottom: 1rem;
}
.social {
  padding: 0 0.5rem;
  border-radius: 0.5rem;
  line-height: 2.5rem;
  cursor: pointer;
}
.title {
  color: white;
  font-family: "vazir";
}
</style>
