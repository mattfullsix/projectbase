module.exports = function (grunt) {

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Project configuration.
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),

      // Project settings
      f6template: {
        // configurable paths
        html: 'html'
      },
      // sass compilation
      sass: {
          dev: {
              options: {
                  style: 'expanded',
                  lineNumbers: true,
                  sourcemap: true
              },
              files: {
                  '<%= f6template.html %>/css/style.css': 'scss/style.scss'
              }
          },
          dist: {
              options: {
                  style: 'compressed',
                  lineNumbers: false,
                  sourcemap: true
              },
              files: {
                  '<%= f6template.html %>/css/style.min.css': 'scss/style.scss'
              }
          }
      },
      // watch / livereload
      watch: {
          js: {
              files: ['<%= f6template.html %>/js/{,*/}*.js'],
              //tasks: ['newer:buildrjs'],
              options: {
                livereload: true
              }
          },
          scss: {
              files: 'scss/**',
              tasks: ['sass:dev'],
              options: {
                  livereload: true
              }
          },
          livereload: {
            options: {
              livereload: '<%= connect.options.livereload %>'
            },
            files: [
              '<%= f6template.html %>/{,*/}*.html',
              '<%= f6template.html %>/img/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
              '<%= f6template.html %>/js/{,*/}*.js'
            ]
          }
      },
      // copy
      copy: {
          init: {
              files: [
                  {
                      expand: true,
                      flatten: true,
                      cwd: 'bower_components',
                      src: ['modernizr/modernizr.js'],
                      dest: '<%= f6template.html %>/js/vendor/',
                      filter: 'isFile'
                  },
                  {
                      expand: true,
                      flatten: true,
                      cwd: 'bower_components',
                      src: ['es5-shim/es5-shim.js'],
                      dest: '<%= f6template.html %>/js/vendor/',
                      filter: 'isFile'
                  },
                  {
                      expand: true,
                      flatten: true,
                      cwd: 'bower_components',
                      src: ['respondJs/dest/respond.min.js'],
                      dest: '<%= f6template.html %>/js/vendor/',
                      filter: 'isFile'
                  },
                  {
                      expand: true,
                      flatten: true,
                      cwd: 'vendor/javascripts',
                      src: ['jquery-1.11.0.js'],
                      dest: '<%= f6template.html %>/js/vendor/',
                      filter: 'isFile'
                  }
              ]
          }
      },
      // uncss
      uncss: {
          dist: {
              files: {
                  '<%= f6template.html %>/css/style.css': ['<%= f6template.html %>/index.html']
              }
          }
      },
      // concat
      concat: {
          options: {
              separator: ';'
          },
          bootstrap: {
              src: ['vendor/javascripts/bootstrap/*.js'],
              dest: '<%= f6template.html %>/js/lib/bootstrap.js'
          }
      },
      // uglify
      /*uglify: {
          dist: {
              src: ['<%= f6template.html %>/js/scripts.js'],
              dest: '<%= f6template.html %>/js/scripts.min.js'
          }
      },*/
      // Make sure code styles are up to par and there are no obvious mistakes
      jshint: {
        options: {
          jshintrc: '.jshintrc',
          reporter: require('jshint-stylish')
        },
        all: [
          'Gruntfile.js',
          '<%= f6template.html %>/js/{,*/}*.js'
        ],
        project: [
          '<%= f6template.html %>/{,*/}*.html',
          '<%= f6template.html %>/js/*.js'
        ]
      },
      // The actual grunt server settings
      connect: {
        options: {
          port: 9000,
          // Change this to '0.0.0.0' to access the server from outside.
          hostname: 'localhost',
          livereload: 35729
        },
        livereload: {
          options: {
            open: true,
            base: [
              '<%= f6template.html %>'
            ]
          }
        }
      }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-newer');
    grunt.loadNpmTasks('grunt-uncss');

    // Default task(s).
    // compile scss
    grunt.registerTask('default', ['sass:dev', 'jshint:project']);
    // test js
    grunt.registerTask('testjs', ['jshint:project']);
    // copy dependencies and compile scss
    grunt.registerTask('init', ['copy:init', 'sass:dev']);
    // compile scss, concat and min js
    grunt.registerTask('dist', ['sass:dev']);
    // serve
    grunt.registerTask('serve', ['connect:livereload', 'watch']);
};
