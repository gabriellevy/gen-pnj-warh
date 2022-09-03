import '../../../styles/App.css'
import { useContext } from 'react'
import { PersoContexte } from '../../../utils/contexte/perso'

import { getCaracObjPropertyName } from '../../../donnees/lstCaracs'
import { getCompObjPropertyName } from '../../../donnees/lstComps'
import { PhaseChoixContexte } from '../../../utils/contexte/phaseChoix'
import { typesDes } from '../../../utils/rand'

export function interpreterNouvLigne(texte) {
  const newText = texte.split('\n').map((str, index) => (
    <p className="paragrapheRapproche" key={index}>
      {str}
    </p>
  ))
  return newText
}

function renderCapaciteMagique(descriptionCourante) {
  return descriptionCourante.capacite_magique !== undefined &&
    descriptionCourante.capacite_magique !== '' ? (
    <div>
      <br />
      <b>Capacité magique : </b>
      {interpreterNouvLigne(descriptionCourante.capacite_magique)}
    </div>
  ) : (
    ''
  )
}

function ZoneDeValidation({ descriptionCourante, majDescriptionCourante }) {
  const { perso, setPerso } = useContext(PersoContexte)
  const { phaseChoix, majPhaseChoix } = useContext(PhaseChoixContexte)

  function validerSelection() {
    var changementsAuPerso = {
      coterie: descriptionCourante.titre,
    }

    if (descriptionCourante.niveau_richesse !== undefined) {
      changementsAuPerso['niveau_richesse'] =
        perso['niveau_richesse'] + descriptionCourante.niveau_richesse
    }

    if (descriptionCourante.objets !== undefined) {
      var objets = []
      if (perso.objets !== undefined) {
        objets = perso.objets
      }
      changementsAuPerso['objets'] = objets
      changementsAuPerso['objets'].push(descriptionCourante.objets)
      console.log(changementsAuPerso['objets'])
    }

    if (descriptionCourante.deDeVie !== undefined) {
      if (descriptionCourante.deDeVie > perso['niveau_richesse'])
        changementsAuPerso['deDeVie'] = descriptionCourante.deDeVie
    }

    if (descriptionCourante.modifs_comps !== undefined) {
      descriptionCourante.modifs_comps.forEach((elt) => {
        const compPropertyName = getCompObjPropertyName(elt.comp)
        changementsAuPerso[compPropertyName] = perso[compPropertyName] + elt.val
      })
    }

    if (descriptionCourante.modifs_caracs !== undefined) {
      descriptionCourante.modifs_caracs.forEach((elt) => {
        const caracPropertyName = getCaracObjPropertyName(elt.carac)

        changementsAuPerso[caracPropertyName] =
          perso[caracPropertyName] + elt.val
      })
    }

    var persoFinal = { ...perso, ...changementsAuPerso }
    setPerso(persoFinal)
    majPhaseChoix(phaseChoix + 1)
    majDescriptionCourante({
      texte: '',
    })
  }

  const affiche = descriptionCourante.texte !== ''

  return (
    <div>
      {affiche ? (
        <div style={{ padding: '0px 15px 0px 15px' }}>
          <div className="texteStandard">
            {descriptionCourante.texte}
            <br />
            <a href={descriptionCourante.page}>wiki</a>
            <br />
            <br />
            {descriptionCourante.voies.length !== 0 ? (
              <div>
                <b>Voies :</b>
                {descriptionCourante.voies.map((voieStr) => (
                  <span key={voieStr}> {voieStr},</span>
                ))}
              </div>
            ) : (
              'voies non définies'
            )}
            {descriptionCourante.modifs_caracs !== undefined &&
            descriptionCourante.modifs_caracs.length !== 0 ? (
              <div>
                <br />
                <b>Effets sur les caractéristiques : </b>
                {descriptionCourante.modifs_caracs.map((modif_carac) => (
                  <span key={modif_carac.carac}>
                    {' '}
                    {modif_carac.val > 0 ? '+' : ''}
                    {modif_carac.val} {modif_carac.carac},
                  </span>
                ))}
              </div>
            ) : (
              ''
            )}
            <br />
            {descriptionCourante.modifs_comps !== undefined &&
            descriptionCourante.modifs_comps.length !== 0 ? (
              <div>
                <b>Effets sur les compétences : </b>
                {descriptionCourante.modifs_comps.map((modif_comp) => (
                  <span key={modif_comp.comp}>
                    {' '}
                    {modif_comp.val > 0 ? '+' : ''}
                    {modif_comp.val} {modif_comp.comp},
                  </span>
                ))}
              </div>
            ) : (
              ''
            )}
            {descriptionCourante.objets !== undefined &&
            descriptionCourante.objets.length !== 0 ? (
              <div>
                <b>Objets : </b>
                {descriptionCourante.objets.map((objet) => (
                  <span key={objet}>{objet}</span>
                ))}
              </div>
            ) : (
              ''
            )}
            {renderCapaciteMagique(descriptionCourante)}
            {descriptionCourante.niveau_richesse !== undefined &&
            descriptionCourante.niveau_richesse !== '' ? (
              <div>
                <br />
                <b>Bonus de richesse : </b>
                {descriptionCourante.niveau_richesse}
              </div>
            ) : (
              ''
            )}
            Dé de vie minimum : {typesDes[descriptionCourante.deDeVie]}
            <div className="aligneDroite">
              <button className="bouton" onClick={() => validerSelection()}>
                Sélectionner
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div> </div>
      )}
    </div>
  )
}

export default ZoneDeValidation
