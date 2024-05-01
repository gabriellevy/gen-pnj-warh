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
import { getTalentObjPropertyName, lstTalents } from '../donnees/lstTalents'
import { useReactToPrint } from 'react-to-print'
import { Bouton } from './App'

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
  const { perso, setPerso } = useContext(PersoContexte)
  const componentRef = useRef();
  const persoSelectionne = Object.entries(perso).length !== 0

  function nouveauPortrait() {
        var changementsAuPerso = {
        autre_portrait: 1,
    }
    var persoFinal = { ...perso, ...changementsAuPerso }
    setPerso(persoFinal)
  }

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
      <div>
        {persoSelectionne ? (
            <div>
        <div id="parchment" ref={componentRef}>
            <table className="tableSansBord">
                <tbody>
                <tr>
                    <td>
                    <Portrait perso={perso} />
                    </td>
                    <td>
                    <div className="descriptionPerso">
                        {perso.coterie}
                        {perso.region !== undefined && perso.region !== '' ? ' ('+perso.region+')' : ''}
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
            <div>
                <div className="nomPerso">{perso.nom} -&nbsp;
                    {perso.evolution !== undefined && perso.evolution !== ''
                        ? perso.evolution
                        : perso.carriere}
                    &nbsp;({perso.statut_echelon} {perso.statut_standing})
                </div>
                <table className="descriptionPerso">
                    <tbody>
                        <tr>
                            <td className="caracs">CC </td>
                            <td className="caracs">CT </td>
                            <td className="caracs">FOR </td>
                            <td className="caracs">END </td>
                            <td className="caracs">INIT </td>
                            <td className="caracs">AG </td>
                            <td className="caracs">DEX </td>
                            <td className="caracs">INT </td>
                            <td className="caracs">F.M </td>
                            <td className="caracs">SOC </td>
                            <td className="caracs">Bl</td>
                        </tr>
                        <tr>
                            <td className="caracs">{perso.cc}</td>
                            <td className="caracs">{perso.ct}</td>
                            <td className="caracs">{perso.force}</td>
                            <td className="caracs">{perso.endurance}</td>
                            <td className="caracs">{perso.initiative}</td>
                            <td className="caracs">{perso.agilete}</td>
                            <td className="caracs">{perso.dexterite}</td>
                            <td className="caracs">{perso.intelligence}</td>
                            <td className="caracs">{perso.force_mentale}</td>
                            <td className="caracs">{perso.sociabilite}</td>
                            <td className="caracs">{perso.pointsDeBlessure}</td>
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
                                {titre} {valeur},&nbsp;
                        </span>
                        )
                    } else {
                        return ''
                    }
                    })}
                </div>
                <div id="talents" className="descriptionPerso">
                <h4>Talents : </h4>
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
                <div id="possessions" className="descriptionPerso">
                    <h4>Possessions : </h4>
                </div>
            </div>
            </div>
              <Bouton onClick={() => VersPdf()}>
                Pdf
              </Bouton>
              <Bouton onClick={() => nouveauPortrait()}>
                Autre portrait
              </Bouton>
            </div>
        ) : (
            <h1>Création de personnage Warhammer</h1>
        )}
    </div>
  )
}

export default Profil
