import * as React from 'react'
import { lstClasses, getClasseObj } from '../../donnees/lstClasses'
import { useContext, useEffect } from 'react'
import { PersoContexte } from '../../utils/contexte/perso'
import { getRandomInt } from '../../utils/rand'

const ChoixClasse = () => {
  const { perso, setPerso } = useContext(PersoContexte)
  const [classe, setClasse] = React.useState(perso.classe)
  const [carriere, setCarriere] = React.useState(perso.carriere)

  // manière détournée bancale de faire l'initialisation mais bon je fais ce que je peux
  useEffect(() => {
    if (perso.classe === undefined || perso.classe === '') {
      // A FAIRE : refactoriser tout ça proprement et faire en sorte que l'affichage du perso soit mis à jour immédiatement
      var indexClasse = getRandomInt(lstClasses.length)
      var ClasseObj = lstClasses[indexClasse]
      setClasse(ClasseObj.titre)

      var indexCarriere = getRandomInt(ClasseObj.carrieres.length)
      var carriereObj = ClasseObj.carrieres[indexCarriere]
      setCarriere(carriereObj.titre)

      var changementsAuPerso = {
        classe: ClasseObj.titre,
        carriere: carriereObj.titre,
      }
      var persoFinal = { ...perso, ...changementsAuPerso }
      setPerso(persoFinal)
    }
  }, [perso, setPerso])

  const changeClasse = (event) => {
    setClasse(event.target.value)

    var classeObjCourant = getClasseObj(event.target.value)
    var indexCarriere = getRandomInt(classeObjCourant.carrieres.length)
    var carriereObj = classeObjCourant.carrieres[indexCarriere]
    setCarriere(carriereObj.titre)

    var changementsAuPerso = {
      classe: event.target.value,
      carriere: carriereObj.titre,
    }
    var persoFinal = { ...perso, ...changementsAuPerso }
    setPerso(persoFinal)
  }

  const changeCarriere = (event) => {
    setCarriere(event.target.value)

    var changementsAuPerso = {
      carriere: event.target.value,
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
