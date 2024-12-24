import { create } from 'zustand';

// use zustand state management
// create function creates a store for us

const wordStore = create((set) => ({
    wordList: [],
    word: '',
    setWordList: (list) => {
        set((state) => {
            // Whatever you return from here will be the new state
            return {
                ...state,
                wordList: list
            }
        });
    },
}));