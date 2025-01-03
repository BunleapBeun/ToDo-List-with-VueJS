import { defineStore } from 'pinia'

export const useHomeStore = defineStore('views/home_store', {
    state: () => ({
        mdl_confirm: null,
        tasks: [
            { id: 1, name: "Go count down", is_completed: false },
            { id: 2, name: "Go home", is_completed: true },
            { id: 3, name: "Go to sleep", is_completed: false },
            { id: 4, name: "Go to USA", is_completed: true },
        ],
        selected_id: 0
    }),
    actions: {}
})