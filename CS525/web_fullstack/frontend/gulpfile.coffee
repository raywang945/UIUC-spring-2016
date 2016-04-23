gulp = require('gulp')
jade = require('gulp-jade')
scss = require('gulp-scss')
ts   = require('gulp-typescript')

gulp.task 'jade', ->
    gulp.src('./src/**/*.jade')
        .pipe(jade(
            pretty: true
        ))
        .pipe(gulp.dest('./build'))

gulp.task 'scss', ->
    gulp.src('./src/**/*.scss')
        .pipe(scss())
        .pipe(gulp.dest('./build'))

gulp.task 'typescript', ->
    gulp.src('./src/**/*.ts')
        .pipe(ts(
            moduleResolution: 'node',
            noImplicitAny: true,
            out: 'main.js'
        ))
        .pipe(gulp.dest('./build'))

gulp.task 'vendor', ->
    gulp.src('./node_modules/socket.io-client/socket.io.js')
        .pipe(gulp.dest('./build/vendor'))

gulp.task 'watch', ->
    gulp.watch('./src/**/*.jade', ['jade'])
    gulp.watch('./src/**/*.scss', ['scss'])
    gulp.watch('./src/**/*.ts', ['typescript'])

gulp.task 'default', ['vendor', 'jade', 'scss', 'typescript', 'watch']
