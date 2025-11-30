import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Work from '../views/Work.vue'
// import ProjectDetails from '../views/ProjectDetails.vue' 

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/work', name: 'work', component: Work },
  

//   { 
//     path: '/project/:id',
//     name: 'projectDetails',
//     component: ProjectDetails,
//     props: true
//   }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
