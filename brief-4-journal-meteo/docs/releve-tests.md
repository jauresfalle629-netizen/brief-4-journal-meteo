# Relevé des tests

> Écrivez le résultat attendu avant d'essayer. Un écart n'est pas une faute : notez-le, corrigez, refaites le test.

**Calculs à la main** : refaites à la main les résultats de référence de `SUJET.md`, puis comparez avec votre programme. ✏️

**Essais dans le menu** : un ajout valide (encore là après redémarrage), chaque règle refusée, une recherche introuvable, chaque tri, la synthèse, un choix inconnu.

| Action | Attendu | Obtenu | Testeur |
| --- | --- | --- | --- |
| Afficher tous les relevés météorologiques | Les relevés enregistrés s'affichent, un par ligne. | | |
| Ajouter un relevé valide |Le programme refuse la saisie et affiche un message d'erreur. | |Moi-même |
| Ajouter un relevé avec une date invalide | | |Moi-même |
| Rechercher un identifiant inexistant | Le programme indique qu'aucun relevé correspondant n'a été trouvé. | |Moi-même |
| Trier les relevés par température et par pluie |Les relevés sont affichés dans l'ordre croissant de la mesure choisie, sans modifier le journal original | |Moi-même |
| Afficher la synthèse météorologique | Le programme affiche la température moyenne, le cumul des pluies et les températures minimale et maximale. | |Moi-même |

**Sur un autre poste** (`git clone`, `node app.js`, `npm test`, en suivant le README) : ✏️
