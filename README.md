npx sequelize migration:generate --name xxx
npx sequelize db:migrate

docker run --detach --name perso-mariadb --env MARIADB_USER=chord --env MARIADB_PASSWORD=chord --env MARIADB_ROOT_PASSWORD=chord -p 3306:3306 mariadb:latest
docker exec -it perso-mariadb mysql -u chord -p

docker exec -it perso-mariadb bash

- root@e238391dea53:/# mysql -u root -p
- create database chord;
- grant all privileges on chord.\* to chord;
- use chord;
- show tables;
