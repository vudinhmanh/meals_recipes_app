import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AllIngredient from '@/views/AllIngredient.vue'
import MealsByName from '../views/MealsByName.vue'
import MealsByLetter from '../views/MealsByLetter.vue'
import DefaultLayout from '@/components/DefaultLayout.vue'
import GuestLayout from '@/components/GuestLayout.vue'
import MealDetails from '@/views/MealDetails.vue'
import MealsByCategory from '@/views/MealsByCategory.vue'
import AllCategories from '@/views/AllCategories.vue'
import MealsByIngredient from '@/views/MealsByIngredient.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      component: DefaultLayout,
      name:"DefaultLayout",
      children:[
        {
          path:"/",
          name:"home",
          component: Home,
        },
        {
           path:"/all-ingredient",
           name:"AllIngredient",
           component: AllIngredient,
        },
        {
          path:"/by-ingredient/:ingredient?",
          name:"byIngredient",
          component: MealsByIngredient
        },
        {
          path:"/by-name/:name?",
          name:"byName",
          component: MealsByName,
        },
        {
          path:"/by-letter/:letter?",
          name:"byLetter",
          component: MealsByLetter,
        },
        {
          path:"/meal/:id?",
          name:"mealDetails",
          component: MealDetails,
        },
        {
          path:"/categories",
          name: "allCategories",
          component: AllCategories
        },
        {
          path:"/by-category/:category?",
          name:"byCategory",
          component:MealsByCategory
        }
      ]
    },
    {
      path:'/guest',
      component: GuestLayout
    }
  ]
})

export default router
