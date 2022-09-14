import { nomCotBretonniens } from './lstCoteries'
import { nomCotConquistadors } from './lstCoteries'
import { nomCotHautsElfes } from './lstCoteries'
import { nomCotElfesSylvains } from './lstCoteries'
import { nomCotKislevites } from './lstCoteries'
import { nomCotHalfelins } from './lstCoteries'
import { nomCotNains } from './lstCoteries'
import { nomCotEmpire } from './lstCoteries'
import {
  nomCourtisans,
  nomLettres,
  nomCitadins,
  nomGuerriers,
  nomItinerants,
  nomRiverains,
  nomRoublards,
  nomRuraux,
  nomAgitateur,
  nomArtisan,
  nomBourgeois,
  nomEnqueteur,
  nomMarchand,
  nomMendiant,
  nomMilicien,
  nomRatier,
  nomArtiste,
  nomConseiller,
  nomDuelliste,
  nomEmissaire,
  nomEspion,
  nomIntendant,
  nomNoble,
  nomServiteur,
  nomCavalier,
  nomChevalier,
  nomGarde,
  nomGladiateur,
  nomPretreGuerrier,
  nomSoldat,
  nomSpadassin,
  nomTueur,
  nomChasseurDePrimes,
  nomCocher,
  nomColporteur,
  nomFlagellant,
  nomMessager,
  nomPatrouilleurRoutier,
  nomRepurgateur,
  nomSaltimbanque,
  nomApothicaire,
  nomErudit,
  nomIngenieur,
  nomJuriste,
  nomMedecin,
  nomNonne,
  nomPretre,
  nomSorcier,
  nomBatelier,
  nomContrebandier,
  nomDebardeur,
  nomFemmeDuFleuve,
  nomMarin,
  nomNaufrageur,
  nomNautonnier,
  nomPatrouilleurFluvial,
  nomCharlatan,
  nomEntremetteur,
  nomHorsLaLoi,
  nomPilleurDeTombes,
  nomRanconneur,
  nomReceleur,
  nomSorcierDissident,
  nomVoleur,
  nomBailli,
  nomChasseur,
  nomEclaireur,
  nomHerboriste,
  nomMineur,
  nomMystique,
  nomSorcierDeVillage,
  nomVillageois,
} from './lstClasses'

import portrait_conquistador_25_60 from './img/conquistadors/portraits/25-60.jpg'
import portrait_conquistador_20_50_b from './img/conquistadors/portraits/portrait_20-50_b.jpg'
import portrait_conquistador_femme15_35 from './img/conquistadors/portraits/femme15_35.jpg'
import portrait_conquistador_femme15_35_b from './img/conquistadors/portraits/femme15_35_b.jpg'
import portrait_conquistador_femme15_35_c from './img/conquistadors/portraits/femme15_35_c.jpg'
import portrait_conquistador_femme15_35_d from './img/conquistadors/portraits/femme15_35_d.jpg'
import portrait_conquistador_femme15_35_e from './img/conquistadors/portraits/femme15_35_e.jpg'
import portrait_conquistador_femme15_35_f from './img/conquistadors/portraits/femme15_35_f.jpg'
import portrait_conquistador_femme20_35 from './img/conquistadors/portraits/femme20_35.jpg'
import portrait_conquistador_femme20_45 from './img/conquistadors/portraits/femme20_45.jpg'
import portrait_conquistador_femme30_50 from './img/conquistadors/portraits/femme30_50.jpg'
import portrait_conquistador_femme40_plus from './img/conquistadors/portraits/femme40+.jpg'
import portrait_conquistador_femme50_plus from './img/conquistadors/portraits/femme50+.jpg'
import portrait_conquistador_portrait_15_40 from './img/conquistadors/portraits/portrait_15-40.jpg'
import portrait_conquistador_portrait_15_40_b from './img/conquistadors/portraits/portrait_15-40_b.jpg'
import portrait_conquistador_portrait_15_40_c from './img/conquistadors/portraits/portrait_15-40_c.jpg'
import portrait_conquistador_portrait_20_40 from './img/conquistadors/portraits/portrait_20-40.jpg'
import portrait_conquistador_portrait_20_40_b from './img/conquistadors/portraits/portrait_20-40_b.jpg'
import portrait_conquistador_portrait_20_50 from './img/conquistadors/portraits/portrait_20-50.jpg'
import portrait_conquistador_portrait_20_50_b from './img/conquistadors/portraits/portrait_20-50_b.jpg'
import portrait_conquistador_portrait_20_50_c from './img/conquistadors/portraits/portrait_20-50_c.jpg'
import portrait_conquistador_portrait_20_50_d from './img/conquistadors/portraits/portrait_20-50_d.jpg'
import portrait_conquistador_portrait_20_50_e from './img/conquistadors/portraits/portrait_20-50_e.jpg'
import portrait_conquistador_portrait_20_50_f from './img/conquistadors/portraits/portrait_20-50_f.jpg'
import portrait_conquistador_portrait_30_60 from './img/conquistadors/portraits/portrait_30-60.jpg'
import portrait_conquistador_portrait_40_plus from './img/conquistadors/portraits/portrait_40+.jpg'
import portrait_conquistador_portrait_50_plus from './img/conquistadors/portraits/portrait_50+.jpg'
import portrait_conquistador_portrait_50_plus_b from './img/conquistadors/portraits/portrait_50+_b.jpg'
import portrait_conquistador_portrait_60_plus from './img/conquistadors/portraits/portrait_60+.jpg'
import portrait_conquistador_pretre_20_50 from './img/conquistadors/portraits/pretre_20-50.jpg'

