# Cookclico
Site web de recettes de cuisine conçu en Vue.js.
*Par Judicaël Terrisse & Joachim Da Silva, Licence APIDAE 2022*

**URL du site en Vue.js**
> https://peaceful-mclean-50b4cb.netlify.app

**URL de l'API**
> https://github.com/joachim-dasilva/api-recipe (API)

# Comment installer le projet en local :

Rien du plus simple ! Tout d'abord, installez node.js sur https://nodejs.org/en/,
sans quoi, vous ne pourrez faire fonctionner l'application. Ensuite, ouvrez un terminal
et allez à la racine du projet. Une fois à cet endroit, tappez la commande *npm install*
pour installer toutes les dépendances. Votre projet est à présent fonctionnel !
Il ne vous reste plus qu'à entrer la commande *npm run serve* et à vous rendre sur http://localhost:8080/

# Fonctionnalités manquantes

à cause d'un manque organisationnel et de problèmes techniques, nous avons dû mettre au placart un certain
nombre de fonctionnalités.

Tout d'abord, nous avions conçu un sytème de "j'aimes" qui permettait à un utilisateur d'ajouter une recette
à ses favoris. Malheureusement, nous avons pris la décision d'enlever cette fonctionnalité car celle-ci
n'était pas demandée dans le sujet. Nous avons tout de même laissé le bouton "j'aime" dans l'espoir d'implémenter
cette fonctionnalité dans les jours à venir.

à notre grande honte, nous n'avons pas pu implémenter les méthodes d'ajout de recettes ainsi que la modification de
ces dernières. Cela est certe dû à notre capacité organisationnelle déplorable, mais aussi aux différents problèmes techniques
engendrés par codesandbox (corruption des images et polices, compile alors qu'il ne devrait pas, etc...). Dans l'ensemble, nous pouvons
dire que seules les parties *Read* et *Delete* du CRUD (Create Read Update Delete) ont été implémentées dans l'application.

étant donné que nous n'avons pas réussi à récupérer les images de notre base de données (car il aurait fallu connecter directement
l'application à restDB plutôt que de passer par notre API), nous avons écrit une fonction qui attribut une image aléatoire à la recette.

# Fonctionnalités supplémentaires

Même si il nous manque des fonctionnalités importantes, nous avons tout de même affiné les méthodes de récupération de recettes
(ce qui, quelque par, est le but de l'application).

Ainsi, il est possible de visionner les 3 recettes les plus populaires (celles ayants le plus de j'aimes) et de les consulter.

Nous avons aussi implémenté une recette du jour (propre à chaque utilisateur).

# Améliorations possibles

Comme dit dans le sujet, *une pagination serait la bienvenue*, car il n'est pas agréable de devoir aller tout en bas de la page
pour consulter la recette recherchée.

Soit dit en passant, une barre de recherche aurait été très appréciée.

Nous avons déjà parlé du fait qu'un utilisateur puisse ajouter une recette à ses favoris, mais cela n'aurait eu de l'intéret que
si l'utilisateur pouvait consulter ses recettes dans une section "mes favoris".

Un espace "profil" où l'utilisateur peut modifier ses informations aurait été très apprécié.
