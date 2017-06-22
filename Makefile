# Makefile for rainbow build
all:
	@echo "------------------------------------------"
	@echo "rainbow build manager"
	@echo "------------------------------------------"
	@echo "make build: create dist folder -----git push -----cp -f -a dist ../blog "
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
	cp -f -a dist ../blog
