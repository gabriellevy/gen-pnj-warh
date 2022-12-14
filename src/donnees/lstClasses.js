import {
  nomAgilete,
  nomCC,
  nomCT,
  nomDexterite,
  nomEndurance,
  nomForce,
  nomForceMentale,
  nomInitiative,
  nomIntelligence,
  nomSociabilite,
} from './lstCaracs'
import {
  nomArtAuChoix,
  nomArtEcriture,
  nomArtIcones,
  nomAthletisme,
  nomCalme,
  nomCharme,
  nomChevaucher,
  nomCommandement,
  nomConduiteAttelage,
  nomCorpsACorpsAuChoix,
  nomCorpsACorpsAuChoix2,
  nomCorpsACorpsBagarre,
  nomCorpsACorpsBase,
  nomCorpsACorpsCavalerie,
  nomCorpsACorpsDeuxMains,
  nomCorpsACorpsFleau,
  nomCorpsACorpsHast,
  nomCorpsACorpsParade,
  nomCrochetage,
  nomDiscretionAuChoix,
  nomDiscretionSouterraine,
  nomDiscretionUrbaine,
  nomDivertissementAuChoix1,
  nomDivertissementAuChoix2,
  nomDivertissementConference,
  nomDivertissementDiscours,
  nomDivertissementInterpretation,
  nomDivertissementNarration,
  nomDivertissementRaillerie,
  nomDivertissementRhetorique,
  nomDressage,
  nomDressageCheval,
  nomDressageChien,
  nomEmpriseSurAnimaux,
  nomEscalade,
  nomEscamotage,
  nomEsquive,
  nomEvaluation,
  nomGuerison,
  nomIntimidation,
  nomIntuition,
  nomLangueAuChoix1,
  nomLangueAuChoix2,
  nomLangueBataille,
  nomLangueClassique,
  nomLangueGuilde,
  nomLangueKhazalid,
  nomMarchandage,
  nomMetier,
  nomMetierApothicaire,
  nomMetierArmurier,
  nomMetierAuChoix,
  nomMetierBarbier,
  nomMetierBricoleur,
  nomMetierEmpoisonneur,
  nomMetierImprimerie,
  nomMetierIngenierie,
  nomMetierMarechalFerrant,
  nomMetierMaterielArtistique,
  nomMusicien,
  nomMusicienAuChoix,
  nomMusicienTambourFifre,
  nomNatation,
  nomOrientation,
  nomPari,
  nomPerception,
  nomPiegeage,
  nomPistage,
  nomPriere,
  nomProjectilesArbalete,
  nomProjectilesArbaletePoing,
  nomProjectilesArc,
  nomProjectilesChoix,
  nomProjectilesEntraves,
  nomProjectilesFronde,
  nomProjectilesIngenierie,
  nomProjectilesLancer,
  nomProjectilesPoudreNoire,
  nomRagot,
  nomRamer,
  nomRecherche,
  nomRepresentation,
  nomRepresentationAcrobatie,
  nomRepresentationAuChoix,
  nomRepresentationCombat,
  nomRepresentationDanse,
  nomResistance,
  nomResistanceAlcool,
  nomSavoirAnatomie,
  nomSavoirArt,
  nomSavoirChaos,
  nomSavoirChimie,
  nomSavoirChoix1,
  nomSavoirChoix2,
  nomSavoirChoix3,
  nomSavoirDragons,
  nomSavoirEmpire,
  nomSavoirGeants,
  nomSavoirGeographie,
  nomSavoirGuerre,
  nomSavoirHeraldique,
  nomSavoirIngenierie,
  nomSavoirLoi,
  nomSavoirNoble,
  nomSavoirPlantes,
  nomSavoirPoison,
  nomSavoirPolitique,
  nomSavoirRegion,
  nomSavoirRemede,
  nomSavoirScience,
  nomSavoirSigmar,
  nomSavoirSorciere,
  nomSavoirTheologie,
  nomSavoirTorture,
  nomSavoirTroll,
  nomSignesSecretsGuilde,
  nomSignesSecretsOrdreChevaleresque,
  nomSignesSecretsVagabond,
  nomSoinsAnimaux,
  nomSubornation,
  nomSurvieExterieur,
} from './lstComps'
import { bronze, argent, or } from './lstNiveauDeVie'

// classes
export const nomCitadins = 'Citadins'
export const nomCourtisans = 'Courtisans'
export const nomGuerriers = 'Guerriers'
export const nomItinerants = 'Itin??rants'
export const nomLettres = 'Lettr??s'
export const nomRiverains = 'Riverains'
export const nomRoublards = 'Roublards'
export const nomRuraux = 'Ruraux'

// -------------- carri??res
export const nomAgitateur = 'Agitateur'
export const nomArtisan = 'Artisan'
export const nomBourgeois = 'Bourgeois'
export const nomEnqueteur = 'Enqu??teur'
export const nomMarchand = 'Marchand'
export const nomMendiant = 'Mendiant'
export const nomMilicien = 'Milicien'
export const nomRatier = 'Ratier'

export const nomArtiste = 'Artiste'
export const nomConseiller = 'Conseiller'
export const nomDuelliste = 'Duelliste'
export const nomEmissaire = 'Emissaire'
export const nomEspion = 'Espion'
export const nomIntendant = 'Intendant'
export const nomNoble = 'Noble'
export const nomServiteur = 'Serviteur'

export const nomCavalier = 'Cavalier'
export const nomChevalier = 'Chevalier'
export const nomGarde = 'Garde'
export const nomGladiateur = 'Gladiateur'
export const nomPretreGuerrier = 'Pr??tre guerrier'
export const nomSoldat = 'Soldat'
export const nomSpadassin = 'Spadassin'
export const nomTueur = 'Tueur'

export const nomChasseurDePrimes = 'Chasseur de primes'
export const nomCocher = 'Cocher'
export const nomColporteur = 'Colporteur'
export const nomFlagellant = 'Flagellant'
export const nomMessager = 'Messager'
export const nomPatrouilleurRoutier = 'Patrouilleur routier'
export const nomRepurgateur = 'R??purgateur'
export const nomSaltimbanque = 'Saltimbanque'

export const nomApothicaire = 'Apothicaire'
export const nomErudit = 'Erudit'
export const nomIngenieur = 'Ing??nieur'
export const nomJuriste = 'Juriste'
export const nomMedecin = 'M??decin'
export const nomNonne = 'Nonne'
export const nomPretre = 'Pr??tre'
export const nomSorcier = 'Sorcier'

// carri??res de riverains
export const nomBatelier = 'Batelier'
export const nomContrebandier = 'Contrebandier'
export const nomDebardeur = 'D??bardeur'
export const nomFemmeDuFleuve = 'Femme du fleuve'
export const nomMarin = 'Marin'
export const nomNaufrageur = 'Naufrageur'
export const nomNautonnier = 'Nautonnier'
export const nomPatrouilleurFluvial = 'Patrouilleur fluvial'

export const nomCharlatan = 'Charlatan'
export const nomEntremetteur = 'Entremetteur'
export const nomHorsLaLoi = 'Hors-la-loi'
export const nomPilleurDeTombes = 'Pilleur de tombes'
export const nomRanconneur = 'Ran??onneur'
export const nomReceleur = 'Receleur'
export const nomSorcierDissident = 'Sorcier dissident'
export const nomVoleur = 'Voleur'

export const nomBailli = 'Bailli'
export const nomChasseur = 'Chasseur'
export const nomEclaireur = 'Eclaireur'
export const nomHerboriste = 'Herboriste'
export const nomMineur = 'Mineur'
export const nomMystique = 'Mystique'
export const nomSorcierDeVillage = 'Sorcier de village'
export const nomVillageois = 'Villageois'

export function getClasseObj(idClasse) {
  var coterieObj
  lstClasses.forEach((classe) => {
    if (classe.titre === idClasse) {
      coterieObj = classe
    }
  })
  return coterieObj
}

export function getCarriere(idCarr) {
  for (let i = 0; i < lstClasses.length; i++) {
    const classeObj = lstClasses[i]
    for (let j = 0; j < classeObj.carrieres.length; j++) {
      const carriereObj = classeObj.carrieres[j]
      if (carriereObj.titre === idCarr) {
        return carriereObj
      }
    }
  }
  return null
}

export const nomPamphletaire = 'Pamphl??taire'
export const nomFauteurTrouble = 'Fauteur de trouble'
export const nomDemagogue = 'D??magogue'

export const nomApprentiArtisan = 'Apprenti artisan'
export const nomMaitreArtisan = 'Ma??tre artisan'
export const nomMaitreGuilde = 'Ma??tre de guilde'

export const nomEmploye = 'Employ??'
export const nomConseillerMunicipal = 'Conseiller municipal'
export const nomBourgmestre = 'Bourgmestre'

export const nomLimier = 'Limier'
export const nomMaitreEnqueteur = 'Ma??tre enqu??teur'
export const nomDetective = 'D??tective'

export const nomNegociant = 'N??gociant'
export const nomMaitreMarchand = 'Ma??tre marchand'
export const nomPrinceMarchand = 'Prince marchand'

export const nomIndigent = 'Indigent'
export const nomMaitreMendiant = 'Ma??tre mendiant'
export const nomRoiMendiant = 'Roi des mendiants'

export const nomRecrueMilice = 'Recrue de la milice'
export const nomSergentMilice = 'Sergent de la milice'
export const nomCapitaineMilice = 'Capitaine de la milice'

export const nomChasseurRat = 'Chasseur de rat'
export const nomEgoutier = '??goutier'
export const nomExterminateur = 'Exterminateur'

export const nomArtisteApprenti = 'Artiste apprenti'
export const nomArtisteRenom = 'Artiste de renom'
export const nomMaestro = 'Maestro'

export const nomAssistant = 'Assistant'
export const nomConsultant = 'Consultant'
export const nomChancelier = 'Chancelier'

export const nomEscrimeur = 'Escrimeur'
export const nomMaitreDuelliste = 'Ma??tre duelliste'
export const nomChampionJustice = 'Champion de justice'

export const nomHeraut = 'H??raut'
export const nomDiplomate = 'Diplomate'
export const nomAmbassadeur = 'Ambassadeur'

export const nomInformateur = 'Informateur'
export const nomAgentSecret = 'Agent secret'
export const nomMaitreEspion = 'Ma??tre espion'

export const nomGardien = 'Gardien'
export const nomSenechal = 'S??n??chal'
export const nomGouverneur = 'Gouverneur'

export const nomHeritier = 'H??ritier'
export const nomMagnat = 'Magnat'
export const nomNobleSeigneur = 'Noble seigneur'

export const nomDomestique = 'Domestique'
export const nomValet = 'Valet'
export const nomRegisseur = 'R??gisseur'

export const nomApprentiCavalier = 'Apprenti cavalier'
export const nomSergentCavalerie = 'Sergent de cavalerie l??g??re'
export const nomOfficierCavalerie = 'Officier de cavalerie l??g??re'

export const nomEcuyer = '??cuyer'
export const nomChevalierCommandeur = 'Chevalier commandeur'
export const nomChevalierCercleInterieur = 'Chevalier du crecle int??rieur'

export const nomSentinelle = 'Sentinelle'
export const nomGardeHonneur = "Garde d'honneur"
export const nomGardeOfficier = 'Garde officier'

