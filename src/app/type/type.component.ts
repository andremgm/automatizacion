import { Component, OnInit,Output,EventEmitter,ElementRef,OnChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import {objClass} from '../ObjClass';
import * as convert from 'xml-js';




@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit {


	namespace:string='';
	i:number=0;
	convertor:any;	
	currentType:string;
	namesList:[string]=['--'];
	isDisabeled:boolean=true;
	isDate:boolean=false;
	hasValue:string;
	@Output() typeList:EventEmitter<string> = new EventEmitter<string>();

	@Output() sharedNameSpace:EventEmitter<string> = new EventEmitter< string>();

	objSimpleType:objClass["objSimpleType"]=
	 [{
    "_attributes":{'name':'default'},
    'xsd:restriction':{"_attributes":{ 
      'base':'default'}
    },
        'xsd:minLength':{"_attributes":{
          'value':0  },
          },
        'xsd:maxLenght':{"_attributes":{
          'value':0
      }
    }
  }]

	objSimpleTypeDate:objClass['objSimpleTypeDate']=[{
      "_attributes":{'name':'default'},
      'xsd:restriction':{"_attributes":{
        'base':'default'
      }
    }
      
  }]
			
	objSimpleTypeNumber=
	[{
		"_attributes":{'name':'default'},
		'xsd:restriction':{"_attributes":{ 
			'base':'default'}},
				'xsd:minInclusive':{"_attributes":{
					'value':0	},
					},
				'xsd:maxInclusive':{"_attributes":{
					'value':0
			}
		}
	}]

	schema;
	jsonSchema:string;
		
  
  constructor(){

  }

  ngOnInit(){

  }
  inputNameSpaceEmpty(namespace:HTMLInputElement){
  	if((namespace.value===null)||(namespace.value=='')){

  		this.isDisabeled=true;

  	}else{
  		this.isDisabeled=false;
  	}

  }

	getCurrentNamespace(newNamespace:HTMLInputElement){
		this.namespace= newNamespace.value;
		this.sharedNameSpace.emit(this.namespace);
		
	}

	createSimpleTypeList(form:NgForm){

			if(!form.untouched){

			
			
			if(!form.value['date'+this.i]){

				if(form.value['number'+this.i]){ 
					
				
					this.objSimpleTypeNumber.push({
						"_attributes":{'name': "NumeroDG" +form.value['nameType' + this.i]},
						'xsd:restriction':{"_attributes":{ 
						'base':'xsd:integer'}},
						'xsd:minInclusive':{"_attributes":{
							'value':form.value['min' + this.i]
							},
						},
						'xsd:maxInclusive':{"_attributes":{
							'value':form.value['max' + this.i]
							}
						} 
					})
					this.namesList.push("this:NumeroDG"+form.value['nameType'+this.i]);
			}
			else{
				if(form.value['min'+this.i]>0){ 
					this.objSimpleType.push({
						"_attributes":{'name': "CadenaLG" +form.value['nameType' + this.i]},
						'xsd:restriction':{"_attributes":{ 
						'base':'xsd:string'}},
						'xsd:minLength':{"_attributes":{
							'value':form.value['min' + this.i]
							},
						},
						'xsd:maxLenght':{"_attributes":{
							'value':form.value['max' + this.i]
							}
						} 
					})
					this.namesList.push("this:CademaLG"+form.value['nameType'+this.i]);
				}
				else{

						this.objSimpleType.push({	
						"_attributes":{'name': "CadenaLG" +form.value['nameType' + this.i]+'O'},
						'xsd:restriction':{"_attributes":{ 
						'base':'xsd:string'}},
						'xsd:minLength':{"_attributes":{
							'value':form.value['min' + this.i]
							},
						},
						'xsd:maxLenght':{"_attributes":{
							'value':form.value['max' + this.i]
							}
						} 
					});
							this.namesList.push("this:CadenaLG"+form.value['nameType'+this.i]+'O');
				}
			}
		}
		else{
		
			this.objSimpleTypeDate.push({
			"_attributes":{'name': "fechaHora"},
			'xsd:restriction':{"_attributes":{
				'base':'xsd:dateTime'
			}
		}			
	});
				this.namesList.push('fechaHora');
		}
		this.typeList.emit(this.namesList[this.i+1]);
		this.i++;
	}
			


		
	}

	displayCompleteJson(/*cambio:json2xml*/){

		this.schema={ "schema":{"_attributes":{
			"xmlns:xsd":  "http://www.w3.org/2001/XMLSchema",
    		"targetNamespace": "http://www.banorte.com/ws/esb/"+this.namespace ,
    		"xmlns:tns":  "http://www.banorte.com/ws/esb/"+this.namespace},
    		"xsd:simpleType":this.objSimpleType,
    		'xsd:simpleTypeDate': this.objSimpleTypeDate,
    		'xsd:simpleTypeNumber':this.objSimpleTypeNumber
				}
			};
		
		
		
	
	
	
		
			var options = {compact: true, ignoreComment: true, spaces: 4};
			var result = convert.js2xml(this.schema, options);
			console.log(result);

			this.jsonSchema = result;
	


	}


	
}
