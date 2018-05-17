import { Component, OnInit,Output,EventEmitter,ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import {objClass} from '../ObjClass';
//import * as json2xml from 'json2xml';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit {


	namespace:string='';
	i:number=0;
	currentType:string;
	namesList:[string]=['--'];

	@Output() typeList:EventEmitter<string> = new EventEmitter< string>();

	@Output() sharedNameSpace:EventEmitter<string> = new EventEmitter< string>();
	objSimpleType:objClass['objSimpleType']=
	[{
			'-name':'default',
			'xsd:restriction':{
					'-base':'default',
					'xsd:minLength':{
						'-value':0	},
					'xsd:maxLenght':{
						'-value':0
					}
			}
		} ];

	objSimpleTypeDate:objClass['objSimpleTypeDate']=[{
			'-name':'default',
			'xsd:restriction':{
				'-base':'default'
			}
		}];

	objSimpleTypeNumber:objClass['objSimpleTypeNumber']=[{
		'-name':'default',
			'xsd:restriction':{
					'-base':'default',
					'xsd:minInclusive':{
						'-value':0	},
					'xsd:maxInclusive':{
						'-value':0
					}
			}
	}]

       

	schema: objClass['schemaType'];
	jsonSchema:string;
		
  constructor() { }

  ngOnInit() {
  }


	getCurrentNamespace(newNamespace:HTMLInputElement){
		this.namespace= newNamespace.value;
		this.sharedNameSpace.emit(this.namespace);
		
	}

	createSimpleTypeList(form:NgForm){


			this.namesList.push(form.value['nameType']);
			if(!form.value['date'+this.i]){

				if(form.value['number'+this.i]){ 

				
					this.objSimpleTypeNumber.push({
						'-name': "NumeroDG" +form.value['nameType' + this.i] ,
						'xsd:restriction':{
						'-base':'xsd:integer',
						'xsd:minInclusive':{
							'-value':form.value['min' + this.i]},
						'xsd:maxInclusive':{
							'-value':form.value['max' + this.i]}
					}
				});

				
			}
			else{
				if(form.value['min'+this.i]>0){ 
					this.objSimpleType.push({
					'-name': "CadenaLG"+form.value['nameType' + this.i]+'O' ,
					'xsd:restriction':{
					'-base':'xsd:string',
					'xsd:minLength':{
						'-value':form.value['min' + this.i]},
					'xsd:maxLenght':{
						'-value':form.value['max' + this.i]}
					}
				});
				}
				else{
					this.objSimpleType.push({
					'-name': "CadenaLG"+form.value['nameType' + this.i] ,
					'xsd:restriction':{
					'-base':'xsd:string',
					'xsd:minLength':{
						'-value':form.value['min' + this.i]},
					'xsd:maxLenght':{
						'-value':form.value['max' + this.i]}
					}
				});
				}
			}
		}
		else{
			this.objSimpleTypeDate.push({
				'-name':"FechaHora",
				'xsd:restriction':{
					'-base':"xsd:dateTime"
				}
			});
		}
			
		
		
		this.typeList.emit(form.value['nameType' + this.i]);


		this.i++;

		
	}

	displayCompleteJson(/*cambio:json2xml*/){

		this.schema={ "schema":{
			"-xmlns:xsd":  "http://www.w3.org/2001/XMLSchema",
    		"-targetNamespace": "http://www.banorte.com/ws/esb/"+this.namespace ,
    		"-xmlns:tns":  "http://www.banorte.com/ws/esb/"+this.namespace,
    		"xsd:simpleType":this.objSimpleType,
    		'xsd:simpleTypeDate': this.objSimpleTypeDate,
    		'xsd:simpleTypeNumber':this.objSimpleTypeNumber
				}
			};
		
		this.jsonSchema = JSON.stringify(this.schema);

		//console.log(cambio.json2xml(this.schema));
	}
}
