module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    ember_handlebars: {
      compile: {
        options: {
          namespace: "App.TEMPLATES"
        },
        files: {
          //"path/to/result.js": "path/to/source.hbs",
          "build/templates.js": ["js/templates/**/*.hbs"]
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  //grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-ember-handlebars');

  // Default task(s).
  //grunt.registerTask('default', ['uglify']);
  grunt.registerTask('default', ['ember_handlebars']);

};