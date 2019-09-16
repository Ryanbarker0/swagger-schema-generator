module.exports = {
	swagger: '2.0',
	info: {
		version: '2.2',
		title: 'Magento Community'
	},
	host: 'localhost',
	basePath: '/magento/rest/all',
	schemes: [
		'http'
	],
	tags: [
		{
			name: 'directoryCurrencyInformationAcquirerV1',
			description: 'Currency information acquirer interface'
		},
		{
			name: 'directoryCountryInformationAcquirerV1',
			description: 'Country information acquirer interface'
		},
		{
			name: 'customerAccountManagementV1',
			description: 'Interface for managing customers accounts.'
		},
		{
			name: 'catalogProductRenderListV1',
			description: 'Interface which provides product ' +
				'renders information for products'
		},
		{
			name: 'quoteGuestCartRepositoryV1',
			description: 'Cart Repository interface for guest carts.'
		},
		{
			name: 'quoteGuestCartManagementV1',
			description: 'Cart Management interface for guest carts.'
		},
		{
			name: 'quoteGuestShippingMethodManagementV1',
			description: 'Shipping method management interface for guest carts.'
		},
		{
			name: 'quoteGuestShipmentEstimationV1',
			description: 'Interface GuestShipmentEstimationInterface'
		},
		{
			name: 'quoteGuestCartItemRepositoryV1',
			description: 'Cart Item repository interface for guest carts.'
		},
		{
			name: 'quoteGuestPaymentMethodManagementV1',
			description: 'Payment method management interface for guest carts.'
		},
		{
			name: 'quoteGuestBillingAddressManagementV1',
			description: 'Billing address management interface for guest carts.'
		},
		{
			name: 'quoteGuestCouponManagementV1',
			description: 'Coupon management interface for guest carts.'
		},
		{
			name: 'quoteGuestCartTotalManagementV1',
			description: 'Bundled API to collect totals for cart based on ' +
				'shipping/payment methods and additional data.'
		},
		{
			name: 'quoteGuestCartTotalRepositoryV1',
			description: 'Cart totals repository interface for guest carts.'
		},
		{
			name: 'searchV1',
			description: 'Search API for all requests'
		},
		{
			name: 'checkoutGuestShippingInformationManagementV1',
			description: 'Interface for managing guest ' +
				'shipping address information'
		},
		{
			name: 'checkoutGuestTotalsInformationManagementV1',
			description: 'Interface for guest quote totals calculation'
		},
		{
			name: 'checkoutGuestPaymentInformationManagementV1',
			description: 'Interface for managing guest payment information'
		},
		{
			name: 'giftMessageGuestCartRepositoryV1',
			description: 'Interface GuestCartRepositoryInterface'
		},
		{
			name: 'giftMessageGuestItemRepositoryV1',
			description: 'Interface GuestItemRepositoryInterface'
		},
		{
			name: 'integrationAdminTokenServiceV1',
			description: 'Interface providing token generation for Admins'
		},
		{
			name: 'integrationCustomerTokenServiceV1',
			description: 'Interface providing token generation for Customers'
		},
		{
			name: 'amazonPaymentAddressManagementV1',
			description: ''
		},
		{
			name: 'amazonPaymentOrderInformationManagementV1',
			description: ''
		},
		{
			name: 'temandoShippingQuoteGuestCartDeliveryOptionManagementV1',
			description: 'GuestCartDeliveryOptionManagementInterface'
		},
		{
			name: 'temandoShippingCollectionPointGuestCartCollectionPointManagementV1',
			description: 'Process Collection Point Search (Guest Checkout)'
		},
		{
			name: 'temandoShippingQuoteGuestCartCheckoutFieldManagementV1',
			description: 'Interface ' +
				'GuestCartCheckoutFieldManagementInterface ' +
				'Persist value-added services as ' +
				'selected during guest checkout.'
		}
	],
	paths: {
		'/V1/directory/currency': {
			get: {
				tags: [
					'directoryCurrencyInformationAcquirerV1'
				],
				description: 'Get currency information for the store.',
				operationId: 'directoryCurrencyInformationAcquirerV1GetCurrencyInfoGet',
				responses: {
					'200': {
						description: '200 Success.',
						schema: {
							type: 'object',
							description: 'Currency Information interface.',
							properties: {
								base_currency_code: {
									type: 'string',
									description: 'The base currency code for the store.'
								},
								base_currency_symbol: {
									type: 'string',
									description: 'The currency symbol of the ' +
										'base currency for the store.'
								},
								default_display_currency_code: {
									type: 'string',
									description: 'The default display ' +
										'currency code for the ' +
										'store.'
								},
								default_display_currency_symbol: {
									type: 'string',
									description: 'The currency symbol of the ' +
										'default display currency for the ' +
										'store.'
								},
								available_currency_codes: {
									type: 'array',
									description: 'The list of allowed ' +
										'currency codes for the ' +
										'store.',
									items: {
										type: 'string'
									}
								},
								exchange_rates: {
									type: 'array',
									description: 'The list of exchange rate ' +
										'information for the store.',
									items: {
										type: 'object',
										description: 'Exchange Rate interface.',
										properties: {
											currency_to: {
												type: 'string',
												description: 'The currency code ' +
													'associated with the ' +
													'exchange rate.'
											},
											rate: {
												type: 'number',
												description: 'The exchange rate for the ' +
													'associated currency and ' +
													'the store\'s base currency.'
											},
											extension_attributes: {
												type: 'object',
												description: 'ExtensionInterface class for ' +
													'@see ' +
													'\\Magento\\Directory\\Api\\Data\\ExchangeRateInterface'
											}
										},
										required: [
											'currency_to',
											'rate'
										]
									}
								},
								extension_attributes: {
									type: 'object',
									description: 'ExtensionInterface class for ' +
										'@see ' +
										'\\Magento\\Directory\\Api\\Data\\CurrencyInformationInterface'
								}
							},
							required: [
								'base_currency_code',
								'base_currency_symbol',
								'default_display_currency_code',
								'default_display_currency_symbol',
								'available_currency_codes',
								'exchange_rates'
							]
						}
					},
					default: {
						description: 'Unexpected error',
						schema: {
							type: 'object',
							properties: {
								message: {
									type: 'string',
									description: 'Error message'
								},
								errors: {
									type: 'array',
									description: 'Errors list',
									items: {
										type: 'object',
										description: 'Error details',
										properties: {
											message: {
												type: 'string',
												description: 'Error message'
											},
											parameters: {
												type: 'array',
												description: 'Error parameters list',
												items: {
													type: 'object',
													description: 'Error parameters item',
													properties: {
														resources: {
															type: 'string',
															description: 'ACL resource'
														},
														fieldName: {
															type: 'string',
															description: 'Missing or invalid field name'
														},
														fieldValue: {
															type: 'string',
															description: 'Incorrect field value'
														}
													}
												}
											}
										}
									}
								},
								code: {
									type: 'integer',
									description: 'Error code'
								},
								parameters: {
									type: 'array',
									description: 'Error parameters list',
									items: {
										type: 'object',
										description: 'Error parameters item',
										properties: {
											resources: {
												type: 'string',
												description: 'ACL resource'
											},
											fieldName: {
												type: 'string',
												description: 'Missing or invalid field name'
											},
											fieldValue: {
												type: 'string',
												description: 'Incorrect field value'
											}
										}
									}
								},
								trace: {
									type: 'string',
									description: 'Stack trace'
								}
							},
							required: [
								'message'
							]
						}
					}
				}
			}
		},
		'/V1/directory/countries': {
			get: {
				tags: [
					'directoryCountryInformationAcquirerV1'
				],
				description: 'Get all countries and ' +
					'regions information for the ' +
					'store.',
				operationId: 'directoryCountryInformationAcquirerV1GetCountriesInfoGet',
				responses: {
					'200': {
						description: '200 Success.',
						schema: {
							type: 'array',
							items: {
								type: 'object',
								description: 'Country Information interface.',
								properties: {
									id: {
										type: 'string',
										description: 'The country id for the store.'
									},
									two_letter_abbreviation: {
										type: 'string',
										description: 'The country 2 letter ' +
											'abbreviation for the ' +
											'store.'
									},
									three_letter_abbreviation: {
										type: 'string',
										description: 'The country 3 letter ' +
											'abbreviation for the ' +
											'store.'
									},
									full_name_locale: {
										type: 'string',
										description: 'The country full name (in ' +
											'store locale) for the ' +
											'store.'
									},
									full_name_english: {
										type: 'string',
										description: 'The country full name (in ' +
											'English) for the store.'
									},
									available_regions: {
										type: 'array',
										description: 'The available regions for the store.',
										items: {
											type: 'object',
											description: 'Region Information interface.',
											properties: {
												id: {
													type: 'string',
													description: 'Region id'
												},
												code: {
													type: 'string',
													description: 'Region code'
												},
												name: {
													type: 'string',
													description: 'Region name'
												},
												extension_attributes: {
													type: 'object',
													description: 'ExtensionInterface class for ' +
														'@see ' +
														'\\Magento\\Directory\\Api\\Data\\RegionInformationInterface'
												}
											},
											required: [
												'id',
												'code',
												'name'
											]
										}
									},
									extension_attributes: {
										type: 'object',
										description: 'ExtensionInterface class for ' +
											'@see ' +
											'\\Magento\\Directory\\Api\\Data\\CountryInformationInterface'
									}
								},
								required: [
									'id',
									'two_letter_abbreviation',
									'three_letter_abbreviation',
									'full_name_locale',
									'full_name_english'
								]
							}
						}
					},
					default: {
						description: 'Unexpected error',
						schema: {
							type: 'object',
							properties: {
								message: {
									type: 'string',
									description: 'Error message'
								},
								errors: {
									type: 'array',
									description: 'Errors list',
									items: {
										type: 'object',
										description: 'Error details',
										properties: {
											message: {
												type: 'string',
												description: 'Error message'
											},
											parameters: {
												type: 'array',
												description: 'Error parameters list',
												items: {
													type: 'object',
													description: 'Error parameters item',
													properties: {
														resources: {
															type: 'string',
															description: 'ACL resource'
														},
														fieldName: {
															type: 'string',
															description: 'Missing or invalid field name'
														},
														fieldValue: {
															type: 'string',
															description: 'Incorrect field value'
														}
													}
												}
											}
										}
									}
								},
								code: {
									type: 'integer',
									description: 'Error code'
								},
								parameters: {
									type: 'array',
									description: 'Error parameters list',
									items: {
										type: 'object',
										description: 'Error parameters item',
										properties: {
											resources: {
												type: 'string',
												description: 'ACL resource'
											},
											fieldName: {
												type: 'string',
												description: 'Missing or invalid field name'
											},
											fieldValue: {
												type: 'string',
												description: 'Incorrect field value'
											}
										}
									}
								},
								trace: {
									type: 'string',
									description: 'Stack trace'
								}
							},
							required: [
								'message'
							]
						}
					}
				}
			}
		},
		'/V1/directory/countries/{countryId}': {
			get: {
				tags: [
					'directoryCountryInformationAcquirerV1'
				],
				description: 'Get country and region information for the store.',
				operationId: 'directoryCountryInformationAcquirerV1GetCountryInfoGet',
				parameters: [
					{
						name: 'countryId',
						in: 'path',
						type: 'string',
						required: true
					}
				],
				responses: {
					'200': {
						description: '200 Success.',
						schema: {
							type: 'object',
							description: 'Country Information interface.',
							properties: {
								id: {
									type: 'string',
									description: 'The country id for the store.'
								},
								two_letter_abbreviation: {
									type: 'string',
									description: 'The country 2 letter ' +
										'abbreviation for the ' +
										'store.'
								},
								three_letter_abbreviation: {
									type: 'string',
									description: 'The country 3 letter ' +
										'abbreviation for the ' +
										'store.'
								},
								full_name_locale: {
									type: 'string',
									description: 'The country full name (in ' +
										'store locale) for the ' +
										'store.'
								},
								full_name_english: {
									type: 'string',
									description: 'The country full name (in ' +
										'English) for the store.'
								},
								available_regions: {
									type: 'array',
									description: 'The available regions for the store.',
									items: {
										type: 'object',
										description: 'Region Information interface.',
										properties: {
											id: {
												type: 'string',
												description: 'Region id'
											},
											code: {
												type: 'string',
												description: 'Region code'
											},
											name: {
												type: 'string',
												description: 'Region name'
											},
											extension_attributes: {
												type: 'object',
												description: 'ExtensionInterface class for ' +
													'@see ' +
													'\\Magento\\Directory\\Api\\Data\\RegionInformationInterface'
											}
										},
										required: [
											'id',
											'code',
											'name'
										]
									}
								},
								extension_attributes: {
									type: 'object',
									description: 'ExtensionInterface class for ' +
										'@see ' +
										'\\Magento\\Directory\\Api\\Data\\CountryInformationInterface'
								}
							},
							required: [
								'id',
								'two_letter_abbreviation',
								'three_letter_abbreviation',
								'full_name_locale',
								'full_name_english'
							]
						}
					},
					'400': {
						description: '400 Bad Request',
						schema: {
							type: 'object',
							properties: {
								message: {
									type: 'string',
									description: 'Error message'
								},
								errors: {
									type: 'array',
									description: 'Errors list',
									items: {
										type: 'object',
										description: 'Error details',
										properties: {
											message: {
												type: 'string',
												description: 'Error message'
											},
											parameters: {
												type: 'array',
												description: 'Error parameters list',
												items: {
													type: 'object',
													description: 'Error parameters item',
													properties: {
														resources: {
															type: 'string',
															description: 'ACL resource'
														},
														fieldName: {
															type: 'string',
															description: 'Missing or invalid field name'
														},
														fieldValue: {
															type: 'string',
															description: 'Incorrect field value'
														}
													}
												}
											}
										}
									}
								},
								code: {
									type: 'integer',
									description: 'Error code'
								},
								parameters: {
									type: 'array',
									description: 'Error parameters list',
									items: {
										type: 'object',
										description: 'Error parameters item',
										properties: {
											resources: {
												type: 'string',
												description: 'ACL resource'
											},
											fieldName: {
												type: 'string',
												description: 'Missing or invalid field name'
											},
											fieldValue: {
												type: 'string',
												description: 'Incorrect field value'
											}
										}
									}
								},
								trace: {
									type: 'string',
									description: 'Stack trace'
								}
							},
							required: [
								'message'
							]
						}
					},
					default: {
						description: 'Unexpected error',
						schema: {
							type: 'object',
							properties: {
								message: {
									type: 'string',
									description: 'Error message'
								},
								errors: {
									type: 'array',
									description: 'Errors list',
									items: {
										type: 'object',
										description: 'Error details',
										properties: {
											message: {
												type: 'string',
												description: 'Error message'
											},
											parameters: {
												type: 'array',
												description: 'Error parameters list',
												items: {
													type: 'object',
													description: 'Error parameters item',
													properties: {
														resources: {
															type: 'string',
															description: 'ACL resource'
														},
														fieldName: {
															type: 'string',
															description: 'Missing or invalid field name'
														},
														fieldValue: {
															type: 'string',
															description: 'Incorrect field value'
														}
													}
												}
											}
										}
									}
								},
								code: {
									type: 'integer',
									description: 'Error code'
								},
								parameters: {
									type: 'array',
									description: 'Error parameters list',
									items: {
										type: 'object',
										description: 'Error parameters item',
										properties: {
											resources: {
												type: 'string',
												description: 'ACL resource'
											},
											fieldName: {
												type: 'string',
												description: 'Missing or invalid field name'
											},
											fieldValue: {
												type: 'string',
												description: 'Incorrect field value'
											}
										}
									}
								},
								trace: {
									type: 'string',
									description: 'Stack trace'
								}
							},
							required: [
								'message'
							]
						}
					}
				}
			}
		},
		'/V1/customers': {
			post: {
				tags: [
					'customerAccountManagementV1'
				],
				description: 'Create customer account. Perform ' +
					'necessary business operations like ' +
					'sending email.',
				operationId: 'customerAccountManagementV1CreateAccountPost',
				parameters: [
					{
						name: 'customerAccountManagementV1CreateAccountPostBody',
						in: 'body',
						schema: {
							required: [
								'customer'
							],
							properties: {
								customer: {
									type: 'object',
									description: 'Customer interface.',
									properties: {
										id: {
											type: 'integer',
											description: 'Customer id'
										},
										group_id: {
											type: 'integer',
											description: 'Group id'
										},
										default_billing: {
											type: 'string',
											description: 'Default billing address id'
										},
										default_shipping: {
											type: 'string',
											description: 'Default shipping address id'
										},
										confirmation: {
											type: 'string',
											description: 'Confirmation'
										},
										created_at: {
											type: 'string',
											description: 'Created at time'
										},
										updated_at: {
											type: 'string',
											description: 'Updated at time'
										},
										created_in: {
											type: 'string',
											description: 'Created in area'
										},
										dob: {
											type: 'string',
											description: 'Date of birth'
										},
										email: {
											type: 'string',
											description: 'Email address'
										},
										firstname: {
											type: 'string',
											description: 'First name'
										},
										lastname: {
											type: 'string',
											description: 'Last name'
										},
										middlename: {
											type: 'string',
											description: 'Middle name'
										},
										prefix: {
											type: 'string',
											description: 'Prefix'
										},
										suffix: {
											type: 'string',
											description: 'Suffix'
										},
										gender: {
											type: 'integer',
											description: 'Gender'
										},
										store_id: {
											type: 'integer',
											description: 'Store id'
										},
										taxvat: {
											type: 'string',
											description: 'Tax Vat'
										},
										website_id: {
											type: 'integer',
											description: 'Website id'
										},
										addresses: {
											type: 'array',
											description: 'Customer addresses.',
											items: {
												type: 'object',
												description: 'Customer address interface.',
												properties: {
													id: {
														type: 'integer',
														description: 'ID'
													},
													customer_id: {
														type: 'integer',
														description: 'Customer ID'
													},
													region: {
														type: 'object',
														description: 'Customer address ' +
															'region interface.',
														properties: {
															region_code: {
																type: 'string',
																description: 'Region code'
															},
															region: {
																type: 'string',
																description: 'Region'
															},
															region_id: {
																type: 'integer',
																description: 'Region id'
															},
															extension_attributes: {
																type: 'object',
																description: 'ExtensionInterface class ' +
																	'for @see ' +
																	'\\Magento\\Customer\\Api\\Data\\RegionInterface'
															}
														},
														required: [
															'region_code',
															'region',
															'region_id'
														]
													},
													region_id: {
														type: 'integer',
														description: 'Region ID'
													},
													country_id: {
														type: 'string',
														description: 'Country code in ' +
															'ISO_3166-2 format'
													},
													street: {
														type: 'array',
														description: 'Street',
														items: {
															type: 'string'
														}
													},
													company: {
														type: 'string',
														description: 'Company'
													},
													telephone: {
														type: 'string',
														description: 'Telephone number'
													},
													fax: {
														type: 'string',
														description: 'Fax number'
													},
													postcode: {
														type: 'string',
														description: 'Postcode'
													},
													city: {
														type: 'string',
														description: 'City name'
													},
													firstname: {
														type: 'string',
														description: 'First name'
													},
													lastname: {
														type: 'string',
														description: 'Last name'
													},
													middlename: {
														type: 'string',
														description: 'Middle name'
													},
													prefix: {
														type: 'string',
														description: 'Prefix'
													},
													suffix: {
														type: 'string',
														description: 'Suffix'
													},
													vat_id: {
														type: 'string',
														description: 'Vat id'
													},
													default_shipping: {
														type: 'boolean',
														description: 'If this address is ' +
															'default shipping ' +
															'address.'
													},
													default_billing: {
														type: 'boolean',
														description: 'If this address is ' +
															'default billing ' +
															'address'
													},
													extension_attributes: {
														type: 'object',
														description: 'ExtensionInterface class ' +
															'for @see ' +
															'\\Magento\\Customer\\Api\\Data\\AddressInterface'
													},
													custom_attributes: {
														type: 'array',
														description: 'Custom attributes values.',
														items: {
															type: 'object',
															description: 'Interface for ' +
																'custom attribute ' +
																'value.',
															properties: {
																attribute_code: {
																	type: 'string',
																	description: 'Attribute code'
																},
																value: {
																	type: 'string',
																	description: 'Attribute value'
																}
															},
															required: [
																'attribute_code',
																'value'
															]
														}
													}
												}
											}
										},
										disable_auto_group_change: {
											type: 'integer',
											description: 'Disable auto group change flag.'
										},
										extension_attributes: {
											type: 'object',
											description: 'ExtensionInterface class ' +
												'for @see ' +
												'\\Magento\\Customer\\Api\\Data\\CustomerInterface',
											properties: {
												is_subscribed: {
													type: 'boolean'
												},
												amazon_id: {
													type: 'string'
												},
												vertex_customer_code: {
													type: 'string'
												}
											}
										},
										custom_attributes: {
											type: 'array',
											description: 'Custom attributes values.',
											items: {
												type: 'object',
												description: 'Interface for ' +
													'custom attribute ' +
													'value.',
												properties: {
													attribute_code: {
														type: 'string',
														description: 'Attribute code'
													},
													value: {
														type: 'string',
														description: 'Attribute value'
													}
												},
												required: [
													'attribute_code',
													'value'
												]
											}
										}
									},
									required: [
										'email',
										'firstname',
										'lastname'
									]
								},
								password: {
									type: 'string'
								},
								redirectUrl: {
									type: 'string'
								}
							},
							type: 'object'
						}
					}
				],
				responses: {
					'200': {
						description: '200 Success.',
						schema: {
							type: 'object',
							description: 'Customer interface.',
							properties: {
								id: {
									type: 'integer',
									description: 'Customer id'
								},
								group_id: {
									type: 'integer',
									description: 'Group id'
								},
								default_billing: {
									type: 'string',
									description: 'Default billing address id'
								},
								default_shipping: {
									type: 'string',
									description: 'Default shipping address id'
								},
								confirmation: {
									type: 'string',
									description: 'Confirmation'
								},
								created_at: {
									type: 'string',
									description: 'Created at time'
								},
								updated_at: {
									type: 'string',
									description: 'Updated at time'
								},
								created_in: {
									type: 'string',
									description: 'Created in area'
								},
								dob: {
									type: 'string',
									description: 'Date of birth'
								},
								email: {
									type: 'string',
									description: 'Email address'
								},
								firstname: {
									type: 'string',
									description: 'First name'
								},
								lastname: {
									type: 'string',
									description: 'Last name'
								},
								middlename: {
									type: 'string',
									description: 'Middle name'
								},
								prefix: {
									type: 'string',
									description: 'Prefix'
								},
								suffix: {
									type: 'string',
									description: 'Suffix'
								},
								gender: {
									type: 'integer',
									description: 'Gender'
								},
								store_id: {
									type: 'integer',
									description: 'Store id'
								},
								taxvat: {
									type: 'string',
									description: 'Tax Vat'
								},
								website_id: {
									type: 'integer',
									description: 'Website id'
								},
								addresses: {
									type: 'array',
									description: 'Customer addresses.',
									items: {
										type: 'object',
										description: 'Customer address interface.',
										properties: {
											id: {
												type: 'integer',
												description: 'ID'
											},
											customer_id: {
												type: 'integer',
												description: 'Customer ID'
											},
											region: {
												type: 'object',
												description: 'Customer address region interface.',
												properties: {
													region_code: {
														type: 'string',
														description: 'Region code'
													},
													region: {
														type: 'string',
														description: 'Region'
													},
													region_id: {
														type: 'integer',
														description: 'Region id'
													},
													extension_attributes: {
														type: 'object',
														description: 'ExtensionInterface class ' +
															'for @see ' +
															'\\Magento\\Customer\\Api\\Data\\RegionInterface'
													}
												},
												required: [
													'region_code',
													'region',
													'region_id'
												]
											},
											region_id: {
												type: 'integer',
												description: 'Region ID'
											},
											country_id: {
												type: 'string',
												description: 'Country code in ISO_3166-2 format'
											},
											street: {
												type: 'array',
												description: 'Street',
												items: {
													type: 'string'
												}
											},
											company: {
												type: 'string',
												description: 'Company'
											},
											telephone: {
												type: 'string',
												description: 'Telephone number'
											},
											fax: {
												type: 'string',
												description: 'Fax number'
											},
											postcode: {
												type: 'string',
												description: 'Postcode'
											},
											city: {
												type: 'string',
												description: 'City name'
											},
											firstname: {
												type: 'string',
												description: 'First name'
											},
											lastname: {
												type: 'string',
												description: 'Last name'
											},
											middlename: {
												type: 'string',
												description: 'Middle name'
											},
											prefix: {
												type: 'string',
												description: 'Prefix'
											},
											suffix: {
												type: 'string',
												description: 'Suffix'
											},
											vat_id: {
												type: 'string',
												description: 'Vat id'
											},
											default_shipping: {
												type: 'boolean',
												description: 'If this address is ' +
													'default shipping ' +
													'address.'
											},
											default_billing: {
												type: 'boolean',
												description: 'If this address is ' +
													'default billing ' +
													'address'
											},
											extension_attributes: {
												type: 'object',
												description: 'ExtensionInterface class ' +
													'for @see ' +
													'\\Magento\\Customer\\Api\\Data\\AddressInterface'
											},
											custom_attributes: {
												type: 'array',
												description: 'Custom attributes values.',
												items: {
													type: 'object',
													description: 'Interface for ' +
														'custom attribute ' +
														'value.',
													properties: {
														attribute_code: {
															type: 'string',
															description: 'Attribute code'
														},
														value: {
															type: 'string',
															description: 'Attribute value'
														}
													},
													required: [
														'attribute_code',
														'value'
													]
												}
											}
										}
									}
								},
								disable_auto_group_change: {
									type: 'integer',
									description: 'Disable auto group change flag.'
								},
								extension_attributes: {
									type: 'object',
									description: 'ExtensionInterface class for @see ' +
										'\\Magento\\Customer\\Api\\Data\\CustomerInterface',
									properties: {
										is_subscribed: {
											type: 'boolean'
										},
										amazon_id: {
											type: 'string'
										},
										vertex_customer_code: {
											type: 'string'
										}
									}
								},
								custom_attributes: {
									type: 'array',
									description: 'Custom attributes values.',
									items: {
										type: 'object',
										description: 'Interface for custom attribute value.',
										properties: {
											attribute_code: {
												type: 'string',
												description: 'Attribute code'
											},
											value: {
												type: 'string',
												description: 'Attribute value'
											}
										},
										required: [
											'attribute_code',
											'value'
										]
									}
								}
							},
							required: [
								'email',
								'firstname',
								'lastname'
							]
						}
					},
					'500': {
						description: 'Internal Server error',
						schema: {
							type: 'object',
							properties: {
								message: {
									type: 'string',
									description: 'Error message'
								},
								errors: {
									type: 'array',
									description: 'Errors list',
									items: {
										type: 'object',
										description: 'Error details',
										properties: {
											message: {
												type: 'string',
												description: 'Error message'
											},
											parameters: {
												type: 'array',
												description: 'Error parameters list',
												items: {
													type: 'object',
													description: 'Error parameters item',
													properties: {
														resources: {
															type: 'string',
															description: 'ACL resource'
														},
														fieldName: {
															type: 'string',
															description: 'Missing or invalid field name'
														},
														fieldValue: {
															type: 'string',
															description: 'Incorrect field value'
														}
													}
												}
											}
										}
									}
								},
								code: {
									type: 'integer',
									description: 'Error code'
								},
								parameters: {
									type: 'array',
									description: 'Error parameters list',
									items: {
										type: 'object',
										description: 'Error parameters item',
										properties: {
											resources: {
												type: 'string',
												description: 'ACL resource'
											},
											fieldName: {
												type: 'string',
												description: 'Missing or invalid field name'
											},
											fieldValue: {
												type: 'string',
												description: 'Incorrect field value'
											}
										}
									}
								},
								trace: {
									type: 'string',
									description: 'Stack trace'
								}
							},
							required: [
								'message'
							]
						}
					},
					default: {
						description: 'Unexpected error',
						schema: {
							type: 'object',
							properties: {
								message: {
									type: 'string',
									description: 'Error message'
								},
								errors: {
									type: 'array',
									description: 'Errors list',
									items: {
										type: 'object',
										description: 'Error details',
										properties: {
											message: {
												type: 'string',
												description: 'Error message'
											},
											parameters: {
												type: 'array',
												description: 'Error parameters list',
												items: {
													type: 'object',
													description: 'Error parameters item',
													properties: {
														resources: {
															type: 'string',
															description: 'ACL resource'
														},
														fieldName: {
															type: 'string',
															description: 'Missing or invalid field name'
														},
														fieldValue: {
															type: 'string',
															description: 'Incorrect field value'
														}
													}
												}
											}
										}
									}
								},
								code: {
									type: 'integer',
									description: 'Error code'
								},
								parameters: {
									type: 'array',
									description: 'Error parameters list',
									items: {
										type: 'object',
										description: 'Error parameters item',
										properties: {
											resources: {
												type: 'string',
												description: 'ACL resource'
											},
											fieldName: {
												type: 'string',
												description: 'Missing or invalid field name'
											},
											fieldValue: {
												type: 'string',
												description: 'Incorrect field value'
											}
										}
									}
								},
								trace: {
									type: 'string',
									description: 'Stack trace'
								}
							},
							required: [
								'message'
							]
						}
					}
				}
			}
		},
		'/V1/customers/{customerId}/password/resetLinkToken/{resetPasswordLinkToken}': {
			get: {
				tags: [
					'customerAccountManagementV1'
				],
				description: 'Check if password reset token is valid.',
				operationId: 'customerAccountManagementV1ValidateResetPasswordLinkTokenGet',
				parameters: [
					{
						name: 'customerId',
						in: 'path',
						type: 'integer',
						required: true,
						description: 'If 0 is given then a customer ' +
							'will be matched by the RP ' +
							'token.'
					},
					{
						name: 'resetPasswordLinkToken',
						in: 'path',
						type: 'string',
						required: true
					}
				],
				responses: {
					'200': {
						description: '200 Success.',
						schema: {
							type: 'boolean',
							description: 'True if the token is valid'
						}
					},
					'400': {
						description: '400 Bad Request',
						schema: {
							type: 'object',
							properties: {
								message: {
									type: 'string',
									description: 'Error message'
								},
								errors: {
									type: 'array',
									description: 'Errors list',
									items: {
										type: 'object',
										description: 'Error details',
										properties: {
											message: {
												type: 'string',
												description: 'Error message'
											},
											parameters: {
												type: 'array',
												description: 'Error parameters list',
												items: {
													type: 'object',
													description: 'Error parameters item',
													properties: {
														resources: {
															type: 'string',
															description: 'ACL resource'
														},
														fieldName: {
															type: 'string',
															description: 'Missing or invalid field name'
														},
														fieldValue: {
															type: 'string',
															description: 'Incorrect field value'
														}
													}
												}
											}
										}
									}
								},
								code: {
									type: 'integer',
									description: 'Error code'
								},
								parameters: {
									type: 'array',
									description: 'Error parameters list',
									items: {
										type: 'object',
										description: 'Error parameters item',
										properties: {
											resources: {
												type: 'string',
												description: 'ACL resource'
											},
											fieldName: {
												type: 'string',
												description: 'Missing or invalid field name'
											},
											fieldValue: {
												type: 'string',
												description: 'Incorrect field value'
											}
										}
									}
								},
								trace: {
									type: 'string',
									description: 'Stack trace'
								}
							},
							required: [
								'message'
							]
						}
					},
					'500': {
						description: 'Internal Server error',
						schema: {
							type: 'object',
							properties: {
								message: {
									type: 'string',
									description: 'Error message'
								},
								errors: {
									type: 'array',
									description: 'Errors list',
									items: {
										type: 'object',
										description: 'Error details',
										properties: {
											message: {
												type: 'string',
												description: 'Error message'
											},
											parameters: {
												type: 'array',
												description: 'Error parameters list',
												items: {
													type: 'object',
													description: 'Error parameters item',
													properties: {
														resources: {
															type: 'string',
															description: 'ACL resource'
														},
														fieldName: {
															type: 'string',
															description: 'Missing or invalid field name'
														},
														fieldValue: {
															type: 'string',
															description: 'Incorrect field value'
														}
													}
												}
											}
										}
									}
								},
								code: {
									type: 'integer',
									description: 'Error code'
								},
								parameters: {
									type: 'array',
									description: 'Error parameters list',
									items: {
										type: 'object',
										description: 'Error parameters item',
										properties: {
											resources: {
												type: 'string',
												description: 'ACL resource'
											},
											fieldName: {
												type: 'string',
												description: 'Missing or invalid field name'
											},
											fieldValue: {
												type: 'string',
												description: 'Incorrect field value'
											}
										}
									}
								},
								trace: {
									type: 'string',
									description: 'Stack trace'
								}
							},
							required: [
								'message'
							]
						}
					},
					default: {
						description: 'Unexpected error',
						schema: {
							type: 'object',
							properties: {
								message: {
									type: 'string',
									description: 'Error message'
								},
								errors: {
									type: 'array',
									description: 'Errors list',
									items: {
										type: 'object',
										description: 'Error details',
										properties: {
											message: {
												type: 'string',
												description: 'Error message'
											},
											parameters: {
												type: 'array',
												description: 'Error parameters list',
												items: {
													type: 'object',
													description: 'Error parameters item',
													properties: {
														resources: {
															type: 'string',
															description: 'ACL resource'
														},
														fieldName: {
															type: 'string',
															description: 'Missing or invalid field name'
														},
														fieldValue: {
															type: 'string',
															description: 'Incorrect field value'
														}
													}
												}
											}
										}
									}
								},
								code: {
									type: 'integer',
									description: 'Error code'
								},
								parameters: {
									type: 'array',
									description: 'Error parameters list',
									items: {
										type: 'object',
										description: 'Error parameters item',
										properties: {
											resources: {
												type: 'string',
												description: 'ACL resource'
											},
											fieldName: {
												type: 'string',
												description: 'Missing or invalid field name'
											},
											fieldValue: {
												type: 'string',
												description: 'Incorrect field value'
											}
										}
									}
								},
								trace: {
									type: 'string',
									description: 'Stack trace'
								}
							},
							required: [
								'message'
							]
						}
					}
				}
			}
		},
		'/V1/customers/password': {
			put: {
				tags: [
					'customerAccountManagementV1'
				],
				description: 'Send an email to the customer ' +
					'with a password reset link.',
				operationId: 'customerAccountManagementV1InitiatePasswordResetPut',
				parameters: [
					{
						name: 'customerAccountManagementV1InitiatePasswordResetPutBody',
						in: 'body',
						schema: {
							required: [
								'email',
								'template'
							],
							properties: {
								email: {
									type: 'string'
								},
								template: {
									type: 'string'
								},
								websiteId: {
									type: 'integer'
								}
							},
							type: 'object'
						}
					}
				],
				responses: {
					'200': {
						description: '200 Success.',
						schema: {
							type: 'boolean',
							description: 'true on success'
						}
					},
					'500': {
						description: 'Internal Server error',
						schema: {
							type: 'object',
							properties: {
								message: {
									type: 'string',
									description: 'Error message'
								},
								errors: {
									type: 'array',
									description: 'Errors list',
									items: {
										type: 'object',
										description: 'Error details',
										properties: {
											message: {
												type: 'string',
												description: 'Error message'
											},
											parameters: {
												type: 'array',
												description: 'Error parameters list',
												items: {
													type: 'object',
													description: 'Error parameters item',
													properties: {
														resources: {
															type: 'string',
															description: 'ACL resource'
														},
														fieldName: {
															type: 'string',
															description: 'Missing or invalid field name'
														},
														fieldValue: {
															type: 'string',
															description: 'Incorrect field value'
														}
													}
												}
											}
										}
									}
								},
								code: {
									type: 'integer',
									description: 'Error code'
								},
								parameters: {
									type: 'array',
									description: 'Error parameters list',
									items: {
										type: 'object',
										description: 'Error parameters item',
										properties: {
											resources: {
												type: 'string',
												description: 'ACL resource'
											},
											fieldName: {
												type: 'string',
												description: 'Missing or invalid field name'
											},
											fieldValue: {
												type: 'string',
												description: 'Incorrect field value'
											}
										}
									}
								},
								trace: {
									type: 'string',
									description: 'Stack trace'
								}
							},
							required: [
								'message'
							]
						}
					},
					default: {
						description: 'Unexpected error',
						schema: {
							type: 'object',
							properties: {
								message: {
									type: 'string',
									description: 'Error message'
								},
								errors: {
									type: 'array',
									description: 'Errors list',
									items: {
										type: 'object',
										description: 'Error details',
										properties: {
											message: {
												type: 'string',
												description: 'Error message'
											},
											parameters: {
												type: 'array',
												description: 'Error parameters list',
												items: {
													type: 'object',
													description: 'Error parameters item',
													properties: {
														resources: {
															type: 'string',
															description: 'ACL resource'
														},
														fieldName: {
															type: 'string',
															description: 'Missing or invalid field name'
														},
														fieldValue: {
															type: 'string',
															description: 'Incorrect field value'
														}
													}
												}
											}
										}
									}
								},
								code: {
									type: 'integer',
									description: 'Error code'
								},
								parameters: {
									type: 'array',
									description: 'Error parameters list',
									items: {
										type: 'object',
										description: 'Error parameters item',
										properties: {
											resources: {
												type: 'string',
												description: 'ACL resource'
											},
											fieldName: {
												type: 'string',
												description: 'Missing or invalid field name'
											},
											fieldValue: {
												type: 'string',
												description: 'Incorrect field value'
											}
										}
									}
								},
								trace: {
									type: 'string',
									description: 'Stack trace'
								}
							},
							required: [
								'message'
							]
						}
					}
				}
			}
		},
		'/V1/customers/resetPassword': {
			post: {
				tags: [
					'customerAccountManagementV1'
				],
				description: 'Reset customer password.',
				operationId: 'customerAccountManagementV1ResetPasswordPost',
				parameters: [
					{
						name: 'customerAccountManagementV1ResetPasswordPostBody',
						in: 'body',
						schema: {
							required: [
								'email',
								'resetToken',
								'newPassword'
							],
							properties: {
								email: {
									type: 'string',
									description: 'If empty value given then the ' +
										'customer will be matched by the RP ' +
										'token.'
								},
								resetToken: {
									type: 'string'
								},
								newPassword: {
									type: 'string'
								}
							},
							type: 'object'
						}
					}
				],
				responses: {
					'200': {
						description: '200 Success.',
						schema: {
							type: 'boolean',
							description: 'true on success'
						}
					},
					'500': {
						description: 'Internal Server error',
						schema: {
							type: 'object',
							properties: {
								message: {
									type: 'string',
									description: 'Error message'
								},
								errors: {
									type: 'array',
									description: 'Errors list',
									items: {
										type: 'object',
										description: 'Error details',
										properties: {
											message: {
												type: 'string',
												description: 'Error message'
											},
											parameters: {
												type: 'array',
												description: 'Error parameters list',
												items: {
													type: 'object',
													description: 'Error parameters item',
													properties: {
														resources: {
															type: 'string',
															description: 'ACL resource'
														},
														fieldName: {
															type: 'string',
															description: 'Missing or invalid field name'
														},
														fieldValue: {
															type: 'string',
															description: 'Incorrect field value'
														}
													}
												}
											}
										}
									}
								},
								code: {
									type: 'integer',
									description: 'Error code'
								},
								parameters: {
									type: 'array',
									description: 'Error parameters list',
									items: {
										type: 'object',
										description: 'Error parameters item',
										properties: {
											resources: {
												type: 'string',
												description: 'ACL resource'
											},
											fieldName: {
												type: 'string',
												description: 'Missing or invalid field name'
											},
											fieldValue: {
												type: 'string',
												description: 'Incorrect field value'
											}
										}
									}
								},
								trace: {
									type: 'string',
									description: 'Stack trace'
								}
							},
							required: [
								'message'
							]
						}
					},
					default: {
						description: 'Unexpected error',
						schema: {
							type: 'object',
							properties: {
								message: {
									type: 'string',
									description: 'Error message'
								},
								errors: {
									type: 'array',
									description: 'Errors list',
									items: {
										type: 'object',
										description: 'Error details',
										properties: {
											message: {
												type: 'string',
												description: 'Error message'
											},
											parameters: {
												type: 'array',
												description: 'Error parameters list',
												items: {
													type: 'object',
													description: 'Error parameters item',
													properties: {
														resources: {
															type: 'string',
															description: 'ACL resource'
														},
														fieldName: {
															type: 'string',
															description: 'Missing or invalid field name'
														},
														fieldValue: {
															type: 'string',
															description: 'Incorrect field value'
														}
													}
												}
											}
										}
									}
								},
								code: {
									type: 'integer',
									description: 'Error code'
								},
								parameters: {
									type: 'array',
									description: 'Error parameters list',
									items: {
										type: 'object',
										description: 'Error parameters item',
										properties: {
											resources: {
												type: 'string',
												description: 'ACL resource'
											},
											fieldName: {
												type: 'string',
												description: 'Missing or invalid field name'
											},
											fieldValue: {
												type: 'string',
												description: 'Incorrect field value'
											}
										}
									}
								},
								trace: {
									type: 'string',
									description: 'Stack trace'
								}
							},
							required: [
								'message'
							]
						}
					}
				}
			}
		},
		'/V1/customers/isEmailAvailable': {
			post: {
				tags: [
					'customerAccountManagementV1'
				],
				description: 'Check if given email is associated ' +
					'with a customer account in given ' +
					'website.',
				operationId: 'customerAccountManagementV1IsEmailAvailablePost',
				parameters: [
					{
						name: 'customerAccountManagementV1IsEmailAvailablePostBody',
						in: 'body',
						schema: {
							required: [
								'customerEmail'
							],
							properties: {
								customerEmail: {
									type: 'string'
								},
								websiteId: {
									type: 'integer',
									description: 'If not set, will use the current websiteId'
								}
							},
							type: 'object'
						}
					}
				],
				responses: {
					'200': {
						description: '200 Success.',
						schema: {
							type: 'boolean'
						}
					},
					'500': {
						description: 'Internal Server error',
						schema: {
							type: 'object',
							properties: {
								message: {
									type: 'string',
									description: 'Error message'
								},
								errors: {
									type: 'array',
									description: 'Errors list',
									items: {
										type: 'object',
										description: 'Error details',
										properties: {
											message: {
												type: 'string',
												description: 'Error message'
											},
											parameters: {
												type: 'array',
												description: 'Error parameters list',
												items: {
													type: 'object',
													description: 'Error parameters item',
													properties: {
														resources: {
															type: 'string',
															description: 'ACL resource'
														},
														fieldName: {
															type: 'string',
															description: 'Missing or invalid field name'
														},
														fieldValue: {
															type: 'string',
															description: 'Incorrect field value'
														}
													}
												}
											}
										}
									}
								},
								code: {
									type: 'integer',
									description: 'Error code'
								},
								parameters: {
									type: 'array',
									description: 'Error parameters list',
									items: {
										type: 'object',
										description: 'Error parameters item',
										properties: {
											resources: {
												type: 'string',
												description: 'ACL resource'
											},
											fieldName: {
												type: 'string',
												description: 'Missing or invalid field name'
											},
											fieldValue: {
												type: 'string',
												description: 'Incorrect field value'
											}
										}
									}
								},
								trace: {
									type: 'string',
									description: 'Stack trace'
								}
							},
							required: [
								'message'
							]
						}
					},
					default: {
						description: 'Unexpected error',
						schema: {
							type: 'object',
							properties: {
								message: {
									type: 'string',
									description: 'Error message'
								},
								errors: {
									type: 'array',
									description: 'Errors list',
									items: {
										type: 'object',
										description: 'Error details',
										properties: {
											message: {
												type: 'string',
												description: 'Error message'
											},
											parameters: {
												type: 'array',
												description: 'Error parameters list',
												items: {
													type: 'object',
													description: 'Error parameters item',
													properties: {
														resources: {
															type: 'string',
															description: 'ACL resource'
														},
														fieldName: {
															type: 'string',
															description: 'Missing or invalid field name'
														},
														fieldValue: {
															type: 'string',
															description: 'Incorrect field value'
														}
													}
												}
											}
										}
									}
								},
								code: {
									type: 'integer',
									description: 'Error code'
								},
								parameters: {
									type: 'array',
									description: 'Error parameters list',
									items: {
										type: 'object',
										description: 'Error parameters item',
										properties: {
											resources: {
												type: 'string',
												description: 'ACL resource'
											},
											fieldName: {
												type: 'string',
												description: 'Missing or invalid field name'
											},
											fieldValue: {
												type: 'string',
												description: 'Incorrect field value'
											}
										}
									}
								},
								trace: {
									type: 'string',
									description: 'Stack trace'
								}
							},
							required: [
								'message'
							]
						}
					}
				}
			}
		},
		'/V1/products-render-info': {
			get: {
				tags: [
					'catalogProductRenderListV1'
				],
				description: 'Collect and retrieve the list of product render ' +
					'info This info contains raw prices and formated ' +
					'prices, product name, stock status, store_id, etc',
				operationId: 'catalogProductRenderListV1GetListGet',
				parameters: [
					{
						name: 'searchCriteria[filterGroups][0][filters][0][field]',
						in: 'query',
						type: 'string',
						description: 'Field'
					},
					{
						name: 'searchCriteria[filterGroups][0][filters][0][value]',
						in: 'query',
						type: 'string',
						description: 'Value'
					},
					{
						name: 'searchCriteria[filterGroups][0][filters][0][conditionType]',
						in: 'query',
						type: 'string',
						description: 'Condition type'
					},
					{
						name: 'searchCriteria[sortOrders][0][field]',
						in: 'query',
						type: 'string',
						description: 'Sorting field.'
					},
					{
						name: 'searchCriteria[sortOrders][0][direction]',
						in: 'query',
						type: 'string',
						description: 'Sorting direction.'
					},
					{
						name: 'searchCriteria[pageSize]',
						in: 'query',
						type: 'integer',
						description: 'Page size.'
					},
					{
						name: 'searchCriteria[currentPage]',
						in: 'query',
						type: 'integer',
						description: 'Current page.'
					},
					{
						name: 'storeId',
						in: 'query',
						type: 'integer',
						required: true
					},
					{
						name: 'currencyCode',
						in: 'query',
						type: 'string',
						required: true
					}
				],
				responses: {
					'200': {
						description: '200 Success.',
						schema: {
							type: 'object',
							description: 'Dto that holds render ' +
								'information about ' +
								'products',
							properties: {
								items: {
									type: 'array',
									description: 'List of products rendered information',
									items: {
										type: 'object',
										description: 'Represents Data Object which holds ' +
											'enough information to render product ' +
											'This information is put into part as Add ' +
											'To Cart or Add to Compare Data or Price ' +
											'Data',
										properties: {
											add_to_cart_button: {
												type: 'object',
												description: 'Button interface. This interface ' +
													'represents all manner of product ' +
													'buttons: add to cart, add to ' +
													'compare, etc... The buttons ' +
													'describes by this interface ' +
													'should have interaction with ' +
													'backend',
												properties: {
													post_data: {
														type: 'string',
														description: 'Post data'
													},
													url: {
														type: 'string',
														description: 'Url, needed to ' +
															'add product to ' +
															'cart'
													},
													required_options: {
														type: 'boolean',
														description: 'Flag whether a ' +
															'product has options ' +
															'or not'
													},
													extension_attributes: {
														type: 'object',
														description: 'ExtensionInterface class for ' +
															'@see ' +
															'\\Magento\\Catalog\\Api\\Data\\ProductRender\\ButtonInterface'
													}
												},
												required: [
													'post_data',
													'url',
													'required_options'
												]
											},
											add_to_compare_button: {
												type: 'object',
												description: 'Button interface. This interface ' +
													'represents all manner of product ' +
													'buttons: add to cart, add to ' +
													'compare, etc... The buttons ' +
													'describes by this interface ' +
													'should have interaction with ' +
													'backend',
												properties: {
													post_data: {
														type: 'string',
														description: 'Post data'
													},
													url: {
														type: 'string',
														description: 'Url, needed to ' +
															'add product to ' +
															'cart'
													},
													required_options: {
														type: 'boolean',
														description: 'Flag whether a ' +
															'product has options ' +
															'or not'
													},
													extension_attributes: {
														type: 'object',
														description: 'ExtensionInterface class for ' +
															'@see ' +
															'\\Magento\\Catalog\\Api\\Data\\ProductRender\\ButtonInterface'
													}
												},
												required: [
													'post_data',
													'url',
													'required_options'
												]
											},
											price_info: {
												type: 'object',
												description: 'Price interface.',
												properties: {
													final_price: {
														type: 'number',
														description: 'Final price'
													},
													max_price: {
														type: 'number',
														description: 'Max price of a product'
													},
													max_regular_price: {
														type: 'number',
														description: 'Max regular price'
													},
													minimal_regular_price: {
														type: 'number',
														description: 'Minimal regular price'
													},
													special_price: {
														type: 'number',
														description: 'Special price'
													},
													minimal_price: {
														type: 'number'
													},
													regular_price: {
														type: 'number',
														description: 'Regular price'
													},
													formatted_prices: {
														type: 'object',
														description: 'Formatted Price interface. ' +
															'Aggregate formatted html with ' +
															'price representations. E.g.: ' +
															'<span ' +
															'class="price">$9.00</span> ' +
															'Consider currency, rounding and ' +
															'html',
														properties: {
															final_price: {
																type: 'string',
																description: 'Html with final price'
															},
															max_price: {
																type: 'string',
																description: 'Max price of a product'
															},
															minimal_price: {
																type: 'string',
																description: 'The minimal price of ' +
																	'the product or ' +
																	'variation'
															},
															max_regular_price: {
																type: 'string',
																description: 'Max regular price'
															},
															minimal_regular_price: {
																type: 'string',
																description: 'Minimal regular price'
															},
															special_price: {
																type: 'string',
																description: 'Special price'
															},
															regular_price: {
																type: 'string',
																description: 'Price - is price of ' +
																	'product without ' +
																	'discounts and special ' +
																	'price with taxes and ' +
																	'fixed product tax'
															},
															extension_attributes: {
																type: 'object',
																description: 'ExtensionInterface class ' +
																	'for @see ' +
																	'\\Magento\\Catalog\\Api\\Data\\ProductRender\\FormattedPriceInfoInterface'
															}
														},
														required: [
															'final_price',
															'max_price',
															'minimal_price',
															'max_regular_price',
															'minimal_regular_price',
															'special_price',
															'regular_price'
														]
													},
													extension_attributes: {
														type: 'object',
														description: 'ExtensionInterface class for ' +
															'@see ' +
															'\\Magento\\Catalog\\Api\\Data\\ProductRender\\PriceInfoInterface',
														properties: {
															msrp: {
																type: 'object',
																description: 'Price interface.',
																properties: {
																	msrp_price: {
																		type: 'string'
																	},
																	is_applicable: {
																		type: 'string'
																	},
																	is_shown_price_on_gesture: {
																		type: 'string'
																	},
																	msrp_message: {
																		type: 'string'
																	},
																	explanation_message: {
																		type: 'string'
																	},
																	extension_attributes: {
																		type: 'object',
																		description: 'ExtensionInterface class ' +
																			'for @see ' +
																			'\\Magento\\Msrp\\Api\\Data\\ProductRender\\MsrpPriceInfoInterface'
																	}
																},
																required: [
																	'msrp_price',
																	'is_applicable',
																	'is_shown_price_on_gesture',
																	'msrp_message',
																	'explanation_message'
																]
															},
															tax_adjustments: [Circular],
															weee_attributes: {
																type: 'array',
																items: {
																	type: 'object',
																	description: 'List of all weee ' +
																		'attributes, their ' +
																		'amounts, etc.., that ' +
																		'product has',
																	properties: {
																		amount: {
																			type: 'string',
																			description: 'Weee attribute amount'
																		},
																		tax_amount: {
																			type: 'string',
																			description: 'Tax which is ' +
																				'calculated to ' +
																				'fixed product tax ' +
																				'attribute'
																		},
																		tax_amount_incl_tax: {
																			type: 'string',
																			description: 'Tax amount of ' +
																				'weee attribute'
																		},
																		amount_excl_tax: {
																			type: 'string',
																			description: 'Product amount ' +
																				'exclude tax'
																		},
																		attribute_code: {
																			type: 'string',
																			description: 'Weee attribute code'
																		},
																		extension_attributes: {
																			type: 'object',
																			description: 'ExtensionInterface ' +
																				'class for @see ' +
																				'\\Magento\\Weee\\Api\\Data\\ProductRender\\WeeeAdjustmentAttributeInterface'
																		}
																	},
																	required: [
																		'amount',
																		'tax_amount',
																		'tax_amount_incl_tax',
																		'amount_excl_tax',
																		'attribute_code',
																		'extension_attributes'
																	]
																}
															},
															weee_adjustment: {
																type: 'string'
															}
														}
													}
												},
												required: [
													'final_price',
													'max_price',
													'max_regular_price',
													'minimal_regular_price',
													'special_price',
													'minimal_price',
													'regular_price',
													'formatted_prices'
												]
											},
											images: {
												type: 'array',
												description: 'Enough information, that ' +
													'needed to render image on ' +
													'front',
												items: {
													type: 'object',
													description: 'Product Render image interface. ' +
														'Represents physical ' +
														'characteristics of image, that ' +
														'can be used in product listing or ' +
														'product view',
													properties: {
														url: {
															type: 'string',
															description: 'Image url'
														},
														code: {
															type: 'string',
															description: 'Image code'
														},
														height: {
															type: 'number',
															description: 'Image height'
														},
														width: {
															type: 'number',
															description: 'Image width in px'
														},
														label: {
															type: 'string',
															description: 'Image label'
														},
														resized_width: {
															type: 'number',
															description: 'Resize width'
														},
														resized_height: {
															type: 'number',
															description: 'Resize height'
														},
														extension_attributes: {
															type: 'object',
															description: 'ExtensionInterface class for ' +
																'@see ' +
																'\\Magento\\Catalog\\Api\\Data\\ProductRender\\ImageInterface'
														}
													},
													required: [
														'url',
														'code',
														'height',
														'width',
														'label',
														'resized_width',
														'resized_height'
													]
												}
											},
											url: {
												type: 'string',
												description: 'Product url'
											},
											id: {
												type: 'integer',
												description: 'Product identifier'
											},
											name: {
												type: 'string',
												description: 'Product name'
											},
											type: {
												type: 'string',
												description: 'Product type. Such as ' +
													'bundle, grouped, simple, ' +
													'etc...'
											},
											is_salable: {
												type: 'string',
												description: 'Information about ' +
													'product saleability (In ' +
													'Stock)'
											},
											store_id: {
												type: 'integer',
												description: 'Information about current ' +
													'store id or requested store ' +
													'id'
											},
											currency_code: {
												type: 'string',
												description: 'Current or desired ' +
													'currency code to ' +
													'product'
											},
											extension_attributes: {
												type: 'object',
												description: 'ExtensionInterface class for ' +
													'@see ' +
													'\\Magento\\Catalog\\Api\\Data\\ProductRenderInterface',
												properties: {
													review_html: {
														type: 'string'
													},
													wishlist_button: {
														type: 'object',
														description: 'Button interface. This interface ' +
															'represents all manner of product ' +
															'buttons: add to cart, add to ' +
															'compare, etc... The buttons ' +
															'describes by this interface ' +
															'should have interaction with ' +
															'backend',
														properties: {
															post_data: {
																type: 'string',
																description: 'Post data'
															},
															url: {
																type: 'string',
																description: 'Url, needed to ' +
																	'add product to ' +
																	'cart'
															},
															required_options: {
																type: 'boolean',
																description: 'Flag whether a ' +
																	'product has options ' +
																	'or not'
															},
															extension_attributes: {
																type: 'object',
																description: 'ExtensionInterface ' +
																	'class for @see ' +
																	'\\Magento\\Catalog\\Api\\Data\\ProductRender\\ButtonInterface'
															}
														},
														required: [
															'post_data',
															'url',
															'required_options'
														]
													}
												}
											}
										},
										required: [
											'add_to_cart_button',
											'add_to_compare_button',
											'price_info',
											'images',
											'url',
											'id',
											'name',
											'type',
											'is_salable',
											'store_id',
											'currency_code',
											'extension_attributes'
										]
									}
								}
							},
							required: [
								'items'
							]
						}
					},
					default: {
						description: 'Unexpected error',
						schema: {
							type: 'object',
							properties: {
								message: {
									type: 'string',
									description: 'Error message'
								},
								errors: {
									type: 'array',
									description: 'Errors list',
									items: {
										type: 'object',
										description: 'Error details',
										properties: {
											message: {
												type: 'string',
												description: 'Error message'
											},
											parameters: {
												type: 'array',
												description: 'Error parameters list',
												items: {
													type: 'object',
													description: 'Error parameters item',
													properties: {
														resources: {
															type: 'string',
															description: 'ACL resource'
														},
														fieldName: {
															type: 'string',
															description: 'Missing or invalid field name'
														},
														fieldValue: {
															type: 'string',
															description: 'Incorrect field value'
														}
													}
												}
											}
										}
									}
								},
								code: {
									type: 'integer',
									description: 'Error code'
								},
								parameters: {
									type: 'array',
									description: 'Error parameters list',
									items: {
										type: 'object',
										description: 'Error parameters item',
										properties: {
											resources: {
												type: 'string',
												description: 'ACL resource'
											},
											fieldName: {
												type: 'string',
												description: 'Missing or invalid field name'
											},
											fieldValue: {
												type: 'string',
												description: 'Incorrect field value'
											}
										}
									}
								},
								trace: {
									type: 'string',
									description: 'Stack trace'
								}
							},
							required: [
								'message'
							]
						}
					}
				}
			}
		},
		'/V1/guest-carts/{cartId}': {
			get: {
				tags: [
					'quoteGuestCartRepositoryV1'
				],
				description: 'Enable a guest user to return ' +
					'information for a specified ' +
					'cart.',
				operationId: 'quoteGuestCartRepositoryV1GetGet',
				parameters: [
					{
						name: 'cartId',
						in: 'path',
						type: 'string',
						required: true
					}
				],
				responses: {
					'200': {
						description: '200 Success.',
						schema: {
							type: 'object',
							description: 'Interface CartInterface',
							properties: {
								id: {
									type: 'integer',
									description: 'Cart/quote ID.'
								},
								created_at: {
									type: 'string',
									description: 'Cart creation date and ' +
										'time. Otherwise, null.'
								},
								updated_at: {
									type: 'string',
									description: 'Cart last update date ' +
										'and time. Otherwise, ' +
										'null.'
								},
								converted_at: {
									type: 'string',
									description: 'Cart conversion date and ' +
										'time. Otherwise, null.'
								},
								is_active: {
									type: 'boolean',
									description: 'Active status flag value. Otherwise, null.'
								},
								is_virtual: {
									type: 'boolean',
									description: 'Virtual flag value. Otherwise, null.'
								},
								items: {
									type: 'array',
									description: 'Array of items. Otherwise, null.',
									items: {
										type: 'object',
										description: 'Interface CartItemInterface',
										properties: {
											item_id: {
												type: 'integer',
												description: 'Item ID. Otherwise, null.'
											},
											sku: {
												type: 'string',
												description: 'Product SKU. Otherwise, null.'
											},
											qty: {
												type: 'number',
												description: 'Product quantity.'
											},
											name: {
												type: 'string',
												description: 'Product name. Otherwise, null.'
											},
											price: {
												type: 'number',
												description: 'Product price. Otherwise, null.'
											},
											product_type: {
												type: 'string',
												description: 'Product type. Otherwise, null.'
											},
											quote_id: {
												type: 'string',
												description: 'Quote id.'
											},
											product_option: {
												type: 'object',
												description: 'Product option interface',
												properties: {
													extension_attributes: {
														type: 'object',
														description: 'ExtensionInterface class ' +
															'for @see ' +
															'\\Magento\\Quote\\Api\\Data\\ProductOptionInterface',
														properties: {
															custom_options: {
																type: 'array',
																items: {
																	type: 'object',
																	description: 'Interface ' +
																		'CustomOptionInterface',
																	properties: {
																		option_id: {
																			type: 'string',
																			description: 'Option id'
																		},
																		option_value: {
																			type: 'string',
																			description: 'Option value'
																		},
																		extension_attributes: {
																			type: 'object',
																			description: 'ExtensionInterface ' +
																				'class for @see ' +
																				'\\Magento\\Catalog\\Api\\Data\\CustomOptionInterface',
																			properties: {
																				file_info: {
																					type: 'object',
																					description: 'Image Content ' +
																						'data interface',
																					properties: [Object],
																					required: [Array]
																				}
																			}
																		}
																	},
																	required: [
																		'option_id',
																		'option_value'
																	]
																}
															},
															bundle_options: {
																type: 'array',
																items: {
																	type: 'object',
																	description: 'Interface ' +
																		'BundleOptionInterface',
																	properties: {
																		option_id: {
																			type: 'integer',
																			description: 'Bundle option id.'
																		},
																		option_qty: {
																			type: 'integer',
																			description: 'Bundle option ' +
																				'quantity.'
																		},
																		option_selections: {
																			type: 'array',
																			description: 'Bundle option ' +
																				'selection ids.',
																			items: {
																				type: 'integer'
																			}
																		},
																		extension_attributes: {
																			type: 'object',
																			description: 'ExtensionInterface ' +
																				'class for @see ' +
																				'\\Magento\\Bundle\\Api\\Data\\BundleOptionInterface'
																		}
																	},
																	required: [
																		'option_id',
																		'option_qty',
																		'option_selections'
																	]
																}
															},
															downloadable_option: {
																type: 'object',
																description: 'Downloadable Option',
																properties: {
																	downloadable_links: {
																		type: 'array',
																		description: 'The list of ' +
																			'downloadable ' +
																			'links',
																		items: {
																			type: 'integer'
																		}
																	}
																},
																required: [
																	'downloadable_links'
																]
															},
															configurable_item_options: {
																type: 'array',
																items: {
																	type: 'object',
																	description: 'Interface ' +
																		'ConfigurableItemOptionValueInterface',
																	properties: {
																		option_id: {
																			type: 'string',
																			description: 'Option SKU'
																		},
																		option_value: {
																			type: 'integer',
																			description: 'Item id'
																		},
																		extension_attributes: {
																			type: 'object',
																			description: 'ExtensionInterface ' +
																				'class for @see ' +
																				'\\Magento\\ConfigurableProduct\\Api\\Data\\ConfigurableItemOptionValueInterface'
																		}
																	},
																	required: [
																		'option_id'
																	]
																}
															}
														}
													}
												}
											},
											extension_attributes: {
												type: 'object',
												description: 'ExtensionInterface class ' +
													'for @see ' +
													'\\Magento\\Quote\\Api\\Data\\CartItemInterface'
											}
										},
										required: [
											'qty',
											'quote_id'
										]
									}
								},
								items_count: {
									type: 'integer',
									description: 'Number of different items or ' +
										'products in the cart. Otherwise, ' +
										'null.'
								},
								items_qty: {
									type: 'number',
									description: 'Total quantity of all ' +
										'cart items. Otherwise, ' +
										'null.'
								},
								customer: {
									type: 'object',
									description: 'Customer interface.',
									properties: {
										id: {
											type: 'integer',
											description: 'Customer id'
										},
										group_id: {
											type: 'integer',
											description: 'Group id'
										},
										default_billing: {
											type: 'string',
											description: 'Default billing address id'
										},
										default_shipping: {
											type: 'string',
											description: 'Default shipping address id'
										},
										confirmation: {
											type: 'string',
											description: 'Confirmation'
										},
										created_at: {
											type: 'string',
											description: 'Created at time'
										},
										updated_at: {
											type: 'string',
											description: 'Updated at time'
										},
										created_in: {
											type: 'string',
											description: 'Created in area'
										},
										dob: {
											type: 'string',
											description: 'Date of birth'
										},
										email: {
											type: 'string',
											description: 'Email address'
										},
										firstname: {
											type: 'string',
											description: 'First name'
										},
										lastname: {
											type: 'string',
											description: 'Last name'
										},
										middlename: {
											type: 'string',
											description: 'Middle name'
										},
										prefix: {
											type: 'string',
											description: 'Prefix'
										},
										suffix: {
											type: 'string',
											description: 'Suffix'
										},
										gender: {
											type: 'integer',
											description: 'Gender'
										},
										store_id: {
											type: 'integer',
											description: 'Store id'
										},
										taxvat: {
											type: 'string',
											description: 'Tax Vat'
										},
										website_id: {
											type: 'integer',
											description: 'Website id'
										},
										addresses: {
											type: 'array',
											description: 'Customer addresses.',
											items: {
												type: 'object',
												description: 'Customer address interface.',
												properties: {
													id: {
														type: 'integer',
														description: 'ID'
													},
													customer_id: {
														type: 'integer',
														description: 'Customer ID'
													},
													region: {
														type: 'object',
														description: 'Customer address ' +
															'region interface.',
														properties: {
															region_code: {
																type: 'string',
																description: 'Region code'
															},
															region: {
																type: 'string',
																description: 'Region'
															},
															region_id: {
																type: 'integer',
																description: 'Region id'
															},
															extension_attributes: {
																type: 'object',
																description: 'ExtensionInterface class ' +
																	'for @see ' +
																	'\\Magento\\Customer\\Api\\Data\\RegionInterface'
															}
														},
														required: [
															'region_code',
															'region',
															'region_id'
														]
													},
													region_id: {
														type: 'integer',
														description: 'Region ID'
													},
													country_id: {
														type: 'string',
														description: 'Country code in ' +
															'ISO_3166-2 format'
													},
													street: {
														type: 'array',
														description: 'Street',
														items: {
															type: 'string'
														}
													},
													company: {
														type: 'string',
														description: 'Company'
													},
													telephone: {
														type: 'string',
														description: 'Telephone number'
													},
													fax: {
														type: 'string',
														description: 'Fax number'
													},
													postcode: {
														type: 'string',
														description: 'Postcode'
													},
													city: {
														type: 'string',
														description: 'City name'
													},
													firstname: {
														type: 'string',
														description: 'First name'
													},
													lastname: {
														type: 'string',
														description: 'Last name'
													},
													middlename: {
														type: 'string',
														description: 'Middle name'
													},
													prefix: {
														type: 'string',
														description: 'Prefix'
													},
													suffix: {
														type: 'string',
														description: 'Suffix'
													},
													vat_id: {
														type: 'string',
														description: 'Vat id'
													},
													default_shipping: {
														type: 'boolean',
														description: 'If this address is ' +
															'default shipping ' +
															'address.'
													},
													default_billing: {
														type: 'boolean',
														description: 'If this address is ' +
															'default billing ' +
															'address'
													},
													extension_attributes: {
														type: 'object',
														description: 'ExtensionInterface class ' +
															'for @see ' +
															'\\Magento\\Customer\\Api\\Data\\AddressInterface'
													},
													custom_attributes: {
														type: 'array',
														description: 'Custom attributes values.',
														items: {
															type: 'object',
															description: 'Interface for ' +
																'custom attribute ' +
																'value.',
															properties: {
																attribute_code: {
																	type: 'string',
																	description: 'Attribute code'
																},
																value: {
																	type: 'string',
																	description: 'Attribute value'
																}
															},
															required: [
																'attribute_code',
																'value'
															]
														}
													}
												}
											}
										},
										disable_auto_group_change: {
											type: 'integer',
											description: 'Disable auto group change flag.'
										},
										extension_attributes: {
											type: 'object',
											description: 'ExtensionInterface class ' +
												'for @see ' +
												'\\Magento\\Customer\\Api\\Data\\CustomerInterface',
											properties: {
												is_subscribed: {
													type: 'boolean'
												},
												amazon_id: {
													type: 'string'
												},
												vertex_customer_code: {
													type: 'string'
												}
											}
										},
										custom_attributes: {
											type: 'array',
											description: 'Custom attributes values.',
											items: {
												type: 'object',
												description: 'Interface for ' +
													'custom attribute ' +
													'value.',
												properties: {
													attribute_code: {
														type: 'string',
														description: 'Attribute code'
													},
													value: {
														type: 'string',
														description: 'Attribute value'
													}
												},
												required: [
													'attribute_code',
													'value'
												]
											}
										}
									},
									required: [
										'email',
										'firstname',
										'lastname'
									]
								},
								billing_address: {
									type: 'object',
									description: 'Interface AddressInterface',
									properties: {
										id: {
											type: 'integer',
											description: 'Id'
										},
										region: {
											type: 'string',
											description: 'Region name'
										},
										region_id: {
											type: 'integer',
											description: 'Region id'
										},
										region_code: {
											type: 'string',
											description: 'Region code'
										},
										country_id: {
											type: 'string',
											description: 'Country id'
										},
										street: {
											type: 'array',
											description: 'Street',
											items: {
												type: 'string'
											}
										},
										company: {
											type: 'string',
											description: 'Company'
										},
										telephone: {
											type: 'string',
											description: 'Telephone number'
										},
										fax: {
											type: 'string',
											description: 'Fax number'
										},
										postcode: {
											type: 'string',
											description: 'Postcode'
										},
										city: {
											type: 'string',
											description: 'City name'
										},
										firstname: {
											type: 'string',
											description: 'First name'
										},
										lastname: {
											type: 'string',
											description: 'Last name'
										},
										middlename: {
											type: 'string',
											description: 'Middle name'
										},
										prefix: {
											type: 'string',
											description: 'Prefix'
										},
										suffix: {
											type: 'string',
											description: 'Suffix'
										},
										vat_id: {
											type: 'string',
											description: 'Vat id'
										},
										customer_id: {
											type: 'integer',
											description: 'Customer id'
										},
										email: {
											type: 'string',
											description: 'Billing/shipping email'
										},
										same_as_billing: {
											type: 'integer',
											description: 'Same as billing flag'
										},
										customer_address_id: {
											type: 'integer',
											description: 'Customer address id'
										},
										save_in_address_book: {
											type: 'integer',
											description: 'Save in address book flag'
										},
										extension_attributes: {
											type: 'object',
											description: 'ExtensionInterface class for @see ' +
												'\\Magento\\Quote\\Api\\Data\\AddressInterface',
											properties: {
												checkout_fields: {
													type: 'array',
													items: {
														type: 'object',
														description: 'Interface for ' +
															'custom attribute ' +
															'value.',
														properties: {
															attribute_code: {
																type: 'string',
																description: 'Attribute code'
															},
															value: {
																type: 'string',
																description: 'Attribute value'
															}
														},
														required: [
															'attribute_code',
															'value'
														]
													}
												}
											}
										},
										custom_attributes: {
											type: 'array',
											description: 'Custom attributes values.',
											items: {
												type: 'object',
												description: 'Interface for ' +
													'custom attribute ' +
													'value.',
												properties: {
													attribute_code: {
														type: 'string',
														description: 'Attribute code'
													},
													value: {
														type: 'string',
														description: 'Attribute value'
													}
												},
												required: [
													'attribute_code',
													'value'
												]
											}
										}
									},
									required: [
										'region',
										'region_id',
										'region_code',
										'country_id',
										'street',
										'telephone',
										'postcode',
										'city',
										'firstname',
										'lastname',
										'email'
									]
								},
								reserved_order_id: {
									type: 'string',
									description: 'Reserved order ID. Otherwise, null.'
								},
								orig_order_id: {
									type: 'integer',
									description: 'Original order ID. Otherwise, null.'
								},
								currency: {
									type: 'object',
									description: 'Interface CurrencyInterface',
									properties: {
										global_currency_code: {
											type: 'string',
											description: 'Global currency code'
										},
										base_currency_code: {
											type: 'string',
											description: 'Base currency code'
										},
										store_currency_code: {
											type: 'string',
											description: 'Store currency code'
										},
										quote_currency_code: {
											type: 'string',
											description: 'Quote currency code'
										},
										store_to_base_rate: {
											type: 'number',
											description: 'Store currency to base currency rate'
										},
										store_to_quote_rate: {
											type: 'number',
											description: 'Store currency to quote currency rate'
										},
										base_to_global_rate: {
											type: 'number',
											description: 'Base currency to global currency rate'
										},
										base_to_quote_rate: {
											type: 'number',
											description: 'Base currency to quote currency rate'
										},
										extension_attributes: {
											type: 'object',
											description: 'ExtensionInterface class for @see ' +
												'\\Magento\\Quote\\Api\\Data\\CurrencyInterface'
										}
									}
								},
								customer_is_guest: {
									type: 'boolean',
									description: 'For guest customers, ' +
										'false for logged in ' +
										'customers'
								},
								customer_note: {
									type: 'string',
									description: 'Notice text'
								},
								customer_note_notify: {
									type: 'boolean',
									description: 'Customer notification flag'
								},
								customer_tax_class_id: {
									type: 'integer',
									description: 'Customer tax class ID.'
								},
								store_id: {
									type: 'integer',
									description: 'Store identifier'
								},
								extension_attributes: {
									type: 'object',
									description: 'ExtensionInterface class for @see ' +
										'\\Magento\\Quote\\Api\\Data\\CartInterface',
									properties: {
										shipping_assignments: {
											type: 'array',
											items: {
												type: 'object',
												description: 'Interface ' +
													'ShippingAssignmentInterface',
												properties: {
													shipping: {
														type: 'object',
														description: 'Interface ShippingInterface',
														properties: {
															address: {
																type: 'object',
																description: 'Interface AddressInterface',
																properties: {
																	id: {
																		type: 'integer',
																		description: 'Id'
																	},
																	region: {
																		type: 'string',
																		description: 'Region name'
																	},
																	region_id: {
																		type: 'integer',
																		description: 'Region id'
																	},
																	region_code: {
																		type: 'string',
																		description: 'Region code'
																	},
																	country_id: {
																		type: 'string',
																		description: 'Country id'
																	},
																	street: {
																		type: 'array',
																		description: 'Street',
																		items: {
																			type: 'string'
																		}
																	},
																	company: {
																		type: 'string',
																		description: 'Company'
																	},
																	telephone: {
																		type: 'string',
																		description: 'Telephone number'
																	},
																	fax: {
																		type: 'string',
																		description: 'Fax number'
																	},
																	postcode: {
																		type: 'string',
																		description: 'Postcode'
																	},
																	city: {
																		type: 'string',
																		description: 'City name'
																	},
																	firstname: {
																		type: 'string',
																		description: 'First name'
																	},
																	lastname: {
																		type: 'string',
																		description: 'Last name'
																	},
																	middlename: {
																		type: 'string',
																		description: 'Middle name'
																	},
																	prefix: {
																		type: 'string',
																		description: 'Prefix'
																	},
																	suffix: {
																		type: 'string',
																		description: 'Suffix'
																	},
																	vat_id: {
																		type: 'string',
																		description: 'Vat id'
																	},
																	customer_id: {
																		type: 'integer',
																		description: 'Customer id'
																	},
																	email: {
																		type: 'string',
																		description: 'Billing/shipping email'
																	},
																	same_as_billing: {
																		type: 'integer',
																		description: 'Same as billing flag'
																	},
																	customer_address_id: {
																		type: 'integer',
																		description: 'Customer address id'
																	},
																	save_in_address_book: {
																		type: 'integer',
																		description: 'Save in address ' +
																			'book flag'
																	},
																	extension_attributes: {
																		type: 'object',
																		description: 'ExtensionInterface ' +
																			'class for @see ' +
																			'\\Magento\\Quote\\Api\\Data\\AddressInterface',
																		properties: {
																			checkout_fields: {
																				type: 'array',
																				items: {
																					type: 'object',
																					description: 'Interface for ' +
																						'custom attribute ' +
																						'value.',
																					properties: [Object],
																					required: [Array]
																				}
																			}
																		}
																	},
																	custom_attributes: {
																		type: 'array',
																		description: 'Custom ' +
																			'attributes ' +
																			'values.',
																		items: {
																			type: 'object',
																			description: 'Interface for ' +
																				'custom attribute ' +
																				'value.',
																			properties: {
																				attribute_code: {
																					type: 'string',
																					description: 'Attribute code'
																				},
																				value: {
																					type: 'string',
																					description: 'Attribute value'
																				}
																			},
																			required: [
																				'attribute_code',
																				'value'
																			]
																		}
																	}
																},
																required: [
																	'region',
																	'region_id',
																	'region_code',
																	'country_id',
																	'street',
																	'telephone',
																	'postcode',
																	'city',
																	'firstname',
																	'lastname',
																	'email'
																]
															},
															method: {
																type: 'string',
																description: 'Shipping method'
															},
															extension_attributes: {
																type: 'object',
																description: 'ExtensionInterface class ' +
																	'for @see ' +
																	'\\Magento\\Quote\\Api\\Data\\ShippingInterface'
															}
														},
														required: [
															'address',
															'method'
														]
													},
													items: {
														type: 'array',
														items: {
															type: 'object',
															description: 'Interface CartItemInterface',
															properties: {
																item_id: {
																	type: 'integer',
																	description: 'Item ID. Otherwise, null.'
																},
																sku: {
																	type: 'string',
																	description: 'Product SKU. ' +
																		'Otherwise, null.'
																},
																qty: {
																	type: 'number',
																	description: 'Product quantity.'
																},
																name: {
																	type: 'string',
																	description: 'Product name. ' +
																		'Otherwise, null.'
																},
																price: {
																	type: 'number',
																	description: 'Product price. ' +
																		'Otherwise, null.'
																},
																product_type: {
																	type: 'string',
																	description: 'Product type. ' +
																		'Otherwise, null.'
																},
																quote_id: {
																	type: 'string',
																	description: 'Quote id.'
																},
																product_option: {
																	type: 'object',
																	description: 'Product option interface',
																	properties: {
																		extension_attributes: {
																			type: 'object',
																			description: 'ExtensionInterface ' +
																				'class for @see ' +
																				'\\Magento\\Quote\\Api\\Data\\ProductOptionInterface',
																			properties: {
																				custom_options: {
																					type: 'array',
																					items: [Object]
																				},
																				bundle_options: {
																					type: 'array',
																					items: [Object]
																				},
																				downloadable_option: {
																					type: 'object',
																					description: 'Downloadable ' +
																						'Option',
																					properties: [Object],
																					required: [Array]
																				},
																				configurable_item_options: {
																					type: 'array',
																					items: [Object]
																				}
																			}
																		}
																	}
																},
																extension_attributes: {
																	type: 'object',
																	description: 'ExtensionInterface class ' +
																		'for @see ' +
																		'\\Magento\\Quote\\Api\\Data\\CartItemInterface'
																}
															},
															required: [
																'qty',
																'quote_id'
															]
														}
													},
													extension_attributes: {
														type: 'object',
														description: 'ExtensionInterface class for ' +
															'@see ' +
															'\\Magento\\Quote\\Api\\Data\\ShippingAssignmentInterface'
													}
												},
												required: [
													'shipping',
													'items'
												]
											}
										},
										amazon_order_reference_id: {
											type: 'string'
										}
									}
								}
							},
							required: [
								'id',
								'customer',
								'store_id'
							]
						}
					},
					'400': {
						description: '400 Bad Request',
						schema: {
							type: 'object',
							properties: {
								message: {
									type: 'string',
									description: 'Error message'
								},
								errors: {
									type: 'array',
									description: 'Errors list',
									items: {
										type: 'object',
										description: 'Error details',
										properties: {
											message: {
												type: 'string',
												description: 'Error message'
											},
											parameters: {
												type: 'array',
												description: 'Error parameters list',
												items: {
													type: 'object',
													description: 'Error parameters item',
													properties: {
														resources: {
															type: 'string',
															description: 'ACL resource'
														},
														fieldName: {
															type: 'string',
															description: 'Missing or invalid field name'
														},
														fieldValue: {
															type: 'string',
															description: 'Incorrect field value'
														}
													}
												}
											}
										}
									}
								},
								code: {
									type: 'integer',
									description: 'Error code'
								},
								parameters: {
									type: 'array',
									description: 'Error parameters list',
									items: {
										type: 'object',
										description: 'Error parameters item',
										properties: {
											resources: {
												type: 'string',
												description: 'ACL resource'
											},
											fieldName: {
												type: 'string',
												description: 'Missing or invalid field name'
											},
											fieldValue: {
												type: 'string',
												description: 'Incorrect field value'
											}
										}
									}
								},
								trace: {
									type: 'string',
									description: 'Stack trace'
								}
							},
							required: [
								'message'
							]
						}
					},
					default: {
						description: 'Unexpected error',
						schema: {
							type: 'object',
							properties: {
								message: {
									type: 'string',
									description: 'Error message'
								},
								errors: {
									type: 'array',
									description: 'Errors list',
									items: {
										type: 'object',
										description: 'Error details',
										properties: {
											message: {
												type: 'string',
												description: 'Error message'
											},
											parameters: {
												type: 'array',
												description: 'Error parameters list',
												items: {
													type: 'object',
													description: 'Error parameters item',
													properties: {
														resources: {
															type: 'string',
															description: 'ACL resource'
														},
														fieldName: {
															type: 'string',
															description: 'Missing or invalid field name'
														},
														fieldValue: {
															type: 'string',
															description: 'Incorrect field value'
														}
													}
												}
											}
										}
									}
								},
								code: {
									type: 'integer',
									description: 'Error code'
								},
								parameters: {
									type: 'array',
									description: 'Error parameters list',
									items: {
										type: 'object',
										description: 'Error parameters item',
										properties: {
											resources: {
												type: 'string',
												description: 'ACL resource'
											},
											fieldName: {
												type: 'string',
												description: 'Missing or invalid field name'
											},
											fieldValue: {
												type: 'string',
												description: 'Incorrect field value'
											}
										}
									}
								},
								trace: {
									type: 'string',
									description: 'Stack trace'
								}
							},
							required: [
								'message'
							]
						}
					}
				}
			}
		},
		'/V1/guest-carts': {
			post: {
				tags: [
					'quoteGuestCartManagementV1'
				],
				description: 'Enable an customer or guest user to create an ' +
					'empty cart and quote for an anonymous customer.',
				operationId: 'quoteGuestCartManagementV1CreateEmptyCartPost',
				responses: {
					'200': {
						description: '200 Success.',
						schema: {
							type: 'string',
							description: 'Cart ID.'
						}
					},
					'400': {
						description: '400 Bad Request',
						schema: {
							type: 'object',
							properties: {
								message: {
									type: 'string',
									description: 'Error message'
								},
								errors: {
									type: 'array',
									description: 'Errors list',
									items: {
										type: 'object',
										description: 'Error details',
										properties: {
											message: {
												type: 'string',
												description: 'Error message'
											},
											parameters: {
												type: 'array',
												description: 'Error parameters list',
												items: {
													type: 'object',
													description: 'Error parameters item',
													properties: {
														resources: {
															type: 'string',
															description: 'ACL resource'
														},
														fieldName: {
															type: 'string',
															description: 'Missing or invalid field name'
														},
														fieldValue: {
															type: 'string',
															description: 'Incorrect field value'
														}
													}
												}
											}
										}
									}
								},
								code: {
									type: 'integer',
									description: 'Error code'
								},
								parameters: {
									type: 'array',
									description: 'Error parameters list',
									items: {
										type: 'object',
										description: 'Error parameters item',
										properties: {
											resources: {
												type: 'string',
												description: 'ACL resource'
											},
											fieldName: {
												type: 'string',
												description: 'Missing or invalid field name'
											},
											fieldValue: {
												type: 'string',
												description: 'Incorrect field value'
											}
										}
									}
								},
								trace: {
									type: 'string',
									description: 'Stack trace'
								}
							},
							required: [
								'message'
							]
						}
					},
					default: {
						description: 'Unexpected error',
						schema: {
							type: 'object',
							properties: {
								message: {
									type: 'string',
									description: 'Error message'
								},
								errors: {
									type: 'array',
									description: 'Errors list',
									items: {
										type: 'object',
										description: 'Error details',
										properties: {
											message: {
												type: 'string',
												description: 'Error message'
											},
											parameters: {
												type: 'array',
												description: 'Error parameters list',
												items: {
													type: 'object',
													description: 'Error parameters item',
													properties: {
														resources: {
															type: 'string',
															description: 'ACL resource'
														},
														fieldName: {
															type: 'string',
															description: 'Missing or invalid field name'
														},
														fieldValue: {
															type: 'string',
															description: 'Incorrect field value'
														}
													}
												}
											}
										}
									}
								},
								code: {
									type: 'integer',
									description: 'Error code'
								},
								parameters: {
									type: 'array',
									description: 'Error parameters list',
									items: {
										type: 'object',
										description: 'Error parameters item',
										properties: {
											resources: {
												type: 'string',
												description: 'ACL resource'
											},
											fieldName: {
												type: 'string',
												description: 'Missing or invalid field name'
											},
											fieldValue: {
												type: 'string',
												description: 'Incorrect field value'
											}
										}
									}
								},
								trace: {
									type: 'string',
									description: 'Stack trace'
								}
							},
							required: [
								'message'
							]
						}
					}
				}
			}
		},
		'/V1/guest-carts/{cartId}/order': {
			put: {
				tags: [
					'quoteGuestCartManagementV1'
				],
				description: 'Place an order for a specified cart.',
				operationId: 'quoteGuestCartManagementV1PlaceOrderPut',
				parameters: [
					{
						name: 'cartId',
						in: 'path',
						type: 'string',
						required: true,
						description: 'The cart ID.'
					},
					{
						name: 'quoteGuestCartManagementV1PlaceOrderPutBody',
						in: 'body',
						schema: {
							properties: {
								paymentMethod: {
									type: 'object',
									description: 'Interface PaymentInterface',
									properties: {
										po_number: {
											type: 'string',
											description: 'Purchase order number'
										},
										method: {
											type: 'string',
											description: 'Payment method code'
										},
										additional_data: {
											type: 'array',
											description: 'Payment additional details',
											items: {
												type: 'string'
											}
										},
										extension_attributes: {
											type: 'object',
											description: 'ExtensionInterface class for @see ' +
												'\\Magento\\Quote\\Api\\Data\\PaymentInterface',
											properties: {
												agreement_ids: {
													type: 'array',
													items: {
														type: 'string'
													}
												}
											}
										}
									},
									required: [
										'method'
									]
								}
							},
							type: 'object'
						}
					}
				],
				responses: {
					'200': {
						description: '200 Success.',
						schema: {
							type: 'integer',
							description: 'Order ID.'
						}
					},
					'400': {
						description: '400 Bad Request',
						schema: {
							type: 'object',
							properties: {
								message: {
									type: 'string',
									description: 'Error message'
								},
								errors: {
									type: 'array',
									description: 'Errors list',
									items: {
										type: 'object',
										description: 'Error details',
										properties: {
											message: {
												type: 'string',
												description: 'Error message'
											},
											parameters: {
												type: 'array',
												description: 'Error parameters list',
												items: {
													type: 'object',
													description: 'Error parameters item',
													properties: {
														resources: {
															type: 'string',
															description: 'ACL resource'
														},
														fieldName: {
															type: 'string',
															description: 'Missing or invalid field name'
														},
														fieldValue: {
															type: 'string',
															description: 'Incorrect field value'
														}
													}
												}
											}
										}
									}
								},
								code: {
									type: 'integer',
									description: 'Error code'
								},
								parameters: {
									type: 'array',
									description: 'Error parameters list',
									items: {
										type: 'object',
										description: 'Error parameters item',
										properties: {
											resources: {
												type: 'string',
												description: 'ACL resource'
											},
											fieldName: {
												type: 'string',
												description: 'Missing or invalid field name'
											},
											fieldValue: {
												type: 'string',
												description: 'Incorrect field value'
											}
										}
									}
								},
								trace: {
									type: 'string',
									description: 'Stack trace'
								}
							},
							required: [
								'message'
							]
						}
					},
					default: {
						description: 'Unexpected error',
						schema: {
							type: 'object',
							properties: {
								message: {
									type: 'string',
									description: 'Error message'
								},
								errors: {
									type: 'array',
									description: 'Errors list',
									items: {
										type: 'object',
										description: 'Error details',
										properties: {
											message: {
												type: 'string',
												description: 'Error message'
											},
											parameters: {
												type: 'array',
												description: 'Error parameters list',
												items: {
													type: 'object',
													description: 'Error parameters item',
													properties: {
														resources: {
															type: 'string',
															description: 'ACL resource'
														},
														fieldName: {
															type: 'string',
															description: 'Missing or invalid field name'
														},
														fieldValue: {
															type: 'string',
															description: 'Incorrect field value'
														}
													}
												}
											}
										}
									}
								},
								code: {
									type: 'integer',
									description: 'Error code'
								},
								parameters: {
									type: 'array',
									description: 'Error parameters list',
									items: {
										type: 'object',
										description: 'Error parameters item',
										properties: {
											resources: {
												type: 'string',
												description: 'ACL resource'
											},
											fieldName: {
												type: 'string',
												description: 'Missing or invalid field name'
											},
											fieldValue: {
												type: 'string',
												description: 'Incorrect field value'
											}
										}
									}
								},
								trace: {
									type: 'string',
									description: 'Stack trace'
								}
							},
							required: [
								'message'
							]
						}
					}
				}
			}
		},
		'/V1/guest-carts/{cartId}/shipping-methods': {
			get: {
				tags: [
					'quoteGuestShippingMethodManagementV1'
				],
				description: 'List applicable shipping ' +
					'methods for a specified ' +
					'quote.',
				operationId: 'quoteGuestShippingMethodManagementV1GetListGet',
				parameters: [
					{
						name: 'cartId',
						in: 'path',
						type: 'string',
						required: true,
						description: 'The shopping cart ID.'
					}
				],
				responses: {
					'200': {
						description: '200 Success.',
						schema: {
							type: 'array',
							description: 'An array of shipping methods.',
							items: {
								type: 'object',
								description: 'Interface ShippingMethodInterface',
								properties: {
									carrier_code: {
										type: 'string',
										description: 'Shipping carrier code.'
									},
									method_code: {
										type: 'string',
										description: 'Shipping method code.'
									},
									carrier_title: {
										type: 'string',
										description: 'Shipping carrier title. Otherwise, null.'
									},
									method_title: {
										type: 'string',
										description: 'Shipping method title. Otherwise, null.'
									},
									amount: {
										type: 'number',
										description: 'Shipping amount in store currency.'
									},
									base_amount: {
										type: 'number',
										description: 'Shipping amount in base currency.'
									},
									available: {
										type: 'boolean',
										description: 'The value of the availability flag ' +
											'for the current shipping method.'
									},
									extension_attributes: {
										type: 'object',
										description: 'ExtensionInterface class ' +
											'for @see ' +
											'\\Magento\\Quote\\Api\\Data\\ShippingMethodInterface'
									},
									error_message: {
										type: 'string',
										description: 'Shipping Error message.'
									},
									price_excl_tax: {
										type: 'number',
										description: 'Shipping price excl tax.'
									},
									price_incl_tax: {
										type: 'number',
										description: 'Shipping price incl tax.'
									}
								},
								required: [
									'carrier_code',
									'method_code',
									'amount',
									'base_amount',
									'available',
									'error_message',
									'price_excl_tax',
									'price_incl_tax'
								]
							}
						}
					},
					'400': {
						description: '400 Bad Request',
						schema: {
							type: 'object',
							properties: {
								message: {
									type: 'string',
									description: 'Error message'
								},
								errors: {
									type: 'array',
									description: 'Errors list',
									items: {
										type: 'object',
										description: 'Error details',
										properties: {
											message: {
												type: 'string',
												description: 'Error message'
											},
											parameters: {
												type: 'array',
												description: 'Error parameters list',
												items: {
													type: 'object',
													description: 'Error parameters item',
													properties: {
														resources: {
															type: 'string',
															description: 'ACL resource'
														},
														fieldName: {
															type: 'string',
															description: 'Missing or invalid field name'
														},
														fieldValue: {
															type: 'string',
															description: 'Incorrect field value'
														}
													}
												}
											}
										}
									}
								},
								code: {
									type: 'integer',
									description: 'Error code'
								},
								parameters: {
									type: 'array',
									description: 'Error parameters list',
									items: {
										type: 'object',
										description: 'Error parameters item',
										properties: {
											resources: {
												type: 'string',
												description: 'ACL resource'
											},
											fieldName: {
												type: 'string',
												description: 'Missing or invalid field name'
											},
											fieldValue: {
												type: 'string',
												description: 'Incorrect field value'
											}
										}
									}
								},
								trace: {
									type: 'string',
									description: 'Stack trace'
								}
							},
							required: [
								'message'
							]
						}
					},
					default: {
						description: 'Unexpected error',
						schema: {
							type: 'object',
							properties: {
								message: {
									type: 'string',
									description: 'Error message'
								},
								errors: {
									type: 'array',
									description: 'Errors list',
									items: {
										type: 'object',
										description: 'Error details',
										properties: {
											message: {
												type: 'string',
												description: 'Error message'
											},
											parameters: {
												type: 'array',
												description: 'Error parameters list',
												items: {
													type: 'object',
													description: 'Error parameters item',
													properties: {
														resources: {
															type: 'string',
															description: 'ACL resource'
														},
														fieldName: {
															type: 'string',
															description: 'Missing or invalid field name'
														},
														fieldValue: {
															type: 'string',
															description: 'Incorrect field value'
														}
													}
												}
											}
										}
									}
								},
								code: {
									type: 'integer',
									description: 'Error code'
								},
								parameters: {
									type: 'array',
									description: 'Error parameters list',
									items: {
										type: 'object',
										description: 'Error parameters item',
										properties: {
											resources: {
												type: 'string',
												description: 'ACL resource'
											},
											fieldName: {
												type: 'string',
												description: 'Missing or invalid field name'
											},
											fieldValue: {
												type: 'string',
												description: 'Incorrect field value'
											}
										}
									}
								},
								trace: {
									type: 'string',
									description: 'Stack trace'
								}
							},
							required: [
								'message'
							]
						}
					}
				}
			}
		},
		'/V1/guest-carts/{cartId}/estimate-shipping-methods': {
			post: {
				tags: [
					'quoteGuestShipmentEstimationV1'
				],
				description: 'Estimate shipping by address and ' +
					'return list of available shipping ' +
					'methods',
				operationId: 'quoteGuestShipmentEstimationV1EstimateByExtendedAddressPost',
				parameters: [
					{
						name: 'cartId',
						in: 'path',
						type: 'string',
						required: true
					},
					{
						name: 'quoteGuestShipmentEstimationV1EstimateByExtendedAddressPostBody',
						in: 'body',
						schema: {
							required: [
								'address'
							],
							properties: {
								address: {
									type: 'object',
									description: 'Interface AddressInterface',
									properties: {
										id: {
											type: 'integer',
											description: 'Id'
										},
										region: {
											type: 'string',
											description: 'Region name'
										},
										region_id: {
											type: 'integer',
											description: 'Region id'
										},
										region_code: {
											type: 'string',
											description: 'Region code'
										},
										country_id: {
											type: 'string',
											description: 'Country id'
										},
										street: {
											type: 'array',
											description: 'Street',
											items: {
												type: 'string'
											}
										},
										company: {
											type: 'string',
											description: 'Company'
										},
										telephone: {
											type: 'string',
											description: 'Telephone number'
										},
										fax: {
											type: 'string',
											description: 'Fax number'
										},
										postcode: {
											type: 'string',
											description: 'Postcode'
										},
										city: {
											type: 'string',
											description: 'City name'
										},
										firstname: {
											type: 'string',
											description: 'First name'
										},
										lastname: {
											type: 'string',
											description: 'Last name'
										},
										middlename: {
											type: 'string',
											description: 'Middle name'
										},
										prefix: {
											type: 'string',
											description: 'Prefix'
										},
										suffix: {
											type: 'string',
											description: 'Suffix'
										},
										vat_id: {
											type: 'string',
											description: 'Vat id'
										},
										customer_id: {
											type: 'integer',
											description: 'Customer id'
										},
										email: {
											type: 'string',
											description: 'Billing/shipping email'
										},
										same_as_billing: {
											type: 'integer',
											description: 'Same as billing flag'
										},
										customer_address_id: {
											type: 'integer',
											description: 'Customer address id'
										},
										save_in_address_book: {
											type: 'integer',
											description: 'Save in address book flag'
										},
										extension_attributes: {
											type: 'object',
											description: 'ExtensionInterface class for @see ' +
												'\\Magento\\Quote\\Api\\Data\\AddressInterface',
											properties: {
												checkout_fields: {
													type: 'array',
													items: {
														type: 'object',
														description: 'Interface for ' +
															'custom attribute ' +
															'value.',
														properties: {
															attribute_code: {
																type: 'string',
																description: 'Attribute code'
															},
															value: {
																type: 'string',
																description: 'Attribute value'
															}
														},
														required: [
															'attribute_code',
															'value'
														]
													}
												}
											}
										},
										custom_attributes: {
											type: 'array',
											description: 'Custom attributes values.',
											items: {
												type: 'object',
												description: 'Interface for ' +
													'custom attribute ' +
													'value.',
												properties: {
													attribute_code: {
														type: 'string',
														description: 'Attribute code'
													},
													value: {
														type: 'string',
														description: 'Attribute value'
													}
												},
												required: [
													'attribute_code',
													'value'
												]
											}
										}
									},
									required: [
										'region',
										'region_id',
										'region_code',
										'country_id',
										'street',
										'telephone',
										'postcode',
										'city',
										'firstname',
										'lastname',
										'email'
									]
								}
							},
							type: 'object'
						}
					}
				],
				responses: {
					'200': {
						description: '200 Success.',
						schema: {
							type: 'array',
							description: 'An array of shipping methods',
							items: {
								type: 'object',
								description: 'Interface ShippingMethodInterface',
								properties: {
									carrier_code: {
										type: 'string',
										description: 'Shipping carrier code.'
									},
									method_code: {
										type: 'string',
										description: 'Shipping method code.'
									},
									carrier_title: {
										type: 'string',
										description: 'Shipping carrier title. Otherwise, null.'
									},
									method_title: {
										type: 'string',
										description: 'Shipping method title. Otherwise, null.'
									},
									amount: {
										type: 'number',
										description: 'Shipping amount in store currency.'
									},
									base_amount: {
										type: 'number',
										description: 'Shipping amount in base currency.'
									},
									available: {
										type: 'boolean',
										description: 'The value of the availability flag ' +
											'for the current shipping method.'
									},
									extension_attributes: {
										type: 'object',
										description: 'ExtensionInterface class ' +
											'for @see ' +
											'\\Magento\\Quote\\Api\\Data\\ShippingMethodInterface'
									},
									error_message: {
										type: 'string',
										description: 'Shipping Error message.'
									},
									price_excl_tax: {
										type: 'number',
										description: 'Shipping price excl tax.'
									},
									price_incl_tax: {
										type: 'number',
										description: 'Shipping price incl tax.'
									}
								},
								required: [
									'carrier_code',
									'method_code',
									'amount',
									'base_amount',
									'available',
									'error_message',
									'price_excl_tax',
									'price_incl_tax'
								]
							}
						}
					},
					default: {
						description: 'Unexpected error',
						schema: {
							type: 'object',
							properties: {
								message: {
									type: 'string',
									description: 'Error message'
								},
								errors: {
									type: 'array',
									description: 'Errors list',
									items: {
										type: 'object',
										description: 'Error details',
										properties: {
											message: {
												type: 'string',
												description: 'Error message'
											},
											parameters: {
												type: 'array',
												description: 'Error parameters list',
												items: {
													type: 'object',
													description: 'Error parameters item',
													properties: {
														resources: {
															type: 'string',
															description: 'ACL resource'
														},
														fieldName: {
															type: 'string',
															description: 'Missing or invalid field name'
														},
														fieldValue: {
															type: 'string',
															description: 'Incorrect field value'
														}
													}
												}
											}
										}
									}
								},
								code: {
									type: 'integer',
									description: 'Error code'
								},
								parameters: {
									type: 'array',
									description: 'Error parameters list',
									items: {
										type: 'object',
										description: 'Error parameters item',
										properties: {
											resources: {
												type: 'string',
												description: 'ACL resource'
											},
											fieldName: {
												type: 'string',
												description: 'Missing or invalid field name'
											},
											fieldValue: {
												type: 'string',
												description: 'Incorrect field value'
											}
										}
									}
								},
								trace: {
									type: 'string',
									description: 'Stack trace'
								}
							},
							required: [
								'message'
							]
						}
					}
				}
			}
		},
		'/V1/guest-carts/{cartId}/items': {
			get: {
				tags: [
					'quoteGuestCartItemRepositoryV1'
				],
				description: 'List items that are assigned to a specified cart.',
				operationId: 'quoteGuestCartItemRepositoryV1GetListGet',
				parameters: [
					{
						name: 'cartId',
						in: 'path',
						type: 'string',
						required: true,
						description: 'The cart ID.'
					}
				],
				responses: {
					'200': {
						description: '200 Success.',
						schema: {
							type: 'array',
							description: 'Array of items.',
							items: {
								type: 'object',
								description: 'Interface CartItemInterface',
								properties: {
									item_id: {
										type: 'integer',
										description: 'Item ID. Otherwise, null.'
									},
									sku: {
										type: 'string',
										description: 'Product SKU. Otherwise, null.'
									},
									qty: {
										type: 'number',
										description: 'Product quantity.'
									},
									name: {
										type: 'string',
										description: 'Product name. Otherwise, null.'
									},
									price: {
										type: 'number',
										description: 'Product price. Otherwise, null.'
									},
									product_type: {
										type: 'string',
										description: 'Product type. Otherwise, null.'
									},
									quote_id: {
										type: 'string',
										description: 'Quote id.'
									},
									product_option: {
										type: 'object',
										description: 'Product option interface',
										properties: {
											extension_attributes: {
												type: 'object',
												description: 'ExtensionInterface class ' +
													'for @see ' +
													'\\Magento\\Quote\\Api\\Data\\ProductOptionInterface',
												properties: {
													custom_options: {
														type: 'array',
														items: {
															type: 'object',
															description: 'Interface ' +
																'CustomOptionInterface',
															properties: {
																option_id: {
																	type: 'string',
																	description: 'Option id'
																},
																option_value: {
																	type: 'string',
																	description: 'Option value'
																},
																extension_attributes: {
																	type: 'object',
																	description: 'ExtensionInterface ' +
																		'class for @see ' +
																		'\\Magento\\Catalog\\Api\\Data\\CustomOptionInterface',
																	properties: {
																		file_info: {
																			type: 'object',
																			description: 'Image Content ' +
																				'data interface',
																			properties: {
																				base64_encoded_data: {
																					type: 'string',
																					description: 'Media data (base64 ' +
																						'encoded content)'
																				},
																				type: {
																					type: 'string',
																					description: 'MIME type'
																				},
																				name: {
																					type: 'string',
																					description: 'Image name'
																				}
																			},
																			required: [
																				'base64_encoded_data',
																				'type',
																				'name'
																			]
																		}
																	}
																}
															},
															required: [
																'option_id',
																'option_value'
															]
														}
													},
													bundle_options: {
														type: 'array',
														items: {
															type: 'object',
															description: 'Interface ' +
																'BundleOptionInterface',
															properties: {
																option_id: {
																	type: 'integer',
																	description: 'Bundle option id.'
																},
																option_qty: {
																	type: 'integer',
																	description: 'Bundle option quantity.'
																},
																option_selections: {
																	type: 'array',
																	description: 'Bundle option ' +
																		'selection ids.',
																	items: {
																		type: 'integer'
																	}
																},
																extension_attributes: {
																	type: 'object',
																	description: 'ExtensionInterface ' +
																		'class for @see ' +
																		'\\Magento\\Bundle\\Api\\Data\\BundleOptionInterface'
																}
															},
															required: [
																'option_id',
																'option_qty',
																'option_selections'
															]
														}
													},
													downloadable_option: {
														type: 'object',
														description: 'Downloadable Option',
														properties: {
															downloadable_links: {
																type: 'array',
																description: 'The list of ' +
																	'downloadable ' +
																	'links',
																items: {
																	type: 'integer'
																}
															}
														},
														required: [
															'downloadable_links'
														]
													},
													configurable_item_options: {
														type: 'array',
														items: {
															type: 'object',
															description: 'Interface ' +
																'ConfigurableItemOptionValueInterface',
															properties: {
																option_id: {
																	type: 'string',
																	description: 'Option SKU'
																},
																option_value: {
																	type: 'integer',
																	description: 'Item id'
																},
																extension_attributes: {
																	type: 'object',
																	description: 'ExtensionInterface ' +
																		'class for @see ' +
																		'\\Magento\\ConfigurableProduct\\Api\\Data\\ConfigurableItemOptionValueInterface'
																}
															},
															required: [
																'option_id'
															]
														}
													}
												}
											}
										}
									},
									extension_attributes: {
										type: 'object',
										description: 'ExtensionInterface class for @see ' +
											'\\Magento\\Quote\\Api\\Data\\CartItemInterface'
									}
								},
								required: [
									'qty',
									'quote_id'
								]
							}
						}
					},
					'400': {
						description: '400 Bad Request',
						schema: {
							type: 'object',
							properties: {
								message: {
									type: 'string',
									description: 'Error message'
								},
								errors: {
									type: 'array',
									description: 'Errors list',
									items: {
										type: 'object',
										description: 'Error details',
										properties: {
											message: {
												type: 'string',
												description: 'Error message'
											},
											parameters: {
												type: 'array',
												description: 'Error parameters list',
												items: {
													type: 'object',
													description: 'Error parameters item',
													properties: {
														resources: {
															type: 'string',
															description: 'ACL resource'
														},
														fieldName: {
															type: 'string',
															description: 'Missing or invalid field name'
														},
														fieldValue: {
															type: 'string',
															description: 'Incorrect field value'
														}
													}
												}
											}
										}
									}
								},
								code: {
									type: 'integer',
									description: 'Error code'
								},
								parameters: {
									type: 'array',
									description: 'Error parameters list',
									items: {
										type: 'object',
										description: 'Error parameters item',
										properties: {
											resources: {
												type: 'string',
												description: 'ACL resource'
											},
											fieldName: {
												type: 'string',
												description: 'Missing or invalid field name'
											},
											fieldValue: {
												type: 'string',
												description: 'Incorrect field value'
											}
										}
									}
								},
								trace: {
									type: 'string',
									description: 'Stack trace'
								}
							},
							required: [
								'message'
							]
						}
					},
					default: {
						description: 'Unexpected error',
						schema: {
							type: 'object',
							properties: {
								message: {
									type: 'string',
									description: 'Error message'
								},
								errors: {
									type: 'array',
									description: 'Errors list',
									items: {
										type: 'object',
										description: 'Error details',
										properties: {
											message: {
												type: 'string',
												description: 'Error message'
											},
											parameters: {
												type: 'array',
												description: 'Error parameters list',
												items: {
													type: 'object',
													description: 'Error parameters item',
													properties: {
														resources: {
															type: 'string',
															description: 'ACL resource'
														},
														fieldName: {
															type: 'string',
															description: 'Missing or invalid field name'
														},
														fieldValue: {
															type: 'string',
															description: 'Incorrect field value'
														}
													}
												}
											}
										}
									}
								},
								code: {
									type: 'integer',
									description: 'Error code'
								},
								parameters: {
									type: 'array',
									description: 'Error parameters list',
									items: {
										type: 'object',
										description: 'Error parameters item',
										properties: {
											resources: {
												type: 'string',
												description: 'ACL resource'
											},
											fieldName: {
												type: 'string',
												description: 'Missing or invalid field name'
											},
											fieldValue: {
												type: 'string',
												description: 'Incorrect field value'
											}
										}
									}
								},
								trace: {
									type: 'string',
									description: 'Stack trace'
								}
							},
							required: [
								'message'
							]
						}
					}
				}
			},
			post: {
				tags: [
					'quoteGuestCartItemRepositoryV1'
				],
				description: 'Add/update the specified cart item.',
				operationId: 'quoteGuestCartItemRepositoryV1SavePost',
				parameters: [
					{
						name: 'cartId',
						in: 'path',
						type: 'string',
						required: true
					},
					{
						name: 'quoteGuestCartItemRepositoryV1SavePostBody',
						in: 'body',
						schema: {
							required: [
								'cartItem'
							],
							properties: {
								cartItem: {
									type: 'object',
									description: 'Interface CartItemInterface',
									properties: {
										item_id: {
											type: 'integer',
											description: 'Item ID. Otherwise, null.'
										},
										sku: {
											type: 'string',
											description: 'Product SKU. Otherwise, null.'
										},
										qty: {
											type: 'number',
											description: 'Product quantity.'
										},
										name: {
											type: 'string',
											description: 'Product name. Otherwise, null.'
										},
										price: {
											type: 'number',
											description: 'Product price. Otherwise, null.'
										},
										product_type: {
											type: 'string',
											description: 'Product type. Otherwise, null.'
										},
										quote_id: {
											type: 'string',
											description: 'Quote id.'
										},
										product_option: {
											type: 'object',
											description: 'Product option interface',
											properties: {
												extension_attributes: {
													type: 'object',
													description: 'ExtensionInterface class ' +
														'for @see ' +
														'\\Magento\\Quote\\Api\\Data\\ProductOptionInterface',
													properties: {
														custom_options: {
															type: 'array',
															items: {
																type: 'object',
																description: 'Interface ' +
																	'CustomOptionInterface',
																properties: {
																	option_id: {
																		type: 'string',
																		description: 'Option id'
																	},
																	option_value: {
																		type: 'string',
																		description: 'Option value'
																	},
																	extension_attributes: {
																		type: 'object',
																		description: 'ExtensionInterface ' +
																			'class for @see ' +
																			'\\Magento\\Catalog\\Api\\Data\\CustomOptionInterface',
																		properties: {
																			file_info: {
																				type: 'object',
																				description: 'Image Content ' +
																					'data interface',
																				properties: {
																					base64_encoded_data: [Object],
																					type: [Object],
																					name: [Object]
																				},
																				required: [
																					'base64_encoded_data',
																					'type',
																					'name'
																				]
																			}
																		}
																	}
																},
																required: [
																	'option_id',
																	'option_value'
																]
															}
														},
														bundle_options: {
															type: 'array',
															items: {
																type: 'object',
																description: 'Interface ' +
																	'BundleOptionInterface',
																properties: {
																	option_id: {
																		type: 'integer',
																		description: 'Bundle option id.'
																	},
																	option_qty: {
																		type: 'integer',
																		description: 'Bundle option quantity.'
																	},
																	option_selections: {
																		type: 'array',
																		description: 'Bundle option ' +
																			'selection ids.',
																		items: {
																			type: 'integer'
																		}
																	},
																	extension_attributes: {
																		type: 'object',
																		description: 'ExtensionInterface ' +
																			'class for @see ' +
																			'\\Magento\\Bundle\\Api\\Data\\BundleOptionInterface'
																	}
																},
																required: [
																	'option_id',
																	'option_qty',
																	'option_selections'
																]
															}
														},
														downloadable_option: {
															type: 'object',
															description: 'Downloadable Option',
															properties: {
																downloadable_links: {
																	type: 'array',
																	description: 'The list of ' +
																		'downloadable ' +
																		'links',
																	items: {
																		type: 'integer'
																	}
																}
															},
															required: [
																'downloadable_links'
															]
														},
														configurable_item_options: {
															type: 'array',
															items: {
																type: 'object',
																description: 'Interface ' +
																	'ConfigurableItemOptionValueInterface',
																properties: {
																	option_id: {
																		type: 'string',
																		description: 'Option SKU'
																	},
																	option_value: {
																		type: 'integer',
																		description: 'Item id'
																	},
																	extension_attributes: {
																		type: 'object',
																		description: 'ExtensionInterface ' +
																			'class for @see ' +
																			'\\Magento\\ConfigurableProduct\\Api\\Data\\ConfigurableItemOptionValueInterface'
																	}
																},
																required: [
																	'option_id'
																]
															}
														}
													}
												}
											}
										},
										extension_attributes: {
											type: 'object',
											description: 'ExtensionInterface class for @see ' +
												'\\Magento\\Quote\\Api\\Data\\CartItemInterface'
										}
									},
									required: [
										'qty',
										'quote_id'
									]
								}
							},
							type: 'object'
						}
					}
				],
				responses: {
					'200': {
						description: '200 Success.',
						schema: {
							type: 'object',
							description: 'Interface CartItemInterface',
							properties: {
								item_id: {
									type: 'integer',
									description: 'Item ID. Otherwise, null.'
								},
								sku: {
									type: 'string',
									description: 'Product SKU. Otherwise, null.'
								},
								qty: {
									type: 'number',
									description: 'Product quantity.'
								},
								name: {
									type: 'string',
									description: 'Product name. Otherwise, null.'
								},
								price: {
									type: 'number',
									description: 'Product price. Otherwise, null.'
								},
								product_type: {
									type: 'string',
									description: 'Product type. Otherwise, null.'
								},
								quote_id: {
									type: 'string',
									description: 'Quote id.'
								},
								product_option: {
									type: 'object',
									description: 'Product option interface',
									properties: {
										extension_attributes: {
											type: 'object',
											description: 'ExtensionInterface class ' +
												'for @see ' +
												'\\Magento\\Quote\\Api\\Data\\ProductOptionInterface',
											properties: {
												custom_options: {
													type: 'array',
													items: {
														type: 'object',
														description: 'Interface CustomOptionInterface',
														properties: {
															option_id: {
																type: 'string',
																description: 'Option id'
															},
															option_value: {
																type: 'string',
																description: 'Option value'
															},
															extension_attributes: {
																type: 'object',
																description: 'ExtensionInterface class ' +
																	'for @see ' +
																	'\\Magento\\Catalog\\Api\\Data\\CustomOptionInterface',
																properties: {
																	file_info: {
																		type: 'object',
																		description: 'Image Content ' +
																			'data interface',
																		properties: {
																			base64_encoded_data: {
																				type: 'string',
																				description: 'Media data (base64 ' +
																					'encoded content)'
																			},
																			type: {
																				type: 'string',
																				description: 'MIME type'
																			},
																			name: {
																				type: 'string',
																				description: 'Image name'
																			}
																		},
																		required: [
																			'base64_encoded_data',
																			'type',
																			'name'
																		]
																	}
																}
															}
														},
														required: [
															'option_id',
															'option_value'
														]
													}
												},
												bundle_options: {
													type: 'array',
													items: {
														type: 'object',
														description: 'Interface BundleOptionInterface',
														properties: {
															option_id: {
																type: 'integer',
																description: 'Bundle option id.'
															},
															option_qty: {
																type: 'integer',
																description: 'Bundle option quantity.'
															},
															option_selections: {
																type: 'array',
																description: 'Bundle option selection ids.',
																items: {
																	type: 'integer'
																}
															},
															extension_attributes: {
																type: 'object',
																description: 'ExtensionInterface class ' +
																	'for @see ' +
																	'\\Magento\\Bundle\\Api\\Data\\BundleOptionInterface'
															}
														},
														required: [
															'option_id',
															'option_qty',
															'option_selections'
														]
													}
												},
												downloadable_option: {
													type: 'object',
													description: 'Downloadable Option',
													properties: {
														downloadable_links: {
															type: 'array',
															description: 'The list of downloadable links',
															items: {
																type: 'integer'
															}
														}
													},
													required: [
														'downloadable_links'
													]
												},
												configurable_item_options: {
													type: 'array',
													items: {
														type: 'object',
														description: 'Interface ' +
															'ConfigurableItemOptionValueInterface',
														properties: {
															option_id: {
																type: 'string',
																description: 'Option SKU'
															},
															option_value: {
																type: 'integer',
																description: 'Item id'
															},
															extension_attributes: {
																type: 'object',
																description: 'ExtensionInterface class ' +
																	'for @see ' +
																	'\\Magento\\ConfigurableProduct\\Api\\Data\\ConfigurableItemOptionValueInterface'
															}
														},
														required: [
															'option_id'
														]
													}
												}
											}
										}
									}
								},
								extension_attributes: {
									type: 'object',
									description: 'ExtensionInterface class for @see ' +
										'\\Magento\\Quote\\Api\\Data\\CartItemInterface'
								}
							},
							required: [
								'qty',
								'quote_id'
							]
						}
					},
					'400': {
						description: '400 Bad Request',
						schema: {
							type: 'object',
							properties: {
								message: {
									type: 'string',
									description: 'Error message'
								},
								errors: {
									type: 'array',
									description: 'Errors list',
									items: {
										type: 'object',
										description: 'Error details',
										properties: {
											message: {
												type: 'string',
												description: 'Error message'
											},
											parameters: {
												type: 'array',
												description: 'Error parameters list',
												items: {
													type: 'object',
													description: 'Error parameters item',
													properties: {
														resources: {
															type: 'string',
															description: 'ACL resource'
														},
														fieldName: {
															type: 'string',
															description: 'Missing or invalid field name'
														},
														fieldValue: {
															type: 'string',
															description: 'Incorrect field value'
														}
													}
												}
											}
										}
									}
								},
								code: {
									type: 'integer',
									description: 'Error code'
								},
								parameters: {
									type: 'array',
									description: 'Error parameters list',
									items: {
										type: 'object',
										description: 'Error parameters item',
										properties: {
											resources: {
												type: 'string',
												description: 'ACL resource'
											},
											fieldName: {
												type: 'string',
												description: 'Missing or invalid field name'
											},
											fieldValue: {
												type: 'string',
												description: 'Incorrect field value'
											}
										}
									}
								},
								trace: {
									type: 'string',
									description: 'Stack trace'
								}
							},
							required: [
								'message'
							]
						}
					},
					default: {
						description: 'Unexpected error',
						schema: {
							type: 'object',
							properties: {
								message: {
									type: 'string',
									description: 'Error message'
								},
								errors: {
									type: 'array',
									description: 'Errors list',
									items: {
										type: 'object',
										description: 'Error details',
										properties: {
											message: {
												type: 'string',
												description: 'Error message'
											},
											parameters: {
												type: 'array',
												description: 'Error parameters list',
												items: {
													type: 'object',
													description: 'Error parameters item',
													properties: {
														resources: {
															type: 'string',
															description: 'ACL resource'
														},
														fieldName: {
															type: 'string',
															description: 'Missing or invalid field name'
														},
														fieldValue: {
															type: 'string',
															description: 'Incorrect field value'
														}
													}
												}
											}
										}
									}
								},
								code: {
									type: 'integer',
									description: 'Error code'
								},
								parameters: {
									type: 'array',
									description: 'Error parameters list',
									items: {
										type: 'object',
										description: 'Error parameters item',
										properties: {
											resources: {
												type: 'string',
												description: 'ACL resource'
											},
											fieldName: {
												type: 'string',
												description: 'Missing or invalid field name'
											},
											fieldValue: {
												type: 'string',
												description: 'Incorrect field value'
											}
										}
									}
								},
								trace: {
									type: 'string',
									description: 'Stack trace'
								}
							},
							required: [
								'message'
							]
						}
					}
				}
			}
		},
		'/V1/guest-carts/{cartId}/items/{itemId}': {
			put: {
				tags: [
					'quoteGuestCartItemRepositoryV1'
				],
				description: 'Add/update the specified cart item.',
				operationId: 'quoteGuestCartItemRepositoryV1SavePut',
				parameters: [
					{
						name: 'cartId',
						in: 'path',
						type: 'string',
						required: true
					},
					{
						name: 'itemId',
						in: 'path',
						type: 'string',
						required: true
					},
					{
						name: 'quoteGuestCartItemRepositoryV1SavePutBody',
						in: 'body',
						schema: {
							required: [
								'cartItem'
							],
							properties: {
								cartItem: {
									type: 'object',
									description: 'Interface CartItemInterface',
									properties: {
										item_id: {
											type: 'integer',
											description: 'Item ID. Otherwise, null.'
										},
										sku: {
											type: 'string',
											description: 'Product SKU. Otherwise, null.'
										},
										qty: {
											type: 'number',
											description: 'Product quantity.'
										},
										name: {
											type: 'string',
											description: 'Product name. Otherwise, null.'
										},
										price: {
											type: 'number',
											description: 'Product price. Otherwise, null.'
										},
										product_type: {
											type: 'string',
											description: 'Product type. Otherwise, null.'
										},
										quote_id: {
											type: 'string',
											description: 'Quote id.'
										},
										product_option: {
											type: 'object',
											description: 'Product option interface',
											properties: {
												extension_attributes: {
													type: 'object',
													description: 'ExtensionInterface class ' +
														'for @see ' +
														'\\Magento\\Quote\\Api\\Data\\ProductOptionInterface',
													properties: {
														custom_options: {
															type: 'array',
															items: {
																type: 'object',
																description: 'Interface ' +
																	'CustomOptionInterface',
																properties: {
																	option_id: {
																		type: 'string',
																		description: 'Option id'
																	},
																	option_value: {
																		type: 'string',
																		description: 'Option value'
																	},
																	extension_attributes: {
																		type: 'object',
																		description: 'ExtensionInterface ' +
																			'class for @see ' +
																			'\\Magento\\Catalog\\Api\\Data\\CustomOptionInterface',
																		properties: {
																			file_info: {
																				type: 'object',
																				description: 'Image Content ' +
																					'data interface',
																				properties: {
																					base64_encoded_data: [Object],
																					type: [Object],
																					name: [Object]
																				},
																				required: [
																					'base64_encoded_data',
																					'type',
																					'name'
																				]
																			}
																		}
																	}
																},
																required: [
																	'option_id',
																	'option_value'
																]
															}
														},
														bundle_options: {
															type: 'array',
															items: {
																type: 'object',
																description: 'Interface ' +
																	'BundleOptionInterface',
																properties: {
																	option_id: {
																		type: 'integer',
																		description: 'Bundle option id.'
																	},
																	option_qty: {
																		type: 'integer',
																		description: 'Bundle option quantity.'
																	},
																	option_selections: {
																		type: 'array',
																		description: 'Bundle option ' +
																			'selection ids.',
																		items: {
																			type: 'integer'
																		}
																	},
																	extension_attributes: {
																		type: 'object',
																		description: 'ExtensionInterface ' +
																			'class for @see ' +
																			'\\Magento\\Bundle\\Api\\Data\\BundleOptionInterface'
																	}
																},
																required: [
																	'option_id',
																	'option_qty',
																	'option_selections'
																]
															}
														},
														downloadable_option: {
															type: 'object',
															description: 'Downloadable Option',
															properties: {
																downloadable_links: {
																	type: 'array',
																	description: 'The list of ' +
																		'downloadable ' +
																		'links',
																	items: {
																		type: 'integer'
																	}
																}
															},
															required: [
																'downloadable_links'
															]
														},
														configurable_item_options: {
															type: 'array',
															items: {
																type: 'object',
																description: 'Interface ' +
																	'ConfigurableItemOptionValueInterface',
																properties: {
																	option_id: {
																		type: 'string',
																		description: 'Option SKU'
																	},
																	option_value: {
																		type: 'integer',
																		description: 'Item id'
																	},
																	extension_attributes: {
																		type: 'object',
																		description: 'ExtensionInterface ' +
																			'class for @see ' +
																			'\\Magento\\ConfigurableProduct\\Api\\Data\\ConfigurableItemOptionValueInterface'
																	}
																},
																required: [
																	'option_id'
																]
															}
														}
													}
												}
											}
										},
										extension_attributes: {
											type: 'object',
											description: 'ExtensionInterface class for @see ' +
												'\\Magento\\Quote\\Api\\Data\\CartItemInterface'
										}
									},
									required: [
										'qty',
										'quote_id'
									]
								}
							},
							type: 'object'
						}
					}
				],
				responses: {
					'200': {
						description: '200 Success.',
						schema: {
							type: 'object',
							description: 'Interface CartItemInterface',
							properties: {
								item_id: {
									type: 'integer',
									description: 'Item ID. Otherwise, null.'
								},
								sku: {
									type: 'string',
									description: 'Product SKU. Otherwise, null.'
								},
								qty: {
									type: 'number',
									description: 'Product quantity.'
								},
								name: {
									type: 'string',
									description: 'Product name. Otherwise, null.'
								},
								price: {
									type: 'number',
									description: 'Product price. Otherwise, null.'
								},
								product_type: {
									type: 'string',
									description: 'Product type. Otherwise, null.'
								},
								quote_id: {
									type: 'string',
									description: 'Quote id.'
								},
								product_option: {
									type: 'object',
									description: 'Product option interface',
									properties: {
										extension_attributes: {
											type: 'object',
											description: 'ExtensionInterface class ' +
												'for @see ' +
												'\\Magento\\Quote\\Api\\Data\\ProductOptionInterface',
											properties: {
												custom_options: {
													type: 'array',
													items: {
														type: 'object',
														description: 'Interface CustomOptionInterface',
														properties: {
															option_id: {
																type: 'string',
																description: 'Option id'
															},
															option_value: {
																type: 'string',
																description: 'Option value'
															},
															extension_attributes: {
																type: 'object',
																description: 'ExtensionInterface class ' +
																	'for @see ' +
																	'\\Magento\\Catalog\\Api\\Data\\CustomOptionInterface',
																properties: {
																	file_info: {
																		type: 'object',
																		description: 'Image Content ' +
																			'data interface',
																		properties: {
																			base64_encoded_data: {
																				type: 'string',
																				description: 'Media data (base64 ' +
																					'encoded content)'
																			},
																			type: {
																				type: 'string',
																				description: 'MIME type'
																			},
																			name: {
																				type: 'string',
																				description: 'Image name'
																			}
																		},
																		required: [
																			'base64_encoded_data',
																			'type',
																			'name'
																		]
																	}
																}
															}
														},
														required: [
															'option_id',
															'option_value'
														]
													}
												},
												bundle_options: {
													type: 'array',
													items: {
														type: 'object',
														description: 'Interface BundleOptionInterface',
														properties: {
															option_id: {
																type: 'integer',
																description: 'Bundle option id.'
															},
															option_qty: {
																type: 'integer',
																description: 'Bundle option quantity.'
															},
															option_selections: {
																type: 'array',
																description: 'Bundle option selection ids.',
																items: {
																	type: 'integer'
																}
															},
															extension_attributes: {
																type: 'object',
																description: 'ExtensionInterface class ' +
																	'for @see ' +
																	'\\Magento\\Bundle\\Api\\Data\\BundleOptionInterface'
															}
														},
														required: [
															'option_id',
															'option_qty',
															'option_selections'
														]
													}
												},
												downloadable_option: {
													type: 'object',
													description: 'Downloadable Option',
													properties: {
														downloadable_links: {
															type: 'array',
															description: 'The list of downloadable links',
															items: {
																type: 'integer'
															}
														}
													},
													required: [
														'downloadable_links'
													]
												},
												configurable_item_options: {
													type: 'array',
													items: {
														type: 'object',
														description: 'Interface ' +
															'ConfigurableItemOptionValueInterface',
														properties: {
															option_id: {
																type: 'string',
																description: 'Option SKU'
															},
															option_value: {
																type: 'integer',
																description: 'Item id'
															},
															extension_attributes: {
																type: 'object',
																description: 'ExtensionInterface class ' +
																	'for @see ' +
																	'\\Magento\\ConfigurableProduct\\Api\\Data\\ConfigurableItemOptionValueInterface'
															}
														},
														required: [
															'option_id'
														]
													}
												}
											}
										}
									}
								},
								extension_attributes: {
									type: 'object',
									description: 'ExtensionInterface class for @see ' +
										'\\Magento\\Quote\\Api\\Data\\CartItemInterface'
								}
							},
							required: [
								'qty',
								'quote_id'
							]
						}
					},
					'400': {
						description: '400 Bad Request',
						schema: {
							type: 'object',
							properties: {
								message: {
									type: 'string',
									description: 'Error message'
								},
								errors: {
									type: 'array',
									description: 'Errors list',
									items: {
										type: 'object',
										description: 'Error details',
										properties: {
											message: {
												type: 'string',
												description: 'Error message'
											},
											parameters: {
												type: 'array',
												description: 'Error parameters list',
												items: {
													type: 'object',
													description: 'Error parameters item',
													properties: {
														resources: {
															type: 'string',
															description: 'ACL resource'
														},
														fieldName: {
															type: 'string',
															description: 'Missing or invalid field name'
														},
														fieldValue: {
															type: 'string',
															description: 'Incorrect field value'
														}
													}
												}
											}
										}
									}
								},
								code: {
									type: 'integer',
									description: 'Error code'
								},
								parameters: {
									type: 'array',
									description: 'Error parameters list',
									items: {
										type: 'object',
										description: 'Error parameters item',
										properties: {
											resources: {
												type: 'string',
												description: 'ACL resource'
											},
											fieldName: {
												type: 'string',
												description: 'Missing or invalid field name'
											},
											fieldValue: {
												type: 'string',
												description: 'Incorrect field value'
											}
										}
									}
								},
								trace: {
									type: 'string',
									description: 'Stack trace'
								}
							},
							required: [
								'message'
							]
						}
					},
					default: {
						description: 'Unexpected error',
						schema: {
							type: 'object',
							properties: {
								message: {
									type: 'string',
									description: 'Error message'
								},
								errors: {
									type: 'array',
									description: 'Errors list',
									items: {
										type: 'object',
										description: 'Error details',
										properties: {
											message: {
												type: 'string',
												description: 'Error message'
											},
											parameters: {
												type: 'array',
												description: 'Error parameters list',
												items: {
													type: 'object',
													description: 'Error parameters item',
													properties: {
														resources: {
															type: 'string',
															description: 'ACL resource'
														},
														fieldName: {
															type: 'string',
															description: 'Missing or invalid field name'
														},
														fieldValue: {
															type: 'string',
															description: 'Incorrect field value'
														}
													}
												}
											}
										}
									}
								},
								code: {
									type: 'integer',
									description: 'Error code'
								},
								parameters: {
									type: 'array',
									description: 'Error parameters list',
									items: {
										type: 'object',
										description: 'Error parameters item',
										properties: {
											resources: {
												type: 'string',
												description: 'ACL resource'
											},
											fieldName: {
												type: 'string',
												description: 'Missing or invalid field name'
											},
											fieldValue: {
												type: 'string',
												description: 'Incorrect field value'
											}
										}
									}
								},
								trace: {
									type: 'string',
									description: 'Stack trace'
								}
							},
							required: [
								'message'
							]
						}
					}
				}
			},
			delete: {
				tags: [
					'quoteGuestCartItemRepositoryV1'
				],
				description: 'Remove the specified item from the specified cart.',
				operationId: 'quoteGuestCartItemRepositoryV1DeleteByIdDelete',
				parameters: [
					{
						name: 'cartId',
						in: 'path',
						type: 'string',
						required: true,
						description: 'The cart ID.'
					},
					{
						name: 'itemId',
						in: 'path',
						type: 'integer',
						required: true,
						description: 'The item ID of the item to be removed.'
					}
				],
				responses: {
					'200': {
						description: '200 Success.',
						schema: {
							type: 'boolean'
						}
					},
					'400': {
						description: '400 Bad Request',
						schema: {
							type: 'object',
							properties: {
								message: {
									type: 'string',
									description: 'Error message'
								},
								errors: {
									type: 'array',
									description: 'Errors list',
									items: {
										type: 'object',
										description: 'Error details',
										properties: {
											message: {
												type: 'string',
												description: 'Error message'
											},
											parameters: {
												type: 'array',
												description: 'Error parameters list',
												items: {
													type: 'object',
													description: 'Error parameters item',
													properties: {
														resources: {
															type: 'string',
															description: 'ACL resource'
														},
														fieldName: {
															type: 'string',
															description: 'Missing or invalid field name'
														},
														fieldValue: {
															type: 'string',
															description: 'Incorrect field value'
														}
													}
												}
											}
										}
									}
								},
								code: {
									type: 'integer',
									description: 'Error code'
								},
								parameters: {
									type: 'array',
									description: 'Error parameters list',
									items: {
										type: 'object',
										description: 'Error parameters item',
										properties: {
											resources: {
												type: 'string',
												description: 'ACL resource'
											},
											fieldName: {
												type: 'string',
												description: 'Missing or invalid field name'
											},
											fieldValue: {
												type: 'string',
												description: 'Incorrect field value'
											}
										}
									}
								},
								trace: {
									type: 'string',
									description: 'Stack trace'
								}
							},
							required: [
								'message'
							]
						}
					},
					default: {
						description: 'Unexpected error',
						schema: {
							type: 'object',
							properties: {
								message: {
									type: 'string',
									description: 'Error message'
								},
								errors: {
									type: 'array',
									description: 'Errors list',
									items: {
										type: 'object',
										description: 'Error details',
										properties: {
											message: {
												type: 'string',
												description: 'Error message'
											},
											parameters: {
												type: 'array',
												description: 'Error parameters list',
												items: {
													type: 'object',
													description: 'Error parameters item',
													properties: {
														resources: {
															type: 'string',
															description: 'ACL resource'
														},
														fieldName: {
															type: 'string',
															description: 'Missing or invalid field name'
														},
														fieldValue: {
															type: 'string',
															description: 'Incorrect field value'
														}
													}
												}
											}
										}
									}
								},
								code: {
									type: 'integer',
									description: 'Error code'
								},
								parameters: {
									type: 'array',
									description: 'Error parameters list',
									items: {
										type: 'object',
										description: 'Error parameters item',
										properties: {
											resources: {
												type: 'string',
												description: 'ACL resource'
											},
											fieldName: {
												type: 'string',
												description: 'Missing or invalid field name'
											},
											fieldValue: {
												type: 'string',
												description: 'Incorrect field value'
											}
										}
									}
								},
								trace: {
									type: 'string',
									description: 'Stack trace'
								}
							},
							required: [
								'message'
							]
						}
					}
				}
			}
		},
		'/V1/guest-carts/{cartId}/selected-payment-method': {
			get: {
				tags: [
					'quoteGuestPaymentMethodManagementV1'
				],
				description: 'Return the payment method ' +
					'for a specified shopping ' +
					'cart.',
				operationId: 'quoteGuestPaymentMethodManagementV1GetGet',
				parameters: [
					{
						name: 'cartId',
						in: 'path',
						type: 'string',
						required: true,
						description: 'The cart ID.'
					}
				],
				responses: {
					'200': {
						description: '200 Success.',
						schema: {
							type: 'object',
							description: 'Interface PaymentInterface',
							properties: {
								po_number: {
									type: 'string',
									description: 'Purchase order number'
								},
								method: {
									type: 'string',
									description: 'Payment method code'
								},
								additional_data: {
									type: 'array',
									description: 'Payment additional details',
									items: {
										type: 'string'
									}
								},
								extension_attributes: {
									type: 'object',
									description: 'ExtensionInterface class for @see ' +
										'\\Magento\\Quote\\Api\\Data\\PaymentInterface',
									properties: {
										agreement_ids: {
											type: 'array',
											items: {
												type: 'string'
											}
										}
									}
								}
							},
							required: [
								'method'
							]
						}
					},
					'400': {
						description: '400 Bad Request',
						schema: {
							type: 'object',
							properties: {
								message: {
									type: 'string',
									description: 'Error message'
								},
								errors: {
									type: 'array',
									description: 'Errors list',
									items: {
										type: 'object',
										description: 'Error details',
										properties: {
											message: {
												type: 'string',
												description: 'Error message'
											},
											parameters: {
												type: 'array',
												description: 'Error parameters list',
												items: {
													type: 'object',
													description: 'Error parameters item',
													properties: {
														resources: {
															type: 'string',
															description: 'ACL resource'
														},
														fieldName: {
															type: 'string',
															description: 'Missing or invalid field name'
														},
														fieldValue: {
															type: 'string',
															description: 'Incorrect field value'
														}
													}
												}
											}
										}
									}
								},
								code: {
									type: 'integer',
									description: 'Error code'
								},
								parameters: {
									type: 'array',
									description: 'Error parameters list',
									items: {
										type: 'object',
										description: 'Error parameters item',
										properties: {
											resources: {
												type: 'string',
												description: 'ACL resource'
											},
											fieldName: {
												type: 'string',
												description: 'Missing or invalid field name'
											},
											fieldValue: {
												type: 'string',
												description: 'Incorrect field value'
											}
										}
									}
								},
								trace: {
									type: 'string',
									description: 'Stack trace'
								}
							},
							required: [
								'message'
							]
						}
					},
					default: {
						description: 'Unexpected error',
						schema: {
							type: 'object',
							properties: {
								message: {
									type: 'string',
									description: 'Error message'
								},
								errors: {
									type: 'array',
									description: 'Errors list',
									items: {
										type: 'object',
										description: 'Error details',
										properties: {
											message: {
												type: 'string',
												description: 'Error message'
											},
											parameters: {
												type: 'array',
												description: 'Error parameters list',
												items: {
													type: 'object',
													description: 'Error parameters item',
													properties: {
														resources: {
															type: 'string',
															description: 'ACL resource'
														},
														fieldName: {
															type: 'string',
															description: 'Missing or invalid field name'
														},
														fieldValue: {
															type: 'string',
															description: 'Incorrect field value'
														}
													}
												}
											}
										}
									}
								},
								code: {
									type: 'integer',
									description: 'Error code'
								},
								parameters: {
									type: 'array',
									description: 'Error parameters list',
									items: {
										type: 'object',
										description: 'Error parameters item',
										properties: {
											resources: {
												type: 'string',
												description: 'ACL resource'
											},
											fieldName: {
												type: 'string',
												description: 'Missing or invalid field name'
											},
											fieldValue: {
												type: 'string',
												description: 'Incorrect field value'
											}
										}
									}
								},
								trace: {
									type: 'string',
									description: 'Stack trace'
								}
							},
							required: [
								'message'
							]
						}
					}
				}
			},
			put: {
				tags: [
					'quoteGuestPaymentMethodManagementV1'
				],
				description: 'Add a specified payment method ' +
					'to a specified shopping cart.',
				operationId: 'quoteGuestPaymentMethodManagementV1SetPut',
				parameters: [
					{
						name: 'cartId',
						in: 'path',
						type: 'string',
						required: true,
						description: 'The cart ID.'
					},
					{
						name: 'quoteGuestPaymentMethodManagementV1SetPutBody',
						in: 'body',
						schema: {
							required: [
								'method'
							],
							properties: {
								method: {
									type: 'object',
									description: 'Interface PaymentInterface',
									properties: {
										po_number: {
											type: 'string',
											description: 'Purchase order number'
										},
										method: {
											type: 'string',
											description: 'Payment method code'
										},
										additional_data: {
											type: 'array',
											description: 'Payment additional details',
											items: {
												type: 'string'
											}
										},
										extension_attributes: {
											type: 'object',
											description: 'ExtensionInterface class for @see ' +
												'\\Magento\\Quote\\Api\\Data\\PaymentInterface',
											properties: {
												agreement_ids: {
													type: 'array',
													items: {
														type: 'string'
													}
												}
											}
										}
									},
									required: [
										'method'
									]
								}
							},
							type: 'object'
						}
					}
				],
				responses: {
					'200': {
						description: '200 Success.',
						schema: {
							type: 'integer',
							description: 'Payment method ID.'
						}
					},
					'400': {
						description: '400 Bad Request',
						schema: {
							type: 'object',
							properties: {
								message: {
									type: 'string',
									description: 'Error message'
								},
								errors: {
									type: 'array',
									description: 'Errors list',
									items: {
										type: 'object',
										description: 'Error details',
										properties: {
											message: {
												type: 'string',
												description: 'Error message'
											},
											parameters: {
												type: 'array',
												description: 'Error parameters list',
												items: {
													type: 'object',
													description: 'Error parameters item',
													properties: {
														resources: {
															type: 'string',
															description: 'ACL resource'
														},
														fieldName: {
															type: 'string',
															description: 'Missing or invalid field name'
														},
														fieldValue: {
															type: 'string',
															description: 'Incorrect field value'
														}
													}
												}
											}
										}
									}
								},
								code: {
									type: 'integer',
									description: 'Error code'
								},
								parameters: {
									type: 'array',
									description: 'Error parameters list',
									items: {
										type: 'object',
										description: 'Error parameters item',
										properties: {
											resources: {
												type: 'string',
												description: 'ACL resource'
											},
											fieldName: {
												type: 'string',
												description: 'Missing or invalid field name'
											},
											fieldValue: {
												type: 'string',
												description: 'Incorrect field value'
											}
										}
									}
								},
								trace: {
									type: 'string',
									description: 'Stack trace'
								}
							},
							required: [
								'message'
							]
						}
					},
					default: {
						description: 'Unexpected error',
						schema: {
							type: 'object',
							properties: {
								message: {
									type: 'string',
									description: 'Error message'
								},
								errors: {
									type: 'array',
									description: 'Errors list',
									items: {
										type: 'object',
										description: 'Error details',
										properties: {
											message: {
												type: 'string',
												description: 'Error message'
											},
											parameters: {
												type: 'array',
												description: 'Error parameters list',
												items: {
													type: 'object',
													description: 'Error parameters item',
													properties: {
														resources: {
															type: 'string',
															description: 'ACL resource'
														},
														fieldName: {
															type: 'string',
															description: 'Missing or invalid field name'
														},
														fieldValue: {
															type: 'string',
															description: 'Incorrect field value'
														}
													}
												}
											}
										}
									}
								},
								code: {
									type: 'integer',
									description: 'Error code'
								},
								parameters: {
									type: 'array',
									description: 'Error parameters list',
									items: {
										type: 'object',
										description: 'Error parameters item',
										properties: {
											resources: {
												type: 'string',
												description: 'ACL resource'
											},
											fieldName: {
												type: 'string',
												description: 'Missing or invalid field name'
											},
											fieldValue: {
												type: 'string',
												description: 'Incorrect field value'
											}
										}
									}
								},
								trace: {
									type: 'string',
									description: 'Stack trace'
								}
							},
							required: [
								'message'
							]
						}
					}
				}
			}
		},
		'/V1/guest-carts/{cartId}/payment-methods': {
			get: {
				tags: [
					'quoteGuestPaymentMethodManagementV1'
				],
				description: 'List available payment methods for a specified ' +
					'shopping cart. This call returns an array of ' +
					'objects, but detailed information about each ' +
					'object’s attributes might not be included.  See ' +
					'http://devdocs.magento.com/codelinks/attributes.html#GuestPaymentMethodManagementInterface ' +
					'to determine which call to use to get detailed ' +
					'information about all attributes for an object.',
				operationId: 'quoteGuestPaymentMethodManagementV1GetListGet',
				parameters: [
					{
						name: 'cartId',
						in: 'path',
						type: 'string',
						required: true,
						description: 'The cart ID.'
					}
				],
				responses: {
					'200': {
						description: '200 Success.',
						schema: {
							type: 'array',
							description: 'Array of payment methods.',
							items: {
								type: 'object',
								description: 'Interface PaymentMethodInterface',
								properties: {
									code: {
										type: 'string',
										description: 'Payment method code'
									},
									title: {
										type: 'string',
										description: 'Payment method title'
									}
								},
								required: [
									'code',
									'title'
								]
							}
						}
					},
					'400': {
						description: '400 Bad Request',
						schema: {
							type: 'object',
							properties: {
								message: {
									type: 'string',
									description: 'Error message'
								},
								errors: {
									type: 'array',
									description: 'Errors list',
									items: {
										type: 'object',
										description: 'Error details',
										properties: {
											message: {
												type: 'string',
												description: 'Error message'
											},
											parameters: {
												type: 'array',
												description: 'Error parameters list',
												items: {
													type: 'object',
													description: 'Error parameters item',
													properties: {
														resources: {
															type: 'string',
															description: 'ACL resource'
														},
														fieldName: {
															type: 'string',
															description: 'Missing or invalid field name'
														},
														fieldValue: {
															type: 'string',
															description: 'Incorrect field value'
														}
													}
												}
											}
										}
									}
								},
								code: {
									type: 'integer',
									description: 'Error code'
								},
								parameters: {
									type: 'array',
									description: 'Error parameters list',
									items: {
										type: 'object',
										description: 'Error parameters item',
										properties: {
											resources: {
												type: 'string',
												description: 'ACL resource'
											},
											fieldName: {
												type: 'string',
												description: 'Missing or invalid field name'
											},
											fieldValue: {
												type: 'string',
												description: 'Incorrect field value'
											}
										}
									}
								},
								trace: {
									type: 'string',
									description: 'Stack trace'
								}
							},
							required: [
								'message'
							]
						}
					},
					default: {
						description: 'Unexpected error',
						schema: {
							type: 'object',
							properties: {
								message: {
									type: 'string',
									description: 'Error message'
								},
								errors: {
									type: 'array',
									description: 'Errors list',
									items: {
										type: 'object',
										description: 'Error details',
										properties: {
											message: {
												type: 'string',
												description: 'Error message'
											},
											parameters: {
												type: 'array',
												description: 'Error parameters list',
												items: {
													type: 'object',
													description: 'Error parameters item',
													properties: {
														resources: {
															type: 'string',
															description: 'ACL resource'
														},
														fieldName: {
															type: 'string',
															description: 'Missing or invalid field name'
														},
														fieldValue: {
															type: 'string',
															description: 'Incorrect field value'
														}
													}
												}
											}
										}
									}
								},
								code: {
									type: 'integer',
									description: 'Error code'
								},
								parameters: {
									type: 'array',
									description: 'Error parameters list',
									items: {
										type: 'object',
										description: 'Error parameters item',
										properties: {
											resources: {
												type: 'string',
												description: 'ACL resource'
											},
											fieldName: {
												type: 'string',
												description: 'Missing or invalid field name'
											},
											fieldValue: {
												type: 'string',
												description: 'Incorrect field value'
											}
										}
									}
								},
								trace: {
									type: 'string',
									description: 'Stack trace'
								}
							},
							required: [
								'message'
							]
						}
					}
				}
			}
		},
		'/V1/guest-carts/{cartId}/billing-address': {
			get: {
				tags: [
					'quoteGuestBillingAddressManagementV1'
				],
				description: 'Return the billing address for a specified quote.',
				operationId: 'quoteGuestBillingAddressManagementV1GetGet',
				parameters: [
					{
						name: 'cartId',
						in: 'path',
						type: 'string',
						required: true,
						description: 'The cart ID.'
					}
				],
				responses: {
					'200': {
						description: '200 Success.',
						schema: {
							type: 'object',
							description: 'Interface AddressInterface',
							properties: {
								id: {
									type: 'integer',
									description: 'Id'
								},
								region: {
									type: 'string',
									description: 'Region name'
								},
								region_id: {
									type: 'integer',
									description: 'Region id'
								},
								region_code: {
									type: 'string',
									description: 'Region code'
								},
								country_id: {
									type: 'string',
									description: 'Country id'
								},
								street: {
									type: 'array',
									description: 'Street',
									items: {
										type: 'string'
									}
								},
								company: {
									type: 'string',
									description: 'Company'
								},
								telephone: {
									type: 'string',
									description: 'Telephone number'
								},
								fax: {
									type: 'string',
									description: 'Fax number'
								},
								postcode: {
									type: 'string',
									description: 'Postcode'
								},
								city: {
									type: 'string',
									description: 'City name'
								},
								firstname: {
									type: 'string',
									description: 'First name'
								},
								lastname: {
									type: 'string',
									description: 'Last name'
								},
								middlename: {
									type: 'string',
									description: 'Middle name'
								},
								prefix: {
									type: 'string',
									description: 'Prefix'
								},
								suffix: {
									type: 'string',
									description: 'Suffix'
								},
								vat_id: {
									type: 'string',
									description: 'Vat id'
								},
								customer_id: {
									type: 'integer',
									description: 'Customer id'
								},
								email: {
									type: 'string',
									description: 'Billing/shipping email'
								},
								same_as_billing: {
									type: 'integer',
									description: 'Same as billing flag'
								},
								customer_address_id: {
									type: 'integer',
									description: 'Customer address id'
								},
								save_in_address_book: {
									type: 'integer',
									description: 'Save in address book flag'
								},
								extension_attributes: {
									type: 'object',
									description: 'ExtensionInterface class for @see ' +
										'\\Magento\\Quote\\Api\\Data\\AddressInterface',
									properties: {
										checkout_fields: {
											type: 'array',
											items: {
												type: 'object',
												description: 'Interface for ' +
													'custom attribute ' +
													'value.',
												properties: {
													attribute_code: {
														type: 'string',
														description: 'Attribute code'
													},
													value: {
														type: 'string',
														description: 'Attribute value'
													}
												},
												required: [
													'attribute_code',
													'value'
												]
											}
										}
									}
								},
								custom_attributes: {
									type: 'array',
									description: 'Custom attributes values.',
									items: {
										type: 'object',
										description: 'Interface for custom attribute value.',
										properties: {
											attribute_code: {
												type: 'string',
												description: 'Attribute code'
											},
											value: {
												type: 'string',
												description: 'Attribute value'
											}
										},
										required: [
											'attribute_code',
											'value'
										]
									}
								}
							},
							required: [
								'region',
								'region_id',
								'region_code',
								'country_id',
								'street',
								'telephone',
								'postcode',
								'city',
								'firstname',
								'lastname',
								'email'
							]
						}
					},
					'400': {
						description: '400 Bad Request',
						schema: {
							type: 'object',
							properties: {
								message: {
									type: 'string',
									description: 'Error message'
								},
								errors: {
									type: 'array',
									description: 'Errors list',
									items: {
										type: 'object',
										description: 'Error details',
										properties: {
											message: {
												type: 'string',
												description: 'Error message'
											},
											parameters: {
												type: 'array',
												description: 'Error parameters list',
												items: {
													type: 'object',
													description: 'Error parameters item',
													properties: {
														resources: {
															type: 'string',
															description: 'ACL resource'
														},
														fieldName: {
															type: 'string',
															description: 'Missing or invalid field name'
														},
														fieldValue: {
															type: 'string',
															description: 'Incorrect field value'
														}
													}
												}
											}
										}
									}
								},
								code: {
									type: 'integer',
									description: 'Error code'
								},
								parameters: {
									type: 'array',
									description: 'Error parameters list',
									items: {
										type: 'object',
										description: 'Error parameters item',
										properties: {
											resources: {
												type: 'string',
												description: 'ACL resource'
											},
											fieldName: {
												type: 'string',
												description: 'Missing or invalid field name'
											},
											fieldValue: {
												type: 'string',
												description: 'Incorrect field value'
											}
										}
									}
								},
								trace: {
									type: 'string',
									description: 'Stack trace'
								}
							},
							required: [
								'message'
							]
						}
					},
					default: {
						description: 'Unexpected error',
						schema: {
							type: 'object',
							properties: {
								message: {
									type: 'string',
									description: 'Error message'
								},
								errors: {
									type: 'array',
									description: 'Errors list',
									items: {
										type: 'object',
										description: 'Error details',
										properties: {
											message: {
												type: 'string',
												description: 'Error message'
											},
											parameters: {
												type: 'array',
												description: 'Error parameters list',
												items: {
													type: 'object',
													description: 'Error parameters item',
													properties: {
														resources: {
															type: 'string',
															description: 'ACL resource'
														},
														fieldName: {
															type: 'string',
															description: 'Missing or invalid field name'
														},
														fieldValue: {
															type: 'string',
															description: 'Incorrect field value'
														}
													}
												}
											}
										}
									}
								},
								code: {
									type: 'integer',
									description: 'Error code'
								},
								parameters: {
									type: 'array',
									description: 'Error parameters list',
									items: {
										type: 'object',
										description: 'Error parameters item',
										properties: {
											resources: {
												type: 'string',
												description: 'ACL resource'
											},
											fieldName: {
												type: 'string',
												description: 'Missing or invalid field name'
											},
											fieldValue: {
												type: 'string',
												description: 'Incorrect field value'
											}
										}
									}
								},
								trace: {
									type: 'string',
									description: 'Stack trace'
								}
							},
							required: [
								'message'
							]
						}
					}
				}
			},
			post: {
				tags: [
					'quoteGuestBillingAddressManagementV1'
				],
				description: 'Assign a specified billing ' +
					'address to a specified cart.',
				operationId: 'quoteGuestBillingAddressManagementV1AssignPost',
				parameters: [
					{
						name: 'cartId',
						in: 'path',
						type: 'string',
						required: true,
						description: 'The cart ID.'
					},
					{
						name: 'quoteGuestBillingAddressManagementV1AssignPostBody',
						in: 'body',
						schema: {
							required: [
								'address'
							],
							properties: {
								address: {
									type: 'object',
									description: 'Interface AddressInterface',
									properties: {
										id: {
											type: 'integer',
											description: 'Id'
										},
										region: {
											type: 'string',
											description: 'Region name'
										},
										region_id: {
											type: 'integer',
											description: 'Region id'
										},
										region_code: {
											type: 'string',
											description: 'Region code'
										},
										country_id: {
											type: 'string',
											description: 'Country id'
										},
										street: {
											type: 'array',
											description: 'Street',
											items: {
												type: 'string'
											}
										},
										company: {
											type: 'string',
											description: 'Company'
										},
										telephone: {
											type: 'string',
											description: 'Telephone number'
										},
										fax: {
											type: 'string',
											description: 'Fax number'
										},
										postcode: {
											type: 'string',
											description: 'Postcode'
										},
										city: {
											type: 'string',
											description: 'City name'
										},
										firstname: {
											type: 'string',
											description: 'First name'
										},
										lastname: {
											type: 'string',
											description: 'Last name'
										},
										middlename: {
											type: 'string',
											description: 'Middle name'
										},
										prefix: {
											type: 'string',
											description: 'Prefix'
										},
										suffix: {
											type: 'string',
											description: 'Suffix'
										},
										vat_id: {
											type: 'string',
											description: 'Vat id'
										},
										customer_id: {
											type: 'integer',
											description: 'Customer id'
										},
										email: {
											type: 'string',
											description: 'Billing/shipping email'
										},
										same_as_billing: {
											type: 'integer',
											description: 'Same as billing flag'
										},
										customer_address_id: {
											type: 'integer',
											description: 'Customer address id'
										},
										save_in_address_book: {
											type: 'integer',
											description: 'Save in address book flag'
										},
										extension_attributes: {
											type: 'object',
											description: 'ExtensionInterface class for @see ' +
												'\\Magento\\Quote\\Api\\Data\\AddressInterface',
											properties: {
												checkout_fields: {
													type: 'array',
													items: {
														type: 'object',
														description: 'Interface for ' +
															'custom attribute ' +
															'value.',
														properties: {
															attribute_code: {
																type: 'string',
																description: 'Attribute code'
															},
															value: {
																type: 'string',
																description: 'Attribute value'
															}
														},
														required: [
															'attribute_code',
															'value'
														]
													}
												}
											}
										},
										custom_attributes: {
											type: 'array',
											description: 'Custom attributes values.',
											items: {
												type: 'object',
												description: 'Interface for ' +
													'custom attribute ' +
													'value.',
												properties: {
													attribute_code: {
														type: 'string',
														description: 'Attribute code'
													},
													value: {
														type: 'string',
														description: 'Attribute value'
													}
												},
												required: [
													'attribute_code',
													'value'
												]
											}
										}
									},
									required: [
										'region',
										'region_id',
										'region_code',
										'country_id',
										'street',
										'telephone',
										'postcode',
										'city',
										'firstname',
										'lastname',
										'email'
									]
								},
								useForShipping: {
									type: 'boolean'
								}
							},
							type: 'object'
						}
					}
				],
				responses: {
					'200': {
						description: '200 Success.',
						schema: {
							type: 'integer',
							description: 'Address ID.'
						}
					},
					'400': {
						description: '400 Bad Request',
						schema: {
							type: 'object',
							properties: {
								message: {
									type: 'string',
									description: 'Error message'
								},
								errors: {
									type: 'array',
									description: 'Errors list',
									items: {
										type: 'object',
										description: 'Error details',
										properties: {
											message: {
												type: 'string',
												description: 'Error message'
											},
											parameters: {
												type: 'array',
												description: 'Error parameters list',
												items: {
													type: 'object',
													description: 'Error parameters item',
													properties: {
														resources: {
															type: 'string',
															description: 'ACL resource'
														},
														fieldName: {
															type: 'string',
															description: 'Missing or invalid field name'
														},
														fieldValue: {
															type: 'string',
															description: 'Incorrect field value'
														}
													}
												}
											}
										}
									}
								},
								code: {
									type: 'integer',
									description: 'Error code'
								},
								parameters: {
									type: 'array',
									description: 'Error parameters list',
									items: {
										type: 'object',
										description: 'Error parameters item',
										properties: {
											resources: {
												type: 'string',
												description: 'ACL resource'
											},
											fieldName: {
												type: 'string',
												description: 'Missing or invalid field name'
											},
											fieldValue: {
												type: 'string',
												description: 'Incorrect field value'
											}
										}
									}
								},
								trace: {
									type: 'string',
									description: 'Stack trace'
								}
							},
							required: [
								'message'
							]
						}
					},
					default: {
						description: 'Unexpected error',
						schema: {
							type: 'object',
							properties: {
								message: {
									type: 'string',
									description: 'Error message'
								},
								errors: {
									type: 'array',
									description: 'Errors list',
									items: {
										type: 'object',
										description: 'Error details',
										properties: {
											message: {
												type: 'string',
												description: 'Error message'
											},
											parameters: {
												type: 'array',
												description: 'Error parameters list',
												items: {
													type: 'object',
													description: 'Error parameters item',
													properties: {
														resources: {
															type: 'string',
															description: 'ACL resource'
														},
														fieldName: {
															type: 'string',
															description: 'Missing or invalid field name'
														},
														fieldValue: {
															type: 'string',
															description: 'Incorrect field value'
														}
													}
												}
											}
										}
									}
								},
								code: {
									type: 'integer',
									description: 'Error code'
								},
								parameters: {
									type: 'array',
									description: 'Error parameters list',
									items: {
										type: 'object',
										description: 'Error parameters item',
										properties: {
											resources: {
												type: 'string',
												description: 'ACL resource'
											},
											fieldName: {
												type: 'string',
												description: 'Missing or invalid field name'
											},
											fieldValue: {
												type: 'string',
												description: 'Incorrect field value'
											}
										}
									}
								},
								trace: {
									type: 'string',
									description: 'Stack trace'
								}
							},
							required: [
								'message'
							]
						}
					}
				}
			}
		},
		'/V1/guest-carts/{cartId}/coupons': {
			get: {
				tags: [
					'quoteGuestCouponManagementV1'
				],
				description: 'Return information for a coupon in a specified cart.',
				operationId: 'quoteGuestCouponManagementV1GetGet',
				parameters: [
					{
						name: 'cartId',
						in: 'path',
						type: 'string',
						required: true,
						description: 'The cart ID.'
					}
				],
				responses: {
					'200': {
						description: '200 Success.',
						schema: {
							type: 'string',
							description: 'The coupon code data.'
						}
					},
					'400': {
						description: '400 Bad Request',
						schema: {
							type: 'object',
							properties: {
								message: {
									type: 'string',
									description: 'Error message'
								},
								errors: {
									type: 'array',
									description: 'Errors list',
									items: {
										type: 'object',
										description: 'Error details',
										properties: {
											message: {
												type: 'string',
												description: 'Error message'
											},
											parameters: {
												type: 'array',
												description: 'Error parameters list',
												items: {
													type: 'object',
													description: 'Error parameters item',
													properties: {
														resources: {
															type: 'string',
															description: 'ACL resource'
														},
														fieldName: {
															type: 'string',
															description: 'Missing or invalid field name'
														},
														fieldValue: {
															type: 'string',
															description: 'Incorrect field value'
														}
													}
												}
											}
										}
									}
								},
								code: {
									type: 'integer',
									description: 'Error code'
								},
								parameters: {
									type: 'array',
									description: 'Error parameters list',
									items: {
										type: 'object',
										description: 'Error parameters item',
										properties: {
											resources: {
												type: 'string',
												description: 'ACL resource'
											},
											fieldName: {
												type: 'string',
												description: 'Missing or invalid field name'
											},
											fieldValue: {
												type: 'string',
												description: 'Incorrect field value'
											}
										}
									}
								},
								trace: {
									type: 'string',
									description: 'Stack trace'
								}
							},
							required: [
								'message'
							]
						}
					},
					default: {
						description: 'Unexpected error',
						schema: {
							type: 'object',
							properties: {
								message: {
									type: 'string',
									description: 'Error message'
								},
								errors: {
									type: 'array',
									description: 'Errors list',
									items: {
										type: 'object',
										description: 'Error details',
										properties: {
											message: {
												type: 'string',
												description: 'Error message'
											},
											parameters: {
												type: 'array',
												description: 'Error parameters list',
												items: {
													type: 'object',
													description: 'Error parameters item',
													properties: {
														resources: {
															type: 'string',
															description: 'ACL resource'
														},
														fieldName: {
															type: 'string',
															description: 'Missing or invalid field name'
														},
														fieldValue: {
															type: 'string',
															description: 'Incorrect field value'
														}
													}
												}
											}
										}
									}
								},
								code: {
									type: 'integer',
									description: 'Error code'
								},
								parameters: {
									type: 'array',
									description: 'Error parameters list',
									items: {
										type: 'object',
										description: 'Error parameters item',
										properties: {
											resources: {
												type: 'string',
												description: 'ACL resource'
											},
											fieldName: {
												type: 'string',
												description: 'Missing or invalid field name'
											},
											fieldValue: {
												type: 'string',
												description: 'Incorrect field value'
											}
										}
									}
								},
								trace: {
									type: 'string',
									description: 'Stack trace'
								}
							},
							required: [
								'message'
							]
						}
					}
				}
			},
			delete: {
				tags: [
					'quoteGuestCouponManagementV1'
				],
				description: 'Delete a coupon from a specified cart.',
				operationId: 'quoteGuestCouponManagementV1RemoveDelete',
				parameters: [
					{
						name: 'cartId',
						in: 'path',
						type: 'string',
						required: true,
						description: 'The cart ID.'
					}
				],
				responses: {
					'200': {
						description: '200 Success.',
						schema: {
							type: 'boolean'
						}
					},
					'400': {
						description: '400 Bad Request',
						schema: {
							type: 'object',
							properties: {
								message: {
									type: 'string',
									description: 'Error message'
								},
								errors: {
									type: 'array',
									description: 'Errors list',
									items: {
										type: 'object',
										description: 'Error details',
										properties: {
											message: {
												type: 'string',
												description: 'Error message'
											},
											parameters: {
												type: 'array',
												description: 'Error parameters list',
												items: {
													type: 'object',
													description: 'Error parameters item',
													properties: {
														resources: {
															type: 'string',
															description: 'ACL resource'
														},
														fieldName: {
															type: 'string',
															description: 'Missing or invalid field name'
														},
														fieldValue: {
															type: 'string',
															description: 'Incorrect field value'
														}
													}
												}
											}
										}
									}
								},
								code: {
									type: 'integer',
									description: 'Error code'
								},
								parameters: {
									type: 'array',
									description: 'Error parameters list',
									items: {
										type: 'object',
										description: 'Error parameters item',
										properties: {
											resources: {
												type: 'string',
												description: 'ACL resource'
											},
											fieldName: {
												type: 'string',
												description: 'Missing or invalid field name'
											},
											fieldValue: {
												type: 'string',
												description: 'Incorrect field value'
											}
										}
									}
								},
								trace: {
									type: 'string',
									description: 'Stack trace'
								}
							},
							required: [
								'message'
							]
						}
					},
					default: {
						description: 'Unexpected error',
						schema: {
							type: 'object',
							properties: {
								message: {
									type: 'string',
									description: 'Error message'
								},
								errors: {
									type: 'array',
									description: 'Errors list',
									items: {
										type: 'object',
										description: 'Error details',
										properties: {
											message: {
												type: 'string',
												description: 'Error message'
											},
											parameters: {
												type: 'array',
												description: 'Error parameters list',
												items: {
													type: 'object',
													description: 'Error parameters item',
													properties: {
														resources: {
															type: 'string',
															description: 'ACL resource'
														},
														fieldName: {
															type: 'string',
															description: 'Missing or invalid field name'
														},
														fieldValue: {
															type: 'string',
															description: 'Incorrect field value'
														}
													}
												}
											}
										}
									}
								},
								code: {
									type: 'integer',
									description: 'Error code'
								},
								parameters: {
									type: 'array',
									description: 'Error parameters list',
									items: {
										type: 'object',
										description: 'Error parameters item',
										properties: {
											resources: {
												type: 'string',
												description: 'ACL resource'
											},
											fieldName: {
												type: 'string',
												description: 'Missing or invalid field name'
											},
											fieldValue: {
												type: 'string',
												description: 'Incorrect field value'
											}
										}
									}
								},
								trace: {
									type: 'string',
									description: 'Stack trace'
								}
							},
							required: [
								'message'
							]
						}
					}
				}
			}
		},
		'/V1/guest-carts/{cartId}/coupons/{couponCode}': {
			put: {
				tags: [
					'quoteGuestCouponManagementV1'
				],
				description: 'Add a coupon by code to a specified cart.',
				operationId: 'quoteGuestCouponManagementV1SetPut',
				parameters: [
					{
						name: 'cartId',
						in: 'path',
						type: 'string',
						required: true,
						description: 'The cart ID.'
					},
					{
						name: 'couponCode',
						in: 'path',
						type: 'string',
						required: true,
						description: 'The coupon code data.'
					}
				],
				responses: {
					'200': {
						description: '200 Success.',
						schema: {
							type: 'boolean'
						}
					},
					'400': {
						description: '400 Bad Request',
						schema: {
							type: 'object',
							properties: {
								message: {
									type: 'string',
									description: 'Error message'
								},
								errors: {
									type: 'array',
									description: 'Errors list',
									items: {
										type: 'object',
										description: 'Error details',
										properties: {
											message: {
												type: 'string',
												description: 'Error message'
											},
											parameters: {
												type: 'array',
												description: 'Error parameters list',
												items: {
													type: 'object',
													description: 'Error parameters item',
													properties: {
														resources: {
															type: 'string',
															description: 'ACL resource'
														},
														fieldName: {
															type: 'string',
															description: 'Missing or invalid field name'
														},
														fieldValue: {
															type: 'string',
															description: 'Incorrect field value'
														}
													}
												}
											}
										}
									}
								},
								code: {
									type: 'integer',
									description: 'Error code'
								},
								parameters: {
									type: 'array',
									description: 'Error parameters list',
									items: {
										type: 'object',
										description: 'Error parameters item',
										properties: {
											resources: {
												type: 'string',
												description: 'ACL resource'
											},
											fieldName: {
												type: 'string',
												description: 'Missing or invalid field name'
											},
											fieldValue: {
												type: 'string',
												description: 'Incorrect field value'
											}
										}
									}
								},
								trace: {
									type: 'string',
									description: 'Stack trace'
								}
							},
							required: [
								'message'
							]
						}
					},
					default: {
						description: 'Unexpected error',
						schema: {
							type: 'object',
							properties: {
								message: {
									type: 'string',
									description: 'Error message'
								},
								errors: {
									type: 'array',
									description: 'Errors list',
									items: {
										type: 'object',
										description: 'Error details',
										properties: {
											message: {
												type: 'string',
												description: 'Error message'
											},
											parameters: {
												type: 'array',
												description: 'Error parameters list',
												items: {
													type: 'object',
													description: 'Error parameters item',
													properties: {
														resources: {
															type: 'string',
															description: 'ACL resource'
														},
														fieldName: {
															type: 'string',
															description: 'Missing or invalid field name'
														},
														fieldValue: {
															type: 'string',
															description: 'Incorrect field value'
														}
													}
												}
											}
										}
									}
								},
								code: {
									type: 'integer',
									description: 'Error code'
								},
								parameters: {
									type: 'array',
									description: 'Error parameters list',
									items: {
										type: 'object',
										description: 'Error parameters item',
										properties: {
											resources: {
												type: 'string',
												description: 'ACL resource'
											},
											fieldName: {
												type: 'string',
												description: 'Missing or invalid field name'
											},
											fieldValue: {
												type: 'string',
												description: 'Incorrect field value'
											}
										}
									}
								},
								trace: {
									type: 'string',
									description: 'Stack trace'
								}
							},
							required: [
								'message'
							]
						}
					}
				}
			}
		},
		'/V1/guest-carts/{cartId}/collect-totals': {
			put: {
				tags: [
					'quoteGuestCartTotalManagementV1'
				],
				description: 'Set shipping/billing methods and additional ' +
					'data for cart and collect totals for guest.',
				operationId: 'quoteGuestCartTotalManagementV1CollectTotalsPut',
				parameters: [
					{
						name: 'cartId',
						in: 'path',
						type: 'string',
						required: true,
						description: 'The cart ID.'
					},
					{
						name: 'quoteGuestCartTotalManagementV1CollectTotalsPutBody',
						in: 'body',
						schema: {
							required: [
								'paymentMethod'
							],
							properties: {
								paymentMethod: {
									type: 'object',
									description: 'Interface PaymentInterface',
									properties: {
										po_number: {
											type: 'string',
											description: 'Purchase order number'
										},
										method: {
											type: 'string',
											description: 'Payment method code'
										},
										additional_data: {
											type: 'array',
											description: 'Payment additional details',
											items: {
												type: 'string'
											}
										},
										extension_attributes: {
											type: 'object',
											description: 'ExtensionInterface class for @see ' +
												'\\Magento\\Quote\\Api\\Data\\PaymentInterface',
											properties: {
												agreement_ids: {
													type: 'array',
													items: {
														type: 'string'
													}
												}
											}
										}
									},
									required: [
										'method'
									]
								},
								shippingCarrierCode: {
									type: 'string',
									description: 'The carrier code.'
								},
								shippingMethodCode: {
									type: 'string',
									description: 'The shipping method code.'
								},
								additionalData: {
									type: 'object',
									description: 'Additional data for totals collection.',
									properties: {
										extension_attributes: {
											type: 'object',
											description: 'ExtensionInterface class for ' +
												'@see ' +
												'\\Magento\\Quote\\Api\\Data\\TotalsAdditionalDataInterface',
											properties: {
												gift_messages: {
													type: 'array',
													items: {
														type: 'object',
														description: 'Interface MessageInterface',
														properties: {
															gift_message_id: {
																type: 'integer',
																description: 'Gift message ID. ' +
																	'Otherwise, null.'
															},
															customer_id: {
																type: 'integer',
																description: 'Customer ID. ' +
																	'Otherwise, null.'
															},
															sender: {
																type: 'string',
																description: 'Sender name.'
															},
															recipient: {
																type: 'string',
																description: 'Recipient name.'
															},
															message: {
																type: 'string',
																description: 'Message text.'
															},
															extension_attributes: {
																type: 'object',
																description: 'ExtensionInterface class ' +
																	'for @see ' +
																	'\\Magento\\GiftMessage\\Api\\Data\\MessageInterface',
																properties: {
																	entity_id: {
																		type: 'string'
																	},
																	entity_type: {
																		type: 'string'
																	}
																}
															}
														},
														required: [
															'sender',
															'recipient',
															'message'
														]
													}
												}
											}
										},
										custom_attributes: {
											type: 'array',
											description: 'Custom attributes values.',
											items: {
												type: 'object',
												description: 'Interface for ' +
													'custom attribute ' +
													'value.',
												properties: {
													attribute_code: {
														type: 'string',
														description: 'Attribute code'
													},
													value: {
														type: 'string',
														description: 'Attribute value'
													}
												},
												required: [
													'attribute_code',
													'value'
												]
											}
										}
									}
								}
							},
							type: 'object'
						}
					}
				],
				responses: {
					'200': {
						description: '200 Success.',
						schema: {
							type: 'object',
							description: 'Interface TotalsInterface',
							properties: {
								grand_total: {
									type: 'number',
									description: 'Grand total in quote currency'
								},
								base_grand_total: {
									type: 'number',
									description: 'Grand total in base currency'
								},
								subtotal: {
									type: 'number',
									description: 'Subtotal in quote currency'
								},
								base_subtotal: {
									type: 'number',
									description: 'Subtotal in base currency'
								},
								discount_amount: {
									type: 'number',
									description: 'Discount amount in quote currency'
								},
								base_discount_amount: {
									type: 'number',
									description: 'Discount amount in base currency'
								},
								subtotal_with_discount: {
									type: 'number',
									description: 'Subtotal in quote ' +
										'currency with applied ' +
										'discount'
								},
								base_subtotal_with_discount: {
									type: 'number',
									description: 'Subtotal in base ' +
										'currency with applied ' +
										'discount'
								},
								shipping_amount: {
									type: 'number',
									description: 'Shipping amount in quote currency'
								},
								base_shipping_amount: {
									type: 'number',
									description: 'Shipping amount in base currency'
								},
								shipping_discount_amount: {
									type: 'number',
									description: 'Shipping discount amount in quote currency'
								},
								base_shipping_discount_amount: {
									type: 'number',
									description: 'Shipping discount amount in base currency'
								},
								tax_amount: {
									type: 'number',
									description: 'Tax amount in quote currency'
								},
								base_tax_amount: {
									type: 'number',
									description: 'Tax amount in base currency'
								},
								weee_tax_applied_amount: {
									type: 'number',
									description: 'Item weee tax applied ' +
										'amount in quote ' +
										'currency.'
								},
								shipping_tax_amount: {
									type: 'number',
									description: 'Shipping tax amount in quote currency'
								},
								base_shipping_tax_amount: {
									type: 'number',
									description: 'Shipping tax amount in base currency'
								},
								subtotal_incl_tax: {
									type: 'number',
									description: 'Subtotal including tax in quote currency'
								},
								base_subtotal_incl_tax: {
									type: 'number',
									description: 'Subtotal including tax in base currency'
								},
								shipping_incl_tax: {
									type: 'number',
									description: 'Shipping including tax in quote currency'
								},
								base_shipping_incl_tax: {
									type: 'number',
									description: 'Shipping including tax in base currency'
								},
								base_currency_code: {
									type: 'string',
									description: 'Base currency code'
								},
								quote_currency_code: {
									type: 'string',
									description: 'Quote currency code'
								},
								coupon_code: {
									type: 'string',
									description: 'Applied coupon code'
								},
								items_qty: {
									type: 'integer',
									description: 'Items qty'
								},
								items: {
									type: 'array',
									description: 'Totals by items',
									items: {
										type: 'object',
										description: 'Interface TotalsItemInterface',
										properties: {
											item_id: {
												type: 'integer',
												description: 'Item id'
											},
											price: {
												type: 'number',
												description: 'Item price in quote currency.'
											},
											base_price: {
												type: 'number',
												description: 'Item price in base currency.'
											},
											qty: {
												type: 'number',
												description: 'Item quantity.'
											},
											row_total: {
												type: 'number',
												description: 'Row total in quote currency.'
											},
											base_row_total: {
												type: 'number',
												description: 'Row total in base currency.'
											},
											row_total_with_discount: {
												type: 'number',
												description: 'Row total with discount in ' +
													'quote currency. Otherwise, ' +
													'null.'
											},
											tax_amount: {
												type: 'number',
												description: 'Tax amount in quote ' +
													'currency. Otherwise, ' +
													'null.'
											},
											base_tax_amount: {
												type: 'number',
												description: 'Tax amount in base ' +
													'currency. Otherwise, ' +
													'null.'
											},
											tax_percent: {
												type: 'number',
												description: 'Tax percent. Otherwise, null.'
											},
											discount_amount: {
												type: 'number',
												description: 'Discount amount in quote ' +
													'currency. Otherwise, null.'
											},
											base_discount_amount: {
												type: 'number',
												description: 'Discount amount in base ' +
													'currency. Otherwise, ' +
													'null.'
											},
											discount_percent: {
												type: 'number',
												description: 'Discount percent. Otherwise, null.'
											},
											price_incl_tax: {
												type: 'number',
												description: 'Price including tax in quote ' +
													'currency. Otherwise, null.'
											},
											base_price_incl_tax: {
												type: 'number',
												description: 'Price including tax in base ' +
													'currency. Otherwise, null.'
											},
											row_total_incl_tax: {
												type: 'number',
												description: 'Row total including tax in ' +
													'quote currency. Otherwise, ' +
													'null.'
											},
											base_row_total_incl_tax: {
												type: 'number',
												description: 'Row total including tax in ' +
													'base currency. Otherwise, ' +
													'null.'
											},
											options: {
												type: 'string',
												description: 'Item price in quote currency.'
											},
											weee_tax_applied_amount: {
												type: 'number',
												description: 'Item weee tax applied ' +
													'amount in quote ' +
													'currency.'
											},
											weee_tax_applied: {
												type: 'string',
												description: 'Item weee tax ' +
													'applied in quote ' +
													'currency.'
											},
											extension_attributes: {
												type: 'object',
												description: 'ExtensionInterface class ' +
													'for @see ' +
													'\\Magento\\Quote\\Api\\Data\\TotalsItemInterface'
											},
											name: {
												type: 'string',
												description: 'Product name. Otherwise, null.'
											}
										},
										required: [
											'item_id',
											'price',
											'base_price',
											'qty',
											'row_total',
											'base_row_total',
											'options',
											'weee_tax_applied_amount',
											'weee_tax_applied'
										]
									}
								},
								total_segments: {
									type: 'array',
									description: 'Dynamically calculated totals',
									items: {
										type: 'object',
										description: 'Interface TotalsInterface',
										properties: {
											code: {
												type: 'string',
												description: 'Code'
											},
											title: {
												type: 'string',
												description: 'Total title'
											},
											value: {
												type: 'number',
												description: 'Total value'
											},
											area: {
												type: 'string',
												description: 'Display area code.'
											},
											extension_attributes: {
												type: 'object',
												description: 'ExtensionInterface class ' +
													'for @see ' +
													'\\Magento\\Quote\\Api\\Data\\TotalSegmentInterface',
												properties: {
													tax_grandtotal_details: {
														type: 'array',
														items: {
															type: 'object',
															description: 'Interface ' +
																'GrandTotalDetailsInterface',
															properties: {
																amount: {
																	type: 'number',
																	description: 'Tax amount value'
																},
																rates: {
																	type: 'array',
																	description: 'Tax rates info',
																	items: {
																		type: 'object',
																		description: 'Interface ' +
																			'GrandTotalRatesInterface',
																		properties: {
																			percent: {
																				type: 'string',
																				description: 'Tax percentage value'
																			},
																			title: {
																				type: 'string',
																				description: 'Rate title'
																			}
																		},
																		required: [
																			'percent',
																			'title'
																		]
																	}
																},
																group_id: {
																	type: 'integer',
																	description: 'Group identifier'
																}
															},
															required: [
																'amount',
																'rates',
																'group_id'
															]
														}
													}
												}
											}
										},
										required: [
											'code',
											'value'
										]
									}
								},
								extension_attributes: {
									type: 'object',
									description: 'ExtensionInterface class for @see ' +
										'\\Magento\\Quote\\Api\\Data\\TotalsInterface',
									properties: {
										coupon_label: {
											type: 'string'
										}
									}
								}
							},
							required: [
								'weee_tax_applied_amount',
								'total_segments'
							]
						}
					},
					default: {
						description: 'Unexpected error',
						schema: {
							type: 'object',
							properties: {
								message: {
									type: 'string',
									description: 'Error message'
								},
								errors: {
									type: 'array',
									description: 'Errors list',
									items: {
										type: 'object',
										description: 'Error details',
										properties: {
											message: {
												type: 'string',
												description: 'Error message'
											},
											parameters: {
												type: 'array',
												description: 'Error parameters list',
												items: {
													type: 'object',
													description: 'Error parameters item',
													properties: {
														resources: {
															type: 'string',
															description: 'ACL resource'
														},
														fieldName: {
															type: 'string',
															description: 'Missing or invalid field name'
														},
														fieldValue: {
															type: 'string',
															description: 'Incorrect field value'
														}
													}
												}
											}
										}
									}
								},
								code: {
									type: 'integer',
									description: 'Error code'
								},
								parameters: {
									type: 'array',
									description: 'Error parameters list',
									items: {
										type: 'object',
										description: 'Error parameters item',
										properties: {
											resources: {
												type: 'string',
												description: 'ACL resource'
											},
											fieldName: {
												type: 'string',
												description: 'Missing or invalid field name'
											},
											fieldValue: {
												type: 'string',
												description: 'Incorrect field value'
											}
										}
									}
								},
								trace: {
									type: 'string',
									description: 'Stack trace'
								}
							},
							required: [
								'message'
							]
						}
					}
				}
			}
		},
		'/V1/guest-carts/{cartId}/totals': {
			get: {
				tags: [
					'quoteGuestCartTotalRepositoryV1'
				],
				description: 'Return quote totals data for a specified cart.',
				operationId: 'quoteGuestCartTotalRepositoryV1GetGet',
				parameters: [
					{
						name: 'cartId',
						in: 'path',
						type: 'string',
						required: true,
						description: 'The cart ID.'
					}
				],
				responses: {
					'200': {
						description: '200 Success.',
						schema: {
							type: 'object',
							description: 'Interface TotalsInterface',
							properties: {
								grand_total: {
									type: 'number',
									description: 'Grand total in quote currency'
								},
								base_grand_total: {
									type: 'number',
									description: 'Grand total in base currency'
								},
								subtotal: {
									type: 'number',
									description: 'Subtotal in quote currency'
								},
								base_subtotal: {
									type: 'number',
									description: 'Subtotal in base currency'
								},
								discount_amount: {
									type: 'number',
									description: 'Discount amount in quote currency'
								},
								base_discount_amount: {
									type: 'number',
									description: 'Discount amount in base currency'
								},
								subtotal_with_discount: {
									type: 'number',
									description: 'Subtotal in quote ' +
										'currency with applied ' +
										'discount'
								},
								base_subtotal_with_discount: {
									type: 'number',
									description: 'Subtotal in base ' +
										'currency with applied ' +
										'discount'
								},
								shipping_amount: {
									type: 'number',
									description: 'Shipping amount in quote currency'
								},
								base_shipping_amount: {
									type: 'number',
									description: 'Shipping amount in base currency'
								},
								shipping_discount_amount: {
									type: 'number',
									description: 'Shipping discount amount in quote currency'
								},
								base_shipping_discount_amount: {
									type: 'number',
									description: 'Shipping discount amount in base currency'
								},
								tax_amount: {
									type: 'number',
									description: 'Tax amount in quote currency'
								},
								base_tax_amount: {
									type: 'number',
									description: 'Tax amount in base currency'
								},
								weee_tax_applied_amount: {
									type: 'number',
									description: 'Item weee tax applied ' +
										'amount in quote ' +
										'currency.'
								},
								shipping_tax_amount: {
									type: 'number',
									description: 'Shipping tax amount in quote currency'
								},
								base_shipping_tax_amount: {
									type: 'number',
									description: 'Shipping tax amount in base currency'
								},
								subtotal_incl_tax: {
									type: 'number',
									description: 'Subtotal including tax in quote currency'
								},
								base_subtotal_incl_tax: {
									type: 'number',
									description: 'Subtotal including tax in base currency'
								},
								shipping_incl_tax: {
									type: 'number',
									description: 'Shipping including tax in quote currency'
								},
								base_shipping_incl_tax: {
									type: 'number',
									description: 'Shipping including tax in base currency'
								},
								base_currency_code: {
									type: 'string',
									description: 'Base currency code'
								},
								quote_currency_code: {
									type: 'string',
									description: 'Quote currency code'
								},
								coupon_code: {
									type: 'string',
									description: 'Applied coupon code'
								},
								items_qty: {
									type: 'integer',
									description: 'Items qty'
								},
								items: {
									type: 'array',
									description: 'Totals by items',
									items: {
										type: 'object',
										description: 'Interface TotalsItemInterface',
										properties: {
											item_id: {
												type: 'integer',
												description: 'Item id'
											},
											price: {
												type: 'number',
												description: 'Item price in quote currency.'
											},
											base_price: {
												type: 'number',
												description: 'Item price in base currency.'
											},
											qty: {
												type: 'number',
												description: 'Item quantity.'
											},
											row_total: {
												type: 'number',
												description: 'Row total in quote currency.'
											},
											base_row_total: {
												type: 'number',
												description: 'Row total in base currency.'
											},
											row_total_with_discount: {
												type: 'number',
												description: 'Row total with discount in ' +
													'quote currency. Otherwise, ' +
													'null.'
											},
											tax_amount: {
												type: 'number',
												description: 'Tax amount in quote ' +
													'currency. Otherwise, ' +
													'null.'
											},
											base_tax_amount: {
												type: 'number',
												description: 'Tax amount in base ' +
													'currency. Otherwise, ' +
													'null.'
											},
											tax_percent: {
												type: 'number',
												description: 'Tax percent. Otherwise, null.'
											},
											discount_amount: {
												type: 'number',
												description: 'Discount amount in quote ' +
													'currency. Otherwise, null.'
											},
											base_discount_amount: {
												type: 'number',
												description: 'Discount amount in base ' +
													'currency. Otherwise, ' +
													'null.'
											},
											discount_percent: {
												type: 'number',
												description: 'Discount percent. Otherwise, null.'
											},
											price_incl_tax: {
												type: 'number',
												description: 'Price including tax in quote ' +
													'currency. Otherwise, null.'
											},
											base_price_incl_tax: {
												type: 'number',
												description: 'Price including tax in base ' +
													'currency. Otherwise, null.'
											},
											row_total_incl_tax: {
												type: 'number',
												description: 'Row total including tax in ' +
													'quote currency. Otherwise, ' +
													'null.'
											},
											base_row_total_incl_tax: {
												type: 'number',
												description: 'Row total including tax in ' +
													'base currency. Otherwise, ' +
													'null.'
											},
											options: {
												type: 'string',
												description: 'Item price in quote currency.'
											},
											weee_tax_applied_amount: {
												type: 'number',
												description: 'Item weee tax applied ' +
													'amount in quote ' +
													'currency.'
											},
											weee_tax_applied: {
												type: 'string',
												description: 'Item weee tax ' +
													'applied in quote ' +
													'currency.'
											},
											extension_attributes: {
												type: 'object',
												description: 'ExtensionInterface class ' +
													'for @see ' +
													'\\Magento\\Quote\\Api\\Data\\TotalsItemInterface'
											},
											name: {
												type: 'string',
												description: 'Product name. Otherwise, null.'
											}
										},
										required: [
											'item_id',
											'price',
											'base_price',
											'qty',
											'row_total',
											'base_row_total',
											'options',
											'weee_tax_applied_amount',
											'weee_tax_applied'
										]
									}
								},
								total_segments: {
									type: 'array',
									description: 'Dynamically calculated totals',
									items: {
										type: 'object',
										description: 'Interface TotalsInterface',
										properties: {
											code: {
												type: 'string',
												description: 'Code'
											},
											title: {
												type: 'string',
												description: 'Total title'
											},
											value: {
												type: 'number',
												description: 'Total value'
											},
											area: {
												type: 'string',
												description: 'Display area code.'
											},
											extension_attributes: {
												type: 'object',
												description: 'ExtensionInterface class ' +
													'for @see ' +
													'\\Magento\\Quote\\Api\\Data\\TotalSegmentInterface',
												properties: {
													tax_grandtotal_details: {
														type: 'array',
														items: {
															type: 'object',
															description: 'Interface ' +
																'GrandTotalDetailsInterface',
															properties: {
																amount: {
																	type: 'number',
																	description: 'Tax amount value'
																},
																rates: {
																	type: 'array',
																	description: 'Tax rates info',
																	items: {
																		type: 'object',
																		description: 'Interface ' +
																			'GrandTotalRatesInterface',
																		properties: {
																			percent: {
																				type: 'string',
																				description: 'Tax percentage value'
																			},
																			title: {
																				type: 'string',
																				description: 'Rate title'
																			}
																		},
																		required: [
																			'percent',
																			'title'
																		]
																	}
																},
																group_id: {
																	type: 'integer',
																	description: 'Group identifier'
																}
															},
															required: [
																'amount',
																'rates',
																'group_id'
															]
														}
													}
												}
											}
										},
										required: [
											'code',
											'value'
										]
									}
								},
								extension_attributes: {
									type: 'object',
									description: 'ExtensionInterface class for @see ' +
										'\\Magento\\Quote\\Api\\Data\\TotalsInterface',
									properties: {
										coupon_label: {
											type: 'string'
										}
									}
								}
							},
							required: [
								'weee_tax_applied_amount',
								'total_segments'
							]
						}
					},
					'400': {
						description: '400 Bad Request',
						schema: {
							type: 'object',
							properties: {
								message: {
									type: 'string',
									description: 'Error message'
								},
								errors: {
									type: 'array',
									description: 'Errors list',
									items: {
										type: 'object',
										description: 'Error details',
										properties: {
											message: {
												type: 'string',
												description: 'Error message'
											},
											parameters: {
												type: 'array',
												description: 'Error parameters list',
												items: {
													type: 'object',
													description: 'Error parameters item',
													properties: {
														resources: {
															type: 'string',
															description: 'ACL resource'
														},
														fieldName: {
															type: 'string',
															description: 'Missing or invalid field name'
														},
														fieldValue: {
															type: 'string',
															description: 'Incorrect field value'
														}
													}
												}
											}
										}
									}
								},
								code: {
									type: 'integer',
									description: 'Error code'
								},
								parameters: {
									type: 'array',
									description: 'Error parameters list',
									items: {
										type: 'object',
										description: 'Error parameters item',
										properties: {
											resources: {
												type: 'string',
												description: 'ACL resource'
											},
											fieldName: {
												type: 'string',
												description: 'Missing or invalid field name'
											},
											fieldValue: {
												type: 'string',
												description: 'Incorrect field value'
											}
										}
									}
								},
								trace: {
									type: 'string',
									description: 'Stack trace'
								}
							},
							required: [
								'message'
							]
						}
					},
					default: {
						description: 'Unexpected error',
						schema: {
							type: 'object',
							properties: {
								message: {
									type: 'string',
									description: 'Error message'
								},
								errors: {
									type: 'array',
									description: 'Errors list',
									items: {
										type: 'object',
										description: 'Error details',
										properties: {
											message: {
												type: 'string',
												description: 'Error message'
											},
											parameters: {
												type: 'array',
												description: 'Error parameters list',
												items: {
													type: 'object',
													description: 'Error parameters item',
													properties: {
														resources: {
															type: 'string',
															description: 'ACL resource'
														},
														fieldName: {
															type: 'string',
															description: 'Missing or invalid field name'
														},
														fieldValue: {
															type: 'string',
															description: 'Incorrect field value'
														}
													}
												}
											}
										}
									}
								},
								code: {
									type: 'integer',
									description: 'Error code'
								},
								parameters: {
									type: 'array',
									description: 'Error parameters list',
									items: {
										type: 'object',
										description: 'Error parameters item',
										properties: {
											resources: {
												type: 'string',
												description: 'ACL resource'
											},
											fieldName: {
												type: 'string',
												description: 'Missing or invalid field name'
											},
											fieldValue: {
												type: 'string',
												description: 'Incorrect field value'
											}
										}
									}
								},
								trace: {
									type: 'string',
									description: 'Stack trace'
								}
							},
							required: [
								'message'
							]
						}
					}
				}
			}
		},
		'/V1/search': {
			get: {
				tags: [
					'searchV1'
				],
				description: 'Make Full Text Search and return found Documents',
				operationId: 'searchV1SearchGet',
				parameters: [
					{
						name: 'searchCriteria[requestName]',
						in: 'query',
						type: 'string'
					},
					{
						name: 'searchCriteria[filterGroups][0][filters][0][field]',
						in: 'query',
						type: 'string',
						description: 'Field'
					},
					{
						name: 'searchCriteria[filterGroups][0][filters][0][value]',
						in: 'query',
						type: 'string',
						description: 'Value'
					},
					{
						name: 'searchCriteria[filterGroups][0][filters][0][conditionType]',
						in: 'query',
						type: 'string',
						description: 'Condition type'
					},
					{
						name: 'searchCriteria[sortOrders][0][field]',
						in: 'query',
						type: 'string',
						description: 'Sorting field.'
					},
					{
						name: 'searchCriteria[sortOrders][0][direction]',
						in: 'query',
						type: 'string',
						description: 'Sorting direction.'
					},
					{
						name: 'searchCriteria[pageSize]',
						in: 'query',
						type: 'integer',
						description: 'Page size.'
					},
					{
						name: 'searchCriteria[currentPage]',
						in: 'query',
						type: 'integer',
						description: 'Current page.'
					}
				],
				responses: {
					'200': {
						description: '200 Success.',
						schema: {
							type: 'object',
							description: 'Interface SearchResultInterface',
							properties: {
								items: {
									type: 'array',
									items: {
										type: 'object',
										description: 'Interface ' +
											'\\Magento\\Framework\\Api\\Search\\DocumentInterface',
										properties: {
											id: {
												type: 'integer'
											},
											custom_attributes: {
												type: 'array',
												description: 'Custom attributes values.',
												items: {
													type: 'object',
													description: 'Interface for ' +
														'custom attribute ' +
														'value.',
													properties: {
														attribute_code: {
															type: 'string',
															description: 'Attribute code'
														},
														value: {
															type: 'string',
															description: 'Attribute value'
														}
													},
													required: [
														'attribute_code',
														'value'
													]
												}
											}
										},
										required: [
											'id'
										]
									}
								},
								aggregations: {
									type: 'object',
									description: 'Faceted data',
									properties: {
										buckets: {
											type: 'array',
											description: 'All Document fields',
											items: {
												type: 'object',
												description: 'Facet Bucket',
												properties: {
													name: {
														type: 'string',
														description: 'Field name'
													},
													values: {
														type: 'array',
														description: 'Field values',
														items: {
															type: 'object',
															description: 'Interface ' +
																'\\Magento\\Framework\\Api\\Search\\AggregationValueInterface',
															properties: {
																value: {
																	type: 'string',
																	description: 'Aggregation'
																},
																metrics: {
																	type: 'array',
																	description: 'Metrics',
																	items: {
																		type: 'string'
																	}
																}
															},
															required: [
																'value',
																'metrics'
															]
														}
													}
												},
												required: [
													'name',
													'values'
												]
											}
										},
										bucket_names: {
											type: 'array',
											description: 'Document field names',
											items: {
												type: 'string'
											}
										}
									},
									required: [
										'buckets',
										'bucket_names'
									]
								},
								search_criteria: {
									type: 'object',
									description: 'Interface SearchCriteriaInterface',
									properties: {
										request_name: {
											type: 'string'
										},
										filter_groups: {
											type: 'array',
											description: 'A list of filter groups.',
											items: {
												type: 'object',
												description: 'Groups two or more filters ' +
													'together using a logical OR',
												properties: {
													filters: {
														type: 'array',
														description: 'A list of filters in this group',
														items: {
															type: 'object',
															description: 'Filter which can be used by ' +
																'any methods from service ' +
																'layer.',
															properties: {
																field: {
																	type: 'string',
																	description: 'Field'
																},
																value: {
																	type: 'string',
																	description: 'Value'
																},
																condition_type: {
																	type: 'string',
																	description: 'Condition type'
																}
															},
															required: [
																'field',
																'value'
															]
														}
													}
												}
											}
										},
										sort_orders: {
											type: 'array',
											description: 'Sort order.',
											items: {
												type: 'object',
												description: 'Data object for sort order.',
												properties: {
													field: {
														type: 'string',
														description: 'Sorting field.'
													},
													direction: {
														type: 'string',
														description: 'Sorting direction.'
													}
												},
												required: [
													'field',
													'direction'
												]
											}
										},
										page_size: {
											type: 'integer',
											description: 'Page size.'
										},
										current_page: {
											type: 'integer',
											description: 'Current page.'
										}
									},
									required: [
										'request_name',
										'filter_groups'
									]
								},
								total_count: {
									type: 'integer',
									description: 'Total count.'
								}
							},
							required: [
								'items',
								'aggregations',
								'search_criteria',
								'total_count'
							]
						}
					},
					default: {
						description: 'Unexpected error',
						schema: {
							type: 'object',
							properties: {
								message: {
									type: 'string',
									description: 'Error message'
								},
								errors: {
									type: 'array',
									description: 'Errors list',
									items: {
										type: 'object',
										description: 'Error details',
										properties: {
											message: {
												type: 'string',
												description: 'Error message'
											},
											parameters: {
												type: 'array',
												description: 'Error parameters list',
												items: {
													type: 'object',
													description: 'Error parameters item',
													properties: {
														resources: {
															type: 'string',
															description: 'ACL resource'
														},
														fieldName: {
															type: 'string',
															description: 'Missing or invalid field name'
														},
														fieldValue: {
															type: 'string',
															description: 'Incorrect field value'
														}
													}
												}
											}
										}
									}
								},
								code: {
									type: 'integer',
									description: 'Error code'
								},
								parameters: {
									type: 'array',
									description: 'Error parameters list',
									items: {
										type: 'object',
										description: 'Error parameters item',
										properties: {
											resources: {
												type: 'string',
												description: 'ACL resource'
											},
											fieldName: {
												type: 'string',
												description: 'Missing or invalid field name'
											},
											fieldValue: {
												type: 'string',
												description: 'Incorrect field value'
											}
										}
									}
								},
								trace: {
									type: 'string',
									description: 'Stack trace'
								}
							},
							required: [
								'message'
							]
						}
					}
				}
			}
		},
		'/V1/guest-carts/{cartId}/shipping-information': {
			post: {
				tags: [
					'checkoutGuestShippingInformationManagementV1'
				],
				description: '',
				operationId: 'checkoutGuestShippingInformationManagementV1SaveAddressInformationPost',
				parameters: [
					{
						name: 'cartId',
						in: 'path',
						type: 'string',
						required: true
					},
					{
						name: 'checkoutGuestShippingInformationManagementV1SaveAddressInformationPostBody',
						in: 'body',
						schema: {
							required: [
								'addressInformation'
							],
							properties: {
								addressInformation: {
									type: 'object',
									description: 'Interface ShippingInformationInterface',
									properties: {
										shipping_address: {
											type: 'object',
											description: 'Interface AddressInterface',
											properties: {
												id: {
													type: 'integer',
													description: 'Id'
												},
												region: {
													type: 'string',
													description: 'Region name'
												},
												region_id: {
													type: 'integer',
													description: 'Region id'
												},
												region_code: {
													type: 'string',
													description: 'Region code'
												},
												country_id: {
													type: 'string',
													description: 'Country id'
												},
												street: {
													type: 'array',
													description: 'Street',
													items: {
														type: 'string'
													}
												},
												company: {
													type: 'string',
													description: 'Company'
												},
												telephone: {
													type: 'string',
													description: 'Telephone number'
												},
												fax: {
													type: 'string',
													description: 'Fax number'
												},
												postcode: {
													type: 'string',
													description: 'Postcode'
												},
												city: {
													type: 'string',
													description: 'City name'
												},
												firstname: {
													type: 'string',
													description: 'First name'
												},
												lastname: {
													type: 'string',
													description: 'Last name'
												},
												middlename: {
													type: 'string',
													description: 'Middle name'
												},
												prefix: {
													type: 'string',
													description: 'Prefix'
												},
												suffix: {
													type: 'string',
													description: 'Suffix'
												},
												vat_id: {
													type: 'string',
													description: 'Vat id'
												},
												customer_id: {
													type: 'integer',
													description: 'Customer id'
												},
												email: {
													type: 'string',
													description: 'Billing/shipping email'
												},
												same_as_billing: {
													type: 'integer',
													description: 'Same as billing flag'
												},
												customer_address_id: {
													type: 'integer',
													description: 'Customer address id'
												},
												save_in_address_book: {
													type: 'integer',
													description: 'Save in address book flag'
												},
												extension_attributes: {
													type: 'object',
													description: 'ExtensionInterface class ' +
														'for @see ' +
														'\\Magento\\Quote\\Api\\Data\\AddressInterface',
													properties: {
														checkout_fields: {
															type: 'array',
															items: {
																type: 'object',
																description: 'Interface for ' +
																	'custom attribute ' +
																	'value.',
																properties: {
																	attribute_code: {
																		type: 'string',
																		description: 'Attribute code'
																	},
																	value: {
																		type: 'string',
																		description: 'Attribute value'
																	}
																},
																required: [
																	'attribute_code',
																	'value'
																]
															}
														}
													}
												},
												custom_attributes: {
													type: 'array',
													description: 'Custom attributes values.',
													items: {
														type: 'object',
														description: 'Interface for ' +
															'custom attribute ' +
															'value.',
														properties: {
															attribute_code: {
																type: 'string',
																description: 'Attribute code'
															},
															value: {
																type: 'string',
																description: 'Attribute value'
															}
														},
														required: [
															'attribute_code',
															'value'
														]
													}
												}
											},
											required: [
												'region',
												'region_id',
												'region_code',
												'country_id',
												'street',
												'telephone',
												'postcode',
												'city',
												'firstname',
												'lastname',
												'email'
											]
										},
										billing_address: {
											type: 'object',
											description: 'Interface AddressInterface',
											properties: {
												id: {
													type: 'integer',
													description: 'Id'
												},
												region: {
													type: 'string',
													description: 'Region name'
												},
												region_id: {
													type: 'integer',
													description: 'Region id'
												},
												region_code: {
													type: 'string',
													description: 'Region code'
												},
												country_id: {
													type: 'string',
													description: 'Country id'
												},
												street: {
													type: 'array',
													description: 'Street',
													items: {
														type: 'string'
													}
												},
												company: {
													type: 'string',
													description: 'Company'
												},
												telephone: {
													type: 'string',
													description: 'Telephone number'
												},
												fax: {
													type: 'string',
													description: 'Fax number'
												},
												postcode: {
													type: 'string',
													description: 'Postcode'
												},
												city: {
													type: 'string',
													description: 'City name'
												},
												firstname: {
													type: 'string',
													description: 'First name'
												},
												lastname: {
													type: 'string',
													description: 'Last name'
												},
												middlename: {
													type: 'string',
													description: 'Middle name'
												},
												prefix: {
													type: 'string',
													description: 'Prefix'
												},
												suffix: {
													type: 'string',
													description: 'Suffix'
												},
												vat_id: {
													type: 'string',
													description: 'Vat id'
												},
												customer_id: {
													type: 'integer',
													description: 'Customer id'
												},
												email: {
													type: 'string',
													description: 'Billing/shipping email'
												},
												same_as_billing: {
													type: 'integer',
													description: 'Same as billing flag'
												},
												customer_address_id: {
													type: 'integer',
													description: 'Customer address id'
												},
												save_in_address_book: {
													type: 'integer',
													description: 'Save in address book flag'
												},
												extension_attributes: {
													type: 'object',
													description: 'ExtensionInterface class ' +
														'for @see ' +
														'\\Magento\\Quote\\Api\\Data\\AddressInterface',
													properties: {
														checkout_fields: {
															type: 'array',
															items: {
																type: 'object',
																description: 'Interface for ' +
																	'custom attribute ' +
																	'value.',
																properties: {
																	attribute_code: {
																		type: 'string',
																		description: 'Attribute code'
																	},
																	value: {
																		type: 'string',
																		description: 'Attribute value'
																	}
																},
																required: [
																	'attribute_code',
																	'value'
																]
															}
														}
													}
												},
												custom_attributes: {
													type: 'array',
													description: 'Custom attributes values.',
													items: {
														type: 'object',
														description: 'Interface for ' +
															'custom attribute ' +
															'value.',
														properties: {
															attribute_code: {
																type: 'string',
																description: 'Attribute code'
															},
															value: {
																type: 'string',
																description: 'Attribute value'
															}
														},
														required: [
															'attribute_code',
															'value'
														]
													}
												}
											},
											required: [
												'region',
												'region_id',
												'region_code',
												'country_id',
												'street',
												'telephone',
												'postcode',
												'city',
												'firstname',
												'lastname',
												'email'
											]
										},
										shipping_method_code: {
											type: 'string',
											description: 'Shipping method code'
										},
										shipping_carrier_code: {
											type: 'string',
											description: 'Carrier code'
										},
										extension_attributes: {
											type: 'object',
											description: 'ExtensionInterface class for ' +
												'@see ' +
												'\\Magento\\Checkout\\Api\\Data\\ShippingInformationInterface'
										},
										custom_attributes: {
											type: 'array',
											description: 'Custom attributes values.',
											items: {
												type: 'object',
												description: 'Interface for ' +
													'custom attribute ' +
													'value.',
												properties: {
													attribute_code: {
														type: 'string',
														description: 'Attribute code'
													},
													value: {
														type: 'string',
														description: 'Attribute value'
													}
												},
												required: [
													'attribute_code',
													'value'
												]
											}
										}
									},
									required: [
										'shipping_address',
										'shipping_method_code',
										'shipping_carrier_code'
									]
								}
							},
							type: 'object'
						}
					}
				],
				responses: {
					'200': {
						description: '200 Success.',
						schema: {
							type: 'object',
							description: 'Interface PaymentDetailsInterface',
							properties: {
								payment_methods: {
									type: 'array',
									items: {
										type: 'object',
										description: 'Interface PaymentMethodInterface',
										properties: {
											code: {
												type: 'string',
												description: 'Payment method code'
											},
											title: {
												type: 'string',
												description: 'Payment method title'
											}
										},
										required: [
											'code',
											'title'
										]
									}
								},
								totals: {
									type: 'object',
									description: 'Interface TotalsInterface',
									properties: {
										grand_total: {
											type: 'number',
											description: 'Grand total in quote currency'
										},
										base_grand_total: {
											type: 'number',
											description: 'Grand total in base currency'
										},
										subtotal: {
											type: 'number',
											description: 'Subtotal in quote currency'
										},
										base_subtotal: {
											type: 'number',
											description: 'Subtotal in base currency'
										},
										discount_amount: {
											type: 'number',
											description: 'Discount amount in quote currency'
										},
										base_discount_amount: {
											type: 'number',
											description: 'Discount amount in base currency'
										},
										subtotal_with_discount: {
											type: 'number',
											description: 'Subtotal in quote ' +
												'currency with applied ' +
												'discount'
										},
										base_subtotal_with_discount: {
											type: 'number',
											description: 'Subtotal in base ' +
												'currency with applied ' +
												'discount'
										},
										shipping_amount: {
											type: 'number',
											description: 'Shipping amount in quote currency'
										},
										base_shipping_amount: {
											type: 'number',
											description: 'Shipping amount in base currency'
										},
										shipping_discount_amount: {
											type: 'number',
											description: 'Shipping discount ' +
												'amount in quote ' +
												'currency'
										},
										base_shipping_discount_amount: {
											type: 'number',
											description: 'Shipping discount ' +
												'amount in base ' +
												'currency'
										},
										tax_amount: {
											type: 'number',
											description: 'Tax amount in quote currency'
										},
										base_tax_amount: {
											type: 'number',
											description: 'Tax amount in base currency'
										},
										weee_tax_applied_amount: {
											type: 'number',
											description: 'Item weee tax applied ' +
												'amount in quote ' +
												'currency.'
										},
										shipping_tax_amount: {
											type: 'number',
											description: 'Shipping tax amount in quote currency'
										},
										base_shipping_tax_amount: {
											type: 'number',
											description: 'Shipping tax amount in base currency'
										},
										subtotal_incl_tax: {
											type: 'number',
											description: 'Subtotal including ' +
												'tax in quote ' +
												'currency'
										},
										base_subtotal_incl_tax: {
											type: 'number',
											description: 'Subtotal including ' +
												'tax in base currency'
										},
										shipping_incl_tax: {
											type: 'number',
											description: 'Shipping including ' +
												'tax in quote ' +
												'currency'
										},
										base_shipping_incl_tax: {
											type: 'number',
											description: 'Shipping including ' +
												'tax in base currency'
										},
										base_currency_code: {
											type: 'string',
											description: 'Base currency code'
										},
										quote_currency_code: {
											type: 'string',
											description: 'Quote currency code'
										},
										coupon_code: {
											type: 'string',
											description: 'Applied coupon code'
										},
										items_qty: {
											type: 'integer',
											description: 'Items qty'
										},
										items: {
											type: 'array',
											description: 'Totals by items',
											items: {
												type: 'object',
												description: 'Interface TotalsItemInterface',
												properties: {
													item_id: {
														type: 'integer',
														description: 'Item id'
													},
													price: {
														type: 'number',
														description: 'Item price in quote currency.'
													},
													base_price: {
														type: 'number',
														description: 'Item price in base currency.'
													},
													qty: {
														type: 'number',
														description: 'Item quantity.'
													},
													row_total: {
														type: 'number',
														description: 'Row total in quote currency.'
													},
													base_row_total: {
														type: 'number',
														description: 'Row total in base currency.'
													},
													row_total_with_discount: {
														type: 'number',
														description: 'Row total with discount in ' +
															'quote currency. Otherwise, ' +
															'null.'
													},
													tax_amount: {
														type: 'number',
														description: 'Tax amount in quote ' +
															'currency. Otherwise, ' +
															'null.'
													},
													base_tax_amount: {
														type: 'number',
														description: 'Tax amount in base ' +
															'currency. Otherwise, ' +
															'null.'
													},
													tax_percent: {
														type: 'number',
														description: 'Tax percent. Otherwise, null.'
													},
													discount_amount: {
														type: 'number',
														description: 'Discount amount in quote ' +
															'currency. Otherwise, null.'
													},
													base_discount_amount: {
														type: 'number',
														description: 'Discount amount in base ' +
															'currency. Otherwise, ' +
															'null.'
													},
													discount_percent: {
														type: 'number',
														description: 'Discount percent. ' +
															'Otherwise, null.'
													},
													price_incl_tax: {
														type: 'number',
														description: 'Price including tax in quote ' +
															'currency. Otherwise, null.'
													},
													base_price_incl_tax: {
														type: 'number',
														description: 'Price including tax in base ' +
															'currency. Otherwise, null.'
													},
													row_total_incl_tax: {
														type: 'number',
														description: 'Row total including tax in ' +
															'quote currency. Otherwise, ' +
															'null.'
													},
													base_row_total_incl_tax: {
														type: 'number',
														description: 'Row total including tax in ' +
															'base currency. Otherwise, ' +
															'null.'
													},
													options: {
														type: 'string',
														description: 'Item price in quote currency.'
													},
													weee_tax_applied_amount: {
														type: 'number',
														description: 'Item weee tax applied ' +
															'amount in quote ' +
															'currency.'
													},
													weee_tax_applied: {
														type: 'string',
														description: 'Item weee tax ' +
															'applied in quote ' +
															'currency.'
													},
													extension_attributes: {
														type: 'object',
														description: 'ExtensionInterface class ' +
															'for @see ' +
															'\\Magento\\Quote\\Api\\Data\\TotalsItemInterface'
													},
													name: {
														type: 'string',
														description: 'Product name. Otherwise, null.'
													}
												},
												required: [
													'item_id',
													'price',
													'base_price',
													'qty',
													'row_total',
													'base_row_total',
													'options',
													'weee_tax_applied_amount',
													'weee_tax_applied'
												]
											}
										},
										total_segments: {
											type: 'array',
											description: 'Dynamically calculated totals',
											items: {
												type: 'object',
												description: 'Interface TotalsInterface',
												properties: {
													code: {
														type: 'string',
														description: 'Code'
													},
													title: {
														type: 'string',
														description: 'Total title'
													},
													value: {
														type: 'number',
														description: 'Total value'
													},
													area: {
														type: 'string',
														description: 'Display area code.'
													},
													extension_attributes: {
														type: 'object',
														description: 'ExtensionInterface class ' +
															'for @see ' +
															'\\Magento\\Quote\\Api\\Data\\TotalSegmentInterface',
														properties: {
															tax_grandtotal_details: {
																type: 'array',
																items: {
																	type: 'object',
																	description: 'Interface ' +
																		'GrandTotalDetailsInterface',
																	properties: {
																		amount: {
																			type: 'number',
																			description: 'Tax amount value'
																		},
																		rates: {
																			type: 'array',
																			description: 'Tax rates info',
																			items: {
																				type: 'object',
																				description: 'Interface ' +
																					'GrandTotalRatesInterface',
																				properties: {
																					percent: [Object],
																					title: [Object]
																				},
																				required: [
																					'percent',
																					'title'
																				]
																			}
																		},
																		group_id: {
																			type: 'integer',
																			description: 'Group identifier'
																		}
																	},
																	required: [
																		'amount',
																		'rates',
																		'group_id'
																	]
																}
															}
														}
													}
												},
												required: [
													'code',
													'value'
												]
											}
										},
										extension_attributes: {
											type: 'object',
											description: 'ExtensionInterface class for @see ' +
												'\\Magento\\Quote\\Api\\Data\\TotalsInterface',
											properties: {
												coupon_label: {
													type: 'string'
												}
											}
										}
									},
									required: [
										'weee_tax_applied_amount',
										'total_segments'
									]
								},
								extension_attributes: {
									type: 'object',
									description: 'ExtensionInterface class for @see ' +
										'\\Magento\\Checkout\\Api\\Data\\PaymentDetailsInterface'
								}
							},
							required: [
								'payment_methods',
								'totals'
							]
						}
					},
					default: {
						description: 'Unexpected error',
						schema: {
							type: 'object',
							properties: {
								message: {
									type: 'string',
									description: 'Error message'
								},
								errors: {
									type: 'array',
									description: 'Errors list',
									items: {
										type: 'object',
										description: 'Error details',
										properties: {
											message: {
												type: 'string',
												description: 'Error message'
											},
											parameters: {
												type: 'array',
												description: 'Error parameters list',
												items: {
													type: 'object',
													description: 'Error parameters item',
													properties: {
														resources: {
															type: 'string',
															description: 'ACL resource'
														},
														fieldName: {
															type: 'string',
															description: 'Missing or invalid field name'
														},
														fieldValue: {
															type: 'string',
															description: 'Incorrect field value'
														}
													}
												}
											}
										}
									}
								},
								code: {
									type: 'integer',
									description: 'Error code'
								},
								parameters: {
									type: 'array',
									description: 'Error parameters list',
									items: {
										type: 'object',
										description: 'Error parameters item',
										properties: {
											resources: {
												type: 'string',
												description: 'ACL resource'
											},
											fieldName: {
												type: 'string',
												description: 'Missing or invalid field name'
											},
											fieldValue: {
												type: 'string',
												description: 'Incorrect field value'
											}
										}
									}
								},
								trace: {
									type: 'string',
									description: 'Stack trace'
								}
							},
							required: [
								'message'
							]
						}
					}
				}
			}
		},
		'/V1/guest-carts/{cartId}/totals-information': {
			post: {
				tags: [
					'checkoutGuestTotalsInformationManagementV1'
				],
				description: 'Calculate quote totals based ' +
					'on address and shipping ' +
					'method.',
				operationId: 'checkoutGuestTotalsInformationManagementV1CalculatePost',
				parameters: [
					{
						name: 'cartId',
						in: 'path',
						type: 'string',
						required: true
					},
					{
						name: 'checkoutGuestTotalsInformationManagementV1CalculatePostBody',
						in: 'body',
						schema: {
							required: [
								'addressInformation'
							],
							properties: {
								addressInformation: {
									type: 'object',
									description: 'Interface TotalsInformationInterface',
									properties: {
										address: {
											type: 'object',
											description: 'Interface AddressInterface',
											properties: {
												id: {
													type: 'integer',
													description: 'Id'
												},
												region: {
													type: 'string',
													description: 'Region name'
												},
												region_id: {
													type: 'integer',
													description: 'Region id'
												},
												region_code: {
													type: 'string',
													description: 'Region code'
												},
												country_id: {
													type: 'string',
													description: 'Country id'
												},
												street: {
													type: 'array',
													description: 'Street',
													items: {
														type: 'string'
													}
												},
												company: {
													type: 'string',
													description: 'Company'
												},
												telephone: {
													type: 'string',
													description: 'Telephone number'
												},
												fax: {
													type: 'string',
													description: 'Fax number'
												},
												postcode: {
													type: 'string',
													description: 'Postcode'
												},
												city: {
													type: 'string',
													description: 'City name'
												},
												firstname: {
													type: 'string',
													description: 'First name'
												},
												lastname: {
													type: 'string',
													description: 'Last name'
												},
												middlename: {
													type: 'string',
													description: 'Middle name'
												},
												prefix: {
													type: 'string',
													description: 'Prefix'
												},
												suffix: {
													type: 'string',
													description: 'Suffix'
												},
												vat_id: {
													type: 'string',
													description: 'Vat id'
												},
												customer_id: {
													type: 'integer',
													description: 'Customer id'
												},
												email: {
													type: 'string',
													description: 'Billing/shipping email'
												},
												same_as_billing: {
													type: 'integer',
													description: 'Same as billing flag'
												},
												customer_address_id: {
													type: 'integer',
													description: 'Customer address id'
												},
												save_in_address_book: {
													type: 'integer',
													description: 'Save in address book flag'
												},
												extension_attributes: {
													type: 'object',
													description: 'ExtensionInterface class ' +
														'for @see ' +
														'\\Magento\\Quote\\Api\\Data\\AddressInterface',
													properties: {
														checkout_fields: {
															type: 'array',
															items: {
																type: 'object',
																description: 'Interface for ' +
																	'custom attribute ' +
																	'value.',
																properties: {
																	attribute_code: {
																		type: 'string',
																		description: 'Attribute code'
																	},
																	value: {
																		type: 'string',
																		description: 'Attribute value'
																	}
																},
																required: [
																	'attribute_code',
																	'value'
																]
															}
														}
													}
												},
												custom_attributes: {
													type: 'array',
													description: 'Custom attributes values.',
													items: {
														type: 'object',
														description: 'Interface for ' +
															'custom attribute ' +
															'value.',
														properties: {
															attribute_code: {
																type: 'string',
																description: 'Attribute code'
															},
															value: {
																type: 'string',
																description: 'Attribute value'
															}
														},
														required: [
															'attribute_code',
															'value'
														]
													}
												}
											},
											required: [
												'region',
												'region_id',
												'region_code',
												'country_id',
												'street',
												'telephone',
												'postcode',
												'city',
												'firstname',
												'lastname',
												'email'
											]
										},
										shipping_method_code: {
											type: 'string',
											description: 'Shipping method code'
										},
										shipping_carrier_code: {
											type: 'string',
											description: 'Carrier code'
										},
										extension_attributes: {
											type: 'object',
											description: 'ExtensionInterface class for ' +
												'@see ' +
												'\\Magento\\Checkout\\Api\\Data\\TotalsInformationInterface'
										},
										custom_attributes: {
											type: 'array',
											description: 'Custom attributes values.',
											items: {
												type: 'object',
												description: 'Interface for ' +
													'custom attribute ' +
													'value.',
												properties: {
													attribute_code: {
														type: 'string',
														description: 'Attribute code'
													},
													value: {
														type: 'string',
														description: 'Attribute value'
													}
												},
												required: [
													'attribute_code',
													'value'
												]
											}
										}
									},
									required: [
										'address'
									]
								}
							},
							type: 'object'
						}
					}
				],
				responses: {
					'200': {
						description: '200 Success.',
						schema: {
							type: 'object',
							description: 'Interface TotalsInterface',
							properties: {
								grand_total: {
									type: 'number',
									description: 'Grand total in quote currency'
								},
								base_grand_total: {
									type: 'number',
									description: 'Grand total in base currency'
								},
								subtotal: {
									type: 'number',
									description: 'Subtotal in quote currency'
								},
								base_subtotal: {
									type: 'number',
									description: 'Subtotal in base currency'
								},
								discount_amount: {
									type: 'number',
									description: 'Discount amount in quote currency'
								},
								base_discount_amount: {
									type: 'number',
									description: 'Discount amount in base currency'
								},
								subtotal_with_discount: {
									type: 'number',
									description: 'Subtotal in quote ' +
										'currency with applied ' +
										'discount'
								},
								base_subtotal_with_discount: {
									type: 'number',
									description: 'Subtotal in base ' +
										'currency with applied ' +
										'discount'
								},
								shipping_amount: {
									type: 'number',
									description: 'Shipping amount in quote currency'
								},
								base_shipping_amount: {
									type: 'number',
									description: 'Shipping amount in base currency'
								},
								shipping_discount_amount: {
									type: 'number',
									description: 'Shipping discount amount in quote currency'
								},
								base_shipping_discount_amount: {
									type: 'number',
									description: 'Shipping discount amount in base currency'
								},
								tax_amount: {
									type: 'number',
									description: 'Tax amount in quote currency'
								},
								base_tax_amount: {
									type: 'number',
									description: 'Tax amount in base currency'
								},
								weee_tax_applied_amount: {
									type: 'number',
									description: 'Item weee tax applied ' +
										'amount in quote ' +
										'currency.'
								},
								shipping_tax_amount: {
									type: 'number',
									description: 'Shipping tax amount in quote currency'
								},
								base_shipping_tax_amount: {
									type: 'number',
									description: 'Shipping tax amount in base currency'
								},
								subtotal_incl_tax: {
									type: 'number',
									description: 'Subtotal including tax in quote currency'
								},
								base_subtotal_incl_tax: {
									type: 'number',
									description: 'Subtotal including tax in base currency'
								},
								shipping_incl_tax: {
									type: 'number',
									description: 'Shipping including tax in quote currency'
								},
								base_shipping_incl_tax: {
									type: 'number',
									description: 'Shipping including tax in base currency'
								},
								base_currency_code: {
									type: 'string',
									description: 'Base currency code'
								},
								quote_currency_code: {
									type: 'string',
									description: 'Quote currency code'
								},
								coupon_code: {
									type: 'string',
									description: 'Applied coupon code'
								},
								items_qty: {
									type: 'integer',
									description: 'Items qty'
								},
								items: {
									type: 'array',
									description: 'Totals by items',
									items: {
										type: 'object',
										description: 'Interface TotalsItemInterface',
										properties: {
											item_id: {
												type: 'integer',
												description: 'Item id'
											},
											price: {
												type: 'number',
												description: 'Item price in quote currency.'
											},
											base_price: {
												type: 'number',
												description: 'Item price in base currency.'
											},
											qty: {
												type: 'number',
												description: 'Item quantity.'
											},
											row_total: {
												type: 'number',
												description: 'Row total in quote currency.'
											},
											base_row_total: {
												type: 'number',
												description: 'Row total in base currency.'
											},
											row_total_with_discount: {
												type: 'number',
												description: 'Row total with discount in ' +
													'quote currency. Otherwise, ' +
													'null.'
											},
											tax_amount: {
												type: 'number',
												description: 'Tax amount in quote ' +
													'currency. Otherwise, ' +
													'null.'
											},
											base_tax_amount: {
												type: 'number',
												description: 'Tax amount in base ' +
													'currency. Otherwise, ' +
													'null.'
											},
											tax_percent: {
												type: 'number',
												description: 'Tax percent. Otherwise, null.'
											},
											discount_amount: {
												type: 'number',
												description: 'Discount amount in quote ' +
													'currency. Otherwise, null.'
											},
											base_discount_amount: {
												type: 'number',
												description: 'Discount amount in base ' +
													'currency. Otherwise, ' +
													'null.'
											},
											discount_percent: {
												type: 'number',
												description: 'Discount percent. Otherwise, null.'
											},
											price_incl_tax: {
												type: 'number',
												description: 'Price including tax in quote ' +
													'currency. Otherwise, null.'
											},
											base_price_incl_tax: {
												type: 'number',
												description: 'Price including tax in base ' +
													'currency. Otherwise, null.'
											},
											row_total_incl_tax: {
												type: 'number',
												description: 'Row total including tax in ' +
													'quote currency. Otherwise, ' +
													'null.'
											},
											base_row_total_incl_tax: {
												type: 'number',
												description: 'Row total including tax in ' +
													'base currency. Otherwise, ' +
													'null.'
											},
											options: {
												type: 'string',
												description: 'Item price in quote currency.'
											},
											weee_tax_applied_amount: {
												type: 'number',
												description: 'Item weee tax applied ' +
													'amount in quote ' +
													'currency.'
											},
											weee_tax_applied: {
												type: 'string',
												description: 'Item weee tax ' +
													'applied in quote ' +
													'currency.'
											},
											extension_attributes: {
												type: 'object',
												description: 'ExtensionInterface class ' +
													'for @see ' +
													'\\Magento\\Quote\\Api\\Data\\TotalsItemInterface'
											},
											name: {
												type: 'string',
												description: 'Product name. Otherwise, null.'
											}
										},
										required: [
											'item_id',
											'price',
											'base_price',
											'qty',
											'row_total',
											'base_row_total',
											'options',
											'weee_tax_applied_amount',
											'weee_tax_applied'
										]
									}
								},
								total_segments: {
									type: 'array',
									description: 'Dynamically calculated totals',
									items: {
										type: 'object',
										description: 'Interface TotalsInterface',
										properties: {
											code: {
												type: 'string',
												description: 'Code'
											},
											title: {
												type: 'string',
												description: 'Total title'
											},
											value: {
												type: 'number',
												description: 'Total value'
											},
											area: {
												type: 'string',
												description: 'Display area code.'
											},
											extension_attributes: {
												type: 'object',
												description: 'ExtensionInterface class ' +
													'for @see ' +
													'\\Magento\\Quote\\Api\\Data\\TotalSegmentInterface',
												properties: {
													tax_grandtotal_details: {
														type: 'array',
														items: {
															type: 'object',
															description: 'Interface ' +
																'GrandTotalDetailsInterface',
															properties: {
																amount: {
																	type: 'number',
																	description: 'Tax amount value'
																},
																rates: {
																	type: 'array',
																	description: 'Tax rates info',
																	items: {
																		type: 'object',
																		description: 'Interface ' +
																			'GrandTotalRatesInterface',
																		properties: {
																			percent: {
																				type: 'string',
																				description: 'Tax percentage value'
																			},
																			title: {
																				type: 'string',
																				description: 'Rate title'
																			}
																		},
																		required: [
																			'percent',
																			'title'
																		]
																	}
																},
																group_id: {
																	type: 'integer',
																	description: 'Group identifier'
																}
															},
															required: [
																'amount',
																'rates',
																'group_id'
															]
														}
													}
												}
											}
										},
										required: [
											'code',
											'value'
										]
									}
								},
								extension_attributes: {
									type: 'object',
									description: 'ExtensionInterface class for @see ' +
										'\\Magento\\Quote\\Api\\Data\\TotalsInterface',
									properties: {
										coupon_label: {
											type: 'string'
										}
									}
								}
							},
							required: [
								'weee_tax_applied_amount',
								'total_segments'
							]
						}
					},
					default: {
						description: 'Unexpected error',
						schema: {
							type: 'object',
							properties: {
								message: {
									type: 'string',
									description: 'Error message'
								},
								errors: {
									type: 'array',
									description: 'Errors list',
									items: {
										type: 'object',
										description: 'Error details',
										properties: {
											message: {
												type: 'string',
												description: 'Error message'
											},
											parameters: {
												type: 'array',
												description: 'Error parameters list',
												items: {
													type: 'object',
													description: 'Error parameters item',
													properties: {
														resources: {
															type: 'string',
															description: 'ACL resource'
														},
														fieldName: {
															type: 'string',
															description: 'Missing or invalid field name'
														},
														fieldValue: {
															type: 'string',
															description: 'Incorrect field value'
														}
													}
												}
											}
										}
									}
								},
								code: {
									type: 'integer',
									description: 'Error code'
								},
								parameters: {
									type: 'array',
									description: 'Error parameters list',
									items: {
										type: 'object',
										description: 'Error parameters item',
										properties: {
											resources: {
												type: 'string',
												description: 'ACL resource'
											},
											fieldName: {
												type: 'string',
												description: 'Missing or invalid field name'
											},
											fieldValue: {
												type: 'string',
												description: 'Incorrect field value'
											}
										}
									}
								},
								trace: {
									type: 'string',
									description: 'Stack trace'
								}
							},
							required: [
								'message'
							]
						}
					}
				}
			}
		},
		'/V1/guest-carts/{cartId}/payment-information': {
			post: {
				tags: [
					'checkoutGuestPaymentInformationManagementV1'
				],
				description: 'Set payment information and ' +
					'place order for a specified ' +
					'cart.',
				operationId: 'checkoutGuestPaymentInformationManagementV1SavePaymentInformationAndPlaceOrderPost',
				parameters: [
					{
						name: 'cartId',
						in: 'path',
						type: 'string',
						required: true
					},
					{
						name: 'checkoutGuestPaymentInformationManagementV1SavePaymentInformationAndPlaceOrderPostBody',
						in: 'body',
						schema: {
							required: [
								'email',
								'paymentMethod'
							],
							properties: {
								email: {
									type: 'string'
								},
								paymentMethod: {
									type: 'object',
									description: 'Interface PaymentInterface',
									properties: {
										po_number: {
											type: 'string',
											description: 'Purchase order number'
										},
										method: {
											type: 'string',
											description: 'Payment method code'
										},
										additional_data: {
											type: 'array',
											description: 'Payment additional details',
											items: {
												type: 'string'
											}
										},
										extension_attributes: {
											type: 'object',
											description: 'ExtensionInterface class for @see ' +
												'\\Magento\\Quote\\Api\\Data\\PaymentInterface',
											properties: {
												agreement_ids: {
													type: 'array',
													items: {
														type: 'string'
													}
												}
											}
										}
									},
									required: [
										'method'
									]
								},
								billingAddress: {
									type: 'object',
									description: 'Interface AddressInterface',
									properties: {
										id: {
											type: 'integer',
											description: 'Id'
										},
										region: {
											type: 'string',
											description: 'Region name'
										},
										region_id: {
											type: 'integer',
											description: 'Region id'
										},
										region_code: {
											type: 'string',
											description: 'Region code'
										},
										country_id: {
											type: 'string',
											description: 'Country id'
										},
										street: {
											type: 'array',
											description: 'Street',
											items: {
												type: 'string'
											}
										},
										company: {
											type: 'string',
											description: 'Company'
										},
										telephone: {
											type: 'string',
											description: 'Telephone number'
										},
										fax: {
											type: 'string',
											description: 'Fax number'
										},
										postcode: {
											type: 'string',
											description: 'Postcode'
										},
										city: {
											type: 'string',
											description: 'City name'
										},
										firstname: {
											type: 'string',
											description: 'First name'
										},
										lastname: {
											type: 'string',
											description: 'Last name'
										},
										middlename: {
											type: 'string',
											description: 'Middle name'
										},
										prefix: {
											type: 'string',
											description: 'Prefix'
										},
										suffix: {
											type: 'string',
											description: 'Suffix'
										},
										vat_id: {
											type: 'string',
											description: 'Vat id'
										},
										customer_id: {
											type: 'integer',
											description: 'Customer id'
										},
										email: {
											type: 'string',
											description: 'Billing/shipping email'
										},
										same_as_billing: {
											type: 'integer',
											description: 'Same as billing flag'
										},
										customer_address_id: {
											type: 'integer',
											description: 'Customer address id'
										},
										save_in_address_book: {
											type: 'integer',
											description: 'Save in address book flag'
										},
										extension_attributes: {
											type: 'object',
											description: 'ExtensionInterface class for @see ' +
												'\\Magento\\Quote\\Api\\Data\\AddressInterface',
											properties: {
												checkout_fields: {
													type: 'array',
													items: {
														type: 'object',
														description: 'Interface for ' +
															'custom attribute ' +
															'value.',
														properties: {
															attribute_code: {
																type: 'string',
																description: 'Attribute code'
															},
															value: {
																type: 'string',
																description: 'Attribute value'
															}
														},
														required: [
															'attribute_code',
															'value'
														]
													}
												}
											}
										},
										custom_attributes: {
											type: 'array',
											description: 'Custom attributes values.',
											items: {
												type: 'object',
												description: 'Interface for ' +
													'custom attribute ' +
													'value.',
												properties: {
													attribute_code: {
														type: 'string',
														description: 'Attribute code'
													},
													value: {
														type: 'string',
														description: 'Attribute value'
													}
												},
												required: [
													'attribute_code',
													'value'
												]
											}
										}
									},
									required: [
										'region',
										'region_id',
										'region_code',
										'country_id',
										'street',
										'telephone',
										'postcode',
										'city',
										'firstname',
										'lastname',
										'email'
									]
								}
							},
							type: 'object'
						}
					}
				],
				responses: {
					'200': {
						description: '200 Success.',
						schema: {
							type: 'integer',
							description: 'Order ID.'
						}
					},
					'400': {
						description: '400 Bad Request',
						schema: {
							type: 'object',
							properties: {
								message: {
									type: 'string',
									description: 'Error message'
								},
								errors: {
									type: 'array',
									description: 'Errors list',
									items: {
										type: 'object',
										description: 'Error details',
										properties: {
											message: {
												type: 'string',
												description: 'Error message'
											},
											parameters: {
												type: 'array',
												description: 'Error parameters list',
												items: {
													type: 'object',
													description: 'Error parameters item',
													properties: {
														resources: {
															type: 'string',
															description: 'ACL resource'
														},
														fieldName: {
															type: 'string',
															description: 'Missing or invalid field name'
														},
														fieldValue: {
															type: 'string',
															description: 'Incorrect field value'
														}
													}
												}
											}
										}
									}
								},
								code: {
									type: 'integer',
									description: 'Error code'
								},
								parameters: {
									type: 'array',
									description: 'Error parameters list',
									items: {
										type: 'object',
										description: 'Error parameters item',
										properties: {
											resources: {
												type: 'string',
												description: 'ACL resource'
											},
											fieldName: {
												type: 'string',
												description: 'Missing or invalid field name'
											},
											fieldValue: {
												type: 'string',
												description: 'Incorrect field value'
											}
										}
									}
								},
								trace: {
									type: 'string',
									description: 'Stack trace'
								}
							},
							required: [
								'message'
							]
						}
					},
					default: {
						description: 'Unexpected error',
						schema: {
							type: 'object',
							properties: {
								message: {
									type: 'string',
									description: 'Error message'
								},
								errors: {
									type: 'array',
									description: 'Errors list',
									items: {
										type: 'object',
										description: 'Error details',
										properties: {
											message: {
												type: 'string',
												description: 'Error message'
											},
											parameters: {
												type: 'array',
												description: 'Error parameters list',
												items: {
													type: 'object',
													description: 'Error parameters item',
													properties: {
														resources: {
															type: 'string',
															description: 'ACL resource'
														},
														fieldName: {
															type: 'string',
															description: 'Missing or invalid field name'
														},
														fieldValue: {
															type: 'string',
															description: 'Incorrect field value'
														}
													}
												}
											}
										}
									}
								},
								code: {
									type: 'integer',
									description: 'Error code'
								},
								parameters: {
									type: 'array',
									description: 'Error parameters list',
									items: {
										type: 'object',
										description: 'Error parameters item',
										properties: {
											resources: {
												type: 'string',
												description: 'ACL resource'
											},
											fieldName: {
												type: 'string',
												description: 'Missing or invalid field name'
											},
											fieldValue: {
												type: 'string',
												description: 'Incorrect field value'
											}
										}
									}
								},
								trace: {
									type: 'string',
									description: 'Stack trace'
								}
							},
							required: [
								'message'
							]
						}
					}
				}
			},
			get: {
				tags: [
					'checkoutGuestPaymentInformationManagementV1'
				],
				description: 'Get payment information',
				operationId: 'checkoutGuestPaymentInformationManagementV1GetPaymentInformationGet',
				parameters: [
					{
						name: 'cartId',
						in: 'path',
						type: 'string',
						required: true
					}
				],
				responses: {
					'200': {
						description: '200 Success.',
						schema: {
							type: 'object',
							description: 'Interface PaymentDetailsInterface',
							properties: {
								payment_methods: {
									type: 'array',
									items: {
										type: 'object',
										description: 'Interface PaymentMethodInterface',
										properties: {
											code: {
												type: 'string',
												description: 'Payment method code'
											},
											title: {
												type: 'string',
												description: 'Payment method title'
											}
										},
										required: [
											'code',
											'title'
										]
									}
								},
								totals: {
									type: 'object',
									description: 'Interface TotalsInterface',
									properties: {
										grand_total: {
											type: 'number',
											description: 'Grand total in quote currency'
										},
										base_grand_total: {
											type: 'number',
											description: 'Grand total in base currency'
										},
										subtotal: {
											type: 'number',
											description: 'Subtotal in quote currency'
										},
										base_subtotal: {
											type: 'number',
											description: 'Subtotal in base currency'
										},
										discount_amount: {
											type: 'number',
											description: 'Discount amount in quote currency'
										},
										base_discount_amount: {
											type: 'number',
											description: 'Discount amount in base currency'
										},
										subtotal_with_discount: {
											type: 'number',
											description: 'Subtotal in quote ' +
												'currency with applied ' +
												'discount'
										},
										base_subtotal_with_discount: {
											type: 'number',
											description: 'Subtotal in base ' +
												'currency with applied ' +
												'discount'
										},
										shipping_amount: {
											type: 'number',
											description: 'Shipping amount in quote currency'
										},
										base_shipping_amount: {
											type: 'number',
											description: 'Shipping amount in base currency'
										},
										shipping_discount_amount: {
											type: 'number',
											description: 'Shipping discount ' +
												'amount in quote ' +
												'currency'
										},
										base_shipping_discount_amount: {
											type: 'number',
											description: 'Shipping discount ' +
												'amount in base ' +
												'currency'
										},
										tax_amount: {
											type: 'number',
											description: 'Tax amount in quote currency'
										},
										base_tax_amount: {
											type: 'number',
											description: 'Tax amount in base currency'
										},
										weee_tax_applied_amount: {
											type: 'number',
											description: 'Item weee tax applied ' +
												'amount in quote ' +
												'currency.'
										},
										shipping_tax_amount: {
											type: 'number',
											description: 'Shipping tax amount in quote currency'
										},
										base_shipping_tax_amount: {
											type: 'number',
											description: 'Shipping tax amount in base currency'
										},
										subtotal_incl_tax: {
											type: 'number',
											description: 'Subtotal including ' +
												'tax in quote ' +
												'currency'
										},
										base_subtotal_incl_tax: {
											type: 'number',
											description: 'Subtotal including ' +
												'tax in base currency'
										},
										shipping_incl_tax: {
											type: 'number',
											description: 'Shipping including ' +
												'tax in quote ' +
												'currency'
										},
										base_shipping_incl_tax: {
											type: 'number',
											description: 'Shipping including ' +
												'tax in base currency'
										},
										base_currency_code: {
											type: 'string',
											description: 'Base currency code'
										},
										quote_currency_code: {
											type: 'string',
											description: 'Quote currency code'
										},
										coupon_code: {
											type: 'string',
											description: 'Applied coupon code'
										},
										items_qty: {
											type: 'integer',
											description: 'Items qty'
										},
										items: {
											type: 'array',
											description: 'Totals by items',
											items: {
												type: 'object',
												description: 'Interface TotalsItemInterface',
												properties: {
													item_id: {
														type: 'integer',
														description: 'Item id'
													},
													price: {
														type: 'number',
														description: 'Item price in quote currency.'
													},
													base_price: {
														type: 'number',
														description: 'Item price in base currency.'
													},
													qty: {
														type: 'number',
														description: 'Item quantity.'
													},
													row_total: {
														type: 'number',
														description: 'Row total in quote currency.'
													},
													base_row_total: {
														type: 'number',
														description: 'Row total in base currency.'
													},
													row_total_with_discount: {
														type: 'number',
														description: 'Row total with discount in ' +
															'quote currency. Otherwise, ' +
															'null.'
													},
													tax_amount: {
														type: 'number',
														description: 'Tax amount in quote ' +
															'currency. Otherwise, ' +
															'null.'
													},
													base_tax_amount: {
														type: 'number',
														description: 'Tax amount in base ' +
															'currency. Otherwise, ' +
															'null.'
													},
													tax_percent: {
														type: 'number',
														description: 'Tax percent. Otherwise, null.'
													},
													discount_amount: {
														type: 'number',
														description: 'Discount amount in quote ' +
															'currency. Otherwise, null.'
													},
													base_discount_amount: {
														type: 'number',
														description: 'Discount amount in base ' +
															'currency. Otherwise, ' +
															'null.'
													},
													discount_percent: {
														type: 'number',
														description: 'Discount percent. ' +
															'Otherwise, null.'
													},
													price_incl_tax: {
														type: 'number',
														description: 'Price including tax in quote ' +
															'currency. Otherwise, null.'
													},
													base_price_incl_tax: {
														type: 'number',
														description: 'Price including tax in base ' +
															'currency. Otherwise, null.'
													},
													row_total_incl_tax: {
														type: 'number',
														description: 'Row total including tax in ' +
															'quote currency. Otherwise, ' +
															'null.'
													},
													base_row_total_incl_tax: {
														type: 'number',
														description: 'Row total including tax in ' +
															'base currency. Otherwise, ' +
															'null.'
													},
													options: {
														type: 'string',
														description: 'Item price in quote currency.'
													},
													weee_tax_applied_amount: {
														type: 'number',
														description: 'Item weee tax applied ' +
															'amount in quote ' +
															'currency.'
													},
													weee_tax_applied: {
														type: 'string',
														description: 'Item weee tax ' +
															'applied in quote ' +
															'currency.'
													},
													extension_attributes: {
														type: 'object',
														description: 'ExtensionInterface class ' +
															'for @see ' +
															'\\Magento\\Quote\\Api\\Data\\TotalsItemInterface'
													},
													name: {
														type: 'string',
														description: 'Product name. Otherwise, null.'
													}
												},
												required: [
													'item_id',
													'price',
													'base_price',
													'qty',
													'row_total',
													'base_row_total',
													'options',
													'weee_tax_applied_amount',
													'weee_tax_applied'
												]
											}
										},
										total_segments: {
											type: 'array',
											description: 'Dynamically calculated totals',
											items: {
												type: 'object',
												description: 'Interface TotalsInterface',
												properties: {
													code: {
														type: 'string',
														description: 'Code'
													},
													title: {
														type: 'string',
														description: 'Total title'
													},
													value: {
														type: 'number',
														description: 'Total value'
													},
													area: {
														type: 'string',
														description: 'Display area code.'
													},
													extension_attributes: {
														type: 'object',
														description: 'ExtensionInterface class ' +
															'for @see ' +
															'\\Magento\\Quote\\Api\\Data\\TotalSegmentInterface',
														properties: {
															tax_grandtotal_details: {
																type: 'array',
																items: {
																	type: 'object',
																	description: 'Interface ' +
																		'GrandTotalDetailsInterface',
																	properties: {
																		amount: {
																			type: 'number',
																			description: 'Tax amount value'
																		},
																		rates: {
																			type: 'array',
																			description: 'Tax rates info',
																			items: {
																				type: 'object',
																				description: 'Interface ' +
																					'GrandTotalRatesInterface',
																				properties: {
																					percent: [Object],
																					title: [Object]
																				},
																				required: [
																					'percent',
																					'title'
																				]
																			}
																		},
																		group_id: {
																			type: 'integer',
																			description: 'Group identifier'
																		}
																	},
																	required: [
																		'amount',
																		'rates',
																		'group_id'
																	]
																}
															}
														}
													}
												},
												required: [
													'code',
													'value'
												]
											}
										},
										extension_attributes: {
											type: 'object',
											description: 'ExtensionInterface class for @see ' +
												'\\Magento\\Quote\\Api\\Data\\TotalsInterface',
											properties: {
												coupon_label: {
													type: 'string'
												}
											}
										}
									},
									required: [
										'weee_tax_applied_amount',
										'total_segments'
									]
								},
								extension_attributes: {
									type: 'object',
									description: 'ExtensionInterface class for @see ' +
										'\\Magento\\Checkout\\Api\\Data\\PaymentDetailsInterface'
								}
							},
							required: [
								'payment_methods',
								'totals'
							]
						}
					},
					default: {
						description: 'Unexpected error',
						schema: {
							type: 'object',
							properties: {
								message: {
									type: 'string',
									description: 'Error message'
								},
								errors: {
									type: 'array',
									description: 'Errors list',
									items: {
										type: 'object',
										description: 'Error details',
										properties: {
											message: {
												type: 'string',
												description: 'Error message'
											},
											parameters: {
												type: 'array',
												description: 'Error parameters list',
												items: {
													type: 'object',
													description: 'Error parameters item',
													properties: {
														resources: {
															type: 'string',
															description: 'ACL resource'
														},
														fieldName: {
															type: 'string',
															description: 'Missing or invalid field name'
														},
														fieldValue: {
															type: 'string',
															description: 'Incorrect field value'
														}
													}
												}
											}
										}
									}
								},
								code: {
									type: 'integer',
									description: 'Error code'
								},
								parameters: {
									type: 'array',
									description: 'Error parameters list',
									items: {
										type: 'object',
										description: 'Error parameters item',
										properties: {
											resources: {
												type: 'string',
												description: 'ACL resource'
											},
											fieldName: {
												type: 'string',
												description: 'Missing or invalid field name'
											},
											fieldValue: {
												type: 'string',
												description: 'Incorrect field value'
											}
										}
									}
								},
								trace: {
									type: 'string',
									description: 'Stack trace'
								}
							},
							required: [
								'message'
							]
						}
					}
				}
			}
		},
		'/V1/guest-carts/{cartId}/set-payment-information': {
			post: {
				tags: [
					'checkoutGuestPaymentInformationManagementV1'
				],
				description: 'Set payment information for a specified cart.',
				operationId: 'checkoutGuestPaymentInformationManagementV1SavePaymentInformationPost',
				parameters: [
					{
						name: 'cartId',
						in: 'path',
						type: 'string',
						required: true
					},
					{
						name: 'checkoutGuestPaymentInformationManagementV1SavePaymentInformationPostBody',
						in: 'body',
						schema: {
							required: [
								'email',
								'paymentMethod'
							],
							properties: {
								email: {
									type: 'string'
								},
								paymentMethod: {
									type: 'object',
									description: 'Interface PaymentInterface',
									properties: {
										po_number: {
											type: 'string',
											description: 'Purchase order number'
										},
										method: {
											type: 'string',
											description: 'Payment method code'
										},
										additional_data: {
											type: 'array',
											description: 'Payment additional details',
											items: {
												type: 'string'
											}
										},
										extension_attributes: {
											type: 'object',
											description: 'ExtensionInterface class for @see ' +
												'\\Magento\\Quote\\Api\\Data\\PaymentInterface',
											properties: {
												agreement_ids: {
													type: 'array',
													items: {
														type: 'string'
													}
												}
											}
										}
									},
									required: [
										'method'
									]
								},
								billingAddress: {
									type: 'object',
									description: 'Interface AddressInterface',
									properties: {
										id: {
											type: 'integer',
											description: 'Id'
										},
										region: {
											type: 'string',
											description: 'Region name'
										},
										region_id: {
											type: 'integer',
											description: 'Region id'
										},
										region_code: {
											type: 'string',
											description: 'Region code'
										},
										country_id: {
											type: 'string',
											description: 'Country id'
										},
										street: {
											type: 'array',
											description: 'Street',
											items: {
												type: 'string'
											}
										},
										company: {
											type: 'string',
											description: 'Company'
										},
										telephone: {
											type: 'string',
											description: 'Telephone number'
										},
										fax: {
											type: 'string',
											description: 'Fax number'
										},
										postcode: {
											type: 'string',
											description: 'Postcode'
										},
										city: {
											type: 'string',
											description: 'City name'
										},
										firstname: {
											type: 'string',
											description: 'First name'
										},
										lastname: {
											type: 'string',
											description: 'Last name'
										},
										middlename: {
											type: 'string',
											description: 'Middle name'
										},
										prefix: {
											type: 'string',
											description: 'Prefix'
										},
										suffix: {
											type: 'string',
											description: 'Suffix'
										},
										vat_id: {
											type: 'string',
											description: 'Vat id'
										},
										customer_id: {
											type: 'integer',
											description: 'Customer id'
										},
										email: {
											type: 'string',
											description: 'Billing/shipping email'
										},
										same_as_billing: {
											type: 'integer',
											description: 'Same as billing flag'
										},
										customer_address_id: {
											type: 'integer',
											description: 'Customer address id'
										},
										save_in_address_book: {
											type: 'integer',
											description: 'Save in address book flag'
										},
										extension_attributes: {
											type: 'object',
											description: 'ExtensionInterface class for @see ' +
												'\\Magento\\Quote\\Api\\Data\\AddressInterface',
											properties: {
												checkout_fields: {
													type: 'array',
													items: {
														type: 'object',
														description: 'Interface for ' +
															'custom attribute ' +
															'value.',
														properties: {
															attribute_code: {
																type: 'string',
																description: 'Attribute code'
															},
															value: {
																type: 'string',
																description: 'Attribute value'
															}
														},
														required: [
															'attribute_code',
															'value'
														]
													}
												}
											}
										},
										custom_attributes: {
											type: 'array',
											description: 'Custom attributes values.',
											items: {
												type: 'object',
												description: 'Interface for ' +
													'custom attribute ' +
													'value.',
												properties: {
													attribute_code: {
														type: 'string',
														description: 'Attribute code'
													},
													value: {
														type: 'string',
														description: 'Attribute value'
													}
												},
												required: [
													'attribute_code',
													'value'
												]
											}
										}
									},
									required: [
										'region',
										'region_id',
										'region_code',
										'country_id',
										'street',
										'telephone',
										'postcode',
										'city',
										'firstname',
										'lastname',
										'email'
									]
								}
							},
							type: 'object'
						}
					}
				],
				responses: {
					'200': {
						description: '200 Success.',
						schema: {
							type: 'integer',
							description: 'Order ID.'
						}
					},
					'400': {
						description: '400 Bad Request',
						schema: {
							type: 'object',
							properties: {
								message: {
									type: 'string',
									description: 'Error message'
								},
								errors: {
									type: 'array',
									description: 'Errors list',
									items: {
										type: 'object',
										description: 'Error details',
										properties: {
											message: {
												type: 'string',
												description: 'Error message'
											},
											parameters: {
												type: 'array',
												description: 'Error parameters list',
												items: {
													type: 'object',
													description: 'Error parameters item',
													properties: {
														resources: {
															type: 'string',
															description: 'ACL resource'
														},
														fieldName: {
															type: 'string',
															description: 'Missing or invalid field name'
														},
														fieldValue: {
															type: 'string',
															description: 'Incorrect field value'
														}
													}
												}
											}
										}
									}
								},
								code: {
									type: 'integer',
									description: 'Error code'
								},
								parameters: {
									type: 'array',
									description: 'Error parameters list',
									items: {
										type: 'object',
										description: 'Error parameters item',
										properties: {
											resources: {
												type: 'string',
												description: 'ACL resource'
											},
											fieldName: {
												type: 'string',
												description: 'Missing or invalid field name'
											},
											fieldValue: {
												type: 'string',
												description: 'Incorrect field value'
											}
										}
									}
								},
								trace: {
									type: 'string',
									description: 'Stack trace'
								}
							},
							required: [
								'message'
							]
						}
					},
					default: {
						description: 'Unexpected error',
						schema: {
							type: 'object',
							properties: {
								message: {
									type: 'string',
									description: 'Error message'
								},
								errors: {
									type: 'array',
									description: 'Errors list',
									items: {
										type: 'object',
										description: 'Error details',
										properties: {
											message: {
												type: 'string',
												description: 'Error message'
											},
											parameters: {
												type: 'array',
												description: 'Error parameters list',
												items: {
													type: 'object',
													description: 'Error parameters item',
													properties: {
														resources: {
															type: 'string',
															description: 'ACL resource'
														},
														fieldName: {
															type: 'string',
															description: 'Missing or invalid field name'
														},
														fieldValue: {
															type: 'string',
															description: 'Incorrect field value'
														}
													}
												}
											}
										}
									}
								},
								code: {
									type: 'integer',
									description: 'Error code'
								},
								parameters: {
									type: 'array',
									description: 'Error parameters list',
									items: {
										type: 'object',
										description: 'Error parameters item',
										properties: {
											resources: {
												type: 'string',
												description: 'ACL resource'
											},
											fieldName: {
												type: 'string',
												description: 'Missing or invalid field name'
											},
											fieldValue: {
												type: 'string',
												description: 'Incorrect field value'
											}
										}
									}
								},
								trace: {
									type: 'string',
									description: 'Stack trace'
								}
							},
							required: [
								'message'
							]
						}
					}
				}
			}
		},
		'/V1/guest-carts/{cartId}/gift-message': {
			get: {
				tags: [
					'giftMessageGuestCartRepositoryV1'
				],
				description: 'Return the gift message for a specified order.',
				operationId: 'giftMessageGuestCartRepositoryV1GetGet',
				parameters: [
					{
						name: 'cartId',
						in: 'path',
						type: 'string',
						required: true,
						description: 'The shopping cart ID.'
					}
				],
				responses: {
					'200': {
						description: '200 Success.',
						schema: {
							type: 'object',
							description: 'Interface MessageInterface',
							properties: {
								gift_message_id: {
									type: 'integer',
									description: 'Gift message ID. Otherwise, null.'
								},
								customer_id: {
									type: 'integer',
									description: 'Customer ID. Otherwise, null.'
								},
								sender: {
									type: 'string',
									description: 'Sender name.'
								},
								recipient: {
									type: 'string',
									description: 'Recipient name.'
								},
								message: {
									type: 'string',
									description: 'Message text.'
								},
								extension_attributes: {
									type: 'object',
									description: 'ExtensionInterface class for @see ' +
										'\\Magento\\GiftMessage\\Api\\Data\\MessageInterface',
									properties: {
										entity_id: {
											type: 'string'
										},
										entity_type: {
											type: 'string'
										}
									}
								}
							},
							required: [
								'sender',
								'recipient',
								'message'
							]
						}
					},
					default: {
						description: 'Unexpected error',
						schema: {
							type: 'object',
							properties: {
								message: {
									type: 'string',
									description: 'Error message'
								},
								errors: {
									type: 'array',
									description: 'Errors list',
									items: {
										type: 'object',
										description: 'Error details',
										properties: {
											message: {
												type: 'string',
												description: 'Error message'
											},
											parameters: {
												type: 'array',
												description: 'Error parameters list',
												items: {
													type: 'object',
													description: 'Error parameters item',
													properties: {
														resources: {
															type: 'string',
															description: 'ACL resource'
														},
														fieldName: {
															type: 'string',
															description: 'Missing or invalid field name'
														},
														fieldValue: {
															type: 'string',
															description: 'Incorrect field value'
														}
													}
												}
											}
										}
									}
								},
								code: {
									type: 'integer',
									description: 'Error code'
								},
								parameters: {
									type: 'array',
									description: 'Error parameters list',
									items: {
										type: 'object',
										description: 'Error parameters item',
										properties: {
											resources: {
												type: 'string',
												description: 'ACL resource'
											},
											fieldName: {
												type: 'string',
												description: 'Missing or invalid field name'
											},
											fieldValue: {
												type: 'string',
												description: 'Incorrect field value'
											}
										}
									}
								},
								trace: {
									type: 'string',
									description: 'Stack trace'
								}
							},
							required: [
								'message'
							]
						}
					}
				}
			},
			post: {
				tags: [
					'giftMessageGuestCartRepositoryV1'
				],
				description: 'Set the gift message for an entire order.',
				operationId: 'giftMessageGuestCartRepositoryV1SavePost',
				parameters: [
					{
						name: 'cartId',
						in: 'path',
						type: 'string',
						required: true,
						description: 'The cart ID.'
					},
					{
						name: 'giftMessageGuestCartRepositoryV1SavePostBody',
						in: 'body',
						schema: {
							required: [
								'giftMessage'
							],
							properties: {
								giftMessage: {
									type: 'object',
									description: 'Interface MessageInterface',
									properties: {
										gift_message_id: {
											type: 'integer',
											description: 'Gift message ID. Otherwise, null.'
										},
										customer_id: {
											type: 'integer',
											description: 'Customer ID. Otherwise, null.'
										},
										sender: {
											type: 'string',
											description: 'Sender name.'
										},
										recipient: {
											type: 'string',
											description: 'Recipient name.'
										},
										message: {
											type: 'string',
											description: 'Message text.'
										},
										extension_attributes: {
											type: 'object',
											description: 'ExtensionInterface class ' +
												'for @see ' +
												'\\Magento\\GiftMessage\\Api\\Data\\MessageInterface',
											properties: {
												entity_id: {
													type: 'string'
												},
												entity_type: {
													type: 'string'
												}
											}
										}
									},
									required: [
										'sender',
										'recipient',
										'message'
									]
								}
							},
							type: 'object'
						}
					}
				],
				responses: {
					'200': {
						description: '200 Success.',
						schema: {
							type: 'boolean'
						}
					},
					'400': {
						description: '400 Bad Request',
						schema: {
							type: 'object',
							properties: {
								message: {
									type: 'string',
									description: 'Error message'
								},
								errors: {
									type: 'array',
									description: 'Errors list',
									items: {
										type: 'object',
										description: 'Error details',
										properties: {
											message: {
												type: 'string',
												description: 'Error message'
											},
											parameters: {
												type: 'array',
												description: 'Error parameters list',
												items: {
													type: 'object',
													description: 'Error parameters item',
													properties: {
														resources: {
															type: 'string',
															description: 'ACL resource'
														},
														fieldName: {
															type: 'string',
															description: 'Missing or invalid field name'
														},
														fieldValue: {
															type: 'string',
															description: 'Incorrect field value'
														}
													}
												}
											}
										}
									}
								},
								code: {
									type: 'integer',
									description: 'Error code'
								},
								parameters: {
									type: 'array',
									description: 'Error parameters list',
									items: {
										type: 'object',
										description: 'Error parameters item',
										properties: {
											resources: {
												type: 'string',
												description: 'ACL resource'
											},
											fieldName: {
												type: 'string',
												description: 'Missing or invalid field name'
											},
											fieldValue: {
												type: 'string',
												description: 'Incorrect field value'
											}
										}
									}
								},
								trace: {
									type: 'string',
									description: 'Stack trace'
								}
							},
							required: [
								'message'
							]
						}
					},
					default: {
						description: 'Unexpected error',
						schema: {
							type: 'object',
							properties: {
								message: {
									type: 'string',
									description: 'Error message'
								},
								errors: {
									type: 'array',
									description: 'Errors list',
									items: {
										type: 'object',
										description: 'Error details',
										properties: {
											message: {
												type: 'string',
												description: 'Error message'
											},
											parameters: {
												type: 'array',
												description: 'Error parameters list',
												items: {
													type: 'object',
													description: 'Error parameters item',
													properties: {
														resources: {
															type: 'string',
															description: 'ACL resource'
														},
														fieldName: {
															type: 'string',
															description: 'Missing or invalid field name'
														},
														fieldValue: {
															type: 'string',
															description: 'Incorrect field value'
														}
													}
												}
											}
										}
									}
								},
								code: {
									type: 'integer',
									description: 'Error code'
								},
								parameters: {
									type: 'array',
									description: 'Error parameters list',
									items: {
										type: 'object',
										description: 'Error parameters item',
										properties: {
											resources: {
												type: 'string',
												description: 'ACL resource'
											},
											fieldName: {
												type: 'string',
												description: 'Missing or invalid field name'
											},
											fieldValue: {
												type: 'string',
												description: 'Incorrect field value'
											}
										}
									}
								},
								trace: {
									type: 'string',
									description: 'Stack trace'
								}
							},
							required: [
								'message'
							]
						}
					}
				}
			}
		},
		'/V1/guest-carts/{cartId}/gift-message/{itemId}': {
			get: {
				tags: [
					'giftMessageGuestItemRepositoryV1'
				],
				description: 'Return the gift message for a ' +
					'specified item in a specified ' +
					'shopping cart.',
				operationId: 'giftMessageGuestItemRepositoryV1GetGet',
				parameters: [
					{
						name: 'cartId',
						in: 'path',
						type: 'string',
						required: true,
						description: 'The shopping cart ID.'
					},
					{
						name: 'itemId',
						in: 'path',
						type: 'integer',
						required: true,
						description: 'The item ID.'
					}
				],
				responses: {
					'200': {
						description: '200 Success.',
						schema: {
							type: 'object',
							description: 'Interface MessageInterface',
							properties: {
								gift_message_id: {
									type: 'integer',
									description: 'Gift message ID. Otherwise, null.'
								},
								customer_id: {
									type: 'integer',
									description: 'Customer ID. Otherwise, null.'
								},
								sender: {
									type: 'string',
									description: 'Sender name.'
								},
								recipient: {
									type: 'string',
									description: 'Recipient name.'
								},
								message: {
									type: 'string',
									description: 'Message text.'
								},
								extension_attributes: {
									type: 'object',
									description: 'ExtensionInterface class for @see ' +
										'\\Magento\\GiftMessage\\Api\\Data\\MessageInterface',
									properties: {
										entity_id: {
											type: 'string'
										},
										entity_type: {
											type: 'string'
										}
									}
								}
							},
							required: [
								'sender',
								'recipient',
								'message'
							]
						}
					},
					'400': {
						description: '400 Bad Request',
						schema: {
							type: 'object',
							properties: {
								message: {
									type: 'string',
									description: 'Error message'
								},
								errors: {
									type: 'array',
									description: 'Errors list',
									items: {
										type: 'object',
										description: 'Error details',
										properties: {
											message: {
												type: 'string',
												description: 'Error message'
											},
											parameters: {
												type: 'array',
												description: 'Error parameters list',
												items: {
													type: 'object',
													description: 'Error parameters item',
													properties: {
														resources: {
															type: 'string',
															description: 'ACL resource'
														},
														fieldName: {
															type: 'string',
															description: 'Missing or invalid field name'
														},
														fieldValue: {
															type: 'string',
															description: 'Incorrect field value'
														}
													}
												}
											}
										}
									}
								},
								code: {
									type: 'integer',
									description: 'Error code'
								},
								parameters: {
									type: 'array',
									description: 'Error parameters list',
									items: {
										type: 'object',
										description: 'Error parameters item',
										properties: {
											resources: {
												type: 'string',
												description: 'ACL resource'
											},
											fieldName: {
												type: 'string',
												description: 'Missing or invalid field name'
											},
											fieldValue: {
												type: 'string',
												description: 'Incorrect field value'
											}
										}
									}
								},
								trace: {
									type: 'string',
									description: 'Stack trace'
								}
							},
							required: [
								'message'
							]
						}
					},
					default: {
						description: 'Unexpected error',
						schema: {
							type: 'object',
							properties: {
								message: {
									type: 'string',
									description: 'Error message'
								},
								errors: {
									type: 'array',
									description: 'Errors list',
									items: {
										type: 'object',
										description: 'Error details',
										properties: {
											message: {
												type: 'string',
												description: 'Error message'
											},
											parameters: {
												type: 'array',
												description: 'Error parameters list',
												items: {
													type: 'object',
													description: 'Error parameters item',
													properties: {
														resources: {
															type: 'string',
															description: 'ACL resource'
														},
														fieldName: {
															type: 'string',
															description: 'Missing or invalid field name'
														},
														fieldValue: {
															type: 'string',
															description: 'Incorrect field value'
														}
													}
												}
											}
										}
									}
								},
								code: {
									type: 'integer',
									description: 'Error code'
								},
								parameters: {
									type: 'array',
									description: 'Error parameters list',
									items: {
										type: 'object',
										description: 'Error parameters item',
										properties: {
											resources: {
												type: 'string',
												description: 'ACL resource'
											},
											fieldName: {
												type: 'string',
												description: 'Missing or invalid field name'
											},
											fieldValue: {
												type: 'string',
												description: 'Incorrect field value'
											}
										}
									}
								},
								trace: {
									type: 'string',
									description: 'Stack trace'
								}
							},
							required: [
								'message'
							]
						}
					}
				}
			},
			post: {
				tags: [
					'giftMessageGuestItemRepositoryV1'
				],
				description: 'Set the gift message for a specified ' +
					'item in a specified shopping cart.',
				operationId: 'giftMessageGuestItemRepositoryV1SavePost',
				parameters: [
					{
						name: 'cartId',
						in: 'path',
						type: 'string',
						required: true,
						description: 'The cart ID.'
					},
					{
						name: 'itemId',
						in: 'path',
						type: 'integer',
						required: true,
						description: 'The item ID.'
					},
					{
						name: 'giftMessageGuestItemRepositoryV1SavePostBody',
						in: 'body',
						schema: {
							required: [
								'giftMessage'
							],
							properties: {
								giftMessage: {
									type: 'object',
									description: 'Interface MessageInterface',
									properties: {
										gift_message_id: {
											type: 'integer',
											description: 'Gift message ID. Otherwise, null.'
										},
										customer_id: {
											type: 'integer',
											description: 'Customer ID. Otherwise, null.'
										},
										sender: {
											type: 'string',
											description: 'Sender name.'
										},
										recipient: {
											type: 'string',
											description: 'Recipient name.'
										},
										message: {
											type: 'string',
											description: 'Message text.'
										},
										extension_attributes: {
											type: 'object',
											description: 'ExtensionInterface class ' +
												'for @see ' +
												'\\Magento\\GiftMessage\\Api\\Data\\MessageInterface',
											properties: {
												entity_id: {
													type: 'string'
												},
												entity_type: {
													type: 'string'
												}
											}
										}
									},
									required: [
										'sender',
										'recipient',
										'message'
									]
								}
							},
							type: 'object'
						}
					}
				],
				responses: {
					'200': {
						description: '200 Success.',
						schema: {
							type: 'boolean'
						}
					},
					'400': {
						description: '400 Bad Request',
						schema: {
							type: 'object',
							properties: {
								message: {
									type: 'string',
									description: 'Error message'
								},
								errors: {
									type: 'array',
									description: 'Errors list',
									items: {
										type: 'object',
										description: 'Error details',
										properties: {
											message: {
												type: 'string',
												description: 'Error message'
											},
											parameters: {
												type: 'array',
												description: 'Error parameters list',
												items: {
													type: 'object',
													description: 'Error parameters item',
													properties: {
														resources: {
															type: 'string',
															description: 'ACL resource'
														},
														fieldName: {
															type: 'string',
															description: 'Missing or invalid field name'
														},
														fieldValue: {
															type: 'string',
															description: 'Incorrect field value'
														}
													}
												}
											}
										}
									}
								},
								code: {
									type: 'integer',
									description: 'Error code'
								},
								parameters: {
									type: 'array',
									description: 'Error parameters list',
									items: {
										type: 'object',
										description: 'Error parameters item',
										properties: {
											resources: {
												type: 'string',
												description: 'ACL resource'
											},
											fieldName: {
												type: 'string',
												description: 'Missing or invalid field name'
											},
											fieldValue: {
												type: 'string',
												description: 'Incorrect field value'
											}
										}
									}
								},
								trace: {
									type: 'string',
									description: 'Stack trace'
								}
							},
							required: [
								'message'
							]
						}
					},
					default: {
						description: 'Unexpected error',
						schema: {
							type: 'object',
							properties: {
								message: {
									type: 'string',
									description: 'Error message'
								},
								errors: {
									type: 'array',
									description: 'Errors list',
									items: {
										type: 'object',
										description: 'Error details',
										properties: {
											message: {
												type: 'string',
												description: 'Error message'
											},
											parameters: {
												type: 'array',
												description: 'Error parameters list',
												items: {
													type: 'object',
													description: 'Error parameters item',
													properties: {
														resources: {
															type: 'string',
															description: 'ACL resource'
														},
														fieldName: {
															type: 'string',
															description: 'Missing or invalid field name'
														},
														fieldValue: {
															type: 'string',
															description: 'Incorrect field value'
														}
													}
												}
											}
										}
									}
								},
								code: {
									type: 'integer',
									description: 'Error code'
								},
								parameters: {
									type: 'array',
									description: 'Error parameters list',
									items: {
										type: 'object',
										description: 'Error parameters item',
										properties: {
											resources: {
												type: 'string',
												description: 'ACL resource'
											},
											fieldName: {
												type: 'string',
												description: 'Missing or invalid field name'
											},
											fieldValue: {
												type: 'string',
												description: 'Incorrect field value'
											}
										}
									}
								},
								trace: {
									type: 'string',
									description: 'Stack trace'
								}
							},
							required: [
								'message'
							]
						}
					}
				}
			}
		},
		'/V1/integration/admin/token': {
			post: {
				tags: [
					'integrationAdminTokenServiceV1'
				],
				description: 'Create access token for admin ' +
					'given the admin credentials.',
				operationId: 'integrationAdminTokenServiceV1CreateAdminAccessTokenPost',
				parameters: [
					{
						name: 'integrationAdminTokenServiceV1CreateAdminAccessTokenPostBody',
						in: 'body',
						schema: {
							required: [
								'username',
								'password'
							],
							properties: {
								username: {
									type: 'string'
								},
								password: {
									type: 'string'
								}
							},
							type: 'object'
						}
					}
				],
				responses: {
					'200': {
						description: '200 Success.',
						schema: {
							type: 'string',
							description: 'Token created'
						}
					},
					'400': {
						description: '400 Bad Request',
						schema: {
							type: 'object',
							properties: {
								message: {
									type: 'string',
									description: 'Error message'
								},
								errors: {
									type: 'array',
									description: 'Errors list',
									items: {
										type: 'object',
										description: 'Error details',
										properties: {
											message: {
												type: 'string',
												description: 'Error message'
											},
											parameters: {
												type: 'array',
												description: 'Error parameters list',
												items: {
													type: 'object',
													description: 'Error parameters item',
													properties: {
														resources: {
															type: 'string',
															description: 'ACL resource'
														},
														fieldName: {
															type: 'string',
															description: 'Missing or invalid field name'
														},
														fieldValue: {
															type: 'string',
															description: 'Incorrect field value'
														}
													}
												}
											}
										}
									}
								},
								code: {
									type: 'integer',
									description: 'Error code'
								},
								parameters: {
									type: 'array',
									description: 'Error parameters list',
									items: {
										type: 'object',
										description: 'Error parameters item',
										properties: {
											resources: {
												type: 'string',
												description: 'ACL resource'
											},
											fieldName: {
												type: 'string',
												description: 'Missing or invalid field name'
											},
											fieldValue: {
												type: 'string',
												description: 'Incorrect field value'
											}
										}
									}
								},
								trace: {
									type: 'string',
									description: 'Stack trace'
								}
							},
							required: [
								'message'
							]
						}
					},
					'500': {
						description: 'Internal Server error',
						schema: {
							type: 'object',
							properties: {
								message: {
									type: 'string',
									description: 'Error message'
								},
								errors: {
									type: 'array',
									description: 'Errors list',
									items: {
										type: 'object',
										description: 'Error details',
										properties: {
											message: {
												type: 'string',
												description: 'Error message'
											},
											parameters: {
												type: 'array',
												description: 'Error parameters list',
												items: {
													type: 'object',
													description: 'Error parameters item',
													properties: {
														resources: {
															type: 'string',
															description: 'ACL resource'
														},
														fieldName: {
															type: 'string',
															description: 'Missing or invalid field name'
														},
														fieldValue: {
															type: 'string',
															description: 'Incorrect field value'
														}
													}
												}
											}
										}
									}
								},
								code: {
									type: 'integer',
									description: 'Error code'
								},
								parameters: {
									type: 'array',
									description: 'Error parameters list',
									items: {
										type: 'object',
										description: 'Error parameters item',
										properties: {
											resources: {
												type: 'string',
												description: 'ACL resource'
											},
											fieldName: {
												type: 'string',
												description: 'Missing or invalid field name'
											},
											fieldValue: {
												type: 'string',
												description: 'Incorrect field value'
											}
										}
									}
								},
								trace: {
									type: 'string',
									description: 'Stack trace'
								}
							},
							required: [
								'message'
							]
						}
					},
					default: {
						description: 'Unexpected error',
						schema: {
							type: 'object',
							properties: {
								message: {
									type: 'string',
									description: 'Error message'
								},
								errors: {
									type: 'array',
									description: 'Errors list',
									items: {
										type: 'object',
										description: 'Error details',
										properties: {
											message: {
												type: 'string',
												description: 'Error message'
											},
											parameters: {
												type: 'array',
												description: 'Error parameters list',
												items: {
													type: 'object',
													description: 'Error parameters item',
													properties: {
														resources: {
															type: 'string',
															description: 'ACL resource'
														},
														fieldName: {
															type: 'string',
															description: 'Missing or invalid field name'
														},
														fieldValue: {
															type: 'string',
															description: 'Incorrect field value'
														}
													}
												}
											}
										}
									}
								},
								code: {
									type: 'integer',
									description: 'Error code'
								},
								parameters: {
									type: 'array',
									description: 'Error parameters list',
									items: {
										type: 'object',
										description: 'Error parameters item',
										properties: {
											resources: {
												type: 'string',
												description: 'ACL resource'
											},
											fieldName: {
												type: 'string',
												description: 'Missing or invalid field name'
											},
											fieldValue: {
												type: 'string',
												description: 'Incorrect field value'
											}
										}
									}
								},
								trace: {
									type: 'string',
									description: 'Stack trace'
								}
							},
							required: [
								'message'
							]
						}
					}
				}
			}
		},
		'/V1/integration/customer/token': {
			post: {
				tags: [
					'integrationCustomerTokenServiceV1'
				],
				description: 'Create access token for admin ' +
					'given the customer credentials.',
				operationId: 'integrationCustomerTokenServiceV1CreateCustomerAccessTokenPost',
				parameters: [
					{
						name: 'integrationCustomerTokenServiceV1CreateCustomerAccessTokenPostBody',
						in: 'body',
						schema: {
							required: [
								'username',
								'password'
							],
							properties: {
								username: {
									type: 'string'
								},
								password: {
									type: 'string'
								}
							},
							type: 'object'
						}
					}
				],
				responses: {
					'200': {
						description: '200 Success.',
						schema: {
							type: 'string',
							description: 'Token created'
						}
					},
					'400': {
						description: '400 Bad Request',
						schema: {
							type: 'object',
							properties: {
								message: {
									type: 'string',
									description: 'Error message'
								},
								errors: {
									type: 'array',
									description: 'Errors list',
									items: {
										type: 'object',
										description: 'Error details',
										properties: {
											message: {
												type: 'string',
												description: 'Error message'
											},
											parameters: {
												type: 'array',
												description: 'Error parameters list',
												items: {
													type: 'object',
													description: 'Error parameters item',
													properties: {
														resources: {
															type: 'string',
															description: 'ACL resource'
														},
														fieldName: {
															type: 'string',
															description: 'Missing or invalid field name'
														},
														fieldValue: {
															type: 'string',
															description: 'Incorrect field value'
														}
													}
												}
											}
										}
									}
								},
								code: {
									type: 'integer',
									description: 'Error code'
								},
								parameters: {
									type: 'array',
									description: 'Error parameters list',
									items: {
										type: 'object',
										description: 'Error parameters item',
										properties: {
											resources: {
												type: 'string',
												description: 'ACL resource'
											},
											fieldName: {
												type: 'string',
												description: 'Missing or invalid field name'
											},
											fieldValue: {
												type: 'string',
												description: 'Incorrect field value'
											}
										}
									}
								},
								trace: {
									type: 'string',
									description: 'Stack trace'
								}
							},
							required: [
								'message'
							]
						}
					},
					default: {
						description: 'Unexpected error',
						schema: {
							type: 'object',
							properties: {
								message: {
									type: 'string',
									description: 'Error message'
								},
								errors: {
									type: 'array',
									description: 'Errors list',
									items: {
										type: 'object',
										description: 'Error details',
										properties: {
											message: {
												type: 'string',
												description: 'Error message'
											},
											parameters: {
												type: 'array',
												description: 'Error parameters list',
												items: {
													type: 'object',
													description: 'Error parameters item',
													properties: {
														resources: {
															type: 'string',
															description: 'ACL resource'
														},
														fieldName: {
															type: 'string',
															description: 'Missing or invalid field name'
														},
														fieldValue: {
															type: 'string',
															description: 'Incorrect field value'
														}
													}
												}
											}
										}
									}
								},
								code: {
									type: 'integer',
									description: 'Error code'
								},
								parameters: {
									type: 'array',
									description: 'Error parameters list',
									items: {
										type: 'object',
										description: 'Error parameters item',
										properties: {
											resources: {
												type: 'string',
												description: 'ACL resource'
											},
											fieldName: {
												type: 'string',
												description: 'Missing or invalid field name'
											},
											fieldValue: {
												type: 'string',
												description: 'Incorrect field value'
											}
										}
									}
								},
								trace: {
									type: 'string',
									description: 'Stack trace'
								}
							},
							required: [
								'message'
							]
						}
					}
				}
			}
		},
		'/V1/amazon-shipping-address/{amazonOrderReferenceId}': {
			put: {
				tags: [
					'amazonPaymentAddressManagementV1'
				],
				description: '',
				operationId: 'amazonPaymentAddressManagementV1GetShippingAddressPut',
				parameters: [
					{
						name: 'amazonOrderReferenceId',
						in: 'path',
						type: 'string',
						required: true
					},
					{
						name: 'amazonPaymentAddressManagementV1GetShippingAddressPutBody',
						in: 'body',
						schema: {
							required: [
								'addressConsentToken'
							],
							properties: {
								addressConsentToken: {
									type: 'string'
								}
							},
							type: 'object'
						}
					}
				],
				responses: {
					'200': {
						description: '200 Success.',
						schema: {
							type: 'string'
						}
					},
					default: {
						description: 'Unexpected error',
						schema: {
							type: 'object',
							properties: {
								message: {
									type: 'string',
									description: 'Error message'
								},
								errors: {
									type: 'array',
									description: 'Errors list',
									items: {
										type: 'object',
										description: 'Error details',
										properties: {
											message: {
												type: 'string',
												description: 'Error message'
											},
											parameters: {
												type: 'array',
												description: 'Error parameters list',
												items: {
													type: 'object',
													description: 'Error parameters item',
													properties: {
														resources: {
															type: 'string',
															description: 'ACL resource'
														},
														fieldName: {
															type: 'string',
															description: 'Missing or invalid field name'
														},
														fieldValue: {
															type: 'string',
															description: 'Incorrect field value'
														}
													}
												}
											}
										}
									}
								},
								code: {
									type: 'integer',
									description: 'Error code'
								},
								parameters: {
									type: 'array',
									description: 'Error parameters list',
									items: {
										type: 'object',
										description: 'Error parameters item',
										properties: {
											resources: {
												type: 'string',
												description: 'ACL resource'
											},
											fieldName: {
												type: 'string',
												description: 'Missing or invalid field name'
											},
											fieldValue: {
												type: 'string',
												description: 'Incorrect field value'
											}
										}
									}
								},
								trace: {
									type: 'string',
									description: 'Stack trace'
								}
							},
							required: [
								'message'
							]
						}
					}
				}
			}
		},
		'/V1/amazon-billing-address/{amazonOrderReferenceId}': {
			put: {
				tags: [
					'amazonPaymentAddressManagementV1'
				],
				description: '',
				operationId: 'amazonPaymentAddressManagementV1GetBillingAddressPut',
				parameters: [
					{
						name: 'amazonOrderReferenceId',
						in: 'path',
						type: 'string',
						required: true
					},
					{
						name: 'amazonPaymentAddressManagementV1GetBillingAddressPutBody',
						in: 'body',
						schema: {
							required: [
								'addressConsentToken'
							],
							properties: {
								addressConsentToken: {
									type: 'string'
								}
							},
							type: 'object'
						}
					}
				],
				responses: {
					'200': {
						description: '200 Success.',
						schema: {
							type: 'string'
						}
					},
					default: {
						description: 'Unexpected error',
						schema: {
							type: 'object',
							properties: {
								message: {
									type: 'string',
									description: 'Error message'
								},
								errors: {
									type: 'array',
									description: 'Errors list',
									items: {
										type: 'object',
										description: 'Error details',
										properties: {
											message: {
												type: 'string',
												description: 'Error message'
											},
											parameters: {
												type: 'array',
												description: 'Error parameters list',
												items: {
													type: 'object',
													description: 'Error parameters item',
													properties: {
														resources: {
															type: 'string',
															description: 'ACL resource'
														},
														fieldName: {
															type: 'string',
															description: 'Missing or invalid field name'
														},
														fieldValue: {
															type: 'string',
															description: 'Incorrect field value'
														}
													}
												}
											}
										}
									}
								},
								code: {
									type: 'integer',
									description: 'Error code'
								},
								parameters: {
									type: 'array',
									description: 'Error parameters list',
									items: {
										type: 'object',
										description: 'Error parameters item',
										properties: {
											resources: {
												type: 'string',
												description: 'ACL resource'
											},
											fieldName: {
												type: 'string',
												description: 'Missing or invalid field name'
											},
											fieldValue: {
												type: 'string',
												description: 'Incorrect field value'
											}
										}
									}
								},
								trace: {
									type: 'string',
									description: 'Stack trace'
								}
							},
							required: [
								'message'
							]
						}
					}
				}
			}
		},
		'/V1/amazon/order-ref': {
			delete: {
				tags: [
					'amazonPaymentOrderInformationManagementV1'
				],
				description: '',
				operationId: 'amazonPaymentOrderInformationManagementV1RemoveOrderReferenceDelete',
				responses: {
					default: {
						description: 'Unexpected error',
						schema: {
							type: 'object',
							properties: {
								message: {
									type: 'string',
									description: 'Error message'
								},
								errors: {
									type: 'array',
									description: 'Errors list',
									items: {
										type: 'object',
										description: 'Error details',
										properties: {
											message: {
												type: 'string',
												description: 'Error message'
											},
											parameters: {
												type: 'array',
												description: 'Error parameters list',
												items: {
													type: 'object',
													description: 'Error parameters item',
													properties: {
														resources: {
															type: 'string',
															description: 'ACL resource'
														},
														fieldName: {
															type: 'string',
															description: 'Missing or invalid field name'
														},
														fieldValue: {
															type: 'string',
															description: 'Incorrect field value'
														}
													}
												}
											}
										}
									}
								},
								code: {
									type: 'integer',
									description: 'Error code'
								},
								parameters: {
									type: 'array',
									description: 'Error parameters list',
									items: {
										type: 'object',
										description: 'Error parameters item',
										properties: {
											resources: {
												type: 'string',
												description: 'ACL resource'
											},
											fieldName: {
												type: 'string',
												description: 'Missing or invalid field name'
											},
											fieldValue: {
												type: 'string',
												description: 'Incorrect field value'
											}
										}
									}
								},
								trace: {
									type: 'string',
									description: 'Stack trace'
								}
							},
							required: [
								'message'
							]
						}
					}
				}
			}
		},
		'/V1/guest-carts/{cartId}/delivery-option': {
			post: {
				tags: [
					'temandoShippingQuoteGuestCartDeliveryOptionManagementV1'
				],
				description: 'Handle selected delivery option.',
				operationId: 'temandoShippingQuoteGuestCartDeliveryOptionManagementV1SavePost',
				parameters: [
					{
						name: 'cartId',
						in: 'path',
						type: 'string',
						required: true,
						description: 'The shopping cart ID.'
					},
					{
						name: 'temandoShippingQuoteGuestCartDeliveryOptionManagementV1SavePostBody',
						in: 'body',
						schema: {
							required: [
								'selectedOption'
							],
							properties: {
								selectedOption: {
									type: 'string'
								}
							},
							type: 'object'
						}
					}
				],
				responses: {
					'500': {
						description: 'Internal Server error',
						schema: {
							type: 'object',
							properties: {
								message: {
									type: 'string',
									description: 'Error message'
								},
								errors: {
									type: 'array',
									description: 'Errors list',
									items: {
										type: 'object',
										description: 'Error details',
										properties: {
											message: {
												type: 'string',
												description: 'Error message'
											},
											parameters: {
												type: 'array',
												description: 'Error parameters list',
												items: {
													type: 'object',
													description: 'Error parameters item',
													properties: {
														resources: {
															type: 'string',
															description: 'ACL resource'
														},
														fieldName: {
															type: 'string',
															description: 'Missing or invalid field name'
														},
														fieldValue: {
															type: 'string',
															description: 'Incorrect field value'
														}
													}
												}
											}
										}
									}
								},
								code: {
									type: 'integer',
									description: 'Error code'
								},
								parameters: {
									type: 'array',
									description: 'Error parameters list',
									items: {
										type: 'object',
										description: 'Error parameters item',
										properties: {
											resources: {
												type: 'string',
												description: 'ACL resource'
											},
											fieldName: {
												type: 'string',
												description: 'Missing or invalid field name'
											},
											fieldValue: {
												type: 'string',
												description: 'Incorrect field value'
											}
										}
									}
								},
								trace: {
									type: 'string',
									description: 'Stack trace'
								}
							},
							required: [
								'message'
							]
						}
					},
					default: {
						description: 'Unexpected error',
						schema: {
							type: 'object',
							properties: {
								message: {
									type: 'string',
									description: 'Error message'
								},
								errors: {
									type: 'array',
									description: 'Errors list',
									items: {
										type: 'object',
										description: 'Error details',
										properties: {
											message: {
												type: 'string',
												description: 'Error message'
											},
											parameters: {
												type: 'array',
												description: 'Error parameters list',
												items: {
													type: 'object',
													description: 'Error parameters item',
													properties: {
														resources: {
															type: 'string',
															description: 'ACL resource'
														},
														fieldName: {
															type: 'string',
															description: 'Missing or invalid field name'
														},
														fieldValue: {
															type: 'string',
															description: 'Incorrect field value'
														}
													}
												}
											}
										}
									}
								},
								code: {
									type: 'integer',
									description: 'Error code'
								},
								parameters: {
									type: 'array',
									description: 'Error parameters list',
									items: {
										type: 'object',
										description: 'Error parameters item',
										properties: {
											resources: {
												type: 'string',
												description: 'ACL resource'
											},
											fieldName: {
												type: 'string',
												description: 'Missing or invalid field name'
											},
											fieldValue: {
												type: 'string',
												description: 'Incorrect field value'
											}
										}
									}
								},
								trace: {
									type: 'string',
									description: 'Stack trace'
								}
							},
							required: [
								'message'
							]
						}
					}
				}
			}
		},
		'/V1/guest-carts/{cartId}/collection-point/search-request': {
			put: {
				tags: [
					'temandoShippingCollectionPointGuestCartCollectionPointManagementV1'
				],
				description: '',
				operationId: 'temandoShippingCollectionPointGuestCartCollectionPointManagementV1SaveSearchRequestPut',
				parameters: [
					{
						name: 'cartId',
						in: 'path',
						type: 'string',
						required: true
					},
					{
						name: 'temandoShippingCollectionPointGuestCartCollectionPointManagementV1SaveSearchRequestPutBody',
						in: 'body',
						schema: {
							required: [
								'countryId',
								'postcode'
							],
							properties: {
								countryId: {
									type: 'string'
								},
								postcode: {
									type: 'string'
								}
							},
							type: 'object'
						}
					}
				],
				responses: {
					'200': {
						description: '200 Success.',
						schema: {
							type: 'object',
							description: 'Temando Collection Point ' +
								'Search Request Interface',
							properties: {
								shipping_address_id: {
									type: 'integer'
								},
								country_id: {
									type: 'string'
								},
								postcode: {
									type: 'string'
								},
								pending: {
									type: 'boolean'
								}
							},
							required: [
								'shipping_address_id',
								'country_id',
								'postcode',
								'pending'
							]
						}
					},
					'500': {
						description: 'Internal Server error',
						schema: {
							type: 'object',
							properties: {
								message: {
									type: 'string',
									description: 'Error message'
								},
								errors: {
									type: 'array',
									description: 'Errors list',
									items: {
										type: 'object',
										description: 'Error details',
										properties: {
											message: {
												type: 'string',
												description: 'Error message'
											},
											parameters: {
												type: 'array',
												description: 'Error parameters list',
												items: {
													type: 'object',
													description: 'Error parameters item',
													properties: {
														resources: {
															type: 'string',
															description: 'ACL resource'
														},
														fieldName: {
															type: 'string',
															description: 'Missing or invalid field name'
														},
														fieldValue: {
															type: 'string',
															description: 'Incorrect field value'
														}
													}
												}
											}
										}
									}
								},
								code: {
									type: 'integer',
									description: 'Error code'
								},
								parameters: {
									type: 'array',
									description: 'Error parameters list',
									items: {
										type: 'object',
										description: 'Error parameters item',
										properties: {
											resources: {
												type: 'string',
												description: 'ACL resource'
											},
											fieldName: {
												type: 'string',
												description: 'Missing or invalid field name'
											},
											fieldValue: {
												type: 'string',
												description: 'Incorrect field value'
											}
										}
									}
								},
								trace: {
									type: 'string',
									description: 'Stack trace'
								}
							},
							required: [
								'message'
							]
						}
					},
					default: {
						description: 'Unexpected error',
						schema: {
							type: 'object',
							properties: {
								message: {
									type: 'string',
									description: 'Error message'
								},
								errors: {
									type: 'array',
									description: 'Errors list',
									items: {
										type: 'object',
										description: 'Error details',
										properties: {
											message: {
												type: 'string',
												description: 'Error message'
											},
											parameters: {
												type: 'array',
												description: 'Error parameters list',
												items: {
													type: 'object',
													description: 'Error parameters item',
													properties: {
														resources: {
															type: 'string',
															description: 'ACL resource'
														},
														fieldName: {
															type: 'string',
															description: 'Missing or invalid field name'
														},
														fieldValue: {
															type: 'string',
															description: 'Incorrect field value'
														}
													}
												}
											}
										}
									}
								},
								code: {
									type: 'integer',
									description: 'Error code'
								},
								parameters: {
									type: 'array',
									description: 'Error parameters list',
									items: {
										type: 'object',
										description: 'Error parameters item',
										properties: {
											resources: {
												type: 'string',
												description: 'ACL resource'
											},
											fieldName: {
												type: 'string',
												description: 'Missing or invalid field name'
											},
											fieldValue: {
												type: 'string',
												description: 'Incorrect field value'
											}
										}
									}
								},
								trace: {
									type: 'string',
									description: 'Stack trace'
								}
							},
							required: [
								'message'
							]
						}
					}
				}
			},
			delete: {
				tags: [
					'temandoShippingCollectionPointGuestCartCollectionPointManagementV1'
				],
				description: '',
				operationId: 'temandoShippingCollectionPointGuestCartCollectionPointManagementV1DeleteSearchRequestDelete',
				parameters: [
					{
						name: 'cartId',
						in: 'path',
						type: 'string',
						required: true
					}
				],
				responses: {
					'200': {
						description: '200 Success.',
						schema: {
							type: 'boolean'
						}
					},
					'500': {
						description: 'Internal Server error',
						schema: {
							type: 'object',
							properties: {
								message: {
									type: 'string',
									description: 'Error message'
								},
								errors: {
									type: 'array',
									description: 'Errors list',
									items: {
										type: 'object',
										description: 'Error details',
										properties: {
											message: {
												type: 'string',
												description: 'Error message'
											},
											parameters: {
												type: 'array',
												description: 'Error parameters list',
												items: {
													type: 'object',
													description: 'Error parameters item',
													properties: {
														resources: {
															type: 'string',
															description: 'ACL resource'
														},
														fieldName: {
															type: 'string',
															description: 'Missing or invalid field name'
														},
														fieldValue: {
															type: 'string',
															description: 'Incorrect field value'
														}
													}
												}
											}
										}
									}
								},
								code: {
									type: 'integer',
									description: 'Error code'
								},
								parameters: {
									type: 'array',
									description: 'Error parameters list',
									items: {
										type: 'object',
										description: 'Error parameters item',
										properties: {
											resources: {
												type: 'string',
												description: 'ACL resource'
											},
											fieldName: {
												type: 'string',
												description: 'Missing or invalid field name'
											},
											fieldValue: {
												type: 'string',
												description: 'Incorrect field value'
											}
										}
									}
								},
								trace: {
									type: 'string',
									description: 'Stack trace'
								}
							},
							required: [
								'message'
							]
						}
					},
					default: {
						description: 'Unexpected error',
						schema: {
							type: 'object',
							properties: {
								message: {
									type: 'string',
									description: 'Error message'
								},
								errors: {
									type: 'array',
									description: 'Errors list',
									items: {
										type: 'object',
										description: 'Error details',
										properties: {
											message: {
												type: 'string',
												description: 'Error message'
											},
											parameters: {
												type: 'array',
												description: 'Error parameters list',
												items: {
													type: 'object',
													description: 'Error parameters item',
													properties: {
														resources: {
															type: 'string',
															description: 'ACL resource'
														},
														fieldName: {
															type: 'string',
															description: 'Missing or invalid field name'
														},
														fieldValue: {
															type: 'string',
															description: 'Incorrect field value'
														}
													}
												}
											}
										}
									}
								},
								code: {
									type: 'integer',
									description: 'Error code'
								},
								parameters: {
									type: 'array',
									description: 'Error parameters list',
									items: {
										type: 'object',
										description: 'Error parameters item',
										properties: {
											resources: {
												type: 'string',
												description: 'ACL resource'
											},
											fieldName: {
												type: 'string',
												description: 'Missing or invalid field name'
											},
											fieldValue: {
												type: 'string',
												description: 'Incorrect field value'
											}
										}
									}
								},
								trace: {
									type: 'string',
									description: 'Stack trace'
								}
							},
							required: [
								'message'
							]
						}
					}
				}
			}
		},
		'/V1/guest-carts/{cartId}/collection-point/search-result': {
			get: {
				tags: [
					'temandoShippingCollectionPointGuestCartCollectionPointManagementV1'
				],
				description: '',
				operationId: 'temandoShippingCollectionPointGuestCartCollectionPointManagementV1GetCollectionPointsGet',
				parameters: [
					{
						name: 'cartId',
						in: 'path',
						type: 'string',
						required: true
					}
				],
				responses: {
					'200': {
						description: '200 Success.',
						schema: {
							type: 'array',
							items: {
								type: 'object',
								description: 'Temando Quote Collection Point ' +
									'Interface – Checkout/Quoting',
								properties: {
									entity_id: {
										type: 'integer'
									},
									collection_point_id: {
										type: 'string'
									},
									recipient_address_id: {
										type: 'integer'
									},
									name: {
										type: 'string'
									},
									country: {
										type: 'string'
									},
									region: {
										type: 'string'
									},
									postcode: {
										type: 'string'
									},
									city: {
										type: 'string'
									},
									street: {
										type: 'array',
										items: {
											type: 'string'
										}
									},
									opening_hours: {
										type: 'array',
										items: {
											type: 'string'
										}
									},
									shipping_experiences: {
										type: 'array',
										items: {
											type: 'string'
										}
									},
									selected: {
										type: 'boolean'
									}
								},
								required: [
									'entity_id',
									'collection_point_id',
									'recipient_address_id',
									'name',
									'country',
									'region',
									'postcode',
									'city',
									'street',
									'opening_hours',
									'shipping_experiences',
									'selected'
								]
							}
						}
					},
					default: {
						description: 'Unexpected error',
						schema: {
							type: 'object',
							properties: {
								message: {
									type: 'string',
									description: 'Error message'
								},
								errors: {
									type: 'array',
									description: 'Errors list',
									items: {
										type: 'object',
										description: 'Error details',
										properties: {
											message: {
												type: 'string',
												description: 'Error message'
											},
											parameters: {
												type: 'array',
												description: 'Error parameters list',
												items: {
													type: 'object',
													description: 'Error parameters item',
													properties: {
														resources: {
															type: 'string',
															description: 'ACL resource'
														},
														fieldName: {
															type: 'string',
															description: 'Missing or invalid field name'
														},
														fieldValue: {
															type: 'string',
															description: 'Incorrect field value'
														}
													}
												}
											}
										}
									}
								},
								code: {
									type: 'integer',
									description: 'Error code'
								},
								parameters: {
									type: 'array',
									description: 'Error parameters list',
									items: {
										type: 'object',
										description: 'Error parameters item',
										properties: {
											resources: {
												type: 'string',
												description: 'ACL resource'
											},
											fieldName: {
												type: 'string',
												description: 'Missing or invalid field name'
											},
											fieldValue: {
												type: 'string',
												description: 'Incorrect field value'
											}
										}
									}
								},
								trace: {
									type: 'string',
									description: 'Stack trace'
								}
							},
							required: [
								'message'
							]
						}
					}
				}
			}
		},
		'/V1/guest-carts/{cartId}/collection-point/select': {
			post: {
				tags: [
					'temandoShippingCollectionPointGuestCartCollectionPointManagementV1'
				],
				description: '',
				operationId: 'temandoShippingCollectionPointGuestCartCollectionPointManagementV1SelectCollectionPointPost',
				parameters: [
					{
						name: 'cartId',
						in: 'path',
						type: 'string',
						required: true
					},
					{
						name: 'temandoShippingCollectionPointGuestCartCollectionPointManagementV1SelectCollectionPointPostBody',
						in: 'body',
						schema: {
							required: [
								'entityId'
							],
							properties: {
								entityId: {
									type: 'integer'
								}
							},
							type: 'object'
						}
					}
				],
				responses: {
					'200': {
						description: '200 Success.',
						schema: {
							type: 'boolean'
						}
					},
					'500': {
						description: 'Internal Server error',
						schema: {
							type: 'object',
							properties: {
								message: {
									type: 'string',
									description: 'Error message'
								},
								errors: {
									type: 'array',
									description: 'Errors list',
									items: {
										type: 'object',
										description: 'Error details',
										properties: {
											message: {
												type: 'string',
												description: 'Error message'
											},
											parameters: {
												type: 'array',
												description: 'Error parameters list',
												items: {
													type: 'object',
													description: 'Error parameters item',
													properties: {
														resources: {
															type: 'string',
															description: 'ACL resource'
														},
														fieldName: {
															type: 'string',
															description: 'Missing or invalid field name'
														},
														fieldValue: {
															type: 'string',
															description: 'Incorrect field value'
														}
													}
												}
											}
										}
									}
								},
								code: {
									type: 'integer',
									description: 'Error code'
								},
								parameters: {
									type: 'array',
									description: 'Error parameters list',
									items: {
										type: 'object',
										description: 'Error parameters item',
										properties: {
											resources: {
												type: 'string',
												description: 'ACL resource'
											},
											fieldName: {
												type: 'string',
												description: 'Missing or invalid field name'
											},
											fieldValue: {
												type: 'string',
												description: 'Incorrect field value'
											}
										}
									}
								},
								trace: {
									type: 'string',
									description: 'Stack trace'
								}
							},
							required: [
								'message'
							]
						}
					},
					default: {
						description: 'Unexpected error',
						schema: {
							type: 'object',
							properties: {
								message: {
									type: 'string',
									description: 'Error message'
								},
								errors: {
									type: 'array',
									description: 'Errors list',
									items: {
										type: 'object',
										description: 'Error details',
										properties: {
											message: {
												type: 'string',
												description: 'Error message'
											},
											parameters: {
												type: 'array',
												description: 'Error parameters list',
												items: {
													type: 'object',
													description: 'Error parameters item',
													properties: {
														resources: {
															type: 'string',
															description: 'ACL resource'
														},
														fieldName: {
															type: 'string',
															description: 'Missing or invalid field name'
														},
														fieldValue: {
															type: 'string',
															description: 'Incorrect field value'
														}
													}
												}
											}
										}
									}
								},
								code: {
									type: 'integer',
									description: 'Error code'
								},
								parameters: {
									type: 'array',
									description: 'Error parameters list',
									items: {
										type: 'object',
										description: 'Error parameters item',
										properties: {
											resources: {
												type: 'string',
												description: 'ACL resource'
											},
											fieldName: {
												type: 'string',
												description: 'Missing or invalid field name'
											},
											fieldValue: {
												type: 'string',
												description: 'Incorrect field value'
											}
										}
									}
								},
								trace: {
									type: 'string',
									description: 'Stack trace'
								}
							},
							required: [
								'message'
							]
						}
					}
				}
			}
		},
		'/V1/guest-carts/{cartId}/checkout-fields': {
			post: {
				tags: [
					'temandoShippingQuoteGuestCartCheckoutFieldManagementV1'
				],
				description: '',
				operationId: 'temandoShippingQuoteGuestCartCheckoutFieldManagementV1SaveCheckoutFieldsPost',
				parameters: [
					{
						name: 'cartId',
						in: 'path',
						type: 'string',
						required: true
					},
					{
						name: 'temandoShippingQuoteGuestCartCheckoutFieldManagementV1SaveCheckoutFieldsPostBody',
						in: 'body',
						schema: {
							required: [
								'serviceSelection'
							],
							properties: {
								serviceSelection: {
									type: 'array',
									items: {
										type: 'object',
										description: 'Interface for custom attribute value.',
										properties: {
											attribute_code: {
												type: 'string',
												description: 'Attribute code'
											},
											value: {
												type: 'string',
												description: 'Attribute value'
											}
										},
										required: [
											'attribute_code',
											'value'
										]
									}
								}
							},
							type: 'object'
						}
					}
				],
				responses: {
					'400': {
						description: '400 Bad Request',
						schema: {
							type: 'object',
							properties: {
								message: {
									type: 'string',
									description: 'Error message'
								},
								errors: {
									type: 'array',
									description: 'Errors list',
									items: {
										type: 'object',
										description: 'Error details',
										properties: {
											message: {
												type: 'string',
												description: 'Error message'
											},
											parameters: {
												type: 'array',
												description: 'Error parameters list',
												items: {
													type: 'object',
													description: 'Error parameters item',
													properties: {
														resources: {
															type: 'string',
															description: 'ACL resource'
														},
														fieldName: {
															type: 'string',
															description: 'Missing or invalid field name'
														},
														fieldValue: {
															type: 'string',
															description: 'Incorrect field value'
														}
													}
												}
											}
										}
									}
								},
								code: {
									type: 'integer',
									description: 'Error code'
								},
								parameters: {
									type: 'array',
									description: 'Error parameters list',
									items: {
										type: 'object',
										description: 'Error parameters item',
										properties: {
											resources: {
												type: 'string',
												description: 'ACL resource'
											},
											fieldName: {
												type: 'string',
												description: 'Missing or invalid field name'
											},
											fieldValue: {
												type: 'string',
												description: 'Incorrect field value'
											}
										}
									}
								},
								trace: {
									type: 'string',
									description: 'Stack trace'
								}
							},
							required: [
								'message'
							]
						}
					},
					default: {
						description: 'Unexpected error',
						schema: {
							type: 'object',
							properties: {
								message: {
									type: 'string',
									description: 'Error message'
								},
								errors: {
									type: 'array',
									description: 'Errors list',
									items: {
										type: 'object',
										description: 'Error details',
										properties: {
											message: {
												type: 'string',
												description: 'Error message'
											},
											parameters: {
												type: 'array',
												description: 'Error parameters list',
												items: {
													type: 'object',
													description: 'Error parameters item',
													properties: {
														resources: {
															type: 'string',
															description: 'ACL resource'
														},
														fieldName: {
															type: 'string',
															description: 'Missing or invalid field name'
														},
														fieldValue: {
															type: 'string',
															description: 'Incorrect field value'
														}
													}
												}
											}
										}
									}
								},
								code: {
									type: 'integer',
									description: 'Error code'
								},
								parameters: {
									type: 'array',
									description: 'Error parameters list',
									items: {
										type: 'object',
										description: 'Error parameters item',
										properties: {
											resources: {
												type: 'string',
												description: 'ACL resource'
											},
											fieldName: {
												type: 'string',
												description: 'Missing or invalid field name'
											},
											fieldValue: {
												type: 'string',
												description: 'Incorrect field value'
											}
										}
									}
								},
								trace: {
									type: 'string',
									description: 'Stack trace'
								}
							},
							required: [
								'message'
							]
						}
					}
				}
			}
		}
	},
	definitions: {
		'error-response': {
			type: 'object',
			properties: {
				message: {
					type: 'string',
					description: 'Error message'
				},
				errors: {
					type: 'array',
					description: 'Errors list',
					items: {
						type: 'object',
						description: 'Error details',
						properties: {
							message: {
								type: 'string',
								description: 'Error message'
							},
							parameters: {
								type: 'array',
								description: 'Error parameters list',
								items: {
									type: 'object',
									description: 'Error parameters item',
									properties: {
										resources: {
											type: 'string',
											description: 'ACL resource'
										},
										fieldName: {
											type: 'string',
											description: 'Missing or invalid field name'
										},
										fieldValue: {
											type: 'string',
											description: 'Incorrect field value'
										}
									}
								}
							}
						}
					}
				},
				code: {
					type: 'integer',
					description: 'Error code'
				},
				parameters: {
					type: 'array',
					description: 'Error parameters list',
					items: {
						type: 'object',
						description: 'Error parameters item',
						properties: {
							resources: {
								type: 'string',
								description: 'ACL resource'
							},
							fieldName: {
								type: 'string',
								description: 'Missing or invalid field name'
							},
							fieldValue: {
								type: 'string',
								description: 'Incorrect field value'
							}
						}
					}
				},
				trace: {
					type: 'string',
					description: 'Stack trace'
				}
			},
			required: [
				'message'
			]
		},
		'error-errors': {
			type: 'array',
			description: 'Errors list',
			items: {
				type: 'object',
				description: 'Error details',
				properties: {
					message: {
						type: 'string',
						description: 'Error message'
					},
					parameters: {
						type: 'array',
						description: 'Error parameters list',
						items: {
							type: 'object',
							description: 'Error parameters item',
							properties: {
								resources: {
									type: 'string',
									description: 'ACL resource'
								},
								fieldName: {
									type: 'string',
									description: 'Missing or invalid field name'
								},
								fieldValue: {
									type: 'string',
									description: 'Incorrect field value'
								}
							}
						}
					}
				}
			}
		},
		'error-errors-item': {
			type: 'object',
			description: 'Error details',
			properties: {
				message: {
					type: 'string',
					description: 'Error message'
				},
				parameters: {
					type: 'array',
					description: 'Error parameters list',
					items: {
						type: 'object',
						description: 'Error parameters item',
						properties: {
							resources: {
								type: 'string',
								description: 'ACL resource'
							},
							fieldName: {
								type: 'string',
								description: 'Missing or invalid field name'
							},
							fieldValue: {
								type: 'string',
								description: 'Incorrect field value'
							}
						}
					}
				}
			}
		},
		'error-parameters': {
			type: 'array',
			description: 'Error parameters list',
			items: {
				type: 'object',
				description: 'Error parameters item',
				properties: {
					resources: {
						type: 'string',
						description: 'ACL resource'
					},
					fieldName: {
						type: 'string',
						description: 'Missing or invalid field name'
					},
					fieldValue: {
						type: 'string',
						description: 'Incorrect field value'
					}
				}
			}
		},
		'error-parameters-item': {
			type: 'object',
			description: 'Error parameters item',
			properties: {
				resources: {
					type: 'string',
					description: 'ACL resource'
				},
				fieldName: {
					type: 'string',
					description: 'Missing or invalid field name'
				},
				fieldValue: {
					type: 'string',
					description: 'Incorrect field value'
				}
			}
		},
		'directory-data-currency-information-interface': {
			type: 'object',
			description: 'Currency Information interface.',
			properties: {
				base_currency_code: {
					type: 'string',
					description: 'The base currency code for the store.'
				},
				base_currency_symbol: {
					type: 'string',
					description: 'The currency symbol of the ' +
						'base currency for the store.'
				},
				default_display_currency_code: {
					type: 'string',
					description: 'The default display currency code for the store.'
				},
				default_display_currency_symbol: {
					type: 'string',
					description: 'The currency symbol of the ' +
						'default display currency for the ' +
						'store.'
				},
				available_currency_codes: {
					type: 'array',
					description: 'The list of allowed currency codes for the store.',
					items: {
						type: 'string'
					}
				},
				exchange_rates: {
					type: 'array',
					description: 'The list of exchange rate ' +
						'information for the store.',
					items: {
						type: 'object',
						description: 'Exchange Rate interface.',
						properties: {
							currency_to: {
								type: 'string',
								description: 'The currency code ' +
									'associated with the ' +
									'exchange rate.'
							},
							rate: {
								type: 'number',
								description: 'The exchange rate for the associated ' +
									'currency and the store\'s base ' +
									'currency.'
							},
							extension_attributes: {
								type: 'object',
								description: 'ExtensionInterface class for @see ' +
									'\\Magento\\Directory\\Api\\Data\\ExchangeRateInterface'
							}
						},
						required: [
							'currency_to',
							'rate'
						]
					}
				},
				extension_attributes: {
					type: 'object',
					description: 'ExtensionInterface class for @see ' +
						'\\Magento\\Directory\\Api\\Data\\CurrencyInformationInterface'
				}
			},
			required: [
				'base_currency_code',
				'base_currency_symbol',
				'default_display_currency_code',
				'default_display_currency_symbol',
				'available_currency_codes',
				'exchange_rates'
			]
		},
		'directory-data-exchange-rate-interface': {
			type: 'object',
			description: 'Exchange Rate interface.',
			properties: {
				currency_to: {
					type: 'string',
					description: 'The currency code ' +
						'associated with the ' +
						'exchange rate.'
				},
				rate: {
					type: 'number',
					description: 'The exchange rate for the associated ' +
						'currency and the store\'s base ' +
						'currency.'
				},
				extension_attributes: {
					type: 'object',
					description: 'ExtensionInterface class for @see ' +
						'\\Magento\\Directory\\Api\\Data\\ExchangeRateInterface'
				}
			},
			required: [
				'currency_to',
				'rate'
			]
		},
		'directory-data-exchange-rate-extension-interface': {
			type: 'object',
			description: 'ExtensionInterface class for @see ' +
				'\\Magento\\Directory\\Api\\Data\\ExchangeRateInterface'
		},
		'directory-data-currency-information-extension-interface': {
			type: 'object',
			description: 'ExtensionInterface class for @see ' +
				'\\Magento\\Directory\\Api\\Data\\CurrencyInformationInterface'
		},
		'directory-data-country-information-interface': {
			type: 'object',
			description: 'Country Information interface.',
			properties: {
				id: {
					type: 'string',
					description: 'The country id for the store.'
				},
				two_letter_abbreviation: {
					type: 'string',
					description: 'The country 2 letter abbreviation for the store.'
				},
				three_letter_abbreviation: {
					type: 'string',
					description: 'The country 3 letter abbreviation for the store.'
				},
				full_name_locale: {
					type: 'string',
					description: 'The country full name (in ' +
						'store locale) for the ' +
						'store.'
				},
				full_name_english: {
					type: 'string',
					description: 'The country full name (in English) for the store.'
				},
				available_regions: {
					type: 'array',
					description: 'The available regions for the store.',
					items: {
						type: 'object',
						description: 'Region Information interface.',
						properties: {
							id: {
								type: 'string',
								description: 'Region id'
							},
							code: {
								type: 'string',
								description: 'Region code'
							},
							name: {
								type: 'string',
								description: 'Region name'
							},
							extension_attributes: {
								type: 'object',
								description: 'ExtensionInterface class for @see ' +
									'\\Magento\\Directory\\Api\\Data\\RegionInformationInterface'
							}
						},
						required: [
							'id',
							'code',
							'name'
						]
					}
				},
				extension_attributes: {
					type: 'object',
					description: 'ExtensionInterface class for @see ' +
						'\\Magento\\Directory\\Api\\Data\\CountryInformationInterface'
				}
			},
			required: [
				'id',
				'two_letter_abbreviation',
				'three_letter_abbreviation',
				'full_name_locale',
				'full_name_english'
			]
		},
		'directory-data-region-information-interface': {
			type: 'object',
			description: 'Region Information interface.',
			properties: {
				id: {
					type: 'string',
					description: 'Region id'
				},
				code: {
					type: 'string',
					description: 'Region code'
				},
				name: {
					type: 'string',
					description: 'Region name'
				},
				extension_attributes: {
					type: 'object',
					description: 'ExtensionInterface class for @see ' +
						'\\Magento\\Directory\\Api\\Data\\RegionInformationInterface'
				}
			},
			required: [
				'id',
				'code',
				'name'
			]
		},
		'directory-data-region-information-extension-interface': {
			type: 'object',
			description: 'ExtensionInterface class for @see ' +
				'\\Magento\\Directory\\Api\\Data\\RegionInformationInterface'
		},
		'directory-data-country-information-extension-interface': {
			type: 'object',
			description: 'ExtensionInterface class for @see ' +
				'\\Magento\\Directory\\Api\\Data\\CountryInformationInterface'
		},
		'customer-data-customer-interface': {
			type: 'object',
			description: 'Customer interface.',
			properties: {
				id: {
					type: 'integer',
					description: 'Customer id'
				},
				group_id: {
					type: 'integer',
					description: 'Group id'
				},
				default_billing: {
					type: 'string',
					description: 'Default billing address id'
				},
				default_shipping: {
					type: 'string',
					description: 'Default shipping address id'
				},
				confirmation: {
					type: 'string',
					description: 'Confirmation'
				},
				created_at: {
					type: 'string',
					description: 'Created at time'
				},
				updated_at: {
					type: 'string',
					description: 'Updated at time'
				},
				created_in: {
					type: 'string',
					description: 'Created in area'
				},
				dob: {
					type: 'string',
					description: 'Date of birth'
				},
				email: {
					type: 'string',
					description: 'Email address'
				},
				firstname: {
					type: 'string',
					description: 'First name'
				},
				lastname: {
					type: 'string',
					description: 'Last name'
				},
				middlename: {
					type: 'string',
					description: 'Middle name'
				},
				prefix: {
					type: 'string',
					description: 'Prefix'
				},
				suffix: {
					type: 'string',
					description: 'Suffix'
				},
				gender: {
					type: 'integer',
					description: 'Gender'
				},
				store_id: {
					type: 'integer',
					description: 'Store id'
				},
				taxvat: {
					type: 'string',
					description: 'Tax Vat'
				},
				website_id: {
					type: 'integer',
					description: 'Website id'
				},
				addresses: {
					type: 'array',
					description: 'Customer addresses.',
					items: {
						type: 'object',
						description: 'Customer address interface.',
						properties: {
							id: {
								type: 'integer',
								description: 'ID'
							},
							customer_id: {
								type: 'integer',
								description: 'Customer ID'
							},
							region: {
								type: 'object',
								description: 'Customer address region interface.',
								properties: {
									region_code: {
										type: 'string',
										description: 'Region code'
									},
									region: {
										type: 'string',
										description: 'Region'
									},
									region_id: {
										type: 'integer',
										description: 'Region id'
									},
									extension_attributes: {
										type: 'object',
										description: 'ExtensionInterface class for @see ' +
											'\\Magento\\Customer\\Api\\Data\\RegionInterface'
									}
								},
								required: [
									'region_code',
									'region',
									'region_id'
								]
							},
							region_id: {
								type: 'integer',
								description: 'Region ID'
							},
							country_id: {
								type: 'string',
								description: 'Country code in ISO_3166-2 format'
							},
							street: {
								type: 'array',
								description: 'Street',
								items: {
									type: 'string'
								}
							},
							company: {
								type: 'string',
								description: 'Company'
							},
							telephone: {
								type: 'string',
								description: 'Telephone number'
							},
							fax: {
								type: 'string',
								description: 'Fax number'
							},
							postcode: {
								type: 'string',
								description: 'Postcode'
							},
							city: {
								type: 'string',
								description: 'City name'
							},
							firstname: {
								type: 'string',
								description: 'First name'
							},
							lastname: {
								type: 'string',
								description: 'Last name'
							},
							middlename: {
								type: 'string',
								description: 'Middle name'
							},
							prefix: {
								type: 'string',
								description: 'Prefix'
							},
							suffix: {
								type: 'string',
								description: 'Suffix'
							},
							vat_id: {
								type: 'string',
								description: 'Vat id'
							},
							default_shipping: {
								type: 'boolean',
								description: 'If this address is default shipping address.'
							},
							default_billing: {
								type: 'boolean',
								description: 'If this address is default billing address'
							},
							extension_attributes: {
								type: 'object',
								description: 'ExtensionInterface class for @see ' +
									'\\Magento\\Customer\\Api\\Data\\AddressInterface'
							},
							custom_attributes: {
								type: 'array',
								description: 'Custom attributes values.',
								items: {
									type: 'object',
									description: 'Interface for custom attribute value.',
									properties: {
										attribute_code: {
											type: 'string',
											description: 'Attribute code'
										},
										value: {
											type: 'string',
											description: 'Attribute value'
										}
									},
									required: [
										'attribute_code',
										'value'
									]
								}
							}
						}
					}
				},
				disable_auto_group_change: {
					type: 'integer',
					description: 'Disable auto group change flag.'
				},
				extension_attributes: {
					type: 'object',
					description: 'ExtensionInterface class for @see ' +
						'\\Magento\\Customer\\Api\\Data\\CustomerInterface',
					properties: {
						is_subscribed: {
							type: 'boolean'
						},
						amazon_id: {
							type: 'string'
						},
						vertex_customer_code: {
							type: 'string'
						}
					}
				},
				custom_attributes: {
					type: 'array',
					description: 'Custom attributes values.',
					items: {
						type: 'object',
						description: 'Interface for custom attribute value.',
						properties: {
							attribute_code: {
								type: 'string',
								description: 'Attribute code'
							},
							value: {
								type: 'string',
								description: 'Attribute value'
							}
						},
						required: [
							'attribute_code',
							'value'
						]
					}
				}
			},
			required: [
				'email',
				'firstname',
				'lastname'
			]
		},
		'customer-data-address-interface': {
			type: 'object',
			description: 'Customer address interface.',
			properties: {
				id: {
					type: 'integer',
					description: 'ID'
				},
				customer_id: {
					type: 'integer',
					description: 'Customer ID'
				},
				region: {
					type: 'object',
					description: 'Customer address region interface.',
					properties: {
						region_code: {
							type: 'string',
							description: 'Region code'
						},
						region: {
							type: 'string',
							description: 'Region'
						},
						region_id: {
							type: 'integer',
							description: 'Region id'
						},
						extension_attributes: {
							type: 'object',
							description: 'ExtensionInterface class for @see ' +
								'\\Magento\\Customer\\Api\\Data\\RegionInterface'
						}
					},
					required: [
						'region_code',
						'region',
						'region_id'
					]
				},
				region_id: {
					type: 'integer',
					description: 'Region ID'
				},
				country_id: {
					type: 'string',
					description: 'Country code in ISO_3166-2 format'
				},
				street: {
					type: 'array',
					description: 'Street',
					items: {
						type: 'string'
					}
				},
				company: {
					type: 'string',
					description: 'Company'
				},
				telephone: {
					type: 'string',
					description: 'Telephone number'
				},
				fax: {
					type: 'string',
					description: 'Fax number'
				},
				postcode: {
					type: 'string',
					description: 'Postcode'
				},
				city: {
					type: 'string',
					description: 'City name'
				},
				firstname: {
					type: 'string',
					description: 'First name'
				},
				lastname: {
					type: 'string',
					description: 'Last name'
				},
				middlename: {
					type: 'string',
					description: 'Middle name'
				},
				prefix: {
					type: 'string',
					description: 'Prefix'
				},
				suffix: {
					type: 'string',
					description: 'Suffix'
				},
				vat_id: {
					type: 'string',
					description: 'Vat id'
				},
				default_shipping: {
					type: 'boolean',
					description: 'If this address is default shipping address.'
				},
				default_billing: {
					type: 'boolean',
					description: 'If this address is default billing address'
				},
				extension_attributes: {
					type: 'object',
					description: 'ExtensionInterface class for @see ' +
						'\\Magento\\Customer\\Api\\Data\\AddressInterface'
				},
				custom_attributes: {
					type: 'array',
					description: 'Custom attributes values.',
					items: {
						type: 'object',
						description: 'Interface for custom attribute value.',
						properties: {
							attribute_code: {
								type: 'string',
								description: 'Attribute code'
							},
							value: {
								type: 'string',
								description: 'Attribute value'
							}
						},
						required: [
							'attribute_code',
							'value'
						]
					}
				}
			}
		},
		'customer-data-region-interface': {
			type: 'object',
			description: 'Customer address region interface.',
			properties: {
				region_code: {
					type: 'string',
					description: 'Region code'
				},
				region: {
					type: 'string',
					description: 'Region'
				},
				region_id: {
					type: 'integer',
					description: 'Region id'
				},
				extension_attributes: {
					type: 'object',
					description: 'ExtensionInterface class for @see ' +
						'\\Magento\\Customer\\Api\\Data\\RegionInterface'
				}
			},
			required: [
				'region_code',
				'region',
				'region_id'
			]
		},
		'customer-data-region-extension-interface': {
			type: 'object',
			description: 'ExtensionInterface class for @see ' +
				'\\Magento\\Customer\\Api\\Data\\RegionInterface'
		},
		'customer-data-address-extension-interface': {
			type: 'object',
			description: 'ExtensionInterface class for @see ' +
				'\\Magento\\Customer\\Api\\Data\\AddressInterface'
		},
		'framework-attribute-interface': {
			type: 'object',
			description: 'Interface for custom attribute value.',
			properties: {
				attribute_code: {
					type: 'string',
					description: 'Attribute code'
				},
				value: {
					type: 'string',
					description: 'Attribute value'
				}
			},
			required: [
				'attribute_code',
				'value'
			]
		},
		'customer-data-customer-extension-interface': {
			type: 'object',
			description: 'ExtensionInterface class for @see ' +
				'\\Magento\\Customer\\Api\\Data\\CustomerInterface',
			properties: {
				is_subscribed: {
					type: 'boolean'
				},
				amazon_id: {
					type: 'string'
				},
				vertex_customer_code: {
					type: 'string'
				}
			}
		},
		'catalog-data-product-render-search-results-interface': {
			type: 'object',
			description: 'Dto that holds render information about products',
			properties: {
				items: {
					type: 'array',
					description: 'List of products rendered information',
					items: {
						type: 'object',
						description: 'Represents Data Object which holds ' +
							'enough information to render product ' +
							'This information is put into part as Add ' +
							'To Cart or Add to Compare Data or Price ' +
							'Data',
						properties: {
							add_to_cart_button: {
								type: 'object',
								description: 'Button interface. This interface ' +
									'represents all manner of product ' +
									'buttons: add to cart, add to compare, ' +
									'etc... The buttons describes by this ' +
									'interface should have interaction with ' +
									'backend',
								properties: {
									post_data: {
										type: 'string',
										description: 'Post data'
									},
									url: {
										type: 'string',
										description: 'Url, needed to add product to cart'
									},
									required_options: {
										type: 'boolean',
										description: 'Flag whether a ' +
											'product has options ' +
											'or not'
									},
									extension_attributes: {
										type: 'object',
										description: 'ExtensionInterface class for ' +
											'@see ' +
											'\\Magento\\Catalog\\Api\\Data\\ProductRender\\ButtonInterface'
									}
								},
								required: [
									'post_data',
									'url',
									'required_options'
								]
							},
							add_to_compare_button: {
								type: 'object',
								description: 'Button interface. This interface ' +
									'represents all manner of product ' +
									'buttons: add to cart, add to compare, ' +
									'etc... The buttons describes by this ' +
									'interface should have interaction with ' +
									'backend',
								properties: {
									post_data: {
										type: 'string',
										description: 'Post data'
									},
									url: {
										type: 'string',
										description: 'Url, needed to add product to cart'
									},
									required_options: {
										type: 'boolean',
										description: 'Flag whether a ' +
											'product has options ' +
											'or not'
									},
									extension_attributes: {
										type: 'object',
										description: 'ExtensionInterface class for ' +
											'@see ' +
											'\\Magento\\Catalog\\Api\\Data\\ProductRender\\ButtonInterface'
									}
								},
								required: [
									'post_data',
									'url',
									'required_options'
								]
							},
							price_info: {
								type: 'object',
								description: 'Price interface.',
								properties: {
									final_price: {
										type: 'number',
										description: 'Final price'
									},
									max_price: {
										type: 'number',
										description: 'Max price of a product'
									},
									max_regular_price: {
										type: 'number',
										description: 'Max regular price'
									},
									minimal_regular_price: {
										type: 'number',
										description: 'Minimal regular price'
									},
									special_price: {
										type: 'number',
										description: 'Special price'
									},
									minimal_price: {
										type: 'number'
									},
									regular_price: {
										type: 'number',
										description: 'Regular price'
									},
									formatted_prices: {
										type: 'object',
										description: 'Formatted Price interface. Aggregate ' +
											'formatted html with price ' +
											'representations. E.g.: <span ' +
											'class="price">$9.00</span> Consider ' +
											'currency, rounding and html',
										properties: {
											final_price: {
												type: 'string',
												description: 'Html with final price'
											},
											max_price: {
												type: 'string',
												description: 'Max price of a product'
											},
											minimal_price: {
												type: 'string',
												description: 'The minimal price of ' +
													'the product or ' +
													'variation'
											},
											max_regular_price: {
												type: 'string',
												description: 'Max regular price'
											},
											minimal_regular_price: {
												type: 'string',
												description: 'Minimal regular price'
											},
											special_price: {
												type: 'string',
												description: 'Special price'
											},
											regular_price: {
												type: 'string',
												description: 'Price - is price of product ' +
													'without discounts and special ' +
													'price with taxes and fixed ' +
													'product tax'
											},
											extension_attributes: {
												type: 'object',
												description: 'ExtensionInterface class for @see ' +
													'\\Magento\\Catalog\\Api\\Data\\ProductRender\\FormattedPriceInfoInterface'
											}
										},
										required: [
											'final_price',
											'max_price',
											'minimal_price',
											'max_regular_price',
											'minimal_regular_price',
											'special_price',
											'regular_price'
										]
									},
									extension_attributes: {
										type: 'object',
										description: 'ExtensionInterface class for ' +
											'@see ' +
											'\\Magento\\Catalog\\Api\\Data\\ProductRender\\PriceInfoInterface',
										properties: {
											msrp: {
												type: 'object',
												description: 'Price interface.',
												properties: {
													msrp_price: {
														type: 'string'
													},
													is_applicable: {
														type: 'string'
													},
													is_shown_price_on_gesture: {
														type: 'string'
													},
													msrp_message: {
														type: 'string'
													},
													explanation_message: {
														type: 'string'
													},
													extension_attributes: {
														type: 'object',
														description: 'ExtensionInterface class for ' +
															'@see ' +
															'\\Magento\\Msrp\\Api\\Data\\ProductRender\\MsrpPriceInfoInterface'
													}
												},
												required: [
													'msrp_price',
													'is_applicable',
													'is_shown_price_on_gesture',
													'msrp_message',
													'explanation_message'
												]
											},
											tax_adjustments: [Circular],
											weee_attributes: {
												type: 'array',
												items: {
													type: 'object',
													description: 'List of all weee attributes, their ' +
														'amounts, etc.., that product has',
													properties: {
														amount: {
															type: 'string',
															description: 'Weee attribute amount'
														},
														tax_amount: {
															type: 'string',
															description: 'Tax which is calculated to ' +
																'fixed product tax attribute'
														},
														tax_amount_incl_tax: {
															type: 'string',
															description: 'Tax amount of weee attribute'
														},
														amount_excl_tax: {
															type: 'string',
															description: 'Product amount exclude tax'
														},
														attribute_code: {
															type: 'string',
															description: 'Weee attribute code'
														},
														extension_attributes: {
															type: 'object',
															description: 'ExtensionInterface class ' +
																'for @see ' +
																'\\Magento\\Weee\\Api\\Data\\ProductRender\\WeeeAdjustmentAttributeInterface'
														}
													},
													required: [
														'amount',
														'tax_amount',
														'tax_amount_incl_tax',
														'amount_excl_tax',
														'attribute_code',
														'extension_attributes'
													]
												}
											},
											weee_adjustment: {
												type: 'string'
											}
										}
									}
								},
								required: [
									'final_price',
									'max_price',
									'max_regular_price',
									'minimal_regular_price',
									'special_price',
									'minimal_price',
									'regular_price',
									'formatted_prices'
								]
							},
							images: {
								type: 'array',
								description: 'Enough information, that ' +
									'needed to render image on ' +
									'front',
								items: {
									type: 'object',
									description: 'Product Render image interface. ' +
										'Represents physical ' +
										'characteristics of image, that ' +
										'can be used in product listing or ' +
										'product view',
									properties: {
										url: {
											type: 'string',
											description: 'Image url'
										},
										code: {
											type: 'string',
											description: 'Image code'
										},
										height: {
											type: 'number',
											description: 'Image height'
										},
										width: {
											type: 'number',
											description: 'Image width in px'
										},
										label: {
											type: 'string',
											description: 'Image label'
										},
										resized_width: {
											type: 'number',
											description: 'Resize width'
										},
										resized_height: {
											type: 'number',
											description: 'Resize height'
										},
										extension_attributes: {
											type: 'object',
											description: 'ExtensionInterface class for ' +
												'@see ' +
												'\\Magento\\Catalog\\Api\\Data\\ProductRender\\ImageInterface'
										}
									},
									required: [
										'url',
										'code',
										'height',
										'width',
										'label',
										'resized_width',
										'resized_height'
									]
								}
							},
							url: {
								type: 'string',
								description: 'Product url'
							},
							id: {
								type: 'integer',
								description: 'Product identifier'
							},
							name: {
								type: 'string',
								description: 'Product name'
							},
							type: {
								type: 'string',
								description: 'Product type. Such as ' +
									'bundle, grouped, simple, ' +
									'etc...'
							},
							is_salable: {
								type: 'string',
								description: 'Information about ' +
									'product saleability (In ' +
									'Stock)'
							},
							store_id: {
								type: 'integer',
								description: 'Information about current ' +
									'store id or requested store ' +
									'id'
							},
							currency_code: {
								type: 'string',
								description: 'Current or desired currency code to product'
							},
							extension_attributes: {
								type: 'object',
								description: 'ExtensionInterface class for @see ' +
									'\\Magento\\Catalog\\Api\\Data\\ProductRenderInterface',
								properties: {
									review_html: {
										type: 'string'
									},
									wishlist_button: {
										type: 'object',
										description: 'Button interface. This interface ' +
											'represents all manner of product ' +
											'buttons: add to cart, add to compare, ' +
											'etc... The buttons describes by this ' +
											'interface should have interaction with ' +
											'backend',
										properties: {
											post_data: {
												type: 'string',
												description: 'Post data'
											},
											url: {
												type: 'string',
												description: 'Url, needed to add product to cart'
											},
											required_options: {
												type: 'boolean',
												description: 'Flag whether a ' +
													'product has options ' +
													'or not'
											},
											extension_attributes: {
												type: 'object',
												description: 'ExtensionInterface class for ' +
													'@see ' +
													'\\Magento\\Catalog\\Api\\Data\\ProductRender\\ButtonInterface'
											}
										},
										required: [
											'post_data',
											'url',
											'required_options'
										]
									}
								}
							}
						},
						required: [
							'add_to_cart_button',
							'add_to_compare_button',
							'price_info',
							'images',
							'url',
							'id',
							'name',
							'type',
							'is_salable',
							'store_id',
							'currency_code',
							'extension_attributes'
						]
					}
				}
			},
			required: [
				'items'
			]
		},
		'catalog-data-product-render-interface': {
			type: 'object',
			description: 'Represents Data Object which holds enough information ' +
				'to render product This information is put into part ' +
				'as Add To Cart or Add to Compare Data or Price Data',
			properties: {
				add_to_cart_button: {
					type: 'object',
					description: 'Button interface. This interface represents all ' +
						'manner of product buttons: add to cart, add to ' +
						'compare, etc... The buttons describes by this ' +
						'interface should have interaction with backend',
					properties: {
						post_data: {
							type: 'string',
							description: 'Post data'
						},
						url: {
							type: 'string',
							description: 'Url, needed to add product to cart'
						},
						required_options: {
							type: 'boolean',
							description: 'Flag whether a product has options or not'
						},
						extension_attributes: {
							type: 'object',
							description: 'ExtensionInterface class for @see ' +
								'\\Magento\\Catalog\\Api\\Data\\ProductRender\\ButtonInterface'
						}
					},
					required: [
						'post_data',
						'url',
						'required_options'
					]
				},
				add_to_compare_button: {
					type: 'object',
					description: 'Button interface. This interface represents all ' +
						'manner of product buttons: add to cart, add to ' +
						'compare, etc... The buttons describes by this ' +
						'interface should have interaction with backend',
					properties: {
						post_data: {
							type: 'string',
							description: 'Post data'
						},
						url: {
							type: 'string',
							description: 'Url, needed to add product to cart'
						},
						required_options: {
							type: 'boolean',
							description: 'Flag whether a product has options or not'
						},
						extension_attributes: {
							type: 'object',
							description: 'ExtensionInterface class for @see ' +
								'\\Magento\\Catalog\\Api\\Data\\ProductRender\\ButtonInterface'
						}
					},
					required: [
						'post_data',
						'url',
						'required_options'
					]
				},
				price_info: {
					type: 'object',
					description: 'Price interface.',
					properties: {
						final_price: {
							type: 'number',
							description: 'Final price'
						},
						max_price: {
							type: 'number',
							description: 'Max price of a product'
						},
						max_regular_price: {
							type: 'number',
							description: 'Max regular price'
						},
						minimal_regular_price: {
							type: 'number',
							description: 'Minimal regular price'
						},
						special_price: {
							type: 'number',
							description: 'Special price'
						},
						minimal_price: {
							type: 'number'
						},
						regular_price: {
							type: 'number',
							description: 'Regular price'
						},
						formatted_prices: {
							type: 'object',
							description: 'Formatted Price interface. Aggregate ' +
								'formatted html with price ' +
								'representations. E.g.: <span ' +
								'class="price">$9.00</span> Consider ' +
								'currency, rounding and html',
							properties: {
								final_price: {
									type: 'string',
									description: 'Html with final price'
								},
								max_price: {
									type: 'string',
									description: 'Max price of a product'
								},
								minimal_price: {
									type: 'string',
									description: 'The minimal price of ' +
										'the product or ' +
										'variation'
								},
								max_regular_price: {
									type: 'string',
									description: 'Max regular price'
								},
								minimal_regular_price: {
									type: 'string',
									description: 'Minimal regular price'
								},
								special_price: {
									type: 'string',
									description: 'Special price'
								},
								regular_price: {
									type: 'string',
									description: 'Price - is price of product ' +
										'without discounts and special ' +
										'price with taxes and fixed ' +
										'product tax'
								},
								extension_attributes: {
									type: 'object',
									description: 'ExtensionInterface class for @see ' +
										'\\Magento\\Catalog\\Api\\Data\\ProductRender\\FormattedPriceInfoInterface'
								}
							},
							required: [
								'final_price',
								'max_price',
								'minimal_price',
								'max_regular_price',
								'minimal_regular_price',
								'special_price',
								'regular_price'
							]
						},
						extension_attributes: {
							type: 'object',
							description: 'ExtensionInterface class for @see ' +
								'\\Magento\\Catalog\\Api\\Data\\ProductRender\\PriceInfoInterface',
							properties: {
								msrp: {
									type: 'object',
									description: 'Price interface.',
									properties: {
										msrp_price: {
											type: 'string'
										},
										is_applicable: {
											type: 'string'
										},
										is_shown_price_on_gesture: {
											type: 'string'
										},
										msrp_message: {
											type: 'string'
										},
										explanation_message: {
											type: 'string'
										},
										extension_attributes: {
											type: 'object',
											description: 'ExtensionInterface class for ' +
												'@see ' +
												'\\Magento\\Msrp\\Api\\Data\\ProductRender\\MsrpPriceInfoInterface'
										}
									},
									required: [
										'msrp_price',
										'is_applicable',
										'is_shown_price_on_gesture',
										'msrp_message',
										'explanation_message'
									]
								},
								tax_adjustments: [Circular],
								weee_attributes: {
									type: 'array',
									items: {
										type: 'object',
										description: 'List of all weee attributes, their ' +
											'amounts, etc.., that product has',
										properties: {
											amount: {
												type: 'string',
												description: 'Weee attribute amount'
											},
											tax_amount: {
												type: 'string',
												description: 'Tax which is calculated to ' +
													'fixed product tax attribute'
											},
											tax_amount_incl_tax: {
												type: 'string',
												description: 'Tax amount of weee attribute'
											},
											amount_excl_tax: {
												type: 'string',
												description: 'Product amount exclude tax'
											},
											attribute_code: {
												type: 'string',
												description: 'Weee attribute code'
											},
											extension_attributes: {
												type: 'object',
												description: 'ExtensionInterface class for @see ' +
													'\\Magento\\Weee\\Api\\Data\\ProductRender\\WeeeAdjustmentAttributeInterface'
											}
										},
										required: [
											'amount',
											'tax_amount',
											'tax_amount_incl_tax',
											'amount_excl_tax',
											'attribute_code',
											'extension_attributes'
										]
									}
								},
								weee_adjustment: {
									type: 'string'
								}
							}
						}
					},
					required: [
						'final_price',
						'max_price',
						'max_regular_price',
						'minimal_regular_price',
						'special_price',
						'minimal_price',
						'regular_price',
						'formatted_prices'
					]
				},
				images: {
					type: 'array',
					description: 'Enough information, that ' +
						'needed to render image on ' +
						'front',
					items: {
						type: 'object',
						description: 'Product Render image interface. Represents ' +
							'physical characteristics of image, that can ' +
							'be used in product listing or product view',
						properties: {
							url: {
								type: 'string',
								description: 'Image url'
							},
							code: {
								type: 'string',
								description: 'Image code'
							},
							height: {
								type: 'number',
								description: 'Image height'
							},
							width: {
								type: 'number',
								description: 'Image width in px'
							},
							label: {
								type: 'string',
								description: 'Image label'
							},
							resized_width: {
								type: 'number',
								description: 'Resize width'
							},
							resized_height: {
								type: 'number',
								description: 'Resize height'
							},
							extension_attributes: {
								type: 'object',
								description: 'ExtensionInterface class for @see ' +
									'\\Magento\\Catalog\\Api\\Data\\ProductRender\\ImageInterface'
							}
						},
						required: [
							'url',
							'code',
							'height',
							'width',
							'label',
							'resized_width',
							'resized_height'
						]
					}
				},
				url: {
					type: 'string',
					description: 'Product url'
				},
				id: {
					type: 'integer',
					description: 'Product identifier'
				},
				name: {
					type: 'string',
					description: 'Product name'
				},
				type: {
					type: 'string',
					description: 'Product type. Such as ' +
						'bundle, grouped, simple, ' +
						'etc...'
				},
				is_salable: {
					type: 'string',
					description: 'Information about product saleability (In Stock)'
				},
				store_id: {
					type: 'integer',
					description: 'Information about current ' +
						'store id or requested store ' +
						'id'
				},
				currency_code: {
					type: 'string',
					description: 'Current or desired currency code to product'
				},
				extension_attributes: {
					type: 'object',
					description: 'ExtensionInterface class for @see ' +
						'\\Magento\\Catalog\\Api\\Data\\ProductRenderInterface',
					properties: {
						review_html: {
							type: 'string'
						},
						wishlist_button: {
							type: 'object',
							description: 'Button interface. This interface ' +
								'represents all manner of product ' +
								'buttons: add to cart, add to compare, ' +
								'etc... The buttons describes by this ' +
								'interface should have interaction with ' +
								'backend',
							properties: {
								post_data: {
									type: 'string',
									description: 'Post data'
								},
								url: {
									type: 'string',
									description: 'Url, needed to add product to cart'
								},
								required_options: {
									type: 'boolean',
									description: 'Flag whether a product has options or not'
								},
								extension_attributes: {
									type: 'object',
									description: 'ExtensionInterface class for ' +
										'@see ' +
										'\\Magento\\Catalog\\Api\\Data\\ProductRender\\ButtonInterface'
								}
							},
							required: [
								'post_data',
								'url',
								'required_options'
							]
						}
					}
				}
			},
			required: [
				'add_to_cart_button',
				'add_to_compare_button',
				'price_info',
				'images',
				'url',
				'id',
				'name',
				'type',
				'is_salable',
				'store_id',
				'currency_code',
				'extension_attributes'
			]
		},
		'catalog-data-product-render-button-interface': {
			type: 'object',
			description: 'Button interface. This interface represents all ' +
				'manner of product buttons: add to cart, add to ' +
				'compare, etc... The buttons describes by this ' +
				'interface should have interaction with backend',
			properties: {
				post_data: {
					type: 'string',
					description: 'Post data'
				},
				url: {
					type: 'string',
					description: 'Url, needed to add product to cart'
				},
				required_options: {
					type: 'boolean',
					description: 'Flag whether a product has options or not'
				},
				extension_attributes: {
					type: 'object',
					description: 'ExtensionInterface class for @see ' +
						'\\Magento\\Catalog\\Api\\Data\\ProductRender\\ButtonInterface'
				}
			},
			required: [
				'post_data',
				'url',
				'required_options'
			]
		},
		'catalog-data-product-render-button-extension-interface': {
			type: 'object',
			description: 'ExtensionInterface class for @see ' +
				'\\Magento\\Catalog\\Api\\Data\\ProductRender\\ButtonInterface'
		},
		'catalog-data-product-render-price-info-interface': {
			type: 'object',
			description: 'Price interface.',
			properties: {
				final_price: {
					type: 'number',
					description: 'Final price'
				},
				max_price: {
					type: 'number',
					description: 'Max price of a product'
				},
				max_regular_price: {
					type: 'number',
					description: 'Max regular price'
				},
				minimal_regular_price: {
					type: 'number',
					description: 'Minimal regular price'
				},
				special_price: {
					type: 'number',
					description: 'Special price'
				},
				minimal_price: {
					type: 'number'
				},
				regular_price: {
					type: 'number',
					description: 'Regular price'
				},
				formatted_prices: {
					type: 'object',
					description: 'Formatted Price interface. Aggregate ' +
						'formatted html with price ' +
						'representations. E.g.: <span ' +
						'class="price">$9.00</span> Consider ' +
						'currency, rounding and html',
					properties: {
						final_price: {
							type: 'string',
							description: 'Html with final price'
						},
						max_price: {
							type: 'string',
							description: 'Max price of a product'
						},
						minimal_price: {
							type: 'string',
							description: 'The minimal price of the product or variation'
						},
						max_regular_price: {
							type: 'string',
							description: 'Max regular price'
						},
						minimal_regular_price: {
							type: 'string',
							description: 'Minimal regular price'
						},
						special_price: {
							type: 'string',
							description: 'Special price'
						},
						regular_price: {
							type: 'string',
							description: 'Price - is price of product ' +
								'without discounts and special ' +
								'price with taxes and fixed ' +
								'product tax'
						},
						extension_attributes: {
							type: 'object',
							description: 'ExtensionInterface class for @see ' +
								'\\Magento\\Catalog\\Api\\Data\\ProductRender\\FormattedPriceInfoInterface'
						}
					},
					required: [
						'final_price',
						'max_price',
						'minimal_price',
						'max_regular_price',
						'minimal_regular_price',
						'special_price',
						'regular_price'
					]
				},
				extension_attributes: {
					type: 'object',
					description: 'ExtensionInterface class for @see ' +
						'\\Magento\\Catalog\\Api\\Data\\ProductRender\\PriceInfoInterface',
					properties: {
						msrp: {
							type: 'object',
							description: 'Price interface.',
							properties: {
								msrp_price: {
									type: 'string'
								},
								is_applicable: {
									type: 'string'
								},
								is_shown_price_on_gesture: {
									type: 'string'
								},
								msrp_message: {
									type: 'string'
								},
								explanation_message: {
									type: 'string'
								},
								extension_attributes: {
									type: 'object',
									description: 'ExtensionInterface class for ' +
										'@see ' +
										'\\Magento\\Msrp\\Api\\Data\\ProductRender\\MsrpPriceInfoInterface'
								}
							},
							required: [
								'msrp_price',
								'is_applicable',
								'is_shown_price_on_gesture',
								'msrp_message',
								'explanation_message'
							]
						},
						tax_adjustments: [Circular],
						weee_attributes: {
							type: 'array',
							items: {
								type: 'object',
								description: 'List of all weee attributes, their ' +
									'amounts, etc.., that product has',
								properties: {
									amount: {
										type: 'string',
										description: 'Weee attribute amount'
									},
									tax_amount: {
										type: 'string',
										description: 'Tax which is calculated to ' +
											'fixed product tax attribute'
									},
									tax_amount_incl_tax: {
										type: 'string',
										description: 'Tax amount of weee attribute'
									},
									amount_excl_tax: {
										type: 'string',
										description: 'Product amount exclude tax'
									},
									attribute_code: {
										type: 'string',
										description: 'Weee attribute code'
									},
									extension_attributes: {
										type: 'object',
										description: 'ExtensionInterface class for @see ' +
											'\\Magento\\Weee\\Api\\Data\\ProductRender\\WeeeAdjustmentAttributeInterface'
									}
								},
								required: [
									'amount',
									'tax_amount',
									'tax_amount_incl_tax',
									'amount_excl_tax',
									'attribute_code',
									'extension_attributes'
								]
							}
						},
						weee_adjustment: {
							type: 'string'
						}
					}
				}
			},
			required: [
				'final_price',
				'max_price',
				'max_regular_price',
				'minimal_regular_price',
				'special_price',
				'minimal_price',
				'regular_price',
				'formatted_prices'
			]
		},
		'catalog-data-product-render-formatted-price-info-interface': {
			type: 'object',
			description: 'Formatted Price interface. Aggregate formatted html ' +
				'with price representations. E.g.: <span ' +
				'class="price">$9.00</span> Consider currency, ' +
				'rounding and html',
			properties: {
				final_price: {
					type: 'string',
					description: 'Html with final price'
				},
				max_price: {
					type: 'string',
					description: 'Max price of a product'
				},
				minimal_price: {
					type: 'string',
					description: 'The minimal price of the product or variation'
				},
				max_regular_price: {
					type: 'string',
					description: 'Max regular price'
				},
				minimal_regular_price: {
					type: 'string',
					description: 'Minimal regular price'
				},
				special_price: {
					type: 'string',
					description: 'Special price'
				},
				regular_price: {
					type: 'string',
					description: 'Price - is price of product without discounts ' +
						'and special price with taxes and fixed product ' +
						'tax'
				},
				extension_attributes: {
					type: 'object',
					description: 'ExtensionInterface class for @see ' +
						'\\Magento\\Catalog\\Api\\Data\\ProductRender\\FormattedPriceInfoInterface'
				}
			},
			required: [
				'final_price',
				'max_price',
				'minimal_price',
				'max_regular_price',
				'minimal_regular_price',
				'special_price',
				'regular_price'
			]
		},
		'catalog-data-product-render-formatted-price-info-extension-interface': {
			type: 'object',
			description: 'ExtensionInterface class for @see ' +
				'\\Magento\\Catalog\\Api\\Data\\ProductRender\\FormattedPriceInfoInterface'
		},
		'catalog-data-product-render-price-info-extension-interface': {
			type: 'object',
			description: 'ExtensionInterface class for @see ' +
				'\\Magento\\Catalog\\Api\\Data\\ProductRender\\PriceInfoInterface',
			properties: {
				msrp: {
					type: 'object',
					description: 'Price interface.',
					properties: {
						msrp_price: {
							type: 'string'
						},
						is_applicable: {
							type: 'string'
						},
						is_shown_price_on_gesture: {
							type: 'string'
						},
						msrp_message: {
							type: 'string'
						},
						explanation_message: {
							type: 'string'
						},
						extension_attributes: {
							type: 'object',
							description: 'ExtensionInterface class for ' +
								'@see ' +
								'\\Magento\\Msrp\\Api\\Data\\ProductRender\\MsrpPriceInfoInterface'
						}
					},
					required: [
						'msrp_price',
						'is_applicable',
						'is_shown_price_on_gesture',
						'msrp_message',
						'explanation_message'
					]
				},
				tax_adjustments: {
					type: 'object',
					description: 'Price interface.',
					properties: {
						final_price: {
							type: 'number',
							description: 'Final price'
						},
						max_price: {
							type: 'number',
							description: 'Max price of a product'
						},
						max_regular_price: {
							type: 'number',
							description: 'Max regular price'
						},
						minimal_regular_price: {
							type: 'number',
							description: 'Minimal regular price'
						},
						special_price: {
							type: 'number',
							description: 'Special price'
						},
						minimal_price: {
							type: 'number'
						},
						regular_price: {
							type: 'number',
							description: 'Regular price'
						},
						formatted_prices: {
							type: 'object',
							description: 'Formatted Price interface. Aggregate ' +
								'formatted html with price ' +
								'representations. E.g.: <span ' +
								'class="price">$9.00</span> Consider ' +
								'currency, rounding and html',
							properties: {
								final_price: {
									type: 'string',
									description: 'Html with final price'
								},
								max_price: {
									type: 'string',
									description: 'Max price of a product'
								},
								minimal_price: {
									type: 'string',
									description: 'The minimal price of ' +
										'the product or ' +
										'variation'
								},
								max_regular_price: {
									type: 'string',
									description: 'Max regular price'
								},
								minimal_regular_price: {
									type: 'string',
									description: 'Minimal regular price'
								},
								special_price: {
									type: 'string',
									description: 'Special price'
								},
								regular_price: {
									type: 'string',
									description: 'Price - is price of product ' +
										'without discounts and special ' +
										'price with taxes and fixed ' +
										'product tax'
								},
								extension_attributes: {
									type: 'object',
									description: 'ExtensionInterface class for @see ' +
										'\\Magento\\Catalog\\Api\\Data\\ProductRender\\FormattedPriceInfoInterface'
								}
							},
							required: [
								'final_price',
								'max_price',
								'minimal_price',
								'max_regular_price',
								'minimal_regular_price',
								'special_price',
								'regular_price'
							]
						},
						extension_attributes: [Circular]
					},
					required: [
						'final_price',
						'max_price',
						'max_regular_price',
						'minimal_regular_price',
						'special_price',
						'minimal_price',
						'regular_price',
						'formatted_prices'
					]
				},
				weee_attributes: {
					type: 'array',
					items: {
						type: 'object',
						description: 'List of all weee attributes, their ' +
							'amounts, etc.., that product has',
						properties: {
							amount: {
								type: 'string',
								description: 'Weee attribute amount'
							},
							tax_amount: {
								type: 'string',
								description: 'Tax which is calculated to ' +
									'fixed product tax attribute'
							},
							tax_amount_incl_tax: {
								type: 'string',
								description: 'Tax amount of weee attribute'
							},
							amount_excl_tax: {
								type: 'string',
								description: 'Product amount exclude tax'
							},
							attribute_code: {
								type: 'string',
								description: 'Weee attribute code'
							},
							extension_attributes: {
								type: 'object',
								description: 'ExtensionInterface class for @see ' +
									'\\Magento\\Weee\\Api\\Data\\ProductRender\\WeeeAdjustmentAttributeInterface'
							}
						},
						required: [
							'amount',
							'tax_amount',
							'tax_amount_incl_tax',
							'amount_excl_tax',
							'attribute_code',
							'extension_attributes'
						]
					}
				},
				weee_adjustment: {
					type: 'string'
				}
			}
		},
		'msrp-data-product-render-msrp-price-info-interface': {
			type: 'object',
			description: 'Price interface.',
			properties: {
				msrp_price: {
					type: 'string'
				},
				is_applicable: {
					type: 'string'
				},
				is_shown_price_on_gesture: {
					type: 'string'
				},
				msrp_message: {
					type: 'string'
				},
				explanation_message: {
					type: 'string'
				},
				extension_attributes: {
					type: 'object',
					description: 'ExtensionInterface class for @see ' +
						'\\Magento\\Msrp\\Api\\Data\\ProductRender\\MsrpPriceInfoInterface'
				}
			},
			required: [
				'msrp_price',
				'is_applicable',
				'is_shown_price_on_gesture',
				'msrp_message',
				'explanation_message'
			]
		},
		'msrp-data-product-render-msrp-price-info-extension-interface': {
			type: 'object',
			description: 'ExtensionInterface class for @see ' +
				'\\Magento\\Msrp\\Api\\Data\\ProductRender\\MsrpPriceInfoInterface'
		},
		'weee-data-product-render-weee-adjustment-attribute-interface': {
			type: 'object',
			description: 'List of all weee attributes, their ' +
				'amounts, etc.., that product has',
			properties: {
				amount: {
					type: 'string',
					description: 'Weee attribute amount'
				},
				tax_amount: {
					type: 'string',
					description: 'Tax which is calculated to ' +
						'fixed product tax attribute'
				},
				tax_amount_incl_tax: {
					type: 'string',
					description: 'Tax amount of weee attribute'
				},
				amount_excl_tax: {
					type: 'string',
					description: 'Product amount exclude tax'
				},
				attribute_code: {
					type: 'string',
					description: 'Weee attribute code'
				},
				extension_attributes: {
					type: 'object',
					description: 'ExtensionInterface class for @see ' +
						'\\Magento\\Weee\\Api\\Data\\ProductRender\\WeeeAdjustmentAttributeInterface'
				}
			},
			required: [
				'amount',
				'tax_amount',
				'tax_amount_incl_tax',
				'amount_excl_tax',
				'attribute_code',
				'extension_attributes'
			]
		},
		'weee-data-product-render-weee-adjustment-attribute-extension-interface': {
			type: 'object',
			description: 'ExtensionInterface class for @see ' +
				'\\Magento\\Weee\\Api\\Data\\ProductRender\\WeeeAdjustmentAttributeInterface'
		},
		'catalog-data-product-render-image-interface': {
			type: 'object',
			description: 'Product Render image interface. Represents ' +
				'physical characteristics of image, that can ' +
				'be used in product listing or product view',
			properties: {
				url: {
					type: 'string',
					description: 'Image url'
				},
				code: {
					type: 'string',
					description: 'Image code'
				},
				height: {
					type: 'number',
					description: 'Image height'
				},
				width: {
					type: 'number',
					description: 'Image width in px'
				},
				label: {
					type: 'string',
					description: 'Image label'
				},
				resized_width: {
					type: 'number',
					description: 'Resize width'
				},
				resized_height: {
					type: 'number',
					description: 'Resize height'
				},
				extension_attributes: {
					type: 'object',
					description: 'ExtensionInterface class for @see ' +
						'\\Magento\\Catalog\\Api\\Data\\ProductRender\\ImageInterface'
				}
			},
			required: [
				'url',
				'code',
				'height',
				'width',
				'label',
				'resized_width',
				'resized_height'
			]
		},
		'catalog-data-product-render-image-extension-interface': {
			type: 'object',
			description: 'ExtensionInterface class for @see ' +
				'\\Magento\\Catalog\\Api\\Data\\ProductRender\\ImageInterface'
		},
		'catalog-data-product-render-extension-interface': {
			type: 'object',
			description: 'ExtensionInterface class for @see ' +
				'\\Magento\\Catalog\\Api\\Data\\ProductRenderInterface',
			properties: {
				review_html: {
					type: 'string'
				},
				wishlist_button: {
					type: 'object',
					description: 'Button interface. This interface represents all ' +
						'manner of product buttons: add to cart, add to ' +
						'compare, etc... The buttons describes by this ' +
						'interface should have interaction with backend',
					properties: {
						post_data: {
							type: 'string',
							description: 'Post data'
						},
						url: {
							type: 'string',
							description: 'Url, needed to add product to cart'
						},
						required_options: {
							type: 'boolean',
							description: 'Flag whether a product has options or not'
						},
						extension_attributes: {
							type: 'object',
							description: 'ExtensionInterface class for @see ' +
								'\\Magento\\Catalog\\Api\\Data\\ProductRender\\ButtonInterface'
						}
					},
					required: [
						'post_data',
						'url',
						'required_options'
					]
				}
			}
		},
		'quote-data-cart-interface': {
			type: 'object',
			description: 'Interface CartInterface',
			properties: {
				id: {
					type: 'integer',
					description: 'Cart/quote ID.'
				},
				created_at: {
					type: 'string',
					description: 'Cart creation date and time. Otherwise, null.'
				},
				updated_at: {
					type: 'string',
					description: 'Cart last update date and time. Otherwise, null.'
				},
				converted_at: {
					type: 'string',
					description: 'Cart conversion date and time. Otherwise, null.'
				},
				is_active: {
					type: 'boolean',
					description: 'Active status flag value. Otherwise, null.'
				},
				is_virtual: {
					type: 'boolean',
					description: 'Virtual flag value. Otherwise, null.'
				},
				items: {
					type: 'array',
					description: 'Array of items. Otherwise, null.',
					items: {
						type: 'object',
						description: 'Interface CartItemInterface',
						properties: {
							item_id: {
								type: 'integer',
								description: 'Item ID. Otherwise, null.'
							},
							sku: {
								type: 'string',
								description: 'Product SKU. Otherwise, null.'
							},
							qty: {
								type: 'number',
								description: 'Product quantity.'
							},
							name: {
								type: 'string',
								description: 'Product name. Otherwise, null.'
							},
							price: {
								type: 'number',
								description: 'Product price. Otherwise, null.'
							},
							product_type: {
								type: 'string',
								description: 'Product type. Otherwise, null.'
							},
							quote_id: {
								type: 'string',
								description: 'Quote id.'
							},
							product_option: {
								type: 'object',
								description: 'Product option interface',
								properties: {
									extension_attributes: {
										type: 'object',
										description: 'ExtensionInterface class for @see ' +
											'\\Magento\\Quote\\Api\\Data\\ProductOptionInterface',
										properties: {
											custom_options: {
												type: 'array',
												items: {
													type: 'object',
													description: 'Interface CustomOptionInterface',
													properties: {
														option_id: {
															type: 'string',
															description: 'Option id'
														},
														option_value: {
															type: 'string',
															description: 'Option value'
														},
														extension_attributes: {
															type: 'object',
															description: 'ExtensionInterface class ' +
																'for @see ' +
																'\\Magento\\Catalog\\Api\\Data\\CustomOptionInterface',
															properties: {
																file_info: {
																	type: 'object',
																	description: 'Image Content ' +
																		'data interface',
																	properties: {
																		base64_encoded_data: {
																			type: 'string',
																			description: 'Media data (base64 ' +
																				'encoded content)'
																		},
																		type: {
																			type: 'string',
																			description: 'MIME type'
																		},
																		name: {
																			type: 'string',
																			description: 'Image name'
																		}
																	},
																	required: [
																		'base64_encoded_data',
																		'type',
																		'name'
																	]
																}
															}
														}
													},
													required: [
														'option_id',
														'option_value'
													]
												}
											},
											bundle_options: {
												type: 'array',
												items: {
													type: 'object',
													description: 'Interface BundleOptionInterface',
													properties: {
														option_id: {
															type: 'integer',
															description: 'Bundle option id.'
														},
														option_qty: {
															type: 'integer',
															description: 'Bundle option quantity.'
														},
														option_selections: {
															type: 'array',
															description: 'Bundle option selection ids.',
															items: {
																type: 'integer'
															}
														},
														extension_attributes: {
															type: 'object',
															description: 'ExtensionInterface class ' +
																'for @see ' +
																'\\Magento\\Bundle\\Api\\Data\\BundleOptionInterface'
														}
													},
													required: [
														'option_id',
														'option_qty',
														'option_selections'
													]
												}
											},
											downloadable_option: {
												type: 'object',
												description: 'Downloadable Option',
												properties: {
													downloadable_links: {
														type: 'array',
														description: 'The list of downloadable links',
														items: {
															type: 'integer'
														}
													}
												},
												required: [
													'downloadable_links'
												]
											},
											configurable_item_options: {
												type: 'array',
												items: {
													type: 'object',
													description: 'Interface ' +
														'ConfigurableItemOptionValueInterface',
													properties: {
														option_id: {
															type: 'string',
															description: 'Option SKU'
														},
														option_value: {
															type: 'integer',
															description: 'Item id'
														},
														extension_attributes: {
															type: 'object',
															description: 'ExtensionInterface class ' +
																'for @see ' +
																'\\Magento\\ConfigurableProduct\\Api\\Data\\ConfigurableItemOptionValueInterface'
														}
													},
													required: [
														'option_id'
													]
												}
											}
										}
									}
								}
							},
							extension_attributes: {
								type: 'object',
								description: 'ExtensionInterface class for @see ' +
									'\\Magento\\Quote\\Api\\Data\\CartItemInterface'
							}
						},
						required: [
							'qty',
							'quote_id'
						]
					}
				},
				items_count: {
					type: 'integer',
					description: 'Number of different items or ' +
						'products in the cart. Otherwise, ' +
						'null.'
				},
				items_qty: {
					type: 'number',
					description: 'Total quantity of all cart items. Otherwise, null.'
				},
				customer: {
					type: 'object',
					description: 'Customer interface.',
					properties: {
						id: {
							type: 'integer',
							description: 'Customer id'
						},
						group_id: {
							type: 'integer',
							description: 'Group id'
						},
						default_billing: {
							type: 'string',
							description: 'Default billing address id'
						},
						default_shipping: {
							type: 'string',
							description: 'Default shipping address id'
						},
						confirmation: {
							type: 'string',
							description: 'Confirmation'
						},
						created_at: {
							type: 'string',
							description: 'Created at time'
						},
						updated_at: {
							type: 'string',
							description: 'Updated at time'
						},
						created_in: {
							type: 'string',
							description: 'Created in area'
						},
						dob: {
							type: 'string',
							description: 'Date of birth'
						},
						email: {
							type: 'string',
							description: 'Email address'
						},
						firstname: {
							type: 'string',
							description: 'First name'
						},
						lastname: {
							type: 'string',
							description: 'Last name'
						},
						middlename: {
							type: 'string',
							description: 'Middle name'
						},
						prefix: {
							type: 'string',
							description: 'Prefix'
						},
						suffix: {
							type: 'string',
							description: 'Suffix'
						},
						gender: {
							type: 'integer',
							description: 'Gender'
						},
						store_id: {
							type: 'integer',
							description: 'Store id'
						},
						taxvat: {
							type: 'string',
							description: 'Tax Vat'
						},
						website_id: {
							type: 'integer',
							description: 'Website id'
						},
						addresses: {
							type: 'array',
							description: 'Customer addresses.',
							items: {
								type: 'object',
								description: 'Customer address interface.',
								properties: {
									id: {
										type: 'integer',
										description: 'ID'
									},
									customer_id: {
										type: 'integer',
										description: 'Customer ID'
									},
									region: {
										type: 'object',
										description: 'Customer address region interface.',
										properties: {
											region_code: {
												type: 'string',
												description: 'Region code'
											},
											region: {
												type: 'string',
												description: 'Region'
											},
											region_id: {
												type: 'integer',
												description: 'Region id'
											},
											extension_attributes: {
												type: 'object',
												description: 'ExtensionInterface class ' +
													'for @see ' +
													'\\Magento\\Customer\\Api\\Data\\RegionInterface'
											}
										},
										required: [
											'region_code',
											'region',
											'region_id'
										]
									},
									region_id: {
										type: 'integer',
										description: 'Region ID'
									},
									country_id: {
										type: 'string',
										description: 'Country code in ISO_3166-2 format'
									},
									street: {
										type: 'array',
										description: 'Street',
										items: {
											type: 'string'
										}
									},
									company: {
										type: 'string',
										description: 'Company'
									},
									telephone: {
										type: 'string',
										description: 'Telephone number'
									},
									fax: {
										type: 'string',
										description: 'Fax number'
									},
									postcode: {
										type: 'string',
										description: 'Postcode'
									},
									city: {
										type: 'string',
										description: 'City name'
									},
									firstname: {
										type: 'string',
										description: 'First name'
									},
									lastname: {
										type: 'string',
										description: 'Last name'
									},
									middlename: {
										type: 'string',
										description: 'Middle name'
									},
									prefix: {
										type: 'string',
										description: 'Prefix'
									},
									suffix: {
										type: 'string',
										description: 'Suffix'
									},
									vat_id: {
										type: 'string',
										description: 'Vat id'
									},
									default_shipping: {
										type: 'boolean',
										description: 'If this address is ' +
											'default shipping ' +
											'address.'
									},
									default_billing: {
										type: 'boolean',
										description: 'If this address is ' +
											'default billing ' +
											'address'
									},
									extension_attributes: {
										type: 'object',
										description: 'ExtensionInterface class for @see ' +
											'\\Magento\\Customer\\Api\\Data\\AddressInterface'
									},
									custom_attributes: {
										type: 'array',
										description: 'Custom attributes values.',
										items: {
											type: 'object',
											description: 'Interface for custom attribute value.',
											properties: {
												attribute_code: {
													type: 'string',
													description: 'Attribute code'
												},
												value: {
													type: 'string',
													description: 'Attribute value'
												}
											},
											required: [
												'attribute_code',
												'value'
											]
										}
									}
								}
							}
						},
						disable_auto_group_change: {
							type: 'integer',
							description: 'Disable auto group change flag.'
						},
						extension_attributes: {
							type: 'object',
							description: 'ExtensionInterface class for @see ' +
								'\\Magento\\Customer\\Api\\Data\\CustomerInterface',
							properties: {
								is_subscribed: {
									type: 'boolean'
								},
								amazon_id: {
									type: 'string'
								},
								vertex_customer_code: {
									type: 'string'
								}
							}
						},
						custom_attributes: {
							type: 'array',
							description: 'Custom attributes values.',
							items: {
								type: 'object',
								description: 'Interface for custom attribute value.',
								properties: {
									attribute_code: {
										type: 'string',
										description: 'Attribute code'
									},
									value: {
										type: 'string',
										description: 'Attribute value'
									}
								},
								required: [
									'attribute_code',
									'value'
								]
							}
						}
					},
					required: [
						'email',
						'firstname',
						'lastname'
					]
				},
				billing_address: {
					type: 'object',
					description: 'Interface AddressInterface',
					properties: {
						id: {
							type: 'integer',
							description: 'Id'
						},
						region: {
							type: 'string',
							description: 'Region name'
						},
						region_id: {
							type: 'integer',
							description: 'Region id'
						},
						region_code: {
							type: 'string',
							description: 'Region code'
						},
						country_id: {
							type: 'string',
							description: 'Country id'
						},
						street: {
							type: 'array',
							description: 'Street',
							items: {
								type: 'string'
							}
						},
						company: {
							type: 'string',
							description: 'Company'
						},
						telephone: {
							type: 'string',
							description: 'Telephone number'
						},
						fax: {
							type: 'string',
							description: 'Fax number'
						},
						postcode: {
							type: 'string',
							description: 'Postcode'
						},
						city: {
							type: 'string',
							description: 'City name'
						},
						firstname: {
							type: 'string',
							description: 'First name'
						},
						lastname: {
							type: 'string',
							description: 'Last name'
						},
						middlename: {
							type: 'string',
							description: 'Middle name'
						},
						prefix: {
							type: 'string',
							description: 'Prefix'
						},
						suffix: {
							type: 'string',
							description: 'Suffix'
						},
						vat_id: {
							type: 'string',
							description: 'Vat id'
						},
						customer_id: {
							type: 'integer',
							description: 'Customer id'
						},
						email: {
							type: 'string',
							description: 'Billing/shipping email'
						},
						same_as_billing: {
							type: 'integer',
							description: 'Same as billing flag'
						},
						customer_address_id: {
							type: 'integer',
							description: 'Customer address id'
						},
						save_in_address_book: {
							type: 'integer',
							description: 'Save in address book flag'
						},
						extension_attributes: {
							type: 'object',
							description: 'ExtensionInterface class for @see ' +
								'\\Magento\\Quote\\Api\\Data\\AddressInterface',
							properties: {
								checkout_fields: {
									type: 'array',
									items: {
										type: 'object',
										description: 'Interface for custom attribute value.',
										properties: {
											attribute_code: {
												type: 'string',
												description: 'Attribute code'
											},
											value: {
												type: 'string',
												description: 'Attribute value'
											}
										},
										required: [
											'attribute_code',
											'value'
										]
									}
								}
							}
						},
						custom_attributes: {
							type: 'array',
							description: 'Custom attributes values.',
							items: {
								type: 'object',
								description: 'Interface for custom attribute value.',
								properties: {
									attribute_code: {
										type: 'string',
										description: 'Attribute code'
									},
									value: {
										type: 'string',
										description: 'Attribute value'
									}
								},
								required: [
									'attribute_code',
									'value'
								]
							}
						}
					},
					required: [
						'region',
						'region_id',
						'region_code',
						'country_id',
						'street',
						'telephone',
						'postcode',
						'city',
						'firstname',
						'lastname',
						'email'
					]
				},
				reserved_order_id: {
					type: 'string',
					description: 'Reserved order ID. Otherwise, null.'
				},
				orig_order_id: {
					type: 'integer',
					description: 'Original order ID. Otherwise, null.'
				},
				currency: {
					type: 'object',
					description: 'Interface CurrencyInterface',
					properties: {
						global_currency_code: {
							type: 'string',
							description: 'Global currency code'
						},
						base_currency_code: {
							type: 'string',
							description: 'Base currency code'
						},
						store_currency_code: {
							type: 'string',
							description: 'Store currency code'
						},
						quote_currency_code: {
							type: 'string',
							description: 'Quote currency code'
						},
						store_to_base_rate: {
							type: 'number',
							description: 'Store currency to base currency rate'
						},
						store_to_quote_rate: {
							type: 'number',
							description: 'Store currency to quote currency rate'
						},
						base_to_global_rate: {
							type: 'number',
							description: 'Base currency to global currency rate'
						},
						base_to_quote_rate: {
							type: 'number',
							description: 'Base currency to quote currency rate'
						},
						extension_attributes: {
							type: 'object',
							description: 'ExtensionInterface class for @see ' +
								'\\Magento\\Quote\\Api\\Data\\CurrencyInterface'
						}
					}
				},
				customer_is_guest: {
					type: 'boolean',
					description: 'For guest customers, false for logged in customers'
				},
				customer_note: {
					type: 'string',
					description: 'Notice text'
				},
				customer_note_notify: {
					type: 'boolean',
					description: 'Customer notification flag'
				},
				customer_tax_class_id: {
					type: 'integer',
					description: 'Customer tax class ID.'
				},
				store_id: {
					type: 'integer',
					description: 'Store identifier'
				},
				extension_attributes: {
					type: 'object',
					description: 'ExtensionInterface class for @see ' +
						'\\Magento\\Quote\\Api\\Data\\CartInterface',
					properties: {
						shipping_assignments: {
							type: 'array',
							items: {
								type: 'object',
								description: 'Interface ShippingAssignmentInterface',
								properties: {
									shipping: {
										type: 'object',
										description: 'Interface ShippingInterface',
										properties: {
											address: {
												type: 'object',
												description: 'Interface AddressInterface',
												properties: {
													id: {
														type: 'integer',
														description: 'Id'
													},
													region: {
														type: 'string',
														description: 'Region name'
													},
													region_id: {
														type: 'integer',
														description: 'Region id'
													},
													region_code: {
														type: 'string',
														description: 'Region code'
													},
													country_id: {
														type: 'string',
														description: 'Country id'
													},
													street: {
														type: 'array',
														description: 'Street',
														items: {
															type: 'string'
														}
													},
													company: {
														type: 'string',
														description: 'Company'
													},
													telephone: {
														type: 'string',
														description: 'Telephone number'
													},
													fax: {
														type: 'string',
														description: 'Fax number'
													},
													postcode: {
														type: 'string',
														description: 'Postcode'
													},
													city: {
														type: 'string',
														description: 'City name'
													},
													firstname: {
														type: 'string',
														description: 'First name'
													},
													lastname: {
														type: 'string',
														description: 'Last name'
													},
													middlename: {
														type: 'string',
														description: 'Middle name'
													},
													prefix: {
														type: 'string',
														description: 'Prefix'
													},
													suffix: {
														type: 'string',
														description: 'Suffix'
													},
													vat_id: {
														type: 'string',
														description: 'Vat id'
													},
													customer_id: {
														type: 'integer',
														description: 'Customer id'
													},
													email: {
														type: 'string',
														description: 'Billing/shipping email'
													},
													same_as_billing: {
														type: 'integer',
														description: 'Same as billing flag'
													},
													customer_address_id: {
														type: 'integer',
														description: 'Customer address id'
													},
													save_in_address_book: {
														type: 'integer',
														description: 'Save in address book flag'
													},
													extension_attributes: {
														type: 'object',
														description: 'ExtensionInterface class ' +
															'for @see ' +
															'\\Magento\\Quote\\Api\\Data\\AddressInterface',
														properties: {
															checkout_fields: {
																type: 'array',
																items: {
																	type: 'object',
																	description: 'Interface for ' +
																		'custom attribute ' +
																		'value.',
																	properties: {
																		attribute_code: {
																			type: 'string',
																			description: 'Attribute code'
																		},
																		value: {
																			type: 'string',
																			description: 'Attribute value'
																		}
																	},
																	required: [
																		'attribute_code',
																		'value'
																	]
																}
															}
														}
													},
													custom_attributes: {
														type: 'array',
														description: 'Custom attributes values.',
														items: {
															type: 'object',
															description: 'Interface for ' +
																'custom attribute ' +
																'value.',
															properties: {
																attribute_code: {
																	type: 'string',
																	description: 'Attribute code'
																},
																value: {
																	type: 'string',
																	description: 'Attribute value'
																}
															},
															required: [
																'attribute_code',
																'value'
															]
														}
													}
												},
												required: [
													'region',
													'region_id',
													'region_code',
													'country_id',
													'street',
													'telephone',
													'postcode',
													'city',
													'firstname',
													'lastname',
													'email'
												]
											},
											method: {
												type: 'string',
												description: 'Shipping method'
											},
											extension_attributes: {
												type: 'object',
												description: 'ExtensionInterface class ' +
													'for @see ' +
													'\\Magento\\Quote\\Api\\Data\\ShippingInterface'
											}
										},
										required: [
											'address',
											'method'
										]
									},
									items: {
										type: 'array',
										items: {
											type: 'object',
											description: 'Interface CartItemInterface',
											properties: {
												item_id: {
													type: 'integer',
													description: 'Item ID. Otherwise, null.'
												},
												sku: {
													type: 'string',
													description: 'Product SKU. Otherwise, null.'
												},
												qty: {
													type: 'number',
													description: 'Product quantity.'
												},
												name: {
													type: 'string',
													description: 'Product name. Otherwise, null.'
												},
												price: {
													type: 'number',
													description: 'Product price. Otherwise, null.'
												},
												product_type: {
													type: 'string',
													description: 'Product type. Otherwise, null.'
												},
												quote_id: {
													type: 'string',
													description: 'Quote id.'
												},
												product_option: {
													type: 'object',
													description: 'Product option interface',
													properties: {
														extension_attributes: {
															type: 'object',
															description: 'ExtensionInterface class ' +
																'for @see ' +
																'\\Magento\\Quote\\Api\\Data\\ProductOptionInterface',
															properties: {
																custom_options: {
																	type: 'array',
																	items: {
																		type: 'object',
																		description: 'Interface ' +
																			'CustomOptionInterface',
																		properties: {
																			option_id: {
																				type: 'string',
																				description: 'Option id'
																			},
																			option_value: {
																				type: 'string',
																				description: 'Option value'
																			},
																			extension_attributes: {
																				type: 'object',
																				description: 'ExtensionInterface ' +
																					'class for @see ' +
																					'\\Magento\\Catalog\\Api\\Data\\CustomOptionInterface',
																				properties: {
																					file_info: [Object]
																				}
																			}
																		},
																		required: [
																			'option_id',
																			'option_value'
																		]
																	}
																},
																bundle_options: {
																	type: 'array',
																	items: {
																		type: 'object',
																		description: 'Interface ' +
																			'BundleOptionInterface',
																		properties: {
																			option_id: {
																				type: 'integer',
																				description: 'Bundle option id.'
																			},
																			option_qty: {
																				type: 'integer',
																				description: 'Bundle option ' +
																					'quantity.'
																			},
																			option_selections: {
																				type: 'array',
																				description: 'Bundle option ' +
																					'selection ids.',
																				items: {
																					type: 'integer'
																				}
																			},
																			extension_attributes: {
																				type: 'object',
																				description: 'ExtensionInterface ' +
																					'class for @see ' +
																					'\\Magento\\Bundle\\Api\\Data\\BundleOptionInterface'
																			}
																		},
																		required: [
																			'option_id',
																			'option_qty',
																			'option_selections'
																		]
																	}
																},
																downloadable_option: {
																	type: 'object',
																	description: 'Downloadable Option',
																	properties: {
																		downloadable_links: {
																			type: 'array',
																			description: 'The list of ' +
																				'downloadable ' +
																				'links',
																			items: {
																				type: 'integer'
																			}
																		}
																	},
																	required: [
																		'downloadable_links'
																	]
																},
																configurable_item_options: {
																	type: 'array',
																	items: {
																		type: 'object',
																		description: 'Interface ' +
																			'ConfigurableItemOptionValueInterface',
																		properties: {
																			option_id: {
																				type: 'string',
																				description: 'Option SKU'
																			},
																			option_value: {
																				type: 'integer',
																				description: 'Item id'
																			},
																			extension_attributes: {
																				type: 'object',
																				description: 'ExtensionInterface ' +
																					'class for @see ' +
																					'\\Magento\\ConfigurableProduct\\Api\\Data\\ConfigurableItemOptionValueInterface'
																			}
																		},
																		required: [
																			'option_id'
																		]
																	}
																}
															}
														}
													}
												},
												extension_attributes: {
													type: 'object',
													description: 'ExtensionInterface class ' +
														'for @see ' +
														'\\Magento\\Quote\\Api\\Data\\CartItemInterface'
												}
											},
											required: [
												'qty',
												'quote_id'
											]
										}
									},
									extension_attributes: {
										type: 'object',
										description: 'ExtensionInterface class for ' +
											'@see ' +
											'\\Magento\\Quote\\Api\\Data\\ShippingAssignmentInterface'
									}
								},
								required: [
									'shipping',
									'items'
								]
							}
						},
						amazon_order_reference_id: {
							type: 'string'
						}
					}
				}
			},
			required: [
				'id',
				'customer',
				'store_id'
			]
		},
		'quote-data-cart-item-interface': {
			type: 'object',
			description: 'Interface CartItemInterface',
			properties: {
				item_id: {
					type: 'integer',
					description: 'Item ID. Otherwise, null.'
				},
				sku: {
					type: 'string',
					description: 'Product SKU. Otherwise, null.'
				},
				qty: {
					type: 'number',
					description: 'Product quantity.'
				},
				name: {
					type: 'string',
					description: 'Product name. Otherwise, null.'
				},
				price: {
					type: 'number',
					description: 'Product price. Otherwise, null.'
				},
				product_type: {
					type: 'string',
					description: 'Product type. Otherwise, null.'
				},
				quote_id: {
					type: 'string',
					description: 'Quote id.'
				},
				product_option: {
					type: 'object',
					description: 'Product option interface',
					properties: {
						extension_attributes: {
							type: 'object',
							description: 'ExtensionInterface class for @see ' +
								'\\Magento\\Quote\\Api\\Data\\ProductOptionInterface',
							properties: {
								custom_options: {
									type: 'array',
									items: {
										type: 'object',
										description: 'Interface CustomOptionInterface',
										properties: {
											option_id: {
												type: 'string',
												description: 'Option id'
											},
											option_value: {
												type: 'string',
												description: 'Option value'
											},
											extension_attributes: {
												type: 'object',
												description: 'ExtensionInterface class ' +
													'for @see ' +
													'\\Magento\\Catalog\\Api\\Data\\CustomOptionInterface',
												properties: {
													file_info: {
														type: 'object',
														description: 'Image Content data interface',
														properties: {
															base64_encoded_data: {
																type: 'string',
																description: 'Media data (base64 ' +
																	'encoded content)'
															},
															type: {
																type: 'string',
																description: 'MIME type'
															},
															name: {
																type: 'string',
																description: 'Image name'
															}
														},
														required: [
															'base64_encoded_data',
															'type',
															'name'
														]
													}
												}
											}
										},
										required: [
											'option_id',
											'option_value'
										]
									}
								},
								bundle_options: {
									type: 'array',
									items: {
										type: 'object',
										description: 'Interface BundleOptionInterface',
										properties: {
											option_id: {
												type: 'integer',
												description: 'Bundle option id.'
											},
											option_qty: {
												type: 'integer',
												description: 'Bundle option quantity.'
											},
											option_selections: {
												type: 'array',
												description: 'Bundle option selection ids.',
												items: {
													type: 'integer'
												}
											},
											extension_attributes: {
												type: 'object',
												description: 'ExtensionInterface class ' +
													'for @see ' +
													'\\Magento\\Bundle\\Api\\Data\\BundleOptionInterface'
											}
										},
										required: [
											'option_id',
											'option_qty',
											'option_selections'
										]
									}
								},
								downloadable_option: {
									type: 'object',
									description: 'Downloadable Option',
									properties: {
										downloadable_links: {
											type: 'array',
											description: 'The list of downloadable links',
											items: {
												type: 'integer'
											}
										}
									},
									required: [
										'downloadable_links'
									]
								},
								configurable_item_options: {
									type: 'array',
									items: {
										type: 'object',
										description: 'Interface ' +
											'ConfigurableItemOptionValueInterface',
										properties: {
											option_id: {
												type: 'string',
												description: 'Option SKU'
											},
											option_value: {
												type: 'integer',
												description: 'Item id'
											},
											extension_attributes: {
												type: 'object',
												description: 'ExtensionInterface class for @see ' +
													'\\Magento\\ConfigurableProduct\\Api\\Data\\ConfigurableItemOptionValueInterface'
											}
										},
										required: [
											'option_id'
										]
									}
								}
							}
						}
					}
				},
				extension_attributes: {
					type: 'object',
					description: 'ExtensionInterface class for @see ' +
						'\\Magento\\Quote\\Api\\Data\\CartItemInterface'
				}
			},
			required: [
				'qty',
				'quote_id'
			]
		},
		'quote-data-product-option-interface': {
			type: 'object',
			description: 'Product option interface',
			properties: {
				extension_attributes: {
					type: 'object',
					description: 'ExtensionInterface class for @see ' +
						'\\Magento\\Quote\\Api\\Data\\ProductOptionInterface',
					properties: {
						custom_options: {
							type: 'array',
							items: {
								type: 'object',
								description: 'Interface CustomOptionInterface',
								properties: {
									option_id: {
										type: 'string',
										description: 'Option id'
									},
									option_value: {
										type: 'string',
										description: 'Option value'
									},
									extension_attributes: {
										type: 'object',
										description: 'ExtensionInterface class ' +
											'for @see ' +
											'\\Magento\\Catalog\\Api\\Data\\CustomOptionInterface',
										properties: {
											file_info: {
												type: 'object',
												description: 'Image Content data interface',
												properties: {
													base64_encoded_data: {
														type: 'string',
														description: 'Media data (base64 ' +
															'encoded content)'
													},
													type: {
														type: 'string',
														description: 'MIME type'
													},
													name: {
														type: 'string',
														description: 'Image name'
													}
												},
												required: [
													'base64_encoded_data',
													'type',
													'name'
												]
											}
										}
									}
								},
								required: [
									'option_id',
									'option_value'
								]
							}
						},
						bundle_options: {
							type: 'array',
							items: {
								type: 'object',
								description: 'Interface BundleOptionInterface',
								properties: {
									option_id: {
										type: 'integer',
										description: 'Bundle option id.'
									},
									option_qty: {
										type: 'integer',
										description: 'Bundle option quantity.'
									},
									option_selections: {
										type: 'array',
										description: 'Bundle option selection ids.',
										items: {
											type: 'integer'
										}
									},
									extension_attributes: {
										type: 'object',
										description: 'ExtensionInterface class for @see ' +
											'\\Magento\\Bundle\\Api\\Data\\BundleOptionInterface'
									}
								},
								required: [
									'option_id',
									'option_qty',
									'option_selections'
								]
							}
						},
						downloadable_option: {
							type: 'object',
							description: 'Downloadable Option',
							properties: {
								downloadable_links: {
									type: 'array',
									description: 'The list of downloadable links',
									items: {
										type: 'integer'
									}
								}
							},
							required: [
								'downloadable_links'
							]
						},
						configurable_item_options: {
							type: 'array',
							items: {
								type: 'object',
								description: 'Interface ' +
									'ConfigurableItemOptionValueInterface',
								properties: {
									option_id: {
										type: 'string',
										description: 'Option SKU'
									},
									option_value: {
										type: 'integer',
										description: 'Item id'
									},
									extension_attributes: {
										type: 'object',
										description: 'ExtensionInterface class for @see ' +
											'\\Magento\\ConfigurableProduct\\Api\\Data\\ConfigurableItemOptionValueInterface'
									}
								},
								required: [
									'option_id'
								]
							}
						}
					}
				}
			}
		},
		'quote-data-product-option-extension-interface': {
			type: 'object',
			description: 'ExtensionInterface class for @see ' +
				'\\Magento\\Quote\\Api\\Data\\ProductOptionInterface',
			properties: {
				custom_options: {
					type: 'array',
					items: {
						type: 'object',
						description: 'Interface CustomOptionInterface',
						properties: {
							option_id: {
								type: 'string',
								description: 'Option id'
							},
							option_value: {
								type: 'string',
								description: 'Option value'
							},
							extension_attributes: {
								type: 'object',
								description: 'ExtensionInterface class for @see ' +
									'\\Magento\\Catalog\\Api\\Data\\CustomOptionInterface',
								properties: {
									file_info: {
										type: 'object',
										description: 'Image Content data interface',
										properties: {
											base64_encoded_data: {
												type: 'string',
												description: 'Media data (base64 encoded content)'
											},
											type: {
												type: 'string',
												description: 'MIME type'
											},
											name: {
												type: 'string',
												description: 'Image name'
											}
										},
										required: [
											'base64_encoded_data',
											'type',
											'name'
										]
									}
								}
							}
						},
						required: [
							'option_id',
							'option_value'
						]
					}
				},
				bundle_options: {
					type: 'array',
					items: {
						type: 'object',
						description: 'Interface BundleOptionInterface',
						properties: {
							option_id: {
								type: 'integer',
								description: 'Bundle option id.'
							},
							option_qty: {
								type: 'integer',
								description: 'Bundle option quantity.'
							},
							option_selections: {
								type: 'array',
								description: 'Bundle option selection ids.',
								items: {
									type: 'integer'
								}
							},
							extension_attributes: {
								type: 'object',
								description: 'ExtensionInterface class for @see ' +
									'\\Magento\\Bundle\\Api\\Data\\BundleOptionInterface'
							}
						},
						required: [
							'option_id',
							'option_qty',
							'option_selections'
						]
					}
				},
				downloadable_option: {
					type: 'object',
					description: 'Downloadable Option',
					properties: {
						downloadable_links: {
							type: 'array',
							description: 'The list of downloadable links',
							items: {
								type: 'integer'
							}
						}
					},
					required: [
						'downloadable_links'
					]
				},
				configurable_item_options: {
					type: 'array',
					items: {
						type: 'object',
						description: 'Interface ConfigurableItemOptionValueInterface',
						properties: {
							option_id: {
								type: 'string',
								description: 'Option SKU'
							},
							option_value: {
								type: 'integer',
								description: 'Item id'
							},
							extension_attributes: {
								type: 'object',
								description: 'ExtensionInterface class for @see ' +
									'\\Magento\\ConfigurableProduct\\Api\\Data\\ConfigurableItemOptionValueInterface'
							}
						},
						required: [
							'option_id'
						]
					}
				}
			}
		},
		'catalog-data-custom-option-interface': {
			type: 'object',
			description: 'Interface CustomOptionInterface',
			properties: {
				option_id: {
					type: 'string',
					description: 'Option id'
				},
				option_value: {
					type: 'string',
					description: 'Option value'
				},
				extension_attributes: {
					type: 'object',
					description: 'ExtensionInterface class for @see ' +
						'\\Magento\\Catalog\\Api\\Data\\CustomOptionInterface',
					properties: {
						file_info: {
							type: 'object',
							description: 'Image Content data interface',
							properties: {
								base64_encoded_data: {
									type: 'string',
									description: 'Media data (base64 encoded content)'
								},
								type: {
									type: 'string',
									description: 'MIME type'
								},
								name: {
									type: 'string',
									description: 'Image name'
								}
							},
							required: [
								'base64_encoded_data',
								'type',
								'name'
							]
						}
					}
				}
			},
			required: [
				'option_id',
				'option_value'
			]
		},
		'catalog-data-custom-option-extension-interface': {
			type: 'object',
			description: 'ExtensionInterface class for @see ' +
				'\\Magento\\Catalog\\Api\\Data\\CustomOptionInterface',
			properties: {
				file_info: {
					type: 'object',
					description: 'Image Content data interface',
					properties: {
						base64_encoded_data: {
							type: 'string',
							description: 'Media data (base64 encoded content)'
						},
						type: {
							type: 'string',
							description: 'MIME type'
						},
						name: {
							type: 'string',
							description: 'Image name'
						}
					},
					required: [
						'base64_encoded_data',
						'type',
						'name'
					]
				}
			}
		},
		'framework-data-image-content-interface': {
			type: 'object',
			description: 'Image Content data interface',
			properties: {
				base64_encoded_data: {
					type: 'string',
					description: 'Media data (base64 encoded content)'
				},
				type: {
					type: 'string',
					description: 'MIME type'
				},
				name: {
					type: 'string',
					description: 'Image name'
				}
			},
			required: [
				'base64_encoded_data',
				'type',
				'name'
			]
		},
		'bundle-data-bundle-option-interface': {
			type: 'object',
			description: 'Interface BundleOptionInterface',
			properties: {
				option_id: {
					type: 'integer',
					description: 'Bundle option id.'
				},
				option_qty: {
					type: 'integer',
					description: 'Bundle option quantity.'
				},
				option_selections: {
					type: 'array',
					description: 'Bundle option selection ids.',
					items: {
						type: 'integer'
					}
				},
				extension_attributes: {
					type: 'object',
					description: 'ExtensionInterface class for @see ' +
						'\\Magento\\Bundle\\Api\\Data\\BundleOptionInterface'
				}
			},
			required: [
				'option_id',
				'option_qty',
				'option_selections'
			]
		},
		'bundle-data-bundle-option-extension-interface': {
			type: 'object',
			description: 'ExtensionInterface class for @see ' +
				'\\Magento\\Bundle\\Api\\Data\\BundleOptionInterface'
		},
		'downloadable-data-downloadable-option-interface': {
			type: 'object',
			description: 'Downloadable Option',
			properties: {
				downloadable_links: {
					type: 'array',
					description: 'The list of downloadable links',
					items: {
						type: 'integer'
					}
				}
			},
			required: [
				'downloadable_links'
			]
		},
		'configurable-product-data-configurable-item-option-value-interface': {
			type: 'object',
			description: 'Interface ConfigurableItemOptionValueInterface',
			properties: {
				option_id: {
					type: 'string',
					description: 'Option SKU'
				},
				option_value: {
					type: 'integer',
					description: 'Item id'
				},
				extension_attributes: {
					type: 'object',
					description: 'ExtensionInterface class for @see ' +
						'\\Magento\\ConfigurableProduct\\Api\\Data\\ConfigurableItemOptionValueInterface'
				}
			},
			required: [
				'option_id'
			]
		},
		'configurable-product-data-configurable-item-option-value-extension-interface': {
			type: 'object',
			description: 'ExtensionInterface class for @see ' +
				'\\Magento\\ConfigurableProduct\\Api\\Data\\ConfigurableItemOptionValueInterface'
		},
		'quote-data-cart-item-extension-interface': {
			type: 'object',
			description: 'ExtensionInterface class for @see ' +
				'\\Magento\\Quote\\Api\\Data\\CartItemInterface'
		},
		'quote-data-address-interface': {
			type: 'object',
			description: 'Interface AddressInterface',
			properties: {
				id: {
					type: 'integer',
					description: 'Id'
				},
				region: {
					type: 'string',
					description: 'Region name'
				},
				region_id: {
					type: 'integer',
					description: 'Region id'
				},
				region_code: {
					type: 'string',
					description: 'Region code'
				},
				country_id: {
					type: 'string',
					description: 'Country id'
				},
				street: {
					type: 'array',
					description: 'Street',
					items: {
						type: 'string'
					}
				},
				company: {
					type: 'string',
					description: 'Company'
				},
				telephone: {
					type: 'string',
					description: 'Telephone number'
				},
				fax: {
					type: 'string',
					description: 'Fax number'
				},
				postcode: {
					type: 'string',
					description: 'Postcode'
				},
				city: {
					type: 'string',
					description: 'City name'
				},
				firstname: {
					type: 'string',
					description: 'First name'
				},
				lastname: {
					type: 'string',
					description: 'Last name'
				},
				middlename: {
					type: 'string',
					description: 'Middle name'
				},
				prefix: {
					type: 'string',
					description: 'Prefix'
				},
				suffix: {
					type: 'string',
					description: 'Suffix'
				},
				vat_id: {
					type: 'string',
					description: 'Vat id'
				},
				customer_id: {
					type: 'integer',
					description: 'Customer id'
				},
				email: {
					type: 'string',
					description: 'Billing/shipping email'
				},
				same_as_billing: {
					type: 'integer',
					description: 'Same as billing flag'
				},
				customer_address_id: {
					type: 'integer',
					description: 'Customer address id'
				},
				save_in_address_book: {
					type: 'integer',
					description: 'Save in address book flag'
				},
				extension_attributes: {
					type: 'object',
					description: 'ExtensionInterface class for @see ' +
						'\\Magento\\Quote\\Api\\Data\\AddressInterface',
					properties: {
						checkout_fields: {
							type: 'array',
							items: {
								type: 'object',
								description: 'Interface for custom attribute value.',
								properties: {
									attribute_code: {
										type: 'string',
										description: 'Attribute code'
									},
									value: {
										type: 'string',
										description: 'Attribute value'
									}
								},
								required: [
									'attribute_code',
									'value'
								]
							}
						}
					}
				},
				custom_attributes: {
					type: 'array',
					description: 'Custom attributes values.',
					items: {
						type: 'object',
						description: 'Interface for custom attribute value.',
						properties: {
							attribute_code: {
								type: 'string',
								description: 'Attribute code'
							},
							value: {
								type: 'string',
								description: 'Attribute value'
							}
						},
						required: [
							'attribute_code',
							'value'
						]
					}
				}
			},
			required: [
				'region',
				'region_id',
				'region_code',
				'country_id',
				'street',
				'telephone',
				'postcode',
				'city',
				'firstname',
				'lastname',
				'email'
			]
		},
		'quote-data-address-extension-interface': {
			type: 'object',
			description: 'ExtensionInterface class for @see ' +
				'\\Magento\\Quote\\Api\\Data\\AddressInterface',
			properties: {
				checkout_fields: {
					type: 'array',
					items: {
						type: 'object',
						description: 'Interface for custom attribute value.',
						properties: {
							attribute_code: {
								type: 'string',
								description: 'Attribute code'
							},
							value: {
								type: 'string',
								description: 'Attribute value'
							}
						},
						required: [
							'attribute_code',
							'value'
						]
					}
				}
			}
		},
		'quote-data-currency-interface': {
			type: 'object',
			description: 'Interface CurrencyInterface',
			properties: {
				global_currency_code: {
					type: 'string',
					description: 'Global currency code'
				},
				base_currency_code: {
					type: 'string',
					description: 'Base currency code'
				},
				store_currency_code: {
					type: 'string',
					description: 'Store currency code'
				},
				quote_currency_code: {
					type: 'string',
					description: 'Quote currency code'
				},
				store_to_base_rate: {
					type: 'number',
					description: 'Store currency to base currency rate'
				},
				store_to_quote_rate: {
					type: 'number',
					description: 'Store currency to quote currency rate'
				},
				base_to_global_rate: {
					type: 'number',
					description: 'Base currency to global currency rate'
				},
				base_to_quote_rate: {
					type: 'number',
					description: 'Base currency to quote currency rate'
				},
				extension_attributes: {
					type: 'object',
					description: 'ExtensionInterface class for @see ' +
						'\\Magento\\Quote\\Api\\Data\\CurrencyInterface'
				}
			}
		},
		'quote-data-currency-extension-interface': {
			type: 'object',
			description: 'ExtensionInterface class for @see ' +
				'\\Magento\\Quote\\Api\\Data\\CurrencyInterface'
		},
		'quote-data-cart-extension-interface': {
			type: 'object',
			description: 'ExtensionInterface class for @see ' +
				'\\Magento\\Quote\\Api\\Data\\CartInterface',
			properties: {
				shipping_assignments: {
					type: 'array',
					items: {
						type: 'object',
						description: 'Interface ShippingAssignmentInterface',
						properties: {
							shipping: {
								type: 'object',
								description: 'Interface ShippingInterface',
								properties: {
									address: {
										type: 'object',
										description: 'Interface AddressInterface',
										properties: {
											id: {
												type: 'integer',
												description: 'Id'
											},
											region: {
												type: 'string',
												description: 'Region name'
											},
											region_id: {
												type: 'integer',
												description: 'Region id'
											},
											region_code: {
												type: 'string',
												description: 'Region code'
											},
											country_id: {
												type: 'string',
												description: 'Country id'
											},
											street: {
												type: 'array',
												description: 'Street',
												items: {
													type: 'string'
												}
											},
											company: {
												type: 'string',
												description: 'Company'
											},
											telephone: {
												type: 'string',
												description: 'Telephone number'
											},
											fax: {
												type: 'string',
												description: 'Fax number'
											},
											postcode: {
												type: 'string',
												description: 'Postcode'
											},
											city: {
												type: 'string',
												description: 'City name'
											},
											firstname: {
												type: 'string',
												description: 'First name'
											},
											lastname: {
												type: 'string',
												description: 'Last name'
											},
											middlename: {
												type: 'string',
												description: 'Middle name'
											},
											prefix: {
												type: 'string',
												description: 'Prefix'
											},
											suffix: {
												type: 'string',
												description: 'Suffix'
											},
											vat_id: {
												type: 'string',
												description: 'Vat id'
											},
											customer_id: {
												type: 'integer',
												description: 'Customer id'
											},
											email: {
												type: 'string',
												description: 'Billing/shipping email'
											},
											same_as_billing: {
												type: 'integer',
												description: 'Same as billing flag'
											},
											customer_address_id: {
												type: 'integer',
												description: 'Customer address id'
											},
											save_in_address_book: {
												type: 'integer',
												description: 'Save in address book flag'
											},
											extension_attributes: {
												type: 'object',
												description: 'ExtensionInterface class ' +
													'for @see ' +
													'\\Magento\\Quote\\Api\\Data\\AddressInterface',
												properties: {
													checkout_fields: {
														type: 'array',
														items: {
															type: 'object',
															description: 'Interface for ' +
																'custom attribute ' +
																'value.',
															properties: {
																attribute_code: {
																	type: 'string',
																	description: 'Attribute code'
																},
																value: {
																	type: 'string',
																	description: 'Attribute value'
																}
															},
															required: [
																'attribute_code',
																'value'
															]
														}
													}
												}
											},
											custom_attributes: {
												type: 'array',
												description: 'Custom attributes values.',
												items: {
													type: 'object',
													description: 'Interface for ' +
														'custom attribute ' +
														'value.',
													properties: {
														attribute_code: {
															type: 'string',
															description: 'Attribute code'
														},
														value: {
															type: 'string',
															description: 'Attribute value'
														}
													},
													required: [
														'attribute_code',
														'value'
													]
												}
											}
										},
										required: [
											'region',
											'region_id',
											'region_code',
											'country_id',
											'street',
											'telephone',
											'postcode',
											'city',
											'firstname',
											'lastname',
											'email'
										]
									},
									method: {
										type: 'string',
										description: 'Shipping method'
									},
									extension_attributes: {
										type: 'object',
										description: 'ExtensionInterface class for @see ' +
											'\\Magento\\Quote\\Api\\Data\\ShippingInterface'
									}
								},
								required: [
									'address',
									'method'
								]
							},
							items: {
								type: 'array',
								items: {
									type: 'object',
									description: 'Interface CartItemInterface',
									properties: {
										item_id: {
											type: 'integer',
											description: 'Item ID. Otherwise, null.'
										},
										sku: {
											type: 'string',
											description: 'Product SKU. Otherwise, null.'
										},
										qty: {
											type: 'number',
											description: 'Product quantity.'
										},
										name: {
											type: 'string',
											description: 'Product name. Otherwise, null.'
										},
										price: {
											type: 'number',
											description: 'Product price. Otherwise, null.'
										},
										product_type: {
											type: 'string',
											description: 'Product type. Otherwise, null.'
										},
										quote_id: {
											type: 'string',
											description: 'Quote id.'
										},
										product_option: {
											type: 'object',
											description: 'Product option interface',
											properties: {
												extension_attributes: {
													type: 'object',
													description: 'ExtensionInterface class ' +
														'for @see ' +
														'\\Magento\\Quote\\Api\\Data\\ProductOptionInterface',
													properties: {
														custom_options: {
															type: 'array',
															items: {
																type: 'object',
																description: 'Interface ' +
																	'CustomOptionInterface',
																properties: {
																	option_id: {
																		type: 'string',
																		description: 'Option id'
																	},
																	option_value: {
																		type: 'string',
																		description: 'Option value'
																	},
																	extension_attributes: {
																		type: 'object',
																		description: 'ExtensionInterface ' +
																			'class for @see ' +
																			'\\Magento\\Catalog\\Api\\Data\\CustomOptionInterface',
																		properties: {
																			file_info: {
																				type: 'object',
																				description: 'Image Content ' +
																					'data interface',
																				properties: {
																					base64_encoded_data: [Object],
																					type: [Object],
																					name: [Object]
																				},
																				required: [
																					'base64_encoded_data',
																					'type',
																					'name'
																				]
																			}
																		}
																	}
																},
																required: [
																	'option_id',
																	'option_value'
																]
															}
														},
														bundle_options: {
															type: 'array',
															items: {
																type: 'object',
																description: 'Interface ' +
																	'BundleOptionInterface',
																properties: {
																	option_id: {
																		type: 'integer',
																		description: 'Bundle option id.'
																	},
																	option_qty: {
																		type: 'integer',
																		description: 'Bundle option quantity.'
																	},
																	option_selections: {
																		type: 'array',
																		description: 'Bundle option ' +
																			'selection ids.',
																		items: {
																			type: 'integer'
																		}
																	},
																	extension_attributes: {
																		type: 'object',
																		description: 'ExtensionInterface ' +
																			'class for @see ' +
																			'\\Magento\\Bundle\\Api\\Data\\BundleOptionInterface'
																	}
																},
																required: [
																	'option_id',
																	'option_qty',
																	'option_selections'
																]
															}
														},
														downloadable_option: {
															type: 'object',
															description: 'Downloadable Option',
															properties: {
																downloadable_links: {
																	type: 'array',
																	description: 'The list of ' +
																		'downloadable ' +
																		'links',
																	items: {
																		type: 'integer'
																	}
																}
															},
															required: [
																'downloadable_links'
															]
														},
														configurable_item_options: {
															type: 'array',
															items: {
																type: 'object',
																description: 'Interface ' +
																	'ConfigurableItemOptionValueInterface',
																properties: {
																	option_id: {
																		type: 'string',
																		description: 'Option SKU'
																	},
																	option_value: {
																		type: 'integer',
																		description: 'Item id'
																	},
																	extension_attributes: {
																		type: 'object',
																		description: 'ExtensionInterface ' +
																			'class for @see ' +
																			'\\Magento\\ConfigurableProduct\\Api\\Data\\ConfigurableItemOptionValueInterface'
																	}
																},
																required: [
																	'option_id'
																]
															}
														}
													}
												}
											}
										},
										extension_attributes: {
											type: 'object',
											description: 'ExtensionInterface class for @see ' +
												'\\Magento\\Quote\\Api\\Data\\CartItemInterface'
										}
									},
									required: [
										'qty',
										'quote_id'
									]
								}
							},
							extension_attributes: {
								type: 'object',
								description: 'ExtensionInterface class for @see ' +
									'\\Magento\\Quote\\Api\\Data\\ShippingAssignmentInterface'
							}
						},
						required: [
							'shipping',
							'items'
						]
					}
				},
				amazon_order_reference_id: {
					type: 'string'
				}
			}
		},
		'quote-data-shipping-assignment-interface': {
			type: 'object',
			description: 'Interface ShippingAssignmentInterface',
			properties: {
				shipping: {
					type: 'object',
					description: 'Interface ShippingInterface',
					properties: {
						address: {
							type: 'object',
							description: 'Interface AddressInterface',
							properties: {
								id: {
									type: 'integer',
									description: 'Id'
								},
								region: {
									type: 'string',
									description: 'Region name'
								},
								region_id: {
									type: 'integer',
									description: 'Region id'
								},
								region_code: {
									type: 'string',
									description: 'Region code'
								},
								country_id: {
									type: 'string',
									description: 'Country id'
								},
								street: {
									type: 'array',
									description: 'Street',
									items: {
										type: 'string'
									}
								},
								company: {
									type: 'string',
									description: 'Company'
								},
								telephone: {
									type: 'string',
									description: 'Telephone number'
								},
								fax: {
									type: 'string',
									description: 'Fax number'
								},
								postcode: {
									type: 'string',
									description: 'Postcode'
								},
								city: {
									type: 'string',
									description: 'City name'
								},
								firstname: {
									type: 'string',
									description: 'First name'
								},
								lastname: {
									type: 'string',
									description: 'Last name'
								},
								middlename: {
									type: 'string',
									description: 'Middle name'
								},
								prefix: {
									type: 'string',
									description: 'Prefix'
								},
								suffix: {
									type: 'string',
									description: 'Suffix'
								},
								vat_id: {
									type: 'string',
									description: 'Vat id'
								},
								customer_id: {
									type: 'integer',
									description: 'Customer id'
								},
								email: {
									type: 'string',
									description: 'Billing/shipping email'
								},
								same_as_billing: {
									type: 'integer',
									description: 'Same as billing flag'
								},
								customer_address_id: {
									type: 'integer',
									description: 'Customer address id'
								},
								save_in_address_book: {
									type: 'integer',
									description: 'Save in address book flag'
								},
								extension_attributes: {
									type: 'object',
									description: 'ExtensionInterface class for @see ' +
										'\\Magento\\Quote\\Api\\Data\\AddressInterface',
									properties: {
										checkout_fields: {
											type: 'array',
											items: {
												type: 'object',
												description: 'Interface for ' +
													'custom attribute ' +
													'value.',
												properties: {
													attribute_code: {
														type: 'string',
														description: 'Attribute code'
													},
													value: {
														type: 'string',
														description: 'Attribute value'
													}
												},
												required: [
													'attribute_code',
													'value'
												]
											}
										}
									}
								},
								custom_attributes: {
									type: 'array',
									description: 'Custom attributes values.',
									items: {
										type: 'object',
										description: 'Interface for custom attribute value.',
										properties: {
											attribute_code: {
												type: 'string',
												description: 'Attribute code'
											},
											value: {
												type: 'string',
												description: 'Attribute value'
											}
										},
										required: [
											'attribute_code',
											'value'
										]
									}
								}
							},
							required: [
								'region',
								'region_id',
								'region_code',
								'country_id',
								'street',
								'telephone',
								'postcode',
								'city',
								'firstname',
								'lastname',
								'email'
							]
						},
						method: {
							type: 'string',
							description: 'Shipping method'
						},
						extension_attributes: {
							type: 'object',
							description: 'ExtensionInterface class for @see ' +
								'\\Magento\\Quote\\Api\\Data\\ShippingInterface'
						}
					},
					required: [
						'address',
						'method'
					]
				},
				items: {
					type: 'array',
					items: {
						type: 'object',
						description: 'Interface CartItemInterface',
						properties: {
							item_id: {
								type: 'integer',
								description: 'Item ID. Otherwise, null.'
							},
							sku: {
								type: 'string',
								description: 'Product SKU. Otherwise, null.'
							},
							qty: {
								type: 'number',
								description: 'Product quantity.'
							},
							name: {
								type: 'string',
								description: 'Product name. Otherwise, null.'
							},
							price: {
								type: 'number',
								description: 'Product price. Otherwise, null.'
							},
							product_type: {
								type: 'string',
								description: 'Product type. Otherwise, null.'
							},
							quote_id: {
								type: 'string',
								description: 'Quote id.'
							},
							product_option: {
								type: 'object',
								description: 'Product option interface',
								properties: {
									extension_attributes: {
										type: 'object',
										description: 'ExtensionInterface class for @see ' +
											'\\Magento\\Quote\\Api\\Data\\ProductOptionInterface',
										properties: {
											custom_options: {
												type: 'array',
												items: {
													type: 'object',
													description: 'Interface CustomOptionInterface',
													properties: {
														option_id: {
															type: 'string',
															description: 'Option id'
														},
														option_value: {
															type: 'string',
															description: 'Option value'
														},
														extension_attributes: {
															type: 'object',
															description: 'ExtensionInterface class ' +
																'for @see ' +
																'\\Magento\\Catalog\\Api\\Data\\CustomOptionInterface',
															properties: {
																file_info: {
																	type: 'object',
																	description: 'Image Content ' +
																		'data interface',
																	properties: {
																		base64_encoded_data: {
																			type: 'string',
																			description: 'Media data (base64 ' +
																				'encoded content)'
																		},
																		type: {
																			type: 'string',
																			description: 'MIME type'
																		},
																		name: {
																			type: 'string',
																			description: 'Image name'
																		}
																	},
																	required: [
																		'base64_encoded_data',
																		'type',
																		'name'
																	]
																}
															}
														}
													},
													required: [
														'option_id',
														'option_value'
													]
												}
											},
											bundle_options: {
												type: 'array',
												items: {
													type: 'object',
													description: 'Interface BundleOptionInterface',
													properties: {
														option_id: {
															type: 'integer',
															description: 'Bundle option id.'
														},
														option_qty: {
															type: 'integer',
															description: 'Bundle option quantity.'
														},
														option_selections: {
															type: 'array',
															description: 'Bundle option selection ids.',
															items: {
																type: 'integer'
															}
														},
														extension_attributes: {
															type: 'object',
															description: 'ExtensionInterface class ' +
																'for @see ' +
																'\\Magento\\Bundle\\Api\\Data\\BundleOptionInterface'
														}
													},
													required: [
														'option_id',
														'option_qty',
														'option_selections'
													]
												}
											},
											downloadable_option: {
												type: 'object',
												description: 'Downloadable Option',
												properties: {
													downloadable_links: {
														type: 'array',
														description: 'The list of downloadable links',
														items: {
															type: 'integer'
														}
													}
												},
												required: [
													'downloadable_links'
												]
											},
											configurable_item_options: {
												type: 'array',
												items: {
													type: 'object',
													description: 'Interface ' +
														'ConfigurableItemOptionValueInterface',
													properties: {
														option_id: {
															type: 'string',
															description: 'Option SKU'
														},
														option_value: {
															type: 'integer',
															description: 'Item id'
														},
														extension_attributes: {
															type: 'object',
															description: 'ExtensionInterface class ' +
																'for @see ' +
																'\\Magento\\ConfigurableProduct\\Api\\Data\\ConfigurableItemOptionValueInterface'
														}
													},
													required: [
														'option_id'
													]
												}
											}
										}
									}
								}
							},
							extension_attributes: {
								type: 'object',
								description: 'ExtensionInterface class for @see ' +
									'\\Magento\\Quote\\Api\\Data\\CartItemInterface'
							}
						},
						required: [
							'qty',
							'quote_id'
						]
					}
				},
				extension_attributes: {
					type: 'object',
					description: 'ExtensionInterface class for @see ' +
						'\\Magento\\Quote\\Api\\Data\\ShippingAssignmentInterface'
				}
			},
			required: [
				'shipping',
				'items'
			]
		},
		'quote-data-shipping-interface': {
			type: 'object',
			description: 'Interface ShippingInterface',
			properties: {
				address: {
					type: 'object',
					description: 'Interface AddressInterface',
					properties: {
						id: {
							type: 'integer',
							description: 'Id'
						},
						region: {
							type: 'string',
							description: 'Region name'
						},
						region_id: {
							type: 'integer',
							description: 'Region id'
						},
						region_code: {
							type: 'string',
							description: 'Region code'
						},
						country_id: {
							type: 'string',
							description: 'Country id'
						},
						street: {
							type: 'array',
							description: 'Street',
							items: {
								type: 'string'
							}
						},
						company: {
							type: 'string',
							description: 'Company'
						},
						telephone: {
							type: 'string',
							description: 'Telephone number'
						},
						fax: {
							type: 'string',
							description: 'Fax number'
						},
						postcode: {
							type: 'string',
							description: 'Postcode'
						},
						city: {
							type: 'string',
							description: 'City name'
						},
						firstname: {
							type: 'string',
							description: 'First name'
						},
						lastname: {
							type: 'string',
							description: 'Last name'
						},
						middlename: {
							type: 'string',
							description: 'Middle name'
						},
						prefix: {
							type: 'string',
							description: 'Prefix'
						},
						suffix: {
							type: 'string',
							description: 'Suffix'
						},
						vat_id: {
							type: 'string',
							description: 'Vat id'
						},
						customer_id: {
							type: 'integer',
							description: 'Customer id'
						},
						email: {
							type: 'string',
							description: 'Billing/shipping email'
						},
						same_as_billing: {
							type: 'integer',
							description: 'Same as billing flag'
						},
						customer_address_id: {
							type: 'integer',
							description: 'Customer address id'
						},
						save_in_address_book: {
							type: 'integer',
							description: 'Save in address book flag'
						},
						extension_attributes: {
							type: 'object',
							description: 'ExtensionInterface class for @see ' +
								'\\Magento\\Quote\\Api\\Data\\AddressInterface',
							properties: {
								checkout_fields: {
									type: 'array',
									items: {
										type: 'object',
										description: 'Interface for custom attribute value.',
										properties: {
											attribute_code: {
												type: 'string',
												description: 'Attribute code'
											},
											value: {
												type: 'string',
												description: 'Attribute value'
											}
										},
										required: [
											'attribute_code',
											'value'
										]
									}
								}
							}
						},
						custom_attributes: {
							type: 'array',
							description: 'Custom attributes values.',
							items: {
								type: 'object',
								description: 'Interface for custom attribute value.',
								properties: {
									attribute_code: {
										type: 'string',
										description: 'Attribute code'
									},
									value: {
										type: 'string',
										description: 'Attribute value'
									}
								},
								required: [
									'attribute_code',
									'value'
								]
							}
						}
					},
					required: [
						'region',
						'region_id',
						'region_code',
						'country_id',
						'street',
						'telephone',
						'postcode',
						'city',
						'firstname',
						'lastname',
						'email'
					]
				},
				method: {
					type: 'string',
					description: 'Shipping method'
				},
				extension_attributes: {
					type: 'object',
					description: 'ExtensionInterface class for @see ' +
						'\\Magento\\Quote\\Api\\Data\\ShippingInterface'
				}
			},
			required: [
				'address',
				'method'
			]
		},
		'quote-data-shipping-extension-interface': {
			type: 'object',
			description: 'ExtensionInterface class for @see ' +
				'\\Magento\\Quote\\Api\\Data\\ShippingInterface'
		},
		'quote-data-shipping-assignment-extension-interface': {
			type: 'object',
			description: 'ExtensionInterface class for @see ' +
				'\\Magento\\Quote\\Api\\Data\\ShippingAssignmentInterface'
		},
		'quote-data-payment-interface': {
			type: 'object',
			description: 'Interface PaymentInterface',
			properties: {
				po_number: {
					type: 'string',
					description: 'Purchase order number'
				},
				method: {
					type: 'string',
					description: 'Payment method code'
				},
				additional_data: {
					type: 'array',
					description: 'Payment additional details',
					items: {
						type: 'string'
					}
				},
				extension_attributes: {
					type: 'object',
					description: 'ExtensionInterface class for @see ' +
						'\\Magento\\Quote\\Api\\Data\\PaymentInterface',
					properties: {
						agreement_ids: {
							type: 'array',
							items: {
								type: 'string'
							}
						}
					}
				}
			},
			required: [
				'method'
			]
		},
		'quote-data-payment-extension-interface': {
			type: 'object',
			description: 'ExtensionInterface class for @see ' +
				'\\Magento\\Quote\\Api\\Data\\PaymentInterface',
			properties: {
				agreement_ids: {
					type: 'array',
					items: {
						type: 'string'
					}
				}
			}
		},
		'quote-data-shipping-method-interface': {
			type: 'object',
			description: 'Interface ShippingMethodInterface',
			properties: {
				carrier_code: {
					type: 'string',
					description: 'Shipping carrier code.'
				},
				method_code: {
					type: 'string',
					description: 'Shipping method code.'
				},
				carrier_title: {
					type: 'string',
					description: 'Shipping carrier title. Otherwise, null.'
				},
				method_title: {
					type: 'string',
					description: 'Shipping method title. Otherwise, null.'
				},
				amount: {
					type: 'number',
					description: 'Shipping amount in store currency.'
				},
				base_amount: {
					type: 'number',
					description: 'Shipping amount in base currency.'
				},
				available: {
					type: 'boolean',
					description: 'The value of the availability flag ' +
						'for the current shipping method.'
				},
				extension_attributes: {
					type: 'object',
					description: 'ExtensionInterface class for @see ' +
						'\\Magento\\Quote\\Api\\Data\\ShippingMethodInterface'
				},
				error_message: {
					type: 'string',
					description: 'Shipping Error message.'
				},
				price_excl_tax: {
					type: 'number',
					description: 'Shipping price excl tax.'
				},
				price_incl_tax: {
					type: 'number',
					description: 'Shipping price incl tax.'
				}
			},
			required: [
				'carrier_code',
				'method_code',
				'amount',
				'base_amount',
				'available',
				'error_message',
				'price_excl_tax',
				'price_incl_tax'
			]
		},
		'quote-data-shipping-method-extension-interface': {
			type: 'object',
			description: 'ExtensionInterface class for @see ' +
				'\\Magento\\Quote\\Api\\Data\\ShippingMethodInterface'
		},
		'quote-data-payment-method-interface': {
			type: 'object',
			description: 'Interface PaymentMethodInterface',
			properties: {
				code: {
					type: 'string',
					description: 'Payment method code'
				},
				title: {
					type: 'string',
					description: 'Payment method title'
				}
			},
			required: [
				'code',
				'title'
			]
		},
		'quote-data-totals-additional-data-interface': {
			type: 'object',
			description: 'Additional data for totals collection.',
			properties: {
				extension_attributes: {
					type: 'object',
					description: 'ExtensionInterface class for @see ' +
						'\\Magento\\Quote\\Api\\Data\\TotalsAdditionalDataInterface',
					properties: {
						gift_messages: {
							type: 'array',
							items: {
								type: 'object',
								description: 'Interface MessageInterface',
								properties: {
									gift_message_id: {
										type: 'integer',
										description: 'Gift message ID. Otherwise, null.'
									},
									customer_id: {
										type: 'integer',
										description: 'Customer ID. Otherwise, null.'
									},
									sender: {
										type: 'string',
										description: 'Sender name.'
									},
									recipient: {
										type: 'string',
										description: 'Recipient name.'
									},
									message: {
										type: 'string',
										description: 'Message text.'
									},
									extension_attributes: {
										type: 'object',
										description: 'ExtensionInterface class for @see ' +
											'\\Magento\\GiftMessage\\Api\\Data\\MessageInterface',
										properties: {
											entity_id: {
												type: 'string'
											},
											entity_type: {
												type: 'string'
											}
										}
									}
								},
								required: [
									'sender',
									'recipient',
									'message'
								]
							}
						}
					}
				},
				custom_attributes: {
					type: 'array',
					description: 'Custom attributes values.',
					items: {
						type: 'object',
						description: 'Interface for custom attribute value.',
						properties: {
							attribute_code: {
								type: 'string',
								description: 'Attribute code'
							},
							value: {
								type: 'string',
								description: 'Attribute value'
							}
						},
						required: [
							'attribute_code',
							'value'
						]
					}
				}
			}
		},
		'quote-data-totals-additional-data-extension-interface': {
			type: 'object',
			description: 'ExtensionInterface class for @see ' +
				'\\Magento\\Quote\\Api\\Data\\TotalsAdditionalDataInterface',
			properties: {
				gift_messages: {
					type: 'array',
					items: {
						type: 'object',
						description: 'Interface MessageInterface',
						properties: {
							gift_message_id: {
								type: 'integer',
								description: 'Gift message ID. Otherwise, null.'
							},
							customer_id: {
								type: 'integer',
								description: 'Customer ID. Otherwise, null.'
							},
							sender: {
								type: 'string',
								description: 'Sender name.'
							},
							recipient: {
								type: 'string',
								description: 'Recipient name.'
							},
							message: {
								type: 'string',
								description: 'Message text.'
							},
							extension_attributes: {
								type: 'object',
								description: 'ExtensionInterface class for @see ' +
									'\\Magento\\GiftMessage\\Api\\Data\\MessageInterface',
								properties: {
									entity_id: {
										type: 'string'
									},
									entity_type: {
										type: 'string'
									}
								}
							}
						},
						required: [
							'sender',
							'recipient',
							'message'
						]
					}
				}
			}
		},
		'gift-message-data-message-interface': {
			type: 'object',
			description: 'Interface MessageInterface',
			properties: {
				gift_message_id: {
					type: 'integer',
					description: 'Gift message ID. Otherwise, null.'
				},
				customer_id: {
					type: 'integer',
					description: 'Customer ID. Otherwise, null.'
				},
				sender: {
					type: 'string',
					description: 'Sender name.'
				},
				recipient: {
					type: 'string',
					description: 'Recipient name.'
				},
				message: {
					type: 'string',
					description: 'Message text.'
				},
				extension_attributes: {
					type: 'object',
					description: 'ExtensionInterface class for @see ' +
						'\\Magento\\GiftMessage\\Api\\Data\\MessageInterface',
					properties: {
						entity_id: {
							type: 'string'
						},
						entity_type: {
							type: 'string'
						}
					}
				}
			},
			required: [
				'sender',
				'recipient',
				'message'
			]
		},
		'gift-message-data-message-extension-interface': {
			type: 'object',
			description: 'ExtensionInterface class for @see ' +
				'\\Magento\\GiftMessage\\Api\\Data\\MessageInterface',
			properties: {
				entity_id: {
					type: 'string'
				},
				entity_type: {
					type: 'string'
				}
			}
		},
		'quote-data-totals-interface': {
			type: 'object',
			description: 'Interface TotalsInterface',
			properties: {
				grand_total: {
					type: 'number',
					description: 'Grand total in quote currency'
				},
				base_grand_total: {
					type: 'number',
					description: 'Grand total in base currency'
				},
				subtotal: {
					type: 'number',
					description: 'Subtotal in quote currency'
				},
				base_subtotal: {
					type: 'number',
					description: 'Subtotal in base currency'
				},
				discount_amount: {
					type: 'number',
					description: 'Discount amount in quote currency'
				},
				base_discount_amount: {
					type: 'number',
					description: 'Discount amount in base currency'
				},
				subtotal_with_discount: {
					type: 'number',
					description: 'Subtotal in quote currency with applied discount'
				},
				base_subtotal_with_discount: {
					type: 'number',
					description: 'Subtotal in base currency with applied discount'
				},
				shipping_amount: {
					type: 'number',
					description: 'Shipping amount in quote currency'
				},
				base_shipping_amount: {
					type: 'number',
					description: 'Shipping amount in base currency'
				},
				shipping_discount_amount: {
					type: 'number',
					description: 'Shipping discount amount in quote currency'
				},
				base_shipping_discount_amount: {
					type: 'number',
					description: 'Shipping discount amount in base currency'
				},
				tax_amount: {
					type: 'number',
					description: 'Tax amount in quote currency'
				},
				base_tax_amount: {
					type: 'number',
					description: 'Tax amount in base currency'
				},
				weee_tax_applied_amount: {
					type: 'number',
					description: 'Item weee tax applied amount in quote currency.'
				},
				shipping_tax_amount: {
					type: 'number',
					description: 'Shipping tax amount in quote currency'
				},
				base_shipping_tax_amount: {
					type: 'number',
					description: 'Shipping tax amount in base currency'
				},
				subtotal_incl_tax: {
					type: 'number',
					description: 'Subtotal including tax in quote currency'
				},
				base_subtotal_incl_tax: {
					type: 'number',
					description: 'Subtotal including tax in base currency'
				},
				shipping_incl_tax: {
					type: 'number',
					description: 'Shipping including tax in quote currency'
				},
				base_shipping_incl_tax: {
					type: 'number',
					description: 'Shipping including tax in base currency'
				},
				base_currency_code: {
					type: 'string',
					description: 'Base currency code'
				},
				quote_currency_code: {
					type: 'string',
					description: 'Quote currency code'
				},
				coupon_code: {
					type: 'string',
					description: 'Applied coupon code'
				},
				items_qty: {
					type: 'integer',
					description: 'Items qty'
				},
				items: {
					type: 'array',
					description: 'Totals by items',
					items: {
						type: 'object',
						description: 'Interface TotalsItemInterface',
						properties: {
							item_id: {
								type: 'integer',
								description: 'Item id'
							},
							price: {
								type: 'number',
								description: 'Item price in quote currency.'
							},
							base_price: {
								type: 'number',
								description: 'Item price in base currency.'
							},
							qty: {
								type: 'number',
								description: 'Item quantity.'
							},
							row_total: {
								type: 'number',
								description: 'Row total in quote currency.'
							},
							base_row_total: {
								type: 'number',
								description: 'Row total in base currency.'
							},
							row_total_with_discount: {
								type: 'number',
								description: 'Row total with discount in ' +
									'quote currency. Otherwise, ' +
									'null.'
							},
							tax_amount: {
								type: 'number',
								description: 'Tax amount in quote ' +
									'currency. Otherwise, ' +
									'null.'
							},
							base_tax_amount: {
								type: 'number',
								description: 'Tax amount in base ' +
									'currency. Otherwise, ' +
									'null.'
							},
							tax_percent: {
								type: 'number',
								description: 'Tax percent. Otherwise, null.'
							},
							discount_amount: {
								type: 'number',
								description: 'Discount amount in quote ' +
									'currency. Otherwise, null.'
							},
							base_discount_amount: {
								type: 'number',
								description: 'Discount amount in base ' +
									'currency. Otherwise, ' +
									'null.'
							},
							discount_percent: {
								type: 'number',
								description: 'Discount percent. Otherwise, null.'
							},
							price_incl_tax: {
								type: 'number',
								description: 'Price including tax in quote ' +
									'currency. Otherwise, null.'
							},
							base_price_incl_tax: {
								type: 'number',
								description: 'Price including tax in base ' +
									'currency. Otherwise, null.'
							},
							row_total_incl_tax: {
								type: 'number',
								description: 'Row total including tax in ' +
									'quote currency. Otherwise, ' +
									'null.'
							},
							base_row_total_incl_tax: {
								type: 'number',
								description: 'Row total including tax in ' +
									'base currency. Otherwise, ' +
									'null.'
							},
							options: {
								type: 'string',
								description: 'Item price in quote currency.'
							},
							weee_tax_applied_amount: {
								type: 'number',
								description: 'Item weee tax applied ' +
									'amount in quote ' +
									'currency.'
							},
							weee_tax_applied: {
								type: 'string',
								description: 'Item weee tax applied in quote currency.'
							},
							extension_attributes: {
								type: 'object',
								description: 'ExtensionInterface class for @see ' +
									'\\Magento\\Quote\\Api\\Data\\TotalsItemInterface'
							},
							name: {
								type: 'string',
								description: 'Product name. Otherwise, null.'
							}
						},
						required: [
							'item_id',
							'price',
							'base_price',
							'qty',
							'row_total',
							'base_row_total',
							'options',
							'weee_tax_applied_amount',
							'weee_tax_applied'
						]
					}
				},
				total_segments: {
					type: 'array',
					description: 'Dynamically calculated totals',
					items: {
						type: 'object',
						description: 'Interface TotalsInterface',
						properties: {
							code: {
								type: 'string',
								description: 'Code'
							},
							title: {
								type: 'string',
								description: 'Total title'
							},
							value: {
								type: 'number',
								description: 'Total value'
							},
							area: {
								type: 'string',
								description: 'Display area code.'
							},
							extension_attributes: {
								type: 'object',
								description: 'ExtensionInterface class for @see ' +
									'\\Magento\\Quote\\Api\\Data\\TotalSegmentInterface',
								properties: {
									tax_grandtotal_details: {
										type: 'array',
										items: {
											type: 'object',
											description: 'Interface GrandTotalDetailsInterface',
											properties: {
												amount: {
													type: 'number',
													description: 'Tax amount value'
												},
												rates: {
													type: 'array',
													description: 'Tax rates info',
													items: {
														type: 'object',
														description: 'Interface ' +
															'GrandTotalRatesInterface',
														properties: {
															percent: {
																type: 'string',
																description: 'Tax percentage value'
															},
															title: {
																type: 'string',
																description: 'Rate title'
															}
														},
														required: [
															'percent',
															'title'
														]
													}
												},
												group_id: {
													type: 'integer',
													description: 'Group identifier'
												}
											},
											required: [
												'amount',
												'rates',
												'group_id'
											]
										}
									}
								}
							}
						},
						required: [
							'code',
							'value'
						]
					}
				},
				extension_attributes: {
					type: 'object',
					description: 'ExtensionInterface class for @see ' +
						'\\Magento\\Quote\\Api\\Data\\TotalsInterface',
					properties: {
						coupon_label: {
							type: 'string'
						}
					}
				}
			},
			required: [
				'weee_tax_applied_amount',
				'total_segments'
			]
		},
		'quote-data-totals-item-interface': {
			type: 'object',
			description: 'Interface TotalsItemInterface',
			properties: {
				item_id: {
					type: 'integer',
					description: 'Item id'
				},
				price: {
					type: 'number',
					description: 'Item price in quote currency.'
				},
				base_price: {
					type: 'number',
					description: 'Item price in base currency.'
				},
				qty: {
					type: 'number',
					description: 'Item quantity.'
				},
				row_total: {
					type: 'number',
					description: 'Row total in quote currency.'
				},
				base_row_total: {
					type: 'number',
					description: 'Row total in base currency.'
				},
				row_total_with_discount: {
					type: 'number',
					description: 'Row total with discount in ' +
						'quote currency. Otherwise, ' +
						'null.'
				},
				tax_amount: {
					type: 'number',
					description: 'Tax amount in quote currency. Otherwise, null.'
				},
				base_tax_amount: {
					type: 'number',
					description: 'Tax amount in base currency. Otherwise, null.'
				},
				tax_percent: {
					type: 'number',
					description: 'Tax percent. Otherwise, null.'
				},
				discount_amount: {
					type: 'number',
					description: 'Discount amount in quote ' +
						'currency. Otherwise, null.'
				},
				base_discount_amount: {
					type: 'number',
					description: 'Discount amount in base currency. Otherwise, null.'
				},
				discount_percent: {
					type: 'number',
					description: 'Discount percent. Otherwise, null.'
				},
				price_incl_tax: {
					type: 'number',
					description: 'Price including tax in quote ' +
						'currency. Otherwise, null.'
				},
				base_price_incl_tax: {
					type: 'number',
					description: 'Price including tax in base ' +
						'currency. Otherwise, null.'
				},
				row_total_incl_tax: {
					type: 'number',
					description: 'Row total including tax in ' +
						'quote currency. Otherwise, ' +
						'null.'
				},
				base_row_total_incl_tax: {
					type: 'number',
					description: 'Row total including tax in ' +
						'base currency. Otherwise, ' +
						'null.'
				},
				options: {
					type: 'string',
					description: 'Item price in quote currency.'
				},
				weee_tax_applied_amount: {
					type: 'number',
					description: 'Item weee tax applied amount in quote currency.'
				},
				weee_tax_applied: {
					type: 'string',
					description: 'Item weee tax applied in quote currency.'
				},
				extension_attributes: {
					type: 'object',
					description: 'ExtensionInterface class for @see ' +
						'\\Magento\\Quote\\Api\\Data\\TotalsItemInterface'
				},
				name: {
					type: 'string',
					description: 'Product name. Otherwise, null.'
				}
			},
			required: [
				'item_id',
				'price',
				'base_price',
				'qty',
				'row_total',
				'base_row_total',
				'options',
				'weee_tax_applied_amount',
				'weee_tax_applied'
			]
		},
		'quote-data-totals-item-extension-interface': {
			type: 'object',
			description: 'ExtensionInterface class for @see ' +
				'\\Magento\\Quote\\Api\\Data\\TotalsItemInterface'
		},
		'quote-data-total-segment-interface': {
			type: 'object',
			description: 'Interface TotalsInterface',
			properties: {
				code: {
					type: 'string',
					description: 'Code'
				},
				title: {
					type: 'string',
					description: 'Total title'
				},
				value: {
					type: 'number',
					description: 'Total value'
				},
				area: {
					type: 'string',
					description: 'Display area code.'
				},
				extension_attributes: {
					type: 'object',
					description: 'ExtensionInterface class for @see ' +
						'\\Magento\\Quote\\Api\\Data\\TotalSegmentInterface',
					properties: {
						tax_grandtotal_details: {
							type: 'array',
							items: {
								type: 'object',
								description: 'Interface GrandTotalDetailsInterface',
								properties: {
									amount: {
										type: 'number',
										description: 'Tax amount value'
									},
									rates: {
										type: 'array',
										description: 'Tax rates info',
										items: {
											type: 'object',
											description: 'Interface GrandTotalRatesInterface',
											properties: {
												percent: {
													type: 'string',
													description: 'Tax percentage value'
												},
												title: {
													type: 'string',
													description: 'Rate title'
												}
											},
											required: [
												'percent',
												'title'
											]
										}
									},
									group_id: {
										type: 'integer',
										description: 'Group identifier'
									}
								},
								required: [
									'amount',
									'rates',
									'group_id'
								]
							}
						}
					}
				}
			},
			required: [
				'code',
				'value'
			]
		},
		'quote-data-total-segment-extension-interface': {
			type: 'object',
			description: 'ExtensionInterface class for @see ' +
				'\\Magento\\Quote\\Api\\Data\\TotalSegmentInterface',
			properties: {
				tax_grandtotal_details: {
					type: 'array',
					items: {
						type: 'object',
						description: 'Interface GrandTotalDetailsInterface',
						properties: {
							amount: {
								type: 'number',
								description: 'Tax amount value'
							},
							rates: {
								type: 'array',
								description: 'Tax rates info',
								items: {
									type: 'object',
									description: 'Interface GrandTotalRatesInterface',
									properties: {
										percent: {
											type: 'string',
											description: 'Tax percentage value'
										},
										title: {
											type: 'string',
											description: 'Rate title'
										}
									},
									required: [
										'percent',
										'title'
									]
								}
							},
							group_id: {
								type: 'integer',
								description: 'Group identifier'
							}
						},
						required: [
							'amount',
							'rates',
							'group_id'
						]
					}
				}
			}
		},
		'tax-data-grand-total-details-interface': {
			type: 'object',
			description: 'Interface GrandTotalDetailsInterface',
			properties: {
				amount: {
					type: 'number',
					description: 'Tax amount value'
				},
				rates: {
					type: 'array',
					description: 'Tax rates info',
					items: {
						type: 'object',
						description: 'Interface GrandTotalRatesInterface',
						properties: {
							percent: {
								type: 'string',
								description: 'Tax percentage value'
							},
							title: {
								type: 'string',
								description: 'Rate title'
							}
						},
						required: [
							'percent',
							'title'
						]
					}
				},
				group_id: {
					type: 'integer',
					description: 'Group identifier'
				}
			},
			required: [
				'amount',
				'rates',
				'group_id'
			]
		},
		'tax-data-grand-total-rates-interface': {
			type: 'object',
			description: 'Interface GrandTotalRatesInterface',
			properties: {
				percent: {
					type: 'string',
					description: 'Tax percentage value'
				},
				title: {
					type: 'string',
					description: 'Rate title'
				}
			},
			required: [
				'percent',
				'title'
			]
		},
		'quote-data-totals-extension-interface': {
			type: 'object',
			description: 'ExtensionInterface class for @see ' +
				'\\Magento\\Quote\\Api\\Data\\TotalsInterface',
			properties: {
				coupon_label: {
					type: 'string'
				}
			}
		},
		'framework-search-search-result-interface': {
			type: 'object',
			description: 'Interface SearchResultInterface',
			properties: {
				items: {
					type: 'array',
					items: {
						type: 'object',
						description: 'Interface ' +
							'\\Magento\\Framework\\Api\\Search\\DocumentInterface',
						properties: {
							id: {
								type: 'integer'
							},
							custom_attributes: {
								type: 'array',
								description: 'Custom attributes values.',
								items: {
									type: 'object',
									description: 'Interface for custom attribute value.',
									properties: {
										attribute_code: {
											type: 'string',
											description: 'Attribute code'
										},
										value: {
											type: 'string',
											description: 'Attribute value'
										}
									},
									required: [
										'attribute_code',
										'value'
									]
								}
							}
						},
						required: [
							'id'
						]
					}
				},
				aggregations: {
					type: 'object',
					description: 'Faceted data',
					properties: {
						buckets: {
							type: 'array',
							description: 'All Document fields',
							items: {
								type: 'object',
								description: 'Facet Bucket',
								properties: {
									name: {
										type: 'string',
										description: 'Field name'
									},
									values: {
										type: 'array',
										description: 'Field values',
										items: {
											type: 'object',
											description: 'Interface ' +
												'\\Magento\\Framework\\Api\\Search\\AggregationValueInterface',
											properties: {
												value: {
													type: 'string',
													description: 'Aggregation'
												},
												metrics: {
													type: 'array',
													description: 'Metrics',
													items: {
														type: 'string'
													}
												}
											},
											required: [
												'value',
												'metrics'
											]
										}
									}
								},
								required: [
									'name',
									'values'
								]
							}
						},
						bucket_names: {
							type: 'array',
							description: 'Document field names',
							items: {
								type: 'string'
							}
						}
					},
					required: [
						'buckets',
						'bucket_names'
					]
				},
				search_criteria: {
					type: 'object',
					description: 'Interface SearchCriteriaInterface',
					properties: {
						request_name: {
							type: 'string'
						},
						filter_groups: {
							type: 'array',
							description: 'A list of filter groups.',
							items: {
								type: 'object',
								description: 'Groups two or more filters ' +
									'together using a logical OR',
								properties: {
									filters: {
										type: 'array',
										description: 'A list of filters in this group',
										items: {
											type: 'object',
											description: 'Filter which can be used by ' +
												'any methods from service ' +
												'layer.',
											properties: {
												field: {
													type: 'string',
													description: 'Field'
												},
												value: {
													type: 'string',
													description: 'Value'
												},
												condition_type: {
													type: 'string',
													description: 'Condition type'
												}
											},
											required: [
												'field',
												'value'
											]
										}
									}
								}
							}
						},
						sort_orders: {
							type: 'array',
							description: 'Sort order.',
							items: {
								type: 'object',
								description: 'Data object for sort order.',
								properties: {
									field: {
										type: 'string',
										description: 'Sorting field.'
									},
									direction: {
										type: 'string',
										description: 'Sorting direction.'
									}
								},
								required: [
									'field',
									'direction'
								]
							}
						},
						page_size: {
							type: 'integer',
							description: 'Page size.'
						},
						current_page: {
							type: 'integer',
							description: 'Current page.'
						}
					},
					required: [
						'request_name',
						'filter_groups'
					]
				},
				total_count: {
					type: 'integer',
					description: 'Total count.'
				}
			},
			required: [
				'items',
				'aggregations',
				'search_criteria',
				'total_count'
			]
		},
		'framework-search-document-interface': {
			type: 'object',
			description: 'Interface ' +
				'\\Magento\\Framework\\Api\\Search\\DocumentInterface',
			properties: {
				id: {
					type: 'integer'
				},
				custom_attributes: {
					type: 'array',
					description: 'Custom attributes values.',
					items: {
						type: 'object',
						description: 'Interface for custom attribute value.',
						properties: {
							attribute_code: {
								type: 'string',
								description: 'Attribute code'
							},
							value: {
								type: 'string',
								description: 'Attribute value'
							}
						},
						required: [
							'attribute_code',
							'value'
						]
					}
				}
			},
			required: [
				'id'
			]
		},
		'framework-search-aggregation-interface': {
			type: 'object',
			description: 'Faceted data',
			properties: {
				buckets: {
					type: 'array',
					description: 'All Document fields',
					items: {
						type: 'object',
						description: 'Facet Bucket',
						properties: {
							name: {
								type: 'string',
								description: 'Field name'
							},
							values: {
								type: 'array',
								description: 'Field values',
								items: {
									type: 'object',
									description: 'Interface ' +
										'\\Magento\\Framework\\Api\\Search\\AggregationValueInterface',
									properties: {
										value: {
											type: 'string',
											description: 'Aggregation'
										},
										metrics: {
											type: 'array',
											description: 'Metrics',
											items: {
												type: 'string'
											}
										}
									},
									required: [
										'value',
										'metrics'
									]
								}
							}
						},
						required: [
							'name',
							'values'
						]
					}
				},
				bucket_names: {
					type: 'array',
					description: 'Document field names',
					items: {
						type: 'string'
					}
				}
			},
			required: [
				'buckets',
				'bucket_names'
			]
		},
		'framework-search-bucket-interface': {
			type: 'object',
			description: 'Facet Bucket',
			properties: {
				name: {
					type: 'string',
					description: 'Field name'
				},
				values: {
					type: 'array',
					description: 'Field values',
					items: {
						type: 'object',
						description: 'Interface ' +
							'\\Magento\\Framework\\Api\\Search\\AggregationValueInterface',
						properties: {
							value: {
								type: 'string',
								description: 'Aggregation'
							},
							metrics: {
								type: 'array',
								description: 'Metrics',
								items: {
									type: 'string'
								}
							}
						},
						required: [
							'value',
							'metrics'
						]
					}
				}
			},
			required: [
				'name',
				'values'
			]
		},
		'framework-search-aggregation-value-interface': {
			type: 'object',
			description: 'Interface ' +
				'\\Magento\\Framework\\Api\\Search\\AggregationValueInterface',
			properties: {
				value: {
					type: 'string',
					description: 'Aggregation'
				},
				metrics: {
					type: 'array',
					description: 'Metrics',
					items: {
						type: 'string'
					}
				}
			},
			required: [
				'value',
				'metrics'
			]
		},
		'framework-search-search-criteria-interface': {
			type: 'object',
			description: 'Interface SearchCriteriaInterface',
			properties: {
				request_name: {
					type: 'string'
				},
				filter_groups: {
					type: 'array',
					description: 'A list of filter groups.',
					items: {
						type: 'object',
						description: 'Groups two or more filters ' +
							'together using a logical OR',
						properties: {
							filters: {
								type: 'array',
								description: 'A list of filters in this group',
								items: {
									type: 'object',
									description: 'Filter which can be used by ' +
										'any methods from service ' +
										'layer.',
									properties: {
										field: {
											type: 'string',
											description: 'Field'
										},
										value: {
											type: 'string',
											description: 'Value'
										},
										condition_type: {
											type: 'string',
											description: 'Condition type'
										}
									},
									required: [
										'field',
										'value'
									]
								}
							}
						}
					}
				},
				sort_orders: {
					type: 'array',
					description: 'Sort order.',
					items: {
						type: 'object',
						description: 'Data object for sort order.',
						properties: {
							field: {
								type: 'string',
								description: 'Sorting field.'
							},
							direction: {
								type: 'string',
								description: 'Sorting direction.'
							}
						},
						required: [
							'field',
							'direction'
						]
					}
				},
				page_size: {
					type: 'integer',
					description: 'Page size.'
				},
				current_page: {
					type: 'integer',
					description: 'Current page.'
				}
			},
			required: [
				'request_name',
				'filter_groups'
			]
		},
		'framework-search-filter-group': {
			type: 'object',
			description: 'Groups two or more filters together using a logical OR',
			properties: {
				filters: {
					type: 'array',
					description: 'A list of filters in this group',
					items: {
						type: 'object',
						description: 'Filter which can be used by ' +
							'any methods from service ' +
							'layer.',
						properties: {
							field: {
								type: 'string',
								description: 'Field'
							},
							value: {
								type: 'string',
								description: 'Value'
							},
							condition_type: {
								type: 'string',
								description: 'Condition type'
							}
						},
						required: [
							'field',
							'value'
						]
					}
				}
			}
		},
		'framework-filter': {
			type: 'object',
			description: 'Filter which can be used by ' +
				'any methods from service ' +
				'layer.',
			properties: {
				field: {
					type: 'string',
					description: 'Field'
				},
				value: {
					type: 'string',
					description: 'Value'
				},
				condition_type: {
					type: 'string',
					description: 'Condition type'
				}
			},
			required: [
				'field',
				'value'
			]
		},
		'framework-sort-order': {
			type: 'object',
			description: 'Data object for sort order.',
			properties: {
				field: {
					type: 'string',
					description: 'Sorting field.'
				},
				direction: {
					type: 'string',
					description: 'Sorting direction.'
				}
			},
			required: [
				'field',
				'direction'
			]
		},
		'checkout-data-shipping-information-interface': {
			type: 'object',
			description: 'Interface ShippingInformationInterface',
			properties: {
				shipping_address: {
					type: 'object',
					description: 'Interface AddressInterface',
					properties: {
						id: {
							type: 'integer',
							description: 'Id'
						},
						region: {
							type: 'string',
							description: 'Region name'
						},
						region_id: {
							type: 'integer',
							description: 'Region id'
						},
						region_code: {
							type: 'string',
							description: 'Region code'
						},
						country_id: {
							type: 'string',
							description: 'Country id'
						},
						street: {
							type: 'array',
							description: 'Street',
							items: {
								type: 'string'
							}
						},
						company: {
							type: 'string',
							description: 'Company'
						},
						telephone: {
							type: 'string',
							description: 'Telephone number'
						},
						fax: {
							type: 'string',
							description: 'Fax number'
						},
						postcode: {
							type: 'string',
							description: 'Postcode'
						},
						city: {
							type: 'string',
							description: 'City name'
						},
						firstname: {
							type: 'string',
							description: 'First name'
						},
						lastname: {
							type: 'string',
							description: 'Last name'
						},
						middlename: {
							type: 'string',
							description: 'Middle name'
						},
						prefix: {
							type: 'string',
							description: 'Prefix'
						},
						suffix: {
							type: 'string',
							description: 'Suffix'
						},
						vat_id: {
							type: 'string',
							description: 'Vat id'
						},
						customer_id: {
							type: 'integer',
							description: 'Customer id'
						},
						email: {
							type: 'string',
							description: 'Billing/shipping email'
						},
						same_as_billing: {
							type: 'integer',
							description: 'Same as billing flag'
						},
						customer_address_id: {
							type: 'integer',
							description: 'Customer address id'
						},
						save_in_address_book: {
							type: 'integer',
							description: 'Save in address book flag'
						},
						extension_attributes: {
							type: 'object',
							description: 'ExtensionInterface class for @see ' +
								'\\Magento\\Quote\\Api\\Data\\AddressInterface',
							properties: {
								checkout_fields: {
									type: 'array',
									items: {
										type: 'object',
										description: 'Interface for custom attribute value.',
										properties: {
											attribute_code: {
												type: 'string',
												description: 'Attribute code'
											},
											value: {
												type: 'string',
												description: 'Attribute value'
											}
										},
										required: [
											'attribute_code',
											'value'
										]
									}
								}
							}
						},
						custom_attributes: {
							type: 'array',
							description: 'Custom attributes values.',
							items: {
								type: 'object',
								description: 'Interface for custom attribute value.',
								properties: {
									attribute_code: {
										type: 'string',
										description: 'Attribute code'
									},
									value: {
										type: 'string',
										description: 'Attribute value'
									}
								},
								required: [
									'attribute_code',
									'value'
								]
							}
						}
					},
					required: [
						'region',
						'region_id',
						'region_code',
						'country_id',
						'street',
						'telephone',
						'postcode',
						'city',
						'firstname',
						'lastname',
						'email'
					]
				},
				billing_address: {
					type: 'object',
					description: 'Interface AddressInterface',
					properties: {
						id: {
							type: 'integer',
							description: 'Id'
						},
						region: {
							type: 'string',
							description: 'Region name'
						},
						region_id: {
							type: 'integer',
							description: 'Region id'
						},
						region_code: {
							type: 'string',
							description: 'Region code'
						},
						country_id: {
							type: 'string',
							description: 'Country id'
						},
						street: {
							type: 'array',
							description: 'Street',
							items: {
								type: 'string'
							}
						},
						company: {
							type: 'string',
							description: 'Company'
						},
						telephone: {
							type: 'string',
							description: 'Telephone number'
						},
						fax: {
							type: 'string',
							description: 'Fax number'
						},
						postcode: {
							type: 'string',
							description: 'Postcode'
						},
						city: {
							type: 'string',
							description: 'City name'
						},
						firstname: {
							type: 'string',
							description: 'First name'
						},
						lastname: {
							type: 'string',
							description: 'Last name'
						},
						middlename: {
							type: 'string',
							description: 'Middle name'
						},
						prefix: {
							type: 'string',
							description: 'Prefix'
						},
						suffix: {
							type: 'string',
							description: 'Suffix'
						},
						vat_id: {
							type: 'string',
							description: 'Vat id'
						},
						customer_id: {
							type: 'integer',
							description: 'Customer id'
						},
						email: {
							type: 'string',
							description: 'Billing/shipping email'
						},
						same_as_billing: {
							type: 'integer',
							description: 'Same as billing flag'
						},
						customer_address_id: {
							type: 'integer',
							description: 'Customer address id'
						},
						save_in_address_book: {
							type: 'integer',
							description: 'Save in address book flag'
						},
						extension_attributes: {
							type: 'object',
							description: 'ExtensionInterface class for @see ' +
								'\\Magento\\Quote\\Api\\Data\\AddressInterface',
							properties: {
								checkout_fields: {
									type: 'array',
									items: {
										type: 'object',
										description: 'Interface for custom attribute value.',
										properties: {
											attribute_code: {
												type: 'string',
												description: 'Attribute code'
											},
											value: {
												type: 'string',
												description: 'Attribute value'
											}
										},
										required: [
											'attribute_code',
											'value'
										]
									}
								}
							}
						},
						custom_attributes: {
							type: 'array',
							description: 'Custom attributes values.',
							items: {
								type: 'object',
								description: 'Interface for custom attribute value.',
								properties: {
									attribute_code: {
										type: 'string',
										description: 'Attribute code'
									},
									value: {
										type: 'string',
										description: 'Attribute value'
									}
								},
								required: [
									'attribute_code',
									'value'
								]
							}
						}
					},
					required: [
						'region',
						'region_id',
						'region_code',
						'country_id',
						'street',
						'telephone',
						'postcode',
						'city',
						'firstname',
						'lastname',
						'email'
					]
				},
				shipping_method_code: {
					type: 'string',
					description: 'Shipping method code'
				},
				shipping_carrier_code: {
					type: 'string',
					description: 'Carrier code'
				},
				extension_attributes: {
					type: 'object',
					description: 'ExtensionInterface class for @see ' +
						'\\Magento\\Checkout\\Api\\Data\\ShippingInformationInterface'
				},
				custom_attributes: {
					type: 'array',
					description: 'Custom attributes values.',
					items: {
						type: 'object',
						description: 'Interface for custom attribute value.',
						properties: {
							attribute_code: {
								type: 'string',
								description: 'Attribute code'
							},
							value: {
								type: 'string',
								description: 'Attribute value'
							}
						},
						required: [
							'attribute_code',
							'value'
						]
					}
				}
			},
			required: [
				'shipping_address',
				'shipping_method_code',
				'shipping_carrier_code'
			]
		},
		'checkout-data-shipping-information-extension-interface': {
			type: 'object',
			description: 'ExtensionInterface class for @see ' +
				'\\Magento\\Checkout\\Api\\Data\\ShippingInformationInterface'
		},
		'checkout-data-payment-details-interface': {
			type: 'object',
			description: 'Interface PaymentDetailsInterface',
			properties: {
				payment_methods: {
					type: 'array',
					items: {
						type: 'object',
						description: 'Interface PaymentMethodInterface',
						properties: {
							code: {
								type: 'string',
								description: 'Payment method code'
							},
							title: {
								type: 'string',
								description: 'Payment method title'
							}
						},
						required: [
							'code',
							'title'
						]
					}
				},
				totals: {
					type: 'object',
					description: 'Interface TotalsInterface',
					properties: {
						grand_total: {
							type: 'number',
							description: 'Grand total in quote currency'
						},
						base_grand_total: {
							type: 'number',
							description: 'Grand total in base currency'
						},
						subtotal: {
							type: 'number',
							description: 'Subtotal in quote currency'
						},
						base_subtotal: {
							type: 'number',
							description: 'Subtotal in base currency'
						},
						discount_amount: {
							type: 'number',
							description: 'Discount amount in quote currency'
						},
						base_discount_amount: {
							type: 'number',
							description: 'Discount amount in base currency'
						},
						subtotal_with_discount: {
							type: 'number',
							description: 'Subtotal in quote ' +
								'currency with applied ' +
								'discount'
						},
						base_subtotal_with_discount: {
							type: 'number',
							description: 'Subtotal in base ' +
								'currency with applied ' +
								'discount'
						},
						shipping_amount: {
							type: 'number',
							description: 'Shipping amount in quote currency'
						},
						base_shipping_amount: {
							type: 'number',
							description: 'Shipping amount in base currency'
						},
						shipping_discount_amount: {
							type: 'number',
							description: 'Shipping discount amount in quote currency'
						},
						base_shipping_discount_amount: {
							type: 'number',
							description: 'Shipping discount amount in base currency'
						},
						tax_amount: {
							type: 'number',
							description: 'Tax amount in quote currency'
						},
						base_tax_amount: {
							type: 'number',
							description: 'Tax amount in base currency'
						},
						weee_tax_applied_amount: {
							type: 'number',
							description: 'Item weee tax applied ' +
								'amount in quote ' +
								'currency.'
						},
						shipping_tax_amount: {
							type: 'number',
							description: 'Shipping tax amount in quote currency'
						},
						base_shipping_tax_amount: {
							type: 'number',
							description: 'Shipping tax amount in base currency'
						},
						subtotal_incl_tax: {
							type: 'number',
							description: 'Subtotal including tax in quote currency'
						},
						base_subtotal_incl_tax: {
							type: 'number',
							description: 'Subtotal including tax in base currency'
						},
						shipping_incl_tax: {
							type: 'number',
							description: 'Shipping including tax in quote currency'
						},
						base_shipping_incl_tax: {
							type: 'number',
							description: 'Shipping including tax in base currency'
						},
						base_currency_code: {
							type: 'string',
							description: 'Base currency code'
						},
						quote_currency_code: {
							type: 'string',
							description: 'Quote currency code'
						},
						coupon_code: {
							type: 'string',
							description: 'Applied coupon code'
						},
						items_qty: {
							type: 'integer',
							description: 'Items qty'
						},
						items: {
							type: 'array',
							description: 'Totals by items',
							items: {
								type: 'object',
								description: 'Interface TotalsItemInterface',
								properties: {
									item_id: {
										type: 'integer',
										description: 'Item id'
									},
									price: {
										type: 'number',
										description: 'Item price in quote currency.'
									},
									base_price: {
										type: 'number',
										description: 'Item price in base currency.'
									},
									qty: {
										type: 'number',
										description: 'Item quantity.'
									},
									row_total: {
										type: 'number',
										description: 'Row total in quote currency.'
									},
									base_row_total: {
										type: 'number',
										description: 'Row total in base currency.'
									},
									row_total_with_discount: {
										type: 'number',
										description: 'Row total with discount in ' +
											'quote currency. Otherwise, ' +
											'null.'
									},
									tax_amount: {
										type: 'number',
										description: 'Tax amount in quote ' +
											'currency. Otherwise, ' +
											'null.'
									},
									base_tax_amount: {
										type: 'number',
										description: 'Tax amount in base ' +
											'currency. Otherwise, ' +
											'null.'
									},
									tax_percent: {
										type: 'number',
										description: 'Tax percent. Otherwise, null.'
									},
									discount_amount: {
										type: 'number',
										description: 'Discount amount in quote ' +
											'currency. Otherwise, null.'
									},
									base_discount_amount: {
										type: 'number',
										description: 'Discount amount in base ' +
											'currency. Otherwise, ' +
											'null.'
									},
									discount_percent: {
										type: 'number',
										description: 'Discount percent. Otherwise, null.'
									},
									price_incl_tax: {
										type: 'number',
										description: 'Price including tax in quote ' +
											'currency. Otherwise, null.'
									},
									base_price_incl_tax: {
										type: 'number',
										description: 'Price including tax in base ' +
											'currency. Otherwise, null.'
									},
									row_total_incl_tax: {
										type: 'number',
										description: 'Row total including tax in ' +
											'quote currency. Otherwise, ' +
											'null.'
									},
									base_row_total_incl_tax: {
										type: 'number',
										description: 'Row total including tax in ' +
											'base currency. Otherwise, ' +
											'null.'
									},
									options: {
										type: 'string',
										description: 'Item price in quote currency.'
									},
									weee_tax_applied_amount: {
										type: 'number',
										description: 'Item weee tax applied ' +
											'amount in quote ' +
											'currency.'
									},
									weee_tax_applied: {
										type: 'string',
										description: 'Item weee tax applied in quote currency.'
									},
									extension_attributes: {
										type: 'object',
										description: 'ExtensionInterface class for @see ' +
											'\\Magento\\Quote\\Api\\Data\\TotalsItemInterface'
									},
									name: {
										type: 'string',
										description: 'Product name. Otherwise, null.'
									}
								},
								required: [
									'item_id',
									'price',
									'base_price',
									'qty',
									'row_total',
									'base_row_total',
									'options',
									'weee_tax_applied_amount',
									'weee_tax_applied'
								]
							}
						},
						total_segments: {
							type: 'array',
							description: 'Dynamically calculated totals',
							items: {
								type: 'object',
								description: 'Interface TotalsInterface',
								properties: {
									code: {
										type: 'string',
										description: 'Code'
									},
									title: {
										type: 'string',
										description: 'Total title'
									},
									value: {
										type: 'number',
										description: 'Total value'
									},
									area: {
										type: 'string',
										description: 'Display area code.'
									},
									extension_attributes: {
										type: 'object',
										description: 'ExtensionInterface class for @see ' +
											'\\Magento\\Quote\\Api\\Data\\TotalSegmentInterface',
										properties: {
											tax_grandtotal_details: {
												type: 'array',
												items: {
													type: 'object',
													description: 'Interface ' +
														'GrandTotalDetailsInterface',
													properties: {
														amount: {
															type: 'number',
															description: 'Tax amount value'
														},
														rates: {
															type: 'array',
															description: 'Tax rates info',
															items: {
																type: 'object',
																description: 'Interface ' +
																	'GrandTotalRatesInterface',
																properties: {
																	percent: {
																		type: 'string',
																		description: 'Tax percentage value'
																	},
																	title: {
																		type: 'string',
																		description: 'Rate title'
																	}
																},
																required: [
																	'percent',
																	'title'
																]
															}
														},
														group_id: {
															type: 'integer',
															description: 'Group identifier'
														}
													},
													required: [
														'amount',
														'rates',
														'group_id'
													]
												}
											}
										}
									}
								},
								required: [
									'code',
									'value'
								]
							}
						},
						extension_attributes: {
							type: 'object',
							description: 'ExtensionInterface class for @see ' +
								'\\Magento\\Quote\\Api\\Data\\TotalsInterface',
							properties: {
								coupon_label: {
									type: 'string'
								}
							}
						}
					},
					required: [
						'weee_tax_applied_amount',
						'total_segments'
					]
				},
				extension_attributes: {
					type: 'object',
					description: 'ExtensionInterface class for @see ' +
						'\\Magento\\Checkout\\Api\\Data\\PaymentDetailsInterface'
				}
			},
			required: [
				'payment_methods',
				'totals'
			]
		},
		'checkout-data-payment-details-extension-interface': {
			type: 'object',
			description: 'ExtensionInterface class for @see ' +
				'\\Magento\\Checkout\\Api\\Data\\PaymentDetailsInterface'
		},
		'checkout-data-totals-information-interface': {
			type: 'object',
			description: 'Interface TotalsInformationInterface',
			properties: {
				address: {
					type: 'object',
					description: 'Interface AddressInterface',
					properties: {
						id: {
							type: 'integer',
							description: 'Id'
						},
						region: {
							type: 'string',
							description: 'Region name'
						},
						region_id: {
							type: 'integer',
							description: 'Region id'
						},
						region_code: {
							type: 'string',
							description: 'Region code'
						},
						country_id: {
							type: 'string',
							description: 'Country id'
						},
						street: {
							type: 'array',
							description: 'Street',
							items: {
								type: 'string'
							}
						},
						company: {
							type: 'string',
							description: 'Company'
						},
						telephone: {
							type: 'string',
							description: 'Telephone number'
						},
						fax: {
							type: 'string',
							description: 'Fax number'
						},
						postcode: {
							type: 'string',
							description: 'Postcode'
						},
						city: {
							type: 'string',
							description: 'City name'
						},
						firstname: {
							type: 'string',
							description: 'First name'
						},
						lastname: {
							type: 'string',
							description: 'Last name'
						},
						middlename: {
							type: 'string',
							description: 'Middle name'
						},
						prefix: {
							type: 'string',
							description: 'Prefix'
						},
						suffix: {
							type: 'string',
							description: 'Suffix'
						},
						vat_id: {
							type: 'string',
							description: 'Vat id'
						},
						customer_id: {
							type: 'integer',
							description: 'Customer id'
						},
						email: {
							type: 'string',
							description: 'Billing/shipping email'
						},
						same_as_billing: {
							type: 'integer',
							description: 'Same as billing flag'
						},
						customer_address_id: {
							type: 'integer',
							description: 'Customer address id'
						},
						save_in_address_book: {
							type: 'integer',
							description: 'Save in address book flag'
						},
						extension_attributes: {
							type: 'object',
							description: 'ExtensionInterface class for @see ' +
								'\\Magento\\Quote\\Api\\Data\\AddressInterface',
							properties: {
								checkout_fields: {
									type: 'array',
									items: {
										type: 'object',
										description: 'Interface for custom attribute value.',
										properties: {
											attribute_code: {
												type: 'string',
												description: 'Attribute code'
											},
											value: {
												type: 'string',
												description: 'Attribute value'
											}
										},
										required: [
											'attribute_code',
											'value'
										]
									}
								}
							}
						},
						custom_attributes: {
							type: 'array',
							description: 'Custom attributes values.',
							items: {
								type: 'object',
								description: 'Interface for custom attribute value.',
								properties: {
									attribute_code: {
										type: 'string',
										description: 'Attribute code'
									},
									value: {
										type: 'string',
										description: 'Attribute value'
									}
								},
								required: [
									'attribute_code',
									'value'
								]
							}
						}
					},
					required: [
						'region',
						'region_id',
						'region_code',
						'country_id',
						'street',
						'telephone',
						'postcode',
						'city',
						'firstname',
						'lastname',
						'email'
					]
				},
				shipping_method_code: {
					type: 'string',
					description: 'Shipping method code'
				},
				shipping_carrier_code: {
					type: 'string',
					description: 'Carrier code'
				},
				extension_attributes: {
					type: 'object',
					description: 'ExtensionInterface class for @see ' +
						'\\Magento\\Checkout\\Api\\Data\\TotalsInformationInterface'
				},
				custom_attributes: {
					type: 'array',
					description: 'Custom attributes values.',
					items: {
						type: 'object',
						description: 'Interface for custom attribute value.',
						properties: {
							attribute_code: {
								type: 'string',
								description: 'Attribute code'
							},
							value: {
								type: 'string',
								description: 'Attribute value'
							}
						},
						required: [
							'attribute_code',
							'value'
						]
					}
				}
			},
			required: [
				'address'
			]
		},
		'checkout-data-totals-information-extension-interface': {
			type: 'object',
			description: 'ExtensionInterface class for @see ' +
				'\\Magento\\Checkout\\Api\\Data\\TotalsInformationInterface'
		},
		'temando-shipping-data-collection-point-search-request-interface': {
			type: 'object',
			description: 'Temando Collection Point Search Request Interface',
			properties: {
				shipping_address_id: {
					type: 'integer'
				},
				country_id: {
					type: 'string'
				},
				postcode: {
					type: 'string'
				},
				pending: {
					type: 'boolean'
				}
			},
			required: [
				'shipping_address_id',
				'country_id',
				'postcode',
				'pending'
			]
		},
		'temando-shipping-data-collection-point-quote-collection-point-interface': {
			type: 'object',
			description: 'Temando Quote Collection Point ' +
				'Interface – Checkout/Quoting',
			properties: {
				entity_id: {
					type: 'integer'
				},
				collection_point_id: {
					type: 'string'
				},
				recipient_address_id: {
					type: 'integer'
				},
				name: {
					type: 'string'
				},
				country: {
					type: 'string'
				},
				region: {
					type: 'string'
				},
				postcode: {
					type: 'string'
				},
				city: {
					type: 'string'
				},
				street: {
					type: 'array',
					items: {
						type: 'string'
					}
				},
				opening_hours: {
					type: 'array',
					items: {
						type: 'string'
					}
				},
				shipping_experiences: {
					type: 'array',
					items: {
						type: 'string'
					}
				},
				selected: {
					type: 'boolean'
				}
			},
			required: [
				'entity_id',
				'collection_point_id',
				'recipient_address_id',
				'name',
				'country',
				'region',
				'postcode',
				'city',
				'street',
				'opening_hours',
				'shipping_experiences',
				'selected'
			]
		}
	}
}