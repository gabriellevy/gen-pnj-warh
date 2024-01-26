import Coterie from './coteries/Coterie'
import { lstCoteries } from '../../donnees/lstCoteries'
import { Box, Grid } from '@mui/material'

const styles = {
  lstCoteries_ul: {
    listStyleType: 'none',
    padding: '0px',
    display: 'flex',
    flexWrap: 'wrap',
    marginTop:'0px',
    marginBottom:'0px',
  }
}

function Coteries() {
  return (
    <div>
      <Grid container direction={'row'}>
        {lstCoteries.map(
          ({
            titre,
            portrait,
            fonds,
            page,
            niveau_richesse,
            affiche,
            voies,
            modifs_caracs,
            modifs_comps,
            objets,
          }) =>
            affiche ? (
              <Box x sx={styles.lstCoteries_ul}>
                <Coterie
                  key={titre}
                  titre={titre}
                  portrait={portrait}
                  niveau_richesse={niveau_richesse}
                  fonds={fonds}
                  page={page}
                  voies={voies}
                  modifs_caracs={modifs_caracs}
                  modifs_comps={modifs_comps}
                  objets={objets}
                  />
                </Box>
            ) : (
              ''
            )
        )}
        </Grid>
    </div>
  )
}

export default Coteries