import portrait_elfe_femme15_30_b from './img/hauts_elfes/portraits/femme15-30_b.jpg'
import portrait_elfe_femme15_30_c from './img/hauts_elfes/portraits/femme15-30_c.jpg'
import portrait_elfe_femme20_40_d from './img/hauts_elfes/portraits/femme20-40_d.png'
import portrait_elfe_femme20_40_e from './img/hauts_elfes/portraits/femme20-40_e.jpg'
import portrait_elfe_femme20_50_b from './img/hauts_elfes/portraits/femme20-50_b.jpg'
import portrait_elfe_femme20_50_c from './img/hauts_elfes/portraits/femme20-50_c.jpg'
import portrait_elfe_femme30_50 from './img/hauts_elfes/portraits/femme30_50.jpg'
import portrait_elfe_femme30_plus_c from './img/hauts_elfes/portraits/femme30+_c.jpg'
import portrait_elfe_femme30_plus_d from './img/hauts_elfes/portraits/femme30+_d.jpg'
import portrait_elfe_Fportrait_30_60 from './img/hauts_elfes/portraits/Fportrait_30_60.jpg'
import portrait_elfe_15_30 from './img/hauts_elfes/portraits/portrait_15-30.jpg'
import portrait_elfe_15_40_c from './img/hauts_elfes/portraits/portrait_15-40_c.jpg'
import portrait_elfe_15_40_d from './img/hauts_elfes/portraits/portrait_15-40_d.jpg'
import portrait_elfe_15_40_e from './img/hauts_elfes/portraits/portrait_15-40_e.jpg'
import portrait_elfe_15_40_f from './img/hauts_elfes/portraits/portrait_15-40_f.jpg'
import portrait_elfe_20_40_e from './img/hauts_elfes/portraits/portrait_20-40_e.png'
import portrait_elfe_30_70_b from './img/hauts_elfes/portraits/portrait_30_70_b.jpg'
import portrait_elfe_30_70_d from './img/hauts_elfes/portraits/portrait_30_70_d.jpg'
import portrait_elfe_30_plus from './img/hauts_elfes/portraits/portrait_30+.jpg'
import portrait_elfe_30_plus_b from './img/hauts_elfes/portraits/portrait_30+_b.jpg'
import portrait_elfe_40_plus from './img/hauts_elfes/portraits/portrait_40+.jpg'
import portrait_elfe_40_plus_c from './img/hauts_elfes/portraits/portrait_40+_c.jpg'
import portrait_elfe_50_plus_a from './img/hauts_elfes/portraits/portrait_50_plus_a.jpg'
import portrait_elfe_20_50 from './img/hauts_elfes/portraits/portrait20_50.jpg'
import portrait_elfe_sournois20_50 from './img/hauts_elfes/portraits/sournois20_50.jpg'

import portrait_elfe_sylvain_femme15_40 from './img/elfes_sylvains/portraits/femme15_40.jpg'
import portrait_elfe_sylvain_femme15_30 from './img/elfes_sylvains/portraits/femme15-30.jpg'
import portrait_elfe_sylvain_femme15_30_b from './img/elfes_sylvains/portraits/femme15-30_b.jpg'
import portrait_elfe_sylvain_femme20_40_f from './img/elfes_sylvains/portraits/femme20-40_f.jpg'
import portrait_elfe_sylvain_femme30_plus_a from './img/elfes_sylvains/portraits/femme30+_a.jpg'
import portrait_elfe_sylvain_femme30_plus_b from './img/elfes_sylvains/portraits/femme30+_b.jpg'
import portrait_elfe_sylvain_femme50_plus from './img/elfes_sylvains/portraits/femme50+.jpg'
import portrait_elfe_sylvain_15_30 from './img/elfes_sylvains/portraits/portrait_15-30.jpg'
import portrait_elfe_sylvain_15_30_b from './img/elfes_sylvains/portraits/portrait_15-30_b.jpg'
import portrait_elfe_sylvain_15_30_c from './img/elfes_sylvains/portraits/portrait_15-30_c.jpg'
import portrait_elfe_sylvain_20_40_d from './img/elfes_sylvains/portraits/portrait_20-40_d.png'
import portrait_elfe_sylvain_20_40_f from './img/elfes_sylvains/portraits/portrait_20-40_f.jpg'
import portrait_elfe_sylvain_20_40_g from './img/elfes_sylvains/portraits/portrait_20-40_g.jpg'
import portrait_elfe_sylvain_20_40_h from './img/elfes_sylvains/portraits/portrait_20-40_h.jpg'
import portrait_elfe_sylvain_20_40_i from './img/elfes_sylvains/portraits/portrait_20-40_i.jpg'
import portrait_elfe_sylvain_30_50_c from './img/elfes_sylvains/portraits/portrait_30_50_c.jpg'
import portrait_elfe_sylvain_30_50_d from './img/elfes_sylvains/portraits/portrait_30_50_d.jpg'
import portrait_elfe_sylvain_40_60 from './img/elfes_sylvains/portraits/portrait_40_60.jpg'
import portrait_elfe_sylvain_40_plus_b from './img/elfes_sylvains/portraits/portrait_40+_b.jpg'
import portrait_elfe_sylvain_20_50_b from './img/elfes_sylvains/portraits/portrait20_50_b.jpg'

