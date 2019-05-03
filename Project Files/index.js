var wia = require('wia')('')

var Blynk = require("blynk-library");

var AUTH = '' 

var blynk = new Blynk.Blynk(AUTH);

var v1 = new blynk.VirtualPin(1);

v1.on('write',function(param) {
	console.log("v2: latitude:"+param[0])
	wia.locations.publish({
		latitude: param[0],
		longitude: param[1]
	});
});



wia.stream.connect();
