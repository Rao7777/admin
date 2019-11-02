import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/layout.vue'
import store from '@/store';


Vue.use(VueRouter)

const routes = [
	{
		path: '/login',
		name: 'login',
		component: () => import('../views/login.vue')
	}, {
		path: '/',
		redirect: '/earth',
		// redirect: '/home',
		component: Layout,
		children: [{
			path: '/home',
			name: 'home',
			component: () => import('../views/home')
		}, {
			path: '/resure',
			name: 'resure',
			component: () => import('../views/resure')
		}, {
			path: '/today',
			name: 'today',
			component: () => import('../views/today')
		}, {
			path: '/earth',
			name: 'earth',
			component: () => import('../views/earth')
		}]
	} 
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

router.beforeEach((to, from, next) => {
	// console.log(`${from.name} go to ${to.name}`)
	if(store.state.userName){
		if( to.name === 'login'){
			return next('/')
		}
		next()
	}else if(to.name === 'login'){
		next()
	}else {
		return next('/login')
	}
})

export default router
