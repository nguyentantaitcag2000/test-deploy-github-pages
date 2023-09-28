

export default [
    {
        path: '/',
        name: 'home',
        component: () => import('./pages/Home.vue'),
        meta: { title: 'Home' }
    },  
    {
        path: '/contact',
        name: 'contact',
        component: () => import('./pages/Contact.vue'),
        meta: { title: 'Contact' }
    },  
    // {
    //     path: '/admin/dashboard',
    //     name: 'admin.dashboard',
    //     component: ()=>import('./components/Dashboard.vue'),
    //     meta: { title: 'Daskboard' }
    // },
    // {
    //     path: '/tool/lazyeditor',
    //     name: 'tool.lazyeditor',
    //     component: ()=>import('./components/LazyEditor.vue'),
    //     meta: { title: 'LazyEditor' }
    // },
    // {
    //     path: '/personal/introduce/:username?',
    //     name: 'personal.introduce',
    //     component: ()=>import('./components/Personal.vue'),
    //     meta: { title: 'Personal Page' }
    // },
]