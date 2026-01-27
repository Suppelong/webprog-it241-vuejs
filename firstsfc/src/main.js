import { createApp } from 'vue'
import App from './App.vue'
import Profile from './components/Profile.vue' 
import FoodItem from './components/FoodItem.vue'
import FoodItem2 from './components/FoodItem2.vue'
import CommentForm from './components/CommentForm.vue'
import Comment from './components/Comment.vue'

const app = createApp(App)

// Register the new component
app.component('profile', Profile)
app.component('food-item', FoodItem)
app.component('food-item2', FoodItem2)
app.component('comment-form', CommentForm)
app.component('comment', Comment)
app.mount('#app')