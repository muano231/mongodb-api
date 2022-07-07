# mongodb-api

Le projet est API qui gére des restaurants.

Un CRUD est mis en place pour pouvoir: 
  - récupérer tous les restaurants
  - récupérer un restaurant par son id
  - ajouter un nouveau restaurant
  - modifier un restaurant existant
  - supprimer un restaurant existant

Lien du POSTMAN avec la liste des requetes du CRUD : https://www.getpostman.com/collections/7e36e2734d28ad4a85c5

les depandances utilisées :

### 1- dotenv
Le but de cette dépendance est d'avoir un fichier .env pour stocker les variables globales.
Pour ce projet, je stock le port de communication et l'URI de la base de données.

### 2- express
Le but de cette dépendance est de gérer les routes du projet.

### 3- mongoose
Le but de cette dépendance est de connecter l'api à la base de données mongodb, qui est hébergée par atlas.

### 4- cors
Le but de cette dépendance est de supprimer les erreurs cors pour pouvoir se connecter à l'api depuis une autre url
