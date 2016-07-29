'use strict';

module.exports = function (grunt) {
    // load all grunt tasks
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        watch: {
            // if any .less file changes in directory "public/css/" run the "less"-task.
            files: [
                "assets/less/home.less",
                "assets/less/courses.less",
                "assets/less/assignments.less",
                "assets/less/scheduling.less"
            ],
            tasks: ["less"]
        },
        // "less"-task configuration
        less: {
            // production config is also available
            development: {
                options: {
                    // Specifies directories to scan for @import directives when parsing.
                    // Default value is the directory of the source, which is probably what you want.
                    paths: ["assets/less/**/*"],
                },

                files: {
                    // compilation.css  :  source.less
                    "assets/css/home.css": "assets/less/home.less",
                    "assets/css/courses.css": "assets/less/courses.less",
                    "assets/css/assignments.css": "assets/less/assignments.less",
                    "assets/css/scheduling.css": "assets/less/scheduling.less"
                }
            }
        }
    });
     // the default task (running "grunt" in console) is "watch"
     grunt.registerTask('default', ['watch']);
};