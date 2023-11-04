include .env
export

PROJECT_NAME ?= Project name
COMPOSE_PROJECT_NAME ?= $(shell echo $(PROJECT_NAME) | sed 's/\(.*\)/\L\1/;s/[^[:alnum:]_-]/-/g')

.DEFAULT_GOAL = help
TARGET_DESCRIPTION_INDENTATION = 12

.PHONY: help
help: ## Display this help
	@printf "\n\033[1;30m$(shell echo $(PROJECT_NAME)) makefile\033[0m\n\n\033[33mUsage:\033[0m\n  make [target]\n\n\033[33mTargets:\033[0m\n"
	@awk 'BEGIN {FS = ":.*?## "} /^[0-9a-zA-Z_-]+:.*?## / {printf "  \033[32m%-$(TARGET_DESCRIPTION_INDENTATION)s\033[0m %s\n", $$1, $$2}' $(firstword $(MAKEFILE_LIST))

.PHONY: pull
pull: ## Pull the docker service images
	@docker compose pull

.PHONY: start
start: ## Start the docker containers
	@docker compose up --detach

.PHONY: stop
stop: ## Stop the docker containers
	@docker compose down

.PHONY: bash
bash: start ## Access the app container
	@docker compose exec app sh -c 'bash -l'

.PHONY: install
install: start ## Install the dependencies
	@docker compose exec app bash -c 'npm install'

.PHONY: lint
lint: start ## Run linter
	@docker compose exec app bash -c 'npm run-script lint'

.PHONY: test
test: start ## Run tests
	@docker compose exec app bash -c 'npm run-script test'

.PHONY: test-watch
test-watch: start ## Run tests and watch file changes
	@docker compose exec app bash -c 'npm run-script test:watch'
