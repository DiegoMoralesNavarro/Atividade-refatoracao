var gulp = require('gulp'),
	sass = require('gulp-sass');


gulp.task('bootstrap-css', ()=> {
	return gulp.src('node_modules/bootstrap/scss/bootstrap.scss')
        .pipe(sass())
        .pipe(gulp.dest("./dist/css"))
});

gulp.task('bootstrap-js', ()=> {
	return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/tether/dist/js/tether.min.js'])
        .pipe(gulp.dest("./dist/js"))
});


gulp.task('scss', () => {
	return gulp.src('./scss/style.scss')
		.pipe(sass().on('error', sass.logError))
		//.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(gulp.dest('./dist/css'))
})


gulp.task('scss-watch', () => { gulp.watch('./scss/*.scss', ['scss']) })

gulp.task('default', ['scss-watch','scss','bootstrap-css','bootstrap-js']);
