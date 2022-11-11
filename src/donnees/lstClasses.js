import {
  nomAgilete,
  nomCC,
  nomCT,
  nomInitiative,
  nomIntelligence,
  nomSociabilite,
} from './lstCaracs'
import { bronze, argent, or } from './lstNiveauDeVie'

// classes
export const nomCitadins = 'Citadins'
export const nomCourtisans = 'Courtisans'
export const nomGuerriers = 'Guerriers'
export const nomItinerants = 'Itinérants'
export const nomLettres = 'Lettrés'
export const nomRiverains = 'Riverains'
export const nomRoublards = 'Roublards'
export const nomRuraux = 'Ruraux'

// -------------- carrières
export const nomAgitateur = 'Agitateur'
export const nomArtisan = 'Artisan'
export const nomBourgeois = 'Bourgeois'
export const nomEnqueteur = 'Enquêteur'
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
export const nomPretreGuerrier = 'Prêtre guerrier'
export const nomSoldat = 'Soldat'
export const nomSpadassin = 'Spadassin'
export const nomTueur = 'Tueur'

export const nomChasseurDePrimes = 'Chasseur de primes'
export const nomCocher = 'Cocher'
export const nomColporteur = 'Colporteur'
export const nomFlagellant = 'Flagellant'
export const nomMessager = 'Messager'
export const nomPatrouilleurRoutier = 'Patrouilleur routier'
export const nomRepurgateur = 'Répurgateur'
export const nomSaltimbanque = 'Saltimbanque'

export const nomApothicaire = 'Apothicaire'
export const nomErudit = 'Erudit'
export const nomIngenieur = 'Ingénieur'
export const nomJuriste = 'Juriste'
export const nomMedecin = 'Médecin'
export const nomNonne = 'Nonne'
export const nomPretre = 'Prêtre'
export const nomSorcier = 'Sorcier'

// carrières de riverains
export const nomBatelier = 'Batelier'
export const nomContrebandier = 'Contrebandier'
export const nomDebardeur = 'Débardeur'
export const nomFemmeDuFleuve = 'Femme du fleuve'
export const nomMarin = 'Marin'
export const nomNaufrageur = 'Naufrageur'
export const nomNautonnier = 'Nautonnier'
export const nomPatrouilleurFluvial = 'Patrouilleur fluvial'

export const nomCharlatan = 'Charlatan'
export const nomEntremetteur = 'Entremetteur'
export const nomHorsLaLoi = 'Hors-la-loi'
export const nomPilleurDeTombes = 'Pilleur de tombes'
export const nomRanconneur = 'Rançonneur'
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

export const nomPamphletaire = 'Pamphlétaire'
export const nomFauteurTrouble = 'Fauteur de trouble'
export const nomDemagogue = 'Démagogue'

export const nomApprentiArtisan = 'Apprenti artisan'
export const nomMaitreArtisan = 'Maître artisan'
export const nomMaitreGuilde = 'Maître de guilde'

export const nomEmploye = 'Employé'
export const nomConseillerMunicipal = 'Conseiller municipal'
export const nomBourgmestre = 'Bourgmestre'

export const nomLimier = 'Limier'
export const nomMaitreEnqueteur = 'Maître enquêteur'
export const nomDetective = 'Détective'

export const nomNegociant = 'Négociant'
export const nomMaitreMarchand = 'Maître marchand'
export const nomPrinceMarchand = 'Prince marchand'

export const nomIndigent = 'Indigent'
export const nomMaitreMendiant = 'Maître mendiant'
export const nomRoiMendiant = 'Roi des mendiants'

export const nomRecrueMilice = 'Recrue de la milice'
export const nomSergentMilice = 'Sergent de la milice'
export const nomCapitaineMilice = 'Capitaine de la milice'

export const nomChasseurRat = 'Chasseur de rat'
export const nomEgoutier = 'Égoutier'
export const nomExterminateur = 'Exterminateur'

export const nomArtisteApprenti = 'Artiste apprenti'
export const nomArtisteRenom = 'Artiste de renom'
export const nomMaestro = 'Maestro'

export const nomAssistant = 'Assistant'
export const nomConsultant = 'Consultant'
export const nomChancelier = 'Chancelier'

export const nomEscrimeur = 'Escrimeur'
export const nomMaitreDuelliste = 'Maître duelliste'
export const nomChampionJustice = 'Champion de justice'

export const nomHeraut = 'Héraut'
export const nomDiplomate = 'Diplomate'
export const nomAmbassadeur = 'Ambassadeur'

export const nomInformateur = 'Informateur'
export const nomAgentSecret = 'Agent secret'
export const nomMaitreEspion = 'Maître espion'

