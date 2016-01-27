var path = require('path');

var Promise = require('bluebird');
var chalk = require('chalk');
var compiler = require('vueify').compiler;

var compile = Promise.promisify(compiler.compile, { context: compiler });


module.exports = function(grunt)
{

    grunt.registerMultiTask('vueify', 'Translate .vue files to pure JavaScript.', function()
    {
        Promise.mapSeries(this.files, function(file)
        {
            var dest = file.dest;
            var destIsFile = dest.slice(-1) != '/' && /\./.test(path.basename(dest));

            return Promise.filter(file.src, function(filePath)
            {
                // Warn on and remove invalid source files.
                if(!grunt.file.exists(filePath))
                {
                    grunt.log.warn('Source file ' + chalk.cyan(JSON.stringify(filePath)) + ' not found.');
                    return false;
                }
                else
                {
                    return true;
                } // end if
            })
                .tap(function(files)
                {
                    if(files.length > 1)
                    {
                        grunt.log.warn('Multiple source files specified for target ' +
                            chalk.cyan(JSON.stringify(dest)) + '; concatenating.');
                    } // end if
                })
                .map(function(filePath)
                {
                    return compile(grunt.file.read(filePath), filePath)
                        .tap(function(source)
                        {
                            if(!destIsFile)
                            {
                                var destFile = path.join(dest, path.basename(filePath) + '.js');
                                grunt.file.write(destFile, source);
                            } // end if
                        });
                })
                .then(function(sources)
                {
                    if(destIsFile)
                    {
                        grunt.file.write(dest, sources.join('\n//////////////////////////////\n\n'));
                    } // end if
                });
        })
            .then(this.async());
    });
};
