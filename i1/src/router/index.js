import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import MainCourses from '@/pages/dish-types/MainCourses'
import SecondCourses from '@/pages/dish-types/SecondCourses'
import Dish from '@/pages/DishPage'
import Desserts from '@/pages/dish-types/Desserts'
import Drinks from '@/pages/dish-types/Drinks'
import Sauses from '@/pages/dish-types/Sauses'
import Pies from '@/pages/dish-types/Pies'

Vue.use(Router)

export default new Router({
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
      path: '/sauses',
      name: 'Sauses',
      component: Sauses,
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
