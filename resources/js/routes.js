import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import NotFound from './components/NotFound';

export default {
    mode: 'history',
    linkActiveClass: 'font-semibold',
    routes: [
        {
            path: '*',
            component: NotFound
        },
        {
            path: '/',
            component: Home,
            name: "Home"
        },
        {
            path: '/register',
            component: Register
        },
        {
            path: '/login',
            component: Login,
            name: 'Login'
        },
        {
            path: '/dashboard',
            component: Dashboard,
            name: 'Dashboard',

            beforeEnter: (to, form, next) => {
                axios.get('/api/authenticated').then(() => {
                    next()
                }).catch(()=> {
                    return next({name: 'Login'})
                })
            }
        }
    ]
}