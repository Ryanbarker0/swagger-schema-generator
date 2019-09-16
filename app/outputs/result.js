const data = {
	tags: ['file-libraries'],
	security: [{ showpadOAuth2: [] }],
	summary: 'Get a list of file-libraries',
	parameters:
		[{
			name: 'limit',
			in: 'query',
			example: 100,
			description: 'Limits the returned result',
			required: false,
			schema: { type: 'integer' }
		},
		{
			name: 'offset',
			in: 'query',
			example: 20,
			description:
				'Move the offset of the returned result, to be used in combination with "limit"',
			required: false,
			schema: { type: 'integer' }
		}],
	responses:
	{
		'200':
		{
			description: 'A JSON array of libraries that the user has access to',
			content:
			{
				'application/json':
				{
					schema:
					{
						properties:
						{
							count: { type: 'integer', format: 'int32' },
							items:
							{
								type: 'array',
								items:
								{
									properties:
									{
										id: { type: 'string', example: 'my-library-id' },
										name: { type: 'string', example: 'Global Library' },
										createdAt: { type: 'string', format: 'date-time' },
										updatedAt: { type: 'string', format: 'date-time' }
									}
								}
							}
						}
					}
				}
			}
		},
		'403':
		{
			description: 'Forbidden to request the resource',
			content:
			{
				'application/json':
				{
					schema:
					{
						properties:
						{
							meta:
							{
								properties:
								{
									code: { type: 'integer', format: 'int32', example: 403 },
									message: { type: 'string', example: 'Forbidden' }
								}
							}
						}
					}
				}
			}
		}
	}
}