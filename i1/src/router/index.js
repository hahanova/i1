import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import MainCourses from '@/pages/MainCourses'
import SecondCourses from '@/pages/SecondCourses'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/main_courses',
      name: 'MainCourses',
      component: MainCourses,
    },
    {
      path: '/second_courses',
      name: 'SecondCourses',
      component: SecondCourses,
    },
  ],
})
