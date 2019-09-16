const _ = require('lodash')
// * We can make this the core formatter for structuring and returning a connector input schema
// TODO - build the formatter to format and generate a random request suitable for a connector schema.js
module.exports = data => {
	const inputs = data.parameters;
	const responses = data.responses;
	// * this is going to be our recursive reducer
	const reducer = (object, requiredKeys) => 
		_.reduce(object, (acc, value, key) => {
			console.log(key)
			console.log(value);
			if (value.type && value.type === 'object') {
				acc[key] = {
					type: value.type,
					description: value.description,
					...(requiredKeys && 
						_.includes(requiredKeys, key) && 
						{
							required: true
						}
					),
					properties: reducer(value.properties) 
				}
			}
		}, {})
	// * currently an issue with tracking requiredKeys on each level of the reduce
	// logging inputs
	_.map(inputs, input => {
		console.log(input);
		if (input.in === 'body') {
			_.reduce(input.schema, (acc, value, key) => {
				let requiredKeys;
				if (key === 'required') {
					requiredKeys = value
				}
				if (key === 'properties') {
					reducer(value, requiredKeys)
				}
				
				
			}, {})
		}
	})
}
