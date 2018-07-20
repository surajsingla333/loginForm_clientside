<template>
<div class="login">
  <section class="column is-4 is-offset-4">
      <div v-on:submit="checkForm">
          <!-- username -->
    <div class="field">
        <div class="label">Username</div>
        <div class="control">
            <input class="input" type="username" placeholder="username" v-model="username" >
        </div>    
        <div class="help is-danger" v-if="errorU"><p >Username does not exist</p></div>
    </div>
        <!-- password -->
    <div class="field">
        <div class="label">Password</div>
        <div class="control"> 
            <input class="input" type="password" placeholder="password" v-model="password" >
            <div class="help is-danger" v-if="errorP"><p>Wrong Password</p></div>
        </div>
          <!-- Type  -->
    <!-- <div class="control">
        <label class="radio">
            <input type="radio" v-model="type" value="admin">Admin
        </label>
        <label class="radio">
            <input type="radio" v-model="type" value="user">User
        </label>
        <div class="help is-danger" v-if="errorT"><p>Choose Permission Type</p></div>
    </div>     -->
    </div>
        <h1> {{count}} times {{type}} {{dataS}}</h1>

    <div>
        <button @click="increment">+</button>
    </div>
        <!-- submit -->
    <div class="field">
        <button type="submit" value="Log in" v-on:click="checkForm()">Log In</button>
    </div>
    <div class="field">
        <button type="submit" value="Forgot Password" v-on:click="navigate2()">Forgot Password</button>
    </div>
    </div>
  </section>  
</div>
</template>

<script>
// import router from'../router'
import {mapGetters, mapActions} from 'vuex';
import axios from 'axios';
export default {
    name:'login',
    data()
    {
        return {
            errorU:false,
            errorP:false,
            username:null,
            password:null,
            response: false,
            data :'hello',
            type:null,
            errorT:false,
            inputU: null,
            inputP:null,
            inputT:null
        }
    },  
    computed: mapGetters([
        'count',
        'dataS',
        'isAdmin',
        'isActive'
    ]),
    beforeCreate(){
        // alert('created');
        console.log("in created")
        console.log("in created", this.$store.state.user_token)
        // if(this.$store.state.user_name!=null)
        // {
        //     this.$router.push({name:'dashboard'})
        // }
        // else return
    },
    mounted(){
        // alert('mounted');
        console.log(this.data)
    },

    methods:{
            
    //  beforeLogin(payload){
    //      const path = 'http://localhost:3000/before_login'
    //      axios.post(payload)
    //      .then((r) => {
    //          if(r.data.access) {
    //             this.$router.push({name:'dashboard'})
    //             return true
    //          }
    //          else {
    //             return false
    //          }
    //      })
    //      .catch((error) => {
    //          console.log(error)
    //      })
    //  },          
     navigate2()
        {
        this.$router.push({name:'forgotpassword'})
        },
     logIn(payload) {
         const path = "http://localhost:3000/login";
         axios.post(path, payload)
         .then((response) => {
             console.log("in then in vue")
             console.log(response)
             console.log(response.data.message)
             console.log(response.data.access)
             if (response.data.access) {
                this.$router.push({name:'dashboard'})
                this.changeUser([response.data.detail,response.data.type])
             }
             else {
                 alert("username and password does not match")
             }

             return;
         })
         .catch((error) => {
             console.log(error)
         })
     },
     get() {
         const path = "http://localhost:3000/login";
         axios.get(path)
         .then((r) => {
             console.log("we got this", r)
             console.log(r.data.status)
             console.log(r.data.key)
             return;
         })
         .catch((error) => {
             console.log(error)
         })
     },
     checkForm() 
        {
       //   Name
            if(!this.username || this.username=="" || !this.validUsername(this.username))
            {
                this.errorU=true
                console.log('res1',this.response)
            }
            else this.errorU=false
    // password   
            if(!this.password || this.password=="" || !this.validPassword(this.password))
            {
                this.errorP=true
                console.log('res2',this.response)
                return false
            }
            else this.errorP=false
    // type
            // if(!this.type)
            // {
            //     this.errorT=true
            // }
            // else this.errorT=false
            if (this.validUsername(this.username) && this.validPassword(this.password) ) {
                const payload = {
                    username: this.username,
                    password: this.password
                }
                this.logIn(payload);
            }

    //         this.inputU = this.$storeDb.getters['entities/users/query']().where('id',1).get()
    //         // this.inputP = this.$storeDb.getters['entities/user/query']().where('user_password', this.password).get()
    //         // this.inputY = this.$storeDb.getters['entities/user/query']().where('user_type', this.type).get()
    //         console.log('state user',this.$store.state.user_name)
    //         console.log('state type', this.$store.state.user_type)
    //         console.log(this.inputU)

    // //result 
    //     if (this.validUsername(this.username) && this.validPassword(this.password) && this.type)
    //      {  
    //         this.response=true
    //         console.log('state user',this.$store.state.user_name)
    //         console.log('state type',this.$store.state.user_type)
    //         if(this.response && this.username==this.inputU && this.password==this.inputP && this.type==this.inputT)
    //         {
    //             console.log('user',this.username)
    //             console.log('type', this.type)
    //             console.log('state user',this.$store.state.user_name)
    //             console.log('state type', this.$store.state.user_type)
    //             this.$router.push({name:'dashboard'})
    //             this.changeUser([this.username,this.type])
    //         }
    //         else  alert("Something is wrong, please recheck.")
    //         console.log('resF',this.response)
    //         console.log('state user',this.$store.state.user_name)
    //         console.log('state type', this.$store.state.user_type)
    //         return true
    //      }        
       },
    validUsername(username)
      {
          var nm =/^[a-zA-Z0-9_]+$/
          return username.match(nm);
      },
    validPassword(password)
      {
          var r1 = /[a-z]+/
          var r2 = /[A-Z]+/
          var r3 = /[0-9]+/
          var r4 = /[`~!@#$%^&*()-_=+'";:/?.>,<\]\[\{\}\\\|]+/
          if (password.match(r1) && password.match(r2) && password.match(r3) && password.match(r4) && password.length>=8)
          {
              return this.password
          }
          else return false
      },
       ...mapActions([
           'increment', 
           'changeUser'
           ])
     },
    }

</script>
