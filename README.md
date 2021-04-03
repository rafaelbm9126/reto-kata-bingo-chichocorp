# Reto Kata Bingo for ChichoCorp

Este es un reto planteado para ser un software simulador para un juego de bingo, con las 
**[Reglas](http://www.tddbuddy.com/katas/Bingo%20Kata.pdf "Reglas")** dadas. Simula la partida mono-jugador, donde se puede obtener una tarjeta de 5x5 numerada en cada casilla, genera un numero aleatorio el cual se maneja por el rango dado y ofrece la validación necesaria para determinar si con la tarjeta y su serie de números resulta ganador.

<br>

#### [Live Demo](https://reto-kata-bingo-chichocorp.herokuapp.com/ "Live Demo")
###### * *La aplicacion esta deslegada en heroku puede tardar unos **minutos** en responder si el servidor esta **inactivo**.*

<br>

## Requerimientos previos

Version Dockerizada:

    - Docker
    - Docker Compose
    - Make

Version solo NodeJS

    - NodeJs

<br>

## Pasos iniciales

<br>

Docker version:

###### *Este comando instalara las dependencias*
    $ make install

###### *Este comando iniciara el contenedor con el proyecto*
    $ make up

<br>

NodeJS version:

    $ npm install

    $ npm start

<br>

## Test Unitario y Semanticos

Docker version:

###### *Este comando ejecuta el test unitario con **jest***
    $ make unit_test

###### *Este comando ejecuta el test semantico con **eslint**
    $ make lint_test
