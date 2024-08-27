<template>
    <div>

        <h1>Place Your Order</h1>

        <div id="order">

            <div class="book">
                <input v-model="books" placeholder="books"/>
            </div>

            <div  class="book">
                <input v-model="books" placeholder="bookshop_id"/>
            </div>

            <button @click="userOrder">Place Order</button>

        </div>

    </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
    export default {
        name: 'user_order',
        components: {
        },

        data() {
            return {
                token: '',
                books: [],
                bookshop_id: '',
                orderid: ''
            }
        },


        methods: {
            userOrder() {

                let data = JSON.stringify({
                    books: [],
                    bookshop_id: this.bookshop_id
                });

        let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: 'http://127.0.0.1:5000/api/user_order',
                headers: { 
                    'Authorization': this.token, 
                    'Content-Type': 'application/json'
                },
                data : data
                };

        axios.request(config)
                .then(this.success) 
                .catch(this.failure) 
                
            }
        },


      success: function(response){
        console.log(response)
        if(response.status ===200){
            this.orderid = response.data.order_id
            cookies.set('ORDER_ID', this.order_id)
            alert('Your Order has been send sucessfully. Thanks!')
        }
      },

      failure: function(error){
        console.log(error)
        alert('Something has happened, please try again')
      },


     mounted () {
        const token = cookies.get('TOKEN');
        this.token = token
        console.log(this.token)
     },

    }
</script>

<style  scoped>

#order{
    box-sizing: border-box;
    justify-items: center;
    align-items: center;
    grid-auto-flow: row;
    margin-top: 30px;   

}


input{
    padding: 15px 50px 15px 30px;
  
}

.book{
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