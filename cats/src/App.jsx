import { useEffect, useState } from 'react'
import Router from './Router'
import Menu from './Menu'
import { Grid, Stack } from '@mui/material'
import InitialConfig from './pages/InitialConfig'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useGameLogic } from './GameLogic/useGameLogic'
import useStore from './Store/useStore'



function Application() {
  const [index, setIndex] = useState(0)
  return (
    <>
      <Grid item container justifyContent={'center'} xs={12}>
        <Menu setIndex={setIndex} index={index} width={'100%'} />
      </Grid>
      <Grid item container justifyContent={'center'} xs={10} md={6} paddingTop={'8rem'}>
        <Router index={index} />
      </Grid>
    </>
  )
}

function App() {
  const { gameState } = useStore()
  useGameLogic()
  return (
    <Grid container justifyContent={'center'} sx={{ padding: '0.8rem' }}>
      {gameState.settingName ? <InitialConfig /> : <Application />}
    </Grid>
  )
}

export default App
