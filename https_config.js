var fs = require("fs");

module.exports = {
	cert: fs.readFileSync("/home/daniel/certs/certificate.pem"),
	key: fs.readFileSync("/home/daniel/certs/privatekey.pem"),
};
