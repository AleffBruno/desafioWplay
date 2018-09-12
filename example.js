var fs = require('fs');
var path = 'C:\\Users\\f1608101\\Desktop\\out';

fs.readdir(path,function(err,items){
    console.log(items);
    console.log("-------------");

    for (var i=0; i<items.length; i++) {
        console.log(items[i]);
        var file = path + '\\' + items[i];
        console.log('Start '+file);

        fs.stat(file,generate_callback(file));
    }
})

function generate_callback(file) {
    return function(err, stats) {
            console.log(file);
            console.log(stats["size"]);
        }
};