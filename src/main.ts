/* eslint-disable */
import 'primevue/resources/primevue.min.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';

import Button from 'primevue/button';
import Toast from 'primevue/toast';
import InputText from 'primevue/inputtext';
import ToastService from 'primevue/toastservice';
import Checkbox from 'primevue/checkbox';
import Textarea from 'primevue/textarea';
import Dropdown from 'primevue/dropdown';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ContextMenu from 'primevue/contextmenu';
import Dialog from 'primevue/dialog';
import Toolbar from 'primevue/toolbar';
import SplitButton from 'primevue/splitbutton';
import Menubar from 'primevue/menubar';
import Breadcrumb from 'primevue/breadcrumb';
import OverlayPanel from 'primevue/overlaypanel';
// @ts-ignore
import createServer from '@/../mirage/server';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from './i18n';

Vue.config.devtools = true;

if (
	process.env.NODE_ENV !== 'production' &&
	process.env.VUE_APP_MIRAGE === 'true'
) {
	createServer();
}

// ----PrimeVue----
Vue.use(ToastService);
Vue.component('Button', Button);
Vue.component('Toast', Toast);
Vue.component('InputText', InputText);
Vue.component('Checkbox', Checkbox);
Vue.component('Textarea', Textarea);
Vue.component('Dropdown', Dropdown);
Vue.component('DataTable', DataTable);
Vue.component('Column', Column);
Vue.component('ContextMenu', ContextMenu);
Vue.component('Dialog', Dialog);
Vue.component('Toolbar', Toolbar);
Vue.component('SplitButton', SplitButton);
Vue.component('Menubar', Menubar);
Vue.component('Breadcrumb', Breadcrumb);
Vue.component('OverlayPanel', OverlayPanel);
// ----------------

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	i18n,
	render: h => h(App)
}).$mount('#app');
