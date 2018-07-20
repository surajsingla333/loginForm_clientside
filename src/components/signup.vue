<template>
<div class="signup">
  <section class="column is-6 is-offset-3">
      <!-- name -->
    <div v-on:submit="checkForm" >
    <div class="is-horzontal">
    <div class="field">
        <div class="label">First Name</div>
        <div class="control">
            <input class="input" type="text" placeholder="First name" v-model="firstName">
        </div>    
        <p class="help is-danger" v-if="name1">Please enter your name.</p>
    </div>
    <div class="field">
        <div class="label">Last Name</div>
        <div class="control">
            <input class="input" type="text" placeholder="Last name" v-model="lastName">
        </div>    
        <p class="help is-danger" v-if="name2">Please enter your Sur-name.</p>
    </div>
    </div>
    <!-- email -->
    <div class="field">
        <div class="label">Email</div>
        <div class="control">
            <input class="input" type="email" placeholder="Email" v-model="email">
        </div>    
        <p class="help is-danger" v-if="eM">Please enter your Email Address.</p>
        <p class="help is-danger" v-if="eMT">Email already taken.</p>
    </div>
    <!-- username -->
    <div class="field">
        <div class="label" v-bind:title="uValidity">Username</div>
        <div class="control">
            <input class="input" type="username" placeholder="username" v-model="userName">
        </div>
        <p class="help is-danger" v-if="uName">Please enter a valid username.</p>
        <p class="help is-danger" v-if="uNameT">Username already taken.</p>    
    </div>
    <!-- password -->
    <div class="field">
        <div class="label" v-bind:title="pValidity">Password</div>
        <div class="control">
            <input class="input" type="password" placeholder="password" v-model="password">
        </div>   
        <p class="help is-danger" v-if="userPassword">{{errorDiscp}}</p>
    </div>
    <div class="field">
        <div class="label" v-bind:title="cpValidity">Confirm Password</div>
        <div class="control">
            <input class="input" type="password" placeholder="confirm password" v-model="cPassword">
        </div>    
        <p class="help is-danger" v-if="userCpassword">Confirm with same Password</p>
    </div>
    <!-- type -->
    <div class="control">
        <label class="radio">
            <input type="radio" v-model="type" value="admin">Admin
        </label>
        <label class="radio">
            <input type="radio" v-model="type" value="user">User
        </label>
        <div class="help is-danger" v-if="errorT"><p>Choose Permission Type</p></div>
    </div>    
    <!-- submit -->
    <div class="field">
        <button type="submit is-medium" v-on:click="checkForm()">Sign Up</button>
    </div>
    </div>
  </section>  
</div>
</template>

