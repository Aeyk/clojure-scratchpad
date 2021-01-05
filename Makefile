SASS_SOURCE=css/style.scss
CSS_DEST=public/css/site.css
css:
	npx node-sass "$(SASS_SOURCE)" "$(CSS_DEST)" --watch

clean:
	rm -rf "($CSS_DEST)"
