<template>
    <div class="book-list">
        <div v-for="(book, i) in books" :key="i" class="book-item">
            <div class="book-img">
            <router-link to="getuserorder">
                  <img :src="book.image_url" alt="Book Image" />
            </router-link>  
             </div>

             <div class="book-details">
            <p class="name">Name: {{book.name}}</p>
            <p class="author">Author: {{book.author}}</p>
            <p class="price">Price: {{book.price}}</p>
            </div>
        </div>

    </div>
</template>

<script>
import axios from "axios";
    export default {
        name: 'get_books',
        components: {

        },

        data() {
            return {
            books: []
            }
        },

        methods: {
            users_books() {
            console.log('users_books')
            let config = {
                    method: 'get',
                    maxBodyLength: Infinity,
                    url: 'http://127.0.0.1:5000/api/books',
                    headers: { 
                        'Content-Type': 'application/json'
                    }
                    
                    };

            axios.request(config)
                    .then(this.success) 
                    .catch(this.failure)  
            },

            
        success: function(response){
            console.log('I like tea')
            console.log(response)
            if(response.status ===200){
                this.books = response.data
                console.log(this.books)
            }
        },

        failure: function(error){
            console.log(error)
            
        },

        },


        mounted () {
            this.users_books();
        },
    }
</script>

<style scoped>

.book-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
}


.book-item {
 box-sizing: border-box;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  width: 200px;
  overflow: hidden;
  text-align: center;
  justify-content: center;
  transition: transform 0.3s ease;
  margin-left: 50px;
}


img{
    width: 380px;
    height: 250px;
}

.book-img{
    box-sizing: border-box;
    padding-top: 100px;
}


</style>