const getSwagger = require('./getSwagger');
module.exports = (swaggerInfo, parseInfo) => {
	return getSwagger(swaggerInfo, parseInfo)
}