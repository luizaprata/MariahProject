module.exports = function(grunt) {
  grunt.initConfig({

    // Compila os arquivos SASS
    compass: {
      dist: {
        options: {
          config: 'config.rb'
        }
      }
    },

    // Concatena arquivos JS para ambiente de Produção
    uglify: {
      my_target: { // look at bunch of files and uglify them
        files: {
          'public/assets/js/application.js': [
                                        'source/js/app/app.js',
                                        'source/js/app/config/*.js',
                                        'source/js/app/controllers/*.js',
                                        'source/js/app/directives/*.js',
                                        'source/js/app/services/*.js'
                                      ],
          'public/assets/js/libs/angular.js': [
                                                'source/js/libs/angular/angular.min.js',
                                                'source/js/libs/angular/angular-resource.min.js',
                                                'source/js/libs/angular/angular-route.min.js',
                                                'source/js/libs/angular/angular-cookies.min.js'
                                              ]
        }
      }
    },

    // Concatena arquivos JS para ambiente de Desenvolvimento
    concat: {
      application_and_libs: {
        files: {
          'public/assets/js/application.js': [
                                              'source/js/app/app.js',
                                              'source/js/app/config/*.js',
                                              'source/js/app/controllers/*.js',
                                              'source/js/app/directives/*.js',
                                              'source/js/app/services/*.js'
                                             ],
          'public/assets/js/libs/angular.js': [
                                                'source/js/libs/angular/angular.min.js',
                                                'source/js/libs/angular/angular-resource.min.js',
                                                'source/js/libs/angular/angular-route.min.js',
                                                'source/js/libs/angular/angular-cookies.min.js'
                                              ]
        }
      }
    },

    // Cria um server
    connect: {
      server: {
        options: {
          port: 9001,
          base: './public'
        }
      }
    },

    // Assiste os arquivos para compilação
    watch: {
      css: {
        files: ['source/sass/**/*.scss'],
        tasks: ['compass']
      },

      scripts: {
        files: ['source/js/**/*.js'],
        tasks: ['concat']
      }
    },

  });

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('debug', ['compass', 'concat', 'connect', 'watch']);
  grunt.registerTask('run', ['compass', 'uglify', 'connect', 'watch']);

};