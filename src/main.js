import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Astro from './components/Astro.vue';
import Chemistry from './components/Chemistry.vue';
import Kinetik from './components/Kinetik.vue'; 
import Mechanic from './components/Mechanic.vue';
import Trigonom from './components/Trigonom.vue';
import Preview from './components/Preview.vue';


Vue.use(VueRouter)

const router = new VueRouter({
	routes: [
	{ path: '/astro', component: Astro},
	{ path: '/chemistry', component: Chemistry},
	{ path: '/kinetik', component: Kinetik},
	{ path: '/mechanic', component: Mechanic},
	{ path: '/trigonom', component: Trigonom},
	{ path: '/', component: Preview}
],
	mode: 'history'
});


new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
