var gulp = require('gulp');
var bs = require('browser-sync').create(); // create a browser sync instance.
var exec = require('child_process').exec;//needed to run commands to execute ng build

//create a server via gulp
gulp.task('default', ['syncReload'], function() {

    gulp.watch('./src/app/**/*.css', ['syncReload']);
    gulp.watch('./src/app/**/*.html', ['syncReload']);
    bs.init({
        
        proxy: {
            target: "192.168.33.17:4200"// where virt machine accesses app
        },
        open: false, //stop browser from opening automatically
        host: '192.168.33.17',
        port: 4201,
        files: ["./src/app/**/*.css", "./src/app/**/*.html"], //watch these files for change refresh
        serveStatic: [ '.' ] //serve files from here
       
    })
    
});

gulp.task('syncReload', () => {
    bs.reload()
    console.log('page reload complete!');
})
