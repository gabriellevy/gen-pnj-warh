import Banniere from './Banniere'
import '../styles/App.css'
import ZoneDeChoix from './ZoneDeChoix'
import { useEffect, useContext } from 'react'
import { PersoContexte } from '../utils/contexte/perso'
import { PhaseChoixContexte } from '../utils/contexte/phaseChoix'

function App() {
  const { perso } = useContext(PersoContexte)
  const { phaseChoix, majPhaseChoix } = useContext(PhaseChoixContexte)

  useEffect(() => {
    document.title = 'Créateur de personnage Extremis'
  }, [])

  return (
    <div className="App">
      <Banniere perso={perso} />
      <div
        style={{
          backgroundImage: `url(${perso.fond})`,
          backgroundColor: 'transparent',
          opacity: 0.9,
          width: 1280,
          height: 720,
        }}
      >
        <ZoneDeChoix />
      </div>
    </div>
  )
}

export default App
