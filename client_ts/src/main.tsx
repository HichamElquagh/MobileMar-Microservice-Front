import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import DataProvider from './context/DataProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DataProvider>
     <App />
    </DataProvider>
  </React.StrictMode>,
)