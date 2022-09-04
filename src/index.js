import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import App from './comp/App'
import { PersoProvider } from './utils/contexte/perso'

ReactDOM.render(
  <React.StrictMode>
    <PersoProvider>
      <App />
    </PersoProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
