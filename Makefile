all:
	browserify -e img-slider/lib/index.js -o img-slider/build/bundle.js

debug:
	browserify -e img-slider/tests/index.js -o img-slider/example/bundle.js --debug