export const nomGardien = 'Gardien'
export const nomSenechal = 'Sénéchal'
export const nomGouverneur = 'Gouverneur'

export const nomHeritier = 'Héritier'
export const nomMagnat = 'Magnat'
export const nomNobleSeigneur = 'Noble seigneur'

export const nomDomestique = 'Domestique'
export const nomValet = 'Valet'
export const nomRegisseur = 'Régisseur'

export const nomApprentiCavalier = 'Apprenti cavalier'
export const nomSergentCavalerie = 'Sergent de cavalerie légère'
export const nomOfficierCavalerie = 'Officier de cavalerie légère'

export const nomEcuyer = 'Écuyer'
export const nomChevalierCommandeur = 'Chevalier commandeur'
export const nomChevalierCercleInterieur = 'Chevalier du crecle intérieur'

export const nomSentinelle = 'Sentinelle'
export const nomGardeHonneur = "Garde d'honneur"
export const nomGardeOfficier = 'Garde officier'

export const nomPugiliste = 'Pugiliste'
export const nomChampionFosse = 'Champion de Fosse'
export const nomLegendeFosse = 'Légende de la fosse'

export const nomNovice = 'Novice'
export const nomPretreSergent = 'Prêtre sergent'
export const nomPretreCapitaine = 'Prêtre capitaine'

export const nomRecrue = 'Recrue'
export const nomSergent = 'Sergent'
export const nomOfficier = 'Officier'

export const nomMatamore = 'Matamore'
export const nomTueurAGage = 'Tueur à gage'
export const nomAssassin = 'Assassin'

export const nomTueurTroll = 'Tueur de troll'
export const nomTueurGeant = 'Tueur de géants'
export const nomTueurDragons = 'Tueur de dragons'
export const nomTueurDemons = 'Tueur de démons'

export const nomChasseurVoleurs = 'Chasseur de voleurs'
export const nomMaitreChasseurPrimes = 'Maître chasseur de primes'
export const nomChasseurPrimesVeteran = 'Chasseur de primes vétéran'

export const nomPostillon = 'Postillon'
export const nomMaitreCocher = 'Maître cocher'
export const nomMaitreRoutes = 'Maître des routes'

export const nomVagabond = 'Vagabond'
export const nomMaitreColporteur = 'Maître colporteur'
export const nomNegociantItinerant = 'Négociant itinérant'

export const nomZelote = 'Zélote'
export const nomPenitent = 'Pénitent'
export const nomPropheteDuDestin = 'Prophète du destin'

export const nomCoureur = 'Coureur'
export const nomEstafette = 'Estafette'
export const nomMessagerVeteran = 'Messager vétéran'

export const nomPeager = 'Péager'
export const nomSergentPatrouilleur = 'Sergent patrouilleur'
export const nomCapitainePatrouilleur = 'Capitaine patrouilleur'

export const nomInterrogateur = 'Interrogateur'
export const nomInquisiteur = 'Inquisiteur'
export const nomRepurgateurVeteran = 'Répurgateur vétéran'

export const nomMusicienDesRues = 'Musicien des rues'
export const nomTroubadour = 'Troubadour'
export const nomChefTroupe = 'Chef de troupe'

export const nomApprentiApothicaire = 'Apprenti apothicaire'
export const nomMaitreApothicaire = 'Maître apothicaire'
export const nomApothicaireRenom = 'Apothicaire de renom'

export const nomEtudiant = 'Étudiant'
export const nomChercheur = 'Chercheur'
export const nomProfesseur = 'Professeur'

export const nomEtudiantIngenieur = 'Étudiant ingénieur'
export const nomMaitreIngenieur = 'Maître ingénieur'
export const nomIngenieurAgree = 'Ingénieur agréé'

export const nomEtudiantDroit = 'Étudiant en droit'
export const nomMaitreBarreau = 'Maître du barreau'
export const nomJuge = 'Juge'

export const nomEtudiantMedecine = 'Étudiant en médecine'
export const nomDocteurMedecine = 'Docteur en médecine'
export const nomMedecinCour = 'Médecin de la cour'

export const nomAbbesse = 'Abbesse'
export const nomPrieureGenerale = 'Prieure générale'

export const nomInitie = 'Initié'
export const nomGrandPretre = 'Grand prêtre'
export const nomLecteur = 'Lecteur'

export const nomSorcierNovice = 'Sorcier novice'
export const nomMaitreSorcier = 'Maître sorcier'
export const nomSeigneurSorcier = 'Seigneur sorcier'

export const nomCanotier = 'Canotier'
export const nomChefBord = 'Chef de bord'
export const nomCapitaine = 'Capitaine'

