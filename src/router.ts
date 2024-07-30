import { createWebHistory, createRouter } from 'vue-router'

import HomeView from './pages/HomeView.vue'
import AboutView from './pages/AboutView.vue'
import NotFoundView from './pages/NotFoundView.vue'
import SettingsView from './pages/SettingsView.vue'
import WebDevelopmentView from './pages/WebDevelopmentView.vue'
import PomodoroView from './pages/PomodoroView.vue'
import SoonView from './pages/SoonView.vue'

const routes = [
	{
		path: '/',
		component: HomeView
	},
	{
		path: '/web-development/',
		component: WebDevelopmentView
	},
	{
		path: '/converters/',
		component: SoonView
	},
	{
		path: '/math/',
		component: SoonView
	},
	{
		path: '/pomodoro/',
		component: PomodoroView
	},
	{
		path: '/about/',
		component: AboutView
	},
	{
		path: '/settings/',
		component: SettingsView
	},
	{
		path: '/:pathMatch(.*)*',
		component: NotFoundView
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
