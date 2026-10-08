# Carnet de bord · J2

Binôme : b21 · Membres : Aron DESCARPENTRIES (seul) · Nos réglages sont dans `atelier/cahier-personnel.json` : ne les recopiez pas ici.

## Mon positionnement (chacun de vous deux)

Pour chaque notion, chacun écrit « à l'aise » ou « à renforcer ». Ce n'est ni évalué ni classé : c'est votre point de départ pour le bilan individuel de fin de module.

| Notion | Membre 1 : Aron | Membre 2 : — (seul) |
|---|---|---|
| Structure HTML | à l'aise | — |
| CSS et responsive | à l'aise | — |
| JavaScript | à l'aise | — |
| DOM et événements | assez à l'aise | — |
| Git | à l'aise | — |
| Tests | à l'aise | — |

Chacun, en une phrase, son objectif personnel pour J2 et J3.

Membre 1 : devenir pleinement à l'aise avec le DOM et les événements, et savoir expliquer chaque modification livrée.

Membre 2 : — (seul)

## R1 · Les tests automatisés

Les tests rouges du départ, et ce que vous en avez fait :

| Test rouge | Cause trouvée (une phrase) | Fichier | Message du commit `fix:` |
|---|---|---|---|
| | | | |

Avec l'agent : ce qu'il a proposé et que vous avez refusé, et pourquoi.

Pour aller plus loin : le nom renommé par votre commit `refactor:`, et pourquoi le nouveau est plus clair.

## R2 · Documenter le projet

Vos trois documents sont dans `atelier` : `README.md`, `SPEC.md` et `AGENTS.md`. Rien à recopier ici.

Pour aller plus loin, avec l'agent, les demandes du formateur :

| Demande | Ce qu'a fait l'agent | Votre décision | Règle d'`AGENTS.md` concernée (ou ajoutée) |
|---|---|---|---|
| 1 | | | |
| 2 | | | |
| 3 | | | |

## R3 · Premiers tests unitaires

| À remplir | Votre réponse |
|---|---|
| Fonction tirée | |
| Le rouge vu (message exact) | |
| Identifiant du commit `test:` | |
| Identifiant du commit `feat:` | |
| Casse volontaire : la ligne changée | |
| Casse volontaire : le test devenu rouge | |
| Pour aller plus loin : la deuxième fonction | |

Les critères C1 à C5 de votre fonction, recopiés de la fiche :

## R4 · La revue de code

| Patch | Accepté ou refusé | Fichier et ligne | Raison |
|---|---|---|---|
| 1 | | | |
| 2 | | | |
| 3 | | | |

Pour aller plus loin : le patch que vous avez corrigé, et ce que vous avez changé.

## Fin de journée

Chacun, une phrase : ce que vous savez faire ce soir et que vous ne saviez pas faire ce matin. Relisez votre positionnement : une notion est-elle passée de « à renforcer » à « à l'aise » ?

## J3 · Les 12 étapes

### Étape 1 · Le troisième mot

- Mot ajouté : « phishing ».
- Ma prédiction (avant de toucher au code) : il faudra changer la phrase de « aide » pour qu'elle dise « trois mots à moi » ; sinon elle annoncera toujours « deux mots », parce que ce nombre est écrit à la main, alors que la liste affichera bien les trois.
- Ce que j'ai observé : « Je connais « salut », « aide », « test », et deux mots à moi : « motdepasse » et « arnaque » et « phishing ». » La prédiction était juste.
- Correction : « deux » remplacé par `${Object.keys(MOTS).length}`, le nombre est maintenant calculé à partir de l'objet `MOTS`.
- Après : « Je connais « salut », « aide », « test », et 3 mots à moi : « motdepasse » et « arnaque » et « phishing ». »

### Étape 3 · L'accessibilité avec Lighthouse

- Score Accessibilité de départ (Chrome, Desktop) : 100.
- Score sans le `label` du champ : 93.
- Alerte affichée (catégorie « Names and labels ») : « Form elements do not have associated labels ». Sans `label`, un lecteur d'écran ne peut pas annoncer à quoi sert le champ.
- Label remis ensuite à l'identique.
- Essai au clavier seul : Tab jusqu'au champ, message « Salut, j'ai besoin d'aide », envoi au clavier. Le message part, Cap Web répond par le repli (« Je ne connais pas encore cette phrase… ») parce qu'il ne reconnaît que des mots exacts, et le focus revient dans le champ, prêt pour le message suivant.

### Étape 11 · Les quatre attaques

| Attaque | Résultat |
|---|---|
| Serveur arrêté, puis « conseil » | tient : « Le serveur ne répond pas : conseil indisponible. », pas d'écran blanc |
| Message de 250 caractères (limite 200) | tient : refusé, erreur visible « Le message doit contenir 200 caractères au maximum. » |
| `<b>test</b>` dans le champ | tient : affiché tel quel, chevrons compris (`textContent`, pas `innerHTML`) |
| Largeur 375 px | tient : rien ne déborde, pas de défilement horizontal |

Aucun commit `fix:` nécessaire. README d'`atelier` mis à jour (but, installation, lancement, tests, route `/api/conseil`, arborescence), puis relu en suivant ses commandes une par une dans le clone `clone-b21`.

### Étape 12 · Le bilan

Bilan individuel dans `atelier/bilan/Aron.md` : niveau de départ, deux acquis prouvés par des commits, deux points à renforcer, un objectif.
