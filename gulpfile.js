// Include gulp
var gulp = require('gulp'); 
var Server = require('karma').Server;


gulp.task('karma', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js'
  }, done).start();
});

gulp.task('test',['karma']);

gulp.task('default',['test']);



