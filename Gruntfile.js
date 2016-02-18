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
                        cwd: 'assets',
                        src: ['{fonts,images,js}/**'],
                        dest: 'build/assets'
                    },
                    {
                        expand: true,
                        cwd: '',
                        src: ['**/*.html'],
                        dest: 'build'
                    },
                    {
                        expand: true,
                        cwd: '',
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
            target: ['assets/js/main.js']
        },
        'ftp-deploy': {
            build: {
                auth: {
                    host: 'playingwithcode.co.za',
                    port: 21,
                    authKey: 'waller'
                },
                src: './build',
                dest: 'public_html/cssco/',
                exclusions: [
                    '.editorconfig',
                    '.ftppass',
                    '.git',
                    '.gitignore',
                    '.htaccess',
                    '.idea',
                    '*.scss',
                    'apple-touch-icon-precomposed.png',
                    'favicon.ico',
                    'Gruntfile.js',
                    'package.json',
                    'README.md',
                    'robots.txt',
                    'sass',
                    'node_modules'
                ]
            }
        },
        sass: {
            build: {
                options: {
                    sourceMap: true
                },
                files: {
                    'build/assets/css/style.css': 'assets/sass/style.scss',
                    'build/assets/css/styleguide/styleguide.css': 'assets/sass/styleguide/styleguide.scss'
                }
            }
        },
        uglify: {
            build: {
                files: {
                    'build/assets/js/script.js': [
                        'assets/js/vendor/jquery.js',
                        'assets/js/plugins.js',
                        'assets/js/main.js'
                    ]
                }
            }
        },
        watch: {
            build: {
                files: [
                    '**'
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
    grunt.registerTask('deploy', ['build', 'ftp']);
    grunt.registerTask('ftp', ['ftp-deploy']);
    grunt.registerTask('serve', ['build', 'connect', 'watch']);
    grunt.registerTask('test', ['csslint', 'eslint']);
};
