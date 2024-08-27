import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import UserSignUp from '../views/UserSignUp.vue'
import UserLogin from '../views/UserLogin.vue'
import BookshopSignUp from '../views/BookshopSignUp.vue'
import GetUser from '../views/GetUser.vue'
import GetBookshop from '../views/GetBookshop.vue'
import updateUser from '../views/updateUser.vue'
import Update_bookshop from '../views/Update_bookshop.vue'
import PostBooks from '../views/PostBooks.vue'
import UserGetBooks from '../views/UserGetBooks.vue'
import GetBookshop_Books from '../views/GetBookshop_Books.vue'
import LoginBookshop from '../views/LoginBookshop.vue'
import UpdateBooks from '../views/UpdateBooks.vue'
import PostUserOrder from '../views/PostUserOrder.vue'
import DashBoard from '../views/DashBoard.vue'
import GetUserOrder from '../views/GetUserOrder.vue'
import Get_book_by_id from '../views/Get_book_by_id.vue'
import SearchBar from '../views/SearchBar.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },

  {
    path: '/signup',
    name: 'SignUp',
    component: UserSignUp
  },
  
  {
    path: '/userlogin',
    name: 'User_Login',
    component: UserLogin
  },

  {
    path: '/bksignup',
    name: 'BookshopSignUp',
    component: BookshopSignUp
  },

  {
    path: '/users',
    name: 'GetUsers',
    component: GetUser
  },


  {
    path: '/userUpdate',
    name: 'updateUser',
    component: updateUser
  },

  {
    path: '/bookshopUpdate',
    name: 'update_bookshop',
    component: Update_bookshop
  },

  {
    path: '/getBookshop',
    name: 'getBookshop',
    component: GetBookshop
  },

  {
    path: '/books',
    name: 'post-books',
    component: PostBooks
  },

  {
    path: '/userbooks',
    name: 'get_books',
    component: UserGetBooks
  },

  {
    path: '/getbookbyid',
    name: 'get_book',
    component:Get_book_by_id
  },

  {
    path: '/bkbooks',
    name: 'bookshop-books',
    component: GetBookshop_Books
  },

  {
    path: '/bklogin',
    name: 'bookshop_login',
    component: LoginBookshop
  },

  {
    path: '/updateBook',
    name: 'updateBook',
    component: UpdateBooks
  },

  {
    path: '/postuserOrder',
    name: 'user_order',
    component:PostUserOrder
  },

  {
    path: '/getuserorder',
    name: 'get-userorder',
    component:GetUserOrder
  },



  {
    path: '/dashboard',
    name: 'DashBoard',
    component:DashBoard
  },

  {
    path: '/search',
    name: 'search-bar',
    component:SearchBar
  },



  



  

  
  
]

const router = new VueRouter({
  routes
})

export default router
