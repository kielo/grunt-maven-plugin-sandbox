module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        karma: {
            unit: {
                options: {
                    files: ['test/**/*.js'],
                    frameworks: ['jasmine'],
                    singleRun: true,
                    browsers: ['PhantomJS']
                }
            }
        },
        gruntMavenProperties: grunt.file.readJSON('grunt-maven.json'),
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
    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask('default', ['mavenPrepare', 'karma', 'mavenDist']);
    grunt.registerTask('test', ['karma']);
};
