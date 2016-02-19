module.exports = function (grunt) {
    require('time-grunt')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            build: ['build']
        },
        connect: {
            server: {
                options: {
                    hostname: '*',
                    base: 'build',
                    livereload: true,
                    open: {
                        target: 'http://127.0.0.1:1337/'
                    },
                    port: 1337,
                    useAvailablePort: true
                }
            }
        },
        copy: {
            build: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/assets',
                        src: ['{fonts,images,js}/**'],
                        dest: 'build/assets'
                    },
                    {
                        expand: true,
                        cwd: 'src',
                        src: ['**/*.html'],
                        dest: 'build'
                    },
                    {
                        expand: true,
                        cwd: 'src',
                        src: ['*.*', '.*'],
                        dest: 'build'
                    }
                ]
            }
        },
        csslint: {
            build: {
                src: [
                    'build/assets/css/style.css'
                ],
                options: {
                    csslintrc: '.csslintrc',
                    import: 2
                }
            }
        },
        eslint: {
            target: ['src/assets/js/main.js']
        },
        sass: {
            build: {
                options: {
                    sourceMap: true
                },
                files: {
                    'build/assets/css/style.css': 'src/assets/sass/style.scss',
                    'build/assets/css/styleguide/styleguide.css': 'src/assets/sass/styleguide/styleguide.scss'
                }
            }
        },
        uglify: {
            build: {
                files: {
                    'build/assets/js/script.js': [
                        'src/assets/js/vendor/jquery.js',
                        'src/assets/js/plugins.js',
                        'src/assets/js/main.js'
                    ]
                }
            }
        },
        watch: {
            build: {
                files: [
                    'src/**'
                ],
                tasks: ['sass:build', 'copy:build', 'uglify:build'],
                options: {
                    livereload: true
                }
            }
        }
    });

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('build', ['clean:build', 'sass:build', 'copy:build', 'uglify:build']);
    grunt.registerTask('default', ['build']);
    grunt.registerTask('serve', ['build', 'connect', 'watch']);
    grunt.registerTask('test', ['csslint', 'eslint']);
};
