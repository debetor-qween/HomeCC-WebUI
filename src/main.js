import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import PrimeVue from 'primevue/config';

Vue.use(PrimeVue);

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import Dropdown from 'primevue/dropdown';
import InputText from 'primevue/inputtext';

Vue.component('DataTable', DataTable);
Vue.component('Column', Column);
Vue.component('Button', Button);
Vue.component('Dialog', Dialog);
Vue.component('Dropdown', Dropdown);
Vue.component('InputText', InputText);

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
