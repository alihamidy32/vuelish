import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Tabs from "vue-material-tabs";
import firebase from 'firebase/app'
import 'firebase/firestore'
import "firebase/auth";




firebase.initializeApp({
   apiKey: "AIzaSyA6pxe3JoWS2PBZ3ASlDr0QiGE4XdJ9EsM",
    authDomain: "vuelish-c67f1.firebaseapp.com",
    projectId: "vuelish-c67f1",
    storageBucket: "vuelish-c67f1.appspot.com",
    messagingSenderId: "531981709730",
    appId: "1:531981709730:web:00cd4e0b47b8dc54eac2fb",
    measurementId: "G-C1KM2K9947"
});
const timeStamp =firebase.firestore.FieldValue.serverTimestamp;
export {timeStamp}
export const db = firebase.firestore();
// let app;
// firebase.auth().onAuthStateChanged(() =>{
//     if(!app){
//         createApp(App)
//         .use(store)
//         .use(router)
//         .use(Tabs)
//         .mount("#app");
//     }
// })
createApp(App)
        .use(store)
        .use(router)
        .use(Tabs)
        .mount("#app");

