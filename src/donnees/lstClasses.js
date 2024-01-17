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
  nomArtCalligraphie,
  nomArtEcriture,
  nomArtIcones,
  nomAthletisme,
  nomCalme,
  nomCharme,
  nomChevaucher,
  nomChevaucherBlaireau,
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
  nomDiscretionRurale,
  nomDiscretionRuraleUrbaine,
  nomDiscretionSouterraine,
  nomDiscretionUrbaine,
  nomDivertissementAuChoix1,
  nomDivertissementAuChoix2,
  nomDivertissementChant,
  nomDivertissementConference,
  nomDivertissementDiscours,
  nomDivertissementInterpretation,
  nomDivertissementNarration,
  nomDivertissementRaillerie,
  nomDivertissementRhetorique,
  nomDivertissementVoyance,
  nomDressage,
  nomDressageBlaireau,
  nomDressageCheval,
  nomDressageChien,
  nomEmpriseSurAnimaux,
  nomEscalade,
  nomEscamotage,
  nomEsquive,
  nomEvaluation,
  nomFocalisation,
  nomFocalisationAzyr,
  nomGuerison,
  nomIntimidation,
  nomIntuition,
  nomLangueAuChoix1,
  nomLangueAuChoix2,
  nomLangueBataille,
  nomLangueClassique,
  nomLangueEstalienTileen,
  nomLangueGuilde,
  nomLangueKhazalid,
  nomLangueMagick,
  nomLangueVoleur,
  nomMarchandage,
  nomMetier,
  nomMetierApothicaire,
  nomMetierArmurier,
  nomMetierAuChoix,
  nomMetierBarbier,
  nomMetierBrasseur,
  nomMetierBricoleur,
  nomMetierCartographe,
  nomMetierCharpentier,
  nomMetierColifichets,
  nomMetierConstructionBateaux,
  nomMetierEmpoisonneur,
  nomMetierExplosifs,
  nomMetierFabricantArcs,
  nomMetierGraveur,
  nomMetierHerboriste,
  nomMetierImprimerie,
  nomMetierIngenierie,
  nomMetierMarechalFerrant,
  nomMetierMaterielArtistique,
  nomMetierVigneron,
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
  nomSavoirArtGuerre,
  nomSavoirAstrologie,
  nomSavoirBetes,
  nomSavoirChaos,
  nomSavoirChimie,
  nomSavoirChoix1,
  nomSavoirChoix2,
  nomSavoirChoix3,
  nomSavoirDemonologie,
  nomSavoirDragons,
  nomSavoirEmpire,
  nomSavoirEpaves,
  nomSavoirFolklore,
  nomSavoirGeants,
  nomSavoirGenealogie,
  nomSavoirGeographie,
  nomSavoirGeologie,
  nomSavoirGuerre,
  nomSavoirHeraldique,
  nomSavoirHerbes,
  nomSavoirHistoire,
  nomSavoirIngenierie,
  nomSavoirLeMoot,
  nomSavoirLoi,
  nomSavoirMagie,
  nomSavoirMagieNoire,
  nomSavoirNecromancie,
  nomSavoirNoble,
  nomSavoirPlantes,
  nomSavoirPoison,
  nomSavoirPolitique,
  nomSavoirProphetie,
  nomSavoirRegion,
  nomSavoirRemede,
  nomSavoirScience,
  nomSavoirSigmar,
  nomSavoirSorciere,
  nomSavoirTaxes,
  nomSavoirTheologie,
  nomSavoirTorture,
  nomSavoirTroll,
  nomSavoirUlric,
  nomSavoirVivre,
  nomSavoirVoiesFluviales,
  nomSignesSecretsChasseurs,
  nomSignesSecretsContrebandiers,
  nomSignesSecretsEclaireurss,
  nomSignesSecretsGuilde,
  nomSignesSecretsMineurs,
  nomSignesSecretsOrdreChevaleresque,
  nomSignesSecretsRangers,
  nomSignesSecretsVagabond,
  nomSignesSecretsVoleur,
  nomSoinsAnimaux,
  nomSubornation,
  nomSurvieExterieur,
  nomVoile,
} from './lstComps'
import { bronze, argent, or } from './lstNiveauDeVie'
import {nomSansPeurHorsLaLoi, nomSensDeLOrientation, nomSansPeurHommesBetes, nomSansPeurPrimes, nomTirSur, nomTirMortel, nomFrappePrecise, nomSansPeurTout, nomFrenesie, nomTireurDePrecision, nomRechargementRapide, nomCombatEnEspaceClos, nomContorsioniste, nomTireurDElite, nomOreilleAbsolue, nomHaineSacree, nomVisionsSacrees, nomAmePure, nomBeniAuChoix, nomSavoirVivreFideles, nomInvocationAuChoix, nomCombattantAuContact, nomEndurci, nomEffrayant, nomMachoiresDAcier, nomMaitriseDesDes, nomImpitoyable, nomSansPeurIntrus, nomSautCarpe, nomAssautFeroce, nomGuerrierNe, nomSansPeurAuChoix, nomPorteBouclier, nomInebranlable, nomTirPrecis, nomExaltant, nomHaineAuChoix, nomArtilleur, nomAcrobatiesEquestres, nomVigilance, nomReflexesFoudroyants, nomClaquerLeFouet, nomCavalierEmerite, nomAffable,nomSavoirVivreServiteurs, nomResistancePoison, nomPrevoyant, nomImperturbable, nomSeigneurDeGuerre, nomSavantRegion, nomNomade, nomBonMarcheurAuChoix, nomAffiniteAvecLesAnimaux, nomMaitreEnDeguisement, nomImitation, nomIdentiteSecrete, nomLireSurLesLevres, nomAmbidextre, nomAttirant, nomNoblesse, nomVoyageurAguerri, nomSavoirVivreNobles, nomBaratiner, nomBonnesJambes, nomBricoleur, nomBrouet, nomCaid, nomChanceux, nomChatDeGouttiere, nomCoeurVaillant, nomCombatDeloyal, nomCombatInstinctif, nomCombattantEnEspaceClos, nomCooperatif, nomCostaud, nomCoudeACoude, nomCoupPuissant, nomCriminel, nomDesarmer, nomDiscret, nomDoigtsDeFee, nomDurACuire, nomEffraction, nomErgoteur, nomEscroquer, nomFaireLaManche, nomFerveurArdente, nomFlairerLesEnnuis, nomFrappeAssommante, nomFrappeBlessante, nomFrappeReactive, nomFuite, nomGrandOrateur, nomInfatigable, nomInsignifiant, nomIntrigant, nomLectureRapide, nomLireEcrire, nomMagnumOpus, nomMaitriseDuCombat, nomManiementDeDeuxArmes, nomMenacant, nomMenteur, nomNanti, nomNegociateur, nomNoctambule, nomDistraire, nomFeinte, nomNumismate, nomObstine, nomOrateur, nomBattement, nomPasDeCote, nomPerseverant, nomPerspicace, nomPresenceImposante, nomRatDEgout, nomRenversement, nomResistanceMaladie, nomRiposte, nomRobuste, nomSansPeurCriminels, nomSansPeurMiliciens, nomSansPeurRats, nomSansPeurSkaven, nomSavoirVivreAuChoix, nomSavoirVivreCriminels, nomSavoirVivreGuilde, nomSavoirVivreSoldats, nomSensAiguiseAuChoix, nomSensAiguiseGoutOuToucher, nomSixiemeSens, nomSociable, nomSprinter, nomStudieux, nomSuborneur, nomTirRapide, nomTourDesSouvenirs, nomTravailleurQualifieAuChoix, nomTresFort, nomTresResistant, nomVisionNocturne, nomVivacite, nomVolonteDeFer, nomPecheur, nomChargeBerserk, nomHaineHeretiques, nomPansementDeFortune, nomSansPeurHeretiques, nomControleDeLaFrenesie, nomMarinier, nomNageurEndurant, nomFouleeAuChoix, nomVeloce, nomHaineHorsLaLoi, nomSansPeurSorcieres, nomPerceptionDeLaMagie, nomDetermine, nomTravailleurQualifieEmpoisonneur, nomSensAiguiseGout, nomTravailleurQualifieApothicaire, nomPharmacologie, nomMaitreArtisanApothicaire, nomConcocter, nomSavoirVivreErudits, nomSavantApothicaire } from './lstTalents'

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

// guerriers
export const nomCavalier = 'Cavalier'
export const nomChevalier = 'Chevalier'
export const nomGarde = 'Garde'
export const nomGladiateur = 'Gladiateur'
export const nomPretreGuerrier = 'Prêtre guerrier'
export const nomSoldat = 'Soldat'
export const nomSpadassin = 'Spadassin'
export const nomTueur = 'Tueur'
export const nomChevaucheurBaireau = 'Chevaucheur de blaireau'

// itinérants
export const nomChasseurDePrimes = 'Chasseur de primes'
export const nomCocher = 'Cocher'
export const nomColporteur = 'Colporteur'
export const nomFlagellant = 'Flagellant'
export const nomFrereLoup = 'Frère loup'
export const nomMessager = 'Messager'
export const nomPatrouilleurRoutier = 'Patrouilleur routier'
export const nomRepurgateur = 'Répurgateur'
export const nomSaltimbanque = 'Saltimbanque'
export const nomGardechamps = 'Gardechamps'
export const nomPatrouilleurKarak = 'Patrouilleur des karaks'
export const nomRodeurFantome = 'Rodeur fantôme'

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

