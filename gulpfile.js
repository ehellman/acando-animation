const gulp       = require('gulp');
const webpack    = require('gulp-webpack');
const sourcemaps = require('gulp-sourcemaps');
const babel      = require('gulp-babel');
const concat     = require('gulp-concat');
const uglify     = require('gulp-uglify');
const rename     = require('gulp-rename')

const postcss       = require('gulp-postcss');
const precss        = require('precss');
const autoprefixer  = require('autoprefixer');
const lost          = require('lost');
const calc          = require('postcss-calc');
// ^^^ awesome places to start ^^^

const njRender    = require('gulp-nunjucks-render');
const nj          = njRender.nunjucks;

const browserSync   = require('browser-sync');
const reload        = browserSync.reload;

gulp.task('scripts', () => {
  return gulp.src('src/scripts/app.js')
    .pipe(webpack())
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(rename('app.js'))
    .pipe(gulp.dest('dist'))
    .pipe(rename('app.min.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'))
    .pipe(reload({stream:true}));
});

gulp.task('styles', () => {
  const processors = [
    precss(),
    lost,
    calc,
    autoprefixer({browsers: ['last 2 versions']})
  ];
  return gulp.src('src/styles/styles.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('dist'))
});

gulp.task('markup', () => {
  nj.configure(['src/templates'], {watch: false});
  return gulp.src('src/html/**/*.+(html|nj|nunjucks)')
    .pipe(njRender())
    .pipe(gulp.dest('dist'));
});

gulp.task('images', () => {
  return gulp.src('src/images/**/*.+(gif|jpg|png|svg)')
    .pipe(gulp.dest('dist/images'));
});

gulp.task('watch', function() {
  gulp.watch('src/templates/**/*.+(html|nj|nunjucks)', ['markup', reload]);
  gulp.watch('src/html/**/*.+(html|nj|nunjucks)', ['markup', reload]);
  gulp.watch('src/styles/**/*.css', ['styles', reload]);
  gulp.watch(['src/scripts/**/*.js'], ['scripts', reload]);
  gulp.watch(['src/images/**/*.+(gif|jpg|png|svg)'], ['images', reload]);
  gulp.watch("*.html", reload);
});

gulp.task('sync', function() {
  browserSync({
    server: {
      baseDir: "./dist/",
      proxy: "172.24.45.13"
    }
  });
});

gulp.task('server', ['markup', 'styles', 'images', 'sync', 'scripts', 'watch']);

gulp.task('default', ['markup', 'styles', 'images', 'scripts']);
