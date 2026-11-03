# Relevé des tests

> Écrivez le résultat attendu avant d'essayer. Un écart n'est pas une faute : notez-le, corrigez, refaites le test.

**Calculs à la main** : refaites à la main les résultats de référence de `SUJET.md`, puis comparez avec votre programme. Moyenne de temperature = (27+28+26+29+27+30+28+26+29+30)/10 = 28°C
Temperature Min = 26°C; ID : "M03"; ID : "M08"
Temperature Max = 30°C; ID : "M06"; ID : "M10"
Cumul de pluie = (0+5+12+0+3+0+8+15+0+2)= 45 mm
Journée avec au moins 10mm = "M03" (12mm) ; "M08" (15mm)

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
