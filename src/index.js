import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ColorModeScript, ChakraProvider, theme } from '@chakra-ui/react'
import ColorModeSwitcher from './ColorModeSwitcher';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

<ColorModeScript />

<ChakraProvider theme={theme}>
  <ColorModeSwitcher zIndex={'overlay'}/>
<App />
</ChakraProvider>
  </React.StrictMode>
);

//api url 
export const server = `https://api.coingecko.com/api/v3`

reportWebVitals();
