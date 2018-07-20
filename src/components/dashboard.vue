<template>
    <div class="dashboard columns">
        <section class="admin column is-4 is-offset-1" v-if="this.$store.state.user_type=='admin'">
            <table class="table is-bordered is striped" >
                <thead>
                    <th>S.No.</th>
                    <th>Employee Name</th>
                    <th>Employee Id</th>
                    <th>Post</th>
                    <th>Salary</th>
                </thead>
                <tfoot>
                    <th>S.No.</th>
                    <th>Employee Name</th>
                    <th>Employee Id</th>
                    <th>Post</th>
                    <th>Salary</th>
                </tfoot>      
                <tbody>
                    <tr>
                    <th>1</th>
                    <td>{{msg.key1}}</td>
                    <td>75634</td>
                    <td>Manager</td>
                    <td>9999</td>
                    </tr>
                    <tr>
                    <th>2</th>
                    <td>Jhonny</td>
                    <td>75634</td>
                    <td>Manager</td>
                    <td>9999</td>
                    </tr>
                    <tr>
                    <th>3</th>
                    <td>Jhonny</td>
                    <td>75634</td>
                    <td>Manager</td>
                    <td>9999</td>
                    </tr>
                    <tr>
                    <th>4</th>
                    <td>Jhonny</td>
                    <td>75634</td>
                    <td>Manager</td>
                    <td>9999</td>
                    </tr>                                                            
                </tbody>    
            </table>
        </section>                      
        <section class="user column is-4 is-offset-1" v-if="this.$store.state.user_type=='admin' || this.$store.state.user_type=='user'">
            <table class="table is-bordered is-striped" >
                <thead>
                    <th>S.No.</th>
                    <th>Employee Name</th>
                    <th>Employee Id</th>
                    <th>Post</th>
                    <th>Salary</th>
                </thead>
                <tfoot>
                    <th>S.No.</th>
                    <th>Employee Name</th>
                    <th>Employee Id</th>
                    <th>Post</th>
                    <th>Salary</th>
                </tfoot>      
                <tbody>
                    <tr>
                    <th>1</th>
                    <td>Jhonny</td>
                    <td>75634</td>
                    <td>Manager</td>
                    <td>9999</td>
                    </tr>
                    <tr>
                    <th>2</th>
                    <td>Jhonny</td>
                    <td>75634</td>
                    <td>Manager</td>
                    <td>9999</td>
                    </tr>
                    <tr>
                    <th>3</th>
                    <td>Jhonny</td>
                    <td>75634</td>
                    <td>Manager</td>
                    <td>9999</td>
                    </tr>
                    <tr>
                    <th>4</th>
                    <td>Jhonny</td>
                    <td>75634</td>
                    <td>Manager</td>
                    <td>9999</td>
                    </tr>                                                            
                </tbody>    
            </table>
        </section>
        <button v-on:click="move()">To Home</button>
        <button v-on:click="logout()">Logout</button>
        <button v-on:click="type()">My Page</button>

        <!-- <div class="UsersList">
            <div class="user" :key="user.id" v-for="user in users">
                <p class="tasks">{{ user.email }}</p>
            </div>
        </div> -->
        <!-- <p>{{msg.key1}}</p> -->
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name:'dashboard',
    beforeCreate(){
        console.log('state user',this.$store.state.user_token)
        console.log('state type', this.$store.state.user_type)
        // alert(this.$storeDb.state.entities.users.id['1'].user_email)
        
    },
    created(){
        this.getM();
        alert("Welcome")
        // this.$storeDb.dispatch('entities/users/create', this.$storeDb.getters['entities/users/query']().orderBy('id', 'desc').get())
        // console.log('in dashboard', this.$storeDb.getters['entities/users/query']().orderBy('id', 'desc').get())
    },
    
data() {
    return {
        msg: "",
        user: 'admin' }
},
    // computed: {
    //     users () {
    //   console.log(this.$storeDb.getters['entities/users/query']().orderBy('id', 'desc').get())
    //   return 
    // }
    // },
    methods:{
        move(){
            return this.$router.push({name:'home'})
        },
        logout(){
            const activeUser = { usertoken: this.$store.state.user_token}
            console.log('in logout post',activeUser)
            const path = 'http://localhost:3000/logout';
            axios.post(path, activeUser)
            .then(() => {
                console.log("about to make status inactive(0,false)")
            })
            .catch((error) => {
                console.log(error)
            }),
            this.$store.state.user_token=null
            this.$store.state.user_type=null
            return this.$router.push({name:'home'})
        },
        type(){
            if(this.$store.state.user_type=='admin')
                return this.$router.push({name:'adminPage'})
            if(this.$store.state.user_type=='user')
                return this.$router.push({name:'userPage'})    
        },
        getM() {
            const path = 'http://localhost:3000/dashboard';
            axios.get(path)
                .then((res) => {
                    this.msg = res.data;
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }
}
   
   
</script>

<style lang="css" scoped>
div{background-color:#ea686c}
</style>
