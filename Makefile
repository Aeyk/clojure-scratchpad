SASS_SOURCE=css/style.scss
CSS_DEST=public/css/site.css
css:
	npx node-sass "$(SASS_SOURCE)" "$(CSS_DEST)" --watch

frontend:
	lein shadow watch frontend

server:
	lein run

clean:
	rm -rf "($CSS_DEST)"
