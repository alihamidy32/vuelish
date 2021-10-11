<template>
  <article>
    <div class="sign-blog">
      <div class="blog">
        <form  class="frm-blg">
          <label for="e-mail" class="mail-blog">
           Email :
           <input type="email" v-model="email" placeholder="Example@gmail.com" class="email">
          </label>
          <label for="pass" class="pass-blog">
            Password :
           <input type="password" v-model="pass" class="pass">
          </label>
          <label for="pass" class="pass-blog">
            ReEnter Password :
           <input type="password" v-model="repass"  class="pass">
          </label>
          <div v-show="error" class="error">{{errorMsg}}</div>
          <button @click.prevent="register" class="btn">
             عضویت
          </button>
        </form>
      </div>
    </div>
  </article>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import {db} from "@/main";
export default {
  data(){
    return{
      email: "",
      pass:  "",
      repass: "",
      error:null,
      errorMsg:""
    }
  },
  methods:{
    async register(){
      if(
        this.email !== ""&& 
        this.pass !== "" &&
        this.repass !== "" &&
        this.repass === this.pass){
          this.error = false;
          this.errorMsg = "";
          try{
            const firebaseAuth = await firebase.auth();
            const createUser = await firebaseAuth.createUserWithEmailAndPassword(this.email , this.pass);
            const result = await createUser;
            const dataBase = db.collection("users").doc(result.user.uid);
            await dataBase.set({
              userName : this.email,
              password : this.pass
            });
            this.$router.push({name:"Home"})
          }catch(error){
            this.error = true,
            this.errorMsg = ".گذر واژه انتخابی حداقل باید شامل شش حرف باشد"
          }
          setTimeout(() => {
            this.error = false
          }, 5000);
          return;
        }
        else{
          this.error = true;
          if(this.repass !== this.pass){
            this.errorMsg = "عدم تشابه در گذر واژه ها"
          }else{
            this.errorMsg = "لطفا فیلدهای خالی پر گردد."
          }
          setTimeout(() => {
            this.error = false
          }, 5000);
        }
          return;
    }
  }
}
</script>

<style scoped>
.sign-blog{
  padding:5.5rem 1.5rem;
  width: 100%;
  height: 91%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.blog{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.frm-blg{
  direction: ltr;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: 100%;
}
.mail-blog,
.pass-blog{
  font-size: 1.2rem;
  margin-bottom: 1rem;
  width: 100%;
}
.email,
.pass{
  width: 100%;
  padding: .8rem;
  border-radius: .5rem;
}
.btn{
  padding: .3rem 1.2rem;
  font-family: 'yekan';
  font-size: 1.3rem;
  background-color: orangered;
  border-radius: .5rem;
  color: white;
  width: 100%;
}
.error{
  text-align: center;
  font-family: 'vazir';
  font-size: 1.2rem;
  color: red;
}
</style>