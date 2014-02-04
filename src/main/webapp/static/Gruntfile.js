module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        gruntMavenProperties: grunt.file.readJSON('maven-inner-properties.json'),
        mavenPrepare: {
            options: {
                resources: ['**']
            },
            dev: {}
        },
        mavenDist: {
            options: {
                warName: 'ROOT',
                deliverables: ["<%= pkg.name %>*.js", "*.js", "!js/test/**"]
            },
            dev: {}
        },
        watch: {
            files: ["<%= gruntMavenProperties.filesToWatch %>"],
            tasks: ['default']
        }
    });

    grunt.loadNpmTasks('grunt-maven');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['mavenPrepare', 'mavenDist']);

};
