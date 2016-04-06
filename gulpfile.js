var gulp = require('gulp'),
    browsersync = require('browser-sync'),
    axis = require('axis'),
    jeet = require('jeet'),
    rupture = require('rupture'),
    autoprefixer = require('autoprefixer-stylus');
// vv This lazy-loads plugins preceded by plugins.pluginName
var plugins = require('gulp-load-plugins')();

gulp.task('default', function() {
  // place code for your default task here
});

// gulp.task('minify', function () {
//   gulp.src('js/main.js')
//     .pipe(plugins.uglify())
//     .pipe(gulp.dest('build'))
// });

// gulp.task('js', function () {
//   return gulp.src('js/*.js')
//     .pipe(plugins.jshint())
//     .pipe(plugins.jshint.reporter('default'))
//     .pipe(plugins.uglify())
//     .pipe(plugins.concat('app.js'))
//     .pipe(gulp.dest('build'));
// });

var dev_path =
  {
    root: 'dev/',
    styl: 'dev/styl/',
    jade: 'dev/jade/',
    js:   'dev/js/',
    img:  'dev/img/',
    slick:  'dev/slick/'
  }


var build_path =
  {
    root: 'build/',
    css:  'build/css/',
    html: 'build/html/',
    js:   'build/js/',
    img:  'build/img/',
    slick:  'build/slick/'
  }

// Compile Jade
gulp.task('jade', function(){
  gulp.src([
      dev_path.jade + '*.jade', 
      '!' + dev_path.jade + '_*.jade'
    ])
    .pipe(plugins.jade({pretty: true}))
    .on('error', console.log)
    .pipe(gulp.dest(build_path.root))
    .pipe(browsersync.reload({stream: true}));
});

// Compile Stylus
gulp.task('stylus', function(){
  gulp.src([
    dev_path.styl + '*.styl', 
    '!' + dev_path.styl + '_*.styl', 
    '!' + dev_path.styl + '_*'
    ])
    .pipe(plugins.stylus({
      use: [axis(), jeet(), rupture(), autoprefixer()],
      compress: true,
      //
      // TK this isn't right, isn't building properly
      sourcemap: {
        inline: false,
        sourceRoot: build_path.css
      }
    }))
    .on('error', console.log)
    .pipe(gulp.dest(build_path.css))
    .pipe(browsersync.reload({stream: true}));
});

// JavaScript
gulp.task('js', function(){
  gulp.src(dev_path.js + '*.js')
    .on('error', console.log)
    .pipe(plugins.uglify())
    .pipe(gulp.dest(build_path.js))
    .pipe(browsersync.reload({stream: true}));
});

// Minification Images
gulp.task('images', function(){
  gulp.src([dev_path.img + '**/*'])
    .pipe(plugins.changed(build_path.img))
    // .pipe(imagemin())
    .pipe(gulp.dest(build_path.img))
    .pipe(browsersync.reload({stream: true}));
});

gulp.task('slick', function(){
  gulp.src([dev_path.slick + '**/**/*'])
    .pipe(gulp.dest(build_path.slick))
    .pipe(browsersync.reload({stream: true}));
});

// Start Browser-Sync server
gulp.task('browsersync-server', function(){
    browsersync.init(null, {
      server: {baseDir: 'build/'},
      open: false,
      notify: false
    });
});


//
// TRANSFER VENDOR FILES
//

gulp.task('vendor', function(){
  gulp.src(dev_path.root + 'favicon.png').pipe(gulp.dest(build_path.root));
  gulp.src(dev_path.styl + 'vendor/*').pipe(gulp.dest(build_path.css));
  gulp.src(dev_path.js + 'vendor/*').pipe(gulp.dest(build_path.js));
  gulp.src('dev/fonts/**/*').pipe(gulp.dest('build/fonts/'));
});

//
// WATCH TASK
//

gulp.task('watch', function(){
  gulp.watch(dev_path.jade + '**/*.jade', ['jade']);
  gulp.watch(dev_path.styl + '**/*.styl', ['stylus']);
  gulp.watch([dev_path.img + '**/*'], ['images']);
  gulp.watch([dev_path.slick + '**/**/*'], ['slick']);
  gulp.watch(dev_path.js + '**/*.js', ['js']);

  gulp.watch([dev_path.styl + 'vendor/*', dev_path.js + 'vendor/*'], ['vendor']);
});

//
// DEFAULT TASK
//

gulp.task('default', [
  'vendor', 'jade', 'stylus', 'images', 'js', 'slick', 'browsersync-server', 'watch',
  // 'vendor', 'jade', 'stylus', 'js', 'browsersync-server', 'watch',
]);
