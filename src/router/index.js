import Vue from 'vue'
import Router from 'vue-router'
import WelcomeScreen from '@/components/WelcomeScreen'
import Chat from '../components/Chat.vue'

Vue.use(Router)


// export default new 
export default new Router({
    routes: [
        {
            path: '/',
            name: 'WelcomeScreen',
            component: WelcomeScreen
        },
        {
            path: '/chat',
            name: 'Chat',
            component: Chat,
            props: true,
            beforeEnter: (to, from, next) => {
                if(to.params.name) {
                    next()
                } else {
                    next({ name: 'WelcomeScreen' })
                }

            } 
        }
    ]
})
