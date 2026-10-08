# Cap Web

Ce README est à écrire par votre binôme au round 2, en 3 parties : à quoi sert Cap Web, comment l'installer et le lancer, et les 3 modules de `public/js` avec le rôle de chacun. La fiche est [documenter le projet](../defis/R2-ce-que-voit-l-agent.md).

En attendant, dans ce dossier : `npm start` lance Cap Web sur http://127.0.0.1:3000 (Ctrl+C l'arrête), et `npm test` lance les tests. On ne modifie jamais `tests/contrat/`, `browser/contrat.spec.js` ni `cahier-personnel.json`.

## Arborescence du projet

```
atelier/
├── cahier-personnel.json   réglages du binôme (limite, mots) — ne pas modifier
├── package.json            scripts npm (start, test, lint…) et dépendances
├── public/                 ce que le navigateur reçoit
│   ├── index.html          structure de la page (formulaire, liste des messages)
│   ├── styles.css          mise en forme, version mobile sous 600 px
│   └── js/
│       ├── app.js          câblage : formulaire, compteur, historique, appels au serveur
│       ├── brain.js        cerveau à règles : validateMessage, replyTo, LIMITE, MOTS
│       └── view.js         affichage de l'historique, en texte uniquement
├── server/
│   ├── app.js              serveur HTTP : fichiers publics, /version.json, /api/conseil
│   └── start.js            point d'entrée de npm start
├── tests/                  tests Node (npm test), dont tests/contrat/ à ne pas modifier
├── browser/                tests navigateur Playwright (facultatifs)
└── scripts/                outils de vérification (dépendances, tests, build)
```
