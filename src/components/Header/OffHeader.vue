<template>
  <header>
    <div class="main-header">
      <div class="control-header">
        <div class="header">
          <div class="brand">
          <h1 class="logo">
          vuelish
          </h1>
          <h4 class="blog">
            BLOG
          </h4>
          </div>
          <div class="desc">
            <p class="desc-title">
              در ویولیش بلاگ قصد ما بر این است تا با گردآوری بروز ترین مطالب در خصوص فضای گسترده اینترنت و نحوه ورود به این حوزه راهنمای کوچکی برای شما عزیزان بوده باشیم.
            </p>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@497;700&family=Great+Vibes&display=swap');
header{
  background-color: rgb(161, 102, 190);
  position: relative;
  top: 15rem;
  z-index: 100;
}
.main-header{
  max-width: 95rem;
  margin: auto;
  padding: 0 2rem;
}
.control-header{
  padding: 3rem 0;
}
.header{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.brand{
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-end;
}
.logo{
  font-size: 7rem;
  color: rgb(0, 0, 0);
  font-family: 'Great Vibes', cursive;
}
.blog{
  font-size: 1.5rem;
}
.desc{
  width: 35rem;
}
.desc-title{
  font-size: 2rem;
  font-family: 'yekan';
  padding: 1rem 1.5rem;
  text-align: justify;
  color: white;
}

@media screen and (max-width:50.6875rem) {
  header{
  background-color: rgb(161, 102, 190);
  position: relative;
  top: 6rem;
  z-index: 100;
}
  .header{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  top: 10rem;
}

.desc-title{
  font-size: 2rem;
  font-family: 'yekan';
  padding: .2rem .8rem;  
}
.brand{
  margin-bottom: 1.5rem;
}
}

@media screen and (max-width:35.25rem) {
header{
  background-color: rgb(161, 102, 190);
  position: relative;
  top:6rem;
  z-index: -1;
}
.main-header{
  max-width: 95rem;
  margin: auto;
  padding: 0 1rem;
}
.control-header{
  padding:.5rem 0;
}
.brand{
  margin-bottom: .5rem;
}
.header{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.logo{
  font-size: 3.5rem;
  color: rgb(0, 0, 0);
  font-family: 'Great Vibes', cursive;
}
.blog{
  font-size: .5rem;
}
.desc{
  width: 15rem;
}
.desc-title{
  font-size: 1.5rem;
  font-family: 'yekan';
  padding: .2rem .8rem;
  text-align: justify;
  color: white;
}

}
</style>