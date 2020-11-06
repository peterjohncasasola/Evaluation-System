import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

Router.prototype.open = function (routeObject) {
  const {
    href
  } = this.resolve(routeObject)
  window.open(href, '_blank')
}

export default new Router({
  base: process.env.BASE_URL,
  mode: 'history',
  routes: [{
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/users',
      name: 'users-list',
      component: () => import('./views/Users.vue')
    },
    {
      path: '/students/new',
      name: 'students-new',
      component: () => import('./views/Students/Form.vue')
    },

    {
      path: '/students/:id/edit',
      name: 'students-edit',
      component: () => import('./views/Students/Form.vue')
    },
    {
      path: '/subjects',
      name: 'subjects-list',
      component: () => import('./views/Subjects.vue'),
      children: [{
          path: '/subjects/new',
          name: 'subjects-new'
        },
        {
          path: '/subjects/edit',
          name: 'subjects.edit'
        }
      ]
    },

    {
      path: '/academic-years',
      name: 'academic-years-list',
      component: () => import('./views/AcademicYear.vue')
    },
    {
      path: '/semesters',
      name: 'semesters',
      component: () => import('./views/Semester.vue')
    },
    {
      path: '/students',
      name: 'students-list',
      component: () => import('./views/Students/Index.vue')
    },
    {
      path: '/instructors',
      name: 'instructors-list',
      component: () => import('./views/Instructors.vue')
    },
    {
      path: '/curriculums',
      name: 'curriculums-list',
      component: () => import('./views/CoursesSubjects/Index.vue')
    },
     {
      path: '/courses/:id/subjects',
      name: 'course-subjects',
      component: () => import('./views/CoursesSubjects/Index.vue')
    },
    {
      path: '/transactions/student/subjects/evaluation',
      name: 'subject.evaluation',
      component: () => import('./views/SubjectEvaluation.vue')
    },
    {
      path: '/forms',
      name: 'forms',
      component: () => import('./views/Forms.vue')
    },

     {
      path: '/transactions/grade/entry',
      name: 'grade.entry',
      component: () => import('./views/GradeEntry.vue')
    },

    {
      path: '/courses',
      name: 'courses-list',
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
    },
    {
      path: '*',
      component: () => import('./views/PageNotFound.vue'),
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
