<template>
    <div class="user-login">
         <h1>Login as Existing Customer</h1>

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

      <div>
        <p>By creating an account, you agree to Bookshop.org <a href="or">privacy Notice</a> and <a href="or">Terms of Use</a>.</p>
      </div>

        <button @click="user_login">Login</button>

        <div id="or">

         <div> 
        <router-link to="signup">
            <p>Create a new account</p>
            </router-link>
        </div>
         
         <div><p>|</p></div>
          
          <div>
         <router-link to="signup">
            <p> Forgot Password?</p>
            </router-link>
        </div>

      </div>
    
    </div>


        </div>

    </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
    export default {
        name: 'User_Login',
        components: {

        },

        data() {
            return {
                token: '',
                userid: '',
                email: '',
                password:''

            }
        },

        methods: {

            user_login: function() {
               axios.request({
                method: "POST",
                url: ' http://127.0.0.1:5000/api/user_login',

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
                    this.userid = response.data.user_id
                    alert('Login is successful')
                    cookies.set('TOKEN', this.token)
                    cookies.set('USER_ID', this.userid)
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

p{
    text-align: center;

}

a{
    text-decoration: none;
    color: red;

}

button{
    margin: 10px;
    padding: 10px 15px 10px 15px;
    border-radius: 50px;
    border: none;
    background-color: green;
    color: white;
    font-weight: 700;
}

#or {
 gap: 20px;
  display: flex;
  justify-content: center;
  align-content: center;
}

.user-login{
    box-sizing: border-box;
    padding-top: 70px;
    padding-bottom: 40px;
}

</style>