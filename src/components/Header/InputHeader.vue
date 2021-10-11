<template>
  <section>
    <div class="input-header">
      <form class="input-control">
        <input type="text" placeholder="به من بگو،پیداش میکنم " class="input" />
      </form>
      <i class="fa fa-search"></i>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.input-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}
.input-control {
  padding: 0 1rem;
}
.input {
  font-family: "shabnam";
  font-size: large;
  padding: 0 3.8rem;
  border-radius: 0.8rem;
  height: 45px;
  outline: none;
  width: 45vw;
  background-color: beige;
}
.fa-search {
  font-size: 1.8rem;
  color: rgba(59, 58, 58, 0.658);
  position: absolute;
  right: 0;
  margin: 0.2rem 1.5rem 0 0;
}

@media screen and (max-width: 50.6875rem) {
  .input {
    font-family: "shabnam";
    font-size: small;
    padding: 0 2.8rem;
    border-radius: 0.8rem;
    height: 45px;
    outline: none;
    width: 59vw;
    background-color: beige;
  }
}

@media screen and (max-width: 35.25rem) {
  .input {
    font-family: "shabnam";
    font-size: small;
    padding: 0 2.8rem;
    border-radius: 0.8rem;
    outline: none;
    width: 65vw;
    background-color: beige;
  }
}

@media screen and (max-width: 17.5rem) {
  .input {
    font-family: "shabnam";
    font-size: smaller;
    padding: 0 2rem;
    border-radius: 0.8rem;
    outline: none;
    width: 75vw;
    background-color: beige;
  }
  .fa-search {
    font-size: 1.2rem;
    color: rgba(59, 58, 58, 0.658);
    position: absolute;
    right: 0;
    margin: 0.2rem 1.5rem 0 0;
  }
}
</style>
