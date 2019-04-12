import Vue from 'vue'
import Router from 'vue-router'
import WorkHoursList from '@/pages/work-hours-list'
import workHoursListDetail from '@/pages/work-hours-list/workHoursListDetail'
import WorkHoursConfirm from '@/pages/work-hours-confirm'
import Login from '@/pages/login'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'work-hours-list',
      component: WorkHoursList
    },
    {
      path: '/workHoursListDetail',
      name: 'WorkHoursListDetail',
      component: workHoursListDetail
    },
    {
      path: '/work-hours-confirm',
      name: 'work-hours-confirm',
      component: WorkHoursConfirm
    }
  ]
})

router.beforeEach((to, from, next) => {
  let user = localStorage && localStorage.getItem('user')
  if (user) {
    next()
  } else {
    if (to.name === 'login') {
      next()
    } else {
      next({
        path: '/login'
      })
    }
  }
})

export default router
