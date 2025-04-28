import { createMemoryHistory, createRouter } from 'vue-router'
import Home from '../pages/Home.vue'
import LightNovels from '../pages/LightNovels.vue'
import Projects from '../pages/Projects.vue'
import About from '../pages/About.vue'
import NotFound from '../pages/NotFound.vue'

const router = createRouter({
    history: createMemoryHistory(),
    routes: [
        { path: '/', name: 'home', component: Home },
        { path: '/light-novels', name: 'light-novels', component: LightNovels },
        { path: '/projects', name: 'projects', component: Projects },
        { path: '/about', name: 'about', component: About },
        { path: '/NotFound', name: 'NotFound', component: NotFound },
    ],
})

export default router



