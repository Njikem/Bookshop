<template>
    <div>

        <h2>Users page</h2>
        <div v-for="(user, i) in users" :key= "i">
            <p>Address{{user.id}}</p>
            <p>Address{{user.first_name}}</p>
             <p>Address{{user.last_name}}</p>
             <p>Address{{user.address}}</p>
             <p>Address{{user.phone_number}}</p>
            <p>Address{{user.email}}</p>
            <p>Address{{user.password}}</p>
            



        </div>

    </div>
</template>

<script>
import axios from "axios";
    export default {
        name: 'GetUser',
        components: {   

        },
        

        data() {
            return {
                users: []
            }
        },

        methods: {
            getUser: function() {

                let data = '';
                console.log(data)

                let config = {
                        method: 'get',
                        maxBodyLength: Infinity,
                        url: 'http://127.0.0.1:5000/api/users',
                        headers: { },
                        data : data
                        };
                console.log(config)

                axios.request(config)
                        .then(this.success)
                        .catch(this.failure)
                        

            }
        },

        success: function(response){
            console.log(response)
            if(response.status === 200){
                this.users = response.data.data
                console.log(this.users)

            }
        },

        failure: function(error){
               console.log(error)
               alert('Sorry, something happened')
        },

        mounted () {
            this.getUser();
        },
       
        

           
    }
</script>

<style scoped>

</style>