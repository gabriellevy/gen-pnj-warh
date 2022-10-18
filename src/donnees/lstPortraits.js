import { nomCotBretonniens } from './lstCoteries'
import { nomCotEstalie } from './lstCoteries'
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
import portrait_elfe_sylvain_f_15_30_c from './img/elfes_sylvains/portraits/f_15-30_c.jpg'

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
import portrait_nain_40_plus from './img/nains/portraits/40_plus.jpg'
import portrait_nain_60_plus_tueur from './img/nains/portraits/60_plus_tueur.jpg'
import portrait_nain_35_plus_tueur from './img/nains/portraits/35_plus_tueur.jpg'
import portrait_nain_140_plus from './img/nains/portraits/140_plus.jpg'
import portrait_nain_25_100_f_tueur from './img/nains/portraits/25_plus_f_tueur.jpg'
import portrait_nain_50_plus_ingenieur from './img/nains/portraits/50_plus_ingenieur.jpg'
import portrait_nain_40_plus_soldat from './img/nains/portraits/40_plus_soldat.jpg'
import portrait_nain_60_plus_chasseur from './img/nains/portraits/60_plus_chasseur.jpg'
import portrait_nain_40_150_eclaireuse from './img/nains/portraits/40_150_eclaireuse.jpg'
import portrait_nain_40_150_eclaireur from './img/nains/portraits/40_150_eclaireur.jpg'
import portrait_nain_50_150_f from './img/nains/portraits/50_150_f.jpg'
import portrait_nain_25_90_f_colporteur from './img/nains/portraits/25_90_f_colporteur.jpg'
import portrait_nain_40_180_mineur from './img/nains/portraits/40_180_mineur.jpg'
import portrait_nain_80_200 from './img/nains/portraits/80_200.jpg'
import portrait_nain_120_plus_bourgeois from './img/nains/portraits/120_plus_bourgeois.jpg'
import portrait_nain_40_150_recelleur from './img/nains/portraits/40_150_recelleur.jpg'
import portrait_nain_40_150_chasseuse from './img/nains/portraits/40_150_chasseuse.jpg'
import portrait_nain_50_150 from './img/nains/portraits/50_150.jpg'
import portrait_nain_110_plus_eclaireuse from './img/nains/portraits/110_plus_eclaireuse.jpg'
import portrait_nain_200_plus_f from './img/nains/portraits/200_plus_f.jpg'
import portrait_nain_200_plus from './img/nains/portraits/200_plus.jpg'
import portrait_nain_35_100_f_ruraux from './img/nains/portraits/35_100_f_ruraux.jpg'
import portrait_nain_300_plus_f from './img/nains/portraits/300_plus_f.jpg'
import portrait_nain_40_190_saltimbanque from './img/nains/portraits/40_190_saltimbanque.jpg'
import portrait_nain_120_plus_mineur from './img/nains/portraits/120_plus_mineur.jpg'
import portrait_nain_40_180_saltimbanque from './img/nains/portraits/40_180_saltimbanque.jpg'
import portrait_nain_50_160 from './img/nains/portraits/50_160.jpg'
import portrait_nain_70_plus_tueur from './img/nains/portraits/70_plus_tueur.jpg'
import portrait_nain_40_130_gladiateur from './img/nains/portraits/40_130_gladiateur.jpg'
import portrait_nain_100_250 from './img/nains/portraits/100_250.jpg'
import portrait_nain_20_45_ingenieure from './img/nains/portraits/20_45_ingenieure.jpg'
import portrait_nain_40_110_chasseur from './img/nains/portraits/40_110_chasseur.jpg'
import portrait_nain_80_duelliste from './img/nains/portraits/80_duelliste.jpg'
import portrait_nain_80_plus_tueur from './img/nains/portraits/80_plus_tueur.jpg'
import portrait_nain_15_60_f from './img/nains/portraits/15_60_f.jpg'
import portrait_nain_15_60_artisane from './img/nains/portraits/15_60_artisane.jpg'
import portrait_nain_320_plus_f from './img/nains/portraits/320_plus_f.jpg'
import portrait_nain_50_160_rural from './img/nains/portraits/50_160_rural.jpg'
import portrait_nain_200_plus_soldat from './img/nains/portraits/200_plus_soldat.jpg'
import portrait_nain_200_plus_rurale from './img/nains/portraits/200_plus_rurale.jpg'
import portrait_nain_200_plus_noble from './img/nains/portraits/200_plus_noble.jpg'
import portrait_nain_150_plus_receleur from './img/nains/portraits/150_plus_receleur.jpg'
import portrait_nain_20_50_soldate from './img/nains/portraits/20_50_soldate.jpg'
import portrait_nain_300_plus_f_2 from './img/nains/portraits/300_plus_f_2.jpg'
import portrait_nain_40_150_tueur from './img/nains/portraits/40_150_tueur.jpg'
import portrait_nain_40_200_citadin from './img/nains/portraits/40_200_citadin.jpg'
import portrait_nain_25_90_artisane from './img/nains/portraits/25_90_artisane.jpg'
import portrait_nain_35_130_nautonniere from './img/nains/portraits/35_130_nautonniere.jpg'
import portrait_nain_45_190_ingenieur from './img/nains/portraits/45_190_ingenieur.jpg'
import portrait_nain_25_95_eclaireur from './img/nains/portraits/25_95_eclaireur.jpg'
import portrait_nain_30_180_mineur from './img/nains/portraits/30_180_mineur.jpg'
import portrait_nain_60_200_bourgeois from './img/nains/portraits/60_200_bourgeois.jpg'
import portrait_nain_80_200_guerrier from './img/nains/portraits/80_200_guerrier.jpg'

