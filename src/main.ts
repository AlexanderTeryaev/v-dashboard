import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import store from './_store';
import './assets/main.css';

import DashboardLayout from './components/DashboardLayout.vue';
import EmptyLayout from './components/EmptyLayout.vue';

const app = createApp(App);
app.use(router);
app.use(store);

app.component('default-layout', DashboardLayout);
app.component('empty-layout', EmptyLayout);


app.mount('#app');