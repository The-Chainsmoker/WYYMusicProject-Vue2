import Vue from 'vue'
import VueRouter from 'vue-router'

//可以使用路由懒加载减少用户在首页的时候等待的事件 优化使用体验
//使用VueRouter
Vue.use(VueRouter)
const routes = [
    {
        path: '',
        redirect: '/mv'
    },
    {
        path: '/mvdetail/:id',
        component: () => import('../views/mv-detail/mv-detail.vue')
    },
    {
        path: '/mv',
        component: () => import('../views/mv/mv.vue'),
    },
    {
        path: '/findmusic',
        component: () => import('../views/find-music/find-music.vue'),
        redirect: '/newmv',
        children: [
            {
                path: '/newmv',
                component: () => import('../views/find-music/new-mv/new-mv.vue')
            },
            {
                path: '/rankmv',
                component: () => import('../views/find-music/rank-mv/rank-mv.vue')
            },
            {
                path: '/recommendmv',
                component: () => import('../views/find-music/recommend-mv/recommend-mv.vue')
            },
            {
                path: '/similarmv',
                component: () => import('../views/find-music/similar-mv/similar-mv.vue')
            },
        ]
    },
    {
        path: '/my',
        component: () => import('../views/my/my.vue')
    },
]

//注册router
const router = new VueRouter({
    routes,
    mode: "history"
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

//导出router
export default router