export const nomGardeForestier = 'Garde forestier'
export const nomEspritVent = 'Esprit du vent'
export const nomCourrouxForet = 'Courroux de la forêt'

export const nomCoureurForts = 'Coureur des forts'
export const nomGardienRoutesKarak = 'Gardien des routes des karaks'
export const nomArpenteurKarak = 'Arpenteur des karaks'

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
export const nomChevalierCercleInterieur = 'Chevalier du cercle intérieur'

export const nomSentinelle = 'Sentinelle'
export const nomGardeHonneur = "Garde d'honneur"
export const nomGardeOfficier = 'Garde officier'

export const nomPugiliste = 'Pugiliste'
export const nomChampionFosse = 'Champion de Fosse'
export const nomLegendeFosse = 'Légende de la fosse'

export const nomNovice = 'Novice'
export const nomPretreSergent = 'Prêtre sergent'
export const nomPretreCapitaine = 'Prêtre capitaine'

export const nomTaquineurBlaireau = 'Taquineur de blaireau'
export const nomSergentBlaireau = 'Sergent blaireau'
export const nomMaitreBlaireau = 'Maître blaireau'

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

export const nomSurvivant = 'Survivant'
export const nomCompagnonLoup = 'Compagnon loup'
export const nomGrandLoup = 'Grand loup'

export const nomCoureur = 'Coureur'
export const nomEstafette = 'Estafette'
export const nomMessagerVeteran = 'Messager vétéran'

export const nomPeager = 'Péager'
export const nomSergentPatrouilleur = 'Sergent patrouilleur'
export const nomCapitainePatrouilleur = 'Capitaine patrouilleur'

