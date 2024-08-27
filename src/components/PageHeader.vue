<template>
    <div id="page_header">

        <div class="header">

            <div id="image1">
                <div id="img1">
                    <img src="@/assets/hans-jurgen-weinhardt-FZ5nx86tP2U-unsplash.jpg" alt=" image">
                </div>
                <h2 id="book">Bookshop.ca</h2>
            </div>


            <div id="search">
                <input v-model="searchTerm"  @input="search_bar" placeholder="Search by authors, titles"/>

                   <ul>
                    <li v-for="(item, i) in searchResults" :key="i">
                    {{ item.title }} by {{ item.author }}
              </li>
            </ul> 
                <img src="@/assets/magnifying-glass.png" alt=" image" id="glass"/>  
            </div>

            <div id="log">
                <router-link to="/userlogin" id="login-link">
                    <h1 id="login">LogIn</h1>
            </router-link>   
                <img src="@/assets/shopping-bag.png" alt="Shopping Bag" id="cart">
            </div>

        </div>


        <div class="gift">
            <div>
                <h4>Gift Cards</h4>
            </div>

            <div>
                <h4>New Books</h4>
            </div>

            <div>
                <h4>Best Sellers</h4>
            </div>

             <div>
                <h4>Fiction</h4>
            </div>

             <div>
                <h4>Kids</h4>
            </div>
        </div>
            <SearchBar/>

    </div>
</template>

<script>
import axios from "axios";
import SearchBar from '../views/SearchBar.vue'
    export default {
        name: 'PageHeader',
        components: {
             SearchBar
        },

         data() {
        return {
            searchTerm: '',
            searchResults: []
        }
    },

    methods: {
        search_bar() {
            if (this.searchTerm === '') {
                this.searchResults = [];
                return;
            }

            let config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: `http://127.0.0.1:5000/api/search?q=${encodeURIComponent(this.searchTerm)}`,
                headers: {},
            };

            axios.request(config)
                .then(this.success)
                .catch(this.failure);
        },

        success(response) {
            console.log(response);
            if (response.status === 200) {
                this.searchResults = response.data;
            }
        },

        failure(error) {
            console.log(error);
        }
    },

    mounted () {
        this.search_bar();
    },

    }
</script>

<style  scoped>

/*#page_header{
    box-sizing: border-box;
    min-height: 10vh;
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: 1fr;
    position: fixed;

}

.header{
    box-sizing: border-box;
    display: flex;
   position: relative;

}

#book{
    font-size: 25px;
    font-weight:bolder;
    font-family: 'IBM Plex Sans, sans-serif';
}

#img1{
    
   box-sizing: border-box;
   margin-top: 20px;
   padding-right: 6px;
}

img{
    width: 35px;
    height: 35px;
}




#search{
    display: flex;
    box-sizing: border-box;
    position: absolute;
    bottom: 85px;
    padding-left: 50px;
    
}

input{
    padding: 15px 55px 15px 15px;
    border-radius: 50px;
    background-color: #e1e1e3;
    border: none;
    font-size: 15px;
    font-family: sans-serif;

}


#glass{
  
    width: 19px;
    height: 19px;
    box-sizing: border-box;
    position: absolute;
    right: 10px;
    margin-top: 13px;
    color: black;
}

#image1{
    display: flex;
    box-sizing: border-box;
    padding-bottom: 120px;
    padding-right: 40px;    
  
}

#log{
    display: flex;
    box-sizing: border-box;
   margin-bottom: 120px;
   padding-top: 15px;
   

}

#cart{
    width: 25px;
    height: 25px;
    padding-left: 6px;
}

#login{
    padding-left: 10px;
    font-size: 15px;
}



@media only screen and (min-width: 768px){


   input{
   padding: 15px 400px 15px 15px;
   font-size: 18px;
   
   
   }

   #image1{
    margin-right: 300px;
   }
  
  #book{
    font-size: 40px;
    font-weight:bolder;
    font-family: 'IBM Plex Sans, sans-serif';
}

#login{
    padding-left: 1px;
    font-size: 20px;
    font-weight: 750;
}


#img1{ 
   margin-top: 40px;
   width: 60px;
   
}


#log{
   margin-top: 30px;

}

#cart{
    width: 25px;
    height: 25px;
    padding-left: 6px;
    padding-top: 6px;
}

#glass{
    width: 21px;
    height: 21px;
}


}




@media only screen and (min-width: 968px){


#image1{
    margin-right: 550px;
   }

   input{
   padding: 15px 600px 15px 15px;
   font-size: 19px;
 
   }

   #glass{
    width: 21px;
    height: 21px;
   }

#login{
    box-sizing: border-box;
    font-size: 20px;
    font-weight: 750;
     margin: 2px;
}

   #cart{
    width: 25px;
    height: 25px;
    padding-right: 10px;
    padding-top: 1px;
}

}




@media only screen and (min-width: 1280px){


#search{
    display: flex;
    box-sizing: border-box;
    position: absolute;
    top: 20px;
    padding-left: 600px;
    
}


input{
   padding: 15px 300px 15px 15px;

 
   }


   #image1{
    margin-right: 1000px;
   }



} 
*/



/* General Styles */
#page_header {
  box-sizing: border-box;
  min-height: 10vh;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: 1fr;
  position: fixed;
  width: 100%;
  background-color: white;
}

.header {
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 20px;
}

/* Image and Branding */
#image1 {
  display: flex;
  align-items: center;
  box-sizing: border-box;
}

#img1 {
  margin-right: 10px;
}

#img1 img {
  width: 50px;
  height: 50px;
}

#book {
  font-size: 25px;
  font-weight: bolder;
  font-family: 'IBM Plex Sans', sans-serif;
}

/* Search Bar */
#search {
  display: flex;
  align-items: center;
  position: relative;
}

#search input {
  padding: 10px 15px;
  padding-right: 35px; /* Space for the search icon */
  border-radius: 50px;
  background-color: #e1e1e3;
  border: none;
  font-size: 15px;
  font-family: sans-serif;
}

#glass {
  position: absolute;
  right: 10px;
  width: 20px;
  height: 20px;
}

/* Login and Cart */
#log {
  display: flex;
  align-items: center;
}

#login {
  margin-right: 10px;
  font-size: 15px;
}

.gift{
  display: none;
}

#cart {
  width: 25px;
  height: 25px;
}

#login-link{
    text-decoration: none;
    color: black;
}

/* Responsive Design */
@media only screen and (min-width: 768px) {
  #book {
    font-size: 30px;
  }

  #search input {
    width: 400px;
    font-size: 18px;
  }

  #img1 img {
    width: 60px;
    height: 60px;
  }

  #login {
    font-size: 18px;
  }
}

@media only screen and (min-width: 968px) {
  #book {
    font-size: 35px;
  }

  #search input {
    width: 600px;
  }
}

@media only screen and (min-width: 1280px) {
  #search {
    justify-self: center;
  }

  #search input {
    width: 700px;
  }

  #book {
    font-size: 40px;
  }

 
 .gift{
  display: block;
  display: flex;
  align-content: center;
  justify-content: center;
  gap: 80px;
}


ul{
  display: grid;
  grid-auto-rows: row;
}


}




</style>