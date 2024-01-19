import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const initialState = {
    storage: '',
    storageEncoded: '',
    playAround: 0,
    name: '',
    gameState: {
        settingName: true,
    },
    lastUpdateTime: Date.now(),
}

const useStore = create(
    persist(
        (set, get) => ({
            ...initialState,
            setName: newState => set({ name: newState }),
            setGameState: (label, newState) => set({ gameState: { ...get().gameState, [label]: newState } }),

            toEncoded: () => {
                const json = JSON.stringify(get(), (k, v) => k == 'storage' || k == 'storageEncoded' ? undefined : v)
                set({ storageEncoded: btoa(json) })
            },
            resetGame: () => set(() => initialState),
            setPlayAround: newState => set({ playAround: newState }),
            resetEncoded: () => set({ storageEncoded: '' }),
            toDecoded: () => {
                const newStorage = JSON.parse(atob(get().storageEncoded))
                set(() => newStorage)
            },

            gameLoop: () => {
                const currentTime = Date.now();
                if (currentTime >= get().lastUpdateTime) {
                    const tick = (currentTime - get().lastUpdateTime) / 1000;
                    set(state => ({
                        playAround: state.playAround + tick,
                        lastUpdateTime: currentTime
                    }));
                }
                get().toEncoded()
            },
            updateGame: () => {
                get().toDecoded()
            },
        }), {
        name: 'save',
        partialize: (state) => ({ storageEncoded: state.storageEncoded }),
    }
    )
);

export default useStore