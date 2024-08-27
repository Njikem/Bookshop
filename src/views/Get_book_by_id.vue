<template>
    <div  class="book-list">
        <div>

             <h2>Get book by id</h2>

        </div>
       

        <div v-for="(book, i) in book" :key="i" class="book-item">
            <div>
                 <img :src="book.image_url" alt="Book Image" class="book-img"/>
            </div>

            <div class="book-details">
                <p class="name">Name: {{book.name}}</p>
            <p class="author">Author: {{book.author}}</p>
            <p class="price">Price: {{book.price}}</p>
             <p class="price">stock: {{book.stock}}</p>
            </div>

        </div>

    </div>
</template>

<script>
import axios from "axios";
    export default {
        name: 'get_book',
        components: {

        },

        data() {
            return {
                book: []
            }
        },

        methods: {
            get_book_by_id() {

              let config = {
                    method: 'get',
                    maxBodyLength: Infinity,
                    url: 'http://127.0.0.1:5000/api/books?book_id=id',
                    headers: { 
                        'Content-Type': 'application/json'
                   },
                   
                    };

                    axios.request(config)
                    .then(this.success)
                    .catch(this.failure) 

                
            },

            success: function(response){
                console.log(response)
                if(response.status ===200){
                    this.book = response.data
                    console.log(this.book)
                }
            },


            failure: function(error){
                console.log(error)
                document.body.innerHTML = <h3 style='color:red'>Something has gone wrong</h3>
            }


        },


        mounted () {
            this.get_book_by_id();
        },
    }
</script>

<style  scoped>

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