export const nomCoureurRivieres = 'Coureur de rivières'
export const nomMaitreContrebandier = 'Maître contrebandier'
export const nomRoiContrebandiers = 'Roi des contrebandiers'

export const nomPorteur = 'Porteur'
export const nomContremaitre = 'Contremaître'
export const nomMaitreDocks = 'Maître des docks'

export const nomAlevin = 'Alevin'
export const nomSageRives = 'Sage des rives'
export const nomAncienneFleuve = 'Ancienne du fleuve'

export const nomMarinEauDouce = "Marin d'eau douce"
export const nomMaitreEquipage = "Maître d'équipage"
export const nomCapitaineNavire = 'Capitaine de navire'

export const nomPilleurEpaves = "Pilleur d'épaves"
export const nomPirateRivieres = 'Pirate des rivières'
export const nomCapitaineNaufrageur = 'Capitaine naufrageur'

export const nomGuideFluvial = 'Guide fluvial'
export const nomPilote = 'Pilote'
export const nomMaitreNocher = 'Maître nocher'

export const nomRecrueFluviale = 'Recrue fluviale'
export const nomAbordeur = 'Abordeur'
export const nomMaitreAbordeur = 'Maître Abordeur'

export const nomFilou = 'Filou'
export const nomArnaqueur = 'Arnaqueur'
export const nomEscroc = 'Escroc'

export const nomProstitue = 'Prostitué'
export const nomSouteneur = 'Souteneur'
export const nomMeneur = 'Meneur'

export const nomBandit = 'Bandit'
export const nomChefBande = 'Chef de bande'
export const nomRoiBandits = 'Roi des bandits'

export const nomTrafiquantCadavres = 'Trafiquant de cadavres'
export const nomPilleurTombeaux = 'Pilleur de tombeaux'
export const nomChasseurTresors = 'Chasseur de trésors'

export const nomCoupeJarret = 'Coupe-jarret'
export const nomChefGang = 'Chef de gang'
export const nomBaronCrime = 'Baron du crime'

export const nomBrocanteur = 'Brocanteur'
export const nomMaitreReceleur = 'Maître receleur'
export const nomProfessionnelMarcheNoir = 'Professionnel du marché noir'

export const nomEnsorceleur = 'Ensorceleur'
export const nomDevin = 'Devin'
export const nomDemoniste = 'Démoniste'

export const nomRodeur = 'Rôdeur'
export const nomMaitreVoleur = 'Maître voleur'
export const nomCambrioleur = 'Cambrioleur'

export const nomPercepteur = 'Percepteur'
export const nomPrefet = 'Préfet'
export const nomMagistrat = 'Magistrat'

export const nomTraqueur = 'Traqueur'
export const nomPisteur = 'Pisteur'
export const nomMaitreChasse = 'Maître de la chasse'

export const nomCoureurBois = 'Coureur des bois'
export const nomGuide = 'Guide'
export const nomExplorateur = 'Explorateur'

export const nomCueilleur = 'Cueilleur'
export const nomMaitreHerboriste = 'Maître herboriste'
export const nomHerbalisteRenom = 'Herbaliste de renom'

export const nomProspecteur = 'Prospecteur'
export const nomMaitreMineur = 'Maître mineur'
export const nomContremaitreMine = 'Contremaître de la mine'

export const nomVoyant = 'Voyant'
export const nomSage = 'Sage'
export const nomProphete = 'Prophète'

export const nomApprentiSorcierVillage = 'Apprenti sorcier de village'
export const nomMaitreSorcierVillage = 'Maître sorcier de village'
export const nomSageVillage = 'Sage de village'

export const nomPaysan = 'Paysan'
export const nomEchevin = 'Échevin'
export const nomDoyen = 'Doyen'

