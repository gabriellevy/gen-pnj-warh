import Profil from './Profil'
import ZoneDeChoix from './ZoneDeChoix'
import { useEffect, useContext } from 'react'
import { PersoContexte } from '../utils/contexte/perso'
import { createTheme } from '@mui/material/styles';
import { Box, ThemeProvider,  } from '@mui/system';
import styled from 'styled-components'

export const shades = {
  primary: {
    100: "#cccccc",
    200: "#999999",
    300: "#666666",
    400: "#333333",
    500: "#000000",
    600: "#000000",
  },

  secondary: {
    100: "#f7ccd2",
    200: "#ef99a4",
    300: "#e66677",
    400: "#de3349",
    500: "#d6001c",
    600: "#ab0016",
    700: "#800011",
    800: "#56000b",
    900: "#2b0006",
  },
  neutral: {
    100: "#f5f5f5",
    200: "#ecebeb",
    300: "#e2e1e1",
    400: "#d9d7d7",
    500: "#cfcdcd",
    600: "#a6a4a4",
  },
};

export const theme = createTheme({
  palette: {
    primary: {
      main:shades.primary[500],
    },
    secondary: {
      main: shades.secondary[500],
    },
    neutral: {
      dark: shades.neutral[700],
      main: shades.neutral[500],
      light: shades.neutral[100],
    },
  },
  typography: {
    fontFamily: ["Fauna One", "sans-serif"].join(","),
    fontSize: 11,
    h1: {
      fontFamily: ["Cinzel", "sans-serif"].join(","),
      fontSize: 48,
    }
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
  },

  profil: {
    padding: '10px',
    borderRadius: "10px",
  }
}

function App() {
  const { perso } = useContext(PersoContexte)

  useEffect(() => {
    document.title = 'Générateur de personnage warhammer'
  }, [])

  return (
    <div sx={styles.app}>
      <ThemeProvider theme={theme}>
        <Box
          id="tout"
          sx={ styles.background }
          style={{
            backgroundImage: `url(${perso.fond})`,
          }}
        >
          <Box sx={ styles.profil }>
            <Profil perso={perso}/>
          </Box>
          <ZoneDeChoix />
        </Box>
      </ThemeProvider>
    </div>
  )
}

export default App
