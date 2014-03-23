# [projectbase](https://github.com/mattfullsix/projectbase.git)

Base project files.

This package includes the following dependencies :

 * respondjs 1.4.2 : polyfill for min/max-width CSS3 Media Queries (for IE 6-8, and more)
 * Modernizr 2.7.1 : html5 polyfill & feature detection
 * jQuery 1.11.0 : javascript library
 * es5.js 2.3.0 : ecmascript5 polyfill


## Requirements

**Using the included tools requires the following installations :**

**Ruby / Sass** :

 * [download / install](https://www.ruby-lang.org/fr/downloads/)
 * launch a Ruby prompt, and get the sass gem : gem install sass
 * on Windows, add it to PATH : `;C:\Ruby200-x64\bin`

**Node.js** :

 * [download / install](http://nodejs.org/)
 * on Windows, add it to PATH : `;%NODEJS%;C:\Program Files\nodejs`

**Grunt-cli** :

 * from a prompt : `npm install -g grunt-cli`
 * check if installed / installed version : `grunt --version`

**Bower** :

 * from a prompt : `npm install -g bower`
 * check if installed / installed version : `bower --version`

**Requirejs** :

 * from a prompt : `npm install -g requirejs`
 * command : `r.js`


step-by-step :

 1. git clone the repo.
 2. from the root directory, run a prompt and type : `npm install` then `bower install` to install Grunt and Bower dependencies.
 3. type `grunt init` to initiate Grunt and run a first scss compilation.


## Grunt Modules

 * [grunt-contrib-connect ~0.7.1](https://github.com/gruntjs/grunt-contrib-connect)
 * [grunt-contrib-concat ~0.3.0](https://npmjs.org/package/grunt-contrib-concat)
 * [grunt-contrib-copy ~0.5.0](https://npmjs.org/package/grunt-contrib-copy)
 * [grunt-contrib-jshint ~0.8.0](https://npmjs.org/package/grunt-contrib-jshint)
 * [grunt-contrib-sass ~0.7.2](https://npmjs.org/package/grunt-contrib-sass)
 * [grunt-contrib-uglify ~0.3.3](https://npmjs.org/package/grunt-contrib-uglify)
 * [grunt-newer ~0.6.1](https://npmjs.org/package/grunt-newer)
 * [time-grunt ~0.2.9](https://npmjs.org/package/time-grunt)
 * [jshint-stylish ~0.1.5](https://npmjs.org/package/jshint-stylish)
 * [watch ~0.5.3](https://npmjs.org/package/grunt-contrib-watch)
 * [grunt-uncss ~0.2.0](https://github.com/addyosmani/grunt-uncss)

## Authors

[Matthieu Marseille](https://github.com/mattfullsix)
