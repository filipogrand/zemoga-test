import Home from './pages/Home.vue';
import PastTrials from './pages/PastTrials.vue';
import HowItWorks from './pages/HowItWorks.vue';
import LoginSignin from './pages/LoginSignin.vue';

export const routes = [
  { path: '', component: Home },
  { path: '/past-trials', component: PastTrials },
  { path: '/how-it-works', component: HowItWorks },
  { path: '/login-signin', component: LoginSignin },
];

export default routes;
