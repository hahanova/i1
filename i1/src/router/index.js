import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import MainCourses from '@/pages/dish-types/MainCourses'
import SecondCourses from '@/pages/dish-types/SecondCourses'
import Salads from '@/pages/dish-types/Salads'
import Dish from '@/pages/DishPage'
import Desserts from '@/pages/dish-types/Desserts'
import Drinks from '@/pages/dish-types/Drinks'
import Sauces from '@/pages/dish-types/Sauces'
import Pies from '@/pages/dish-types/Pies'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/maincourses',
      name: 'MainCourses',
      component: MainCourses,
    },
    {
      path: '/secondcourses',
      name: 'SecondCourses',
      component: SecondCourses,
    },
    {
      path: '/salads',
      name: 'Salads',
      component: Salads,
    },
    {
      path: '/desserts',
      name: 'Desserts',
      component: Desserts,
    },
    {
      path: '/drinks',
      name: 'Drinks',
      component: Drinks,
    },
    {
      path: '/sauces',
      name: 'sauces',
      component: Sauces,
    },
    {
      path: '/pies',
      name: 'Pies',
      component: Pies,
    },
    {
      path: '/:dish/:id',
      name: 'Dish',
      component: Dish,
      props: true,
    },
  ],
})
