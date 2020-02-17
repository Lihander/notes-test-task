import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Notes from './pages/Notes.vue'
import NoteEdit from './pages/NoteEdit.vue'

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'notes',
            component: Notes
        },
        {
            path: '/note/:id',
            name: 'noteedit',
            component: NoteEdit
        }
    ]
})