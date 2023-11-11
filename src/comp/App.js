import Profil from './Profil'
import ZoneDeChoix from './ZoneDeChoix'
import { useEffect, useContext } from 'react'
import { PersoContexte } from '../utils/contexte/perso'
import { Box, ThemeProvider, createTheme } from '@mui/system';
import styled from 'styled-components'

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

export const Bouton = styled.button`
  background-color: black;
  color: white;
  font-size: 15px;
  padding: 5px 14px;
  border-radius: 5px;
  cursor: pointer;
  &:disabled {
    color: grey;
    opacity: 0.7;
    cursor: default;
  }
`

export const BoutonBascule = styled(Bouton)`
  opacity: 0.6;
  ${({ active }) =>
    active &&
    `
    opacity: 1;
  `}
`

const styles = {
  background: {
    transitionDuration: '5s',
    opacity: '1',
    height: '720px',
    maxWidth: '1280px',
    maxHeight: '720px',
    display: 'flex',
    justifyContent: 'space-around',
  },

  app: {
  margin: 'auto',
  backgroundColor: '#000000',
  height: '100%',
  }
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
