import { Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import useStore from "../../Store/useStore";

export default function Home() {
    const { playAround, store } = useStore()
    const state = useStore()

    useEffect(() => {

    })

    return (
        <>
            {playAround <= 5 &&
                <Button
                    sx={{ padding: '0.7rem' }}
                    variant="contained"
                    color="secondary"
                    onClick={() => 1}
                >
                    play around
                </Button>}
        </>

    )
}