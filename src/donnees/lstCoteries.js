import portrait_haut_elfe from './img/hauts_elfes/portraits/femme15-30_b.jpg'
import portrait_elfe_sylvain from './img/elfes_sylvains/portraits/f_15-30_c.jpg'
import portrait_bretonnien from './img/bretonniens/portraits/f18_35_chevalier.jpg'
import portrait_zaporogue from './img/kislevites/portraits/20-45.jpg'
import portrait_halfelins from './img/halfelins/portraits/30_85.jpg'
import portrait_nains from './img/nains/portraits/40_100.jpg'
import portrait_empire from './img/empire/portraits/standard.jpg'

import bg_halfelins_a from './img/halfelins/bg1.png'
import bg_halfelins_b from './img/halfelins/bg2.png'
import bg_halfelins_c from './img/halfelins/bg3.png'
import bg_hauts_elfes from './img/hauts_elfes/bg_poesie.jpg'
import bg_hauts_elfes_b from './img/hauts_elfes/bg1.png'
import bg_hauts_elfes_c from './img/hauts_elfes/bg2.png'
import bg_elfe_sylvain from './img/elfes_sylvains/bg univ_elfes.jpg'
import bg_elfe_sylvain_b from './img/elfes_sylvains/bg_musicien.jpg'
import bg_bretonnien_a from './img/bretonniens/bg1.jpg'
import bg_bretonnien_b from './img/bretonniens/bg2.jpg'
import bg_bretonnien_c from './img/bretonniens/bg3.jpg'
import bg_bretonnien_d from './img/bretonniens/bg4.jpg'
import bg_zaporogue from './img/kislevites/bg_lettre_zapo.jpg'
import bg_zaporogue_b from './img/kislevites/bg_savorov.jpg'
import bg_empire_a from './img/empire/bg4.png'
import bg_empire_b from './img/empire/bg1.png'
import bg_empire_c from './img/empire/bg2.png'
import bg_empire_d from './img/empire/bg3.png'
import bg_nains_a from './img/nains/bg4.png'
import bg_nains_b from './img/nains/bg1.png'
import bg_nains_c from './img/nains/bg2.png'
import bg_nains_d from './img/nains/bg3.png'

import { getRandomInt } from '../utils/rand'

export const nomCotEstalie = 'Estalien'
export const nomCotHautsElfes = 'Haut elfe'
export const nomCotElfesSylvains = 'Elfe sylvain'
export const nomCotKislevites = 'Kislevite'
export const nomCotBretonniens = 'Bretonnien'
export const nomCotHalfelins = 'Halfelin'
export const nomCotNains = 'Nain'
export const nomCotAlbion = 'Albionais'
export const nomCotSkavens = 'Skaven'
export const nomCotEmpire = 'Empire'

export function getCoterieObj(idCoterie) {
  var coterieObj
  lstCoteries.forEach((coterie) => {
    if (coterie.titre === idCoterie) {
      coterieObj = coterie
    }
  })
  return coterieObj
}

export function getEvtAleatoireCoterie(idCoterie, nb) {
  var coterieObj = getCoterieObj(idCoterie)
  var evts = []
  if (coterieObj.evts.length > 0) {
    for (let i = 0; i < nb; i++) {
      evts.push(coterieObj.evts[getRandomInt(coterieObj.evts.length)])
    }
  }
  return evts
}

