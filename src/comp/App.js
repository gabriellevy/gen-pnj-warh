import Banniere from './Banniere'
import '../styles/App.css'
import ZoneDeChoix from './ZoneDeChoix'
import { useEffect, useContext } from 'react'
import { PersoContexte } from '../utils/contexte/perso'

function App() {
  const { perso } = useContext(PersoContexte)

  useEffect(() => {
    document.title = 'Créateur de personnage Extremis'
  }, [])

  return (
    <div className="App">
      <div
        style={{
          backgroundImage: `url(${perso.fond})`,
          backgroundColor: 'transparent',
          opacity: 0.9,
          width: 1280,
          height: 720,
        }}
      >
        <Banniere perso={perso} />
        <ZoneDeChoix />
      </div>
    </div>
  )
}

export default App
