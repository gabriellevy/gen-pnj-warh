import * as React from 'react'
import { lstClasses } from '../../donnees/lstClasses'
import { useContext } from 'react'
import { PersoContexte } from '../../utils/contexte/perso'

const ChoixClasse = () => {
  const { perso, setPerso } = useContext(PersoContexte)
  const [classe, setClasse] = React.useState('fruit')

  const changeClasse = (event) => {
    setClasse(event.target.value)

    var changementsAuPerso = {
      classe: event.target.value,
    }
    var persoFinal = { ...perso, ...changementsAuPerso }
    setPerso(persoFinal)
  }

  return (
    <div>
      <label>
        Classe du personnage :
        <select value={classe} onChange={changeClasse}>
          {lstClasses.map((option) => (
            <option value={option.titre}>{option.titre}</option>
          ))}
        </select>
      </label>
    </div>
  )
}

export default ChoixClasse
