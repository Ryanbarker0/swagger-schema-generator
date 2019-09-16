const SwaggerParser = require('swagger-parser')
const fs = require('fs')
const util = require('util')
const formatter = require('./operationFormatter')
// const data = JSON.parse(fs.readFileSync('test.json'))
const parser = new SwaggerParser()

// * The parser will act as a formatter, unless we decide to export a formatter function
// TODO - will likely need to check that formatting can be consistent between APIs

module.exports = (docs, options) => {
	const inspector = object => util.inspect(object, { showHidden: false, compact: true, depth: 20 })

	const getSchema = (docs, options) => {
		parser.dereference(docs)
			.then(response => {
				if (options) {
					return formatter(response.paths[options.endpoint][options.verb])
					// fs.writeFileSync('result.js', data)
					// console.log(data)
				} else {
					console.log(inspector(response));
				}
			})
	}

	if (options) return getSchema(docs, options)
	else return getSchema(docs)
}
