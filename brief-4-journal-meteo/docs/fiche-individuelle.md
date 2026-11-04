# Fiche individuelle

> Une page, avant la livraison. Prénom, nom, compte GitHub : Prénom: Sereko jaures, Nom: FALLE, GitHub: jauresfalle629-netizen

1. **Une fonction que j'ai écrite**, et comment elle marche : J'ai écrit la fonction listerReleves(releves) et j'ai ajouté le champ humiditeAirPct.

Elle marche comme ça :
- Elle prend le tableau releves en paramètre
- Elle vérifie si le tableau est vide avec if (releves.length === 0)
- Si vide, elle affiche "Aucun relevé."
- Sinon elle boucle avec for (const r of releves) et affiche : ID | date | température | pluie | air %
Exemple : M01 | 2026-10-15 | 27°C | 0 mm | air 75%
La fonction saisirReleve() demande aussi l'humidité avec une validation entre 0 et 100.

2. **Une difficulté, et sa solution** : Ma difficulté : Quand je tapais 1 pour lister, ça affichait "Aucun relevé" et quand j'appuyais sur Entrée ça supprimait.
J'avais aussi un bug git >> quand je faisais git commit -m "fi.

Solution :
- Mon fichier donnees/releves.json était vide. J'ai relancé avec node init-data.js pour remettre les 10 relevés de base.
- Pour git, j'avais oublié le " de fermeture. J'ai fait Ctrl + C puis j'ai re-tapé git commit -m "final: donnees avec humidite" correctement.
- J'ai aussi corrigé le template string dans app.js ligne 99 : `` Aucun jour >= ${SEUIL_JOUR_PLUVIEUX}mm ``

3. **L'entraide** (j'ai travailler avec mon groupe, qui j'ai aidé, sur quoi) : ✏️
