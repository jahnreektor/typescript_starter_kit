module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);
//    require('time-grunt')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        tsd: {
            refresh: {
                options: {
                    // execute a command
                    command: 'reinstall',

                    //optional: always get from HEAD
                    latest: true,

                    // specify config file
                    config: 'tsd.json',

                    // experimental: options to pass to tsd.API
                    opts: {
                        // props from tsd.Options
                    }
                }
            }
        },
        ts: {
            task : {
		src: ["**/*.ts", "!node_modules/**/*.ts"],
		out: 'app/dist/app.js'
            },
            options: {
                fast: 'never'
            }
        },
        chmod: {
            options: {
                mode: '755'
            },
            yourTarget1: {
                src: ['/home/devbuild/working_dir/groups_ui']
            }
        },
        watch: {
            typescript: {
                files: '**/**/*.ts',
                tasks: ['ts']
            },
            sass: {
                files: '**/**/*.scss',
                tasks: ['sass']
            }
        },
        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'app/scss',
                    src: ['*.scss'],
                    dest: 'dist',
                    ext: '.css'
                }]

            }
        },
	karma: {  
	    unit: {
		options: {
		    frameworks: ['jasmine'],
		    singleRun: false,
		    browsers: ['PhantomJS'],
		    files: [
			/**TODO**/
			'./app/dist/**/*.js',
			'./test/spec/**/*.js'
		    ]
		}
	    }
	},
	tslint: {
            options: {
                configuration: grunt.file.readJSON("tslint.json"),
            },
            files: {
                src: ['./app/**/*.ts']
            }
        },
        typedoc: {
            build: {
                src: [ './app/**/*.ts'],
                options: {
                    module: 'commonjs',
                    out: './docs',
                    name: 'Kavi Workspace',
                    target: 'es5'
                }
            }
        }
    });

    
    grunt.registerTask('doc', ['typedoc']); //generate documentation
    grunt.registerTask('test', ['karma']); //test runner continuously
    grunt.registerTask('lint', ['tslint', 'watch']); //Compile and lint SASS and TS continuously
    grunt.registerTask('compile', ['sass', 'ts', 'watch']); //Compile and lint SASS and TS continuously
    grunt.registerTask('compile-lint', ['sass', 'tslint', 'ts', 'watch']); //Compile and lint SASS and TS continuously

    //Run ALL TASKS - "grunt"
    grunt.registerTask('default', ['tsd', 'chmod','typedoc', 'tslint', 'ts', 'sass', 'watch']); 
};
