<template>
    <div>

        <h2>Get Bookshop</h2>
        <div v-for="(bookshop, i) in bookshop" :key= "i">
            <p>Name:{{bookshop.id}}</p>
            <p>Name:{{bookshop.name}}</p>
            <p>Name:{{bookshop.address}}</p>
            <p>Name:{{bookshop.phone_number}}</p>
            <p>Name:{{bookshop.email}}</p>
            <p>Name:{{bookshop.password}}</p>


        </div>

    </div>
</template>

<script>
import axios from "axios";
    export default {
        name: 'getBookshop',
        components: {   

        },

        data() {
                return {
                    bookshop: [],
                }
            },

            methods: {
                get_bookshop: function() {

                    axios.request({
                        method: "GET",
                        url: ' http://127.0.0.1:5000/api/bookshops',
                    })
                     .then(this.success)
                     .catch(this.failure)
                }
            },

            successs: function(response){
                console.log(response)
                if(response.data === 200){
                    this.bookshop= response.data
                    console.log(this.bookshop)
                }

                
            },

        failure: function(error){
            console.log(error)
            alert('Something has happened. Please try again.')
        },

     mounted () {
        this.get_bookshop();
     },
        
    }
</script>

<style scoped>

</style>