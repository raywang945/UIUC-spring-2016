gulp = require('gulp')
exec = require('child_process').exec

gulp.task 'run', ->
    exec('./run.sh', (err, stdout, stderr) ->
        console.log stderr
        console.log stdout
    )

gulp.task 'watch', ->
    gulp.watch('./hello_world.cpp', ['run'])

gulp.task 'default', ['run', 'watch']
