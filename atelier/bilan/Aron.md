# Bilan individuel · Aron DESCARPENTRIES (b21, seul)

## Niveau de départ (positionnement)

| Notion | Départ |
|---|---|
| Structure HTML | à l'aise |
| CSS et responsive | à l'aise |
| JavaScript | à l'aise |
| DOM et événements | assez à l'aise |
| Git | à l'aise |
| Tests | à l'aise |

Objectif de départ : devenir pleinement à l'aise avec le DOM et les événements, et savoir expliquer chaque modification livrée.

## Deux acquis prouvés

1. **DOM, événements et appels asynchrones.** Je sais écouter un événement (`input`, `submit`), mettre à jour la page avec `textContent`, et appeler le serveur avec `async`/`await` en gérant l'erreur avec `try`/`catch`.
   Preuves : `5334804` (compteur de caractères), `cd63162` (version avec async/await), `12f3a89` (Cap Web donne un conseil, message clair si le serveur est arrêté).
2. **Une route serveur testée.** J'ai ajouté une route JSON au serveur Node et le test qui vérifie son statut et son type de contenu.
   Preuve : `885060d` (route `/api/conseil` et `tests/conseil.test.js`).

## Deux points à renforcer

1. **L'accessibilité.** Lighthouse m'a montré qu'un champ sans `label` fait perdre des points (100 → 93), mais je dois encore apprendre à corriger seul d'autres alertes (contrastes, rôles ARIA).
2. **La relecture de code en équipe.** Seul, j'ai relu mes propres pull requests : je n'ai pas eu de vrai regard extérieur ni de discussion sur une revue.

## Objectif

Sur mon prochain projet, faire relire chaque pull request par quelqu'un d'autre et passer un audit Lighthouse Accessibilité à 100 avant chaque livraison.
