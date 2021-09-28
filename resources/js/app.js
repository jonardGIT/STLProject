require('./bootstrap');
// Require Vue
window.Vue = require('vue').default;

// Register Vue Components
Vue.component('main-nav', require('./components/MainNav.vue').default);
Vue.component('play-section', require('./components/PlaySection.vue').default);
Vue.component('result-today', require('./components/ResultToday.vue').default);
Vue.component('number-generator', require('./components/NumberGenerator.vue').default);
Vue.component('game-rules', require('./components/GameRules.vue').default);

// Initialize Vue
const app = new Vue({
    el: '#app',
});
