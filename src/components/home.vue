
<template>
    <div class="home">
        <div class="head">
            <p class="title is-1">Welcome</p>
            <p class="subtitle is-3">We're Glad!</p>
        </div>
        <div class="divider"></div>
        <div class="tile is-8 is-offset-2 is-parent is-horizontal is-warning">
            <div class="tile is-child is-warning">
                <h2>Already been Here? <br> Log In to continue with the session.</h2>
                <button id='login' v-on:click="checkUser()">Log In</button>
            </div>
            <div class="tile is-child is-warning is-warning">
                <h2>First time Here? <br> Then Sign Up for the best experience.</h2>
                <button id='signup' v-on:click="navigate2()">Sign Up</button>
            </div>
        </div>
    </div>
</template>
<script>

// import router  from "../router";
export default {
    name:'home',
    // props:['id'],
    beforeCreate(){
        console.log(this.$store.state.user_name,this.$store.state.user_type)
    },
    methods:{
        checkUser(){
            console.log(this.$store.state.user_name)
            if(this.$store.state.user_name!=null)
            {
                this.$router.push({name:'dashboard'})
            }
            else
            {
                this.$router.push({name:'login'})
            }
        },
        // navigate(){
        //     this.$router.push({name:'login'})
        // },
        navigate2(){
            this.$router.push({name:'signup'})
        }
    }
}
</script>