import portrait_8_15 from './img/portraits/8-15.jpg'
import portrait_femme13_20 from './img/portraits/F13-20.jpg'
import portrait_femme20_40 from './img/portraits/F20-40.jpg'
import portrait_femme30_50 from './img/portraits/femme30_50.jpg'
import portrait_femme14_40 from './img/portraits/Fportrait14-40.png'
import portrait_15_40 from './img/portraits/portrait_15-40.jpg'
import portrait_15_40_b from './img/portraits/portrait_15-40_b.jpg'
import portrait_20_40 from './img/portraits/20-40.jpg'
import portrait_20_40_a from './img/portraits/portrait20-40.png'
import portrait_20_40_b from './img/portraits/portrait20-40_2.png'
import portrait_20_50_b from './img/portraits/portrait20-50_2.png'
import portrait_20_50_c from './img/portraits/portrait20-50_3.png'
import portrait_20_50_d from './img/portraits/portrait20-50_4.png'
import portrait_20_50 from './img/portraits/portrait_20-50.jpg'
import portrait_20_60 from './img/portraits/portrait_bucheron_20-60.jpg'
import portrait_15_35 from './img/portraits/portrait15-35.png'
import portrait_40_60 from './img/portraits/portrait40-60.png'
import portrait_40_plus from './img/portraits/portrait40+.png'
import portrait_60_plus from './img/portraits/portrait60+_miserable.png'
import portrait_forgeron_60_plus from './img/portraits/portrait_forgeron_60+.jpg'

import portrait_zaporogue_15_35_chasseur from './img/kislevites/portraits/15-35_chasseur.jpg'
import portrait_zaporogue_20_45 from './img/kislevites/portraits/20-45.jpg'
import portrait_zaporogue_20_45_b from './img/kislevites/portraits/20-45_2.jpg'
import portrait_zaporogue_20_45_c from './img/kislevites/portraits/20-45_3.jpg'
import portrait_zaporogue_20_50 from './img/kislevites/portraits/25-50.jpg'
import portrait_zaporogue_20_50_b from './img/kislevites/portraits/25-50_2.jpg'
import portrait_zaporogue_20_50_guerrier from './img/kislevites/portraits/25-50_guerrier.jpg'
import portrait_zaporogue_30_60 from './img/kislevites/portraits/30-60.jpg'
import portrait_zaporogue_30_60_b from './img/kislevites/portraits/30-60_2.jpg'
import portrait_zaporogue_30_60_musicien from './img/kislevites/portraits/30-60_musicien.jpg'
import portrait_zaporogue_40_60 from './img/kislevites/portraits/40-60.jpg'
import portrait_zaporogue_40_70 from './img/kislevites/portraits/45-70.jpg'
import portrait_zaporogue_50_plus from './img/kislevites/portraits/50+.jpg'
import portrait_zaporogue_50_plus_b from './img/kislevites/portraits/50+_2.jpg'
import portrait_zaporogue_65_plus from './img/kislevites/portraits/65+.jpg'
import portrait_zaporogue_femme15_35 from './img/kislevites/portraits/F15-35.jpg'
import portrait_zaporogue_femme20_40 from './img/kislevites/portraits/F20-40.jpg'
import portrait_zaporogue_femme20_40_bergere from './img/kislevites/portraits/F20-40_bergere.jpg'
import portrait_zaporogue_femme20_40_paysane from './img/kislevites/portraits/F20-40_paysane.jpg'
import portrait_zaporogue_femme30_60 from './img/kislevites/portraits/F30-60.jpg'
import portrait_zaporogue_femme50_plus from './img/kislevites/portraits/F50+.jpg'

import portrait_templier_20_40 from './img/bretonniens/portraits/20-40.jpg'
import portrait_templier_femme15_30 from './img/bretonniens/portraits/femme15_30.jpg'
import portrait_templier_femme20_40 from './img/bretonniens/portraits/femme20_40.jpg'
import portrait_templier_femme70_plus from './img/bretonniens/portraits/femme70+.jpg'
import portrait_templier_30_plus from './img/bretonniens/portraits/30+.jpg'
import portrait_templier_50_plus from './img/bretonniens/portraits/50+.jpg'
import portrait_templier_50_plus_b from './img/bretonniens/portraits/50+_b.jpg'
import portrait_templier_60_plus from './img/bretonniens/portraits/60+.jpg'
import portrait_f18_35_chevalier from './img/bretonniens/portraits/f18_35_chevalier.jpg'

