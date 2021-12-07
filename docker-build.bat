@echo off

@REM docker pull mariadb
@REM docker pull node:alpine

docker-compose --env-file ./docker/.env up --build --detach

@REM docker build -t calisto -f ./docker/Dockerfile.database .
@REM docker run --detach --name calisto -p 3306:3306 --env MARIADB_ROOT_PASSWORD=chord calisto
@REM docker container inspect -f '{{.State.Running}}' calisto

@REM docker image rm mariadb
@REM docker image rm node:alpine

echo.
echo Waiting MariaDB starts up...
timeout 10
npx sequelize db:migrate

@REM docker build -t mimas -f ./docker/Dockerfile.backend .
@REM docker run --detach --name mimas -p 3000:3000 mimas