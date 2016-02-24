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
    grunt.registerTask('min', ['cssmin']);
};
