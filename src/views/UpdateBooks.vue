<template>
    <div>
        <h1>Update Books</h1>
        <div id="update">
            
            <div class='image'>
                <input v-model="image_url" placeholder="image_url"/>
            </div>

            <div class='name'>
                <input v-model="name" placeholder="name"/>
            </div>

            <div class='price'>
                <input v-model="price" placeholder="price"/>
            </div>

            <button @click="updateBooks">Update</button>
        </div>

    </div>
</template>

<script>

import axios from "axios";
import cookies from "vue-cookies";

    export default {
        name: 'updateBooks',
        components: {

        },
       
       data() {
        return {
            token: '',
            id: '',
            image_url: '',
            name: '',
            price: ''
        }
       },

        methods: {
            updateBooks: function() {
            let data = JSON.stringify({
                        id: this.id,
                        image_url: this.image_url,
                        name: this.name,
                        price: this.price
                        });

            let config = {
                    method: 'patch',
                    maxBodyLength: Infinity,
                    url: 'http://127.0.0.1:5000/api/books',
                    headers: { 
                        'Authorization': this.token, 
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
                console.log(this.token)
                alert('Update was successful')
              

            }

        },

        failure: function(error){
            console.log(error)
            alert('Update was not successful')
        },

        mounted () {
            const token = cookies.get('BK_TOKEN');
            this.token = token
        },
    }

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

button{
    margin: 10px;
    padding: 10px 15px 10px 15px;
    border-radius: 50px;
    border: none;
    background-color: red;
    color: white;
    font-weight: 700;
}

.image{
   
    margin-top: 20px;
}


.name{
   
    margin-top: 20px;
}

.price{
   
    margin-top: 20px;
}


</style>