import portrait_nain_40_100 from './img/nains/portraits/40_100.jpg'

import portrait_halfelin_30_50 from './img/halfelins/portraits/30_50.jpg'

import portrait_empire30_60_courtisans from './img/empire/portraits/30_60_courtisans.jpg'
import portrait_empire30_60_lettres from './img/empire/portraits/30_60_lettres.jpg'
import portrait_empire30_60_naufrageur from './img/empire/portraits/30_60_naufrageur.jpg'
import portrait_empire15_35_villageoise from './img/empire/portraits/15_35_villageoise.jpg'
import portrait_empire40_65_garde from './img/empire/portraits/40_65_garde.jpg'
import portrait_empire25_45_chasseur_primes from './img/empire/portraits/25_45_chasseur_primes.jpg'
import portrait_empire45_75_agitateur from './img/empire/portraits/45_75_agitateur.jpg'
import portrait_empire30_50_villageois from './img/empire/portraits/30_50_villageois.jpg'
import portrait_empire20_45_naufrageuse from './img/empire/portraits/20_45_naufrageuse.jpg'
import portrait_empire30_plus_repurgateur from './img/empire/portraits/30+_repurgateur.jpg'
import portrait_empire30_60_saltimbanque from './img/empire/portraits/30_60_saltimbanque.jpg'
import portrait_empire45_70_courtisans from './img/empire/portraits/45_70_courtisans.jpg'
import portrait_empire30_55_gladiateur from './img/empire/portraits/30_55_gladiateur.jpg'
import portrait_empire25_50_ratier from './img/empire/portraits/25_50_ratier.jpg'
import portrait_empire50_plus_guerrier from './img/empire/portraits/50+_guerrier.png'
import portrait_empire30_plus_flagellant from './img/empire/portraits/30+_flagellant.png'
import portrait_empire50_plus_erudit from './img/empire/portraits/50+_erudit.jpg'
import portrait_empire40_plus_duelliste from './img/empire/portraits/40_plus_duelliste.jpg'

