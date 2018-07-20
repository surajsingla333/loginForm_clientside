<template>
    <div>
        <div class="title is-1 is-primary ">User</div>
        <div class=" subtitle is-3 is-info " v-if="this.$store.state.user_type=='user'">You cannot check other users or admin</div>
        <div class=" subtitle is-3 is-info " v-else>User cannot check your or other users Profile</div>
        <button v-on:click="admin()" v-if="this.$store.state.user_type=='user'">Try Viewing Admin</button>
        <button v-on:click="admin()" v-else>Back to your page</button>
        <button v-on:click="dashboard()">Back to Dashboard</button>
    </div>
</template>

<script>
export default {
    name:'adminPage',
    methods:{
        admin(){
            if(this.$store.state.user_type=='user')
                alert("Permission Denied")
            else
                return this.$router.push({name:'adminPage'})    
        },
        dashboard(){
            return this.$router.push({name:'dashboard'})
        }
    }
}
</script>
