import { Component, OnInit,Input,OnChanges} from '@angular/core';
import { NgForm } from '@angular/forms';
import {objClass} from '../ObjClass';

@Component({
  selector: 'app-wsdl',
  templateUrl: './wsdl.component.html',
  styleUrls: ['./wsdl.component.css']
})
export class WsdlComponent implements OnInit {

	  i:number =0;
    @Input() currentMessageName:string;
  	@Input() nameSpace:string;
    messageNames:string[]=['--'];
    jsonSchema:string='';

    variable:objClass;

    objPortFather:objClass['objPortFather']=
            {
                    '-name':'default',
                    'wsdl:operation':
                    [{
                    '-name':'default',
                    'wsdl:input':{
                        '-name':'default',
                        '-message':'default'
                    },
                    'wsdl:output':{
                        '-name':'default',
                        '-message':'default'
                    },
                    'wsdl:fault':{
                        '-name':'default',
                        '-message':'default'
                    }

                }]
            }

    objPortType:objClass['objPortType']=
  				[{
                    '-name':'default',
                    'wsdl:input':{
                        '-name':'default',
                        '-message':'default'
                    },
                    'wsdl:output':{
                        '-name':'default',
                        '-message':'default'
                    },
                    'wsdl:fault':{
                        '-name':'default',
                        '-message':'default'
                    }

                }];


    objPart:objClass['objPart']=
  				[{
                    'element':"default",
                    '-name':"default"
                }];

    objMessages:objClass["objMessages"]= 
  			[{
                '-name':'excepcionMsg',
                'wsdl:part':[{
                    'element':"tns:Excepcion",
                    '-name':"excepcion"
                }],
            }];

         objBindingFather:objClass['objBindingFather']=
                {
                '-name':"default",
                '-type':"default",
                'soap:binding':{
                    '-style':"default",
                    '-transport': "default"
                },
                "wsdl:operation": [
        {
          "-name": "default",
          "wsdl:input": {
            "-name":"default",
            "soap:body": {
              "-parts": "default",
              "-use": "default"
            },
            "soap:header": {
              "-message": "default",
              "-part": "default",
              "-use": "default"
            }
          },
          "wsdl:output": {
            "-name": "default",
            "soap:body": {
              "-parts": "default",
              "-use": "default"
            },
            "soap:header": {
              "-message": "default",
              "-part": "default",
              "-use": "default"
            }
          },
          "wsdl:fault": {
            "-name": "default",
            "soap:fault": {
              "-name": "default",
              "-use":"default"
            }
          }
        }]
          
        }

    objBinding:objClass['objBinding']=
        [{
          "-name": 'default',
          "wsdl:input": {
            "-name":'default',
            "soap:body": {
              "-parts": 'default',
              "-use": 'default'
            },
            "soap:header": {
              "-message": 'default',
              "-part": 'default',
              "-use": 'default'
            }
          },
          "wsdl:output": {
            "-name": 'default',
            "soap:body": {
              "-parts": 'default',
              "-use": 'default'
            },
            "soap:header": {
              "-message": 'default',
              "-part": 'default',
              "-use": 'default'
            }
          },
          "wsdl:fault": {
            "-name": 'default',
            "soap:fault": {
              "-name": 'default',
              "-use":'default'
            }
          }
        }];

    definitions:objClass['definitions'];

    objImport:objClass['objImport']=[
    			{	
                    '-namespace':'http://www.banorte.com/ws/esb/general/Headers',
                    '-schemeLocation':"SOAP/HeaderRequest.xsd"
                },
                
                ];
    

  constructor() { }

  ngOnInit() {
  	this.objImport.push({
  		'-namespace':'http://www.banorte.com/ws/esb/general/Headers',
        '-schemeLocation':"SOAP/HeaderRequest.xsd"
  	},
  	{
  		'-namespace':'http://www.banorte.com/ws/esb/common/ExcepcionGeneral',
		'-schemeLocation':"common/ExcepcionGenerica.xsd"
  	})
  }
    
 


ngOnChanges() {
  console.log('currentMessageName:'+ this.currentMessageName );
	if(this.currentMessageName){
    console.log('paso la validacion if en ngChages dentro de wsdl'+ this.currentMessageName );

		this.messageNames.push(this.currentMessageName);
    this.buildMessage(this.currentMessageName);
		}
	
	}


