const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const rename = require('gulp-rename')
const sass = require('gulp-sass')
const runSequence = require('run-sequence')
const watch = require('gulp-watch')

const angularFIles = [
  './src/js/*.js',
  './src/js/**/*.js'
]

gulp.task('scripts', () => {
	gulp.src(angularFIles)
		.pipe(concat('./public/js'))
		.pipe(rename('app.min.js'))
		.pipe(uglify({ mangle: false }))
		.pipe(gulp.dest('./public/js'))
})

gulp.task('sass', () => {
	return gulp.src('./src/sass/index.sass')
			.pipe(sass().on('error', sass.logError))
			.pipe(rename('index.min.css'))
			.pipe(gulp.dest('./public/css'))
})

gulp.task('default', () => {

	runSequence('sass', 'scripts')

	watch('./src/**', () => {
		runSequence('sass', 'scripts')
	})
})