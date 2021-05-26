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

Vue.component('DataTable', DataTable);
Vue.component('Column', Column);
Vue.component('Button', Button);
Vue.component('Dialog', Dialog);
Vue.component('Dropdown', Dropdown);

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
