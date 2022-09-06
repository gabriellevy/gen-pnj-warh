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
          <table>
            <tbody>
              <tr>
                <td>
                  <Portrait className="descriptionPerso" perso={perso} />
                </td>
                <td>
                  <div className="descriptionPerso">
                    CC : {perso.cc}
                    <br />
                    CT : {perso.ct}
                    <br />
                    FOR : {perso.force}
                    <br />
                    END : {perso.endurance}
                    <br />
                    INIT : {perso.initiative}
                    <br />
                    AG : {perso.agilete}
                    <br />
                    DEX : {perso.dexterite}
                    <br />
                    INT : {perso.intelligence}
                    <br />
                    F.M : {perso.force_mentale}
                    <br />
                    SOC : {perso.sociabilite}
                    <br />
                  </div>
                </td>
                <td>
                  <div className="descriptionPerso">
                    {perso.nom}
                    <br />
                    {perso.coterie}
                    <br />
                    {perso.metier} ({perso.classe})
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
        <h1>Création de personnage Extremis</h1>
      )}
    </div>
  )
}

export default Banniere
