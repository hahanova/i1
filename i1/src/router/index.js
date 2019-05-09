import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import MainCourses from '@/pages/MainCourses'
import SecondCourses from '@/pages/SecondCourses'
import Dish from '@/pages/DishPage'

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
      path: '/:dish/:id',
      name: 'Dish',
      component: Dish,
      props: true,
    },
  ],
})
