import { Component, OnInit, } from '@angular/core';
import { NgForm } from '@angular/forms';

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

  getCurrentNamespace(newOperationName:HTMLInputElement){
  	this.base=newOperationName.value;

  }

   buildComplexType(formObj:NgForm){
     this.objElement.push( {
            "-maxOccurs":formObj.value.max,
            "-minOccurs":formObj.value.min,
            "-name":formObj.value.paramName,
            "-type":formObj.value.type,
            "xsd:annotation":{
              "xsd:annotation":{"xsd:documentation":formObj.value},
            }

          })
   }


  

}