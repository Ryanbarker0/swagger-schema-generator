const request = require('request')
const yaml = require('js-yaml')
const fs = require('fs')
const swaggerParse = require('./swaggerParse');

const MAGENTO_URL = 'http://localhost/magento/rest/all/schema?services=all'
const SHOWPAD_URL = 'https://staging.showpad.biz/api/content/v1/doc/api/content-management.yml'
const LOGICMONITOR_URL = 'https://www.logicmonitor.com/swagger-ui-master/dist/swagger.json'

// * Operation steps: getSwagger.js -> parser.js -> operationFormatter.js
// * We can tie this all together in a single package / operation with options

// * Write to Docs.json -> Read from Docs.json -> return input schema based on endpoint

// TODO - need to add edge cases for different Swagger formats
module.exports = ({url, type = 'json'}, parserInfo) => {
	return request(url, (err, response, body) => {
		if (err) console.log(err)
		if (response) console.log(response.statusCode)
		if (body) {
			switch (type) {
				case 'yaml':
					const docs = yaml.safeLoad(body)
					fs.writeFileSync('test.json', JSON.stringify(docs))
					return swaggerParse(JSON.parse(fs.readFileSync('test.json')), parserInfo)
					// return JSON.parse(fs.readFileSync('test.json'))
				default:
					fs.writeFileSync('data.json', body)
					return swaggerParse(JSON.parse(fs.readFileSync('data.json')), parserInfo)
			}
			// yaml.load(body))

			// fs.writeFileSync('data.json', body)
			// console.log('Successful File Write');
		}
	})
}

// getSwagger(LOGICMONITOR_URL)