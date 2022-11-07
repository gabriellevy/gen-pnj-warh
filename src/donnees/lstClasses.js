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
          },
          {
            titre: nomAgitateur,
            statut: {
              echelon: bronze,
              standing: 2,
            },
          },
          {
            titre: nomFauteurTrouble,
            statut: {
              echelon: bronze,
              standing: 3,
            },
          },
          {
            titre: nomDemagogue,
            statut: {
              echelon: bronze,
              standing: 5,
            },
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
      {
        titre: nomSorcier,
        description: 'Sorcier',
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
      {
        titre: nomMedecin,
        description: 'nomMedecin',
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
      {
        titre: nomNonne,
        description: 'Nonne',
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
      {
        titre: nomPretre,
        description: 'nomPretre',
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
    titre: nomRiverains,
    description: 'Riverains',
    carrieres: [
      {
        titre: nomBatelier,
        description: 'Batelier',
      },
      {
        titre: nomContrebandier,
        description: 'Contrebandier',
      },
      {
        titre: nomDebardeur,
        description: 'nomDebardeur',
      },
      {
        titre: nomFemmeDuFleuve,
        description: 'Femme du fleuve',
      },
      {
        titre: nomMarin,
        description: 'Marin',
      },
      {
        titre: nomNaufrageur,
        description: 'Naufrageur',
      },
      {
        titre: nomNautonnier,
        description: 'Nautonnier',
      },
      {
        titre: nomPatrouilleurFluvial,
        description: 'Patrouilleur fluvial',
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
      },
      {
        titre: nomEntremetteur,
        description: 'Entremetteur',
      },
      {
        titre: nomHorsLaLoi,
        description: 'Hors-la-loi',
      },
      {
        titre: nomPilleurDeTombes,
        description: 'nomPilleurDeTombes',
      },
      {
        titre: nomRanconneur,
        description: 'Rançonneur',
      },
      {
        titre: nomReceleur,
        description: 'Receleur',
      },
      {
        titre: nomSorcierDissident,
        description: 'Sorcier dissident',
      },
      {
        titre: nomVoleur,
        description: 'Voleur',
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
      },
      {
        titre: nomChasseur,
        description: 'Chasseur',
      },
      {
        titre: nomEclaireur,
        description: 'Eclaireur',
      },
      {
        titre: nomHerboriste,
        description: 'Herboriste',
      },
      {
        titre: nomMineur,
        description: 'Mineur',
      },
      {
        titre: nomMystique,
        description: 'Mystique',
      },
      {
        titre: nomSorcierDeVillage,
        description: 'nomSorcierDeVillage',
      },
      {
        titre: nomVillageois,
        description: 'Villageois',
      },
    ],
  },
]
