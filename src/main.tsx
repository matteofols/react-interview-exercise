import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import { MantineProvider } from '@mantine/core';
// import { theme } from './theme';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <App />
    </MantineProvider>
  </React.StrictMode>
);