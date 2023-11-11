import GenPerso from './choix/GenPerso'
import { Box } from '@mui/material'
import EditPerso from './choix/EditPerso'

const styles = {
  paragraphe: {
      elevation: '3',
      padding: '10px',
  }
}

function ZoneDeChoix() {
  return (
    <div>
      <Box sx={styles.paragraphe}>
        <GenPerso />
      </Box>
      <Box sx={styles.paragraphe}>
        <EditPerso />
      </Box>
    </div>
  )
}

export default ZoneDeChoix
