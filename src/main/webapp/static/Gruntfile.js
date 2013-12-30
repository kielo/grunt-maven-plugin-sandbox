module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        maven: {
            warName: 'ROOT',
            dist: {
                dest: 'dist',
                src: ["<%= pkg.name %>*.js", "js/**", "!js/test/**"]
            },
            maven: {
                src: ["./**"]
            },
            watch: {
                tasks: ['default']
            }
        }
    });

    grunt.loadTasks('maven-tasks');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['maven']);

};
