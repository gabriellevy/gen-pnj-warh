import * as React from 'react'
import { lstClasses } from '../../donnees/lstClasses'
import { useContext } from 'react'
import { PersoContexte } from '../../utils/contexte/perso'

const ChoixClasse = () => {
  const { perso, setPerso } = useContext(PersoContexte)
  const [classe, setClasse] = React.useState('Citadins')
  const [carriere, setCarriere] = React.useState('Agitateur')

  const changeClasse = (event) => {
    setClasse(event.target.value)

    var changementsAuPerso = {
      classe: event.target.value,
    }
    var persoFinal = { ...perso, ...changementsAuPerso }
    setPerso(persoFinal)
  }

  const changeCarriere = (event) => {
    setCarriere(event.target.value)

    var changementsAuPerso = {
      metier: event.target.value,
    }
    var persoFinal = { ...perso, ...changementsAuPerso }
    setPerso(persoFinal)
  }

  return (
    <div>
      <label>
        Classe du personnage :
        <select value={classe} onChange={changeClasse}>
          {lstClasses.map((classeObj) => (
            <option key={classeObj.titre} value={classeObj.titre}>
              {classeObj.titre}
            </option>
          ))}
        </select>
      </label>
      {lstClasses.map((classeObj) =>
        classeObj.titre === classe ? (
          <label>
            Carrière du personnage :
            <select value={carriere} onChange={changeCarriere}>
              {classeObj.carrieres.map((carriereObj) => (
                <option key={carriereObj.titre} value={carriereObj.titre}>
                  {carriereObj.titre}
                </option>
              ))}
            </select>
          </label>
        ) : (
          ''
        )
      )}
    </div>
  )
}

export default ChoixClasse
