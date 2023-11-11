import { getRandomInt } from '../../../utils/rand'
import { useContext } from 'react'
import { PersoContexte } from '../../../utils/contexte/perso'
import { Box } from '@mui/material';

const styles = {
  lstCoteries_li: {
    padding: '0px 0px 0px 0px',
    margin: '0px',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'column',
    textTransform: 'capitalize',
    transitionDuration: '0.4s',
    opacity: '0.6',
    fontSize: '8px',
  },
  lstCoteries_li_selection: {
    padding:' 0px 0px 0px 0px',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'column',
    textTransform: 'capitalize',
    transitionDuration: '0.4s',
    opacity: '1',
    fontSize: '8px',
  },
  boutonCoterie: {
    color: '#011FB0',
    backgroundColor: '#EFEFEF',
    textAlign: 'center',
    width: '60px',
    borderRadius: '50px',
    transitionDuration:' 0.4s',
    cursor: 'pointer',
    opacity: '0.6',
    fontSize: '8px',
  },
  boutonCoterie_selection: {
    color: '#011220',
    backgroundColor: '#FFFFFF',
    textAlign: 'center',
    width: '60px',
    borderRadius: '5px',
    transitionDuration: '0.4s',
    cursor: 'pointer',
    opacity: '1',
    fontSize: '8px',
  },
  boutonCoterieHover: {
    backgroundColor: '#a7bbbe',
  },
  img: {
    width: '60px',
    border: 'solid 2px black',
    borderRadius: '8px',
    height: '70px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    fontSize: '8px',
  }
};

function Coterie({
  titre,
  portrait,
  fonds,
  description,
  page,
  voies,
  modifs_caracs,
  modifs_comps,
  objets,
}) {
  const { perso, setPerso } = useContext(PersoContexte)

  /**
   * application de tous les changements lors de la sélection d'une coterie
   */
  function appliquerSelection() {
    var fond = fonds[getRandomInt(fonds.length)]

    var changementsAuPerso = {
      fond: fond,
      coterie: titre, // titre de coterie
      rafraichir_coterie: 1,
    }
    var persoFinal = { ...perso, ...changementsAuPerso }
    setPerso(persoFinal)
  }

  var selection = perso.coterie === titre

  return (
    <li>
      <Box
        sx={ selection ? styles.lstCoteries_li_selection: styles.lstCoteries_li }
        id={titre}
        onClick={() => appliquerSelection()}
      >
        <Box
          component="img"
          sx={ styles.img }
          src={portrait}
          alt={`${titre} portrait`}
        />
        <Box
          sx={selection ? styles.boutonCoterie_selection : styles.boutonCoterie}
        >
          {titre}
        </Box>
      </Box>
    </li>
  )
}

export default Coterie