export const nomPugiliste = 'Pugiliste'
export const nomChampionFosse = 'Champion de Fosse'
export const nomLegendeFosse = 'L??gende de la fosse'

export const nomNovice = 'Novice'
export const nomPretreSergent = 'Pr??tre sergent'
export const nomPretreCapitaine = 'Pr??tre capitaine'

export const nomRecrue = 'Recrue'
export const nomSergent = 'Sergent'
export const nomOfficier = 'Officier'

export const nomMatamore = 'Matamore'
export const nomTueurAGage = 'Tueur ?? gage'
export const nomAssassin = 'Assassin'

export const nomTueurTroll = 'Tueur de troll'
export const nomTueurGeant = 'Tueur de g??ants'
export const nomTueurDragons = 'Tueur de dragons'
export const nomTueurDemons = 'Tueur de d??mons'

export const nomChasseurVoleurs = 'Chasseur de voleurs'
export const nomMaitreChasseurPrimes = 'Ma??tre chasseur de primes'
export const nomChasseurPrimesVeteran = 'Chasseur de primes v??t??ran'

export const nomPostillon = 'Postillon'
export const nomMaitreCocher = 'Ma??tre cocher'
export const nomMaitreRoutes = 'Ma??tre des routes'

export const nomVagabond = 'Vagabond'
export const nomMaitreColporteur = 'Ma??tre colporteur'
export const nomNegociantItinerant = 'N??gociant itin??rant'

export const nomZelote = 'Z??lote'
export const nomPenitent = 'P??nitent'
export const nomPropheteDuDestin = 'Proph??te du destin'

export const nomCoureur = 'Coureur'
export const nomEstafette = 'Estafette'
export const nomMessagerVeteran = 'Messager v??t??ran'

export const nomPeager = 'P??ager'
export const nomSergentPatrouilleur = 'Sergent patrouilleur'
export const nomCapitainePatrouilleur = 'Capitaine patrouilleur'

export const nomInterrogateur = 'Interrogateur'
export const nomInquisiteur = 'Inquisiteur'
export const nomRepurgateurVeteran = 'R??purgateur v??t??ran'

export const nomMusicienDesRues = 'Musicien des rues'
export const nomTroubadour = 'Troubadour'
export const nomChefTroupe = 'Chef de troupe'

export const nomApprentiApothicaire = 'Apprenti apothicaire'
export const nomMaitreApothicaire = 'Ma??tre apothicaire'
export const nomApothicaireRenom = 'Apothicaire de renom'

export const nomEtudiant = '??tudiant'
export const nomChercheur = 'Chercheur'
export const nomProfesseur = 'Professeur'

export const nomEtudiantIngenieur = '??tudiant ing??nieur'
export const nomMaitreIngenieur = 'Ma??tre ing??nieur'
export const nomIngenieurAgree = 'Ing??nieur agr????'

export const nomEtudiantDroit = '??tudiant en droit'
export const nomMaitreBarreau = 'Ma??tre du barreau'
export const nomJuge = 'Juge'

export const nomEtudiantMedecine = '??tudiant en m??decine'
export const nomDocteurMedecine = 'Docteur en m??decine'
export const nomMedecinCour = 'M??decin de la cour'

export const nomAbbesse = 'Abbesse'
export const nomPrieureGenerale = 'Prieure g??n??rale'

export const nomInitie = 'Initi??'
export const nomGrandPretre = 'Grand pr??tre'
export const nomLecteur = 'Lecteur'

export const nomSorcierNovice = 'Sorcier novice'
export const nomMaitreSorcier = 'Ma??tre sorcier'
export const nomSeigneurSorcier = 'Seigneur sorcier'

export const nomCanotier = 'Canotier'
export const nomChefBord = 'Chef de bord'
export const nomCapitaine = 'Capitaine'

export const nomCoureurRivieres = 'Coureur de rivi??res'
export const nomMaitreContrebandier = 'Ma??tre contrebandier'
export const nomRoiContrebandiers = 'Roi des contrebandiers'

export const nomPorteur = 'Porteur'
export const nomContremaitre = 'Contrema??tre'
export const nomMaitreDocks = 'Ma??tre des docks'

export const nomAlevin = 'Alevin'
export const nomSageRives = 'Sage des rives'
export const nomAncienneFleuve = 'Ancienne du fleuve'

export const nomMarinEauDouce = "Marin d'eau douce"
export const nomMaitreEquipage = "Ma??tre d'??quipage"
export const nomCapitaineNavire = 'Capitaine de navire'

export const nomPilleurEpaves = "Pilleur d'??paves"
export const nomPirateRivieres = 'Pirate des rivi??res'
export const nomCapitaineNaufrageur = 'Capitaine naufrageur'

export const nomGuideFluvial = 'Guide fluvial'
export const nomPilote = 'Pilote'
export const nomMaitreNocher = 'Ma??tre nocher'

export const nomRecrueFluviale = 'Recrue fluviale'
export const nomAbordeur = 'Abordeur'
export const nomMaitreAbordeur = 'Ma??tre Abordeur'

export const nomFilou = 'Filou'
export const nomArnaqueur = 'Arnaqueur'
export const nomEscroc = 'Escroc'

export const nomProstitue = 'Prostitu??'
export const nomSouteneur = 'Souteneur'
export const nomMeneur = 'Meneur'

export const nomBandit = 'Bandit'
export const nomChefBande = 'Chef de bande'
export const nomRoiBandits = 'Roi des bandits'

export const nomTrafiquantCadavres = 'Trafiquant de cadavres'
export const nomPilleurTombeaux = 'Pilleur de tombeaux'
export const nomChasseurTresors = 'Chasseur de tr??sors'

export const nomCoupeJarret = 'Coupe-jarret'
export const nomChefGang = 'Chef de gang'
export const nomBaronCrime = 'Baron du crime'

export const nomBrocanteur = 'Brocanteur'
export const nomMaitreReceleur = 'Ma??tre receleur'
export const nomProfessionnelMarcheNoir = 'Professionnel du march?? noir'

export const nomEnsorceleur = 'Ensorceleur'
export const nomDevin = 'Devin'
export const nomDemoniste = 'D??moniste'

export const nomRodeur = 'R??deur'
export const nomMaitreVoleur = 'Ma??tre voleur'
export const nomCambrioleur = 'Cambrioleur'

export const nomPercepteur = 'Percepteur'
export const nomPrefet = 'Pr??fet'
export const nomMagistrat = 'Magistrat'

export const nomTraqueur = 'Traqueur'
export const nomPisteur = 'Pisteur'
export const nomMaitreChasse = 'Ma??tre de la chasse'

export const nomCoureurBois = 'Coureur des bois'
export const nomGuide = 'Guide'
export const nomExplorateur = 'Explorateur'

export const nomCueilleur = 'Cueilleur'
export const nomMaitreHerboriste = 'Ma??tre herboriste'
export const nomHerbalisteRenom = 'Herbaliste de renom'

export const nomProspecteur = 'Prospecteur'
export const nomMaitreMineur = 'Ma??tre mineur'
export const nomContremaitreMine = 'Contrema??tre de la mine'

export const nomVoyant = 'Voyant'
export const nomSage = 'Sage'
export const nomProphete = 'Proph??te'

export const nomApprentiSorcierVillage = 'Apprenti sorcier de village'
export const nomMaitreSorcierVillage = 'Ma??tre sorcier de village'
export const nomSageVillage = 'Sage de village'

export const nomPaysan = 'Paysan'
export const nomEchevin = '??chevin'
export const nomDoyen = 'Doyen'

export function getEvolutionObjFromCarriereAndEvolutionStr(
  nomClasseStr,
  nomCarriereStr,
  nomEvolutionStr
) {
  var evolutionObj = {}
  lstClasses.forEach((classe) => {
    if (nomClasseStr === classe.titre) {
      // classe trouv??e
      classe.carrieres.forEach((carriere) => {
        if (nomCarriereStr === carriere.titre) {
          // carri??re trouv??e
          carriere.evolutions.forEach((evol) => {
            if (nomEvolutionStr === evol.titre) {
              // ??volution trouv??e
              evolutionObj = evol
            }
          })
        }
      })
    }
  })

  return evolutionObj
}

export function getIndexEvolutionObjFromCarriereAndEvolutionStr(
  nomClasseStr,
  nomCarriereStr,
  nomEvolutionStr
) {
  var indexEvolution = 0
  lstClasses.forEach((classe) => {
    if (nomClasseStr === classe.titre) {
      // classe trouv??e
      classe.carrieres.forEach((carriere) => {
        if (nomCarriereStr === carriere.titre) {
          // carri??re trouv??e
          var i = 0
          carriere.evolutions.forEach((evol) => {
            if (nomEvolutionStr === evol.titre) {
              // ??volution trouv??e
              indexEvolution = i
            }
            i++
          })
        }
      })
    }
  })

  return indexEvolution
}

