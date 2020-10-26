import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

const page = path => () => import(`~/pages/${path}`).then(m => m.default || m);

const routes = [
  { path: '/', name: 'index', component: page('index.vue') },
  { path: '/', name: 'about', component: page('about.vue') },
  { path: '/login', name: 'login', component: page('auth/login.vue') },
  { path: '/register', name: 'register', component: page('auth/register.vue') },
  { path: '/verification/verify/:id', name: 'verify', component: page('auth/verification/verify.vue') },
  { path: '/verification/resend', name: 'resend', component: page('auth/verification/resend.vue') }
];

export function createRouter() {
  return new Router({
    routes,
    mode: 'history'
  });
}
