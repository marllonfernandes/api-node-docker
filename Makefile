include .env

.PHONY: up

up:
	docker-compose up -d

.PHONY: down

down:
	docker-compose down

.PHONY: logs

stop:
	docker-compose stop

.PHONY: stop

logs:
	docker-compose logs -f