export const lstClasses = [
  {
    titre: nomCitadins,
    description: 'Citadins',
    carrieres: [
      {
        titre: nomAgitateur,
        description: 'Agitateur',
        evolutions: [
          {
            titre: nomPamphletaire,
            statut: {
              echelon: bronze,
              standing: 1,
            },
            caracs: [nomCT, nomIntelligence, nomSociabilite],
            competences: [
              nomArtEcriture,
              nomCharme,
              nomMarchandage,
              nomMetierImprimerie,
              nomRagot,
              nomResistanceAlcool,
              nomSavoirPolitique,
              nomSubornation,
            ],
          },
          {
            titre: nomAgitateur,
            statut: {
              echelon: bronze,
              standing: 2,
            },
            caracs: [nomAgilete],
            competences: [
              nomCalme,
              nomCommandement,
              nomDivertissementNarration,
              nomEsquive,
              nomIntuition,
              nomPari,
            ],
          },
          {
            titre: nomFauteurTrouble,
            statut: {
              echelon: bronze,
              standing: 3,
            },
            caracs: [nomCC],
            competences: [
              nomAthletisme,
              nomCorpsACorpsBagarre,
              nomIntimidation,
              nomPerception,
            ],
          },
          {
            titre: nomDemagogue,
            statut: {
              echelon: bronze,
              standing: 5,
            },
            caracs: [nomInitiative],
            competences: [nomChevaucher, nomSavoirHeraldique],
          },
        ],
      },
      {
        titre: nomArtisan,
        description: 'Artisan',
        evolutions: [
          {
            titre: nomApprentiArtisan,
            statut: {
              echelon: bronze,
              standing: 2,
            },
            caracs: [nomForce, nomEndurance, nomDexterite],
            competences: [
              nomAthletisme,
              nomCalme,
              nomDiscretionUrbaine,
              nomEsquive,
              nomEvaluation,
              nomMetier,
              nomResistance,
              nomResistanceAlcool,
            ],
          },
          {
            titre: nomArtisan,
            statut: {
              echelon: argent,
              standing: 1,
            },
            caracs: [nomSociabilite],
            competences: [
              nomCharme,
              nomLangueGuilde,
              nomMarchandage,
              nomPerception,
              nomSavoirRegion,
              nomRagot,
            ],
          },
          {
            titre: nomMaitreArtisan,
            statut: {
              echelon: argent,
              standing: 3,
            },
            caracs: [nomForceMentale],
            competences: [
              nomCommandement,
              nomIntuition,
              nomRecherche,
              nomSignesSecretsGuilde,
            ],
          },
          {
            titre: nomMaitreGuilde,
            statut: {
              echelon: or,
              standing: 1,
            },
            caracs: [nomIntelligence],
            competences: [nomIntimidation, nomSubornation],
          },
        ],
      },
      {
        titre: nomBourgeois,
        description: 'Bourgeois',
        evolutions: [
          {
            titre: nomEmploye,
            statut: {
              echelon: argent,
              standing: 1,
            },
            caracs: [nomAgilete, nomIntelligence, nomSociabilite],
            competences: [
              nomCharme,
              nomConduiteAttelage,
              nomEscalade,
              nomEsquive,
              nomMarchandage,
              nomPari,
              nomRagot,
              nomResistanceAlcool,
            ],
          },
          {
            titre: nomBourgeois,
            statut: {
              echelon: argent,
              standing: 2,
            },
            caracs: [nomInitiative],
            competences: [
              nomCorpsACorpsBagarre,
              nomEvaluation,
              nomMusicien,
              nomIntuition,
              nomSavoirRegion,
              nomSubornation,
            ],
          },
          {
            titre: nomConseillerMunicipal,
            statut: {
              echelon: argent,
              standing: 5,
            },
            caracs: [nomDexterite],
            competences: [nomCalme, nomPerception, nomRecherche, nomSavoirLoi],
          },
          {
            titre: nomBourgmestre,
            statut: {
              echelon: or,
              standing: 1,
            },
            caracs: [nomForceMentale],
            competences: [nomIntimidation, nomSavoirPolitique],
          },
        ],
      },
      {
        titre: nomEnqueteur,
        description: 'Enqu??teur',
        evolutions: [
          {
            titre: nomLimier,
            statut: {
              echelon: argent,
              standing: 1,
            },
            caracs: [nomInitiative, nomAgilete, nomIntelligence],
            competences: [
              nomCalme,
              nomCharme,
              nomDiscretionUrbaine,
              nomEscalade,
              nomIntuition,
              nomPerception,
              nomPistage,
              nomRagot,
            ],
          },
          {
            titre: nomEnqueteur,
            statut: {
              echelon: argent,
              standing: 2,
            },
            caracs: [nomSociabilite],
            competences: [
              nomCorpsACorpsBagarre,
              nomCrochetage,
              nomEscamotage,
              nomEsquive,
              nomResistanceAlcool,
              nomSavoirLoi,
            ],
          },
          {
            titre: nomMaitreEnqueteur,
            statut: {
              echelon: argent,
              standing: 3,
            },
            caracs: [nomDexterite],
            competences: [
              nomCommandement,
              nomEvaluation,
              nomSavoirChoix1,
              nomSubornation,
            ],
          },
          {
            titre: nomDetective,
            statut: {
              echelon: argent,
              standing: 5,
            },
            caracs: [nomForceMentale],
            competences: [nomIntimidation, nomSavoirChoix2],
          },
        ],
      },
      {
        titre: nomMarchand,
        description: 'Marchand',
        evolutions: [
          {
            titre: nomNegociant,
            statut: {
              echelon: argent,
              standing: 2,
            },
            caracs: [nomAgilete, nomForceMentale, nomSociabilite],
            competences: [
              nomConduiteAttelage,
              nomCharme,
              nomMarchandage,
              nomPari,
              nomRagot,
              nomResistanceAlcool,
              nomSoinsAnimaux,
              nomSubornation,
            ],
          },
          {
            titre: nomMarchand,
            statut: {
              echelon: argent,
              standing: 5,
            },
            caracs: [nomIntelligence],
            competences: [
              nomEvaluation,
              nomIntuition,
              nomLangueAuChoix1,
              nomLangueGuilde,
              nomPerception,
              nomSavoirRegion,
            ],
          },
          {
            titre: nomMaitreMarchand,
            statut: {
              echelon: or,
              standing: 1,
            },
            caracs: [nomInitiative],
            competences: [
              nomCalme,
              nomLangueClassique,
              nomOrientation,
              nomSignesSecretsGuilde,
            ],
          },
          {
            titre: nomPrinceMarchand,
            statut: {
              echelon: or,
              standing: 3,
            },
            caracs: [nomCC],
            competences: [nomIntimidation, nomSavoirChoix1],
          },
        ],
      },
      {
        titre: nomMendiant,
        description: 'Mendiant',
        evolutions: [
          {
            titre: nomIndigent,
            statut: {
              echelon: bronze,
              standing: 0,
            },
            caracs: [nomEndurance, nomAgilete, nomSociabilite],
            competences: [
              nomAthletisme,
              nomCalme,
              nomCharme,
              nomDiscretionUrbaine,
              nomEsquive,
              nomIntuition,
              nomResistance,
              nomResistanceAlcool,
            ],
          },
          {
            titre: nomMendiant,
            statut: {
              echelon: bronze,
              standing: 2,
            },
            caracs: [nomForceMentale],
            competences: [
              nomDivertissementInterpretation,
              nomDivertissementAuChoix1,
              nomEscamotage,
              nomMarchandage,
              nomPerception,
              nomRagot,
            ],
          },
          {
            titre: nomMaitreMendiant,
            statut: {
              echelon: bronze,
              standing: 4,
            },
            caracs: [nomCC],
            competences: [
              nomCommandement,
              nomEmpriseSurAnimaux,
              nomSavoirRegion,
              nomSignesSecretsVagabond,
            ],
          },
          {
            titre: nomRoiMendiant,
            statut: {
              echelon: argent,
              standing: 2,
            },
            caracs: [nomInitiative],
            competences: [nomIntimidation, nomSubornation],
          },
        ],
      },
      {
        titre: nomMilicien,
        description: 'Milicien',
        evolutions: [
          {
            titre: nomRecrueMilice,
            statut: {
              echelon: bronze,
              standing: 3,
            },
            caracs: [nomCC, nomForce, nomSociabilite],
            competences: [
              nomAthletisme,
              nomCorpsACorpsAuChoix,
              nomEscalade,
              nomPari,
              nomEsquive,
              nomPerception,
              nomResistance,
              nomResistanceAlcool,
            ],
          },
          {
            titre: nomMilicien,
            statut: {
              echelon: argent,
              standing: 1,
            },
            caracs: [nomForceMentale],
            competences: [
              nomCharme,
              nomCalme,
              nomIntimidation,
              nomIntuition,
              nomRagot,
              nomSavoirRegion,
            ],
          },
          {
            titre: nomSergentMilice,
            statut: {
              echelon: argent,
              standing: 3,
            },
            caracs: [nomInitiative],
            competences: [
              nomCommandement,
              nomDivertissementNarration,
              nomMarchandage,
              nomSavoirLoi,
            ],
          },
          {
            titre: nomCapitaineMilice,
            statut: {
              echelon: or,
              standing: 1,
            },
            caracs: [nomIntelligence],
            competences: [nomChevaucher, nomSavoirPolitique],
          },
        ],
      },
      {
        titre: nomRatier,
        description: 'Ratier',
        evolutions: [
          {
            titre: nomChasseurRat,
            statut: {
              echelon: bronze,
              standing: 3,
            },
            caracs: [nomCC, nomCT, nomForceMentale],
            competences: [
              nomAthletisme,
              nomDressageChien,
              nomCorpsACorpsBase,
              nomDiscretionSouterraine,
              nomEmpriseSurAnimaux,
              nomProjectilesFronde,
              nomResistance,
              nomResistanceAlcool,
            ],
          },
          {
            titre: nomRatier,
            statut: {
              echelon: argent,
              standing: 1,
            },
            caracs: [nomEndurance],
            competences: [
              nomMarchandage,
              nomPerception,
              nomPiegeage,
              nomRagot,
              nomSavoirPoison,
              nomSoinsAnimaux,
            ],
          },
          {
            titre: nomEgoutier,
            statut: {
              echelon: argent,
              standing: 2,
            },
            caracs: [nomInitiative],
            competences: [
              nomCalme,
              nomEscalade,
              nomEsquive,
              nomProjectilesArbaletePoing,
            ],
          },
          {
            titre: nomExterminateur,
            statut: {
              echelon: argent,
              standing: 3,
            },
            caracs: [nomForce],
            competences: [nomCommandement, nomPistage],
          },
        ],
      },
    ],
  },
  {
    titre: nomCourtisans,
    description: 'Courtisans',
    carrieres: [
      {
        titre: nomArtiste,
        description: 'Artiste',
        evolutions: [
          {
            titre: nomArtisteApprenti,
            statut: {
              echelon: argent,
              standing: 1,
            },
            caracs: [nomForce, nomInitiative, nomDexterite],
            competences: [
              nomArtAuChoix,
              nomCalme,
              nomDiscretionUrbaine,
              nomEvaluation,
              nomPerception,
              nomRagot,
              nomResistance,
              nomResistanceAlcool,
            ],
          },
          {
            titre: nomArtiste,
            statut: {
              echelon: argent,
              standing: 3,
            },
            caracs: [nomSociabilite],
            competences: [
              nomEscalade,
              nomIntuition,
              nomLangueClassique,
              nomMarchandage,
              nomMetierMaterielArtistique,
              nomPari,
            ],
          },
          {
            titre: nomArtisteRenom,
            statut: {
              echelon: argent,
              standing: 5,
            },
            caracs: [nomForceMentale],
            competences: [
              nomCharme,
              nomCommandement,
              nomSavoirArt,
              nomSavoirHeraldique,
            ],
          },
          {
            titre: nomMaestro,
            statut: {
              echelon: or,
              standing: 2,
            },
            caracs: [nomIntelligence],
            competences: [nomChevaucher, nomRecherche],
          },
        ],
      },
      {
        titre: nomConseiller,
        description: 'Conseiller',
        evolutions: [
          {
            titre: nomAssistant,
            statut: {
              echelon: argent,
              standing: 2,
            },
            caracs: [nomEndurance, nomInitiative, nomAgilete],
            competences: [
              nomLangueClassique,
              nomMarchandage,
              nomSubornation,
              nomSavoirPolitique,
              nomPerception,
              nomRagot,
              nomResistance,
              nomResistanceAlcool,
            ],
          },
          {
            titre: nomConseiller,
            statut: {
              echelon: argent,
              standing: 4,
            },
            caracs: [nomSociabilite],
            competences: [
              nomCalme,
              nomCharme,
              nomEvaluation,
              nomIntuition,
              nomPari,
              nomSavoirRegion,
            ],
          },
          {
            titre: nomConsultant,
            statut: {
              echelon: or,
              standing: 1,
            },
            caracs: [nomIntelligence],
            competences: [
              nomCommandement,
              nomDivertissementNarration,
              nomLangueAuChoix1,
              nomSavoirChoix1,
            ],
          },
          {
            titre: nomChancelier,
            statut: {
              echelon: or,
              standing: 3,
            },
            caracs: [nomForceMentale],
            competences: [nomChevaucher, nomSavoirHeraldique],
          },
        ],
      },
      {
        titre: nomDuelliste,
        description: 'Duelliste',
        evolutions: [
          {
            titre: nomEscrimeur,
            statut: {
              echelon: argent,
              standing: 3,
            },
            caracs: [nomCC, nomInitiative, nomAgilete],
            competences: [
              nomAthletisme,
              nomCorpsACorpsAuChoix,
              nomEsquive,
              nomGuerison,
              nomIntuition,
              nomLangueClassique,
              nomResistance,
              nomPerception,
            ],
          },
          {
            titre: nomDuelliste,
            statut: {
              echelon: argent,
              standing: 5,
            },
            caracs: [nomCT],
            competences: [
              nomCalme,
              nomCharme,
              nomCorpsACorpsParade,
              nomMetierArmurier,
              nomPari,
              nomProjectilesPoudreNoire,
            ],
          },
          {
            titre: nomMaitreDuelliste,
            statut: {
              echelon: or,
              standing: 1,
            },
            caracs: [nomForce],
            competences: [
              nomCommandement,
              nomCorpsACorpsBase,
              nomIntimidation,
              nomRepresentationAcrobatie,
            ],
          },
          {
            titre: nomChampionJustice,
            statut: {
              echelon: or,
              standing: 3,
            },
            caracs: [nomForceMentale],
            competences: [nomCorpsACorpsAuChoix2, nomSavoirLoi],
          },
        ],
      },
      {
        titre: nomEmissaire,
        description: 'Emissaire',
        evolutions: [
          {
            titre: nomHeraut,
            statut: {
              echelon: argent,
              standing: 2,
            },
            caracs: [nomEndurance, nomAgilete, nomSociabilite],
            competences: [
              nomAthletisme,
              nomCharme,
              nomChevaucher,
              nomConduiteAttelage,
              nomEsquive,
              nomIntuition,
              nomRamer,
              nomResistance,
            ],
          },
          {
            titre: nomEmissaire,
            statut: {
              echelon: argent,
              standing: 4,
            },
            caracs: [nomIntelligence],
            competences: [
              nomArtEcriture,
              nomCalme,
              nomMarchandage,
              nomRagot,
              nomSavoirPolitique,
              nomSubornation,
            ],
          },
          {
            titre: nomDiplomate,
            statut: {
              echelon: or,
              standing: 2,
            },
            caracs: [nomInitiative],
            competences: [
              nomCommandement,
              nomIntimidation,
              nomLangueAuChoix1,
              nomOrientation,
            ],
          },
          {
            titre: nomAmbassadeur,
            statut: {
              echelon: or,
              standing: 5,
            },
            caracs: [nomForceMentale],
            competences: [nomLangueAuChoix2, nomSavoirChoix1],
          },
        ],
      },
      {
        titre: nomEspion,
        description: 'Espion',
        evolutions: [
          {
            titre: nomInformateur,
            statut: {
              echelon: bronze,
              standing: 3,
            },
            caracs: [nomAgilete, nomForceMentale, nomSociabilite],
            competences: [
              nomCalme,
              nomCharme,
              nomDiscretionAuChoix,
              nomPerception,
              nomMarchandage,
              nomPari,
              nomRagot,
              nomSubornation,
            ],
          },
          {
            titre: nomEspion,
            statut: {
              echelon: argent,
              standing: 3,
            },
            caracs: [nomCC],
            competences: [
              nomCorpsACorpsBase,
              nomDivertissementInterpretation,
              nomEscalade,
              nomEscamotage,
              nomSignesSecretsGuilde,
              nomIntuition,
            ],
          },
          {
            titre: nomAgentSecret,
            statut: {
              echelon: or,
              standing: 1,
            },
            caracs: [nomInitiative],
            competences: [
              nomCommandement,
              nomDressageChien,
              nomLangueAuChoix1,
              nomSoinsAnimaux,
            ],
          },
          {
            titre: nomMaitreEspion,
            statut: {
              echelon: or,
              standing: 4,
            },
            caracs: [nomIntelligence],
            competences: [nomRecherche, nomSavoirChoix1],
          },
        ],
      },
      {
        titre: nomIntendant,
        description: 'Intendant',
        evolutions: [
          {
            titre: nomGardien,
            statut: {
              echelon: argent,
              standing: 1,
            },
            caracs: [nomForce, nomEndurance, nomForceMentale],
            competences: [
              nomCalme,
              nomAthletisme,
              nomEmpriseSurAnimaux,
              nomPerception,
              nomIntuition,
              nomResistance,
              nomResistanceAlcool,
              nomSavoirRegion,
            ],
          },
          {
            titre: nomIntendant,
            statut: {
              echelon: argent,
              standing: 3,
            },
            caracs: [nomCC],
            competences: [
              nomChevaucher,
              nomCorpsACorpsBase,
              nomNatation,
              nomProjectilesArc,
              nomSurvieExterieur,
              nomSoinsAnimaux,
            ],
          },
          {
            titre: nomSenechal,
            statut: {
              echelon: or,
              standing: 1,
            },
            caracs: [nomSociabilite],
            competences: [nomCharme, nomCommandement, nomRagot, nomSubornation],
          },
          {
            titre: nomGouverneur,
            statut: {
              echelon: or,
              standing: 3,
            },
            caracs: [nomIntelligence],
            competences: [nomEvaluation, nomLangueAuChoix1],
          },
        ],
      },
      {
        titre: nomNoble,
        description: 'Noble',
        evolutions: [
          {
            titre: nomHeritier,
            statut: {
              echelon: or,
              standing: 1,
            },
            caracs: [nomCC, nomInitiative, nomDexterite],
            competences: [
              nomCommandement,
              nomCorpsACorpsBase,
              nomIntimidation,
              nomMusicien,
              nomPari,
              nomSavoirHeraldique,
              nomResistanceAlcool,
              nomSubornation,
            ],
          },
          {
            titre: nomNoble,
            statut: {
              echelon: or,
              standing: 3,
            },
            caracs: [nomSociabilite],
            competences: [
              nomCharme,
              nomChevaucher,
              nomCorpsACorpsParade,
              nomLangueClassique,
              nomRagot,
              nomSavoirRegion,
            ],
          },
          {
            titre: nomMagnat,
            statut: {
              echelon: or,
              standing: 5,
            },
            caracs: [nomIntelligence],
            competences: [
              nomLangueAuChoix1,
              nomSavoirPolitique,
              nomPerception,
              nomIntuition,
            ],
          },
          {
            titre: nomNobleSeigneur,
            statut: {
              echelon: or,
              standing: 7,
            },
            caracs: [nomForceMentale],
            competences: [nomPistage, nomSavoirChoix1],
          },
        ],
      },
      {
        titre: nomServiteur,
        description: 'Serviteur',
        evolutions: [
          {
            titre: nomDomestique,
            statut: {
              echelon: argent,
              standing: 1,
            },
            caracs: [nomForce, nomEndurance, nomAgilete],
            competences: [
              nomConduiteAttelage,
              nomAthletisme,
              nomDiscretionAuChoix,
              nomPerception,
              nomIntuition,
              nomResistance,
              nomEscalade,
              nomEsquive,
            ],
          },
          {
            titre: nomServiteur,
            statut: {
              echelon: argent,
              standing: 3,
            },
            caracs: [nomInitiative],
            competences: [
              nomEvaluation,
              nomMarchandage,
              nomPari,
              nomRagot,
              nomSoinsAnimaux,
              nomResistanceAlcool,
            ],
          },
          {
            titre: nomValet,
            statut: {
              echelon: argent,
              standing: 5,
            },
            caracs: [nomIntelligence],
            competences: [
              nomCalme,
              nomCharme,
              nomIntimidation,
              nomSavoirRegion,
            ],
          },
          {
            titre: nomRegisseur,
            statut: {
              echelon: or,
              standing: 1,
            },
            caracs: [nomSociabilite],
            competences: [nomCommandement, nomCorpsACorpsBase],
          },
        ],
      },
    ],
  },
  {
    titre: nomGuerriers,
    description: 'Guerriers',
    carrieres: [
      {
        titre: nomCavalier,
        description: 'Cavalier',
        evolutions: [
          {
            titre: nomApprentiCavalier,
            statut: {
              echelon: argent,
              standing: 2,
            },
            caracs: [nomCC, nomForce, nomAgilete],
            competences: [
              nomChevaucher,
              nomCorpsACorpsBase,
              nomEmpriseSurAnimaux,
              nomLangueBataille,
              nomPerception,
              nomResistance,
              nomSoinsAnimaux,
              nomSurvieExterieur,
            ],
          },
          {
            titre: nomCavalier,
            statut: {
              echelon: argent,
              standing: 4,
            },
            caracs: [nomCT],
            competences: [
              nomCalme,
              nomCharme,
              nomCorpsACorpsCavalerie,
              nomProjectilesPoudreNoire,
              nomRagot,
              nomResistanceAlcool,
            ],
          },
          {
            titre: nomSergentCavalerie,
            statut: {
              echelon: or,
              standing: 1,
            },
            caracs: [nomInitiative],
            competences: [
              nomCommandement,
              nomIntuition,
              nomIntimidation,
              nomSavoirGuerre,
            ],
          },
          {
            titre: nomOfficierCavalerie,
            statut: {
              echelon: or,
              standing: 2,
            },
            caracs: [nomSociabilite],
            competences: [nomPari, nomSavoirHeraldique],
          },
        ],
      },
      {
        titre: nomChevalier,
        description: 'Chevalier',
        evolutions: [
          {
            titre: nomEcuyer,
            statut: {
              echelon: argent,
              standing: 3,
            },
            caracs: [nomForce, nomInitiative, nomAgilete],
            competences: [
              nomChevaucher,
              nomCorpsACorpsCavalerie,
              nomEmpriseSurAnimaux,
              nomAthletisme,
              nomGuerison,
              nomSavoirHeraldique,
              nomSoinsAnimaux,
              nomMetierMarechalFerrant,
            ],
          },
          {
            titre: nomChevalier,
            statut: {
              echelon: argent,
              standing: 5,
            },
            caracs: [nomCC],
            competences: [
              nomCalme,
              nomCorpsACorpsAuChoix,
              nomEsquive,
              nomLangueBataille,
              nomIntimidation,
              nomResistance,
            ],
          },
          {
            titre: nomChevalierCommandeur,
            statut: {
              echelon: or,
              standing: 2,
            },
            caracs: [nomForceMentale],
            competences: [
              nomCharme,
              nomCommandement,
              nomResistanceAlcool,
              nomSavoirGuerre,
            ],
          },
          {
            titre: nomChevalierCercleInterieur,
            statut: {
              echelon: or,
              standing: 4,
            },
            caracs: [nomSociabilite],
            competences: [nomSavoirChoix1, nomSignesSecretsOrdreChevaleresque],
          },
        ],
      },
      {
        titre: nomGarde,
        description: 'Garde',
        evolutions: [
          {
            titre: nomSentinelle,
            statut: {
              echelon: argent,
              standing: 1,
            },
            caracs: [nomCC, nomEndurance, nomAgilete],
            competences: [
              nomDivertissementNarration,
              nomCorpsACorpsBase,
              nomIntuition,
              nomPari,
              nomPerception,
              nomRagot,
              nomResistance,
              nomResistanceAlcool,
            ],
          },
          {
            titre: nomGarde,
            statut: {
              echelon: argent,
              standing: 2,
            },
            caracs: [nomInitiative],
            competences: [
              nomAthletisme,
              nomCorpsACorpsHast,
              nomEsquive,
              nomIntimidation,
              nomProjectilesArc,
              nomCalme,
            ],
          },
          {
            titre: nomGardeHonneur,
            statut: {
              echelon: argent,
              standing: 3,
            },
            caracs: [nomForce],
            competences: [
              nomLangueBataille,
              nomSavoirArt,
              nomGuerison,
              nomCorpsACorpsDeuxMains,
            ],
          },
          {
            titre: nomGardeOfficier,
            statut: {
              echelon: argent,
              standing: 5,
            },
            caracs: [nomIntelligence],
            competences: [nomCommandement, nomSavoirGuerre],
          },
        ],
      },
      {
        titre: nomGladiateur,
        description: 'Gladiateur',
        evolutions: [
          {
            titre: nomPugiliste,
            statut: {
              echelon: bronze,
              standing: 4,
            },
            caracs: [nomCC, nomForce, nomEndurance],
            competences: [
              nomAthletisme,
              nomCorpsACorpsBagarre,
              nomCorpsACorpsAuChoix,
              nomCalme,
              nomEsquive,
              nomIntimidation,
              nomPari,
              nomResistance,
            ],
          },
          {
            titre: nomGladiateur,
            statut: {
              echelon: argent,
              standing: 2,
            },
            caracs: [nomInitiative],
            competences: [
              nomCorpsACorpsBase,
              nomCorpsACorpsDeuxMains,
              nomIntuition,
              nomPerception,
              nomMarchandage,
              nomProjectilesFronde,
            ],
          },
          {
            titre: nomChampionFosse,
            statut: {
              echelon: argent,
              standing: 5,
            },
            caracs: [nomAgilete],
            competences: [
              nomResistanceAlcool,
              nomSavoirAnatomie,
              nomRagot,
              nomRepresentationCombat,
            ],
          },
          {
            titre: nomLegendeFosse,
            statut: {
              echelon: or,
              standing: 2,
            },
            caracs: [nomSociabilite],
            competences: [nomCharme, nomProjectilesChoix],
          },
        ],
      },
      {
        titre: nomPretreGuerrier,
        description: 'nomPretreGuerrier',
        evolutions: [
          {
            titre: nomNovice,
            statut: {
              echelon: bronze,
              standing: 2,
            },
            caracs: [nomCC, nomEndurance, nomForceMentale],
            competences: [
              nomCalme,
              nomCorpsACorpsAuChoix,
              nomEsquive,
              nomCommandement,
              nomGuerison,
              nomPriere,
              nomResistance,
              nomSavoirTheologie,
            ],
          },
          {
            titre: nomPretreGuerrier,
            statut: {
              echelon: argent,
              standing: 2,
            },
            caracs: [nomForce],
            competences: [
              nomCharme,
              nomCorpsACorpsAuChoix,
              nomDivertissementDiscours,
              nomIntimidation,
              nomLangueBataille,
              nomProjectilesChoix,
            ],
          },
          {
            titre: nomPretreSergent,
            statut: {
              echelon: argent,
              standing: 3,
            },
            caracs: [nomInitiative],
            competences: [
              nomChevaucher,
              nomIntuition,
              nomPerception,
              nomSoinsAnimaux,
            ],
          },
          {
            titre: nomPretreCapitaine,
            statut: {
              echelon: argent,
              standing: 4,
            },
            caracs: [nomSociabilite],
            competences: [nomResistanceAlcool, nomSavoirGuerre],
          },
        ],
      },
      {
        titre: nomSoldat,
        description: 'Soldat',
        evolutions: [
          {
            titre: nomRecrue,
            statut: {
              echelon: argent,
              standing: 1,
            },
            caracs: [nomCC, nomEndurance, nomForceMentale],
            competences: [
              nomCalme,
              nomCorpsACorpsBase,
              nomEsquive,
              nomAthletisme,
              nomMusicienTambourFifre,
              nomEscalade,
              nomResistance,
              nomLangueBataille,
            ],
          },
          {
            titre: nomSoldat,
            statut: {
              echelon: argent,
              standing: 3,
            },
            caracs: [nomCT],
            competences: [
              nomPari,
              nomCorpsACorpsAuChoix,
              nomProjectilesChoix,
              nomRagot,
              nomSurvieExterieur,
              nomResistanceAlcool,
            ],
          },
          {
            titre: nomSergent,
            statut: {
              echelon: argent,
              standing: 5,
            },
            caracs: [nomInitiative],
            competences: [
              nomCommandement,
              nomGuerison,
              nomIntuition,
              nomPerception,
            ],
          },
          {
            titre: nomOfficier,
            statut: {
              echelon: or,
              standing: 1,
            },
            caracs: [nomSociabilite],
            competences: [nomOrientation, nomSavoirGuerre],
          },
        ],
      },
      {
        titre: nomSpadassin,
        description: 'Spadassin',
        evolutions: [
          {
            titre: nomMatamore,
            statut: {
              echelon: bronze,
              standing: 2,
            },
            caracs: [nomCC, nomEndurance, nomAgilete],
            competences: [
              nomAthletisme,
              nomCorpsACorpsAuChoix,
              nomEsquive,
              nomDivertissementRaillerie,
              nomIntimidation,
              nomMarchandage,
              nomResistance,
              nomRagot,
            ],
          },
          {
            titre: nomSpadassin,
            statut: {
              echelon: argent,
              standing: 1,
            },
            caracs: [nomInitiative],
            competences: [
              nomCharme,
              nomChevaucher,
              nomCorpsACorpsBase,
              nomIntuition,
              nomPerception,
              nomSubornation,
            ],
          },
          {
            titre: nomTueurAGage,
            statut: {
              echelon: argent,
              standing: 4,
            },
            caracs: [nomCT],
            competences: [
              nomCalme,
              nomEscalade,
              nomOrientation,
              nomProjectilesArbaletePoing,
            ],
          },
          {
            titre: nomAssassin,
            statut: {
              echelon: or,
              standing: 1,
            },
            caracs: [nomSociabilite],
            competences: [
              nomDivertissementInterpretation,
              nomProjectilesArbalete,
            ],
          },
        ],
      },
      {
        titre: nomTueur,
        description: 'Tueur',
        evolutions: [
          {
            titre: nomTueurTroll,
            statut: {
              echelon: bronze,
              standing: 2,
            },
            caracs: [nomCC, nomForce, nomForceMentale],
            competences: [
              nomCalme,
              nomCorpsACorpsBase,
              nomEsquive,
              nomPari,
              nomGuerison,
              nomResistanceAlcool,
              nomResistance,
              nomSavoirTroll,
            ],
          },
          {
            titre: nomTueurGeant,
            statut: {
              echelon: bronze,
              standing: 2,
            },
            caracs: [nomEndurance],
            competences: [
              nomEvaluation,
              nomCorpsACorpsDeuxMains,
              nomIntimidation,
              nomLangueBataille,
              nomSavoirGeants,
              nomSurvieExterieur,
            ],
          },
          {
            titre: nomTueurDragons,
            statut: {
              echelon: bronze,
              standing: 2,
            },
            caracs: [nomAgilete],
            competences: [
              nomDivertissementNarration,
              nomPerception,
              nomProjectilesLancer,
              nomSavoirDragons,
            ],
          },
          {
            titre: nomTueurDemons,
            statut: {
              echelon: bronze,
              standing: 2,
            },
            caracs: [nomInitiative],
            competences: [nomIntuition, nomSavoirChaos],
          },
        ],
      },
    ],
  },
  {
    titre: nomItinerants,
    description: 'Itin??rants',
    carrieres: [
      {
        titre: nomChasseurDePrimes,
        description: 'ChasseurDePrimes',
        evolutions: [
          {
            titre: nomChasseurVoleurs,
            statut: {
              echelon: argent,
              standing: 1,
            },
            caracs: [nomCC, nomEndurance, nomAgilete],
            competences: [
              nomCharme,
              nomCorpsACorpsBase,
              nomIntuition,
              nomMarchandage,
              nomPerception,
              nomRagot,
              nomSubornation,
              nomSurvieExterieur,
            ],
          },
          {
            titre: nomChasseurDePrimes,
            statut: {
              echelon: argent,
              standing: 3,
            },
            caracs: [nomCT],
            competences: [
              nomAthletisme,
              nomIntimidation,
              nomProjectilesArbalete,
              nomPistage,
              nomProjectilesEntraves,
              nomResistance,
            ],
          },
          {
            titre: nomMaitreChasseurPrimes,
            statut: {
              echelon: argent,
              standing: 5,
            },
            caracs: [nomForce],
            competences: [
              nomChevaucher,
              nomEscalade,
              nomNatation,
              nomSoinsAnimaux,
            ],
          },
          {
            titre: nomChasseurPrimesVeteran,
            statut: {
              echelon: or,
              standing: 1,
            },
            caracs: [nomIntelligence],
            competences: [nomConduiteAttelage, nomSavoirLoi],
          },
        ],
      },
      {
        titre: nomCocher,
        description: 'Cocher',
        evolutions: [
          {
            titre: nomPostillon,
            statut: {
              echelon: argent,
              standing: 1,
            },
            caracs: [nomCT, nomEndurance, nomForceMentale],
            competences: [
              nomChevaucher,
              nomConduiteAttelage,
              nomEmpriseSurAnimaux,
              nomEscalade,
              nomPerception,
              nomProjectilesEntraves,
              nomResistance,
              nomSoinsAnimaux,
            ],
          },
          {
            titre: nomCocher,
            statut: {
              echelon: argent,
              standing: 2,
            },
            caracs: [nomAgilete],
            competences: [
              nomIntuition,
              nomOrientation,
              nomProjectilesPoudreNoire,
              nomRagot,
              nomSavoirRegion,
              nomResistanceAlcool,
            ],
          },
          {
            titre: nomMaitreCocher,
            statut: {
              echelon: argent,
              standing: 3,
            },
            caracs: [nomCC],
            competences: [
              nomDressageCheval,
              nomIntimidation,
              nomLangueAuChoix1,
              nomSavoirAnatomie,
            ],
          },
          {
            titre: nomMaitreRoutes,
            statut: {
              echelon: argent,
              standing: 5,
            },
            caracs: [nomInitiative],
            competences: [nomCharme, nomCommandement],
          },
        ],
      },
      {
        titre: nomColporteur,
        description: 'Colporteur',
        evolutions: [
          {
            titre: nomVagabond,
            statut: {
              echelon: bronze,
              standing: 1,
            },
            caracs: [nomDexterite, nomEndurance, nomForceMentale],
            competences: [
              nomCharme,
              nomDiscretionUrbaine,
              nomDivertissementNarration,
              nomIntuition,
              nomMarchandage,
              nomRagot,
              nomResistance,
              nomSurvieExterieur,
            ],
          },
          {
            titre: nomColporteur,
            statut: {
              echelon: bronze,
              standing: 4,
            },
            caracs: [nomSociabilite],
            competences: [
              nomChevaucher,
              nomEmpriseSurAnimaux,
              nomEvaluation,
              nomMetierBricoleur,
              nomSoinsAnimaux,
              nomResistanceAlcool,
            ],
          },
          {
            titre: nomMaitreColporteur,
            statut: {
              echelon: argent,
              standing: 1,
            },
            caracs: [nomInitiative],
            competences: [
              nomConduiteAttelage,
              nomIntimidation,
              nomLangueAuChoix1,
              nomPerception,
            ],
          },
          {
            titre: nomNegociantItinerant,
            statut: {
              echelon: argent,
              standing: 3,
            },
            caracs: [nomIntelligence],
            competences: [nomSavoirRegion, nomSavoirGeographie],
          },
        ],
      },
      {
        titre: nomFlagellant,
        description: 'Flagellant',
        evolutions: [
          {
            titre: nomZelote,
            statut: {
              echelon: bronze,
              standing: 0,
            },
            caracs: [nomCC, nomEndurance, nomForce],
            competences: [
              nomCorpsACorpsFleau,
              nomEsquive,
              nomGuerison,
              nomIntuition,
              nomIntimidation,
              nomSavoirSigmar,
              nomResistance,
              nomSurvieExterieur,
            ],
          },
          {
            titre: nomFlagellant,
            statut: {
              echelon: bronze,
              standing: 0,
            },
            caracs: [nomForceMentale],
            competences: [
              nomArtIcones,
              nomAthletisme,
              nomCalme,
              nomLangueClassique,
              nomProjectilesFronde,
              nomSavoirEmpire,
            ],
          },
          {
            titre: nomPenitent,
            statut: {
              echelon: bronze,
              standing: 0,
            },
            caracs: [nomInitiative],
            competences: [
              nomCharme,
              nomLangueAuChoix1,
              nomPerception,
              nomSavoirTheologie,
            ],
          },
          {
            titre: nomPropheteDuDestin,
            statut: {
              echelon: bronze,
              standing: 0,
            },
            caracs: [nomSociabilite],
            competences: [nomCommandement, nomDivertissementDiscours],
          },
        ],
      },
      {
        titre: nomMessager,
        description: 'Messager',
        evolutions: [
          {
            titre: nomCoureur,
            statut: {
              echelon: bronze,
              standing: 3,
            },
            caracs: [nomInitiative, nomEndurance, nomAgilete],
            competences: [
              nomCorpsACorpsBagarre,
              nomEsquive,
              nomAthletisme,
              nomEscalade,
              nomOrientation,
              nomPerception,
              nomResistance,
              nomRagot,
            ],
          },
          {
            titre: nomMessager,
            statut: {
              echelon: argent,
              standing: 1,
            },
            caracs: [nomCC],
            competences: [
              nomCalme,
              nomCharme,
              nomChevaucher,
              nomCorpsACorpsBase,
              nomSoinsAnimaux,
              nomSavoirRegion,
            ],
          },
          {
            titre: nomEstafette,
            statut: {
              echelon: argent,
              standing: 3,
            },
            caracs: [nomForceMentale],
            competences: [
              nomEmpriseSurAnimaux,
              nomSubornation,
              nomResistanceAlcool,
              nomSurvieExterieur,
            ],
          },
          {
            titre: nomMessagerVeteran,
            statut: {
              echelon: argent,
              standing: 5,
            },
            caracs: [nomSociabilite],
            competences: [nomIntimidation, nomCommandement],
          },
        ],
      },
      {
        titre: nomPatrouilleurRoutier,
        description: 'Patrouilleur routier',
        evolutions: [
          {
            titre: nomPeager,
            statut: {
              echelon: bronze,
              standing: 5,
            },
            caracs: [nomCT, nomEndurance, nomInitiative],
            competences: [
              nomCorpsACorpsBase,
              nomMarchandage,
              nomPari,
              nomProjectilesArbalete,
              nomRagot,
              nomPerception,
              nomResistanceAlcool,
              nomSubornation,
            ],
          },
          {
            titre: nomPatrouilleurRoutier,
            statut: {
              echelon: argent,
              standing: 2,
            },
            caracs: [nomCC],
            competences: [
              nomChevaucher,
              nomIntuition,
              nomIntimidation,
              nomSoinsAnimaux,
              nomSurvieExterieur,
              nomResistance,
            ],
          },
          {
            titre: nomSergentPatrouilleur,
            statut: {
              echelon: argent,
              standing: 4,
            },
            caracs: [nomSociabilite],
            competences: [
              nomAthletisme,
              nomCharme,
              nomCommandement,
              nomProjectilesPoudreNoire,
            ],
          },
          {
            titre: nomCapitainePatrouilleur,
            statut: {
              echelon: or,
              standing: 1,
            },
            caracs: [nomIntelligence],
            competences: [nomOrientation, nomSavoirEmpire],
          },
        ],
      },
      {
        titre: nomRepurgateur,
        description: 'Repurgateur',
        evolutions: [
          {
            titre: nomInterrogateur,
            statut: {
              echelon: argent,
              standing: 1,
            },
            caracs: [nomCC, nomEndurance, nomForceMentale],
            competences: [
              nomCorpsACorpsBagarre,
              nomCharme,
              nomGuerison,
              nomIntimidation,
              nomIntuition,
              nomPerception,
              nomResistanceAlcool,
              nomSavoirTorture,
            ],
          },
          {
            titre: nomRepurgateur,
            statut: {
              echelon: argent,
              standing: 3,
            },
            caracs: [nomCT],
            competences: [
              nomCorpsACorpsBase,
              nomCalme,
              nomChevaucher,
              nomProjectilesChoix,
              nomRagot,
              nomSavoirSorciere,
            ],
          },
          {
            titre: nomInquisiteur,
            statut: {
              echelon: argent,
              standing: 5,
            },
            caracs: [nomSociabilite],
            competences: [
              nomCommandement,
              nomSavoirLoi,
              nomResistance,
              nomSavoirRegion,
            ],
          },
          {
            titre: nomRepurgateurVeteran,
            statut: {
              echelon: or,
              standing: 1,
            },
            caracs: [nomIntelligence],
            competences: [nomSavoirChaos, nomSavoirPolitique],
          },
        ],
      },
      {
        titre: nomSaltimbanque,
        description: 'Saltimbanque',
        evolutions: [
          {
            titre: nomMusicienDesRues,
            statut: {
              echelon: bronze,
              standing: 3,
            },
            caracs: [nomAgilete, nomDexterite, nomSociabilite],
            competences: [
              nomAthletisme,
              nomCharme,
              nomDivertissementAuChoix1,
              nomEscamotage,
              nomMarchandage,
              nomMusicien,
              nomRagot,
              nomRepresentation,
            ],
          },
          {
            titre: nomSaltimbanque,
            statut: {
              echelon: bronze,
              standing: 5,
            },
            caracs: [nomCC],
            competences: [
              nomCorpsACorpsBase,
              nomChevaucher,
              nomDivertissementAuChoix2,
              nomMusicienAuChoix,
              nomProjectilesLancer,
              nomRepresentationAuChoix,
            ],
          },
          {
            titre: nomTroubadour,
            statut: {
              echelon: argent,
              standing: 3,
            },
            caracs: [nomCT],
            competences: [
              nomArtEcriture,
              nomDressage,
              nomLangueAuChoix1,
              nomSoinsAnimaux,
            ],
          },
          {
            titre: nomChefTroupe,
            statut: {
              echelon: or,
              standing: 1,
            },
            caracs: [nomEndurance],
            competences: [nomCommandement, nomConduiteAttelage],
          },
        ],
      },
    ],
  },
  {
    titre: nomLettres,
    description: 'Lettr??s',
    carrieres: [
      {
        titre: nomApothicaire,
        description: 'Apothicaire',
        evolutions: [
          {
            titre: nomApprentiApothicaire,
            statut: {
              echelon: bronze,
              standing: 3,
            },
            caracs: [nomEndurance, nomDexterite, nomIntelligence],
            competences: [
              nomGuerison,
              nomLangueClassique,
              nomMetierApothicaire,
              nomMetierEmpoisonneur,
              nomResistanceAlcool,
              nomSavoirChimie,
              nomSavoirRemede,
              nomSavoirPlantes,
            ],
          },
          {
            titre: nomApothicaire,
            statut: {
              echelon: argent,
              standing: 1,
            },
            caracs: [nomSociabilite],
            competences: [
              nomCharme,
              nomLangueGuilde,
              nomMarchandage,
              nomRagot,
              nomPerception,
              nomSavoirScience,
            ],
          },
          {
            titre: nomMaitreApothicaire,
            statut: {
              echelon: argent,
              standing: 3,
            },
            caracs: [nomInitiative],
            competences: [
              nomCommandement,
              nomIntuition,
              nomRecherche,
              nomSignesSecretsGuilde,
            ],
          },
          {
            titre: nomApothicaireRenom,
            statut: {
              echelon: or,
              standing: 1,
            },
            caracs: [nomForceMentale],
            competences: [nomChevaucher, nomIntimidation],
          },
        ],
      },
      {
        titre: nomErudit,
        description: 'Erudit',
        evolutions: [
          {
            titre: nomEtudiant,
            statut: {
              echelon: bronze,
              standing: 3,
            },
            caracs: [nomEndurance, nomForceMentale, nomIntelligence],
            competences: [
              nomDivertissementNarration,
              nomLangueClassique,
              nomMarchandage,
              nomPari,
              nomResistanceAlcool,
              nomRagot,
              nomRecherche,
              nomSavoirChoix1,
            ],
          },
          {
            titre: nomErudit,
            statut: {
              echelon: argent,
              standing: 2,
            },
            caracs: [nomInitiative],
            competences: [
              nomArtEcriture,
              nomLangueAuChoix1,
              nomIntuition,
              nomMetierAuChoix,
              nomPerception,
              nomSavoirChoix1,
            ],
          },
          {
            titre: nomChercheur,
            statut: {
              echelon: argent,
              standing: 5,
            },
            caracs: [nomSociabilite],
            competences: [
              nomDivertissementConference,
              nomLangueAuChoix1,
              nomSavoirChoix2,
              nomIntimidation,
            ],
          },
          {
            titre: nomProfesseur,
            statut: {
              echelon: or,
              standing: 1,
            },
            caracs: [nomDexterite],
            competences: [nomDivertissementRhetorique, nomSavoirChoix3],
          },
        ],
      },
      {
        titre: nomIngenieur,
        description: 'Ing??nieur',
        evolutions: [
          {
            titre: nomEtudiantIngenieur,
            statut: {
              echelon: bronze,
              standing: 4,
            },
            caracs: [nomCT, nomDexterite, nomIntelligence],
            competences: [
              nomCalme,
              nomLangueClassique,
              nomPerception,
              nomResistance,
              nomResistanceAlcool,
              nomProjectilesPoudreNoire,
              nomSavoirIngenierie,
              nomMetierIngenierie,
            ],
          },
          {
            titre: nomIngenieur,
            statut: {
              echelon: argent,
              standing: 2,
            },
            caracs: [nomInitiative],
            competences: [
              nomConduiteAttelage,
              nomEsquive,
              nomLangueGuilde,
              nomOrientation,
              nomProjectilesIngenierie,
              nomRecherche,
            ],
          },
          {
            titre: nomMaitreIngenieur,
            statut: {
              echelon: argent,
              standing: 4,
            },
            caracs: [nomEndurance],
            competences: [
              nomChevaucher,
              nomLangueKhazalid,
              nomCommandement,
              nomSignesSecretsGuilde,
            ],
          },
          {
            titre: nomIngenieurAgree,
            statut: {
              echelon: or,
              standing: 2,
            },
            caracs: [nomForceMentale],
            competences: [nomLangueAuChoix1, nomSavoirChoix1],
          },
        ],
      },
      {
        titre: nomJuriste,
        description: 'Juriste',
        evolutions: [
          {
            titre: nomEtudiantDroit,
            statut: {
              echelon: bronze,
              standing: 4,
            },
            caracs: [nomInitiative, nomDexterite, nomIntelligence],
            competences: [
              nomPerception,
              nomLangueClassique,
              nomSavoirTheologie,
              nomResistance,
              nomResistanceAlcool,
              nomRagot,
              nomRecherche,
              nomSavoirLoi,
            ],
          },
          {
            titre: nomJuriste,
            statut: {
              echelon: argent,
              standing: 3,
            },
            caracs: [nomSociabilite],
            competences: [
              nomCharme,
              nomLangueGuilde,
              nomIntuition,
              nomSignesSecretsGuilde,
              nomSubornation,
              nomRagot,
            ],
          },
          {
            titre: nomMaitreBarreau,
            statut: {
              echelon: or,
              standing: 1,
            },
            caracs: [nomForceMentale],
            competences: [
              nomDivertissementDiscours,
              nomIntimidation,
              nomArtEcriture,
              nomSavoirChoix1,
            ],
          },
          {
            titre: nomJuge,
            statut: {
              echelon: or,
              standing: 2,
            },
            caracs: [nomEndurance],
            competences: [nomCalme, nomSavoirChoix2],
          },
        ],
      },
      {
        titre: nomMedecin,
        description: 'nomMedecin',
        evolutions: [
          {
            titre: nomEtudiantMedecine,
            statut: {
              echelon: bronze,
              standing: 4,
            },
            caracs: [nomDexterite, nomForceMentale, nomIntelligence],
            competences: [
              nomPerception,
              nomCalme,
              nomConduiteAttelage,
              nomResistance,
              nomEscamotage,
              nomSubornation,
              nomGuerison,
              nomSubornation,
            ],
          },
          {
            titre: nomMedecin,
            statut: {
              echelon: argent,
              standing: 3,
            },
            caracs: [nomSociabilite],
            competences: [
              nomCharme,
              nomLangueGuilde,
              nomMarchandage,
              nomMetierBarbier,
              nomSavoirRemede,
              nomSavoirAnatomie,
            ],
          },
          {
            titre: nomDocteurMedecine,
            statut: {
              echelon: argent,
              standing: 5,
            },
            caracs: [nomInitiative],
            competences: [
              nomCommandement,
              nomResistanceAlcool,
              nomRecherche,
              nomIntimidation,
            ],
          },
          {
            titre: nomMedecinCour,
            statut: {
              echelon: or,
              standing: 1,
            },
            caracs: [nomAgilete],
            competences: [nomRepresentationDanse, nomSavoirNoble],
          },
        ],
      },
      {
        titre: nomNonne,
        description: 'Nonne',
        evolutions: [
          {
            titre: nomNovice,
            statut: {
              echelon: bronze,
              standing: 1,
            },
            caracs: [nomDexterite, nomSociabilite, nomIntelligence],
          },
          {
            titre: nomNonne,
            statut: {
              echelon: bronze,
              standing: 4,
            },
            caracs: [nomForceMentale],
          },
          {
            titre: nomAbbesse,
            statut: {
              echelon: argent,
              standing: 2,
            },
            caracs: [nomInitiative],
          },
          {
            titre: nomPrieureGenerale,
            statut: {
              echelon: argent,
              standing: 5,
            },
            caracs: [nomEndurance],
          },
        ],
      },
      {
        titre: nomPretre,
        description: 'nomPretre',
        evolutions: [
          {
            titre: nomInitie,
            statut: {
              echelon: bronze,
              standing: 2,
            },
            caracs: [nomEndurance, nomForceMentale, nomAgilete],
          },
          {
            titre: nomPretre,
            statut: {
              echelon: argent,
              standing: 1,
            },
            caracs: [nomSociabilite],
          },
          {
            titre: nomGrandPretre,
            statut: {
              echelon: or,
              standing: 1,
            },
            caracs: [nomIntelligence],
          },
          {
            titre: nomLecteur,
            statut: {
              echelon: or,
              standing: 2,
            },
            caracs: [nomInitiative],
          },
        ],
      },
      {
        titre: nomSorcier,
        description: 'Sorcier',
        evolutions: [
          {
            titre: nomSorcierNovice,
            statut: {
              echelon: bronze,
              standing: 3,
            },
            caracs: [nomCC, nomForceMentale, nomIntelligence],
          },
          {
            titre: nomSorcier,
            statut: {
              echelon: argent,
              standing: 3,
            },
            caracs: [nomAgilete],
          },
          {
            titre: nomMaitreSorcier,
            statut: {
              echelon: or,
              standing: 1,
            },
            caracs: [nomInitiative],
          },
          {
            titre: nomSeigneurSorcier,
            statut: {
              echelon: or,
              standing: 2,
            },
            caracs: [nomSociabilite],
          },
        ],
      },
    ],
  },
  {
    titre: nomRiverains,
    description: 'Riverains',
    carrieres: [
      {
        titre: nomBatelier,
        description: 'Batelier',
        evolutions: [
          {
            titre: nomCanotier,
            statut: {
              echelon: argent,
              standing: 1,
            },
            caracs: [nomForce, nomEndurance, nomAgilete],
          },
          {
            titre: nomBatelier,
            statut: {
              echelon: argent,
              standing: 2,
            },
            caracs: [nomInitiative],
          },
          {
            titre: nomChefBord,
            statut: {
              echelon: argent,
              standing: 3,
            },
            caracs: [nomDexterite],
          },
          {
            titre: nomCapitaine,
            statut: {
              echelon: argent,
              standing: 5,
            },
            caracs: [nomIntelligence],
          },
        ],
      },
      {
        titre: nomContrebandier,
        description: 'Contrebandier',
        evolutions: [
          {
            titre: nomCoureurRivieres,
            statut: {
              echelon: bronze,
              standing: 2,
            },
            caracs: [nomDexterite, nomForceMentale, nomAgilete],
          },
          {
            titre: nomContrebandier,
            statut: {
              echelon: bronze,
              standing: 3,
            },
            caracs: [nomInitiative],
          },
          {
            titre: nomMaitreContrebandier,
            statut: {
              echelon: bronze,
              standing: 5,
            },
            caracs: [nomIntelligence],
          },
          {
            titre: nomRoiContrebandiers,
            statut: {
              echelon: argent,
              standing: 2,
            },
            caracs: [nomSociabilite],
          },
        ],
      },
      {
        titre: nomDebardeur,
        description: 'nomDebardeur',
        evolutions: [
          {
            titre: nomPorteur,
            statut: {
              echelon: bronze,
              standing: 3,
            },
            caracs: [nomCC, nomEndurance, nomInitiative],
          },
          {
            titre: nomDebardeur,
            statut: {
              echelon: argent,
              standing: 1,
            },
            caracs: [nomForce],
          },
          {
            titre: nomContremaitre,
            statut: {
              echelon: argent,
              standing: 3,
            },
            caracs: [nomForceMentale],
          },
          {
            titre: nomMaitreDocks,
            statut: {
              echelon: argent,
              standing: 5,
            },
            caracs: [nomIntelligence],
          },
        ],
      },
      {
        titre: nomFemmeDuFleuve,
        description: 'Femme du fleuve',
        evolutions: [
          {
            titre: nomAlevin,
            statut: {
              echelon: bronze,
              standing: 2,
            },
            caracs: [nomDexterite, nomEndurance, nomAgilete],
          },
          {
            titre: nomFemmeDuFleuve,
            statut: {
              echelon: bronze,
              standing: 3,
            },
            caracs: [nomCC],
          },
          {
            titre: nomSageRives,
            statut: {
              echelon: bronze,
              standing: 5,
            },
            caracs: [nomInitiative],
          },
          {
            titre: nomAncienneFleuve,
            statut: {
              echelon: argent,
              standing: 2,
            },
            caracs: [nomSociabilite],
          },
        ],
      },
      {
        titre: nomMarin,
        description: 'Marin',
        evolutions: [
          {
            titre: nomMarinEauDouce,
            statut: {
              echelon: argent,
              standing: 1,
            },
            caracs: [nomDexterite, nomSociabilite, nomAgilete],
          },
          {
            titre: nomMarin,
            statut: {
              echelon: argent,
              standing: 3,
            },
            caracs: [nomCC],
          },
          {
            titre: nomMaitreEquipage,
            statut: {
              echelon: argent,
              standing: 5,
            },
            caracs: [nomInitiative],
          },
          {
            titre: nomCapitaineNavire,
            statut: {
              echelon: or,
              standing: 2,
            },
            caracs: [nomIntelligence],
          },
        ],
      },
      {
        titre: nomNaufrageur,
        description: 'Naufrageur',
        evolutions: [
          {
            titre: nomPilleurEpaves,
            statut: {
              echelon: bronze,
              standing: 2,
            },
            caracs: [nomForce, nomCC, nomInitiative],
          },
          {
            titre: nomNaufrageur,
            statut: {
              echelon: bronze,
              standing: 3,
            },
            caracs: [nomForceMentale],
          },
          {
            titre: nomPirateRivieres,
            statut: {
              echelon: bronze,
              standing: 5,
            },
            caracs: [nomCT],
          },
          {
            titre: nomCapitaineNaufrageur,
            statut: {
              echelon: argent,
              standing: 2,
            },
            caracs: [nomSociabilite],
          },
        ],
      },
      {
        titre: nomNautonnier,
        description: 'Nautonnier',
        evolutions: [
          {
            titre: nomGuideFluvial,
            statut: {
              echelon: bronze,
              standing: 4,
            },
            caracs: [nomCC, nomEndurance, nomInitiative],
          },
          {
            titre: nomNautonnier,
            statut: {
              echelon: argent,
              standing: 1,
            },
            caracs: [nomForceMentale],
          },
          {
            titre: nomPilote,
            statut: {
              echelon: argent,
              standing: 3,
            },
            caracs: [nomIntelligence],
          },
          {
            titre: nomMaitreNocher,
            statut: {
              echelon: argent,
              standing: 5,
            },
            caracs: [nomSociabilite],
          },
        ],
      },
      {
        titre: nomPatrouilleurFluvial,
        description: 'Patrouilleur fluvial',
        evolutions: [
          {
            titre: nomRecrueFluviale,
            statut: {
              echelon: argent,
              standing: 1,
            },
            caracs: [nomForce, nomCT, nomSociabilite],
          },
          {
            titre: nomPatrouilleurFluvial,
            statut: {
              echelon: argent,
              standing: 2,
            },
            caracs: [nomCC],
          },
          {
            titre: nomAbordeur,
            statut: {
              echelon: argent,
              standing: 1,
            },
            caracs: [nomInitiative],
          },
          {
            titre: nomMaitreAbordeur,
            statut: {
              echelon: or,
              standing: 1,
            },
            caracs: [nomIntelligence],
          },
        ],
      },
    ],
  },
  {
    titre: nomRoublards,
    description: 'Roublards',
    carrieres: [
      {
        titre: nomCharlatan,
        description: 'Charlatan',
        evolutions: [
          {
            titre: nomFilou,
            statut: {
              echelon: bronze,
              standing: 3,
            },
            caracs: [nomInitiative, nomDexterite, nomSociabilite],
          },
          {
            titre: nomCharlatan,
            statut: {
              echelon: bronze,
              standing: 5,
            },
            caracs: [nomForceMentale],
          },
          {
            titre: nomArnaqueur,
            statut: {
              echelon: argent,
              standing: 2,
            },
            caracs: [nomAgilete],
          },
          {
            titre: nomEscroc,
            statut: {
              echelon: argent,
              standing: 4,
            },
            caracs: [nomIntelligence],
          },
        ],
      },
      {
        titre: nomEntremetteur,
        description: 'Entremetteur',
        evolutions: [
          {
            titre: nomProstitue,
            statut: {
              echelon: bronze,
              standing: 1,
            },
            caracs: [nomAgilete, nomDexterite, nomSociabilite],
          },
          {
            titre: nomEntremetteur,
            statut: {
              echelon: bronze,
              standing: 3,
            },
            caracs: [nomInitiative],
          },
          {
            titre: nomSouteneur,
            statut: {
              echelon: argent,
              standing: 1,
            },
            caracs: [nomForceMentale],
          },
          {
            titre: nomMeneur,
            statut: {
              echelon: argent,
              standing: 3,
            },
            caracs: [nomIntelligence],
          },
        ],
      },
      {
        titre: nomHorsLaLoi,
        description: 'Hors-la-loi',
        evolutions: [
          {
            titre: nomBandit,
            statut: {
              echelon: bronze,
              standing: 1,
            },
            caracs: [nomCC, nomForce, nomEndurance],
          },
          {
            titre: nomHorsLaLoi,
            statut: {
              echelon: bronze,
              standing: 2,
            },
            caracs: [nomCT],
          },
          {
            titre: nomChefBande,
            statut: {
              echelon: bronze,
              standing: 4,
            },
            caracs: [nomInitiative],
          },
          {
            titre: nomRoiBandits,
            statut: {
              echelon: argent,
              standing: 2,
            },
            caracs: [nomSociabilite],
          },
        ],
      },
      {
        titre: nomPilleurDeTombes,
        description: 'nomPilleurDeTombes',
        evolutions: [
          {
            titre: nomTrafiquantCadavres,
            statut: {
              echelon: bronze,
              standing: 2,
            },
            caracs: [nomInitiative, nomForce, nomForceMentale],
          },
          {
            titre: nomPilleurDeTombes,
            statut: {
              echelon: bronze,
              standing: 3,
            },
            caracs: [nomCC],
          },
          {
            titre: nomPilleurTombeaux,
            statut: {
              echelon: argent,
              standing: 1,
            },
            caracs: [nomDexterite],
          },
          {
            titre: nomChasseurTresors,
            statut: {
              echelon: argent,
              standing: 5,
            },
            caracs: [nomIntelligence],
          },
        ],
      },
      {
        titre: nomRanconneur,
        description: 'Ran??onneur',
        evolutions: [
          {
            titre: nomCoupeJarret,
            statut: {
              echelon: bronze,
              standing: 3,
            },
            caracs: [nomCC, nomForce, nomEndurance],
          },
          {
            titre: nomRanconneur,
            statut: {
              echelon: bronze,
              standing: 5,
            },
            caracs: [nomSociabilite],
          },
          {
            titre: nomChefGang,
            statut: {
              echelon: argent,
              standing: 3,
            },
            caracs: [nomForceMentale],
          },
          {
            titre: nomBaronCrime,
            statut: {
              echelon: argent,
              standing: 5,
            },
            caracs: [nomIntelligence],
          },
        ],
      },
      {
        titre: nomReceleur,
        description: 'Receleur',
        evolutions: [
          {
            titre: nomBrocanteur,
            statut: {
              echelon: argent,
              standing: 1,
            },
            caracs: [nomInitiative, nomAgilete, nomSociabilite],
          },
          {
            titre: nomReceleur,
            statut: {
              echelon: argent,
              standing: 2,
            },
            caracs: [nomDexterite],
          },
          {
            titre: nomMaitreReceleur,
            statut: {
              echelon: argent,
              standing: 3,
            },
            caracs: [nomIntelligence],
          },
          {
            titre: nomProfessionnelMarcheNoir,
            statut: {
              echelon: argent,
              standing: 4,
            },
            caracs: [nomForceMentale],
          },
        ],
      },
      {
        titre: nomSorcierDissident,
        description: 'Sorcier dissident',
        evolutions: [
          {
            titre: nomEnsorceleur,
            statut: {
              echelon: bronze,
              standing: 1,
            },
            caracs: [nomCC, nomEndurance, nomForceMentale],
          },
          {
            titre: nomSorcierDissident,
            statut: {
              echelon: bronze,
              standing: 2,
            },
            caracs: [nomInitiative],
          },
          {
            titre: nomDevin,
            statut: {
              echelon: bronze,
              standing: 3,
            },
            caracs: [nomSociabilite],
          },
          {
            titre: nomDemoniste,
            statut: {
              echelon: bronze,
              standing: 5,
            },
            caracs: [nomIntelligence],
          },
        ],
      },
      {
        titre: nomVoleur,
        description: 'Voleur',
        evolutions: [
          {
            titre: nomRodeur,
            statut: {
              echelon: bronze,
              standing: 1,
            },
            caracs: [nomInitiative, nomAgilete, nomForceMentale],
          },
          {
            titre: nomVoleur,
            statut: {
              echelon: bronze,
              standing: 3,
            },
            caracs: [nomDexterite],
          },
          {
            titre: nomMaitreVoleur,
            statut: {
              echelon: bronze,
              standing: 5,
            },
            caracs: [nomForce],
          },
          {
            titre: nomCambrioleur,
            statut: {
              echelon: argent,
              standing: 3,
            },
            caracs: [nomSociabilite],
          },
        ],
      },
    ],
  },
  {
    titre: nomRuraux,
    description: 'Ruraux',
    carrieres: [
      {
        titre: nomBailli,
        description: 'Bailli',
        evolutions: [
          {
            titre: nomPercepteur,
            statut: {
              echelon: argent,
              standing: 1,
            },
            caracs: [nomInitiative, nomCC, nomForceMentale],
          },
          {
            titre: nomBailli,
            statut: {
              echelon: argent,
              standing: 5,
            },
            caracs: [nomSociabilite],
          },
          {
            titre: nomPrefet,
            statut: {
              echelon: or,
              standing: 1,
            },
            caracs: [nomAgilete],
          },
          {
            titre: nomMagistrat,
            statut: {
              echelon: or,
              standing: 3,
            },
            caracs: [nomIntelligence],
          },
        ],
      },
      {
        titre: nomChasseur,
        description: 'Chasseur',
        evolutions: [
          {
            titre: nomTraqueur,
            statut: {
              echelon: bronze,
              standing: 2,
            },
            caracs: [nomForce, nomEndurance, nomDexterite],
          },
          {
            titre: nomChasseur,
            statut: {
              echelon: bronze,
              standing: 4,
            },
            caracs: [nomCT],
          },
          {
            titre: nomPisteur,
            statut: {
              echelon: argent,
              standing: 1,
            },
            caracs: [nomInitiative],
          },
          {
            titre: nomMaitreChasse,
            statut: {
              echelon: argent,
              standing: 3,
            },
            caracs: [nomIntelligence],
          },
        ],
      },
      {
        titre: nomEclaireur,
        description: 'Eclaireur',
        evolutions: [
          {
            titre: nomCoureurBois,
            statut: {
              echelon: bronze,
              standing: 3,
            },
            caracs: [nomInitiative, nomEndurance, nomAgilete],
          },
          {
            titre: nomEclaireur,
            statut: {
              echelon: bronze,
              standing: 5,
            },
            caracs: [nomCT],
          },
          {
            titre: nomGuide,
            statut: {
              echelon: argent,
              standing: 1,
            },
            caracs: [nomIntelligence],
          },
          {
            titre: nomExplorateur,
            statut: {
              echelon: argent,
              standing: 5,
            },
            caracs: [nomDexterite],
          },
        ],
      },
      {
        titre: nomHerboriste,
        description: 'Herboriste',
        evolutions: [
          {
            titre: nomCueilleur,
            statut: {
              echelon: bronze,
              standing: 2,
            },
            caracs: [nomInitiative, nomEndurance, nomAgilete],
          },
          {
            titre: nomHerboriste,
            statut: {
              echelon: bronze,
              standing: 4,
            },
            caracs: [nomDexterite],
          },
          {
            titre: nomMaitreHerboriste,
            statut: {
              echelon: argent,
              standing: 1,
            },
            caracs: [nomSociabilite],
          },
          {
            titre: nomHerbalisteRenom,
            statut: {
              echelon: argent,
              standing: 3,
            },
            caracs: [nomIntelligence],
          },
        ],
      },
      {
        titre: nomMineur,
        description: 'Mineur',
        evolutions: [
          {
            titre: nomProspecteur,
            statut: {
              echelon: bronze,
              standing: 2,
            },
            caracs: [nomForce, nomEndurance, nomForceMentale],
          },
          {
            titre: nomMineur,
            statut: {
              echelon: bronze,
              standing: 4,
            },
            caracs: [nomCC],
          },
          {
            titre: nomMaitreMineur,
            statut: {
              echelon: bronze,
              standing: 5,
            },
            caracs: [nomInitiative],
          },
          {
            titre: nomContremaitreMine,
            statut: {
              echelon: argent,
              standing: 4,
            },
            caracs: [nomSociabilite],
          },
        ],
      },
      {
        titre: nomMystique,
        description: 'Mystique',
        evolutions: [
          {
            titre: nomVoyant,
            statut: {
              echelon: bronze,
              standing: 1,
            },
            caracs: [nomInitiative, nomDexterite, nomSociabilite],
          },
          {
            titre: nomMystique,
            statut: {
              echelon: bronze,
              standing: 2,
            },
            caracs: [nomForceMentale],
          },
          {
            titre: nomSage,
            statut: {
              echelon: bronze,
              standing: 3,
            },
            caracs: [nomAgilete],
          },
          {
            titre: nomProphete,
            statut: {
              echelon: bronze,
              standing: 4,
            },
            caracs: [nomIntelligence],
          },
        ],
      },
      {
        titre: nomSorcierDeVillage,
        description: 'nomSorcierDeVillage',
        evolutions: [
          {
            titre: nomApprentiSorcierVillage,
            statut: {
              echelon: bronze,
              standing: 1,
            },
            caracs: [nomInitiative, nomEndurance, nomDexterite],
          },
          {
            titre: nomSorcierDeVillage,
            statut: {
              echelon: bronze,
              standing: 2,
            },
            caracs: [nomIntelligence],
          },
          {
            titre: nomMaitreSorcierVillage,
            statut: {
              echelon: bronze,
              standing: 3,
            },
            caracs: [nomSociabilite],
          },
          {
            titre: nomSageVillage,
            statut: {
              echelon: bronze,
              standing: 5,
            },
            caracs: [nomForceMentale],
          },
        ],
      },
      {
        titre: nomVillageois,
        description: 'Villageois',
        evolutions: [
          {
            titre: nomPaysan,
            statut: {
              echelon: bronze,
              standing: 2,
            },
            caracs: [nomForce, nomEndurance, nomAgilete],
          },
          {
            titre: nomVillageois,
            statut: {
              echelon: bronze,
              standing: 3,
            },
            caracs: [nomCC],
          },
          {
            titre: nomEchevin,
            statut: {
              echelon: bronze,
              standing: 4,
            },
            caracs: [nomSociabilite],
          },
          {
            titre: nomDoyen,
            statut: {
              echelon: argent,
              standing: 2,
            },
            caracs: [nomIntelligence],
          },
        ],
      },
    ],
  },
]
