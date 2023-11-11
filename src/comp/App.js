import Profil from './Profil'
import '../styles/App.css'
import ZoneDeChoix from './ZoneDeChoix'
import { useEffect, useContext } from 'react'
import { PersoContexte } from '../utils/contexte/perso'
import { Box, ThemeProvider, createTheme } from '@mui/system';

const theme = createTheme({
  palette: {
    text: {
      primary: '#173A5E',
      secondary: '#46505A',
    },
    action: {
      active: '#001E3C',
    },
    success: {
      dark: '#009688',
    },
  },
});

const styles = {
  background: {
    transitionDuration: '5s',
    opacity: '1',
    height: '720px',
    maxWidth: '1280px',
    maxHeight: '720px',
  },
}

function App() {
  const { perso } = useContext(PersoContexte)

  useEffect(() => {
    document.title = 'Générateur de personnage warhammer'
  }, [])

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Box
          id="tout"
          sx={ styles.background }
          style={{
            backgroundImage: `url(${perso.fond})`,
          }}
        >
          <Profil perso={perso} />
          <ZoneDeChoix />
        </Box>
      </ThemeProvider>
    </div>
  )
}

export default App
