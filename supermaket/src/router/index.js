import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/Home')
const Detail = () => import('views/detail/Detail')
const Sort = () => import('views/sort/Sort')
const Shoping = () => import('views/shoping/Shoping')
const Profile = () => import('views/profile/Profile')

Vue.use(VueRouter)

const routes =[
  {
    path: '',
    redirect: '/home'
  },
  { 
    path: '/home', 
    component: Home
  },
  { 
    path: '/sort', 
    component: Sort
  },
  { 
    path: '/shoping', 
    component: Shoping
  },
  { 
    path: '/profile', 
    component: Profile
  },
  {
    path: '/detail',
    component: Detail
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router