import { toast } from 'react-toastify';
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import numberF from '../utils/numberF';

const initialState = {
    storage: '',
    storageEncoded: '',
    playAround: 0,
    name: '',
    gameState: {
        settingName: true,
        city: false,
    },
    lastUpdateTime: Date.now(),
    rats: 0,
    buttonOneSec: 0,
    hunting: 0,
    gold: 0,
    ratsPrice: 0.10,
    ratsAmountNeeded: 100,
}

const useStore = create(
    persist(
        (set, get) => ({
            ...initialState,
            setRats: newState => set({ rats: newState }),
            upgradeHunting: () => {
                if(get().rats >= ((get().hunting + 1) ** 2.5) * 100){
                    set({hunting: get().hunting + 1, buttonOneSec: get().buttonOneSec + 1})
                    return
                }
                const num = (get().hunting + 1) ** 2.5 * 100
                throw new Error('YOU NEED ' + numberF(num) + ' RATS')
            },
            buyBusTicket: () => {
                if (get().gold <= 3.5){
                    throw new Error("YOU NEED 3.5 GOLD TO BUY A BUS TICKET")
                }
                set({gameState: {...get().gameState, city: true}})
            },
            buttonOneActive: () => set({ buttonOneSec: 1 }),
            sellRats: () => {
                get().rats >= get().ratsAmountNeeded && set({rats: get().rats - get().ratsAmountNeeded, gold: get().gold + get().ratsPrice})
            },
            setName: newState => set({ name: newState }),
            setGameState: (label, newState) => set({ gameState: { ...get().gameState, [label]: newState } }),

            toEncoded: () => {
                const json = JSON.stringify(get(), (k, v) => k == 'storage' || k == 'storageEncoded' ? undefined : v)
                set({ storageEncoded: btoa(json) })
            },
            resetGame: () => set(() => initialState),
            increasePlayAround: () => set(state => ({playAround: state.playAround + 1})),
            resetEncoded: () => set({ storageEncoded: '' }),
            toDecoded: () => {
                const newStorage = JSON.parse(atob(get().storageEncoded))
                set(() => newStorage)
            },
            importSave: save => {
                const newStorage = JSON.parse(atob(save))
                set(() => newStorage)
            },
            gameLoop: () => {
                const currentTime = Date.now();
                if (currentTime >= get().lastUpdateTime) {
                    const tick = (currentTime - get().lastUpdateTime) / 1000;
                    set(state => ({
                        rats: state.rats + ((state.buttonOneSec) * tick),
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