<script>
// import store from '../store'
// import User from '../store/models/User'
// import users from '../store/modules/users'
// import this.$data2 from '../data'
import { mapActions} from 'vuex'
import axios from 'axios'
export default {
    name:'signup',
    data(){
        return{
            errorDiscp:"Please enter a valid password",
            uValidity:"Must be Alpha-numeric",
            pValidity:"Must contain atleast one special character and number",
            cpValidity:"Must be same as your password",
            firstName:null,
            lastName:null,
            email:null,
            userName:null,
            password:null,
            cPassword:null,
            name1:false,
            name2:false,
            eM:false,
            uName:false,
            userPassword:false,
            userCpassword:false,
            type:null,
            errorT:false,            
            UN: null,
            EM: null,
            uNameT: false,
            eMT: false
        }
    },
    beforeCreate(){
        // console.log(this.$DB)
        // console.log('databaseData', this.$data2)
        // this.$storeDb.dispatch('entities/users/create', this.$storeDb.getters['entities/users/query']().orderBy('id', 'desc').get())
        // console.log('mysql.js', this.$con.query("SELECT * FROM users"))
    },
    created(){
        
        // console.log('storeDb getter', this.$storeDb.getters['entities/users/query']().orderBy('id', 'desc').get())
        // console.log('particular data',this.$storeDb.getters['entities/users/query']().where('id',1).get())         
    },
    methods:
    {
        signUp(payload) {
            const path = "http://localhost:3000/signup"
            axios.post(path, payload)
            .then((res) => {
                console.log(res)
                if(res.data.access) {
                    this.$router.push({name:'dashboard'})
                    this.changeUser([res.data.detail,res.data.type])
                }
                else {
                    alert(res.data.message)
                }
            })
            .catch((error) => {
                console.log(error)
            })
        },
        checkForm()
        { 
            // this.uNameT= false
            // this.eMT= false
            // this.UN = this.$storeDb.getters['entities/users/query']().where('user_username', this.userName).get()
            // this.EM = this.$storeDb.getters['entities/users/query']().where('user_email', this.email).get()
            //first name    
            if(!this.firstName || this.firstName=='' || !this.validFirstName(this.firstName))
                this.name1=true
            else
                this.name1=false

            //last name    
            if(!this.lastName || this.lastName=='' || !this.validLastName(this.lastName))
                this.name2=true
            else
                this.name2=false
                
            //Email   
            if(!this.email || this.email=='' || !this.validEmail(this.email))
                this.eM=true
            else
                this.eM=false   
                
            //username   
            if(!this.userName || this.userName=='' || !this.validUserName(this.userName))
                this.uName=true
            else
                this.uName=false
                
            //password   
            if(!this.password || this.password=='' || !this.validPassword(this.password))
                this.userPassword=true
            else
                this.userPassword=false
                
            //confirm password   
            if(!this.cPassword || this.cPassword=='' || !this.validCpassword(this.cPassword))
            {    this.userCpassword=true
                 return false       
            }
            else
                this.userCpassword=false  
            // type
                if(!this.type)
                {
                    this.errorT=true
                }
                else this.errorT=false    
            //result
            if(this.validFirstName(this.firstName) && this.validLastName(this.lastName) && this.validEmail(this.email) && this.validUserName(this.userName) && this.validPassword(this.password) && this.validCpassword(this.cPassword) && this.type)  
            {
                const payload = {
                    firstName: this.firstName,
                    lastName: this.lastName,
                    email: this.email,
                    userName: this.userName,
                    password: this.password,
                    usertype: this.type
                }
                this.signUp(payload);

            //     // for(i=0; i<= this.$storeDb.length; i++)
            //     // {
            //     if(this.UN.length != 0 && this.EM.length == 0)
            //     {
            //         this.uNameT=true
            //         // alert('username is already taken.')
            //         return false
            //     }
            //     else if(this.EM.length != 0 && this.UN.length == 0)
            //     {
            //         this.eMT=true
            //         // alert('username is already taken.')
            //         return false
            //     }
            //     else if (this.UN.length != 0 && this.EM.length != 0)
            //     {
            //         this.uNameT=true
            //         this.eMT=true
            //         return false
            //     }
            //     else {
            //    this.$storeDb.dispatch('entities/users/insert', { data: 
            //         {   user_firstname: this.firstName,
            //             user_lastname: this.lastName,
            //             user_username: this.userName,
            //             user_email: this.email,
            //             user_password: this.password 
            //             }})
            //     this.$router.push({name:'dashboard'})
            //     this.changeUser([this.username,this.type])    
            //     return true
            //      }
            //     // }
            }                    
        },
        validFirstName(firstName)
        {
            var fName = /[A-Za-z]+/
            return firstName.match(fName)
        },
        validLastName(lastName)
        {
            var lName = /[A-Za-z]+/
            return lastName.match(lName)
        },
        validEmail(email)
        {
            var eAdd = /^([a-zA-Z0-9\.\_])+@([a-zA-Z0-9])+.([a-zA-Z]{1,3})$/
            return email.match(eAdd)
        },
        validUserName(userName)
        {
            var un = /^[a-zA-Z0-9_]+$/
            return userName.match(un)
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
            else 
                false
        },
        validCpassword(cPassword)
        {
            if(this.cPassword==this.validPassword(this.password))
                return this.cPassword
            else 
                false
        },
        ...mapActions([
           'increment', 
           'changeUser'
           ])
    }
}    
</script>