import portrait_halfelin_30_85 from './img/halfelins/portraits/30_85.jpg'
import portrait_halfelin_45_100 from './img/halfelins/portraits/45_100.jpg'
import portrait_halfelin_artisan_45_120 from './img/halfelins/portraits/artisan_45_120.jpg'
import portrait_halfelin_saltimbanque_20_90 from './img/halfelins/portraits/saltimbanque_20_90.jpg'
import portrait_halfelin_chasseurDePrimes_40_90 from './img/halfelins/portraits/chasseurDePrimes_40_90.jpg'
import portrait_halfelin_courtisan_40_100 from './img/halfelins/portraits/courtisan_40_100.jpg'
import portrait_halfelin_courtisan_40_100_b from './img/halfelins/portraits/courtisan_40_100_b.jpg'
import portrait_halfelin_saltimbanque_f_40_100 from './img/halfelins/portraits/saltimbanque_f_40_100.jpg'
import portrait_halfelin_guerrier_40_120 from './img/halfelins/portraits/guerrier_40_120.jpg'
import portrait_halfelin_serviteur_40_160 from './img/halfelins/portraits/serviteur_40_160.jpg'
import portrait_halfelin_cocher_40_90 from './img/halfelins/portraits/cocher_40_90.jpg'
import portrait_halfelin_saltimbanque_f_80_200 from './img/halfelins/portraits/saltimbanque_f_80_200.jpg'
import portrait_halfelin_citadins_70_130 from './img/halfelins/portraits/citadins_70_130.jpg'
import portrait_halfelin_voleur_70_140 from './img/halfelins/portraits/voleur_70_140.jpg'
import portrait_halfelin_eclaireur_70_120 from './img/halfelins/portraits/eclaireur_70_120.jpg'
import portrait_halfelin_cuisinier_70_130 from './img/halfelins/portraits/cuisinier_70_130.jpg'
import portrait_halfelin_courtisan_90_180 from './img/halfelins/portraits/courtisan_90_180.jpg'
import portrait_halfelin_colporteuse_70_150 from './img/halfelins/portraits/colporteuse_70_150.jpg'
import portrait_halfelin_messager_60_110 from './img/halfelins/portraits/messager_60_110.jpg'
import portrait_halfelin_citadine_35_100 from './img/halfelins/portraits/citadine_35_100.jpg'
import portrait_halfelin_rural_40_120 from './img/halfelins/portraits/rural_40_120.jpg'
import portrait_halfelin_gladiateur_40_110 from './img/halfelins/portraits/gladiateur_40_110.jpg'
import portrait_halfelin_juriste_40_110 from './img/halfelins/portraits/juriste_40_110.jpg'
import portrait_halfelin_eclaireur_90_160 from './img/halfelins/portraits/eclaireur_90_160.jpg'
import portrait_halfelin_ruraux_20_90 from './img/halfelins/portraits/ruraux_20_90.jpg'
import portrait_halfelin_roublard_75_100 from './img/halfelins/portraits/roublard_75_100.jpg'
import portrait_halfelin_citadin_40_120 from './img/halfelins/portraits/citadin_40_120.jpg'
import portrait_halfelin_ruraux_90_200 from './img/halfelins/portraits/ruraux_90_200.jpg'
import portrait_halfelin_colporteur_65_110 from './img/halfelins/portraits/colporteur_65_110.jpg'
import portrait_halfelin_colporteur_65_140 from './img/halfelins/portraits/colporteur_65_140.jpg'
import portrait_halfelin_guerriere_30_85 from './img/halfelins/portraits/guerriere_30_85.jpg'
import portrait_halfelin_55_120 from './img/halfelins/portraits/55_120.jpg'
import portrait_halfelin_serviteuse_80_120 from './img/halfelins/portraits/serviteuse_80_120.jpg'

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
import portrait_empire30_plus_garde from './img/empire/portraits/30_plus_garde.jpg'
import portrait_empire15_45_f_artisan from './img/empire/portraits/15_45_f_artisan.jpg'
import portrait_empire25_60_f_herboriste from './img/empire/portraits/25_60_f_herboriste.jpg'
import portrait_empire30_60_spadassin from './img/empire/portraits/30_60_spadassin.jpg'
import portrait_empire20_45_flagellant from './img/empire/portraits/20_45_flagellant.jpg'
import portrait_empire20_45_mineuse from './img/empire/portraits/20_45_mineuse.jpg'
import portrait_empire20_45_f_juriste from './img/empire/portraits/20_45_f_juriste.jpg'
import portrait_empire20_50_chasseur_de_primes from './img/empire/portraits/20_50_chasseur_de_primes.jpg'
import portrait_empire20_40_bourgeoise from './img/empire/portraits/20_40_bourgeoise.jpg'
import portrait_empire15_40_bourgeoise from './img/empire/portraits/15_40_bourgeoise.jpg'
import portrait_empire50_plus_patrouilleurFluvial from './img/empire/portraits/50_plus_patrouilleurFluvial.jpg'
import portrait_empire30_60_garde from './img/empire/portraits/30_60_garde.jpg'
import portrait_empire20_45_roublard from './img/empire/portraits/20_45_roublard.jpg'
import portrait_empire15_30_bourgeoise from './img/empire/portraits/15_30_bourgeoise.jpg'
import portrait_empire30_50_duelliste from './img/empire/portraits/30_50_duelliste.jpg'
import portrait_empire30_50_soldat from './img/empire/portraits/30_50_soldat.jpg'
import portrait_empire45_plus_chevalier from './img/empire/portraits/45_plus_chevalier.jpg'
import portrait_empire30_55_emissaire from './img/empire/portraits/30_55_emissaire.jpg'
import portrait_empire40_60_noble from './img/empire/portraits/40_60_noble.jpg'
import portrait_empire40_75_guerrier from './img/empire/portraits/40_75_guerrier.jpg'
import portrait_empire15_35_villageoise_2 from './img/empire/portraits/15_35_villageoise_2.jpg'
import portrait_empire15_35_f_saltimbanque from './img/empire/portraits/15_35_f_saltimbanque.jpg'
import portrait_empire20_45_f_saltimbanque from './img/empire/portraits/20_45_f_saltimbanque.jpg'
import portrait_empire25_45_enqueteur from './img/empire/portraits/25_45_enqueteur.jpg'
import portrait_empire25_50_artisan from './img/empire/portraits/25_50_artisan.jpg'
import portrait_empire30_60_colporteur from './img/empire/portraits/30_60_colporteur.jpg'
import portrait_empire25_50_villageois from './img/empire/portraits/25_50_villageois.jpg'
import portrait_empire30_60_ranconneur from './img/empire/portraits/30_60_ranconneur.jpg'
import portrait_empire20_40_spadassin from './img/empire/portraits/20_40_spadassin.jpg'
import portrait_empire30_60_intendant from './img/empire/portraits/30_60_intendant.jpg'
import portrait_empire30_plus_pilleuseTombe from './img/empire/portraits/30_plus_pilleuseTombe.jpg'
import portrait_empire20_40_chasseusePrimes from './img/empire/portraits/20_40_chasseusePrimes.jpg'
import portrait_empire30_55_naufrageur from './img/empire/portraits/30_55_naufrageur.jpg'
import portrait_empire30_55_conseiller from './img/empire/portraits/30_55_conseiller.jpg'
import portrait_empire20_50_f_saltimbanque from './img/empire/portraits/20_50_f_saltimbanque.jpg'
import portrait_empire20_50_voleur from './img/empire/portraits/20_50_voleur.jpg'
import portrait_empire30_70_charlatan from './img/empire/portraits/30_70_charlatan.jpg'
import portrait_empire40_70_charlatane from './img/empire/portraits/40_70_charlatane.jpg'
import portrait_empire16_35_sorcierDissident from './img/empire/portraits/16_35_sorcierDissident.jpg'
import portrait_empire25_40_bailli from './img/empire/portraits/25_40_bailli.jpg'
import portrait_empire25_45_soldat from './img/empire/portraits/25_45_soldat.jpg'
import portrait_empire30_plus_mendiant from './img/empire/portraits/30_plus_mendiant.jpg'
import portrait_empire20_40_patrouilleurRoutier from './img/empire/portraits/20_40_patrouilleurRoutier.jpg'
import portrait_empire15_35_serviteuse from './img/empire/portraits/15_35_serviteuse.jpg'
import portrait_empire55_plus_pretre from './img/empire/portraits/55_plus_pretre.jpg'
import portrait_empire15_45_chasseusePrimes from './img/empire/portraits/15_45_chasseusePrimes.jpg'
import portrait_empire40_70_contrebandiere from './img/empire/portraits/40_70_contrebandiere.jpg'
import portrait_empire25_45_entremetteur from './img/empire/portraits/25_45_entremetteur.jpg'
import portrait_empire35_60_noble from './img/empire/portraits/35_60_noble.jpg'
import portrait_empire25_45_soldate from './img/empire/portraits/25_45_soldate.jpg'
import portrait_empire25_45_charlatan from './img/empire/portraits/25_45_charlatan.jpg'
import portrait_empire35_70_sorcierVillage from './img/empire/portraits/35_70_sorcierVillage.jpg'
import portrait_empire35_60_f_medecin from './img/empire/portraits/35_60_f_medecin.jpg'
import portrait_empire20_50_ranconneuse from './img/empire/portraits/20_50_ranconneuse.jpg'
import portrait_empire45_80_cavalier from './img/empire/portraits/45_80_cavalier.jpg'
import portrait_empire45_80_enqueteur from './img/empire/portraits/45_80_enqueteur.jpg'
import portrait_empire30_50_entremetteur from './img/empire/portraits/30_50_entremetteur.jpg'
import portrait_empire15_40_citadine from './img/empire/portraits/15_40_citadine.jpg'
import portrait_empire15_40_guerriere from './img/empire/portraits/15_40_guerrière.jpg'
import portrait_empire60_plus_roublard from './img/empire/portraits/60_plus_roublard.jpg'
import portrait_empire30_60_cavalier from './img/empire/portraits/30_60_cavalier.jpg'
import portrait_empire50_plus from './img/empire/portraits/50_plus.jpg'
import portrait_empire25_40_agitateur from './img/empire/portraits/25_40_agitateur.jpg'
import portrait_empire60_plus_milicien from './img/empire/portraits/60_plus_milicien.jpg'
import portrait_empire35_60_guerrier from './img/empire/portraits/35_60_guerrier.jpg'
import portrait_empire25_55_courtisan from './img/empire/portraits/25_55_courtisan.jpg'
import portrait_empire20_40_saltimbanque from './img/empire/portraits/20_40_saltimbanque.jpg'
import portrait_empire15_35_chevaliere from './img/empire/portraits/15_35_chevaliere.jpg'
import portrait_empire30_50_charlatan from './img/empire/portraits/30_50_charlatan.jpg'
import portrait_empire30_60_espion from './img/empire/portraits/30_60_espion.jpg'
import portrait_empire15_35_espionne from './img/empire/portraits/15_35_espionne.jpg'
import portrait_empire30_60_cocher from './img/empire/portraits/30_60_cocher.jpg'
import portrait_empire15_25_lettres from './img/empire/portraits/15_25_lettres.jpg'
import portrait_empire50_plus_entremetteur from './img/empire/portraits/50_plus_entremetteur.jpg'
import portrait_empire35_65_f_bailli from './img/empire/portraits/35_65_f_bailli.jpg'
import portrait_empire50_plus_erudit_2 from './img/empire/portraits/50_plus_erudit.jpg'
import portrait_empire50_plus_citadin from './img/empire/portraits/50_plus_citadin.jpg'
import portrait_empire15_35_artiste from './img/empire/portraits/15_35_artiste.jpg'
import portrait_empire40_60_spadassin from './img/empire/portraits/40_60_spadassin.jpg'
import portrait_empire45_plus_villageoise from './img/empire/portraits/45_plus_villageoise.jpg'
import portrait_empire45_plus_villageois from './img/empire/portraits/45_plus_villageois.jpg'
import portrait_empire15_35_noble from './img/empire/portraits/15_35_noble.jpg'
import portrait_empire45_plus_bailli from './img/empire/portraits/45_plus_bailli.jpg'
import portrait_empire25_45_bourgeoise from './img/empire/portraits/25_45_bourgeoise.jpg'
import portrait_empire35_60_gladiateur from './img/empire/portraits/35_60_gladiateur.jpg'
import portrait_empire50_plus_cocher from './img/empire/portraits/50_plus_cocher.jpg'
import portrait_empire15_25_villageoise from './img/empire/portraits/15_25_villageoise.jpg'
import portrait_empire20_40_chasseurDePrimes from './img/empire/portraits/20_40_chasseurDePrimes.jpg'
import portrait_empire50_plus_batelier from './img/empire/portraits/50_plus_batelier.jpg'
import portrait_empire20_40_nonne from './img/empire/portraits/20_40_nonne.jpg'
import portrait_empire30_60_pretreGuerrier from './img/empire/portraits/30_60_pretreGuerrier.jpg'
import portrait_empire20_55_mendiant from './img/empire/portraits/20_55_mendiant.jpg'
import portrait_empire40_65_pilleurDeTombe from './img/empire/portraits/40_65_pilleurDeTombe.jpg'
import portrait_empire50_plus_pretre from './img/empire/portraits/50_plus_pretre.jpg'
import portrait_empire50_plus_f_mystique from './img/empire/portraits/50_plus_f_mystique.jpg'
import portrait_empire20_35_f_duelliste from './img/empire/portraits/20_35_f_duelliste.jpg'
import portrait_empire55_plus_soldat from './img/empire/portraits/55_plus_soldat.jpg'
import portrait_empire20_40_villageoise from './img/empire/portraits/20_40_villageoise.jpg'
import portrait_empire25_50_soldat from './img/empire/portraits/25_50_soldat.jpg'
import portrait_empire30_55_milicien from './img/empire/portraits/30_55_milicien.jpg'
import portrait_empire55_plus_pretreGuerrier from './img/empire/portraits/55_plus_pretreGuerrier.jpg'
import portrait_empire25_45_repurgateur from './img/empire/portraits/25_45_repurgateur.jpg'
import portrait_empire55_plus_ingenieur from './img/empire/portraits/55_plus_ingenieur.jpg'
import portrait_empire20_60_magicienne_feu from './img/empire/portraits/20_60_magicienne_feu.jpg'
import portrait_empire20_45_roublard_b from './img/empire/portraits/20_45_roublard_b.jpg'
import portrait_empire15_plus_medecin from './img/empire/portraits/15_plus_medecin.jpg'
import portrait_empire40_plus_repurgateur from './img/empire/portraits/40_plus_repurgateur.jpg'
import portrait_empire40_plus_magicien_cieux from './img/empire/portraits/40_plus_magicien_cieux.jpg'
import portrait_empire40_plus_marchand_emissaire from './img/empire/portraits/40_plus_marchand_emissaire.jpg'
import portrait_empire28_60_debardeur from './img/empire/portraits/28_60_debardeur.jpg'
import portrait_empire30_50_guerrier from './img/empire/portraits/30_50_guerrier.jpg'
import portrait_empire40_plus_magicien_lumiere from './img/empire/portraits/40_plus_magicien_lumiere.jpg'
import portrait_empire40_plus_noble_duelliste from './img/empire/portraits/40_plus_noble_duelliste.jpg'
import portrait_empire40_plus_noble_emissaire from './img/empire/portraits/40_plus_noble_emissaire.jpg'
import portrait_empire25_60_magicien_feu from './img/empire/portraits/25_60_magicien_feu.jpg'
import portrait_empire25_60_magicien from './img/empire/portraits/25_60_magicien.jpg'
import portrait_empire25_60_magicien_bete from './img/empire/portraits/25_60_magicien_bete.jpg'
import portrait_empire25_60_magicien_mort from './img/empire/portraits/25_60_magicien_mort.jpg'
import portrait_empire35_plus_magicien_metal from './img/empire/portraits/25_60_magicien_metal.jpg'
import portrait_empire50_plus_lettre from './img/empire/portraits/50_plus_lettre.jpg'
import portrait_empire50_plus_chevalier from './img/empire/portraits/50_plus_chevalier.jpg'
import portrait_empire50_plus_sorcier_dissident from './img/empire/portraits/50_plus_sorcier_dissident.jpg'
import portrait_empire40_plus_pretre_guerrier from './img/empire/portraits/40_plus_pretre_guerrier.jpg'
import portrait_empire20_45_riveraine from './img/empire/portraits/20_45_riveraine.jpg'
import portrait_empire30_55_chasseur_primes from './img/empire/portraits/30_55_chasseur_primes.jpg'
import portrait_empire18_40_marchande from './img/empire/portraits/18_40_marchande.jpg'
import portrait_empire30_55_guerrier from './img/empire/portraits/30_55_guerrier.jpg'
import portrait_empire30_65_roublard from './img/empire/portraits/30_65_roublard.jpg'
import portrait_empire30_45_bailli from './img/empire/portraits/30_45_bailli.jpg'
import portrait_empire30_45_itinerant from './img/empire/portraits/30_45_itinerant.jpg'
import portrait_empire30_45_horslaloi from './img/empire/portraits/30_45_horslaloi.jpg'

