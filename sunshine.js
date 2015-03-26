//var Galileo = require("galileo-io");
//var board = new Galileo();

//for fswebcam
var fs = require('fs');
var Camelittle = require('camelittle');
var clInstance = new Camelittle({
	device: '/dev/video0',
	resolution:'1280x720',
	frames:5,
	'no-banner':null
});
var fs = require('fs');
var dateFormat = require('dateformat');

setInterval ( shot, 10000 );

function shot(){
    console.log("shot");
    clInstance.grab(function(err, image){
            var now = new Date();
            var datestring = dateFormat(now, "yyyy-dd-mm-HH-MM-ss-L");
            console.log("get image "+datestring);
            fs.writeFileSync('/media/sdcard/'+datestring+'.jpg', image, 'binary');

//            board.analogRead("A0", function(data) {
//              console.log(data);
//            });        
    })
}

