import { defineStore } from 'pinia';
import novels from '../json/Novels.json';


export const useNovelsStore = defineStore('novelStore', {
    state: () => ({
        novels: [],
    }),
    actions: {
        loadNovels() {
            this.novels = novels
        },
    },
})