export const lstPortraits = [
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire40_plus_duelliste,
    ageMin: 50,
    carrieres: [nomDuelliste, nomPatrouilleurRoutier, nomChasseurDePrimes],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire50_plus_erudit,
    ageMin: 50,
    carrieres: [nomErudit, nomApothicaire, nomJuriste],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire30_plus_flagellant,
    ageMin: 30,
    carrieres: [nomFlagellant],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire50_plus_guerrier,
    ageMin: 50,
    classes: [nomGuerriers],
    male: true,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire25_50_ratier,
    ageMin: 25,
    ageMax: 50,
    carrieres: [nomRatier],
    male: true,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire30_55_gladiateur,
    ageMin: 30,
    ageMax: 55,
    carrieres: [nomGladiateur],
    male: true,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire45_70_courtisans,
    ageMin: 45,
    ageMax: 70,
    classes: [nomCourtisans],
    male: true,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire30_60_saltimbanque,
    ageMin: 30,
    ageMax: 60,
    carrieres: [nomSaltimbanque],
    male: true,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire30_plus_repurgateur,
    ageMin: 30,
    carrieres: [nomRepurgateur],
    male: true,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire20_45_naufrageuse,
    ageMin: 20,
    ageMax: 45,
    carrieres: [nomNaufrageur],
    male: false,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire30_50_villageois,
    ageMin: 30,
    ageMax: 50,
    carrieres: [nomVillageois],
    male: true,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire45_75_agitateur,
    ageMin: 45,
    ageMax: 75,
    carrieres: [nomAgitateur],
    male: true,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire25_45_chasseur_primes,
    ageMin: 25,
    ageMax: 45,
    carrieres: [nomChasseurDePrimes, nomDuelliste],
    classes: [nomCourtisans, nomCitadins],
    male: true,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire40_65_garde,
    ageMin: 40,
    ageMax: 65,
    carrieres: [nomGarde, nomSoldat],
    male: true,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire15_35_villageoise,
    ageMin: 15,
    ageMax: 45,
    carrieres: [nomVillageois, nomHerboriste],
    male: false,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire30_60_naufrageur,
    ageMin: 30,
    ageMax: 60,
    carrieres: [nomNaufrageur],
    male: true,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire30_60_courtisans,
    ageMin: 30,
    ageMax: 60,
    classes: [nomCourtisans, nomCitadins],
    male: true,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire30_60_lettres,
    ageMin: 30,
    ageMax: 60,
    classes: [nomLettres],
    male: true,
  },
  {
    coteries: [nomCotNains],
    image: portrait_nain_40_100,
    ageMin: 40,
    ageMax: 100,
    male: true,
  },
  {
    coteries: [nomCotHalfelins],
    image: portrait_halfelin_30_50,
    ageMin: 30,
    ageMax: 50,
    male: true,
  },
  {
    coteries: [nomCotBretonniens],
    image: portrait_templier_femme15_30,
    ageMin: 15,
    ageMax: 30,
    male: false,
  },
  {
    coteries: [nomCotBretonniens],
    image: portrait_templier_femme20_40,
    ageMin: 20,
    ageMax: 40,
    male: false,
  },
  {
    coteries: [nomCotBretonniens],
    image: portrait_templier_femme70_plus,
    ageMin: 70,
    male: false,
  },
  {
    coteries: [nomCotBretonniens],
    image: portrait_templier_20_40,
    ageMin: 20,
    ageMax: 40,
    male: true,
  },
  {
    coteries: [nomCotBretonniens],
    image: portrait_templier_30_plus,
    ageMin: 30,
    male: true,
  },
  {
    coteries: [nomCotBretonniens],
    image: portrait_templier_60_plus,
    ageMin: 60,
    male: true,
  },
  {
    coteries: [nomCotBretonniens],
    image: portrait_templier_50_plus,
    ageMin: 50,
    male: true,
  },
  {
    coteries: [nomCotBretonniens],
    image: portrait_templier_50_plus_b,
    ageMin: 50,
    male: true,
  },
  {
    coteries: [nomCotBretonniens],
    image: portrait_f18_35_chevalier,
    ageMin: 18,
    ageMax: 35,
    male: false,
  },
  {
    coteries: [nomCotKislevites],
    image: portrait_zaporogue_femme50_plus,
    ageMin: 50,
    male: false,
  },
  {
    coteries: [nomCotKislevites],
    image: portrait_zaporogue_femme30_60,
    ageMin: 30,
    ageMax: 60,
    male: false,
  },
  {
    coteries: [nomCotKislevites],
    image: portrait_zaporogue_femme20_40_paysane,
    ageMin: 20,
    ageMax: 40,
    male: false,
  },
  {
    coteries: [nomCotKislevites],
    image: portrait_zaporogue_femme20_40_bergere,
    ageMin: 20,
    ageMax: 40,
    male: false,
  },
  {
    coteries: [nomCotKislevites],
    image: portrait_zaporogue_femme20_40,
    ageMin: 20,
    ageMax: 40,
    male: false,
  },
  {
    coteries: [nomCotKislevites],
    image: portrait_zaporogue_femme15_35,
    ageMin: 15,
    ageMax: 35,
    male: false,
  },
  {
    coteries: [nomCotKislevites],
    image: portrait_zaporogue_50_plus_b,
    ageMin: 50,
    male: true,
  },
  {
    coteries: [nomCotKislevites],
    image: portrait_zaporogue_65_plus,
    ageMin: 65,
    male: true,
  },
  {
    coteries: [nomCotKislevites],
    image: portrait_zaporogue_50_plus,
    ageMin: 50,
    male: true,
  },
  {
    coteries: [nomCotKislevites],
    image: portrait_zaporogue_40_70,
    ageMin: 40,
    ageMax: 70,
    male: true,
  },
  {
    coteries: [nomCotKislevites],
    image: portrait_zaporogue_40_60,
    ageMin: 40,
    ageMax: 60,
    male: true,
  },
  {
    coteries: [nomCotKislevites],
    image: portrait_zaporogue_30_60_musicien,
    ageMin: 30,
    ageMax: 60,
    male: true,
  },
  {
    coteries: [nomCotKislevites],
    image: portrait_zaporogue_30_60_b,
    ageMin: 30,
    ageMax: 60,
    male: true,
  },
  {
    coteries: [nomCotKislevites],
    image: portrait_zaporogue_30_60,
    ageMin: 30,
    ageMax: 60,
    male: true,
  },
  {
    coteries: [nomCotKislevites],
    image: portrait_zaporogue_20_50_guerrier,
    ageMin: 20,
    ageMax: 50,
    male: true,
  },
  {
    coteries: [nomCotKislevites],
    image: portrait_zaporogue_20_50,
    ageMin: 20,
    ageMax: 50,
    male: true,
  },
  {
    coteries: [nomCotKislevites],
    image: portrait_zaporogue_20_50_b,
    ageMin: 20,
    ageMax: 50,
    male: true,
  },
  {
    coteries: [nomCotKislevites],
    image: portrait_zaporogue_15_35_chasseur,
    ageMin: 15,
    ageMax: 35,
    male: true,
  },
  {
    coteries: [nomCotKislevites],
    image: portrait_zaporogue_20_45,
    ageMin: 20,
    ageMax: 45,
    male: true,
  },
  {
    coteries: [nomCotKislevites],
    image: portrait_zaporogue_20_45_b,
    ageMin: 20,
    ageMax: 45,
    male: true,
  },
  {
    coteries: [nomCotKislevites],
    image: portrait_zaporogue_20_45_c,
    ageMin: 20,
    ageMax: 45,
    male: true,
  },
  {
    image: portrait_forgeron_60_plus,
    ageMin: 60,
    male: true,
  },
  {
    image: portrait_40_plus,
    ageMin: 40,
    male: true,
  },
  {
    image: portrait_40_60,
    ageMin: 40,
    ageMax: 60,
    male: true,
  },
  {
    image: portrait_20_50_d,
    ageMin: 20,
    ageMax: 50,
    male: true,
  },
  {
    image: portrait_20_50_c,
    ageMin: 20,
    ageMax: 50,
    male: true,
  },
  {
    image: portrait_20_50_b,
    ageMin: 20,
    ageMax: 50,
    male: true,
  },
  {
    image: portrait_20_40_b,
    ageMin: 20,
    ageMax: 40,
    male: true,
  },
  {
    image: portrait_20_40_a,
    ageMin: 20,
    ageMax: 40,
    male: true,
  },
  {
    image: portrait_15_35,
    ageMin: 15,
    ageMax: 35,
    male: true,
  },
  {
    image: portrait_60_plus,
    ageMin: 60,
    male: true,
  },
  {
    image: portrait_20_60,
    ageMin: 20,
    ageMax: 60,
    male: true,
  },
  {
    image: portrait_20_50,
    ageMin: 20,
    ageMax: 50,
    male: true,
  },
  {
    image: portrait_15_40_b,
    ageMin: 15,
    ageMax: 40,
    male: true,
  },
  {
    image: portrait_15_40,
    ageMin: 15,
    ageMax: 40,
    male: true,
  },
  {
    image: portrait_femme14_40,
    ageMin: 14,
    ageMax: 40,
    male: false,
  },
  {
    image: portrait_femme30_50,
    ageMin: 30,
    ageMax: 50,
    male: false,
  },
  {
    image: portrait_femme20_40,
    ageMin: 20,
    ageMax: 40,
    male: false,
  },
  {
    image: portrait_femme13_20,
    ageMin: 13,
    ageMax: 20,
    male: false,
  },
  {
    image: portrait_20_40,
    ageMin: 20,
    ageMax: 40,
    male: true,
  },
  {
    image: portrait_8_15,
    ageMin: 8,
    ageMax: 15,
    male: true,
  },
  {
    coteries: [nomCotHautsElfes],
    image: portrait_elfe_sournois20_50,
    ageMin: 20,
    ageMax: 50,
    male: true,
  },
  {
    coteries: [nomCotHautsElfes],
    image: portrait_elfe_20_50,
    ageMin: 20,
    ageMax: 50,
    male: true,
  },
  {
    coteries: [nomCotHautsElfes],
    image: portrait_elfe_50_plus_a,
    ageMin: 50,
    male: true,
  },
  {
    coteries: [nomCotHautsElfes],
    image: portrait_elfe_40_plus_c,
    ageMin: 40,
    male: true,
  },
  {
    coteries: [nomCotHautsElfes],
    image: portrait_elfe_40_plus,
    ageMin: 40,
    male: true,
  },
  {
    coteries: [nomCotHautsElfes],
    image: portrait_elfe_30_plus_b,
    ageMin: 30,
    male: true,
  },
  {
    coteries: [nomCotHautsElfes],
    image: portrait_elfe_30_plus,
    ageMin: 30,
    male: true,
  },
  {
    coteries: [nomCotHautsElfes],
    image: portrait_elfe_30_70_d,
    ageMin: 30,
    ageMax: 70,
    male: true,
  },
  {
    coteries: [nomCotHautsElfes],
    image: portrait_elfe_30_70_b,
    ageMin: 30,
    ageMax: 70,
    male: true,
  },
  {
    coteries: [nomCotHautsElfes],
    image: portrait_elfe_20_40_e,
    ageMin: 20,
    ageMax: 40,
    male: true,
  },
  {
    coteries: [nomCotHautsElfes],
    image: portrait_elfe_15_40_f,
    ageMin: 15,
    ageMax: 40,
    male: true,
  },
  {
    coteries: [nomCotHautsElfes],
    image: portrait_elfe_15_40_e,
    ageMin: 15,
    ageMax: 40,
    male: true,
  },
  {
    coteries: [nomCotHautsElfes],
    image: portrait_elfe_15_40_d,
    ageMin: 15,
    ageMax: 40,
    male: true,
  },
  {
    coteries: [nomCotHautsElfes],
    image: portrait_elfe_15_40_c,
    ageMin: 15,
    ageMax: 40,
    male: true,
  },
  {
    coteries: [nomCotHautsElfes],
    image: portrait_elfe_15_30,
    ageMin: 15,
    ageMax: 30,
    male: true,
  },
  {
    coteries: [nomCotHautsElfes],
    image: portrait_elfe_Fportrait_30_60,
    ageMin: 30,
    ageMax: 60,
    male: false,
  },
  {
    coteries: [nomCotHautsElfes],
    image: portrait_elfe_femme30_plus_d,
    ageMin: 30,
    male: false,
  },
  {
    coteries: [nomCotHautsElfes],
    image: portrait_elfe_femme30_plus_c,
    ageMin: 30,
    male: false,
  },
  {
    coteries: [nomCotHautsElfes],
    image: portrait_elfe_femme30_50,
    ageMin: 30,
    ageMax: 50,
    male: false,
  },
  {
    coteries: [nomCotHautsElfes],
    image: portrait_elfe_femme20_50_c,
    ageMin: 20,
    ageMax: 50,
    male: false,
  },
  {
    coteries: [nomCotHautsElfes],
    image: portrait_elfe_femme20_50_b,
    ageMin: 20,
    ageMax: 50,
    male: false,
  },
  {
    coteries: [nomCotHautsElfes],
    image: portrait_elfe_femme20_40_e,
    ageMin: 20,
    ageMax: 40,
    male: false,
  },
  {
    coteries: [nomCotHautsElfes],
    image: portrait_elfe_femme20_40_d,
    ageMin: 20,
    ageMax: 40,
    male: false,
  },
  {
    coteries: [nomCotHautsElfes],
    image: portrait_elfe_femme15_30_c,
    ageMin: 15,
    ageMax: 30,
    male: false,
  },
  {
    coteries: [nomCotHautsElfes],
    image: portrait_elfe_femme15_30_b,
    ageMin: 15,
    ageMax: 30,
    male: false,
  },
  {
    coteries: [nomCotElfesSylvains],
    image: portrait_elfe_sylvain_20_50_b,
    ageMin: 20,
    ageMax: 50,
    male: true,
  },
  {
    coteries: [nomCotElfesSylvains],
    image: portrait_elfe_sylvain_40_plus_b,
    ageMin: 40,
    male: true,
  },
  {
    coteries: [nomCotElfesSylvains],
    image: portrait_elfe_sylvain_40_60,
    ageMin: 40,
    ageMax: 60,
    male: true,
  },
  {
    coteries: [nomCotElfesSylvains],
    image: portrait_elfe_sylvain_30_50_c,
    ageMin: 30,
    ageMax: 50,
    male: true,
  },
  {
    coteries: [nomCotElfesSylvains],
    image: portrait_elfe_sylvain_30_50_d,
    ageMin: 30,
    ageMax: 50,
    male: true,
  },
  {
    coteries: [nomCotElfesSylvains],
    image: portrait_elfe_sylvain_20_40_i,
    ageMin: 20,
    ageMax: 40,
    male: true,
  },
  {
    coteries: [nomCotElfesSylvains],
    image: portrait_elfe_sylvain_20_40_h,
    ageMin: 20,
    ageMax: 40,
    male: true,
  },
  {
    coteries: [nomCotElfesSylvains],
    image: portrait_elfe_sylvain_20_40_g,
    ageMin: 20,
    ageMax: 40,
    male: true,
  },
  {
    coteries: [nomCotElfesSylvains],
    image: portrait_elfe_sylvain_20_40_f,
    ageMin: 20,
    ageMax: 40,
    male: true,
  },
  {
    coteries: [nomCotElfesSylvains],
    image: portrait_elfe_sylvain_20_40_d,
    ageMin: 20,
    ageMax: 40,
    male: true,
  },
  {
    coteries: [nomCotElfesSylvains],
    image: portrait_elfe_sylvain_15_30_c,
    ageMin: 15,
    ageMax: 30,
    male: true,
  },
  {
    coteries: [nomCotElfesSylvains],
    image: portrait_elfe_sylvain_15_30_b,
    ageMin: 15,
    ageMax: 30,
    male: true,
  },
  {
    coteries: [nomCotElfesSylvains],
    image: portrait_elfe_sylvain_15_30,
    ageMin: 15,
    ageMax: 30,
    male: true,
  },
  {
    coteries: [nomCotElfesSylvains],
    image: portrait_elfe_sylvain_femme50_plus,
    ageMin: 50,
    male: false,
  },
  {
    coteries: [nomCotElfesSylvains],
    image: portrait_elfe_sylvain_femme30_plus_b,
    ageMin: 30,
    male: false,
  },
  {
    coteries: [nomCotElfesSylvains],
    image: portrait_elfe_sylvain_femme30_plus_a,
    ageMin: 30,
    male: false,
  },
  {
    coteries: [nomCotElfesSylvains],
    image: portrait_elfe_sylvain_femme20_40_f,
    ageMin: 20,
    ageMax: 40,
    male: false,
  },
  {
    coteries: [nomCotElfesSylvains],
    image: portrait_elfe_sylvain_femme15_30_b,
    ageMin: 15,
    ageMax: 30,
    male: false,
  },
  {
    coteries: [nomCotElfesSylvains],
    image: portrait_elfe_sylvain_femme15_30,
    ageMin: 15,
    ageMax: 30,
    male: false,
  },
  {
    coteries: [nomCotElfesSylvains],
    image: portrait_elfe_sylvain_femme15_40,
    ageMin: 15,
    ageMax: 40,
    male: false,
  },
  {
    coteries: [nomCotConquistadors],
    image: portrait_conquistador_pretre_20_50,
    ageMin: 20,
    ageMax: 50,
    male: true,
  },
  {
    coteries: [nomCotConquistadors],
    image: portrait_conquistador_portrait_60_plus,
    ageMin: 60,
    male: true,
  },
  {
    coteries: [nomCotConquistadors],
    image: portrait_conquistador_portrait_50_plus_b,
    ageMin: 50,
    male: true,
  },
  {
    coteries: [nomCotConquistadors],
    image: portrait_conquistador_portrait_50_plus,
    ageMin: 50,
    male: true,
  },
  {
    coteries: [nomCotConquistadors],
    image: portrait_conquistador_portrait_40_plus,
    ageMin: 40,
    male: true,
  },
  {
    coteries: [nomCotConquistadors],
    image: portrait_conquistador_portrait_30_60,
    ageMin: 30,
    ageMax: 60,
    male: true,
  },
  {
    coteries: [nomCotConquistadors],
    image: portrait_conquistador_portrait_20_50_f,
    ageMin: 20,
    ageMax: 50,
    male: true,
  },
  {
    coteries: [nomCotConquistadors],
    image: portrait_conquistador_portrait_20_50_e,
    ageMin: 20,
    ageMax: 50,
    male: true,
  },
  {
    coteries: [nomCotConquistadors],
    image: portrait_conquistador_portrait_20_50_d,
    ageMin: 20,
    ageMax: 50,
    male: true,
  },
  {
    coteries: [nomCotConquistadors],
    image: portrait_conquistador_portrait_20_50_c,
    ageMin: 20,
    ageMax: 50,
    male: true,
  },
  {
    coteries: [nomCotConquistadors],
    image: portrait_conquistador_portrait_20_50_b,
    ageMin: 20,
    ageMax: 50,
    male: true,
  },
  {
    coteries: [nomCotConquistadors],
    image: portrait_conquistador_portrait_20_50,
    ageMin: 20,
    ageMax: 50,
    male: true,
  },
  {
    coteries: [nomCotConquistadors],
    image: portrait_conquistador_portrait_20_40_b,
    ageMin: 20,
    ageMax: 40,
    male: true,
  },
  {
    coteries: [nomCotConquistadors],
    image: portrait_conquistador_portrait_20_40,
    ageMin: 20,
    ageMax: 40,
    male: true,
  },
  {
    coteries: [nomCotConquistadors],
    image: portrait_conquistador_portrait_15_40_c,
    ageMin: 15,
    ageMax: 40,
    male: true,
  },
  {
    coteries: [nomCotConquistadors],
    image: portrait_conquistador_portrait_15_40_b,
    ageMin: 15,
    ageMax: 40,
    male: true,
  },
  {
    coteries: [nomCotConquistadors],
    image: portrait_conquistador_portrait_15_40,
    ageMin: 15,
    ageMax: 40,
    male: true,
  },
  {
    coteries: [nomCotConquistadors],
    image: portrait_conquistador_femme50_plus,
    ageMin: 50,
    male: false,
  },
  {
    coteries: [nomCotConquistadors],
    image: portrait_conquistador_femme40_plus,
    ageMin: 40,
    male: false,
  },
  {
    coteries: [nomCotConquistadors],
    image: portrait_conquistador_femme30_50,
    ageMin: 30,
    ageMax: 50,
    male: false,
  },
  {
    coteries: [nomCotConquistadors],
    image: portrait_conquistador_femme20_45,
    ageMin: 20,
    ageMax: 45,
    male: false,
  },
  {
    coteries: [nomCotConquistadors],
    image: portrait_conquistador_femme20_35,
    ageMin: 20,
    ageMax: 35,
    male: false,
  },
  {
    coteries: [nomCotConquistadors],
    image: portrait_conquistador_femme15_35,
    ageMin: 15,
    ageMax: 35,
    male: false,
  },
  {
    coteries: [nomCotConquistadors],
    image: portrait_conquistador_femme15_35_b,
    ageMin: 15,
    ageMax: 35,
    male: false,
  },
  {
    coteries: [nomCotConquistadors],
    image: portrait_conquistador_femme15_35_c,
    ageMin: 15,
    ageMax: 35,
    male: false,
  },
  {
    coteries: [nomCotConquistadors],
    image: portrait_conquistador_femme15_35_d,
    ageMin: 15,
    ageMax: 35,
    male: false,
  },
  {
    coteries: [nomCotConquistadors],
    image: portrait_conquistador_femme15_35_e,
    ageMin: 15,
    ageMax: 35,
    male: false,
  },
  {
    coteries: [nomCotConquistadors],
    image: portrait_conquistador_femme15_35_f,
    ageMin: 15,
    ageMax: 35,
    male: false,
  },
  {
    coteries: [nomCotConquistadors],
    image: portrait_conquistador_20_50_b,
    ageMin: 20,
    ageMax: 50,
    male: true,
  },
  {
    coteries: [nomCotConquistadors],
    image: portrait_conquistador_25_60,
    ageMin: 25,
    ageMax: 60,
    male: true,
  },
]
