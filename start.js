const { run: start } = require('./app/index');

const MAGENTO_URL = 'http://localhost/magento/rest/all/schema?services=all'
const SHOWPAD_URL = 'https://staging.showpad.biz/api/content/v1/doc/api/content-management.yml'
const LOGICMONITOR_URL = 'https://www.logicmonitor.com/swagger-ui-master/dist/swagger.json'

// add your input here
start(
	{
		url: MAGENTO_URL,
	},
	{
		endpoint: '/V1/customers',
		verb: 'post'
	}
)