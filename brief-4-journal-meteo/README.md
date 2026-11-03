# Journal météorologique de la ferme

> Projet individuel du SAS DFS, brief 4 (sujet : [SUJET.md](SUJET.md)). Remplacez chaque ✏️ par votre texte, puis supprimez cette ligne.

## Contexte

Le journal météorologique de la ferme est un outil destiné aux agriculteurs qui souhaitent enregistrer et consulter les données météorologiques de leur exploitation. Il permet de suivre les températures et les précipitations afin de mieux comprendre les conditions météorologiques rencontrées pendant la période d'observation. Ces informations peuvent aider à la prise de certaines décisions agricoles. Cependant, les relevés enregistrés ne permettent pas de prévoir avec certitude le temps qu'il fera ni de tirer des conclusions définitives sur le climat de la région.L'humidité relative de l'air n'est pas l'humidité du sol

## Prérequis et lancement

- Node.js 20 ou plus récent, Git ; aucune bibliothèque à installer.

```bash
git clone https://github.com/VOTRE-COMPTE/brief-4-journal-meteo.git
cd brief-4-journal-meteo
node app.js
npm test
```

Sous PowerShell, si `npm` est bloqué : `npm.cmd test`.

## Fonctionnalités

✏️ *Cochez seulement ce qui marche : `- [x]`.*

- [ ] Données lues et enregistrées dans `donnees/releves.json`
- [ ] Ajouter un relevé, saisies invalides refusées sans arrêter le programme
- [ ] Lister les relevés, message si le journal est vide
- [ ] Rechercher par identifiant ou par date ; journées pluvieuses (au moins 10 mm)
- [ ] Trier par température ou par pluie
- [ ] Synthèse : température moyenne, minimale et maximale de la série, cumul de pluie, journées pluvieuses
- [ ] Bonus : supprimer et modifier un relevé (choix 6 et 7)
- [ ] Bonus : tri par température décroissante, journée la plus chaude

## Données

Les données météorologiques sont enregistrées dans le fichier "donnees/releves.json". Chaque relevé contient un identifiant, une date, une température et une quantité de pluie. La température est exprimée en degrés Celsius (°C) et les précipitations en millimètres (mm). Les données utilisées dans ce projet sont fictives et servent uniquement à tester le fonctionnement de l'application.

## Limites

✏️ *Au moins trois. Par exemple : dix jours de relevés forment une courte série, ils ne décrivent pas le climat de la région.*

## Documents

[Dictionnaire des données](docs/dictionnaire-donnees.md) · [Tâches](docs/taches.md) · [Relevé des tests](docs/releve-tests.md) · [Journal de recherche](docs/journal-recherche.md) · [Fiche agronomique](docs/fiche-agronomique.md) · [Fiche individuelle](docs/fiche-individuelle.md)

## Auteur

✏️ *Prénom NOM, compte GitHub. Entraide : avec qui, sur quoi.*
