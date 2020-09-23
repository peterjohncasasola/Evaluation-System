import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  mode: 'history',
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/users',
      name: 'users',
      component: () => import('./views/Users.vue')
    },
    {
      path: '/subjects',
      name: 'subjects',
      component: () => import('./views/Subjects.vue')
    },

    {
      path: '/academic-years',
      name: 'acadyear.index',
      component: () => import('./views/AcademicYear.vue')
    },
    {
      path: '/students',
      name: 'students.index',
      component: () => import('./views/Students/Index.vue')
    },
    {
      path: '/instructors',
      name: 'instructors.index',
      component: () => import('./views/Instructors.vue')
    },
    {
      path: '/forms',
      name: 'forms',
      component: () => import('./views/Forms.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('./views/Profile.vue')
    },
    {
      path: '/courses',
      name: 'courses.index',
      component: () => import('./views/Courses.vue')
    },
    {
      path: '/tables',
      name: 'tables',
      component: () => import('./views/Tables.vue'),
    },
    {
      path: '/clients/index',
      name: 'clients.index',
      component: () => import('./views/Clients/ClientsIndex.vue'),
    },
    {
      path: '/clients/new',
      name: 'clients.new',
      component: () => import('./views/Clients/ClientsForm.vue'),
    },
    {
      path: '/clients/:id',
      name: 'clients.edit',
      component: () => import('./views/Clients/ClientsForm.vue'),
      props: true
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
})
