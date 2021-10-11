<template>
  <header>
    <div class="main-header">
      <div class="content">
        <div class="btn" @click="activeMenu">
          <div v-if="activeBars"><i class="fa fa-bars"></i></div>
          <div v-else><i class="fa fa-times"></i></div>
        </div>
        <div class="items">
          <div class="list-items">
            <router-link class="link" to="/"> صفحه اصلی </router-link>
            <router-link class="link" to="/blog"> بلاگ </router-link>
            <router-link class="link" to="/about"> درباره ما </router-link>
          </div>
          <div class="side">
            <input-header />
          </div>
          <div class="ellipsis" @click="activeEllipse">
            <i class="fa fa-ellipsis-v"></i>
          </div>
        </div>
      </div>
    </div>
    <slide-header v-if="activeSlider" />
  </header>
</template>

<script>
import InputHeader from "./InputHeader.vue";
import SlideHeader from "./SlideHeader.vue";
export default {
  components: { InputHeader, SlideHeader },
  data() {
    return {
      activeSlider: false,
      activeBars: true,
    };
  },
  methods: {
    activeMenu() {
      this.activeSlider = !this.activeSlider;
      this.activeBars = !this.activeBars;
      this.$emit("backDrop");
    },
    activeEllipse() {
      this.$emit("clickEllipse");
    },
  },
};
</script>

<style scoped>
header {
  background-color: rgb(15, 119, 238);
  position: fixed;
  top: 0;
  z-index: 101;
}
.main-header {
  padding: 0 3.5rem;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.content {
  padding: 2rem 0;
  width: 100%;
}
.items {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}
.link {
  list-style: none;
  font-family: "yekan";
  text-decoration: none;
  font-size: 1.5rem;
  padding: 0 0.5rem;
  color: white;
}
.fa-sign-in {
  font-size: 2.2rem;
  color: white;
  cursor: pointer;
}
.brand-logo {
  font-family: "Dancing Script", cursive;
  color: white;
  margin: 0.5rem;
}
.fa-bars,
.fa-times,
.fa-ellipsis-v {
  display: none;
}
.btn {
  width: fit-content;
}
.profile {
  color: #fff;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.profile-menu {
  width: 10rem;
  height: 2rem;
  background-color: #303030;
  color: #fff;
  position: absolute;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.75);
  right: 0;
  top: 1.5rem;
}
.option {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.signout {
  text-align: center;
  font-weight: 500;
  line-height: 2rem;
}

@media screen and (max-width: 50.6875rem) {
  .fa-bars,
  .fa-times {
    display: block;
    font-size: 1.5rem;
    color: white;
    align-self: center;
    position: absolute;
    top: 2.7rem;
    right: 3.5rem;
  }
  .fa-ellipsis-v {
    display: block;
    font-size: 1.5rem;
    color: white;
    position: absolute;
    top: 2.7rem;
    left: 3.5rem;
  }
  .list-items {
    display: none;
  }
  .content {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(8, minmax(0, 1fr));
  }
}

@media screen and (max-width: 35.25rem) {
  .fa-bars,
  .fa-times {
    display: block;
    font-size: 1.5rem;
    color: white;
    align-self: center;
    position: absolute;
    top: 2.7rem;
    right: 1.5rem;
  }
  .fa-ellipsis-v {
    display: block;
    font-size: 1.5rem;
    color: white;
    position: absolute;
    top: 2.7rem;
    left: 1.5rem;
  }
  .main-header {
    padding: 0 1.5rem;
  }
  .content {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(10, minmax(0, 1fr));
  }
}

@media screen and (max-width: 17.5rem) {
  .fa-bars,
  .fa-times {
    display: block;
    font-size: 1.5rem;
    color: white;
    align-self: center;
    position: absolute;
    top: 2.7rem;
    right: 0.5rem;
  }
  .fa-ellipsis-v {
    display: block;
    font-size: 1.5rem;
    color: white;
    position: absolute;
    top: 2.7rem;
    left: 0.5rem;
  }
  .main-header {
    padding: 0 0.5rem;
  }
  .content {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(18, minmax(0, 1fr));
  }
}
</style>
