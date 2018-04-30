import { Component, OnInit,Output } from '@angular/core';
import { NgForm } from '@angular/forms';
//import * as json2xml from 'json2xml';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit {


	namespace:string='';
	@Output() jsonString:string='';



	 objSimpleType:
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
		} ]=[ {
			'-name':null,
			'xsd:restriction':{
					'-base':null,
					'xsd:minLength':{
						'-value':null
					},
					'xsd:maxLenght':{
						'-value':null
					}
			}}
		];

  schema: { "shema":{
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
		

  constructor() { }

  ngOnInit() {
  }


	getCurrentNamespace(newNamespace:HTMLInputElement){
		this.namespace= newNamespace.value;
		
	}

	createSimpleTypeList(form:NgForm){

		this.objSimpleType.push({
			'-name':form.value.nameType,'xsd:restriction':{
				'-base':form.value.type,'xsd:minLength':{
					'-value':form.value.min},
					'xsd:maxLenght':{
						'-value':form.value.max}
					}
				});
		// this.objTest.push({numero:5,coso:"pollo"});
		//console.log(JSON.stringify(this.objSimpleType));
		//console.log('--------------------------------------------');


		
	}

	displayCompleteJson(/*cambio:json2xml*/){

		this.schema={ "shema":{
			"-xmlns:xsd":  "http://www.w3.org/2001/XMLSchema",
    		"-targetNamespace": "http://www.banorte.com/ws/esb/"+this.namespace ,
    		"-xmlns:tns":  "http://www.banorte.com/ws/esb/"+this.namespace,
    		"xsd:simpleType":this.objSimpleType
	}};
		console.log(JSON.stringify(this.schema));

		this.jsonString = JSON.stringify(this.schema);
	
		//console.log(cambio.json2xml(this.schema));


	}

	getNumberOrString(number:boolean){



	}

}
