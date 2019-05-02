var wia = require('wia')('d_sk_ufwn0iA9TrPpcJT9lBQIhOLy')

var Blynk = require("blynk-library");

var sense = require("node-sense-hat")
//sense.set_imu_config(true);

const imu = require("node-sense-hat").Imu;
const IMU = new imu.IMU();

var AUTH = 'fc3850cde7c5458cb17eb24616649306'

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
