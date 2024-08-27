<template>
    <div>
         <h1>Login Here</h1>

        <div id="login">

            <div>

            <div class="email">
            <input v-model="email" placeholder="Email"/>
          
        </div>

        <div class="pass">
            <input v-model="password" placeholder="Password"/>
        </div>

        </div>
        
    <div id="create">

        <button @click="bookshop_login">Login</button>

    
    </div>


        </div>

    </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
    export default {
        name: 'bookshop_login',
        components: {

        },

        data() {
            return {
                token: '',
                bookshopid: '',
                email: '',
                password:''

            }
        },

        methods: {

            bookshop_login: function() {
               axios.request({
                method: "POST",
                url: ' http://127.0.0.1:5000/api/bookshop_login',

                data: {
                    email: this.email,
                    password: this.password
                }
               })
                 .then(this.success)
                 .catch(this.failure)
            },

            success: function(response){
                console.log(response)
                if(response.status === 200){
                    this.token = response.data.token
                    this.bookshopid = response.data.bookshop_id
                    alert('Login is successful')
                    cookies.set('BK_TOKEN', this.token)
                    cookies.set('BOOKSHOP_ID', this.bookshopid)
                }
            },

            failure: function(error){
                console.log(error)
                 document.body.innerHTML = '<h4 style="color:red">Please Sign Up If You Have not Done So! </h4>' 
            }
           
        },
        
    }
</script>

<style  scoped>

#login{
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



#create{
    margin-top: 25px;
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

#or a{
  padding: 10px;
}

</style>