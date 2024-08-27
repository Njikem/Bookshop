<template>
    <div>
        <h1>Update Here</h1>
        <div id="update">
         
         <div class="email">
            <input v-model="email" placeholder="Email"/>
          
        </div>

        <div class="pass">
            <input v-model="password" placeholder="Password"/>
        </div>  

        <button @click="update_bookshop">Update</button> 
        </div>

    </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
    export default {
        name: 'update_bookshop',
        components: {

        },

        data() {
            return {
                token: '',
                email: '',
                password: ''
            }
        },

        methods: {
            update_bookshop: function() {
                axios.request({
                    method: "PATCH",
                   url: 'http://127.0.0.1:5000/api/bookshop',
                  
                  headers: {
                    'token': this.token
                  },
                  
                  data: {
                    email: this.email,
                    password: this.password

                  },

                })
                 .then(this.success)
                 .catch(this.failure)
                
            },

            success: function(response){
                console.log(response)
                if(response.status === 200){
                    this.token = response.data.token
                    console.log(this.token)
                    alert('Your Info has been updated successfully')
                    cookies.set('TOKEN', this.token)
                    this.$router.push('/bk_login')

                }
            },

            failure: function(error){
                console.log(error)
                alert('Update not successful, please try again.')
            }
        },

        mounted () {
            const token = cookies.get('TOKEN');
            this.token = token
        },
    }
</script>

<style  scoped>

#update{
    box-sizing: border-box;
    justify-items: center;
    align-items: center;
    grid-auto-flow: row;
    margin-top: 30px; 
}

input{
    padding: 15px 50px 15px 30px;
  
}

.email{
    margin-top: 20px;
}

.pass{
    margin-top: 20px;
}


button{
    margin: 10px;
    padding: 10px 15px 10px 15px;
    border-radius: 50px;
    border: none;
    background-color: red;
    color: white;
    font-weight: 700;
}


</style>