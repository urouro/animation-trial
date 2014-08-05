module.exports = function (grunt) {
  'use strict';
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    bower: {
      install: {
        options: {
          targetDir: './common',
          layout: 'byType',
          install: true,
          verbose: false,
          cleanTargetDir: true,
          cleanBowerDir: false
        }
      }
    },
    connect: {
        server: {
            options: {
                port: 8080,
                base: ''
            }
        }
    },
    watch: {
        options: {
            livereload: true
        },
        html: {
            files: ['*.html'],
            tasks: ['']
        }
    },
  });
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['bower:install', 'connect', 'watch']);
};
