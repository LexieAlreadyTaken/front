import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from './components/Register.vue'
import Login from './components/Login.vue'
import Index from './components/index.vue'
import EditPage from './components/EditPage.vue'
import UploadPage from './components/UploadPage.vue'
import DialogPage from './components/DialogPage.vue'
import TestPage from './components/TestPage.vue'

Vue.use(VueRouter)

const routes = [
    {path: "/login", component: Login},
    {path: "/register", component: Register},
    {path: "/index", component: Index},
    {path: "/editinfo", component: EditPage},
    {path: "/upload", component: UploadPage},
    {path: "/dialog", component: DialogPage},
    {path: '/test', component: TestPage},
    {path: "/", redirect: '/index'}
]

const router = new VueRouter({
    routes
})
export default router