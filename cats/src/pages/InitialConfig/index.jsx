import { Paper, TextField, Grid, IconButton, Typography, Stack, Button } from "@mui/material"
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import useStore from "../../Store/useStore";

export default function InitialConfig() {
    const {name, setName, setGameState, gameState} = useStore()

    const handleNameInput = (e) => {
        const value = e.target.value
        setName(value.toUpperCase())
    }

    const handleSubmit = () => {
        setGameState('settingName', false)
        toast.info('YOU ARE A CAT NOW! HAVE FUN!! 😸')
    }

    return (
        <>
            <Stack direction={{ xs: 'column' }} alignItems={'center'}
                 minHeight={'96vh'}>
                <Stack direction={{ xs: 'column' }} alignItems={'center'}
                    spacing={{ xs: 12 }} width={'30%'}>
                    <Typography variant={'h2'} componenent={'h1'}>CAT</Typography>
                    <Button>oi</Button>
                    <Grid minWidth={'15rem'}>
                        <TextField
                        fullWidth={true}
                        value={name}
                        onChange={handleNameInput}
                        InputProps={{ endAdornment: <IconButton onClick={handleSubmit}><NavigateNextIcon /></IconButton> }} label={'Name'}
                    />
                    </Grid>
                </Stack>
            </Stack>
        </>
    )
}