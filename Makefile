SASS_SOURCE=css/style.scss
CSS_DEST=public/css/site.css
.PHONY: all
.DEFAULT_GOAL: all
all: css frontend backend server

css:
	@echo -e "\033[32m"
	npx node-sass "$(SASS_SOURCE)" "$(CSS_DEST)" --watch
	@echo -e "\033[0m"

frontend:
	@echo -e "\033[34m"
	lein shadow watch frontend
	@echo -e "\033[0m"

backend:
	@echo -e "\033[36m"
	lein shadow watch backend
	@echo -e "\033[0m"

server: backend
	@echo -e "\033[33m"
	node target/main.js
#	lein run
	@echo -e "\033[0m"

clean:
	rm -rf "($CSS_DEST)"
