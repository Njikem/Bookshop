<template>
    <div class="user-signup">
        <h1>Create an Account</h1>
        
        <div id="signup">

        <div class="first">
            <input v-model="first_name" placeholder="First_Name"/>
          
        </div>

        <div class="last">
            <input v-model="last_name" placeholder="Last_Name"/>
          
        </div>

       <div class="address">
            <input v-model="address" placeholder="address"/>
          
        </div>

        <div  class="numb">
            <input v-model="phone_number" placeholder="phone_number"/>
          
        </div>

        <div class="email">
            <input v-model="email" placeholder="Email"/>
          
        </div>

        <div class="pass">
            <input v-model="password" placeholder="Password"/>
        </div>
        
    <div id="create">

      <div>
        <p>By creating an account, you agree to Bookshop.org <a href="or">privacy Notice</a> and <a href="or">Terms of Use</a>.</p>
      </div>

        <button @click="signup">CREATE</button>

      <div id="or">
        <router-link to="userlogin">
            <p>Login as Existing Customer</p>
            </router-link>
      </div>
    
    </div>

        </div>



    </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
    export default {
        name: 'SignUp',
        components: {

        },

        data() {
            return {  
               token: '',
               userid: '',
               first_name: '',
               last_name: '',
               address: '',
               phone_number: '',
               email: '',
               password: ''
            }
        },

        methods: {
            signup: function() {
                console.log("signup", this.first_name, this.last_name, this.address, this.phone_number, this.email, this.password)
                

               axios.request({
                method: "POST",
                url: ' http://127.0.0.1:5000/api/user',

                data: {
                    first_name: this.first_name,
                    last_name: this.last_name,
                    address: this.address,
                    phone_number: this.phone_number,
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
                    this.userid = response.data.user_id
                    alert("signUp is successful")
                    cookies.set('TOKEN', this.token)
                    cookies.set('USER_ID', this.userid)
                }
            },

            failure: function(error){
                console.log(error)
                alert('something has gone wrong please try again')
            }
        },
        
    }
</script>

<style  scoped>


#signup{
    box-sizing: border-box;
    justify-items: center;
    align-items: center;
    grid-auto-flow: row;
    margin-top: 30px;   

}


input{
    padding: 15px 50px 15px 30px;
  
}



.first{
    margin-top: 20px;
}

.last{
    margin-top: 20px;
}

.address{
    margin-top: 20px;
}

.numb{
    margin-top: 20px;
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

#or a{
  padding: 10px;
}


.user-signup{
    box-sizing: border-box;
    padding-top: 70px;
    padding-bottom: 40px;
}

@media only screen and(min-width: 768px){

   input{
    padding: 30x 50px 15px 30px;
  
}


.first{
    margin-top: 30px;
}


}


@media only screen and (min-width: 992px){


   input{
    padding: 30x 50px 15px 30px;
  
}


}



</style>