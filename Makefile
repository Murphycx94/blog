# Makefile for rainbow build

master-check:
	npm run build
	git add .
	git commit -m 'update'
	git pull

build: master-check
	git push
	cp -f -a dist ../blog
