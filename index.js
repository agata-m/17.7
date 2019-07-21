var fs = require('fs');
var colors = require('colors');
var StatMode = require('stat-mode');

fs.readdir('.', 'utf8', function(err, files) {
    console.log(files);    
    if(err) throw err;

    fs.writeFile('dirFiles.txt', files, function(err, data) {
        console.log('The files have been saved');
    });
});