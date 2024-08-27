<template>
    <div>
        <h1>Update User Information</h1>
        <div id="update">
         
         <div class="email">
            <input v-model="email" placeholder="Email"/>
          
        </div>

        <div class="pass">
            <input v-model="password" placeholder="Password"/>
        </div>  

        <button @click="updateUser">Update</button> 
        </div>

    </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
    export default {
        name: 'updateUser',
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
            updateUser: function() {
                let data = JSON.stringify({
                    email: this.email,
                    password: this.password
                    });

                    console.log(data)

                    let config = {
                            method: 'patch',
                            maxBodyLength: Infinity,
                            url: 'http://127.0.0.1:5000/api/users',
                            headers: { 
                                'Authorization': this.token, 
                                'Content-Type': 'application/json'
                            },
                            data : data
                    };

                    console.log(config)

                    axios.request(config)
                            .then(this.success) 
                            .catch(this.failure)
                    },
     
                
            },

            success: function(response){
                console.log(response)
                if(response.status === 200){
                    this.token = response.data.token
                    console.log(this.token)
                    alert('Your Info has been updated successfully')
                    cookies.set('TOKEN', this.token)
                    this.$router.push('/userlogin')

                }
            },

            failure: function(error){
                console.log(error)
                alert('Update not successful, please try again.')
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
    background-color: green;
    color: white;
    font-weight: 700;
}


</style>