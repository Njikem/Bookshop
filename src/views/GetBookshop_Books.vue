<template>
    <div>
        <div v-for="(book, i) in books" :key="i">
            <p>{{book.image_url}}</p>
            <p>Name{{book.Name}}</p>
            <p>Author{{book.author}}</p> 
            <p>Description{{book.Description}}</p>
            <p>Price{{book.price}}</p>
        </div>

    </div>
</template>

<script>
import axios from "axios";
    export default {
        name: 'bookshop-books',
        components: {

        },

        data() {
            return {
            books: []
            }
        },

        methods: {
            bookshopBooks() {
         
               let data = '\r\n    ';

            let config = {
                    method: 'get',
                    maxBodyLength: Infinity,
                    url: 'http://127.0.0.1:5000/api/books',
                    headers: { 
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
                this.books = response.data
                console.log(this.books)
            }
        },

        failure: function(error){
            console.log(error)
            
        },


        mounted () {
            this.bookshopBooks();
        },
    }
</script>

<style lang="scss" scoped>

</style>