var gulp = require('gulp');
var htmlReplace = require('gulp-html-replace');

gulp.task('htmlReplace',function(){
     gulp.src('src/gl-data-table.html')
    .pipe(htmlReplace({
        'import': {
                src:null,
                tpl: 
                '<link rel="import" href="../polymer/polymer.html">\n'
        }
    }))
    .pipe(gulp.dest(''));
});


gulp.task('default', ['htmlReplace']);