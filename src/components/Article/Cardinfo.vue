<template>
  <article>
    <div class="container">
      <div class="card" v-for="(item , index) in items" :key="index">
        <div class="card-control">
          <div class="img-container">
            <img :src="item.blogCoverPhoto" alt="" class="img">
          </div>
          <div class="card-def">
            <h4 class="def">{{item.blogCataloge}}</h4>
          </div>
          <div class="card-body">
            <div class="crad-title">
              <h2 class="title">
                {{item.blogTitle}}
              </h2>
            </div>
            <div class="card-desc">
              <p class="desc">
                {{item.blogHtml}}
              </p>
            </div>
          </div>
          <div class="card-bottom">
            <router-link class="card-btn" :to="{name:'ViewBlog' , params:{blogid:item.blogID}}">
              <p class="titr-btn">
                ادامه مطلب
              </p>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
props:{
  items:{
    type:Object,
    required:true,
    default:() =>({})
  }
},
}
</script>

<style scoped>
.container{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
  bottom: 13rem;
}
.card{
  background-color: white;
  border-radius: .5rem;
  width: 30%;
  height: auto;
  cursor: pointer;
  margin-top: 1.5rem;
}
.card:hover{
  transform: translateY(-5px);
  box-shadow:0 12px 12px rgba(0, 0, 0, 0.5);
  transition: .1s ease-out;
}
.card-control{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: space-between;
}
.card-body{
  padding: 0 1rem;
  width: 100%;
}
.img-container{
  position: relative;
  width: 100%;
  padding: 1rem;
}
.img{
  width: 100%;
  height: 10rem;
  border-radius: .5rem;
  object-fit: cover;
  box-shadow: 2px 2px rgba(128, 128, 128, 0.15);
}
.card-def{
  background-color: rgb(44, 142, 255);
  border-radius: .5rem;
  padding: .2rem 1rem;
  margin: 1rem;
}
.desc{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; 
  display: -webkit-box ;
  -webkit-line-clamp:2;
  -webkit-box-orient: vertical;
  font-family: 'shabnam';
  white-space: normal;
  width: 20rem; 
  margin: .5rem 0;
  width: 100%;
}
.card-btn{
  text-decoration: none;
  color: #303030;
  font-family: 'vazir';
  
}
.title{
  font-size: 1rem;
  margin: .5rem 0;
  width: 100%;
}
.card-title{
  margin-top: 1rem;
  width: 100%;
}
.card-bottom{
  text-align: center;
  padding: 1rem ;
  width: 100%;
  margin-top: 1.4rem;
  background-color: rgb(255, 0, 128);
  font-family: 'yekan';
  border-radius:0 0 .5rem .5rem;
}


@media screen and (max-width:65.25rem) {
  .card{
  width: 48%;
  margin-left: .5rem;
}
}

@media screen and (max-width:50.6875rem) {
  .container{
  position: relative;
  bottom: 7.5rem;
}
}


@media screen and (max-width:35.25rem) {
  .container{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
}
.card{
  background-color: white;
  border-radius: .5rem;
  width: auto;
  height: auto;
  cursor: pointer;
  margin-top: 1.5rem;
}
}
</style>