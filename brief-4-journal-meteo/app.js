// Journal météorologique de la ferme — point d'entrée : le menu.
// À vous d'écrire tout le menu : accueil, chargement des données, menu affiché avant chaque choix,
// actions, sortie et gestion des erreurs. Comportement et textes imposés : fiches/3-ajouter-lister.md.
// Lancer : node app.js
import { demander, fermerSaisie, ouvrirSaisie } from './src/saisie.js';
import { chargerJson, enregistrerJson } from './src/stockage.js';
import { ajouterReleve, formaterReleve, listerReleves, trouverParId } from './src/registre.js';
import { SEUIL_JOUR_PLUVIEUX, joursPluvieux, trierParPluie, trierParTemperature, trouverParDate } from './src/recherche.js';
import { cumulPluie, moyenneTemperature, temperatureMinMax } from './src/synthese.js';

const FICHIER_DONNEES = 'donnees/releves.json';

async function main() {
  ouvrirSaisie();
 let releves = [];
  try {
    releves = await chargerJson(FICHIER_DONNEES);
    if (!Array.isArray(releves)) releves = [];
  } catch { releves = []; }

  console.log("=== Journal météorologique de la ferme ===");

  let enCours = true;
  while (enCours) {
    console.log("\n--- MENU ---");
    console.log("1. Lister les relevés");
    console.log("2. Ajouter un relevé");
    console.log("3. Chercher par ID");
    console.log("4. Chercher par date");
    console.log("5. Trier par température");
    console.log("6. Trier par pluie");
    console.log("7. Statistiques (moyenne, cumul, min/max)");
    console.log("8. Jours pluvieux (>= " + SEUIL_JOUR_PLUVIEUX + "mm)");
    console.log("9. Modifier un relevé (bonus)");
    console.log("10. Supprimer un relevé (bonus)");
    console.log("0. Quitter et enregistrer");

    const choix = (await demander("Votre choix : ")).trim();

    switch (choix) {
      case "1": {
        console.log("Nombre de relevés :", releves.length);
        const liste = listerReleves(releves);
        console.log(liste);
        await demander("\nAppuie sur ENTREE pour revenir au menu...");
      break;
      }
      
      case "2": {
        const id = await demander("ID : ");
        const date = await demander("Date (AAAA-MM-JJ) : ");
        const temp = await demander("Température C : ");
        const pluie = await demander("Pluie mm : ");
        const humidite = await demander("Humidité relative de l'air (%) : ");
       const res = ajouterReleve(releves, {
         id,
         date,
         temperatureC: temp,
         pluieMm: pluie,
         humiditeAirPct: humidite
      });
        if (res.succes) {
          await enregistrerJson(FICHIER_DONNEES, releves);
          console.log("Relevé ajouté : " + formaterReleve(res.releve));
        } else {
          console.log("Erreur : " + res.erreurs.join(", "));
        }
        break;
      }
      case "3": {
        const id = await demander("ID recherché : ");
        const r = trouverParId(releves, id);
        console.log(r ? formaterReleve(r) : "Identifiant inconnu.");
        break;
      }
      case "4": {
        const date = await demander("Date recherchée (AAAA-MM-JJ) : ");
        const r = trouverParDate(releves, date);
        console.log(r ? formaterReleve(r) : "Aucun relevé à cette date.");
        break;
      }
      case "5": {
        trierParTemperature(releves).forEach(r => console.log(formaterReleve(r)));
        break;
      }
      case "6": {
        trierParPluie(releves).forEach(r => console.log(formaterReleve(r)));
        break;
      }
      case "7": {
        if (releves.length === 0) { console.log("Aucun relevé."); break; }
        console.log(`Moyenne temp: ${moyenneTemperature(releves).toFixed(1)}°C`);
        console.log(`Cumul pluie: ${cumulPluie(releves)}mm`);
        const mm = temperatureMinMax(releves);
        console.log(`Min: ${mm.min}°C / Max: ${mm.max}°C`);
        break;
      }
      case "8": {
        const pluvieux = joursPluvieux(releves);
       if (pluvieux.length === 0) {
       console.log(`Aucun jour >= ${SEUIL_JOUR_PLUVIEUX}mm`);
      } else {
        pluvieux.forEach(r => console.log(formaterReleve(r)));
      }
        break;
      }
      case "9": {
        const id = await demander("ID à modifier : ");
        const champ = await demander("Champ (date, temperatureC, pluieMm, humiditeAirPct) : ");
        const valeur = await demander("Nouvelle valeur : ");
        const mod = modifierReleve(releves, id, champ, valeur);
        if (mod) {
          await enregistrerJson(FICHIER_DONNEES, releves);
          console.log("Modifié : " + formaterReleve(mod));
        } else {
          console.log("Modification impossible (ID/champ/valeur invalide).");
        }
        break;
      }
      case "10": {
        const id = await demander("ID à supprimer : ");
        const sup = supprimerReleve(releves, id);
        if (sup) {
          await enregistrerJson(FICHIER_DONNEES, releves);
          console.log("Supprimé : " + formaterReleve(sup));
        } else {
          console.log("Identifiant inconnu.");
        }
        break;
      }
      case "0": {
        await enregistrerJson(FICHIER_DONNEES, releves);
        console.log("Données enregistrées. Au revoir !");
        enCours = false;
        break;
      }
      default:
        console.log("Choix invalide, réessayez.");
    }
  }
  fermerSaisie();
}

main();
