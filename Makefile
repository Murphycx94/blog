# Makefile for rainbow build
all:
	@echo "------------------------------------------"
	@echo "rainbow build manager"
	@echo "------------------------------------------"
	@echo "make build: create dist folder "
	@echo "make push: git push "
	@echo "------------------------------------------"

master-check:
	git pull

push: master-check
	git add .
	git commit -m 'fixed'
	git push

build: master-check
	git add .
	git commit -m 'build'
	git push
	yarn build
	cp -f -a dist ../blog
