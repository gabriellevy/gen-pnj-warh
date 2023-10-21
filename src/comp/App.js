import Profil from './Profil'
import '../styles/App.css'
import ZoneDeChoix from './ZoneDeChoix'
import { useEffect, useContext } from 'react'
import { PersoContexte } from '../utils/contexte/perso'

function App() {
  const { perso } = useContext(PersoContexte)

  useEffect(() => {
    document.title = 'Générateur de personnage warhammer'
  }, [])

  return (
    <div className="App">
      <div
        id="tout"
        className="bgImg"
        style={{
          backgroundImage: `url(${perso.fond})`,
        }}
      >
        <Profil perso={perso} />
        <ZoneDeChoix />
      </div>
    </div>
  )
}

export default App
