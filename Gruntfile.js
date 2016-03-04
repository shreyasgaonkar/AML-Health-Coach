
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({

        concat: {
            js: {
                src: ['Scripts/nav.js', 'Scripts/function.js'],
                dest: 'build/js/scripts.js',
            },
            css: {
                src: ['Styles/1.css', 'Styles/custom.css', 'Styles/scss.css'],
                dest: 'build/css/styles.css',
            },
            sass: {
                src: ['Styles/nav.scss', 'Styles/device.scss',  'Styles/footer.scss'],
                dest: 'Styles/scss.scss',
            }
        },

        watch: {
            options: {
                livereload: true
            },
            js: {
                files: ['Scripts/**/*.js'],
                tasks: ['concat:js', 'uglify'],
            },
            css: {
                files: ['Styles/**/*.css'],
                tasks: ['concat:css', 'cssmin'],
            },
            sass: {
                files: ['Styles/**/*.scss'],
                tasks: ['concat:sass', 'sass'],
            },
            html: {
                files: ['default.html'],
                tasks: ['htmlmin'],
            },
        },

        uglify: {
            my_target: {
                files: {
                    'build/js/min.js': ['build/js/scripts.js'],
                },
            },
        },

        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'build/css/min.css': ['build/css/styles.css'],
                },
            },
        },

        htmlmin: {                                     // Task
            dist: {                                      // Target
                options: {                                 // Target options
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {                                   // Dictionary of files
                    'index.html': 'default.html',     // 'destination': 'source'
                    //'dist/contact.html': 'src/contact.html'
                }
            },
            dev: {                                       // Another target
                files: {
                    //'index.html': 'default.html',
                    //'dist/contact.html': 'src/contact.html'
                },
            },
        },

        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'Styles/scss.css': 'Styles/scss.scss',
                    'Styles/custom.css': 'Styles/custom.scss'
                    //'Styles/scss.css': 'Styles/scss.scss',
                }
            }
        },

        newer: {
            options: {
                override: function(detail, include) {
                    if (detail.task === 'less') {
                        checkForModifiedImports(detail.path, detail.time, include);
                    } else {
                        include(false);
                    }
                }
            }
        },




        /*
        sass: {                              // Task
        dist: {                            // Target
        options: {                       // Target options
        style: 'expanded'
    },
    files: {                         // Dictionary of files
    'Styles/*.css': 'Styles/*.scss',       // 'destination': 'source'
    // 'widgets.css': 'widgets.scss'
}
}
}
*/
/*
"connect": {
keepalive: {
options: {
port: 1019,
host: "localhost",
keepalive: true,
//open: "http://localhost:1019/index.html"
}
}
}
*/

});

//grunt.loadNpmTasks('grunt-contrib-sass');

grunt.loadNpmTasks('grunt-newer');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-contrib-htmlmin');
//grunt.loadNpmTasks('grunt-express');
//grunt.loadNpmTasks('grunt-contrib-connect');
require('load-grunt-tasks')(grunt);
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.registerTask('default', [ 'newer:uglify', 'newer:cssmin', 'newer:htmlmin', 'newer:sass', 'newer:concat', 'watch']);

//grunt.registerTask('server', [ 'express', 'watch']);
};
