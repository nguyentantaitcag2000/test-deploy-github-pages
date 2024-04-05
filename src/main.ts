import { createApp } from 'vue'
import './style.css'
import { createRouter, createWebHistory } from 'vue-router';
import Routes from './routes.js';
import App from './App.vue';
import '../node_modules/bootstrap/js/index.esm.js';
const app = createApp(App);
// Define a function to extract repository name from GitHub Pages URL
function getBaseURL() {
    // Get the hostname from the window location
    const hostname = window.location.hostname;

    // Check if the hostname is github.io
    if (hostname.endsWith('.github.io')) {
        // Extract the repository name from the URL
        const parts = window.location.pathname.split('/');
        if (parts.length >= 2) {
            // Return the repository name as the base URL
            return `/${parts[1]}/`;
        }
    }

    // If the URL does not match the GitHub Pages pattern, return an empty string
    return '';
}
const router = createRouter({
    routes: Routes,
    history: createWebHistory(getBaseURL()),
});
router.afterEach((to:any) => {
    // Sử dụng tiêu đề từ meta nếu nó tồn tại, nếu không thì sử dụng một tiêu đề mặc định
    document.title = to.meta.title || 'Default Title';
});
app.use(router);
app.mount('#app');
