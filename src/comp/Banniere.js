import '../styles/Banniere.css'
import Portrait from './Portrait'
import { useContext } from 'react'
import { PersoContexte } from '../utils/contexte/perso'
import { getRandomInt, typesDes } from '../utils/rand'
import { getCompObjPropertyName, lstComps } from '../donnees/lstComps'
import { niveauxDeVie } from '../donnees/lstNiveauDeVie'

function afficheObjets(perso) {
  if (perso.objets === undefined || perso.objets.length === 0) return ''

  return perso.objets.map((objet, index) => {
    return (
      <div>
        <br />
        <span key={index}>{objet},</span>
        <br />
      </div>
    )
  })
}

function Banniere() {
  const { perso } = useContext(PersoContexte)
  const persoSelectionne = Object.entries(perso).length !== 0

  if (persoSelectionne) {
    const male = getRandomInt(2) === 0
    if (perso.nom === undefined) {
      perso.nom = ''
    }
    if (perso.metier === undefined) {
      perso.metier = ''
    }
    if (perso.age === undefined) {
      const age = getRandomInt(60) + 15
      perso.age = age
    }
    if (perso.male === undefined) {
      perso.male = male
    }
  }
  return (
    <div className="banniere">
      {persoSelectionne ? (
        <div>
          <table>
            <tbody>
              <tr>
                <td>
                  <Portrait className="descriptionPerso" perso={perso} />
                </td>
                <td>
                  <div className="descriptionPerso">
                    DEX : {perso.dexterite}
                    <br />
                    CON : {perso.constitution}
                    <br />
                    CHA : {perso.charisme}
                    <br />
                    INT : {perso.intelligence}
                    <br />
                    SENS : {perso.sensibilite}
                    <br />
                    MAG : {perso.magie}
                    <br />
                  </div>
                </td>
                <td>
                  <div className="descriptionPerso">
                    {perso.nom}
                    <br />
                    {perso.coterie}
                    <br />
                    {perso.metier}
                    <br />
                    Utilisations de capa magique :{' '}
                    {perso.utilisationsCapaMagique}
                    <br />
                    {perso.age} ans
                    <br />
                    {perso.poids} kg
                    <br />
                    Niveau de richesse : {niveauxDeVie[perso.niveau_richesse]}
                    <br />
                    {perso.male ? 'Homme' : 'Femme'}
                    {afficheObjets(perso)}
                  </div>
                </td>
                <td>
                  <div className="descriptionPerso">
                    <b>Combat : </b>
                    <br />
                    Initiative : {perso.initiative}
                    <br />
                    Attaque corps à corps : {perso.atc}
                    <br />
                    Attaque à distance : {perso.atd}
                    <br />
                    Défense : {perso.defense}
                    <br />
                    Points de vie : {perso.pointsDeVie}
                    <br />
                    Dé de vie : {typesDes[perso.deDeVie]}
                  </div>
                </td>
                <td>
                  <div className="descriptionPerso">
                    <b>Compétences : </b>
                    {lstComps.map(({ titre, description }) => {
                      const idComp = getCompObjPropertyName(titre)
                      const valeur = perso[idComp]
                      return valeur > 0 ? (
                        <span key={titre} title={description}>
                          {titre} ({valeur}),
                        </span>
                      ) : (
                        ''
                      )
                    })}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <h1>Création de personnage Extremis</h1>
      )}
    </div>
  )
}

export default Banniere
