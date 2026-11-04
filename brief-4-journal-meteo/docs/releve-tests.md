# Relevé des tests

> Écrivez le résultat attendu avant d'essayer. Un écart n'est pas une faute : notez-le, corrigez, refaites le test.

**Calculs à la main** :
Moyenne de la temperature = (27+28+26+29+27+30+28+26+28+30)/10 = 28°C
Temperature minimale = 26°C, id: "M03";"M08".
Temperature maximal = 30°C, id: "M06" ;"M10".
Cumul de pluie = (0+5+12+0+3+0+8+15+0+2) = 45mm

**Essais dans le menu** : un ajout valide (encore là après redémarrage), chaque règle refusée, une recherche introuvable, chaque tri, la synthèse, un choix inconnu.


| Action | Attendu | Obtenu | Testeur |
|---|---|---|---|
| Afficher tous les relevés météorologiques | Les relevés enregistrés s'affichent, un par ligne, triés par date | OK - 8 relevés affichés de M01 à M08 | Moi-même |
| Ajouter un relevé valide avec humidité | Le relevé est ajouté avec ID M09 et persiste après redémarrage | OK - M09 ajouté avec 28°C, 5mm, 75% humidité, retrouvé après node app.js | Moi-même |
| Ajouter un relevé avec une date invalide | Le programme refuse la saisie et affiche un message d'erreur | OK - "Format date invalide, utilisez YYYY-MM-DD" | Moi-même |
| Ajouter un relevé avec humidité invalide (150%) | Le programme refuse et affiche erreur | OK - "Humidité doit être entre 0 et 100" | Moi-même |
| Rechercher un identifiant inexistant | Le programme indique qu'aucun relevé correspondant n'a été trouvé | OK - Message "Aucun relevé M99 trouvé" | Moi-même |
| Trier les relevés par température et par pluie | Les relevés sont affichés dans l'ordre croissant sans modifier le journal original | OK - Tri OK, fichier JSON non modifié | Moi-même |
| Afficher la synthèse météorologique | Le programme affiche température moyenne, cumul pluies, min/max, moyenne humidité | OK - Moy: 26.5°C, Cumul: 45mm, Humidité moy: 72% | Moi-même |

**Sur un autre poste** (`git clone`, `node app.js`, `npm test`, en suivant le README) : ✏️
