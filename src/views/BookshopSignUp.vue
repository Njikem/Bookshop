<template>
    <div>
        <h1>Create an Account</h1>
        
        <div id="signup">

        <div class="first">
            <input v-model="name" placeholder="Name"/>
          
        </div>

        <div class="email">
            <input v-model="email" placeholder="Email"/>
          
        </div>

        <div class="pass">
            <input v-model="password" placeholder="Password"/>
        </div>

       <div class="address">
            <input v-model="address" placeholder="address"/>
          
        </div>

        <div  class="numb">
            <input v-model="phone_number" placeholder="phone_number"/>
          
        </div>
    
    <div id="create">

        <button @click="signup">CREATE</button>

      
    </div>

        </div>



    </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
    export default {
        name: 'BookshopSignUp',
        components: {

        },

        data() {
            return {  
               token: '',
               bookshopid: '',
               name: '',
               email: '',
               password: '',
               address: '',
               phone_number: '',
              
            }
        },

        methods: {
            signup: function() {
                let data = JSON.stringify({
                name: this.name,
                email: this.email,
                password: this.password,
                address: this.address,
                phone_number: this.phone_number
                });
                   console.log(data)

                   let config = {
                        method: 'post',
                        maxBodyLength: Infinity,
                        url: 'http://127.0.0.1:5000/api/bookshop',
                        headers: { 
                            'Content-Type': 'application/json'
                        },
                        data : data
                        };

                        axios.request(config)
                            .then(this.success)
                            .catch(this.failure)

                        },

            success: function(response){
                console.log(response)
                if(response.status === 200){
                    this.token = response.data.token
                    this.bookshopid = response.data.bookshop_id
                    alert("signUp is successful")
                    cookies.set('BK_TOKEN', this.token)
                    cookies.set('BOOKSHOP_ID', this.bookshopid)
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