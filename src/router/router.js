import App from '../App';
import TemplateHome from '../components/Templatehome.vue';

import Login from '../pages/login/Login.vue';
import Lock from '../pages/login/Lock.vue';

import PatientList from "../pages/patient/PatientList.vue";

import Dashboard from '../pages/home/Dashboard.vue';
import UserManagementList from '../pages/basic/UserManagementList.vue';
import PrivilegeManagementList from '../pages/basic/PrivilegeManagementList.vue';

import PatientInformation from '../pages/pdis/basicInformation/PatientInformation'

export default[
    {
        path: '/Login',
        name: 'Login',
        component: Login
    },{
        path: '/Lock',
        name: 'Lock',
        component: Lock
    },{
        path: '/',
        name: 'Dashboard',
        redirect: '/Dashboard',
        component: TemplateHome,
        children: [
            { path: 'Dashboard', component: Dashboard }
        ]
    },{
        path: '/Patient',
        component: TemplateHome,
        redirect: '/Patient/PatientList',
        children: [
            { path: 'PatientList', component: PatientList },
        ]
    },{
        path: '/SystemManagement',
        component: TemplateHome,
        redirect: '/SystemManagement/UserManagementList',
        children: [
            { path: 'UserManagementList', component: UserManagementList },
            { path: 'PrivilegeManagementList', component: PrivilegeManagementList },
        ]
    }, {
        path: '/pdis/basicInformation',
        component: TemplateHome,
        redirect: '/pdis/basicInformation/PatientInformation',
        children: [
            { path: 'PatientInformation', component: PatientInformation },
        ]
    }
]