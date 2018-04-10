import TemplateHome from '../components/Templatehome.vue';

import Dashboard from '../pages/home/Dashboard.vue';


export default[
    {
        path: '/',
        name: 'Dashboard',
        redirect: '/Dashboard',
        component: TemplateHome,
        children: [
            { path: 'Dashboard', component: Dashboard }
        ]
    }
]