export const nomGardeNovice = 'Garde novice'
export const nomSergentGardechamps = 'Sergent Gardechamps'
export const nomCapitaineGardechamps = 'Capitaine Gardechamps'

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
            talents: [
              nomBaratiner,
              nomFaireLaManche,
              nomLireEcrire,
              nomSociable,
            ]
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
            talents: [
              nomChatDeGouttiere,
              nomErgoteur,
              nomFerveurArdente,
              nomOrateur,
            ]
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
            talents: [
              nomCombatDeloyal,
              nomFuite,
              nomMenteur,
              nomPasDeCote,
            ]
          },
          {
            titre: nomDemagogue,
            statut: {
              echelon: bronze,
              standing: 5,
            },
            caracs: [nomInitiative],
            competences: [nomChevaucher, nomSavoirHeraldique],
            talents: [
              nomAffable,
              nomGrandOrateur,
              nomIntrigant,
              nomSavoirVivreAuChoix,
            ]
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
            talents: [
              nomArtiste,
              nomInfatigable,
              nomMaitreArtisan,
              nomTresFort,
            ]
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
            talents: [
              nomCostaud,
              nomDoigtsDeFee,
              nomNegociateur,
              nomSavoirVivreGuilde,
            ]
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
            talents: [
              nomBricoleur,
              nomLireEcrire,
              nomTravailleurQualifieAuChoix,
              nomSensAiguiseGoutOuToucher,
            ]
          },
          {
            titre: nomMaitreGuilde,
            statut: {
              echelon: or,
              standing: 1,
            },
            caracs: [nomIntelligence],
            competences: [nomIntimidation, nomSubornation],
            talents: [
              nomIntrigant,
              nomMagnumOpus,
              nomOrateur,
              nomSuborneur,
            ]
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
            talents: [
              nomChatDeGouttiere,
              nomCostaud,
              nomInsignifiant,
              nomSavoirVivreServiteurs,
            ]
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
            talents: [
              nomEscroquer,
              nomNegociateur,
              nomSavoirVivreAuChoix,
              nomSociable,
            ]
          },
          {
            titre: nomConseillerMunicipal,
            statut: {
              echelon: argent,
              standing: 5,
            },
            caracs: [nomDexterite],
            competences: [nomCalme, nomPerception, nomRecherche, nomSavoirLoi],
            talents: [
              nomCooperatif,
              nomLireEcrire,
              nomOrateur,
              nomSuborneur,
            ]
          },
          {
            titre: nomBourgmestre,
            statut: {
              echelon: or,
              standing: 1,
            },
            caracs: [nomForceMentale],
            competences: [nomIntimidation, nomSavoirPolitique],
            talents: [
              nomAffable,
              nomGrandOrateur,
              nomIntrigant,
              nomPresenceImposante,
            ]
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
            talents: [
              nomChatDeGouttiere,
              nomInsignifiant,
              nomLireEcrire,
              nomVivacite,
            ]
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
            talents: [
              nomDiscret,
              nomPerseverant,
              nomPerspicace,
              nomSavoirVivreAuChoix,
            ]
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
            talents: [
              nomAffable,
              nomEffraction,
              nomSixiemeSens,
              nomStudieux,
            ]
          },
          {
            titre: nomDetective,
            statut: {
              echelon: argent,
              standing: 5,
            },
            caracs: [nomForceMentale],
            competences: [nomIntimidation, nomSavoirChoix2],
            talents: [
              nomLectureRapide,
              nomEffraction,
              nomSensAiguiseAuChoix,
              nomTourDesSouvenirs,
            ]
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
            talents: [
              nomAffable,
              nomBaratiner,
              nomLireEcrire,
              nomNegociateur,
            ]
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
            talents: [
              nomEscroquer,
              nomPerspicace,
              nomSavoirVivreGuilde,
              nomSuborneur,
            ]
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
            talents: [
              nomMenteur,
              nomNumismate,
              nomSavoirVivreAuChoix,
              nomVivacite,
            ]
          },
          {
            titre: nomPrinceMarchand,
            statut: {
              echelon: or,
              standing: 3,
            },
            caracs: [nomCC],
            competences: [nomIntimidation, nomSavoirChoix1],
            talents: [
              nomChanceux,
              nomIntrigant,
              nomNanti,
              nomVolonteDeFer,
            ]
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
            talents: [
              nomBrouet,
              nomFaireLaManche,
              nomResistanceMaladie,
              nomTresResistant,
            ]
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
            talents: [
              nomChatDeGouttiere,
              nomCriminel,
              nomInsignifiant,
              nomSavoirVivreCriminels,
            ]
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
            talents: [
              nomBaratiner,
              nomCombatDeloyal,
              nomDurACuire,
              nomPasDeCote,
            ]
          },
          {
            titre: nomRoiMendiant,
            statut: {
              echelon: argent,
              standing: 2,
            },
            caracs: [nomInitiative],
            competences: [nomIntimidation, nomSubornation],
            talents: [
              nomAffable,
              nomCaid,
              nomMenteur,
              nomSansPeurMiliciens,
            ]
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
            talents: [
              nomCoudeACoude,
              nomDurACuire,
              nomFrappeAssommante,
              nomPerseverant,
            ]
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
            talents: [
              nomCriminel,
              nomEffraction,
              nomSprinter,
              nomVisionNocturne,
            ]
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
            talents: [
              nomDesarmer,
              nomFlairerLesEnnuis,
              nomSansPeurCriminels,
              nomSavoirVivreSoldats,
            ]
          },
          {
            titre: nomCapitaineMilice,
            statut: {
              echelon: or,
              standing: 1,
            },
            caracs: [nomIntelligence],
            competences: [nomChevaucher, nomSavoirPolitique],
            talents: [
              nomCaid,
              nomIntrigant,
              nomOrateur,
              nomRobuste,
            ]
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
            talents: [
              nomCoupPuissant,
              nomFrappeAssommante,
              nomResistanceMaladie,
              nomVisionNocturne,
            ]
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
            talents: [
              nomCombattantEnEspaceClos,
              nomSavoirVivreGuilde,
              nomSansPeurRats,
              nomTresResistant,
            ]
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
            talents: [
              nomBonnesJambes,
              nomCoeurVaillant,
              nomDurACuire,
              nomRatDEgout,
            ]
          },
          {
            titre: nomExterminateur,
            statut: {
              echelon: argent,
              standing: 3,
            },
            caracs: [nomForce],
            competences: [nomCommandement, nomPistage],
            talents: [
              nomMenacant,
              nomObstine,
              nomRobuste,
              nomSansPeurSkaven,
            ]
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
            talents: [
              nomArtiste,
              nomInfatigable,
              nomPerseverant,
              nomVivacite,
            ]
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
            talents: [
              nomCriminel,
              nomDoigtsDeFee,
              nomNoctambule,
              nomSociable,
            ]
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
            talents: [
              nomFlairerLesEnnuis,
              nomNegociateur,
              nomSavoirVivreAuChoix,
              nomSensAiguiseAuChoix,
            ]
          },
          {
            titre: nomMaestro,
            statut: {
              echelon: or,
              standing: 2,
            },
            caracs: [nomIntelligence],
            competences: [nomChevaucher, nomRecherche],
            talents: [
              nomAmbidextre,
              nomCaid,
              nomLireEcrire,
              nomMagnumOpus,
            ]
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
            talents: [
              nomInsignifiant,
              nomLireEcrire,
              nomSavoirVivreAuChoix,
              nomSociable,
            ]
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
            talents: [
              nomBaratiner,
              nomCooperatif,
              nomCriminel,
              nomIntrigant,
            ]
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
            talents: [
              nomErgoteur,
              nomMenteur,
              nomNoctambule,
              nomSuborneur,
            ]
          },
          {
            titre: nomChancelier,
            statut: {
              echelon: or,
              standing: 3,
            },
            caracs: [nomForceMentale],
            competences: [nomChevaucher, nomSavoirHeraldique],
            talents: [
              nomAffable,
              nomCaid,
              nomEscroquer,
              nomPresenceImposante,
            ]
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
            talents: [
              nomBattement,
              nomDistraire,
              nomFeinte,
              nomPasDeCote,
            ]
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
            talents: [
              nomCombatInstinctif,
              nomRenversement,
              nomSavoirVivreAuChoix,
              nomTirRapide,
            ]
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
            talents: [
              nomAmbidextre,
              nomDesarmer,
              nomManiementDeDeuxArmes,
              nomRiposte,
            ]
          },
          {
            titre: nomChampionJustice,
            statut: {
              echelon: or,
              standing: 3,
            },
            caracs: [nomForceMentale],
            competences: [nomCorpsACorpsAuChoix2, nomSavoirLoi],
            talents: [
              nomFrappeBlessante,
              nomFrappeReactive,
              nomMaitriseDuCombat,
              nomMenacant,
            ]
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
            talents: [
              nomAffable,
              nomBaratiner,
              nomLireEcrire,
              nomSavoirVivreNobles,
            ]
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
            talents: [
              nomAttirant,
              nomMenteur,
              nomSavoirVivreAuChoix,
              nomVoyageurAguerri,
            ]
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
            talents: [
              nomIntrigant,
              nomNegociateur,
              nomNoctambule,
              nomSociable,
            ]
          },
          {
            titre: nomAmbassadeur,
            statut: {
              echelon: or,
              standing: 5,
            },
            caracs: [nomForceMentale],
            competences: [nomLangueAuChoix2, nomSavoirChoix1],
            talents: [
              nomNoblesse,
              nomPerspicace,
              nomPresenceImposante,
              nomSuborneur,
            ]
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
            talents: [
              nomDiscret,
              nomBaratiner,
              nomNoctambule,
              nomSociable,
            ]
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
            talents: [
              nomLireEcrire,
              nomLireSurLesLevres,
              nomIdentiteSecrete,
              nomSavoirVivreAuChoix,
            ]
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
            talents: [
              nomAttirant,
              nomImitation,
              nomMaitreEnDeguisement,
              nomMenteur,
            ]
          },
          {
            titre: nomMaitreEspion,
            statut: {
              echelon: or,
              standing: 4,
            },
            caracs: [nomIntelligence],
            competences: [nomRecherche, nomSavoirChoix1],
            talents: [
              nomAffable,
              nomIntrigant,
              nomSuborneur,
              nomTourDesSouvenirs,
            ]
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
            talents: [
              nomFrappeAssommante,
              nomMenacant,
              nomVisionNocturne,
              nomVivacite,
            ]
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
            talents: [
              nomAffiniteAvecLesAnimaux,
              nomBonMarcheurAuChoix,
              nomNomade,
              nomSavoirVivreServiteurs,
            ]
          },
          {
            titre: nomSenechal,
            statut: {
              echelon: or,
              standing: 1,
            },
            caracs: [nomSociabilite],
            competences: [nomCharme, nomCommandement, nomRagot, nomSubornation],
            talents: [
              nomCooperatif,
              nomEscroquer,
              nomLireEcrire,
              nomNumismate,
            ]
          },
          {
            titre: nomGouverneur,
            statut: {
              echelon: or,
              standing: 3,
            },
            caracs: [nomIntelligence],
            competences: [nomEvaluation, nomLangueAuChoix1],
            talents: [
              nomAffable,
              nomPresenceImposante,
              nomSavantRegion,
              nomSavoirVivreAuChoix,
            ]
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
            talents: [
              nomChanceux,
              nomLireEcrire,
              nomNoblesse,
              nomSavoirVivreNobles,
            ]
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
            talents: [
              nomAffable,
              nomAttirant,
              nomNoctambule,
              nomSuborneur,
            ]
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
            talents: [
              nomImperturbable,
              nomIntrigant,
              nomNegociateur,
              nomOrateur,
            ]
          },
          {
            titre: nomNobleSeigneur,
            statut: {
              echelon: or,
              standing: 7,
            },
            caracs: [nomForceMentale],
            competences: [nomPistage, nomSavoirChoix1],
            talents: [
              nomNanti,
              nomPresenceImposante,
              nomSeigneurDeGuerre,
              nomVolonteDeFer,
            ]
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
            talents: [
              nomCostaud,
              nomInfatigable,
              nomInsignifiant,
              nomObstine,
            ]
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
            talents: [
              nomDiscret,
              nomPerseverant,
              nomPrevoyant,
              nomSavoirVivreServiteurs,
            ]
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
            talents: [
              nomAffable,
              nomCooperatif,
              nomEscroquer,
              nomResistancePoison,
            ]
          },
          {
            titre: nomRegisseur,
            statut: {
              echelon: or,
              standing: 1,
            },
            caracs: [nomSociabilite],
            competences: [nomCommandement, nomCorpsACorpsBase],
            talents: [
              nomLireEcrire,
              nomNumismate,
              nomPerspicace,
              nomSavoirVivreAuChoix,
            ]
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
            talents: [
              nomCavalierEmerite,
              nomClaquerLeFouet,
              nomReflexesFoudroyants,
              nomVigilance,
            ]
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
            talents: [
              nomAcrobatiesEquestres,
              nomArtilleur,
              nomSavoirVivreSoldats,
              nomVoyageurAguerri,
            ]
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
            talents: [
              nomCombatInstinctif,
              nomHaineAuChoix,
              nomSeigneurDeGuerre,
              nomTirRapide,
            ]
          },
          {
            titre: nomOfficierCavalerie,
            statut: {
              echelon: or,
              standing: 2,
            },
            caracs: [nomSociabilite],
            competences: [nomPari, nomSavoirHeraldique],
            talents: [
              nomExaltant,
              nomFrappeReactive,
              nomRobuste,
              nomTirPrecis,
            ]
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
            talents: [
              nomCavalierEmerite,
              nomCostaud,
              nomGuerrierNe,
              nomSavoirVivreAuChoix,
            ]
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
            talents: [
              nomCoupPuissant,
              nomMenacant,
              nomPorteBouclier,
              nomVoyageurAguerri,
            ]
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
            talents: [
              nomCoeurVaillant,
              nomInebranlable,
              nomSansPeurAuChoix,
              nomSeigneurDeGuerre,
            ]
          },
          {
            titre: nomChevalierCercleInterieur,
            statut: {
              echelon: or,
              standing: 4,
            },
            caracs: [nomSociabilite],
            competences: [nomSavoirChoix1, nomSignesSecretsOrdreChevaleresque],
            talents: [
              nomDesarmer,
              nomExaltant,
              nomFrappeBlessante,
              nomVolonteDeFer,
            ]
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
            talents: [
              nomFrappeAssommante,
              nomMaitriseDesDes,
              nomPerseverant,
              nomSavoirVivreServiteurs,
            ]
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
            talents: [
              nomCoupPuissant,
              nomImpitoyable,
              nomPorteBouclier,
              nomRenversement,
            ]
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
            talents: [
              nomCoeurVaillant,
              nomInebranlable,
              nomSansPeurIntrus,
              nomSautCarpe,
            ]
          },
          {
            titre: nomGardeOfficier,
            statut: {
              echelon: argent,
              standing: 5,
            },
            caracs: [nomIntelligence],
            competences: [nomCommandement, nomSavoirGuerre],
            talents: [
              nomAssautFeroce,
              nomMaitriseDuCombat,
              nomRobuste,
              nomVolonteDeFer,
            ]
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
            talents: [
              nomCombattantAuContact,
              nomCombatDeloyal,
              nomMachoiresDAcier,
              nomRenversement,
            ]
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
            talents: [
              nomAmbidextre,
              nomCombatInstinctif,
              nomManiementDeDeuxArmes,
              nomPorteBouclier,
            ]
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
            talents: [
              nomDesarmer,
              nomMaitriseDuCombat,
              nomMenacant,
              nomRobuste,
            ]
          },
          {
            titre: nomLegendeFosse,
            statut: {
              echelon: or,
              standing: 2,
            },
            caracs: [nomSociabilite],
            competences: [nomCharme, nomProjectilesChoix],
            talents: [
              nomAssautFeroce,
              nomEffrayant,
              nomEndurci,
              nomFrappeReactive,
            ]
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
            talents: [
              nomBeniAuChoix,
              nomLireEcrire,
              nomObstine,
              nomSavoirVivreFideles,
            ]
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
            talents: [
              nomExaltant,
              nomInvocationAuChoix,
              nomManiementDeDeuxArmes,
              nomVoyageurAguerri,
            ]
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
            talents: [
              nomAmePure,
              nomCoeurVaillant,
              nomVigilance,
              nomVisionsSacrees,
            ]
          },
          {
            titre: nomPretreCapitaine,
            statut: {
              echelon: argent,
              standing: 4,
            },
            caracs: [nomSociabilite],
            competences: [nomResistanceAlcool, nomSavoirGuerre],
            talents: [
              nomAssautFeroce,
              nomHaineSacree,
              nomSansPeurAuChoix,
              nomSeigneurDeGuerre,
            ]
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
            talents: [
              nomGuerrierNe,
              nomInfatigable,
              nomMaitriseDesDes,
              nomTireurDePrecision,
            ]
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
            talents: [
              nomCoudeACoude,
              nomPorteBouclier,
              nomRechargementRapide,
              nomSavoirVivreSoldats,
            ]
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
            talents: [
              nomCombatEnEspaceClos,
              nomInebranlable,
              nomSeigneurDeGuerre,
              nomVigilance,
            ]
          },
          {
            titre: nomOfficier,
            statut: {
              echelon: or,
              standing: 1,
            },
            caracs: [nomSociabilite],
            competences: [nomOrientation, nomSavoirGuerre],
            talents: [
              nomCoeurVaillant,
              nomExaltant,
              nomOrateur,
              nomVoyageurAguerri,
            ]
          },
        ],
      },
      {
        titre: nomChevaucheurBaireau,
        description: 'Chevaucheur de blaireau',
        evolutions: [
          {
            titre: nomTaquineurBlaireau,
            statut: {
              echelon: argent,
              standing: 1,
            },
            caracs: [nomCT, nomAgilete, nomIntelligence],
            competences: [
              nomChevaucherBlaireau,
              nomDressageBlaireau,
              nomEsquive,
              nomEmpriseSurAnimaux,
              nomMetier,
              nomPerception,
              nomProjectilesFronde,
              nomRagot,
            ],
          },
          {
            titre: nomChevaucheurBaireau,
            statut: {
              echelon: argent,
              standing: 3,
            },
            caracs: [nomCC],
            competences: [
              nomCharme,
              nomCorpsACorpsBase,
              nomOrientation,
              nomProjectilesEntraves,
              nomSoinsAnimaux,
              nomResistance,
            ],
          },
          {
            titre: nomSergentBlaireau,
            statut: {
              echelon: argent,
              standing: 5,
            },
            caracs: [nomForce],
            competences: [
              nomCorpsACorpsCavalerie,
              nomIntimidation,
              nomPistage,
              nomSurvieExterieur,
            ],
          },
          {
            titre: nomMaitreBlaireau,
            statut: {
              echelon: or,
              standing: 1,
            },
            caracs: [nomSociabilite],
            competences: [nomCommandement, nomResistanceAlcool],
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
            talents: [
              nomCombattantAuContact,
              nomCombatDeloyal,
              nomGuerrierNe,
              nomMenacant,
            ]
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
            talents: [
              nomCriminel,
              nomCombatInstinctif,
              nomFrappeAssommante,
              nomRenversement,
            ]
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
            talents: [
              nomDesarmer,
              nomFrappePrecise,
              nomImpitoyable,
              nomTireurDePrecision,
            ]
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
            talents: [
              nomAmbidextre,
              nomAssautFeroce,
              nomFrappeBlessante,
              nomTirPrecis,
            ]
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
            talents: [
              nomFrenesie,
              nomManiementDeDeuxArmes,
              nomSansPeurTout,
              nomTueur,
            ]
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
            talents: [
              nomDurACuire,
              nomEndurci,
              nomMenacant,
              nomRenversement,
            ]
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
            talents: [
              nomAmbidextre,
              nomAssautFeroce,
              nomImpitoyable,
              nomRobuste,
            ]
          },
          {
            titre: nomTueurDemons,
            statut: {
              echelon: bronze,
              standing: 2,
            },
            caracs: [nomInitiative],
            competences: [nomIntuition, nomSavoirChaos],
            talents: [
              nomCoupPuissant,
              nomEffrayant,
              nomMaitriseDuCombat,
              nomTresFort,
            ]
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
            talents: [
              nomAffable,
              nomDiscret,
              nomEffraction,
              nomFrappeAssommante,
            ]
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
            talents: [
              nomImpitoyable,
              nomInfatigable,
              nomTireurDePrecision,
              nomVoyageurAguerri,
            ]
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
            talents: [
              nomFrappePrecise,
              nomManiementDeDeuxArmes,
              nomSprinter,
              nomTirPrecis,
            ]
          },
          {
            titre: nomChasseurPrimesVeteran,
            statut: {
              echelon: or,
              standing: 1,
            },
            caracs: [nomIntelligence],
            competences: [nomConduiteAttelage, nomSavoirLoi],
            talents: [
              nomDurACuire,
              nomSansPeurPrimes,
              nomTirMortel,
              nomTirSur,
            ]
          },
        ],
      },
      {
        titre: nomRodeurFantome,
        description: 'RodeurFantome',
        evolutions: [
          {
            titre: nomGardeForestier,
            statut: {
              echelon: bronze,
              standing: 3,
            },
            caracs: [nomCT, nomAgilete, nomIntelligence],
            competences: [
              nomDiscretionAuChoix,
              nomEscalade,
              nomMetierFabricantArcs,
              nomOrientation,
              nomProjectilesArc,
              nomSavoirBetes,
              nomSurvieExterieur,
              nomPerception,
            ],
          },
          {
            titre: nomRodeurFantome,
            statut: {
              echelon: bronze,
              standing: 5,
            },
            caracs: [nomDexterite],
            competences: [
              nomCorpsACorpsBase,
              nomAthletisme,
              nomEmpriseSurAnimaux,
              nomPiegeage,
              nomSignesSecretsRangers,
              nomPistage,
            ],
          },
          {
            titre: nomEspritVent,
            statut: {
              echelon: argent,
              standing: 1,
            },
            caracs: [nomCC],
            competences: [
              nomCalme,
              nomEsquive,
              nomNatation,
              nomResistance,
            ],
          },
          {
            titre: nomCourrouxForet,
            statut: {
              echelon: argent,
              standing: 3,
            },
            caracs: [nomIntelligence],
            competences: [nomIntimidation, nomLangueAuChoix1],
          },
        ],
      },
      {
        titre: nomPatrouilleurKarak,
        description: 'nomPatrouilleurKarak',
        evolutions: [
          {
            titre: nomCoureurForts,
            statut: {
              echelon: bronze,
              standing: 3,
            },
            caracs: [nomCC, nomEndurance, nomForce],
            competences: [
              nomEscalade,
              nomCorpsACorpsBase,
              nomEsquive,
              nomMetierCartographe,
              nomPerception,
              nomRamer,
              nomResistance,
              nomSurvieExterieur,
            ],
          },
          {
            titre: nomPatrouilleurKarak,
            statut: {
              echelon: argent,
              standing: 1,
            },
            caracs: [nomCT],
            competences: [
              nomEmpriseSurAnimaux,
              nomIntuition,
              nomProjectilesPoudreNoire,
              nomPistage,
              nomSignesSecretsEclaireurss,
              nomSignesSecretsRangers,
            ],
          },
          {
            titre: nomGardienRoutesKarak,
            statut: {
              echelon: argent,
              standing: 2,
            },
            caracs: [nomAgilete],
            competences: [
              nomDiscretionSouterraine,
              nomOrientation,
              nomPiegeage,
              nomSavoirIngenierie,
            ],
          },
          {
            titre: nomArpenteurKarak,
            statut: {
              echelon: argent,
              standing: 4,
            },
            caracs: [nomIntelligence],
            competences: [nomCalme, nomLangueAuChoix1],
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
            talents: [
              nomAcrobatiesEquestres,
              nomAffiniteAvecLesAnimaux,
              nomPerseverant,
              nomVoyageurAguerri,
            ]
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
            talents: [
              nomArtilleur,
              nomClaquerLeFouet,
              nomImperturbable,
              nomObstine,
            ]
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
            talents: [
              nomFlairerLesEnnuis,
              nomNegociateur,
              nomSansPeurHorsLaLoi,
              nomTirPrecis,
            ]
          },
          {
            titre: nomMaitreRoutes,
            statut: {
              echelon: argent,
              standing: 5,
            },
            caracs: [nomInitiative],
            competences: [nomCharme, nomCommandement],
            talents: [
              nomRechargementRapide,
              nomSansPeurHommesBetes,
              nomSensDeLOrientation,
              nomTireurDePrecision,
            ]
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
            talents: [
              nomBricoleur,
              nomFuite,
              nomNomade,
              nomPecheur,
            ]
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
            talents: [
              nomInfatigable,
              nomNegociateur,
              nomSensDeLOrientation,
              nomVoyageurAguerri,
            ]
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
            talents: [
              nomCostaud,
              nomNumismate,
              nomPrevoyant,
              nomTresResistant,
            ]
          },
          {
            titre: nomNegociantItinerant,
            statut: {
              echelon: argent,
              standing: 3,
            },
            caracs: [nomIntelligence],
            competences: [nomSavoirRegion, nomSavoirGeographie],
            talents: [
              nomAffable,
              nomMenteur,
              nomObstine,
              nomPerseverant,
            ]
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
            talents: [
              nomBrouet,
              nomChargeBerserk,
              nomFrenesie,
              nomLireEcrire,
            ]
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
            talents: [
              nomDurACuire,
              nomEndurci,
              nomFlagellant,
              nomHaineHeretiques,
            ]
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
            talents: [
              nomAssautFeroce,
              nomMenacant,
              nomPansementDeFortune,
              nomVoyageurAguerri,
            ]
          },
          {
            titre: nomPropheteDuDestin,
            statut: {
              echelon: bronze,
              standing: 0,
            },
            caracs: [nomSociabilite],
            competences: [nomCommandement, nomDivertissementDiscours],
            talents: [
              nomEffrayant,
              nomFerveurArdente,
              nomControleDeLaFrenesie,
              nomSansPeurHeretiques,
            ]
          },
        ],
      },
      {
        titre: nomFrereLoup,
        description: 'Frère loup',
        evolutions: [
          {
            titre: nomSurvivant,
            statut: {
              echelon: bronze,
              standing: 0,
            },
            caracs: [nomCC, nomEndurance, nomForce],
            competences: [
              nomCalme,
              nomCorpsACorpsBagarre,
              nomCorpsACorpsBase,
              nomEscalade,
              nomGuerison,
              nomIntimidation,
              nomIntuition,
              nomResistance,
              nomSavoirUlric,
              nomSurvieExterieur,
            ],
            talents: [
              nomBrouet,
              nomChargeBerserk,
              nomFrenesie,
              nomNomade,
            ]
          },
          {
            titre: nomFrereLoup,
            statut: {
              echelon: bronze,
              standing: 0,
            },
            caracs: [nomForceMentale],
            competences: [
              nomAthletisme,
              nomDiscretionRurale,
              nomEsquive,
              nomSavoirBetes,
              nomSavoirHerbes,
            ],
            talents: [
              nomDurACuire,
              nomEndurci,
              nomFouleeAuChoix,
              nomSensAiguiseAuChoix,
            ]
          },
          {
            titre: nomCompagnonLoup,
            statut: {
              echelon: bronze,
              standing: 0,
            },
            caracs: [nomInitiative],
            competences: [nomOrientation, nomPerception, nomPistage],
            talents: [
              nomAssautFeroce,
              nomPansementDeFortune,
              nomSensDeLOrientation,
              nomVoyageurAguerri,
            ]
          },
          {
            titre: nomGrandLoup,
            statut: {
              echelon: bronze,
              standing: 0,
            },
            caracs: [nomAgilete],
            competences: [nomNatation, nomSoinsAnimaux],
            talents: [
              nomControleDeLaFrenesie,
              nomEffrayant,
              nomFerveurArdente,
              nomSansPeurHommesBetes,
            ]
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
            talents: [
              nomFuite,
              nomPasDeCote,
              nomSprinter,
              nomVeloce,
            ]
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
            talents: [
              nomClaquerLeFouet,
              nomCriminel,
              nomSensDeLOrientation,
              nomVoyageurAguerri,
            ]
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
            talents: [
              nomAcrobatiesEquestres,
              nomFlairerLesEnnuis,
              nomImpitoyable,
              nomPerseverant,
            ]
          },
          {
            titre: nomMessagerVeteran,
            statut: {
              echelon: argent,
              standing: 5,
            },
            caracs: [nomSociabilite],
            competences: [nomIntimidation, nomCommandement],
            talents: [
              nomCaid,
              nomHaineHorsLaLoi,
              nomNegociateur,
              nomTresResistant,
            ]
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
            talents: [
              nomEscroquer,
              nomImperturbable,
              nomNumismate,
              nomTireurDePrecision,
            ]
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
            talents: [
              nomCavalierEmerite,
              nomClaquerLeFouet,
              nomCriminel,
              nomVoyageurAguerri,
            ]
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
            talents: [
              nomFlairerLesEnnuis,
              nomHaineAuChoix,
              nomSavoirVivreSoldats,
              nomSansPeurHorsLaLoi,
            ]
          },
          {
            titre: nomCapitainePatrouilleur,
            statut: {
              echelon: or,
              standing: 1,
            },
            caracs: [nomIntelligence],
            competences: [nomOrientation, nomSavoirEmpire],
            talents: [
              nomCaid,
              nomOrateur,
              nomPresenceImposante,
              nomVigilance,
            ]
          },
        ],
      },
      {
        titre: nomGardechamps,
        description: 'Garde champs',
        evolutions: [
          {
            titre: nomGardeNovice,
            statut: {
              echelon: bronze,
              standing: 4,
            },
            caracs: [nomCT, nomAgilete, nomForceMentale],
            competences: [
              nomDiscretionRurale,
              nomIntuition,
              nomMetier,
              nomOrientation,
              nomPerception,
              nomProjectilesFronde,
              nomRagot,
              nomSavoirLeMoot,
            ],
          },
          {
            titre: nomGardechamps,
            statut: {
              echelon: argent,
              standing: 1,
            },
            caracs: [nomIntelligence],
            competences: [
              nomCharme,
              nomCorpsACorpsBase,
              nomEsquive,
              nomResistanceAlcool,
              nomSurvieExterieur,
              nomSignesSecretsEclaireurss,
            ],
          },
          {
            titre: nomSergentGardechamps,
            statut: {
              echelon: argent,
              standing: 3,
            },
            caracs: [nomCC],
            competences: [
              nomCalme,
              nomPiegeage,
              nomResistance,
              nomSavoirNecromancie,
            ],
          },
          {
            titre: nomCapitaineGardechamps,
            statut: {
              echelon: argent,
              standing: 5,
            },
            caracs: [nomEndurance],
            competences: [nomCommandement, nomSavoirArtGuerre],
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
            talents: [
              nomDetermine,
              nomImperturbable,
              nomLireEcrire,
              nomMenacant,
            ]
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
            talents: [
              nomDiscret,
              nomManiementDeDeuxArmes,
              nomTireurDePrecision,
              nomVoyageurAguerri,
            ]
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
            talents: [
              nomFlairerLesEnnuis,
              nomImpitoyable,
              nomObstine,
              nomSansPeurSorcieres,
            ]
          },
          {
            titre: nomRepurgateurVeteran,
            statut: {
              echelon: or,
              standing: 1,
            },
            caracs: [nomIntelligence],
            competences: [nomSavoirChaos, nomSavoirPolitique],
            talents: [
              nomAmePure,
              nomEffrayant,
              nomPerceptionDeLaMagie,
              nomVolonteDeFer,
            ]
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
            talents: [
              nomAffable,
              nomAttirant,
              nomImitation,
              nomOrateur,
            ]
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
            talents: [
              nomAcrobatiesEquestres,
              nomContorsioniste,
              nomSautCarpe,
              nomTireurDElite,
            ]
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
            talents: [
              nomBaratiner,
              nomLireEcrire,
              nomMaitreEnDeguisement,
              nomOreilleAbsolue,
            ]
          },
          {
            titre: nomChefTroupe,
            statut: {
              echelon: or,
              standing: 1,
            },
            caracs: [nomEndurance],
            competences: [nomCommandement, nomConduiteAttelage],
            talents: [
              nomNegociateur,
              nomSavoirVivreAuChoix,
              nomVivacite,
              nomVoyageurAguerri,
            ]
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
            talents: [
              nomConcocter,
              nomLireEcrire,
              nomMaitreArtisanApothicaire,
              nomSavoirVivreErudits,
            ]
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
            talents: [
              nomCriminel,
              nomNegociateur,
              nomSavoirVivreGuilde,
              nomPharmacologie,
            ]
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
            talents: [
              nomPerspicace,
              nomResistancePoison,
              nomStudieux,
              nomTravailleurQualifieApothicaire,
            ]
          },
          {
            titre: nomApothicaireRenom,
            statut: {
              echelon: or,
              standing: 1,
            },
            caracs: [nomForceMentale],
            competences: [nomChevaucher, nomIntimidation],
            talents: [
              nomImperturbable,
              nomSavantApothicaire,
              nomSensAiguiseGout,
              nomTravailleurQualifieEmpoisonneur,
            ]
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
        description: 'Ingénieur',
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
            competences: [
              nomArtCalligraphie,
              nomCalme,
              nomDivertissementNarration,
              nomGuerison,
              nomRagot,
              nomResistance,
              nomSavoirTheologie,
              nomPriere,
            ],
          },
          {
            titre: nomNonne,
            statut: {
              echelon: bronze,
              standing: 4,
            },
            caracs: [nomForceMentale],
            competences: [
              nomCharme,
              nomCorpsACorpsAuChoix,
              nomMetierBrasseur,
              nomMetierHerboriste,
              nomMetierVigneron,
              nomRecherche,
            ],
          },
          {
            titre: nomAbbesse,
            statut: {
              echelon: argent,
              standing: 2,
            },
            caracs: [nomInitiative],
            competences: [
              nomCommandement,
              nomPerception,
              nomSavoirRegion,
              nomSavoirPolitique,
            ],
          },
          {
            titre: nomPrieureGenerale,
            statut: {
              echelon: argent,
              standing: 5,
            },
            caracs: [nomEndurance],
            competences: [nomSavoirChoix1, nomLangueAuChoix1],
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
            competences: [
              nomAthletisme,
              nomCalme,
              nomIntuition,
              nomPerception,
              nomPriere,
              nomRecherche,
              nomResistance,
              nomSavoirTheologie,
            ],
          },
          {
            titre: nomPretre,
            statut: {
              echelon: argent,
              standing: 1,
            },
            caracs: [nomSociabilite],
            competences: [
              nomCharme,
              nomCorpsACorpsBase,
              nomDivertissementNarration,
              nomIntimidation,
              nomGuerison,
              nomRagot,
            ],
          },
          {
            titre: nomGrandPretre,
            statut: {
              echelon: or,
              standing: 1,
            },
            caracs: [nomIntelligence],
            competences: [
              nomArtEcriture,
              nomCommandement,
              nomDivertissementDiscours,
              nomSavoirHeraldique,
            ],
          },
          {
            titre: nomLecteur,
            statut: {
              echelon: or,
              standing: 2,
            },
            caracs: [nomInitiative],
            competences: [nomLangueAuChoix1, nomSavoirPolitique],
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
            competences: [
              nomCorpsACorpsBase,
              nomCorpsACorpsHast,
              nomEsquive,
              nomFocalisation,
              nomIntuition,
              nomPerception,
              nomSavoirSigmar,
              nomLangueMagick,
            ],
          },
          {
            titre: nomSorcier,
            statut: {
              echelon: argent,
              standing: 3,
            },
            caracs: [nomAgilete],
            competences: [
              nomCharme,
              nomCalme,
              nomIntimidation,
              nomLangueBataille,
              nomLangueAuChoix1,
              nomRagot,
            ],
          },
          {
            titre: nomMaitreSorcier,
            statut: {
              echelon: or,
              standing: 1,
            },
            caracs: [nomInitiative],
            competences: [
              nomChevaucher,
              nomEvaluation,
              nomSoinsAnimaux,
              nomSavoirGuerre,
            ],
          },
          {
            titre: nomSeigneurSorcier,
            statut: {
              echelon: or,
              standing: 2,
            },
            caracs: [nomSociabilite],
            competences: [nomLangueAuChoix2, nomSavoirChoix1],
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
            competences: [
              nomCorpsACorpsBagarre,
              nomNatation,
              nomEsquive,
              nomRagot,
              nomResistance,
              nomResistanceAlcool,
              nomVoile,
              nomRamer,
            ],
            talents: [
              nomCombatDeloyal,
              nomInfatigable,
              nomNageurEndurant,
              nomPecheur,
            ]
          },
          {
            titre: nomBatelier,
            statut: {
              echelon: argent,
              standing: 2,
            },
            caracs: [nomInitiative],
            competences: [
              nomAthletisme,
              nomDivertissementNarration,
              nomMarchandage,
              nomSavoirVivre,
              nomIntuition,
              nomPerception,
            ],
            talents: [
              nomMarinier,
              nomSavoirVivreGuilde,
              nomTresFort,
              nomVoyageurAguerri,
            ]
          },
          {
            titre: nomChefBord,
            statut: {
              echelon: argent,
              standing: 3,
            },
            caracs: [nomDexterite],
            competences: [
              nomDivertissementChant,
              nomEscalade,
              nomGuerison,
              nomMetierConstructionBateaux,
            ],
            talents: [
              nomCoupPuissant,
              nomEscroquer,
              nomFlairerLesEnnuis,
              nomNegociateur,
            ]
          },
          {
            titre: nomCapitaine,
            statut: {
              echelon: argent,
              standing: 5,
            },
            caracs: [nomIntelligence],
            competences: [nomCommandement, nomOrientation],
            talents: [
              nomMenacant,
              nomOrateur,
              nomPilote,
              nomSensDeLOrientation,
            ]
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
            competences: [
              nomAthletisme,
              nomNatation,
              nomCalme,
              nomDiscretionRuraleUrbaine,
              nomSubornation,
              nomResistanceAlcool,
              nomVoile,
              nomRamer,
            ],
          },
          {
            titre: nomContrebandier,
            statut: {
              echelon: bronze,
              standing: 3,
            },
            caracs: [nomInitiative],
            competences: [
              nomCorpsACorpsBase,
              nomMarchandage,
              nomPerception,
              nomRagot,
              nomSavoirRegion,
              nomSignesSecretsContrebandiers,
            ],
          },
          {
            titre: nomMaitreContrebandier,
            statut: {
              echelon: bronze,
              standing: 5,
            },
            caracs: [nomIntelligence],
            competences: [
              nomEvaluation,
              nomIntimidation,
              nomIntuition,
              nomSavoirVoiesFluviales,
            ],
          },
          {
            titre: nomRoiContrebandiers,
            statut: {
              echelon: argent,
              standing: 2,
            },
            caracs: [nomSociabilite],
            competences: [nomCommandement, nomLangueAuChoix1],
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
            competences: [
              nomCorpsACorpsBase,
              nomNatation,
              nomEsquive,
              nomRagot,
              nomResistance,
              nomResistanceAlcool,
              nomAthletisme,
              nomEscalade,
            ],
          },
          {
            titre: nomDebardeur,
            statut: {
              echelon: argent,
              standing: 1,
            },
            caracs: [nomForce],
            competences: [
              nomDiscretionUrbaine,
              nomDivertissementNarration,
              nomIntimidation,
              nomPari,
              nomPerception,
              nomSubornation,
            ],
          },
          {
            titre: nomContremaitre,
            statut: {
              echelon: argent,
              standing: 3,
            },
            caracs: [nomForceMentale],
            competences: [
              nomCalme,
              nomCommandement,
              nomEvaluation,
              nomIntuition,
            ],
          },
          {
            titre: nomMaitreDocks,
            statut: {
              echelon: argent,
              standing: 5,
            },
            caracs: [nomIntelligence],
            competences: [nomCharme, nomSavoirTaxes],
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
            competences: [
              nomSurvieExterieur,
              nomNatation,
              nomEsquive,
              nomRagot,
              nomResistance,
              nomResistanceAlcool,
              nomAthletisme,
              nomRamer,
            ],
          },
          {
            titre: nomFemmeDuFleuve,
            statut: {
              echelon: bronze,
              standing: 3,
            },
            caracs: [nomCC],
            competences: [
              nomPari,
              nomProjectilesEntraves,
              nomPiegeage,
              nomProjectilesLancer,
              nomSavoirRegion,
              nomSavoirVoiesFluviales,
            ],
          },
          {
            titre: nomSageRives,
            statut: {
              echelon: bronze,
              standing: 5,
            },
            caracs: [nomInitiative],
            competences: [
              nomCorpsACorpsHast,
              nomCharme,
              nomIntuition,
              nomPerception,
            ],
          },
          {
            titre: nomAncienneFleuve,
            statut: {
              echelon: argent,
              standing: 2,
            },
            caracs: [nomSociabilite],
            competences: [nomDivertissementNarration, nomSavoirFolklore],
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
            competences: [
              nomCorpsACorpsBagarre,
              nomNatation,
              nomVoile,
              nomRagot,
              nomPari,
              nomResistanceAlcool,
              nomRamer,
              nomEscalade,
            ],
          },
          {
            titre: nomMarin,
            statut: {
              echelon: argent,
              standing: 3,
            },
            caracs: [nomCC],
            competences: [
              nomCorpsACorpsBase,
              nomDivertissementChant,
              nomEsquive,
              nomLangueAuChoix1,
              nomResistance,
              nomAthletisme,
            ],
          },
          {
            titre: nomMaitreEquipage,
            statut: {
              echelon: argent,
              standing: 5,
            },
            caracs: [nomInitiative],
            competences: [
              nomCalme,
              nomCommandement,
              nomPerception,
              nomMetierCharpentier,
            ],
          },
          {
            titre: nomCapitaineNavire,
            statut: {
              echelon: or,
              standing: 2,
            },
            caracs: [nomIntelligence],
            competences: [nomCharme, nomOrientation],
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
            competences: [
              nomCorpsACorpsBase,
              nomNatation,
              nomEsquive,
              nomSurvieExterieur,
              nomResistance,
              nomResistanceAlcool,
              nomRamer,
              nomEscalade,
            ],
          },
          {
            titre: nomNaufrageur,
            statut: {
              echelon: bronze,
              standing: 3,
            },
            caracs: [nomForceMentale],
            competences: [
              nomCalme,
              nomIntuition,
              nomOrientation,
              nomPerception,
              nomPiegeage,
              nomSubornation,
            ],
          },
          {
            titre: nomPirateRivieres,
            statut: {
              echelon: bronze,
              standing: 5,
            },
            caracs: [nomCT],
            competences: [
              nomDiscretionRurale,
              nomIntimidation,
              nomProjectilesArbalete,
              nomRagot,
            ],
          },
          {
            titre: nomCapitaineNaufrageur,
            statut: {
              echelon: argent,
              standing: 2,
            },
            caracs: [nomSociabilite],
            competences: [nomCommandement, nomSavoirVoiesFluviales],
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
            competences: [
              nomIntuition,
              nomNatation,
              nomPerception,
              nomRagot,
              nomSavoirRegion,
              nomResistanceAlcool,
              nomRamer,
              nomSavoirVoiesFluviales,
            ],
          },
          {
            titre: nomNautonnier,
            statut: {
              echelon: argent,
              standing: 1,
            },
            caracs: [nomForceMentale],
            competences: [
              nomCalme,
              nomCharme,
              nomCorpsACorpsBase,
              nomDivertissementNarration,
              nomLangueAuChoix1,
              nomOrientation,
            ],
          },
          {
            titre: nomPilote,
            statut: {
              echelon: argent,
              standing: 3,
            },
            caracs: [nomIntelligence],
            competences: [
              nomIntimidation,
              nomMarchandage,
              nomSavoirRegion,
              nomSavoirEpaves,
            ],
          },
          {
            titre: nomMaitreNocher,
            statut: {
              echelon: argent,
              standing: 5,
            },
            caracs: [nomSociabilite],
            competences: [nomCommandement, nomVoile],
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
            competences: [
              nomCorpsACorpsBase,
              nomNatation,
              nomVoile,
              nomAthletisme,
              nomEsquive,
              nomResistance,
              nomRamer,
              nomPerception,
            ],
          },
          {
            titre: nomPatrouilleurFluvial,
            statut: {
              echelon: argent,
              standing: 2,
            },
            caracs: [nomCC],
            competences: [
              nomCharme,
              nomIntimidation,
              nomProjectilesPoudreNoire,
              nomRagot,
              nomSavoirVoiesFluviales,
              nomSubornation,
            ],
          },
          {
            titre: nomAbordeur,
            statut: {
              echelon: argent,
              standing: 1,
            },
            caracs: [nomInitiative],
            competences: [nomCommandement, nomCalme, nomIntuition, nomEscalade],
          },
          {
            titre: nomMaitreAbordeur,
            statut: {
              echelon: or,
              standing: 1,
            },
            caracs: [nomIntelligence],
            competences: [nomOrientation, nomSavoirLoi],
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
            competences: [
              nomCharme,
              nomDivertissementNarration,
              nomEscamotage,
              nomRagot,
              nomMarchandage,
              nomResistanceAlcool,
              nomPari,
              nomSubornation,
            ],
          },
          {
            titre: nomCharlatan,
            statut: {
              echelon: bronze,
              standing: 5,
            },
            caracs: [nomForceMentale],
            competences: [
              nomCalme,
              nomDivertissementInterpretation,
              nomEsquive,
              nomEvaluation,
              nomIntuition,
              nomPerception,
            ],
          },
          {
            titre: nomArnaqueur,
            statut: {
              echelon: argent,
              standing: 2,
            },
            caracs: [nomAgilete],
            competences: [
              nomCrochetage,
              nomLangueVoleur,
              nomSignesSecretsVoleur,
              nomSavoirHeraldique,
            ],
          },
          {
            titre: nomEscroc,
            statut: {
              echelon: argent,
              standing: 4,
            },
            caracs: [nomIntelligence],
            competences: [nomRecherche, nomSavoirGenealogie],
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
            competences: [
              nomCharme,
              nomDivertissementAuChoix1,
              nomIntimidation,
              nomRagot,
              nomMarchandage,
              nomResistanceAlcool,
              nomPari,
              nomSubornation,
            ],
          },
          {
            titre: nomEntremetteur,
            statut: {
              echelon: bronze,
              standing: 3,
            },
            caracs: [nomInitiative],
            competences: [
              nomCorpsACorpsBase,
              nomEsquive,
              nomIntuition,
              nomPerception,
              nomSavoirRegion,
              nomResistance,
            ],
          },
          {
            titre: nomSouteneur,
            statut: {
              echelon: argent,
              standing: 1,
            },
            caracs: [nomForceMentale],
            competences: [
              nomCalme,
              nomEvaluation,
              nomLangueAuChoix1,
              nomSavoirLoi,
            ],
          },
          {
            titre: nomMeneur,
            statut: {
              echelon: argent,
              standing: 3,
            },
            caracs: [nomIntelligence],
            competences: [nomCommandement, nomSavoirHeraldique],
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
            competences: [
              nomCalme,
              nomAthletisme,
              nomCorpsACorpsBase,
              nomIntimidation,
              nomResistance,
              nomResistanceAlcool,
              nomPari,
              nomSurvieExterieur,
            ],
          },
          {
            titre: nomHorsLaLoi,
            statut: {
              echelon: bronze,
              standing: 2,
            },
            caracs: [nomCT],
            competences: [
              nomDiscretionRurale,
              nomEsquive,
              nomGuerison,
              nomPerception,
              nomProjectilesArc,
              nomSavoirRegion,
            ],
          },
          {
            titre: nomChefBande,
            statut: {
              echelon: bronze,
              standing: 4,
            },
            caracs: [nomInitiative],
            competences: [
              nomChevaucher,
              nomCommandement,
              nomIntuition,
              nomRagot,
            ],
          },
          {
            titre: nomRoiBandits,
            statut: {
              echelon: argent,
              standing: 2,
            },
            caracs: [nomSociabilite],
            competences: [nomCharme, nomSavoirEmpire],
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
            competences: [
              nomCalme,
              nomDiscretionAuChoix,
              nomEscalade,
              nomEsquive,
              nomResistance,
              nomIntuition,
              nomPerception,
              nomRagot,
            ],
          },
          {
            titre: nomPilleurDeTombes,
            statut: {
              echelon: bronze,
              standing: 3,
            },
            caracs: [nomCC],
            competences: [
              nomConduiteAttelage,
              nomEvaluation,
              nomCorpsACorpsBase,
              nomMarchandage,
              nomSavoirRemede,
              nomSubornation,
            ],
          },
          {
            titre: nomPilleurTombeaux,
            statut: {
              echelon: argent,
              standing: 1,
            },
            caracs: [nomDexterite],
            competences: [
              nomCrochetage,
              nomPiegeage,
              nomRecherche,
              nomSavoirHistoire,
            ],
          },
          {
            titre: nomChasseurTresors,
            statut: {
              echelon: argent,
              standing: 5,
            },
            caracs: [nomIntelligence],
            competences: [nomMetierIngenierie, nomOrientation],
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
            caracs: [nomCC, nomForce, nomEndurance],
            competences: [
              nomCalme,
              nomDiscretionUrbaine,
              nomCorpsACorpsBagarre,
              nomIntimidation,
              nomResistance,
              nomResistanceAlcool,
              nomEsquive,
              nomSavoirRegion,
            ],
          },
          {
            titre: nomRanconneur,
            statut: {
              echelon: bronze,
              standing: 5,
            },
            caracs: [nomSociabilite],
            competences: [
              nomCharme,
              nomEvaluation,
              nomCorpsACorpsBase,
              nomLangueEstalienTileen,
              nomRagot,
              nomSubornation,
            ],
          },
          {
            titre: nomChefGang,
            statut: {
              echelon: argent,
              standing: 3,
            },
            caracs: [nomForceMentale],
            competences: [
              nomCommandement,
              nomIntuition,
              nomPerception,
              nomProjectilesArbalete,
            ],
          },
          {
            titre: nomBaronCrime,
            statut: {
              echelon: argent,
              standing: 5,
            },
            caracs: [nomIntelligence],
            competences: [nomSavoirLoi, nomSavoirPolitique],
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
            competences: [
              nomCharme,
              nomEsquive,
              nomCorpsACorpsBase,
              nomEvaluation,
              nomMarchandage,
              nomResistanceAlcool,
              nomPari,
              nomRagot,
            ],
          },
          {
            titre: nomReceleur,
            statut: {
              echelon: argent,
              standing: 2,
            },
            caracs: [nomDexterite],
            competences: [
              nomCalme,
              nomIntuition,
              nomMetierGraveur,
              nomIntimidation,
              nomPerception,
              nomSignesSecretsVoleur,
            ],
          },
          {
            titre: nomMaitreReceleur,
            statut: {
              echelon: argent,
              standing: 3,
            },
            caracs: [nomIntelligence],
            competences: [
              nomDivertissementNarration,
              nomSavoirArt,
              nomSavoirRegion,
              nomSubornation,
            ],
          },
          {
            titre: nomProfessionnelMarcheNoir,
            statut: {
              echelon: argent,
              standing: 4,
            },
            caracs: [nomForceMentale],
            competences: [nomRecherche, nomSavoirHeraldique],
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
            competences: [
              nomCalme,
              nomDiscretionRurale,
              nomEscamotage,
              nomIntimidation,
              nomResistance,
              nomFocalisation,
              nomLangueMagick,
              nomRagot,
            ],
          },
          {
            titre: nomSorcierDissident,
            statut: {
              echelon: bronze,
              standing: 2,
            },
            caracs: [nomInitiative],
            competences: [
              nomEmpriseSurAnimaux,
              nomEsquive,
              nomCorpsACorpsHast,
              nomIntuition,
              nomMetierHerboriste,
              nomPerception,
            ],
          },
          {
            titre: nomDevin,
            statut: {
              echelon: bronze,
              standing: 3,
            },
            caracs: [nomSociabilite],
            competences: [
              nomCharme,
              nomMarchandage,
              nomSavoirMagieNoire,
              nomSubornation,
            ],
          },
          {
            titre: nomDemoniste,
            statut: {
              echelon: bronze,
              standing: 5,
            },
            caracs: [nomIntelligence],
            competences: [nomSavoirDemonologie, nomSavoirMagie],
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
            competences: [
              nomAthletisme,
              nomCalme,
              nomDiscretionUrbaine,
              nomEscalade,
              nomEsquive,
              nomResistance,
              nomIntuition,
              nomPerception,
            ],
          },
          {
            titre: nomVoleur,
            statut: {
              echelon: bronze,
              standing: 3,
            },
            caracs: [nomDexterite],
            competences: [
              nomCrochetage,
              nomEscamotage,
              nomEvaluation,
              nomRagot,
              nomSavoirRegion,
              nomSignesSecretsVoleur,
            ],
          },
          {
            titre: nomMaitreVoleur,
            statut: {
              echelon: bronze,
              standing: 5,
            },
            caracs: [nomForce],
            competences: [
              nomIntimidation,
              nomProjectilesArbalete,
              nomSubornation,
              nomPari,
            ],
          },
          {
            titre: nomCambrioleur,
            statut: {
              echelon: argent,
              standing: 3,
            },
            caracs: [nomSociabilite],
            competences: [nomCharme, nomPiegeage],
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
            competences: [
              nomCalme,
              nomCorpsACorpsBase,
              nomEsquive,
              nomIntimidation,
              nomMarchandage,
              nomPerception,
              nomResistance,
              nomRagot,
            ],
          },
          {
            titre: nomBailli,
            statut: {
              echelon: argent,
              standing: 5,
            },
            caracs: [nomSociabilite],
            competences: [
              nomCharme,
              nomEvaluation,
              nomCommandement,
              nomSavoirRegion,
              nomIntuition,
              nomSubornation,
            ],
          },
          {
            titre: nomPrefet,
            statut: {
              echelon: or,
              standing: 1,
            },
            caracs: [nomAgilete],
            competences: [
              nomChevaucher,
              nomOrientation,
              nomSavoirHeraldique,
              nomSoinsAnimaux,
            ],
          },
          {
            titre: nomMagistrat,
            statut: {
              echelon: or,
              standing: 3,
            },
            caracs: [nomIntelligence],
            competences: [nomLangueClassique, nomSavoirLoi],
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
            competences: [
              nomEmpriseSurAnimaux,
              nomPiegeage,
              nomProjectilesFronde,
              nomEscalade,
              nomSavoirBetes,
              nomResistance,
              nomSurvieExterieur,
              nomPerception,
            ],
          },
          {
            titre: nomChasseur,
            statut: {
              echelon: bronze,
              standing: 4,
            },
            caracs: [nomCT],
            competences: [
              nomCorpsACorpsBase,
              nomCalme,
              nomDiscretionRurale,
              nomProjectilesArc,
              nomSignesSecretsChasseurs,
              nomResistance,
            ],
          },
          {
            titre: nomPisteur,
            statut: {
              echelon: argent,
              standing: 1,
            },
            caracs: [nomInitiative],
            competences: [
              nomChevaucher,
              nomNatation,
              nomOrientation,
              nomPistage,
            ],
          },
          {
            titre: nomMaitreChasse,
            statut: {
              echelon: argent,
              standing: 3,
            },
            caracs: [nomIntelligence],
            competences: [nomDressage, nomSoinsAnimaux],
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
            competences: [
              nomCorpsACorpsBase,
              nomEmpriseSurAnimaux,
              nomRagot,
              nomEscalade,
              nomSavoirRegion,
              nomResistance,
              nomSurvieExterieur,
              nomPerception,
            ],
          },
          {
            titre: nomEclaireur,
            statut: {
              echelon: bronze,
              standing: 5,
            },
            caracs: [nomCT],
            competences: [
              nomAthletisme,
              nomChevaucher,
              nomDiscretionRurale,
              nomOrientation,
              nomPistage,
              nomProjectilesArc,
            ],
          },
          {
            titre: nomGuide,
            statut: {
              echelon: argent,
              standing: 1,
            },
            caracs: [nomIntelligence],
            competences: [
              nomMarchandage,
              nomNatation,
              nomSignesSecretsChasseurs,
              nomSoinsAnimaux,
            ],
          },
          {
            titre: nomExplorateur,
            statut: {
              echelon: argent,
              standing: 5,
            },
            caracs: [nomDexterite],
            competences: [nomLangueAuChoix1, nomMetierCartographe],
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
            competences: [
              nomEmpriseSurAnimaux,
              nomEscalade,
              nomMetierHerboriste,
              nomNatation,
              nomSavoirHerbes,
              nomPerception,
              nomResistance,
              nomSurvieExterieur,
            ],
          },
          {
            titre: nomHerboriste,
            statut: {
              echelon: bronze,
              standing: 4,
            },
            caracs: [nomDexterite],
            competences: [
              nomCalme,
              nomGuerison,
              nomMarchandage,
              nomSavoirRegion,
              nomResistanceAlcool,
              nomRagot,
            ],
          },
          {
            titre: nomMaitreHerboriste,
            statut: {
              echelon: argent,
              standing: 1,
            },
            caracs: [nomSociabilite],
            competences: [
              nomCommandement,
              nomIntuition,
              nomMetierEmpoisonneur,
              nomSavoirRemede,
            ],
          },
          {
            titre: nomHerbalisteRenom,
            statut: {
              echelon: argent,
              standing: 3,
            },
            caracs: [nomIntelligence],
            competences: [nomConduiteAttelage, nomOrientation],
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
            competences: [
              nomCalme,
              nomCorpsACorpsDeuxMains,
              nomIntuition,
              nomNatation,
              nomSurvieExterieur,
              nomPerception,
              nomResistance,
              nomSavoirRegion,
            ],
          },
          {
            titre: nomMineur,
            statut: {
              echelon: bronze,
              standing: 4,
            },
            caracs: [nomCC],
            competences: [
              nomCorpsACorpsBase,
              nomEscalade,
              nomEvaluation,
              nomMetierExplosifs,
              nomResistanceAlcool,
              nomSignesSecretsMineurs,
            ],
          },
          {
            titre: nomMaitreMineur,
            statut: {
              echelon: bronze,
              standing: 5,
            },
            caracs: [nomInitiative],
            competences: [
              nomDiscretionSouterraine,
              nomMetierIngenierie,
              nomSavoirGeologie,
              nomRagot,
            ],
          },
          {
            titre: nomContremaitreMine,
            statut: {
              echelon: argent,
              standing: 4,
            },
            caracs: [nomSociabilite],
            competences: [nomCharme, nomCommandement],
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
            competences: [
              nomCharme,
              nomDivertissementVoyance,
              nomIntuition,
              nomEscamotage,
              nomEsquive,
              nomPerception,
              nomMarchandage,
              nomRagot,
            ],
          },
          {
            titre: nomMystique,
            statut: {
              echelon: bronze,
              standing: 2,
            },
            caracs: [nomForceMentale],
            competences: [
              nomCalme,
              nomDivertissementConference,
              nomEvaluation,
              nomIntimidation,
              nomSubornation,
              nomSavoirAstrologie,
            ],
          },
          {
            titre: nomSage,
            statut: {
              echelon: bronze,
              standing: 3,
            },
            caracs: [nomAgilete],
            competences: [
              nomArtEcriture,
              nomEmpriseSurAnimaux,
              nomDivertissementNarration,
              nomLangueAuChoix1,
            ],
          },
          {
            titre: nomProphete,
            statut: {
              echelon: bronze,
              standing: 4,
            },
            caracs: [nomIntelligence],
            competences: [nomFocalisationAzyr, nomSavoirProphetie],
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
            competences: [
              nomFocalisation,
              nomLangueMagick,
              nomIntuition,
              nomSavoirHerbes,
              nomSurvieExterieur,
              nomPerception,
              nomResistance,
              nomSavoirFolklore,
            ],
          },
          {
            titre: nomSorcierDeVillage,
            statut: {
              echelon: bronze,
              standing: 2,
            },
            caracs: [nomIntelligence],
            competences: [
              nomCalme,
              nomGuerison,
              nomRagot,
              nomMetierColifichets,
              nomMetierHerboriste,
              nomSavoirRegion,
            ],
          },
          {
            titre: nomMaitreSorcierVillage,
            statut: {
              echelon: bronze,
              standing: 3,
            },
            caracs: [nomSociabilite],
            competences: [
              nomMarchandage,
              nomSavoirMagie,
              nomSavoirGenealogie,
              nomSavoirEpaves,
            ],
          },
          {
            titre: nomSageVillage,
            statut: {
              echelon: bronze,
              standing: 5,
            },
            caracs: [nomForceMentale],
            competences: [nomPriere, nomIntimidation],
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
            competences: [
              nomAthletisme,
              nomCorpsACorpsBagarre,
              nomRagot,
              nomResistanceAlcool,
              nomSurvieExterieur,
              nomSoinsAnimaux,
              nomResistance,
              nomSavoirRegion,
            ],
          },
          {
            titre: nomVillageois,
            statut: {
              echelon: bronze,
              standing: 3,
            },
            caracs: [nomCC],
            competences: [
              nomConduiteAttelage,
              nomCorpsACorpsBase,
              nomDivertissementNarration,
              nomEsquive,
              nomMarchandage,
              nomMetierAuChoix,
            ],
          },
          {
            titre: nomEchevin,
            statut: {
              echelon: bronze,
              standing: 4,
            },
            caracs: [nomSociabilite],
            competences: [
              nomCharme,
              nomCommandement,
              nomIntimidation,
              nomSubornation,
            ],
          },
          {
            titre: nomDoyen,
            statut: {
              echelon: argent,
              standing: 2,
            },
            caracs: [nomIntelligence],
            competences: [nomIntuition, nomSavoirHistoire],
          },
        ],
      },
    ],
  },
]
