@echo off

docker container stop calisto_backend calisto_mariadb
docker container rm calisto_backend calisto_mariadb
docker image rm calisto/backend calisto/mariadb
:: docker image rm mariadb
docker volume prune -f
