<template>
  <aside>
    <div class="container">
      <div class="control">
        <div class="aside-control">
          <div class="top-title">فهرست عناوین</div>
          <div class="title">همه مطالب</div>
          <div class="title">Html 5</div>
          <div class="title">css3</div>
          <div class="title">javascript</div>
          <div class="title">vue js</div>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  props: {
    logSlide: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style scoped>
aside {
  display: none;
}
@media screen and (max-width: 50.6875rem) {
  aside {
    display: block;
    width: 80%;
    height: 100%;
    position: fixed;
    top: 6.84rem;
    left: 0;
    z-index: 200;
    background-color: gold;
  }
  .container {
    padding: 5rem 0;
  }
  .control {
    padding: 0 1rem;
  }
  .aside-control {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .top-title {
    font-family: "yekan";
    font-size: 1.6rem;
    color: white;
    border-bottom: 1px solid white;
    width: 100%;
    text-align: center;
    margin-bottom: 1rem;
  }
  .title {
    font-family: "yekan";
    font-size: 1.2rem;
    color: white;
    background-color: rgb(182, 224, 178);
    width: 100%;
    margin-bottom: 1rem;
    border-radius: 0.5rem;
    padding: 0 0.8rem;
  }
}

@media screen and (max-width: 35.25rem) {
  aside {
    display: block;
    width: 80%;
    height: 100%;
    position: fixed;
    top: 6.84rem;
    left: 0;
    z-index: 200;
    background-color: gold;
  }
  .container {
    padding: 5rem 0;
  }
  .control {
    padding: 0 1rem;
  }
  .aside-control {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .top-title {
    font-family: "yekan";
    font-size: 1.6rem;
    color: white;
    border-bottom: 1px solid white;
    width: 100%;
    text-align: center;
    margin-bottom: 1rem;
  }
  .title {
    font-family: "yekan";
    font-size: 1.2rem;
    color: white;
    background-color: rgb(182, 224, 178);
    width: 100%;
    margin-bottom: 1rem;
    border-radius: 0.5rem;
    padding: 0 0.8rem;
  }
}
</style>