export const lstPortraits = [
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire30_45_horslaloi,
    ageMin: 30,
    ageMax: 45,
    carrieres: [
      nomHorsLaLoi,
      nomPilleurDeTombes,
      nomRanconneur,
      nomContrebandier,
      nomFemmeDuFleuve,
      nomNautonnier,
      nomCocher,
      nomAgitateur,
    ],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire30_45_itinerant,
    ageMin: 30,
    ageMax: 45,
    carrieres: [],
    classes: [nomItinerants],
    male: true,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire30_45_bailli,
    ageMin: 30,
    ageMax: 45,
    carrieres: [nomBailli],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire30_65_roublard,
    ageMin: 30,
    ageMax: 65,
    carrieres: [],
    classes: [nomRoublards],
    male: true,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire30_55_guerrier,
    ageMin: 30,
    ageMax: 55,
    carrieres: [],
    classes: [nomGuerriers],
    male: true,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire18_40_marchande,
    ageMin: 18,
    ageMax: 40,
    carrieres: [nomMarchand],
    classes: [],
    male: false,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire30_55_chasseur_primes,
    ageMin: 30,
    ageMax: 55,
    carrieres: [nomChasseurDePrimes],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire20_45_riveraine,
    ageMin: 20,
    ageMax: 45,
    carrieres: [],
    classes: [nomRiverains],
    male: false,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire40_plus_pretre_guerrier,
    ageMin: 40,
    carrieres: [nomPretreGuerrier],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire50_plus_sorcier_dissident,
    ageMin: 50,
    carrieres: [nomSorcierDissident],
    classes: [],
    male: false,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire50_plus_chevalier,
    ageMin: 50,
    carrieres: [nomChevalier],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire50_plus_lettre,
    ageMin: 50,
    carrieres: [nomLettres, nomIngenieur],
    classes: [],
    male: false,
  },
  {
    coteries: [nomCotEmpire],
    image: portrait_empire35_plus_magicien_metal,
    ageMin: 35,
    carrieres: [nomSorcier],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotEmpire],
    image: portrait_empire25_60_magicien_mort,
    ageMin: 25,
    ageMax: 60,
    carrieres: [nomSorcier],
    classes: [],
    male: false,
  },
  {
    coteries: [nomCotEmpire],
    image: portrait_empire25_60_magicien_bete,
    ageMin: 25,
    ageMax: 60,
    carrieres: [nomSorcier],
    classes: [],
    male: false,
  },
  {
    coteries: [nomCotEmpire],
    image: portrait_empire25_60_magicien,
    ageMin: 25,
    ageMax: 60,
    carrieres: [nomSorcier],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotEmpire],
    image: portrait_empire25_60_magicien_feu,
    ageMin: 25,
    ageMax: 60,
    carrieres: [nomSorcier],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotEmpire, nomCotKislevites],
    image: portrait_empire40_plus_noble_emissaire,
    ageMin: 40,
    carrieres: [nomNoble, nomEmissaire],
    classes: [nomCourtisans],
    male: true,
  },
  {
    coteries: [nomCotEmpire, nomCotKislevites],
    image: portrait_empire40_plus_noble_duelliste,
    ageMin: 40,
    carrieres: [nomNoble, nomEmissaire, nomDuelliste],
    classes: [nomCourtisans],
    male: true,
  },
  {
    coteries: [nomCotEmpire],
    image: portrait_empire40_plus_magicien_lumiere,
    ageMin: 40,
    carrieres: [nomSorcier],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire30_50_guerrier,
    ageMin: 30,
    ageMax: 50,
    carrieres: [],
    classes: [nomGuerriers],
    male: true,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire28_60_debardeur,
    ageMin: 28,
    ageMax: 60,
    carrieres: [nomDebardeur],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire40_plus_marchand_emissaire,
    ageMin: 40,
    carrieres: [nomMarchand, nomEmissaire],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotEmpire],
    image: portrait_empire40_plus_magicien_cieux,
    ageMin: 40,
    carrieres: [nomSorcier],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire40_plus_repurgateur,
    ageMin: 40,
    carrieres: [nomRepurgateur],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire15_plus_medecin,
    ageMin: 15,
    carrieres: [nomMedecin],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire20_45_roublard_b,
    ageMin: 20,
    ageMax: 45,
    carrieres: [],
    classes: [nomRoublards],
    male: true,
  },
  {
    coteries: [nomCotEmpire],
    image: portrait_empire20_60_magicienne_feu,
    ageMin: 20,
    ageMax: 60,
    carrieres: [nomSorcier],
    classes: [],
    male: false,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire55_plus_ingenieur,
    ageMin: 55,
    carrieres: [nomIngenieur],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire25_45_repurgateur,
    ageMin: 25,
    ageMax: 45,
    carrieres: [nomRepurgateur, nomChasseurDePrimes],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotHalfelins],
    image: portrait_halfelin_serviteuse_80_120,
    ageMin: 80,
    ageMax: 120,
    carrieres: [nomServiteur, nomVillageois],
    classes: [],
    male: false,
  },
  {
    coteries: [nomCotHalfelins],
    image: portrait_halfelin_55_120,
    ageMin: 55,
    ageMax: 120,
    carrieres: [],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotHalfelins],
    image: portrait_halfelin_guerriere_30_85,
    ageMin: 30,
    ageMax: 85,
    carrieres: [],
    classes: [nomGuerriers],
    male: false,
  },
  {
    coteries: [nomCotHalfelins],
    image: portrait_halfelin_colporteur_65_140,
    ageMin: 65,
    ageMax: 140,
    carrieres: [nomColporteur],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotHalfelins],
    image: portrait_halfelin_colporteur_65_110,
    ageMin: 65,
    ageMax: 110,
    carrieres: [nomColporteur],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotHalfelins],
    image: portrait_halfelin_ruraux_90_200,
    ageMin: 90,
    ageMax: 200,
    carrieres: [],
    classes: [nomRuraux],
    male: true,
  },
  {
    coteries: [nomCotHalfelins],
    image: portrait_halfelin_citadin_40_120,
    ageMin: 40,
    ageMax: 120,
    carrieres: [],
    classes: [nomCitadins],
    male: true,
  },
  {
    coteries: [nomCotHalfelins],
    image: portrait_halfelin_roublard_75_100,
    ageMin: 70,
    ageMax: 100,
    carrieres: [],
    classes: [nomRoublards],
    male: true,
  },
  {
    coteries: [nomCotHalfelins],
    image: portrait_halfelin_ruraux_20_90,
    ageMin: 20,
    ageMax: 90,
    carrieres: [],
    classes: [nomRuraux],
    male: true,
  },
  {
    coteries: [nomCotHalfelins],
    image: portrait_halfelin_juriste_40_110,
    ageMin: 40,
    ageMax: 110,
    carrieres: [nomJuriste],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotHalfelins],
    image: portrait_halfelin_gladiateur_40_110,
    ageMin: 40,
    ageMax: 110,
    carrieres: [nomGladiateur],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotHalfelins],
    image: portrait_halfelin_rural_40_120,
    ageMin: 40,
    ageMax: 120,
    carrieres: [],
    classes: [nomRuraux],
    male: true,
  },
  {
    coteries: [nomCotHalfelins],
    image: portrait_halfelin_citadine_35_100,
    ageMin: 35,
    ageMax: 100,
    carrieres: [],
    classes: [nomCitadins, nomRoublards],
    male: true,
  },
  {
    coteries: [nomCotHalfelins],
    image: portrait_halfelin_messager_60_110,
    ageMin: 60,
    ageMax: 110,
    carrieres: [nomMessager],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotHalfelins],
    image: portrait_halfelin_colporteuse_70_150,
    ageMin: 70,
    ageMax: 150,
    carrieres: [nomColporteur],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotHalfelins],
    image: portrait_halfelin_courtisan_90_180,
    ageMin: 90,
    ageMax: 180,
    carrieres: [],
    classes: [nomCourtisans],
    male: true,
  },
  {
    coteries: [nomCotHalfelins],
    image: portrait_halfelin_cuisinier_70_130,
    ageMin: 70,
    ageMax: 130,
    carrieres: [nomBourgeois],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotHalfelins],
    image: portrait_halfelin_eclaireur_70_120,
    ageMin: 70,
    ageMax: 120,
    carrieres: [nomEclaireur, nomChasseur],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotHalfelins],
    image: portrait_halfelin_eclaireur_90_160,
    ageMin: 90,
    ageMax: 160,
    carrieres: [nomEclaireur, nomChasseur],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotHalfelins],
    image: portrait_halfelin_voleur_70_140,
    ageMin: 70,
    ageMax: 140,
    carrieres: [],
    classes: [nomRoublards],
    male: true,
  },
  {
    coteries: [nomCotHalfelins],
    image: portrait_halfelin_citadins_70_130,
    ageMin: 70,
    ageMax: 130,
    carrieres: [],
    classes: [nomCitadins],
    male: true,
  },
  {
    coteries: [nomCotHalfelins],
    image: portrait_halfelin_saltimbanque_f_80_200,
    ageMin: 80,
    ageMax: 200,
    carrieres: [nomSaltimbanque],
    classes: [],
    male: false,
  },
  {
    coteries: [nomCotHalfelins],
    image: portrait_halfelin_cocher_40_90,
    ageMin: 40,
    ageMax: 90,
    carrieres: [nomCocher, nomColporteur],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotHalfelins],
    image: portrait_halfelin_serviteur_40_160,
    ageMin: 40,
    ageMax: 160,
    carrieres: [nomServiteur, nomVillageois],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotHalfelins],
    image: portrait_halfelin_guerrier_40_120,
    ageMin: 40,
    ageMax: 120,
    carrieres: [],
    classes: [nomGuerriers],
    male: true,
  },
  {
    coteries: [nomCotHalfelins],
    image: portrait_halfelin_saltimbanque_f_40_100,
    ageMin: 40,
    ageMax: 100,
    carrieres: [nomSaltimbanque],
    classes: [],
    male: false,
  },
  {
    coteries: [nomCotHalfelins],
    image: portrait_halfelin_courtisan_40_100,
    ageMin: 40,
    ageMax: 100,
    carrieres: [],
    classes: [nomCourtisans],
    male: true,
  },
  {
    coteries: [nomCotHalfelins],
    image: portrait_halfelin_courtisan_40_100_b,
    ageMin: 40,
    ageMax: 100,
    carrieres: [],
    classes: [nomCourtisans],
    male: true,
  },
  {
    coteries: [nomCotHalfelins],
    image: portrait_halfelin_chasseurDePrimes_40_90,
    ageMin: 40,
    ageMax: 90,
    carrieres: [nomChasseurDePrimes],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotHalfelins],
    image: portrait_halfelin_saltimbanque_20_90,
    ageMin: 20,
    ageMax: 90,
    carrieres: [nomSaltimbanque],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotHalfelins],
    image: portrait_halfelin_artisan_45_120,
    ageMin: 45,
    ageMax: 120,
    carrieres: [nomArtisan],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotHalfelins],
    image: portrait_halfelin_30_85,
    ageMin: 30,
    ageMax: 85,
    male: true,
  },
  {
    coteries: [nomCotHalfelins],
    image: portrait_halfelin_45_100,
    ageMin: 45,
    ageMax: 100,
    male: true,
  },
  {
    coteries: [nomCotNains],
    image: portrait_nain_80_200_guerrier,
    ageMin: 80,
    ageMax: 200,
    carrieres: [],
    classes: [nomGuerriers],
    male: true,
  },
  {
    coteries: [nomCotNains],
    image: portrait_nain_60_200_bourgeois,
    ageMin: 60,
    ageMax: 200,
    carrieres: [nomBourgeois],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotNains],
    image: portrait_nain_30_180_mineur,
    ageMin: 30,
    ageMax: 180,
    carrieres: [nomMineur],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotNains],
    image: portrait_nain_25_95_eclaireur,
    ageMin: 25,
    ageMax: 95,
    carrieres: [nomEclaireur, nomChasseur],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotNains],
    image: portrait_nain_45_190_ingenieur,
    ageMin: 45,
    ageMax: 190,
    carrieres: [nomIngenieur],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotNains],
    image: portrait_nain_35_130_nautonniere,
    ageMin: 35,
    ageMax: 130,
    carrieres: [nomNautonnier],
    classes: [],
    male: false,
  },
  {
    coteries: [nomCotNains],
    image: portrait_nain_25_90_artisane,
    ageMin: 25,
    ageMax: 90,
    carrieres: [nomArtisan],
    classes: [],
    male: false,
  },
  {
    coteries: [nomCotNains],
    image: portrait_nain_40_200_citadin,
    ageMin: 40,
    ageMax: 200,
    carrieres: [],
    classes: [nomCitadins],
    male: true,
  },
  {
    coteries: [nomCotNains],
    image: portrait_nain_40_150_tueur,
    ageMin: 40,
    ageMax: 150,
    carrieres: [nomTueur],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotNains],
    image: portrait_nain_20_50_soldate,
    ageMin: 20,
    ageMax: 50,
    carrieres: [nomSoldat, nomMilicien, nomGarde, nomGladiateur],
    classes: [],
    male: false,
  },
  {
    coteries: [nomCotNains],
    image: portrait_nain_150_plus_receleur,
    ageMin: 150,
    carrieres: [nomReceleur],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotNains],
    image: portrait_nain_200_plus_rurale,
    ageMin: 200,
    carrieres: [],
    classes: [nomRuraux],
    male: false,
  },
  {
    coteries: [nomCotNains],
    image: portrait_nain_200_plus_noble,
    ageMin: 200,
    carrieres: [nomNoble],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotNains],
    image: portrait_nain_200_plus_soldat,
    ageMin: 200,
    carrieres: [nomSoldat],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotNains],
    image: portrait_nain_50_160_rural,
    ageMin: 50,
    ageMax: 160,
    carrieres: [],
    classes: [nomRuraux],
    male: true,
  },
  {
    coteries: [nomCotNains],
    image: portrait_nain_320_plus_f,
    ageMin: 320,
    carrieres: [],
    classes: [],
    male: false,
  },
  {
    coteries: [nomCotNains],
    image: portrait_nain_15_60_artisane,
    ageMin: 15,
    ageMax: 60,
    carrieres: [nomArtisan],
    classes: [],
    male: false,
  },
  {
    coteries: [nomCotNains],
    image: portrait_nain_15_60_f,
    ageMin: 15,
    ageMax: 60,
    carrieres: [],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotNains],
    image: portrait_nain_80_plus_tueur,
    ageMin: 80,
    carrieres: [nomTueur],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotNains],
    image: portrait_nain_80_duelliste,
    ageMin: 80,
    carrieres: [nomDuelliste, nomChasseurDePrimes],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotNains],
    image: portrait_nain_40_110_chasseur,
    ageMin: 40,
    ageMiax: 110,
    carrieres: [nomChasseur, nomChasseurDePrimes],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotNains],
    image: portrait_nain_20_45_ingenieure,
    ageMin: 20,
    ageMiax: 45,
    carrieres: [nomIngenieur],
    classes: [],
    male: false,
  },
  {
    coteries: [nomCotNains],
    image: portrait_nain_100_250,
    ageMin: 100,
    ageMiax: 250,
    carrieres: [],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotNains],
    image: portrait_nain_40_130_gladiateur,
    ageMin: 40,
    ageMiax: 130,
    carrieres: [nomGladiateur],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotNains],
    image: portrait_nain_70_plus_tueur,
    ageMin: 70,
    carrieres: [nomTueur],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotNains],
    image: portrait_nain_50_160,
    ageMin: 50,
    ageMax: 160,
    carrieres: [],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotNains],
    image: portrait_nain_40_180_saltimbanque,
    ageMin: 40,
    ageMax: 180,
    carrieres: [nomSaltimbanque],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotNains],
    image: portrait_nain_120_plus_mineur,
    ageMin: 120,
    carrieres: [nomMineur],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotNains],
    image: portrait_nain_40_190_saltimbanque,
    ageMin: 40,
    ageMax: 190,
    carrieres: [nomSaltimbanque],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotNains],
    image: portrait_nain_35_100_f_ruraux,
    ageMin: 35,
    ageMax: 100,
    carrieres: [nomHorsLaLoi, nomChasseur, nomEclaireur],
    classes: [],
    male: false,
  },
  {
    coteries: [nomCotNains],
    image: portrait_nain_200_plus,
    ageMin: 200,
    carrieres: [],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotNains],
    image: portrait_nain_300_plus_f_2,
    ageMin: 300,
    carrieres: [],
    classes: [],
    male: false,
  },
  {
    coteries: [nomCotNains],
    image: portrait_nain_300_plus_f,
    ageMin: 300,
    carrieres: [],
    classes: [],
    male: false,
  },
  {
    coteries: [nomCotNains],
    image: portrait_nain_200_plus_f,
    ageMin: 200,
    carrieres: [],
    classes: [],
    male: false,
  },
  {
    coteries: [nomCotNains],
    image: portrait_nain_110_plus_eclaireuse,
    ageMin: 110,
    carrieres: [],
    classes: [nomRuraux],
    male: false,
  },
  {
    coteries: [nomCotNains],
    image: portrait_nain_50_150,
    ageMin: 50,
    ageMax: 150,
    carrieres: [],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotNains],
    image: portrait_nain_40_150_chasseuse,
    ageMin: 40,
    ageMax: 150,
    carrieres: [nomChasseur],
    classes: [],
    male: false,
  },
  {
    coteries: [nomCotNains],
    image: portrait_nain_40_150_recelleur,
    ageMin: 40,
    ageMax: 150,
    carrieres: [nomReceleur],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotNains],
    image: portrait_nain_120_plus_bourgeois,
    ageMin: 120,
    carrieres: [nomBourgeois],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotNains],
    image: portrait_nain_80_200,
    ageMin: 80,
    ageMax: 200,
    carrieres: [],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotNains],
    image: portrait_nain_40_180_mineur,
    ageMin: 40,
    ageMax: 180,
    carrieres: [nomMineur],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotNains],
    image: portrait_nain_25_90_f_colporteur,
    ageMin: 25,
    ageMax: 90,
    carrieres: [nomColporteur],
    classes: [],
    male: false,
  },
  {
    coteries: [nomCotNains],
    image: portrait_nain_50_150_f,
    ageMin: 50,
    ageMax: 150,
    carrieres: [],
    classes: [],
    male: false,
  },
  {
    coteries: [nomCotNains],
    image: portrait_nain_40_150_eclaireur,
    ageMin: 40,
    ageMax: 150,
    carrieres: [nomEclaireur],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotNains],
    image: portrait_nain_40_150_eclaireuse,
    ageMin: 40,
    ageMax: 150,
    carrieres: [nomEclaireur],
    classes: [],
    male: false,
  },
  {
    coteries: [nomCotNains],
    image: portrait_nain_60_plus_chasseur,
    ageMin: 60,
    carrieres: [nomChasseur],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotNains],
    image: portrait_nain_40_plus_soldat,
    ageMin: 40,
    carrieres: [nomSoldat],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotNains],
    image: portrait_nain_50_plus_ingenieur,
    ageMin: 50,
    carrieres: [nomIngenieur],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotNains],
    image: portrait_nain_25_100_f_tueur,
    ageMin: 25,
    ageMax: 100,
    carrieres: [nomTueur],
    classes: [],
    male: false,
  },
  {
    coteries: [nomCotNains],
    image: portrait_nain_35_plus_tueur,
    ageMin: 35,
    carrieres: [nomTueur],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotNains],
    image: portrait_nain_140_plus,
    ageMin: 140,
    carrieres: [],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotNains],
    image: portrait_nain_40_plus,
    ageMin: 40,
    carrieres: [],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotNains],
    image: portrait_nain_60_plus_tueur,
    ageMin: 60,
    carrieres: [nomTueur],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotNains],
    image: portrait_nain_40_100,
    ageMin: 40,
    ageMax: 100,
    carrieres: [],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire55_plus_pretreGuerrier,
    ageMin: 55,
    carrieres: [nomPretreGuerrier, nomSoldat],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire30_55_milicien,
    ageMin: 30,
    ageMax: 55,
    carrieres: [nomMilicien],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire25_50_soldat,
    ageMin: 20,
    ageMax: 50,
    carrieres: [nomSoldat],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire20_40_villageoise,
    ageMin: 20,
    ageMax: 40,
    carrieres: [nomVillageois],
    classes: [],
    male: false,
  },
  {
    coteries: [nomCotEmpire, nomCotKislevites],
    image: portrait_empire55_plus_soldat,
    ageMin: 55,
    carrieres: [nomSoldat],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire20_35_f_duelliste,
    ageMin: 20,
    ageMax: 35,
    carrieres: [nomDuelliste],
    classes: [],
    male: false,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire50_plus_f_mystique,
    ageMin: 50,
    carrieres: [nomMystique],
    classes: [],
    male: false,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire50_plus_pretre,
    ageMin: 50,
    carrieres: [nomPretre],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire40_65_pilleurDeTombe,
    ageMin: 40,
    ageMax: 65,
    carrieres: [nomPilleurDeTombes],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire20_55_mendiant,
    ageMin: 20,
    ageMax: 55,
    carrieres: [nomMendiant],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire30_60_pretreGuerrier,
    ageMin: 30,
    ageMax: 60,
    carrieres: [nomPretreGuerrier],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire20_40_nonne,
    ageMin: 20,
    ageMax: 40,
    carrieres: [nomNonne],
    classes: [],
    male: false,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire50_plus_batelier,
    ageMin: 50,
    carrieres: [nomBatelier],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire20_40_chasseurDePrimes,
    ageMin: 20,
    ageMax: 40,
    carrieres: [nomChasseurDePrimes, nomRepurgateur],
    classes: [],
    male: false,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire15_25_villageoise,
    ageMin: 15,
    ageMax: 25,
    carrieres: [nomVillageois],
    classes: [],
    male: false,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire50_plus_cocher,
    ageMin: 50,
    carrieres: [nomCocher],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire35_60_gladiateur,
    ageMin: 35,
    ageMax: 60,
    carrieres: [nomGladiateur, nomMarin, nomRanconneur],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire25_45_bourgeoise,
    ageMin: 25,
    ageMax: 45,
    carrieres: [nomBourgeois],
    classes: [],
    male: false,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire45_plus_bailli,
    ageMin: 45,
    carrieres: [nomBailli],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire15_35_noble,
    ageMin: 15,
    ageMax: 35,
    carrieres: [nomNoble],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire45_plus_villageois,
    ageMin: 45,
    carrieres: [nomVillageois],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire45_plus_villageoise,
    ageMin: 45,
    carrieres: [nomVillageois],
    classes: [],
    male: false,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire40_60_spadassin,
    ageMin: 40,
    ageMax: 60,
    carrieres: [nomSpadassin],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire15_35_artiste,
    ageMin: 15,
    ageMax: 35,
    carrieres: [nomArtiste],
    classes: [],
    male: false,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire50_plus_citadin,
    ageMin: 50,
    carrieres: [],
    classes: [nomCitadins],
    male: true,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire50_plus_erudit_2,
    ageMin: 50,
    carrieres: [nomErudit, nomConseiller],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire35_65_f_bailli,
    ageMin: 35,
    ageMax: 65,
    carrieres: [nomBailli],
    classes: [],
    male: false,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire50_plus_entremetteur,
    ageMin: 50,
    carrieres: [nomEntremetteur, nomBourgeois, nomBailli],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire15_25_lettres,
    ageMin: 15,
    ageMax: 25,
    carrieres: [],
    classes: [nomLettres],
    male: true,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire30_60_cocher,
    ageMin: 30,
    ageMax: 60,
    carrieres: [nomCocher],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire15_35_espionne,
    ageMin: 15,
    ageMax: 35,
    carrieres: [nomEspion],
    classes: [],
    male: false,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire30_60_espion,
    ageMin: 30,
    ageMax: 60,
    carrieres: [nomEspion],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire30_50_charlatan,
    ageMin: 30,
    ageMax: 50,
    carrieres: [
      nomCharlatan,
      nomEntremetteur,
      nomReceleur,
      nomRanconneur,
      nomPilleurDeTombes,
    ],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire15_35_chevaliere,
    ageMin: 15,
    ageMax: 35,
    carrieres: [nomChevalier],
    classes: [],
    male: false,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire20_40_saltimbanque,
    ageMin: 20,
    ageMax: 40,
    carrieres: [nomSaltimbanque],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire25_55_courtisan,
    ageMin: 25,
    ageMax: 55,
    carrieres: [],
    classes: [nomCourtisans],
    male: true,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire35_60_guerrier,
    ageMin: 35,
    ageMax: 60,
    carrieres: [],
    classes: [nomGuerriers],
    male: true,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire60_plus_milicien,
    ageMin: 60,
    carrieres: [nomMilicien],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire25_40_agitateur,
    ageMin: 25,
    ageMax: 40,
    carrieres: [nomAgitateur],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotEmpire],
    image: portrait_empire50_plus,
    ageMin: 50,
    carrieres: [],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire30_60_cavalier,
    ageMin: 30,
    ageMax: 60,
    carrieres: [nomCavalier],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire60_plus_roublard,
    ageMin: 60,
    carrieres: [],
    classes: [nomRoublards],
    male: true,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire15_40_guerriere,
    ageMin: 15,
    ageMax: 40,
    carrieres: [],
    classes: [nomGuerriers],
    male: false,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire15_40_citadine,
    ageMin: 15,
    ageMax: 40,
    carrieres: [],
    classes: [nomCitadins],
    male: false,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire30_50_entremetteur,
    ageMin: 30,
    ageMax: 50,
    carrieres: [nomEntremetteur],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire45_80_enqueteur,
    ageMin: 45,
    ageMax: 80,
    carrieres: [nomEnqueteur],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire45_80_cavalier,
    ageMin: 45,
    ageMax: 80,
    carrieres: [nomCavalier],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire20_50_ranconneuse,
    ageMin: 20,
    ageMax: 50,
    carrieres: [nomRanconneur],
    classes: [],
    male: false,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire35_60_f_medecin,
    ageMin: 35,
    ageMax: 60,
    carrieres: [nomMedecin],
    classes: [],
    male: false,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire35_70_sorcierVillage,
    ageMin: 35,
    ageMax: 70,
    carrieres: [nomSorcierDeVillage],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire25_45_charlatan,
    ageMin: 25,
    ageMax: 45,
    carrieres: [nomCharlatan],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire25_45_soldate,
    ageMin: 25,
    ageMax: 45,
    carrieres: [nomSoldat],
    classes: [],
    male: false,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire35_60_noble,
    ageMin: 35,
    ageMax: 60,
    carrieres: [nomNoble, nomIntendant],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire25_45_entremetteur,
    ageMin: 25,
    ageMax: 45,
    carrieres: [nomEntremetteur, nomReceleur],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire40_70_contrebandiere,
    ageMin: 40,
    ageMax: 70,
    carrieres: [nomContrebandier],
    classes: [],
    male: false,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire15_45_chasseusePrimes,
    ageMin: 15,
    ageMax: 45,
    carrieres: [nomChasseurDePrimes],
    classes: [],
    male: false,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire55_plus_pretre,
    ageMin: 55,
    carrieres: [nomPretre],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire15_35_serviteuse,
    ageMin: 15,
    ageMax: 35,
    carrieres: [nomServiteur, nomVillageois],
    classes: [],
    male: false,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire20_40_patrouilleurRoutier,
    ageMin: 20,
    ageMax: 40,
    carrieres: [nomPatrouilleurRoutier],
    classes: [],
    male: false,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire30_plus_mendiant,
    ageMin: 30,
    carrieres: [nomMendiant, nomPilleurDeTombes],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire25_45_soldat,
    ageMin: 25,
    ageMax: 45,
    carrieres: [nomSoldat],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire25_40_bailli,
    ageMin: 25,
    ageMax: 40,
    carrieres: [nomBailli, nomNoble, nomEspion],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire16_35_sorcierDissident,
    ageMin: 16,
    ageMax: 35,
    carrieres: [nomSorcierDissident],
    classes: [],
    male: false,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire40_70_charlatane,
    ageMin: 40,
    ageMax: 70,
    carrieres: [nomCharlatan, nomMystique],
    classes: [],
    male: false,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire30_70_charlatan,
    ageMin: 30,
    ageMax: 70,
    carrieres: [nomCharlatan],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire20_50_voleur,
    ageMin: 20,
    ageMax: 50,
    carrieres: [nomVoleur],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire20_50_f_saltimbanque,
    ageMin: 20,
    ageMax: 50,
    carrieres: [nomSaltimbanque],
    classes: [],
    male: false,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire30_55_conseiller,
    ageMin: 30,
    ageMax: 55,
    carrieres: [nomConseiller, nomIntendant],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire30_55_naufrageur,
    ageMin: 30,
    ageMax: 55,
    carrieres: [nomNaufrageur],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire20_40_chasseusePrimes,
    ageMin: 20,
    ageMax: 40,
    carrieres: [nomChasseurDePrimes],
    classes: [],
    male: false,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire30_plus_pilleuseTombe,
    ageMin: 30,
    carrieres: [nomPilleurDeTombes],
    classes: [],
    male: false,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire30_60_intendant,
    ageMin: 30,
    ageMax: 60,
    carrieres: [nomIntendant, nomBailli],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotEmpire],
    image: portrait_empire20_40_spadassin,
    ageMin: 20,
    ageMax: 40,
    carrieres: [nomRanconneur, nomSpadassin, nomSoldat],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire30_60_ranconneur,
    ageMin: 30,
    ageMax: 60,
    carrieres: [nomRanconneur, nomSpadassin],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire25_50_villageois,
    ageMin: 25,
    ageMax: 50,
    carrieres: [nomVillageois],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire30_60_colporteur,
    ageMin: 30,
    ageMax: 60,
    carrieres: [nomColporteur],
    classes: [],
    male: false,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire25_50_artisan,
    ageMin: 25,
    ageMax: 50,
    carrieres: [nomArtisan],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire25_45_enqueteur,
    ageMin: 25,
    ageMax: 45,
    carrieres: [nomEnqueteur, nomContrebandier],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire20_45_f_saltimbanque,
    ageMin: 20,
    ageMax: 45,
    carrieres: [nomSaltimbanque],
    classes: [],
    male: false,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire15_35_f_saltimbanque,
    ageMin: 15,
    ageMax: 35,
    carrieres: [nomSaltimbanque],
    classes: [],
    male: false,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire15_35_villageoise_2,
    ageMin: 15,
    ageMax: 35,
    carrieres: [nomVillageois],
    classes: [],
    male: false,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire40_75_guerrier,
    ageMin: 40,
    ageMax: 75,
    carrieres: [],
    classes: [nomGuerriers],
    male: true,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire40_60_noble,
    ageMin: 40,
    ageMax: 60,
    carrieres: [nomNoble],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire30_55_emissaire,
    ageMin: 30,
    ageMax: 55,
    carrieres: [nomEmissaire, nomNoble],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire45_plus_chevalier,
    ageMin: 45,
    carrieres: [nomChevalier],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire30_50_soldat,
    ageMin: 30,
    ageMax: 50,
    carrieres: [nomSoldat],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire30_50_duelliste,
    ageMin: 30,
    ageMax: 50,
    carrieres: [nomDuelliste],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire15_30_bourgeoise,
    ageMin: 15,
    ageMax: 30,
    carrieres: [nomBourgeois, nomServiteur],
    classes: [],
    male: false,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire20_45_roublard,
    ageMin: 20,
    ageMax: 45,
    carrieres: [],
    classes: [nomRoublards],
    male: true,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire30_60_garde,
    ageMin: 30,
    ageMax: 60,
    carrieres: [nomGarde, nomMilicien],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire50_plus_patrouilleurFluvial,
    ageMin: 50,
    carrieres: [nomPatrouilleurFluvial, nomMilicien],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire15_40_bourgeoise,
    ageMin: 15,
    ageMax: 40,
    carrieres: [nomBourgeois],
    classes: [],
    male: false,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire20_40_bourgeoise,
    ageMin: 20,
    ageMax: 40,
    carrieres: [nomBourgeois],
    classes: [],
    male: false,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire20_50_chasseur_de_primes,
    ageMin: 20,
    ageMax: 50,
    carrieres: [nomChasseurDePrimes, nomRepurgateur, nomDuelliste],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire20_45_f_juriste,
    ageMin: 20,
    ageMax: 45,
    carrieres: [nomJuriste],
    classes: [],
    male: false,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire20_45_mineuse,
    ageMin: 20,
    ageMax: 45,
    carrieres: [nomMineur],
    classes: [],
    male: false,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire20_45_flagellant,
    ageMin: 20,
    ageMax: 45,
    carrieres: [nomFlagellant, nomSorcierDissident],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire30_60_spadassin,
    ageMin: 30,
    ageMax: 60,
    carrieres: [nomSpadassin, nomSoldat, nomGarde],
    classes: [],
    male: true,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire25_60_f_herboriste,
    ageMin: 25,
    ageMax: 60,
    carrieres: [nomHerboriste, nomSorcierDeVillage],
    classes: [],
    male: false,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire15_45_f_artisan,
    ageMin: 15,
    ageMax: 45,
    carrieres: [nomArtisan],
    classes: [],
    male: false,
  },
  {
    coteries: [nomCotEmpire, nomCotBretonniens, nomCotKislevites],
    image: portrait_empire30_plus_garde,
    ageMin: 30,
    carrieres: [nomGarde],
    classes: [],
    male: true,
  },
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
    image: portrait_elfe_sylvain_f_15_30_c,
    ageMin: 15,
    ageMax: 30,
    male: false,
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
    coteries: [nomCotEstalie],
    image: portrait_conquistador_pretre_20_50,
    ageMin: 20,
    ageMax: 50,
    male: true,
  },
  {
    coteries: [nomCotEstalie],
    image: portrait_conquistador_portrait_60_plus,
    ageMin: 60,
    male: true,
  },
  {
    coteries: [nomCotEstalie],
    image: portrait_conquistador_portrait_50_plus_b,
    ageMin: 50,
    male: true,
  },
  {
    coteries: [nomCotEstalie],
    image: portrait_conquistador_portrait_50_plus,
    ageMin: 50,
    male: true,
  },
  {
    coteries: [nomCotEstalie],
    image: portrait_conquistador_portrait_40_plus,
    ageMin: 40,
    male: true,
  },
  {
    coteries: [nomCotEstalie],
    image: portrait_conquistador_portrait_30_60,
    ageMin: 30,
    ageMax: 60,
    male: true,
  },
  {
    coteries: [nomCotEstalie],
    image: portrait_conquistador_portrait_20_50_f,
    ageMin: 20,
    ageMax: 50,
    male: true,
  },
  {
    coteries: [nomCotEstalie],
    image: portrait_conquistador_portrait_20_50_e,
    ageMin: 20,
    ageMax: 50,
    male: true,
  },
  {
    coteries: [nomCotEstalie],
    image: portrait_conquistador_portrait_20_50_d,
    ageMin: 20,
    ageMax: 50,
    male: true,
  },
  {
    coteries: [nomCotEstalie],
    image: portrait_conquistador_portrait_20_50_c,
    ageMin: 20,
    ageMax: 50,
    male: true,
  },
  {
    coteries: [nomCotEstalie],
    image: portrait_conquistador_portrait_20_50_b,
    ageMin: 20,
    ageMax: 50,
    male: true,
  },
  {
    coteries: [nomCotEstalie],
    image: portrait_conquistador_portrait_20_50,
    ageMin: 20,
    ageMax: 50,
    male: true,
  },
  {
    coteries: [nomCotEstalie],
    image: portrait_conquistador_portrait_20_40_b,
    ageMin: 20,
    ageMax: 40,
    male: true,
  },
  {
    coteries: [nomCotEstalie],
    image: portrait_conquistador_portrait_20_40,
    ageMin: 20,
    ageMax: 40,
    male: true,
  },
  {
    coteries: [nomCotEstalie],
    image: portrait_conquistador_portrait_15_40_c,
    ageMin: 15,
    ageMax: 40,
    male: true,
  },
  {
    coteries: [nomCotEstalie],
    image: portrait_conquistador_portrait_15_40_b,
    ageMin: 15,
    ageMax: 40,
    male: true,
  },
  {
    coteries: [nomCotEstalie],
    image: portrait_conquistador_portrait_15_40,
    ageMin: 15,
    ageMax: 40,
    male: true,
  },
  {
    coteries: [nomCotEstalie],
    image: portrait_conquistador_femme50_plus,
    ageMin: 50,
    male: false,
  },
  {
    coteries: [nomCotEstalie],
    image: portrait_conquistador_femme40_plus,
    ageMin: 40,
    male: false,
  },
  {
    coteries: [nomCotEstalie],
    image: portrait_conquistador_femme30_50,
    ageMin: 30,
    ageMax: 50,
    male: false,
  },
  {
    coteries: [nomCotEstalie],
    image: portrait_conquistador_femme20_45,
    ageMin: 20,
    ageMax: 45,
    male: false,
  },
  {
    coteries: [nomCotEstalie],
    image: portrait_conquistador_femme20_35,
    ageMin: 20,
    ageMax: 35,
    male: false,
  },
  {
    coteries: [nomCotEstalie],
    image: portrait_conquistador_femme15_35,
    ageMin: 15,
    ageMax: 35,
    male: false,
  },
  {
    coteries: [nomCotEstalie],
    image: portrait_conquistador_femme15_35_b,
    ageMin: 15,
    ageMax: 35,
    male: false,
  },
  {
    coteries: [nomCotEstalie],
    image: portrait_conquistador_femme15_35_c,
    ageMin: 15,
    ageMax: 35,
    male: false,
  },
  {
    coteries: [nomCotEstalie],
    image: portrait_conquistador_femme15_35_d,
    ageMin: 15,
    ageMax: 35,
    male: false,
  },
  {
    coteries: [nomCotEstalie],
    image: portrait_conquistador_femme15_35_e,
    ageMin: 15,
    ageMax: 35,
    male: false,
  },
  {
    coteries: [nomCotEstalie],
    image: portrait_conquistador_femme15_35_f,
    ageMin: 15,
    ageMax: 35,
    male: false,
  },
  {
    coteries: [nomCotEstalie],
    image: portrait_conquistador_20_50_b,
    ageMin: 20,
    ageMax: 50,
    male: true,
  },
  {
    coteries: [nomCotEstalie],
    image: portrait_conquistador_25_60,
    ageMin: 25,
    ageMax: 60,
    male: true,
  },
]
