import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import App from './comp/App'
import { PersoProvider } from './utils/contexte/perso'
import { PhaseChoixProvider } from './utils/contexte/phaseChoix'

ReactDOM.render(
  <React.StrictMode>
    <PersoProvider>
      <PhaseChoixProvider>
        <App />
      </PhaseChoixProvider>
    </PersoProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
