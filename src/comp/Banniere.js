import '../styles/Banniere.css'
import Portrait from './Portrait'
import { useContext } from 'react'
import { PersoContexte } from '../utils/contexte/perso'
import { getRandomInt, typesDes } from '../utils/rand'
import {
  getCompObjPropertyName,
  lstComps,
  nomAthletisme,
} from '../donnees/lstComps'

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
    if (perso.carriere === undefined) {
      perso.carriere = ''
    }
    if (perso.classe === undefined) {
      perso.classe = ''
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
          <table className="tableSansBord">
            <tbody>
              <tr>
                <td>
                  <Portrait perso={perso} />
                </td>
                <td>
                  <table className="descriptionPerso">
                    <tbody>
                      <tr>
                        <td>CC </td>
                        <td>{perso.cc}</td>
                      </tr>
                      <tr>
                        <td>CT </td>
                        <td> {perso.ct}</td>
                      </tr>
                      <tr>
                        <td>FOR </td>
                        <td> {perso.force}</td>
                      </tr>
                      <tr>
                        <td>END </td>
                        <td> {perso.endurance}</td>
                      </tr>
                      <tr>
                        <td>INIT </td>
                        <td> {perso.initiative}</td>
                      </tr>
                      <tr>
                        <td>AG </td>
                        <td> {perso.agilete}</td>
                      </tr>
                      <tr>
                        <td>DEX </td>
                        <td> {perso.dexterite}</td>
                      </tr>
                      <tr>
                        <td>INT </td>
                        <td> {perso.intelligence}</td>
                      </tr>
                      <tr>
                        <td>F.M </td>
                        <td> {perso.force_mentale}</td>
                      </tr>
                      <tr>
                        <td>SOC </td>
                        <td> {perso.sociabilite}</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td>
                  <div className="descriptionPerso">
                    <h3>{perso.nom}</h3>
                    {perso.coterie} ({perso.region})
                    <br />
                    {perso.evolution !== undefined && perso.evolution !== ''
                      ? perso.evolution
                      : perso.carriere}
                    <br />
                    {perso.age} ans
                    <br />
                    {perso.poids} kg
                    <br />
                    Statut : {perso.statut_echelon} {perso.statut_standing}
                    {afficheObjets(perso)}
                    <br />
                    Points de blessure : {perso.pointsDeBlessure}
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
        <h1>Création de personnage Warhammer</h1>
      )}
    </div>
  )
}

export default Banniere
