// STEP 4 & 5
/**/
var gulp   		= require('gulp'),
	sass   		= require('gulp-sass')/*,
    uglify 		= require('gulp-uglify'),	
	livereload	= require('gulp-livereload'),
	imagemin   	= require('gulp-imagemin'),
	prefix		= require('gulp-autoprefixer')*/;
//
gulp.task('sass', function(){
	return gulp.src('./scss/*.scss')
				.pipe(sass({
					style:'compressed'
				}))
				.pipe(gulp.dest('./css/'));
});
gulp.task('watch', function(){
    gulp.watch('scss/**/*.scss', ['sass']);
});
gulp.task('default', ['sass', 'watch']);
/*
gulp.task('scripts', function(){
	var op= 
    gulp.src('js/*.js')
    .pipe(uglify());
	return op.pipe(gulp.dest('dest/js/'));
});
*/
//
/*
gulp.task('sass', function(){
	return gulp.src('./scss/*.scss')
				.pipe(sass())
				.on('error', console.error.bind(console))
				.pipe(prefix('last 2 versions'))
				.pipe(gulp.dest('./css/'))
				.pipe(livereload());
});
//
gulp.task('image', function(){
	return gulp.src('./img/*')
				.pipe(imagemin())
				.pipe(gulp.dest('./dest/img/'));
});
//

gulp.task('watch', function(){
	var server = livereload.listen();
	//
    gulp.watch('js/*.js', ['scripts']);
    gulp.watch('scss/**\/*.scss', ['sass']);//remove \ when accompanying block comment removed
});
gulp.task('default', ['scripts', 'sass', 'watch']);
*/
/**/

// STEP 3
/*
var gulp   = require('gulp'),
    uglify = require('gulp-uglify');
//
gulp.task('scripts', function(){
    gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dest/js/'));
});
gulp.task('styles', function(){
    console.log('will work on styles');
});
gulp.task('default', ['scripts', 'styles']);
*/
// STEP 2
/*
var gulp= require('gulp'),
	uglify= require('gulp-uglify');
//
gulp.task('default', function(){
	gulp.src('js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('minjs'));
});
*/
