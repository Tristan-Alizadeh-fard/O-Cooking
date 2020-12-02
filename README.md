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

## Installation et configuration du JWT

### Installation
1. ``` $ composer require lexik/jwt-authentication-bundle ```
2. ``` $ mkdir -p config/jwt ```
3. ``` openssl genpkey -out config/jwt/private.pem -aes256 -algorithm rsa -pkeyopt rsa_keygen_bits:4096 ```
4. La PEM pass phrase à saisir dans le terminal se trouve dans le fichier .env : il faut copier/coller ce qui se trouve après le signe égal du JWT-PASSPHRASE
5. ``` $ openssl pkey -in config/jwt/private.pem -out config/jwt/public.pem -pubout ```
6. La PEM pass phrase à saisir dans le terminal se trouve dans le fichier .env : il faut copier/coller ce qui se trouve après le signe égal du JWT-PASSPHRASE

### Configuration
1. Dans config/packages/security.yaml ajouter les lignes suivantes :
   ```
   security:
    # ...
    
    firewalls:

        login:
            pattern:  ^/api/login
            stateless: true
            anonymous: true
            json_login:
                check_path:               /api/login_check
                success_handler:          lexik_jwt_authentication.handler.authentication_success
                failure_handler:          lexik_jwt_authentication.handler.authentication_failure

        api:
            pattern:   ^/api
            stateless: true
            guard:
                authenticators:
                    - lexik_jwt_authentication.jwt_token_authenticator

    access_control:
        - { path: ^/api/login, roles: IS_AUTHENTICATED_ANONYMOUSLY }
        - { path: ^/api,       roles: IS_AUTHENTICATED_FULLY }

   ```
   Mettre les firewalls avant main
2. Dans config/routes.yaml ajouter
   ``` 
   api_login_check:
        path: /api/

   ```

# Installation du FrontEnd
