import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './App'
import { MantineProvider } from '@mantine/core';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        fontFamily: 'Inter, sans-serif',
        primaryColor: 'teal',
        components: {
          Button: { defaultProps: { radius: 'xl' } },
          Card: { defaultProps: { radius: 'md', shadow: 'sm' } },
        },
      }}
    >
      <App />
    </MantineProvider>
  </React.StrictMode>
);