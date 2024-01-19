import { Button, Stack, Typography, TextField} from "@mui/material";
import { toast } from "react-toastify";
import useStore from "../../Store/useStore";



export default function Settings(){
    const {storageEncoded, resetGame} = useStore()

    const exportGame = () => {
        navigator.clipboard.writeText(storageEncoded)
        toast('Saved in clipboard!')
    }


    return (
        <Stack justifyContent={'center'} spacing={5}>
            <Button variant="contained" onClick={() => {
                resetGame()
            }}>Reset game</Button>
            <Button variant="outlined" onClick={exportGame}>Export save</Button>
            <TextField
                label='Import save'
                InputProps={{endAdornment: <Button>Save</Button>}}
            />
        </Stack> 
    )
}