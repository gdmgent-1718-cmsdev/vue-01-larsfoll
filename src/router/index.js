import Vue from 'vue'
import Router from 'vue-router'
import Create from '@/components/CreateArticle'
import Read from '@/components/ReadArticle'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/create',
      name: 'Create',
      component: Create
    },
    {
      path: '/read',
      name: 'Read',
      component: Read
    }
  ],
  mode: 'history'
})
