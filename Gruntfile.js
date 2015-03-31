module.exports = function(grunt){
    grunt.initConfig({
        nodeRequire: require,
        appDir: 'web',
        builtDir: 'web/assets',
        requirejs: {
            main: {
                options: {
                    mainConfigFile: '<%= appDir %>/js/common.js',
                    appDir: '<%= appDir %>',
                    baseUrl: './js',
                    dir: '<%= builtDir %>',
                    optimizeCss: 'none',
                    optimize: 'none',
                    modules: [
                        {
                            name: 'common',
                            include: ['jquery', 'bootstrap', 'typeahead']
                        }
                    ]
                }
            }
        },
        compass: {
            dist: {
                options: {
                    sassDir: '<%= appDir %>/sass',
                    cssDir: '<%= builtDir %>/css',
                    environment: 'production',
                    outputStyle: 'compressed'
                }
            },
            dev: {
                options: {
                    sassDir: '<%= appDir %>/sass',
                    cssDir: '<%= appDir %>/css',
                    outputStyle: 'expanded'
                }
            }
        },
        uglify: {
            build: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= builtDir %>',
                        src: 'js/**/*.js',
                        flatten: false,
                        dest: '<%= builtDir %>',
                        filter: 'isFile'
                    },
                    {
                        expand: true,
                        cwd: '<%= appDir %>',
                        src: 'bundles/**/*.js',
                        flatten: false,
                        dest: '<%= builtDir %>',
                        filter: 'isFile'
                    },
                    {
                        expand: true,
                        cwd: '<%= appDir %>',
                        src: 'vendor/require*/*.js',
                        flatten: false,
                        dest: '<%= builtDir %>',
                        filter: 'isFile'
                    }
                ]
            }
        },
        jshint: {
            all: [
                'Gruntfile.js',
                '<%= appDir %>/js/{,*/}*.js',
                '<%= appDir %>/bundles/{,*/}js/*.js'
            ]
        },
        watch: {
            scripts: {
                files: [
                    '<%= appDir %>/js/*.js'
                ],
                tasks: ['jshint']
            },
            compass: {
                files: [
                    '<%= appDir %>/sass/*.scss',
                    '<%= appDir %>/sass/_*.scss'
                ],
                tasks: ['compass:dev']
            }
        },
        imagemin: {
            png: {
                options: {
                    optimizationLevel: 9
                },
                files: [
                    {
                        // Set to true to enable the following options…
                        expand: true,
                        // cwd is 'current working directory'
                        cwd: 'web/img/',
                        src: ['**/*.png'],
                        // Could also match cwd line above. i.e. project-directory/img/
                        dest: 'web/img/',
                        ext: '.png'
                    }
                ]
            },
            jpg: {
                options: {
                    progressive: true
                },
                files: [
                    {
                        // Set to true to enable the following options…
                        expand: true,
                        // cwd is 'current working directory'
                        cwd: 'web/img/',
                        src: ['**/*.jpg'],
                        // Could also match cwd. i.e. project-directory/img/
                        dest: 'web/img/',
                        ext: '.jpg'
                    }
                ]
            }
        }
    });

    grunt.registerTask('dev', [
        'jshint',
        'compass:dev'
    ]);

    grunt.registerTask('production', [
        'jshint',
        'requirejs',
        'uglify',
        'compass:dist'
    ]);

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
};