	buildMessage(currentMessageName:string){
		this.objPart.push({
			'-name':'request' ,
			'element':'tns:'+currentMessageName+'Request'
		

		},

		{
			'element':'mf:HeaderReq',
			'-name':'requestHeader'

		});
       
		this.objMessages.push({
			'-name':currentMessageName+'Request',
			'wsdl:part':this.objPart
		
		})

    this.cleanObjPart();
//-----------------------------------------------------------------------------------------------------------------------
    this.objPart.push({
      '-name':'response' ,
      'element':'tns:'+currentMessageName+'Response'
    

    },

    {
      'element':'mf:HeaderRes',
      '-name':'responseHeader'

    });
       
    this.objMessages.push({
      '-name':currentMessageName+'Response',
      'wsdl:part':this.objPart
    
    })

//-----------------------------------------------------------------------------------------------------------------------
		this.objPortType.push({
			'-name':currentMessageName,
			'wsdl:output':{
				'-name':currentMessageName+'Res',
				'-message':'tns:'+currentMessageName+"Response"
			},
			'wsdl:input':{
				'-name':currentMessageName+'Req',
				'-message':'tns:'+currentMessageName+"Request"
			},
			'wsdl:fault':{
				'-name':'excepcion',
				'-message':'tns:excepcionMsg'
			}
		});


		this.objPortFather={
            '-name':this.nameSpace+"SOAP",

			'wsdl:operation':this.objPortType
                    
            }
  			



		this.objBinding.push({
          "-name": this.nameSpace,
          "wsdl:input": {
            "-name":currentMessageName+'Req',
            "soap:body": {
              "-parts": "request",
              "-use": "literal"
            },
            "soap:header": {
              "-message": "tns:"+currentMessageName+'Request',
              "-part": "requestHeader",
              "-use": "literal"
            }
          },
          "wsdl:output": {
            "-name": currentMessageName+'Res',
            "soap:body": {
              "-parts": "response",
              "-use": "literal"
            },
            "soap:header": {
              "-message": "tns:"+currentMessageName,
              "-part": "responseHeader",
              "-use": "literal"
            }
          },
          "wsdl:fault": {
            "-name": "excepcion",
            "soap:fault": {
              "-name": "excepcion",
              "-use":"literal"
            }
          }
        });


        this.objBindingFather=   
                {
                '-name':"default",
                '-type':"default",
                'soap:binding':{
                    '-style':"default",
                    '-transport': "default"
                },
                "wsdl:operation": this.objBinding
       
          
        }


		this.i++;

	

	}



	displayCompleteJson(){

		 this.definitions=
		   { 
        'wsdl:definitions':{
        '-xsmlns:wsdl':'http://schemas.xmlsoap.org/wsdl/',
        '-name':this.nameSpace,
        '-xmlns:mf':"http://www.banorte.com/ws/esb/general/Headers",
        '-xmlns:soap':"http://schemas.xmlsoap.org/wsdl/soap/" ,
        '-xmlns:tns':"http://www.banorte.com/ws/esb/"+this.nameSpace,
        '-xmlns:tnsEx':"http://www.banorte.com/ws/esb/common/ExcepcionGeneral" ,
        '-xmlns:xsd':"http://www.w3.org/2001/XMLSchema",
        'targetNamespace':"http://www.banorte.com/ws/esb/CancelacionOperacionesPayworks",
        "wsdl:documentation": {
        "wsdl:appinfo": {
        "-source": "WMQI_APPINFO",
        "MRWSDLAppInfo": {
          "-imported": "true",
          "binding": {
            "-hasEncoding": "false",
            "-imported": "true",
            "-name": this.nameSpace+"SOAP",
            "-originalBindingStyle": "document"
          }
        }
      }
    },
        'wsdl:types':{
            'xsd:schema':{
                '-targetNamespace':'http://www.banorte.com/ws/esb/'+this.nameSpace,
                'xsd:include':{'schemaLocation':this.nameSpace+"V1.0.xsd"},
                'xsd:import':this.objImport,
                
            },
            'wsdl:message':this.objMessages,
            'wsdl:portType':this.objPortFather,
            'wsdl:binding':this.objBindingFather,
            'wsdl:service':{
                '-name':this.nameSpace,
                'wsdl:port':{
                    '-name':this.nameSpace+"SOAP",
                    'binding':'tns:'+this.nameSpace+'SOAP',
                    'soap:address':{'-location':'http://www.banorte.com.ws.esb.'+this.nameSpace+'/V1.0/'}
                }
            }
        }



        }

    };

		this.jsonSchema=JSON.stringify(this.definitions);    


    }
		
    


	cleanObjPart(){


			this.objPart=  
				[{
                    'element':"default",
                    '-name':"default"
                }]; 

	}

	
}




















