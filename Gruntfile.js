'use strict';

var path = require('path');

module.exports = function(grunt) {

  grunt.initConfig({

    env: {
      chrome: {
        PLATFORM: 'CHROME'
      },
      firefox: {
        PLATFORM: 'FIREFOX'
      },
      android: {
        PLATFORM: 'ANDROID'
      },
      electron: {
        PLATFORM: 'ELECTRON'
      }
    },

    jshint: {
      all: ['Gruntfile.js', 'features/step_definitions/*.js', 'features/support/*.js'],
      options: {
        node: true,
        strict: "global",
        esversion: 6
      }
    },

    exec: {
      run_cucumber_tests: {
        command: path.join('node_modules', '',  '.bin', 'cucumber-electron')
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-env');

  grunt.registerTask('default', ['jshint', 'exec']);
  grunt.registerTask('chrome', ['env:chrome', 'jshint', 'exec']);
  grunt.registerTask('firefox', ['env:firefox', 'jshint', 'exec']);
  grunt.registerTask('android', ['env:android', 'jshint', 'exec']);
  grunt.registerTask('electron', ['env:electron', 'jshint', 'exec']);
};
