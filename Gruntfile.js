module.exports = function (grunt) {
    require('time-grunt')(grunt);

    grunt.initConfig({
        csslint: {
            lint: {
                src: [
                    'cssco.css'
                ],
                options: {
                    csslintrc: '.csslintrc',
                    import: 2
                }
            }
        },
        sass: {
            options: {
                sourceMap: false
            },
            dist: {
                files: {
                    'scss/cssco.min.css': 'scss/*.scss'
                }
            }
        },
        postcss: {
            options:{
                processors:[
                    require('autoprefixer')({browsers: 'last 3 versions'}),
                    require('cssnano')()
                ]
            },
            dist:{
                src: 'scss/*.css'
            }
        },
        cssmin: {
            min: {
                files: {
                    'cssco.min.css': 'cssco.css'
                }
            }
        }
    });

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('lint', ['csslint']);
    grunt.registerTask('sassco', ['sass', 'postcss']);
    grunt.registerTask('min', ['cssmin']);
};
