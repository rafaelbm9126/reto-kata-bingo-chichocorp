install:
	docker run -it --name chicho-bingo --rm -v ${PWD}:/app -w /app node:latest npm install

up:
	docker-compose up

unit_test:
	docker run -it --name chicho-bingo --rm -v ${PWD}:/app -w /app node:latest npm run test

lint_test:
	docker run -it --name chicho-bingo --rm -v ${PWD}:/app -w /app node:latest npm run lint

bash:
	docker run -it --name chicho-bingo --rm -v ${PWD}:/app -w /app node:latest bash
