import { Button, Stack, Typography, TextField} from "@mui/material";
import { toast } from "react-toastify";
import useStore from "../../Store/useStore";
import { useState } from "react";



export default function Settings(){
    const {storageEncoded, resetGame, importSave} = useStore()
    const [importText, setImportText] = useState('')

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
                value={importText}
                onChange={(e) => setImportText(e.target.value)}
                InputProps={{endAdornment: <Button onClick={() => {
                   try{
                    importSave(importText)
                    toast.success('File was succesfully imported!')
                    setImportText('') 
                }catch(e){
                    toast.error('Error when importing the file!')
                }
                }}>Save</Button>}}
            />
        </Stack> 
    )
}