export const lstCoteries = [
  {
    titre: nomCotBretonniens,
    affiche: true,
    portrait: portrait_bretonnien,
    fonds: [bg_bretonnien_a, bg_bretonnien_b, bg_bretonnien_c, bg_bretonnien_d],
    page: 'https://bibliotheque-imperiale.com/index.php/Cat%C3%A9gorie:La_Bretonnie',
    description:
      "La Bretonnie est l'un des plus grands royaumes du Vieux Monde. Son nom vient de celui de la plus puissante de ces tribus, les Bretonni. Sous la conduite de leur chef de guerre, Gilles le Breton, les Bretonni se regroup??rent en une seule nation. Ils s?????tablirent et cultiv??rent les terres, sous la menace constante des tribus Orques et Gobelines. Apr??s des si??cles de luttes incessantes, les Bretonniens prirent le contr??le des vall??es et des plaines fertiles, et repouss??rent leurs ennemis dans les for??ts et sur les plateaux d??sol??s, mais les guerres continu??rent contre de nouveaux ennemis. Des flottes de Morts-Vivants ravag??rent les r??gions c??ti??res ?? l'ouest, des Skavens d??sol??rent les terres du sud, des pillards nordiques vinrent par-del?? la Mer des Griffes et s'enfonc??rent dans les terres en remontant les fleuves, d??truisant tout sur leur passage. ?? travers ces g??n??rations de guerres continuelles contre divers ennemis, les Bretonniens se forg??rent une h??ro??que tradition de chevalerie. Ce sont les Chevaliers de Bretonnie qui repoussent les forces destructrices de leurs terres paisibles. ",
  },
  {
    titre: nomCotEmpire,
    affiche: true,
    portrait: portrait_empire,
    fonds: [bg_empire_a, bg_empire_b, bg_empire_c, bg_empire_d],
    page: 'https://bibliotheque-imperiale.com/index.php/Cat%C3%A9gorie:L%27Empire',
    description:
      'Au cours de si??cles de guerres, l???Empire est devenu un vaste royaume regroupant des provinces et des cit??s-??tats unies sous la banni??re de l???Empereur. Pour les habitants du Vieux Monde, la repr??sentation habituelle de l???Empire est celle d???une contr??e couverte d???immenses et sombres for??ts, entour??e d???imp??n??trables cha??nes de montagnes. Une terre sur laquelle l???humanit?? et les autres races coexistent ?? l???abri des murailles de quelques ??lots de civilisation dispers??s, depuis lesquels ils observent d???un ??il craintif les dangers qui se tapissent sous les noires frondaisons. Il y a certainement une part de v??rit?? dans cette mani??re de voir, mais comme tout st??r??otype, elle peint le tableau ?? tr??s gros traits et simplifie ?? l???extr??me une situation infiniment plus diverse et complexe. ',
  },
  {
    titre: nomCotNains,
    affiche: true,
    portrait: portrait_nains,
    fonds: [bg_nains_a, bg_nains_b, bg_nains_c, bg_nains_d],
    page: 'https://bibliotheque-imperiale.com/index.php/Cat%C3%A9gorie:Nains',
    description:
      '?? l???est de l???Empire s?????l??vent les Montagnes du Bord du Monde. C???est l??, entre les territoires de hommes et les r??gions d??sol??es des Terres Sombres que se dresse l???une de plus ancienne race du monde : les Nains. Leurs domaines ??taient jadis plus vastes, mais malheur ?? celui qui ??voquera leur d??clin en pr??sence d???un Nain : Karaz Ankor est aussi r??solu et vaillant que du temps de sa splendeur ! En cet ??ge de t??n??bres, les Nains sont l???expression m??me de l???honneur, de la force et du courage dans un monde menac?? par le Chaos.',
  },
  {
    titre: nomCotHalfelins,
    affiche: true,
    portrait: portrait_halfelins,
    fonds: [bg_halfelins_a, bg_halfelins_b, bg_halfelins_c],
    page: 'https://bibliotheque-imperiale.com/index.php/Halfling',
    description:
      'Peuplant le Mootland, les Halflings sont des petits humano??des paisibles et gloutons, peu int??ress??s par les choses militaires. Leur taille est souvent inf??rieure ?? un m??tre et varie entre 60 cm et 1,30m. Ils sont rondelets, trapus, souvent ventripotents et en aucun cas aussi puissamment b??tis que les Nains. Ils sont glabres, ?? part les rouflaquettes port??es par les vieux et les m??les ??l??gants mais leurs mains et leurs pieds sont couverts de poils et sont tr??s larges pour d???aussi petites gens. Les poils des pieds sont une constante source de fiert?? pour tous les Halflings et ils pr??f??rent g??n??ralement ??tre pieds nus, m??me dehors.',
  },
  {
    titre: nomCotHautsElfes,
    affiche: true,
    portrait: portrait_haut_elfe,
    fonds: [bg_hauts_elfes, bg_hauts_elfes_b, bg_hauts_elfes_c],
    page: 'https://bibliotheque-imperiale.com/index.php/Cat%C3%A9gorie:Hauts_Elfes',
    description:
      'Les Hauts Elfes (ou Asur en Eltharin) sont un peuple antique d???une grande sagesse, dont les chroniques remontent aux temps o?? le monde ??tait jeune. Leurs exploits et leur civilisation ??taient d??j?? l??gendaires bien avant que les tribus humaines ne fondent les royaumes du Vieux Monde. Fiers de leur noble h??ritage, les Hauts Elfes sont gracieux et cultiv??s mais inflexibles ?? la bataille, car ils sont pass??s ma??tres dans l???art des armes et dans celui de la Magie et, une fois ??veill??e, leur col??re est terrible. Depuis leur ??le d???Ulthuan, ils sillonnent les mers pour commercer avec les jeunes nations et pour d??fendre leurs terres. Tr??s peu d???ennemi ont jamais franchi les portes de Lothern, la plus fabuleuse cit?? du monde, et, de ceux qui ont jamais contempl?? les secrets de l???int??rieur d???Ulthuan, peu sont rest??s en vie pour raconter ce qu???ils y ont vu.',
  },
  {
    titre: nomCotElfesSylvains,
    affiche: true,
    portrait: portrait_elfe_sylvain,
    fonds: [bg_elfe_sylvain, bg_elfe_sylvain_b],
    page: 'https://bibliotheque-imperiale.com/index.php/Cat%C3%A9gorie:Elfes_Sylvains',
    description:
      'Sous les frondaisons d???Athel Loren, les Elfes Sylvains - ou Asrai, tels qu???ils sont nomm??s dans certaines l??gendes - observent le monde avec des yeux m??fiants, sans jamais convoiter ce qui se trouve hors de leur domaine, ni nouer une quelconque amiti?? avec les ??trangers. Ce sont des ??tres myst??rieux et secrets, qu???on ne rencontre que tr??s rarement hors de leurs domaines et qui restent ainsi largement incompris par le reste du monde. Ainsi, depuis bien longtemps, les Elfes Sylvains ne pr??tent attention au monde ext??rieur que lorsque celui-ci perturbe leur existence, et encore, cela ne concerne que les franges les plus jeunes et les plus ??g??es de leur population. Les plus jeunes sont en effet aventureux, et quittent parfois les frondaisons d???Athel Loren. Pour leur part, les plus ??g??s ont gagn?? en sagesse, et ont compris qu???en d??pit de leurs aspirations, Athel Loren ne pouvait exister en totale autarcie.',
  },
  {
    titre: nomCotKislevites,
    affiche: true,
    portrait: portrait_zaporogue,
    fonds: [bg_zaporogue, bg_zaporogue_b],
    page: 'https://bibliotheque-imperiale.com/index.php/Cat%C3%A9gorie:Le_Tsarat_de_Kislev',
    description:
      "Cern?? par les vastes ??tendues de l???Empire, au sud, et par le cauchemardesque Pays des Trolls, au nord, le Kislev, le royaume de la Reine de Glace, est une nation c??l??bre pour la vaillance de ses populations capables de r??sister sans faillir aux assauts des hordes affam??es venues du nord, d???endurer le froid stup??fiant et la morne solitude qui r??gnent dans l???immensit?? lugubre de l'Oblast, de pers??v??rer et de survivre, envers et contre tout. Pourtant, le Kislev a bien plus ?? offrir qu???un hiver ??pouvantable et des luttes incessantes contre le Chaos. C???est une terre riche, dot??e d???une culture et d???une histoire fascinantes, habit??e par un peuple fier, gardien d???un noble h??ritage. Tout en ??tant le rempart qui prot??ge les faibles hommes du sud et qui constitue la premi??re ligne de d??fense contre l???an??antissement, le Kislev n???en reste pas moins une nation farouchement ind??pendante, forte, d???une immense endurance.",
  },
]
