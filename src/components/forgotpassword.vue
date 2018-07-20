<template>
<div class="forgotpassword">
  <section class="column is-6 is-offset-3">
      <form v-on:submit=navigate()>
    <!-- username -->
    <div class="field">
        <div class="label">Username</div>
        <div class="control">
            <input class="input" type="text" placeholder="username" required>
        </div>    
        <p class="help is-danger">
            Must be alphanumeric.
        </p>
    </div>
    <!-- email -->
    <div class="field">
        <div class="label">Email</div>
        <div class="control">
            <input class="input" type="email" placeholder="Email" required>
        </div>    
    </div>
    <!-- password -->
    <div class="field">
        <div class="label">Last Password you Remember.</div>
        <div class="control">
            <input class="input" type="password" placeholder="Last password" required>
        </div>   
    </div>
    <!-- submit -->
    <div class="field">
        <button type="submit is-medium" v-on:submit="navigate()">Send Request</button>
    </div>
      </form>
  </section>  
</div>
</template>

<script>
import router from '../router'
export default {
    name:'forgotpassword',
    methods:{
        navigate(){
        router.push({name:'home'})
    }}}
</script>
