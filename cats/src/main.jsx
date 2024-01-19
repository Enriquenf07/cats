import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ToastContainer } from 'react-toastify';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },

});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <ToastContainer
        position="bottom-left"
        autoClose={10000}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="light"
        />
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
