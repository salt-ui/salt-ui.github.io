// https://github.com/gulpjs/gulp/tree/master/docs
var gulp = require('gulp');

// https://www.npmjs.com/package/gulp-rename/
var rename = require('gulp-rename');

// https://www.npmjs.com/package/gulp-just-replace/
var replace = require('gulp-just-replace');

// https://github.com/gulpjs/gulp/blob/master/docs/recipes/server-with-livereload-and-css-injection.md
var browserSync = require('browser-sync');

// https://github.com/floridoo/gulp-sourcemaps
var sourcemaps = require('gulp-sourcemaps');

// https://github.com/stevelacy/gulp-stylus
var stylus = require('gulp-stylus');

// https://www.npmjs.com/package/del/
var del = require('del');

// https://www.npmjs.com/package/gulp-concat/
var concat = require('gulp-concat');

// https://www.npmjs.com/package/gulp-cssimport/
var cssimport = require("gulp-cssimport");

// https://www.npmjs.com/package/gulp-cssmin
var cssmin = require('gulp-cssmin');


// 清空build目录
gulp.task('clear', function (cb) {
    del(['dist/*'], function (err, deletedFiles) {
        console.log('###### clear dist done ######');
    });
    cb();
});

// 编译tingle style源码
gulp.task('stylus_tingle', function(cb) {
    gulp.src(['./src/**/*.styl'])
        .pipe(sourcemaps.init())
        .pipe(stylus())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./src'));
    console.info('###### stylus_tingle done ######');
    cb();
});


var reload = browserSync.reload;

gulp.task('reload_by_src', ['stylus_tingle'], function () {
    reload();
});

// 开发`Tingle component`时，执行`gulp develop` or `gulp d`
gulp.task('develop', ['stylus_tingle'], function() {
    browserSync({
        server: {
            baseDir: './'
        }
    });

    gulp.watch('index.html', function () {
        reload();
    });

    gulp.watch('src/**/*.styl', ['reload_by_src']);
});

// 快捷方式
gulp.task('d', ['develop']);


// 发布前执行build任务
gulp.task('build', ['clear', 'stylus_tingle'], function (cb) {
    gulp.src(["src/tingle.css"])
        .pipe(cssimport({}))
        .pipe(concat('tingle.css'))
        // 删除souceMapping一行
        .pipe(replace([{
            search: /\/\*#\ssourceMappingURL=[^*]*\*\//g,
            replacement: ''
        }]))
        .pipe(gulp.dest("dist/"))
        .pipe(cssmin())
        .pipe(rename(function (path) {
            // path = {
            //     "dirname": ".",
            //     "basename": "tingle",
            //     "extname": ".css"
            // }
            path.basename += '.min';
        }))
        .pipe(gulp.dest("dist/"));
    console.info('###### tingle-style build done ######');
    cb();
});

gulp.task('b', ['build']);





