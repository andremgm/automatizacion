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

     public schemaXsd: {"schema":{

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
                        '-value':number    },
                    'xsd:maxLenght':{
                        '-value':number
                    }
            }
        } ];

           public objSimpleTypeNumber:   
           [{
            '-name':string,
            'xsd:restriction':{
                    '-base':string,
                    'xsd:minInclusive':{
                        '-value':number
                    },
                    'xsd:maxInclusive':{
                        '-value':number
                    }
            }
        } ];

        public objSimpleTypeDate:   
           [{
            '-name':string,
            'xsd:restriction':{
                    '-base':string,
            }
        } ];

    public schemaType: { "schema":{
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
        } ],
          "xsd:simpleTypeNumber":[{
            '-name':string,
            'xsd:restriction':{
                    '-base':string,
                    'xsd:minInclusive':{
                        '-value':number
                    },
                    'xsd:maxInclusive':{
                        '-value':number
                    }
            }
        } ],
          "xsd:simpleTypeDate":
          [{
            '-name':string,
            'xsd:restriction':{
                    '-base':string,
            }
        } ],

    }};
      public simpleTypeDate:
          [{
            '-name':string,
            'xsd:restriction':{
                    '-base':string,
            }
        } ];

      public simpleTypeDateNumber:
         [{
            '-name':string,
            'xsd:restriction':{
                    '-base':string,
                    'xsd:minInclusive':{
                        '-value':number
                    },
                    'xsd:maxInclusive':{
                        '-value':number
                    }
            }
        } ];

    
    public objImport:
               [{
                    '-namespace':string,
                    '-schemeLocation':string
                }];

    public objMessages:
                [{
                '-name':string,
                'wsdl:part':[{
                    '-element':string,
                    '-name':string
                }]
            }];

    public objPart:
                [{
                    '-element':string,
                    '-name':string
                }];

    public objPortFather:
                {
                    '-name':string,
                    'wsdl:operation':
                    [{
                    '-name':string,
                    'wsdl:input':{
                        '-name':string,
                        '-message':string
                    },
                    'wsdl:output':{
                        '-name':string,
                        '-message':string
                    },
                    'wsdl:fault':{
                        '-name':string,
                        '-message':string
                    }

                }]
            }
    public objPortType:
                    [{
                    '-name':string,
                    'wsdl:input':{
                        '-name':string,
                        '-message':string
                    },
                    'wsdl:output':{
                        '-name':string,
                        '-message':string
                    },
                    'wsdl:fault':{
                        '-name':string,
                        '-message':string
                    }

                }];


    public objBindingFather:
                {
                '-name':string,
                '-type':string,
                'soap:binding':{
                    '-style':string,
                    '-transport': string
                },
                "wsdl:operation": [
        {
          "-name": string,
          "wsdl:input": {
            "-name":string,
            "soap:body": {
              "-parts": string,
              "-use": string
            },
            "soap:header": {
              "-message": string,
              "-part": string,
              "-use": string
            }
          },
          "wsdl:output": {
            "-name": string,
            "soap:body": {
              "-parts": string,
              "-use": string
            },
            "soap:header": {
              "-message": string,
              "-part": string,
              "-use": string
            }
          },
          "wsdl:fault": {
            "-name": string,
            "soap:fault": {
              "-name": string,
              "-use":string
            }
          }
        }]
          
        }
            

    public objBinding:
     [
        {
          "-name": string,
          "wsdl:input": {
            "-name":string,
            "soap:body": {
              "-parts": string,
              "-use": string
            },
            "soap:header": {
              "-message": string,
              "-part": string,
              "-use": string
            }
          },
          "wsdl:output": {
            "-name": string,
            "soap:body": {
              "-parts": string,
              "-use": string
            },
            "soap:header": {
              "-message": string,
              "-part": string,
              "-use": string
            }
          },
          "wsdl:fault": {
            "-name": string,
            "soap:fault": {
              "-name": string,
              "-use":string
            }
          }
        }];
                  

           


  



    public definitions:{ 
        'wsdl:definitions':{
        '-xsmlns:wsdl':string,
        '-name':string,
        '-xmlns:mf':string,
        '-xmlns:soap':string,
        '-xmlns:tns':string,
        '-xmlns:tnsEx':string,
        '-xmlns:xsd':string,
        '-targetNamespace':string,
        "wsdl:documentation": {
      "wsdl:appinfo": {
        "-source": "WMQI_APPINFO",
        "MRWSDLAppInfo": {
          "-imported": "true",
          "binding": {
            "-hasEncoding": "false",
            "-imported": "true",
            "-name": string,
            "-originalBindingStyle": "document"
          }
        }
      }
    },
        'wsdl:types':{
            'xsd:schema':{
                '-targetNamespace':string,
                'xsd:include':{'-schemaLocation':string},
                'xsd:import':[{
                    '-namespace':string,
                    '-schemeLocation':string
                }],
                },
            },
            'wsdl:message':[{
                '-name':string,
                'wsdl:part':[{
                    '-element':string,
                    '-name':string
                }]
            }],
            'wsdl:portType':{
                '-name':string,
                'wsdl:operation':[{
                    '-name':string,
                    'wsdl:input':{
                        '-name':string,
                        '-message':string
                    },
                    'wsdl:output':{
                        '-name':string,
                        '-message':string
                    },
                    'wsdl:fault':{
                        '-name':string,
                        '-message':string
                    }

                }]
            },
            'wsdl:binding':{
                '-name':string,
                '-type':string,
                'soap:binding':{
                    '-style':string,
                    '-transport': string
                },
                "wsdl:operation": [
        {
          "-name": string,
          "wsdl:input": {
            "-name":string,
            "soap:body": {
              "-parts": string,
              "-use": string
            },
            "soap:header": {
              "-message": string,
              "-part": string,
              "-use": string
            }
          },
          "wsdl:output": {
            "-name": string,
            "soap:body": {
              "-parts": string,
              "-use": string
            },
            "soap:header": {
              "-message": string,
              "-part": string,
              "-use": string
            }
          },
          "wsdl:fault": {
            "-name": string,
            "soap:fault": {
              "-name": string,
              "-use":string
            }
          }
        }],
            },
            'wsdl:service':{
                '-name':string,
                'wsdl:port':{
                    '-name':string,
                    'binding':string,
                    'soap:address':{'-location':string}
                }
            }
        



        }

    }
    
}