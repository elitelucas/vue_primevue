import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import i18n from '../i18n';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
	{
		path: '/',
		component: () => import('@/components/Layout.vue'),
		children: [
			{
				path: 'users',
				component: () => import('@/views/Users.vue')
			},
			{
				path: 'test',
				component: () => import('@/views/Test.vue')
			},
			{
				path: '/',
				redirect: '/users'
			}
		]
	},
	{
		path: '/lang/:lang',
		component: () => import('../views/Main.vue'),
		beforeEnter(to, from, next) {
			const { lang } = to.params;
			const defaultLang = String(navigator.language).substr(0, 2);
			const supportedLangs = ['en', 'es', 'cat', 'pt', 'fr'];
			let selectedLang = supportedLangs.includes(lang) ? lang : undefined;
			if (!selectedLang) {
				selectedLang = supportedLangs.includes(defaultLang)
					? defaultLang
					: undefined;
			}
			if (!selectedLang) {
				return next(process.env.VUE_APP_I18N_FALLBACK_LOCALE);
			}
			i18n.locale = i18n.locale !== selectedLang ? selectedLang : i18n.locale;
			document.documentElement.setAttribute('lang', selectedLang);
			return next();
		},
		children: [
			{
				path: '',
				name: 'Home',
				component: () =>
					import(/* webpackChunkName: "main" */ '@/views/Index.vue')
			}
		]
	}
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

export default router;
