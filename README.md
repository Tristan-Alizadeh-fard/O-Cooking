# Installation du Backend

1. Se placer sur la branche back
2. ``` $ git pull ```
3. ``` $ cd backend-ocooking ```
4. ``` $ composer install ```
5. Dupliquer le fichier .env
6. Renommer le fichier .env en .env.local

## Mise en place des outils
1. Dans le fichier .env.local, coller ``` DATABASE_URL=mysql://<user>:<mdp>@127.0.0.1:3306/ocooking?serverVersion=mariadb-10.4.12 ```
2. Remplacer le user et le mdp par leurs valeurs respectives

## Création de la base de données avec fixtures
1. ``` $ bin/console d:d:c ```
2. ``` $ bin/console d:m:m ```
3. ``` $ bin/console d:f:l NelmioAliceFixtures```

## Création du serveur PHP
1. ``` $ php -S 0.0.0.0:8000 -t public ```

# Utilisation du JWT

A chaque appel à l'API, il faudra indiquer dans le header :
``` Authorization: Bearer {token} ```

Le token est renvoyé en json lorque l'on s'authentifie (route : api/login_check).
Il doit être stocké côté front pour que l'utilisateur n'ai pas besoin de s'authentifier à chaque fois.

User 1:
   username: stephanie@ocooking.fr
   password: stephanie

User 2:
   username: renan@ocooking.fr
   password: renan

   ```

# Installation du FrontEnd
