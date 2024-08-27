<template>
    <div>
        <div>
            <h1>Post Books Here</h1>
           <div id="books">

            <div>
                <input v-model="image_url" placeholder="image_url"/>
            </div>
            <div>
                <input v-model="name" placeholder="name"/>
            </div>
            <div>
                <input v-model="title" placeholder="title"/>
            </div>
            <div>
                <input v-model="description" placeholder="description"/>
            </div>
            <div>
                <input v-model="price" placeholder="price"/>
            </div>
            <div>
                <input v-model="author" placeholder="author"/>
            </div>
            <div>
                <input v-model="category" placeholder="category"/>
            </div>
            <div>
                <input v-mode="stock" placeholder="stock"/>
            </div>
            
            <button @click="post_books">Post</button>


           </div>

        </div>

    </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
    export default {
        name: 'post-books',
        components: {

        }, 

        data() {
            return {
                token: '',
                bookshop_id: '',
                image_url:'',
                name: '',
                title: '',
                description: '',
                price: '',
                author: '',
                category: '',
                stock: '',
                
            }
        },

        methods: {
            post_books: function() {

                 let data = JSON.stringify({
                            bookshop_id: this.bookshop_id,
                            image_url: this.image_url,
                            name: this.name,
                            title: this.title,
                            description: this.description,
                            price: this.price,
                            author: this.author,
                            category: this.category,
                            stock: this.stock
                            });

                            console.log(data)


                  let config = {
                        method: 'post',
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
                  alert('You successfully create a book')
               }
           },

           failure: function(error){
            console.log(error);
            alert('something has gone wrong, Please try again')
           }



        },
        mounted () {
            const token = cookies.get('BK_TOKEN');
            console.log(token)
            this.token = token
        },
    }
</script>

<style  scoped>


#books{
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
    background-color: green;
    color: white;
    font-weight: 700;
}



</style>