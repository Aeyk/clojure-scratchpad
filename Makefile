SASS_SOURCE=css/style.scss
CSS_DEST=resources/public/css/site.css
.PHONY: all
.DEFAULT_GOAL: all
all: css frontend backend server

css:
	cp -r node_modules/leaflet/dist/images resources/public/css
	echo -e "\033[32m"
	npx node-sass "$(SASS_SOURCE)" "$(CSS_DEST)" --watch
	@echo -e "\033[0m"

frontend:
	@echo -e "\033[34m"
	lein shadow watch frontend
	@echo -e "\033[0m"

cljs-backend:
	@echo -e "\033[36m"
	lein shadow watch backend
	@echo -e "\033[0m"

cljs-server:  cljs-backend
	node target/main.js

server: #_ 
	@echo -e "\033[33m"
	lein run
	@echo -e "\033[0m"



clean:
	rm -rf "($CSS_DEST)"


STATIC=index.html scene.js css/main.css models/assets.glb

build/js/app.js: $(shell find src) package.json shadow-cljs.edn public/models/assets.glb
	npx shadow-cljs compile :game-client-prod

build/%: public/%
	@mkdir -p `dirname $@`
	cp $< $@

public/models/assets.glb: public/models/assets.blend
	PROD=1 bin/watch-and-build-assets.sh

.PHONY: game_watch game_clean

game_watch:
	./bin/watch-and-build-assets.sh &
	npx shadow-cljs watch :game-client-dev

game_clean:
	rm -rf build/*
	lein clean
