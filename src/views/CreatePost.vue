<template>
  <div class="createpost">
    <div class="container">
      <div class="main">
        <div class="option">
          <select name="" id="" v-model="blogCataloge">
            <option >انتخاب عنوان </option>
            <option value="Html">Html</option>
            <option value="Css">Css</option>
            <option value="JavaScript">javaScript</option>
            <option value="Seo">Seo</option>
            <option value="Vue">Vue</option>
            <option value="WebDesign">WebDesign</option>
          </select>
        </div>
        <div class="title"> 
          <input type="text" placeholder="تیتر" v-model="blogTitle">
        </div>
        <div class="desc">
          <textarea placeholder="متن پست" v-model="blogHtml" ></textarea>
        </div>
          <p>
            بارگذاری عکس مرتبط :
          </p>
          <div>
            <input type="file" ref="blogPhoto" @change="previewImage"  accept="image/*">
          </div>
          <image-uploader v-show="$store.state.blogPhotoPreview" />
          <div>
            <button @click="openPreview">
              پیش نمایش تصویر
            </button>
          </div>
          <router-link to="/preview-blog">
            <button @click="uploadBlog">
              پیش نمایش پست
            </button>
          </router-link>
          <button @click="publishBlog">
            بارگذاری پست
          </button>
          <div v-if="error" class="err-msg">
            {{errorMsg}}
          </div>
      </div>
    </div>
  </div>
</template>

<script>


import ImageUploader from '../components/ImageUploader.vue'
import {db} from "@/main.js"
import firebase from "firebase/app"
import "firebase/storage"
export default {
  components: { ImageUploader },
  data(){
    return{
      file:null,
      error:null,
      errorMsg:null
    }
  },
  computed:{
    profileId(){
      return this.$store.state.profileId;
    },
    blogPhotoName(){
      return this.$store.state.blogPhotoName
    },
    blogCoverPhotoName(){
      return this.$store.state.blogPhotoName
    },
  blogTitle:{
    get(){
      return this.$store.state.blogTitle
    },
    set(payload){
      return this.$store.commit("updateBlogTitle" , payload)
    }
  },
  blogCataloge:{
    get(){
      return this.$store.state.blogCataloge
    },
    set(payload){
      this.$store.commit("updateBlogCataloge" , payload)
    }
  },
  blogHtml:{
    get(){
      return this.$store.state.blogHtml
    },
    set(payload){
      return this.$store.commit("newBlogPost" , payload)
    }
  },
  
  },
  methods:{
    previewImage(){
    this.file = this.$refs.blogPhoto.files[0];
    const fileName = this.file.name;
    this.$store.commit("fileNameChange" , fileName);
    this.$store.commit("createFileUrl", URL.createObjectURL(this.file))
  },
  openPreview(){
    this.$store.commit("openPhotoPreview")
    const storageRef  = firebase.storage().ref(`documents/blogCoverPhotoPreview/${this.$store.state.blogPhotoName}`)
    storageRef.put(this.file).on("state_changed" ,(snapshot) =>{
      console.log(snapshot);
    })
  },
  publishBlog(){
    if(this.blogCataloge !== 'انتخاب عنوان' && (this.blogTitle.length !==0 &&  this.blogHtml !== 'متن پست')){
      if(this.file){
        const storageRef = firebase.storage().ref()
        const docRef = storageRef.child(`documents/blogPostPreview/${this.$store.state.blogPhotoName}`)
        docRef.put(this.file).on("state_changed" , (snapshot) =>{
          console.log(snapshot);
        },
        (err)=>{
          console.log(err);
        },
        async ()=>{
          const downloadURL = await docRef.getDownloadURL();
          const timeStamp = await Date.now();
          const dataBase = await db.collection("blogPosts").doc()
          await dataBase.set({blogID:dataBase.id,
            blogHtml : this.blogHtml,
            blogCoverPhoto:downloadURL,
            blogCoverPhotoName:this.blogCoverPhotoName,
            blogTitle:this.blogTitle,
            blogCataloge:this.blogCataloge,
            profileId:this.profileId,
            date:timeStamp});
          await this.$store.dispatch("getPost")
          this.$router.push({name : "ViewBlog" , params:{blogid : dataBase.id}})
        }
        )
        return
      }
    }else{
      this.error = true,
      this.errorMsg = "لطفا فیلدهای خالی پر شوند"
      setTimeout(() => {
        this.error = false
      }, 5000);
    }
  }
},

}
</script>

<style scoped>
.createpost{
  background-color: snow;
  font-family: 'yekan';
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: scroll;
  display: flex;
  align-items: center;
  justify-content: center;
}
.container{
  max-width: 95rem;
  margin: auto;
  padding: 0 2.5rem;
}
.main{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  align-content: center;
  padding: 4rem 0;
}
.option select{
  padding: .2rem;
  font-size: 1rem;
  margin-bottom: 1rem;
}
.main input{
  height: 2rem;
}
.title{
  width: 100%;
}
input{
  margin-bottom: 1rem;
  font-size: 1.2rem;
  width: 100%;
}
.title input{
  padding: 1rem;
}
textarea{
  vertical-align: top;
  font-size: 1.2rem;
  width: auto;
  height: auto;
  padding: 1rem;
  margin-bottom: 1rem;
  overflow: scroll;
}
p{
  font-size: 1.1rem;
}
.img{
  display: flex;
}
button{
  padding: .5rem 1rem;
  margin-right: 1rem;
  font-size: 1rem;
  font-family: 'shabnam';
  background-color: #303030;
  color: #fff;
  border-radius: .5rem;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, .665);
}

</style>