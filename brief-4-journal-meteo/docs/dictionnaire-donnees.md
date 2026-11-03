# Dictionnaire des données

> Un champ par ligne, d'après `SUJET.md` et le fichier de `donnees/`. La première ligne sert de modèle.

| Champ | Signification | Type | Règle de validation | Unité | Exemple |
| --- | --- | --- | --- | --- | --- |
| `id` | Identifiant unique | texte | non vide, absent des données | — | ✏️ |
| Date |Date de relevé |Texte |AAA-MM-JJ | - |2026-11-14 |
| TemperatureC |Temperature de l'air |Nombre |Valeur positif ou negatif |°C |45 |
| PluieMm |Quantité de plus tomber |Nombre |Valeur positif |mm |30 |
| HumiditéAirPct |Humidite relative de l'air |Nombre |Valeur positif | % |57 |

**Listes de valeurs autorisées** : SIMILAIRE AU REGLE DE VALIDATION

**Sources** : SUJET.md et fichier de données situé dans le dossier donnees/ du projet.
