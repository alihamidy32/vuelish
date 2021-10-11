import { createStore } from "vuex";
import firebase from 'firebase/app'
import {db} from '@/main'
import "firebase/auth";
export default createStore({
  state: {
    blogPosts:[],
    postLoaded:null,
    blogHtml:"متن پست",
    blogTitle:"",
    blogCataloge:'انتخاب عنوان',
    blogCoverPhoto:null,
    blogCoverPhotoName:null,
    blogPhotoPreview:null,
    blogPhotoName:"",
    blogPhotoFileURL:null,
    editPost:null,
    profileEmail:null,
    profileId:null,
  },
  mutations: {
    newBlogPost(state , payload){
      state.blogHtml = payload
    },
    updateBlogCataloge(state , payload){
      state.blogCataloge = payload
    },
    updateBlogTitle(state , payload){
      state.blogTitle = payload
    },
    fileNameChange(state , payload){
      state.blogPhotoName = payload
    },
    createFileUrl(state , payload){
      state.blogPhotoFileURL = payload
    },
    openPhotoPreview(state){
      state.blogPhotoPreview = !state.blogPhotoPreview
    },
    updateUser(state , payload){
      state.user = payload
    },
    setProfileInfo(state , doc){
      state.profileId = doc.id;
      state.profileEmail = doc.data().userName;
    }
  },
  actions: {
    async getCurrentUser({commit}){
      const dataBase = await db.collection("users").doc(firebase.auth().currentUser.uid);
      const dbResult = await dataBase.get();
      commit("setProfileInfo" , dbResult);
    },
    async getPost({state}){
      const dataBase = await db.collection("blogPosts").orderBy("date" , "desc");
      const dbResult = await dataBase.get();
      dbResult.forEach((doc) => {
        if(!state.blogPosts.some(post => post.blogID === doc.id)){
          const data = {
            blogID : doc.data().blogID,
            blogHtml : doc.data().blogHtml,
            blogCoverPhoto : doc.data().blogCoverPhoto,
            blogTitle : doc.data().blogTitle,
            blogCataloge : doc.data().blogCataloge,
            blogDate : doc.data().date
          }
          state.blogPosts.push(data)
        }
      });
      state.postLoaded = true;
    }
  },
  modules: {},
});
