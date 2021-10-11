<template>
  <div>
    <div v-if="$store.state.postLoaded"></div>
    <router-view />
  </div>
</template>

<style>
* {
  box-sizing: border-box;
  margin: 0;
}
html {
  background-color: beige;
  direction: rtl;
}
@font-face {
  font-family: "Yekan";
  src: local("Yekan"), url(./fonts/Yekan/Yekan.ttf) format("truetype");
}
@font-face {
  font-family: "Vazir";
  src: local("vazir"), url(./fonts/vazir/Vazir.ttf) format("truetype");
}
@font-face {
  font-family: "Shabnam";
  src: local("Shabnam"), url(./fonts/Shabnam/Shabnam.ttf) format("truetype");
}
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap");
</style>
