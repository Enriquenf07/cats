import { Button, Typography, Stack, Paper, Card, FormHelperText, IconButton, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import useStore from "../../Store/useStore";
import HelpIcon from '@mui/icons-material/Help';
import RatIcon from '../../assets/rat.svg'
import { toast } from "react-toastify";
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import numberF from "../../utils/numberF";

function GameButton({ initialCond, onClick, children, disabled, helper, text, text2 }) {
    return (
        <>
            {initialCond &&
                <Button onClick={onClick} disabled={disabled} >
                    <Card sx={{ padding: '2rem', maxWidth: '15rem', gap: '0.3rem', display: "flex", flexDirection: 'column' }}>
                        <Typography>{text}</Typography>
                        <Typography sx={{ textWrap: 'wrap', fontSize: '12px' }} >{helper}</Typography>
                        <Typography sx={{ textWrap: 'wrap', fontSize: '12px' }} >{text2}</Typography>
                    </Card>
                </Button>
            }
        </>
    )
}


export default function Home() {
    const { playAround, increasePlayAround } = useStore()
    const state = useStore()

    const gamebuttons = [
        {
            id: 0,
            initialCond:playAround > 5,
            onClick:state.buttonOneActive,
            disabled:state.buttonOneSec > 0,
            helper:"That's gonna be fun, try to hunt few rats",
            text:"Rats!!!",
            text2:'Rats per sec: ' + state.buttonOneSec,
        },
        {
            id: 1,
            initialCond:playAround > 5,
            onClick:state.sellRats,
            disabled:false,
            helper:"You meet a guy that buy rats",
            text:"Sell rats",
            text2:numberF(state.ratsAmountNeeded) + ' rats to 10 cents',
        },
        
    ]

    return (
        <Grid xs={11}>
            <Paper elevation={5} square={false}>
                <Stack spacing={2} direction={"row"} justifyContent={"center"} padding={'5rem'} alignItems={"center"}>
                    {playAround <= 5 &&
                        <Button
                            sx={{ padding: '0.7rem' }}
                            variant="contained"
                            color="secondary"
                            onClick={() => {
                                toast.success('FUN!!', {
                                    autoClose: 2000,
                                })
                                return increasePlayAround()
                            }}
                        >
                            play around
                        </Button>}
                    {gamebuttons.map(button => {
                        return <GameButton key={button.id} initialCond={button.initialCond} onClick={button.onClick} disabled={button.disabled} helper={button.helper} text={button.text} text2={button.text2}/>
                    })}
                    {!state.gameState.city && state.gold >= 1 && <IconButton onClick={() => {
                        try{
                            state.buyBusTicket()
                            toast.success('TRIP TO THE CITY!!!')
                        }catch(e){
                            toast.error(e.message)
                        }
                    }}>
                        <AirportShuttleIcon />
                    </IconButton>}
                </Stack>
            </Paper>
        </Grid>

    )
}