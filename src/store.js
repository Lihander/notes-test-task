import Vue from 'vue'
import Vuex from 'vuex'

import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        notes: []
    },
    mutations: {
        removeNote(state, id) {
            const noteIndex = state.notes.findIndex(note => note.id === id)
            if(noteIndex !== -1) {
                state.notes.splice(noteIndex, 1)
            }
        },
        saveNote(state, note) {
            const noteIndexInStore = state.notes.findIndex(savedNote => savedNote.id === note.id)
            if(noteIndexInStore === -1) {
                state.notes.push(note)
            } else {
                state.notes[noteIndexInStore] = note
            }
        }
    },
    actions: {},
    getters: {
        getNotes(state) {
            return state.notes
        },
        getNoteById: state => id => {
            return state.notes.find(note => note.id === id);
        }
    },
    plugins: [createPersistedState()]
})