export function getEvolutionObjFromCarriereAndEvolutionStr(
  nomClasseStr,
  nomCarriereStr,
  nomEvolutionStr
) {
  var evolutionObj = {}
  lstClasses.forEach((classe) => {
    if (nomClasseStr === classe.titre) {
      // classe trouvée
      classe.carrieres.forEach((carriere) => {
        if (nomCarriereStr === carriere.titre) {
          // carrière trouvée
          carriere.evolutions.forEach((evol) => {
            if (nomEvolutionStr === evol.titre) {
              // évolution trouvée
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
      // classe trouvée
      classe.carrieres.forEach((carriere) => {
        if (nomCarriereStr === carriere.titre) {
          // carrière trouvée
          var i = 0
          carriere.evolutions.forEach((evol) => {
            if (nomEvolutionStr === evol.titre) {
              // évolution trouvée
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
          },
          {
            titre: nomAgitateur,
            statut: {
              echelon: bronze,
              standing: 2,
            },
            caracs: [nomAgilete],
          },
          {
            titre: nomFauteurTrouble,
            statut: {
              echelon: bronze,
              standing: 3,
            },
            caracs: [nomCC],
          },
          {
            titre: nomDemagogue,
            statut: {
              echelon: bronze,
              standing: 5,
            },
            caracs: [nomInitiative],
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
          },
          {
            titre: nomArtisan,
            statut: {
              echelon: argent,
              standing: 1,
            },
          },
          {
            titre: nomMaitreArtisan,
            statut: {
              echelon: argent,
              standing: 3,
            },
          },
          {
            titre: nomMaitreGuilde,
            statut: {
              echelon: or,
              standing: 1,
            },
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
          },
          {
            titre: nomBourgeois,
            statut: {
              echelon: argent,
              standing: 2,
            },
          },
          {
            titre: nomConseillerMunicipal,
            statut: {
              echelon: argent,
              standing: 5,
            },
          },
          {
            titre: nomBourgmestre,
            statut: {
              echelon: or,
              standing: 1,
            },
          },
        ],
      },
      {
        titre: nomEnqueteur,
        description: 'Enquêteur',
        evolutions: [
          {
            titre: nomLimier,
            statut: {
              echelon: argent,
              standing: 1,
            },
          },
          {
            titre: nomEnqueteur,
            statut: {
              echelon: argent,
              standing: 2,
            },
          },
          {
            titre: nomMaitreEnqueteur,
            statut: {
              echelon: argent,
              standing: 3,
            },
          },
          {
            titre: nomDetective,
            statut: {
              echelon: argent,
              standing: 5,
            },
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
          },
          {
            titre: nomMarchand,
            statut: {
              echelon: argent,
              standing: 5,
            },
          },
          {
            titre: nomMaitreMarchand,
            statut: {
              echelon: or,
              standing: 1,
            },
          },
          {
            titre: nomPrinceMarchand,
            statut: {
              echelon: or,
              standing: 3,
            },
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
          },
          {
            titre: nomMendiant,
            statut: {
              echelon: bronze,
              standing: 2,
            },
          },
          {
            titre: nomMaitreMendiant,
            statut: {
              echelon: bronze,
              standing: 4,
            },
          },
          {
            titre: nomRoiMendiant,
            statut: {
              echelon: argent,
              standing: 2,
            },
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
          },
          {
            titre: nomMilicien,
            statut: {
              echelon: argent,
              standing: 1,
            },
          },
          {
            titre: nomSergentMilice,
            statut: {
              echelon: argent,
              standing: 3,
            },
          },
          {
            titre: nomCapitaineMilice,
            statut: {
              echelon: or,
              standing: 1,
            },
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
          },
          {
            titre: nomRatier,
            statut: {
              echelon: argent,
              standing: 1,
            },
          },
          {
            titre: nomEgoutier,
            statut: {
              echelon: argent,
              standing: 2,
            },
          },
          {
            titre: nomExterminateur,
            statut: {
              echelon: argent,
              standing: 3,
            },
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
          },
          {
            titre: nomArtiste,
            statut: {
              echelon: argent,
              standing: 3,
            },
          },
          {
            titre: nomArtisteRenom,
            statut: {
              echelon: argent,
              standing: 5,
            },
          },
          {
            titre: nomMaestro,
            statut: {
              echelon: or,
              standing: 2,
            },
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
          },
          {
            titre: nomConseiller,
            statut: {
              echelon: argent,
              standing: 4,
            },
          },
          {
            titre: nomConsultant,
            statut: {
              echelon: or,
              standing: 1,
            },
          },
          {
            titre: nomChancelier,
            statut: {
              echelon: or,
              standing: 3,
            },
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
          },
          {
            titre: nomDuelliste,
            statut: {
              echelon: argent,
              standing: 5,
            },
          },
          {
            titre: nomMaitreDuelliste,
            statut: {
              echelon: or,
              standing: 1,
            },
          },
          {
            titre: nomChampionJustice,
            statut: {
              echelon: or,
              standing: 3,
            },
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
          },
          {
            titre: nomEmissaire,
            statut: {
              echelon: argent,
              standing: 4,
            },
          },
          {
            titre: nomDiplomate,
            statut: {
              echelon: or,
              standing: 2,
            },
          },
          {
            titre: nomAmbassadeur,
            statut: {
              echelon: or,
              standing: 5,
            },
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
          },
          {
            titre: nomEspion,
            statut: {
              echelon: argent,
              standing: 3,
            },
          },
          {
            titre: nomAgentSecret,
            statut: {
              echelon: or,
              standing: 1,
            },
          },
          {
            titre: nomMaitreEspion,
            statut: {
              echelon: or,
              standing: 4,
            },
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
          },
          {
            titre: nomIntendant,
            statut: {
              echelon: argent,
              standing: 3,
            },
          },
          {
            titre: nomSenechal,
            statut: {
              echelon: or,
              standing: 1,
            },
          },
          {
            titre: nomGouverneur,
            statut: {
              echelon: or,
              standing: 3,
            },
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
          },
          {
            titre: nomNoble,
            statut: {
              echelon: or,
              standing: 3,
            },
          },
          {
            titre: nomMagnat,
            statut: {
              echelon: or,
              standing: 5,
            },
          },
          {
            titre: nomNobleSeigneur,
            statut: {
              echelon: or,
              standing: 7,
            },
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
          },
          {
            titre: nomServiteur,
            statut: {
              echelon: argent,
              standing: 3,
            },
          },
          {
            titre: nomValet,
            statut: {
              echelon: argent,
              standing: 5,
            },
          },
          {
            titre: nomRegisseur,
            statut: {
              echelon: or,
              standing: 1,
            },
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
          },
          {
            titre: nomCavalier,
            statut: {
              echelon: argent,
              standing: 4,
            },
          },
          {
            titre: nomSergentCavalerie,
            statut: {
              echelon: or,
              standing: 1,
            },
          },
          {
            titre: nomOfficierCavalerie,
            statut: {
              echelon: or,
              standing: 2,
            },
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
          },
          {
            titre: nomChevalier,
            statut: {
              echelon: argent,
              standing: 5,
            },
          },
          {
            titre: nomChevalierCommandeur,
            statut: {
              echelon: or,
              standing: 2,
            },
          },
          {
            titre: nomChevalierCercleInterieur,
            statut: {
              echelon: or,
              standing: 4,
            },
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
          },
          {
            titre: nomGarde,
            statut: {
              echelon: argent,
              standing: 2,
            },
          },
          {
            titre: nomGardeHonneur,
            statut: {
              echelon: argent,
              standing: 3,
            },
          },
          {
            titre: nomGardeOfficier,
            statut: {
              echelon: argent,
              standing: 5,
            },
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
          },
          {
            titre: nomGladiateur,
            statut: {
              echelon: argent,
              standing: 2,
            },
          },
          {
            titre: nomChampionFosse,
            statut: {
              echelon: argent,
              standing: 5,
            },
          },
          {
            titre: nomLegendeFosse,
            statut: {
              echelon: or,
              standing: 2,
            },
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
          },
          {
            titre: nomPretreGuerrier,
            statut: {
              echelon: argent,
              standing: 2,
            },
          },
          {
            titre: nomPretreSergent,
            statut: {
              echelon: argent,
              standing: 3,
            },
          },
          {
            titre: nomPretreCapitaine,
            statut: {
              echelon: argent,
              standing: 4,
            },
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
          },
          {
            titre: nomSoldat,
            statut: {
              echelon: argent,
              standing: 3,
            },
          },
          {
            titre: nomSergent,
            statut: {
              echelon: argent,
              standing: 5,
            },
          },
          {
            titre: nomOfficier,
            statut: {
              echelon: or,
              standing: 1,
            },
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
          },
          {
            titre: nomSpadassin,
            statut: {
              echelon: argent,
              standing: 1,
            },
          },
          {
            titre: nomTueurAGage,
            statut: {
              echelon: argent,
              standing: 4,
            },
          },
          {
            titre: nomAssassin,
            statut: {
              echelon: or,
              standing: 1,
            },
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
          },
          {
            titre: nomTueurGeant,
            statut: {
              echelon: bronze,
              standing: 2,
            },
          },
          {
            titre: nomTueurDragons,
            statut: {
              echelon: bronze,
              standing: 2,
            },
          },
          {
            titre: nomTueurDemons,
            statut: {
              echelon: bronze,
              standing: 2,
            },
          },
        ],
      },
    ],
  },
  {
    titre: nomItinerants,
    description: 'Itinérants',
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
          },
          {
            titre: nomChasseurDePrimes,
            statut: {
              echelon: argent,
              standing: 3,
            },
          },
          {
            titre: nomMaitreChasseurPrimes,
            statut: {
              echelon: argent,
              standing: 5,
            },
          },
          {
            titre: nomChasseurPrimesVeteran,
            statut: {
              echelon: or,
              standing: 1,
            },
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
          },
          {
            titre: nomCocher,
            statut: {
              echelon: argent,
              standing: 2,
            },
          },
          {
            titre: nomMaitreCocher,
            statut: {
              echelon: argent,
              standing: 3,
            },
          },
          {
            titre: nomMaitreRoutes,
            statut: {
              echelon: argent,
              standing: 5,
            },
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
          },
          {
            titre: nomColporteur,
            statut: {
              echelon: bronze,
              standing: 4,
            },
          },
          {
            titre: nomMaitreColporteur,
            statut: {
              echelon: argent,
              standing: 1,
            },
          },
          {
            titre: nomNegociantItinerant,
            statut: {
              echelon: argent,
              standing: 3,
            },
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
          },
          {
            titre: nomFlagellant,
            statut: {
              echelon: bronze,
              standing: 0,
            },
          },
          {
            titre: nomPenitent,
            statut: {
              echelon: bronze,
              standing: 0,
            },
          },
          {
            titre: nomPropheteDuDestin,
            statut: {
              echelon: bronze,
              standing: 0,
            },
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
          },
          {
            titre: nomMessager,
            statut: {
              echelon: argent,
              standing: 1,
            },
          },
          {
            titre: nomEstafette,
            statut: {
              echelon: argent,
              standing: 3,
            },
          },
          {
            titre: nomMessagerVeteran,
            statut: {
              echelon: argent,
              standing: 5,
            },
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
          },
          {
            titre: nomPatrouilleurRoutier,
            statut: {
              echelon: argent,
              standing: 2,
            },
          },
          {
            titre: nomSergentPatrouilleur,
            statut: {
              echelon: argent,
              standing: 4,
            },
          },
          {
            titre: nomCapitainePatrouilleur,
            statut: {
              echelon: or,
              standing: 1,
            },
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
          },
          {
            titre: nomRepurgateur,
            statut: {
              echelon: argent,
              standing: 3,
            },
          },
          {
            titre: nomInquisiteur,
            statut: {
              echelon: argent,
              standing: 5,
            },
          },
          {
            titre: nomRepurgateurVeteran,
            statut: {
              echelon: or,
              standing: 1,
            },
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
          },
          {
            titre: nomSaltimbanque,
            statut: {
              echelon: bronze,
              standing: 5,
            },
          },
          {
            titre: nomTroubadour,
            statut: {
              echelon: argent,
              standing: 3,
            },
          },
          {
            titre: nomChefTroupe,
            statut: {
              echelon: or,
              standing: 1,
            },
          },
        ],
      },
    ],
  },
  {
    titre: nomLettres,
    description: 'Lettrés',
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
          },
          {
            titre: nomApothicaire,
            statut: {
              echelon: argent,
              standing: 1,
            },
          },
          {
            titre: nomMaitreApothicaire,
            statut: {
              echelon: argent,
              standing: 3,
            },
          },
          {
            titre: nomApothicaireRenom,
            statut: {
              echelon: or,
              standing: 1,
            },
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
          },
          {
            titre: nomErudit,
            statut: {
              echelon: argent,
              standing: 2,
            },
          },
          {
            titre: nomChercheur,
            statut: {
              echelon: argent,
              standing: 5,
            },
          },
          {
            titre: nomProfesseur,
            statut: {
              echelon: or,
              standing: 1,
            },
          },
        ],
      },
      {
        titre: nomIngenieur,
        description: 'Ingénieur',
        evolutions: [
          {
            titre: nomEtudiantIngenieur,
            statut: {
              echelon: bronze,
              standing: 4,
            },
          },
          {
            titre: nomIngenieur,
            statut: {
              echelon: argent,
              standing: 2,
            },
          },
          {
            titre: nomMaitreIngenieur,
            statut: {
              echelon: argent,
              standing: 4,
            },
          },
          {
            titre: nomIngenieurAgree,
            statut: {
              echelon: or,
              standing: 2,
            },
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
          },
          {
            titre: nomJuriste,
            statut: {
              echelon: argent,
              standing: 3,
            },
          },
          {
            titre: nomMaitreBarreau,
            statut: {
              echelon: or,
              standing: 1,
            },
          },
          {
            titre: nomJuge,
            statut: {
              echelon: or,
              standing: 2,
            },
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
          },
          {
            titre: nomMedecin,
            statut: {
              echelon: argent,
              standing: 3,
            },
          },
          {
            titre: nomDocteurMedecine,
            statut: {
              echelon: argent,
              standing: 5,
            },
          },
          {
            titre: nomMedecinCour,
            statut: {
              echelon: or,
              standing: 1,
            },
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
          },
          {
            titre: nomNonne,
            statut: {
              echelon: bronze,
              standing: 4,
            },
          },
          {
            titre: nomAbbesse,
            statut: {
              echelon: argent,
              standing: 2,
            },
          },
          {
            titre: nomPrieureGenerale,
            statut: {
              echelon: argent,
              standing: 5,
            },
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
          },
          {
            titre: nomPretre,
            statut: {
              echelon: argent,
              standing: 1,
            },
          },
          {
            titre: nomGrandPretre,
            statut: {
              echelon: or,
              standing: 1,
            },
          },
          {
            titre: nomLecteur,
            statut: {
              echelon: or,
              standing: 2,
            },
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
          },
          {
            titre: nomSorcier,
            statut: {
              echelon: argent,
              standing: 3,
            },
          },
          {
            titre: nomMaitreSorcier,
            statut: {
              echelon: or,
              standing: 1,
            },
          },
          {
            titre: nomSeigneurSorcier,
            statut: {
              echelon: or,
              standing: 2,
            },
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
          },
          {
            titre: nomBatelier,
            statut: {
              echelon: argent,
              standing: 2,
            },
          },
          {
            titre: nomChefBord,
            statut: {
              echelon: argent,
              standing: 3,
            },
          },
          {
            titre: nomCapitaine,
            statut: {
              echelon: argent,
              standing: 5,
            },
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
          },
          {
            titre: nomContrebandier,
            statut: {
              echelon: bronze,
              standing: 3,
            },
          },
          {
            titre: nomMaitreContrebandier,
            statut: {
              echelon: bronze,
              standing: 5,
            },
          },
          {
            titre: nomRoiContrebandiers,
            statut: {
              echelon: argent,
              standing: 2,
            },
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
          },
          {
            titre: nomDebardeur,
            statut: {
              echelon: argent,
              standing: 1,
            },
          },
          {
            titre: nomContremaitre,
            statut: {
              echelon: argent,
              standing: 3,
            },
          },
          {
            titre: nomMaitreDocks,
            statut: {
              echelon: argent,
              standing: 5,
            },
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
          },
          {
            titre: nomFemmeDuFleuve,
            statut: {
              echelon: bronze,
              standing: 3,
            },
          },
          {
            titre: nomSageRives,
            statut: {
              echelon: bronze,
              standing: 5,
            },
          },
          {
            titre: nomAncienneFleuve,
            statut: {
              echelon: argent,
              standing: 2,
            },
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
          },
          {
            titre: nomMarin,
            statut: {
              echelon: argent,
              standing: 3,
            },
          },
          {
            titre: nomMaitreEquipage,
            statut: {
              echelon: argent,
              standing: 5,
            },
          },
          {
            titre: nomCapitaineNavire,
            statut: {
              echelon: or,
              standing: 2,
            },
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
          },
          {
            titre: nomNaufrageur,
            statut: {
              echelon: bronze,
              standing: 3,
            },
          },
          {
            titre: nomPirateRivieres,
            statut: {
              echelon: bronze,
              standing: 5,
            },
          },
          {
            titre: nomCapitaineNaufrageur,
            statut: {
              echelon: argent,
              standing: 2,
            },
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
          },
          {
            titre: nomNautonnier,
            statut: {
              echelon: argent,
              standing: 1,
            },
          },
          {
            titre: nomPilote,
            statut: {
              echelon: argent,
              standing: 3,
            },
          },
          {
            titre: nomMaitreNocher,
            statut: {
              echelon: argent,
              standing: 5,
            },
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
          },
          {
            titre: nomPatrouilleurFluvial,
            statut: {
              echelon: argent,
              standing: 2,
            },
          },
          {
            titre: nomAbordeur,
            statut: {
              echelon: argent,
              standing: 1,
            },
          },
          {
            titre: nomMaitreAbordeur,
            statut: {
              echelon: or,
              standing: 1,
            },
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
          },
          {
            titre: nomCharlatan,
            statut: {
              echelon: bronze,
              standing: 5,
            },
          },
          {
            titre: nomArnaqueur,
            statut: {
              echelon: argent,
              standing: 2,
            },
          },
          {
            titre: nomEscroc,
            statut: {
              echelon: argent,
              standing: 4,
            },
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
          },
          {
            titre: nomEntremetteur,
            statut: {
              echelon: bronze,
              standing: 3,
            },
          },
          {
            titre: nomSouteneur,
            statut: {
              echelon: argent,
              standing: 1,
            },
          },
          {
            titre: nomMeneur,
            statut: {
              echelon: argent,
              standing: 3,
            },
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
          },
          {
            titre: nomHorsLaLoi,
            statut: {
              echelon: bronze,
              standing: 2,
            },
          },
          {
            titre: nomChefBande,
            statut: {
              echelon: bronze,
              standing: 4,
            },
          },
          {
            titre: nomRoiBandits,
            statut: {
              echelon: argent,
              standing: 2,
            },
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
          },
          {
            titre: nomPilleurDeTombes,
            statut: {
              echelon: bronze,
              standing: 3,
            },
          },
          {
            titre: nomPilleurTombeaux,
            statut: {
              echelon: argent,
              standing: 1,
            },
          },
          {
            titre: nomChasseurTresors,
            statut: {
              echelon: argent,
              standing: 5,
            },
          },
        ],
      },
      {
        titre: nomRanconneur,
        description: 'Rançonneur',
        evolutions: [
          {
            titre: nomCoupeJarret,
            statut: {
              echelon: bronze,
              standing: 3,
            },
          },
          {
            titre: nomRanconneur,
            statut: {
              echelon: bronze,
              standing: 5,
            },
          },
          {
            titre: nomChefGang,
            statut: {
              echelon: argent,
              standing: 3,
            },
          },
          {
            titre: nomBaronCrime,
            statut: {
              echelon: argent,
              standing: 5,
            },
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
          },
          {
            titre: nomReceleur,
            statut: {
              echelon: argent,
              standing: 2,
            },
          },
          {
            titre: nomMaitreReceleur,
            statut: {
              echelon: argent,
              standing: 3,
            },
          },
          {
            titre: nomProfessionnelMarcheNoir,
            statut: {
              echelon: argent,
              standing: 4,
            },
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
          },
          {
            titre: nomSorcierDissident,
            statut: {
              echelon: bronze,
              standing: 2,
            },
          },
          {
            titre: nomDevin,
            statut: {
              echelon: bronze,
              standing: 3,
            },
          },
          {
            titre: nomDemoniste,
            statut: {
              echelon: bronze,
              standing: 5,
            },
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
          },
          {
            titre: nomVoleur,
            statut: {
              echelon: bronze,
              standing: 3,
            },
          },
          {
            titre: nomMaitreVoleur,
            statut: {
              echelon: bronze,
              standing: 5,
            },
          },
          {
            titre: nomCambrioleur,
            statut: {
              echelon: argent,
              standing: 3,
            },
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
          },
          {
            titre: nomBailli,
            statut: {
              echelon: argent,
              standing: 5,
            },
          },
          {
            titre: nomPrefet,
            statut: {
              echelon: or,
              standing: 1,
            },
          },
          {
            titre: nomMagistrat,
            statut: {
              echelon: or,
              standing: 3,
            },
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
          },
          {
            titre: nomChasseur,
            statut: {
              echelon: bronze,
              standing: 4,
            },
          },
          {
            titre: nomPisteur,
            statut: {
              echelon: argent,
              standing: 1,
            },
          },
          {
            titre: nomMaitreChasse,
            statut: {
              echelon: argent,
              standing: 3,
            },
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
          },
          {
            titre: nomEclaireur,
            statut: {
              echelon: bronze,
              standing: 5,
            },
          },
          {
            titre: nomGuide,
            statut: {
              echelon: argent,
              standing: 1,
            },
          },
          {
            titre: nomExplorateur,
            statut: {
              echelon: argent,
              standing: 5,
            },
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
          },
          {
            titre: nomHerboriste,
            statut: {
              echelon: bronze,
              standing: 4,
            },
          },
          {
            titre: nomMaitreHerboriste,
            statut: {
              echelon: argent,
              standing: 1,
            },
          },
          {
            titre: nomHerbalisteRenom,
            statut: {
              echelon: argent,
              standing: 3,
            },
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
          },
          {
            titre: nomMineur,
            statut: {
              echelon: bronze,
              standing: 4,
            },
          },
          {
            titre: nomMaitreMineur,
            statut: {
              echelon: bronze,
              standing: 5,
            },
          },
          {
            titre: nomContremaitreMine,
            statut: {
              echelon: argent,
              standing: 4,
            },
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
          },
          {
            titre: nomMystique,
            statut: {
              echelon: bronze,
              standing: 2,
            },
          },
          {
            titre: nomSage,
            statut: {
              echelon: bronze,
              standing: 3,
            },
          },
          {
            titre: nomProphete,
            statut: {
              echelon: bronze,
              standing: 4,
            },
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
          },
          {
            titre: nomSorcierDeVillage,
            statut: {
              echelon: bronze,
              standing: 2,
            },
          },
          {
            titre: nomMaitreSorcierVillage,
            statut: {
              echelon: bronze,
              standing: 3,
            },
          },
          {
            titre: nomSageVillage,
            statut: {
              echelon: bronze,
              standing: 5,
            },
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
          },
          {
            titre: nomVillageois,
            statut: {
              echelon: bronze,
              standing: 3,
            },
          },
          {
            titre: nomEchevin,
            statut: {
              echelon: bronze,
              standing: 4,
            },
          },
          {
            titre: nomDoyen,
            statut: {
              echelon: argent,
              standing: 2,
            },
          },
        ],
      },
    ],
  },
]
