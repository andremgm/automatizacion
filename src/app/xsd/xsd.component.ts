import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xsd',
  templateUrl: './xsd.component.html',
  styleUrls: ['./xsd.component.css']
})
export class XsdComponent implements OnInit {

	base:string;
	baseIn:[string];
	baseOut:[string];
	

	ObjcomplexType:[{
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

    objElement:[{
    				"-maxOccurs":number,
    				"-minOccurs":number,
    				"-name":string,
    				"-type":string,
    				"xsd:annotation":{
    					"xsd:annotation":{"xsd:documentation":string},
    				}

    			}];


	 schema: {
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
    }]

	};

  constructor() { }

  ngOnInit() {
  }

  agregarBase(newOperationName:HTMLInputElement){
  	this.base=newOperationName.value;
  	this.baseIn.push(this.base+ "Intype");
  	this.baseIn.push(this.base+ "Outype");

  }
  

}