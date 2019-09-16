# Swagger To Connector Parser

The Swagger to Connector Parser aims to ease the process of generating input schema for connector operations when interacting with APIs that generate API documentation using Swagger. 

All that is required is the Base URL for the API where the Swagger documentation is located; the specified endpoint to be formatted as well as the HTTP method for that particular endpoint.
 
# Skeleton Input Object
```
	{
		url: '(the URL of the schema)',
		type: '(optional: defaults to json)'
	},

	{
		endpoint: '(desired endpoint)',
		verb: '(operation)'
	}
```

Based on specified inputs, the desired request will be processed and returned in a Connector-style JSON schema format to be input directly into the input section of the schema.js file.