<template>
    <div>
        <div class="title is-1 is-primary ">Admin</div>
        <div class=" subtitle is-3 is-info ">You can check users</div>
        <button v-on:click="user()">View user</button>
        <button v-on:click="dashboard()">Back to Dashboard</button>
    </div>
</template>

<script>
export default {
    name:'adminPage',
    methods:{
        user(){
            return this.$router.push({name:'userPage'})
        },
        dashboard(){
            return this.$router.push({name:'dashboard'})
        }
    }
}
</script>
