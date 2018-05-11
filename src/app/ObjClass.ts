export class objClass{

	public objComplexType:[{
    	"-name":string,
    		"xsd:sequence":{
    			"xsd:element":[{
    				"-maxOccurs":number,
    				"-minOccurs":number,
    				"-name":string,
    				"-type":string,
    				"xsd:annotation":{
    					"xsd:annotation":{"xsd:documentation":string},
    				}

    			}]

    		}
    }];


    public objReference:[{
    	 "-name": string,
        "-type": string
    }]

    public objElement:[{
    	"-maxOccurs":number,
    	"-minOccurs":number,
    	"-name":string,
    	"-type":string,
    	"xsd:annotation":{
    		"xsd:annotation":{"xsd:documentation":string},
    	}
    }];

     public schemaXsd: {"shema":{

    "-xmlns:xsd": string,
    "-targetNamespace": string,
    "-xmlns:tns": string,
    "xsd:include":{"-schemeLocation":string},
    "xsd:complexType":[{
    	"-name":string,
    		"xsd:sequence":{
    			"xsd:element":[{
    				"-maxOccurs":number,
    				"-minOccurs":number,
    				"-name":string,
    				"-type":string,
    				"xsd:annotation":{
    					"xsd:annotation":{"xsd:documentation":string},
    				}

    			}]

    		}
    }],

	},
	 "xsd:element": [
      {
        "-name": string,
        "-type": string
      }]
  }



	public objSimpleType:
		[{
			'-name':string,
			'xsd:restriction':{
					'-base':string,
					'xsd:minLength':{
						'-value':number	},
					'xsd:maxLenght':{
						'-value':number
					}
			}
		} ];

	public schemaType: { "shema":{
    "-xmlns:xsd": string,
    "-targetNamespace": string,
    "-xmlns:tns": string,
    "xsd:simpleType":[{
			'-name':string,
			'xsd:restriction':{
					'-base':string,
					'xsd:minLength':{
						'-value':number
					},
					'xsd:maxLenght':{
						'-value':number
					}
			}
		} ]

	}};


	
}