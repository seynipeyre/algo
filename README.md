# js-algo

## Pré-requis

* Installer Node.js et NPM
  * [Windows](http://blog.teamtreehouse.com/install-node-js-npm-windows)
  * [Mac OS](http://blog.teamtreehouse.com/install-node-js-npm-mac)
  * [Linux](http://blog.teamtreehouse.com/install-node-js-npm-linux)


* Installer le projet `npm i`

## Lancer les tests

Exécuter les tests avec `npx jasmine playing/playing.spec.js`
Ou encore `npm run test`

Il est nécessaire d'activer les batteries de tests pour chaque fonction au fur et à mesure l'avancée.


### Activer/désactiver une batterie de tests

Pour activer/désactiver une batterie de tests pour une fonction précise, il faut ajouter/retirer le `x` devant le bloc `describe` correspondant dans le fichier `NOM_SERIE.spec.js`.

Par exemple :
* `describe("Somme de 2 nombres", function () {`
* `xdescribe("Somme de 2 nombres", function () {`

### Activer/désactiver un test spécifique

Pour activer/désactiver un test spécifique, il faut ajouter/retirer le `x` devant le bloc `it` correspondant dans le fichier `NOM_SERIE.spec.js`.

Par exemple :
* `it("1 + 2", function () {`
* `xit("1 + 2", function () {`

*/!\ À l'exception de l'activation et la désactivation de tests, ne pas modifier les fichiers*

## Séries d'exercices

Les exercices sont à faire dans les fichiers `NOM_SERIE.js` où toutes les fonctions sont déjà décrites. Il ne reste plus qu'à coder la logique de chaque fonction.

*/!\ Ne pas modifier la structure du fichier*