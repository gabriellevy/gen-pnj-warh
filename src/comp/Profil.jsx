import '../styles/Profil.css'
import Portrait from './Portrait'
import { useContext, useRef } from 'react'
import { PersoContexte } from '../utils/contexte/perso'
import { getRandomInt } from '../utils/rand'
import {
  getCompetence,
  getCompObjPropertyName,
  lstComps,
} from '../donnees/lstComps'
import { getCaracObjPropertyName } from '../donnees/lstCaracs'
import { getTalent, getTalentObjPropertyName, lstTalents } from '../donnees/lstTalents'
import { useReactToPrint } from 'react-to-print'
import styled from 'styled-components'

const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 14px;
  padding: 4px 30px;
  border-radius: 4px;
  margin: 5px 0px;
  cursor: pointer;
  &:disabled {
    color: grey;
    opacity: 0.7;
    cursor: default;
  }
`

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

function Profil() {
  const { perso } = useContext(PersoContexte)
  const componentRef = useRef();
  const persoSelectionne = Object.entries(perso).length !== 0

    const VersPdf = useReactToPrint({
      content: () => componentRef.current
    });

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
      <div className="profil">
      {persoSelectionne ? (
        <div>
    <span ref={componentRef}>
          <table className="tableSansBord">
            <tbody>
              <tr>
                <td>
                  <Portrait perso={perso} />
                </td>
                <td>
                  <div className="descriptionPerso">
                    {perso.coterie} ({perso.region})
                    <br />
                    {perso.age} ans
                    <br />
                    {perso.poids} kg
                    <br />
                    {afficheObjets(perso)}
                  </div>
                </td>
              </tr>
            </tbody>
            </table>
            <h3>{perso.nom} - 
                    {perso.evolution !== undefined && perso.evolution !== ''
                      ? perso.evolution
                      : perso.carriere}
                     ({perso.statut_echelon} {perso.statut_standing})</h3>
            <table className="descriptionPerso">
                <tbody>
                    <tr>
                    <td>CC </td>
                    <td>CT </td>
                    <td>FOR </td>
                    <td>END </td>
                    <td>INIT </td>
                    <td>AG </td>
                    <td>DEX </td>
                    <td>INT </td>
                    <td>F.M </td>
                              <td>SOC </td>
                              <td>Bl</td>
                    </tr>
                    <tr>
                    <td>{perso.cc}</td>
                    <td> {perso.ct}</td>
                    <td> {perso.force}</td>
                    <td> {perso.endurance}</td>
                    <td> {perso.initiative}</td>
                    <td> {perso.agilete}</td>
                    <td> {perso.dexterite}</td>
                    <td> {perso.intelligence}</td>
                    <td> {perso.force_mentale}</td>
                    <td> {perso.sociabilite}</td>
                    <td> {perso.pointsDeBlessure}</td>
                    </tr>
                </tbody>
            </table>
                  <div className="descriptionPerso">
                    <b>Compétences : </b>
                      {lstComps.map(({ titre, description }) => {
                        const idComp = getCompObjPropertyName(titre)
                        // la valeur finale dépend de la compétence mais aussi de la valeur de la carac liée :
                        const valeurComp = perso[idComp]
                        if (valeurComp > 0) {
                          const compObj = getCompetence(titre)
                          const idCarac = getCaracObjPropertyName(compObj.carac)
                          const valeurCarac = perso[idCarac]
                          const valeur = valeurComp + valeurCarac
                          return (
                            <span key={titre} title={description}>
                                 {titre} {valeur}, 
                            </span>
                          )
                        } else {
                          return ''
                        }
                      })}
                  </div>
                  <div className="descriptionPerso">
                    <h4>Talents</h4>
                    <ul>
                      {lstTalents.map(({ titre, description }) => {
                        const idTalent = getTalentObjPropertyName(titre)
                        // la valeur finale dépend du talent :
                        const valeurTalent = perso[idTalent]
                        if (valeurTalent > 0) {
                          return (
                            <span key={titre} title={description}>
                              <li>
                                {titre}{(valeurTalent > 1) ? ({ valeurTalent }) :''}
                              </li>
                            </span>
                          )
                        } else {
                          return ''
                        }
                      })}
                    </ul>
                  </div>
        </span>
            <Button onClick={() => VersPdf()}>
            Pdf
            </Button>
        </div>
      ) : (
        <h1>Création de personnage Warhammer</h1>
      )}
    </div>
  )
}

export default Profil
