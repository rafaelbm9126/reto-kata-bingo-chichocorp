bash:
	docker run -it --name chicho-bingo --rm -v ${PWD}/app:/app -w /app node:latest bash

up:
	docker-compose up
