# Cap Web · assistant de sécurité en ligne

Cap Web est un petit assistant de discussion à règles (pas une vraie IA) pour les jeunes, jusqu'au lycée. Il aide à prévenir, reconnaître et réagir face aux menaces en ligne : mots de passe, arnaques, phishing. Projet du binôme b21 (Aron DESCARPENTRIES), module Renforcement dev web, Efrei.

Ce que Cap Web reconnaît (sans tenir compte des majuscules ni des espaces autour) :

| Message | Réponse |
|---|---|
| `salut` ou `bonjour` | une présentation |
| `aide` | la liste des mots connus |
| `test` | une confirmation que les règles fonctionnent |
| `motdepasse`, `arnaque`, `phishing` | un conseil sur ce sujet |
| `conseil` | un conseil tiré au hasard, demandé au serveur (`/api/conseil`) |
| autre chose | une réponse de repli qui renvoie vers `aide` |

Un message vide, ou de plus de 200 caractères, est refusé avec un message d'erreur visible. Un compteur sous le champ affiche le nombre de caractères tapés. La conversation est gardée dans le navigateur (`localStorage`) et le bouton « Effacer la conversation » la supprime.

## Installer

Il faut Node.js 24.20 ou plus (`node --version`). Avec nvm, `nvm use` dans ce dossier choisit la bonne version (fichier `.nvmrc`).

```sh
git clone git@github.com:AronDesc/b21-assistant-securite-en-ligne.git
cd b21-assistant-securite-en-ligne/atelier
npm ci
```

## Lancer

```sh
npm start
```

Ouvrez http://127.0.0.1:3000. Ctrl+C arrête le serveur. Si le port 3000 est déjà pris : `PORT=3001 npm start` (macOS, Linux) ou `$env:PORT=3001; npm start` (PowerShell).

## Tester

```sh
npm test       # tests Node : contrat de brain.js, serveur, route /api/conseil
npm run lint   # vérification ESLint du code
```

Tests navigateur facultatifs (environ 150 Mo à télécharger la première fois) :

```sh
npx playwright install chromium
npm run test:browser
```

On ne modifie jamais `tests/contrat/`, `browser/contrat.spec.js` ni `cahier-personnel.json`.

## La route `/api/conseil`

`GET /api/conseil` renvoie, avec le statut 200 et l'en-tête `content-type: application/json`, un conseil de sécurité tiré au hasard parmi trois :

```json
{ "conseil": "Active la double authentification sur tes comptes importants." }
```

Dans la page, le message « conseil » appelle cette route avec `fetch`. Si le serveur ne répond pas, Cap Web affiche « Le serveur ne répond pas : conseil indisponible. » au lieu de planter. Le test est dans `tests/conseil.test.js`.

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
