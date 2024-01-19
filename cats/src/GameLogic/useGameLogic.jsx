import { useEffect, useState } from "react";
import useStore from "../Store/useStore";

export function useGameLogic() {
    const gameLoop = useStore(state => state.gameLoop);
    const updateGame = useStore(state => state.updateGame);
    const storageEncoded = useStore(state => state.storageEncoded);

    useEffect(() => {
        if (storageEncoded != '') {
            updateGame();
        }
        const timer = setInterval(() => {
            gameLoop()
        }, 200)
    
        return () => clearInterval(timer);
    }, [])
}