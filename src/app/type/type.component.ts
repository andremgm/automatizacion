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


		this.objSimpleType.push({
			'-name':form.value['nameType' + this.i] ,'xsd:restriction':{
				'-base':form.value['type' + this.i],'xsd:minLength':{
					'-value':form.value['min' + this.i]},
					'xsd:maxLenght':{
						'-value':form.value['max' + this.i]}
					}
				});

 			
		this.typeList.emit(form.value['nameType' + this.i]);


		this.i++;

		
	}

	displayCompleteJson(/*cambio:json2xml*/){

		this.schema={ "shema":{
			"-xmlns:xsd":  "http://www.w3.org/2001/XMLSchema",
    		"-targetNamespace": "http://www.banorte.com/ws/esb/"+this.namespace ,
    		"-xmlns:tns":  "http://www.banorte.com/ws/esb/"+this.namespace,
    		"xsd:simpleType":this.objSimpleType
	}};
		
		this.jsonSchema = JSON.stringify(this.schema);

		


	
		//console.log(cambio.json2xml(this.schema));


	}



}
