import { Component, OnInit,Input,OnChanges,Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import {objClass} from '../ObjClass';

@Component({
  selector: 'app-xsd',
  templateUrl: './xsd.component.html',
  styleUrls: ['./xsd.component.css']
})
export class XsdComponent implements OnInit,OnChanges {

  serviceName:string="";
  typeArray:string[]=['--'];
  jsonSchema:string='';
  i:number=0;
  @Input() currentType:string;
  @Input() nameSpace:string;
  @Output() messageName:EventEmiiter<string> = new EventEmitter<string>();
  

  objComplexType:objClass["objComplexType"]=[{
      "-name":'default',
        "xsd:sequence":{
          "xsd:element":[{
            "-maxOccurs":0,
            "-minOccurs":0,
            "-name":'default',
            "-type":'default',
            "xsd:annotation":{
              "xsd:annotation":{"xsd:documentation":'default'},
            }

          }]

        }
    }];
      

    objReference:objClass['objReference']=[{
      '-name':'default',
      '-type':'default'
    }]

   objElement :objClass["objElement"]=[{
      "-maxOccurs":0,
      "-minOccurs":0,
      "-name":'default',
      "-type":'default',
      "xsd:annotation":{
        "xsd:annotation":{"xsd:documentation":'default'},
      }
    }];


   schema:objClass["schemaXsd"] ;

  constructor() { }

  ngOnInit() {

    
  }

  ngOnChanges() {
 // console.log("valor "+this.currentType+" entre al componente xsd");
  //console.log("valor "+this.nameSpace +" entre al componente xsd");
       if (this.currentType) {
        this.typeArray.push(this.currentType);
      }
    }

  getCurrentOperationName(newOperationName:HTMLInputElement){
    this.serviceName=newOperationName.value;
    this.messageName.emit(this.serviceName);
      
    this.objReference.push({
       "-name": this.serviceName,
        "-type": this.serviceName + "Type"
    });

    this.i=0;

  }

   buildComplexType(formObj:NgForm){
     this.objElement.push( {
            "-maxOccurs":formObj.value['max'+this.i],
            "-minOccurs":formObj.value['min'+this.i],
            "-name":formObj.value['paramName'+this.i],
            "-type":formObj.value['type'+this.i],
            "xsd:annotation":{
              "xsd:annotation":{
                "xsd:documentation":formObj.value['documentation'+this.i]
              },
            },

          })
      this.i++;
   }

   displayCompleteJson(){


    if(this.objComplexType){ 

       this.schema=   { 'shema':{ "-xmlns:xsd":"http://www.w3.org/2001/XMLSchema",
       "-targetNamespace": "http://www.banorte.com/ws/esb/"+this.nameSpace,
       "-xmlns:tns": "http://www.banorte.com/ws/esb/"+this.nameSpace,
       "xsd:include":{"-schemeLocation":"--Liga Pendiente--"},
       "xsd:complexType":this.objComplexType
     },
     "xsd:element":this.objReference

   };


     this.jsonSchema = JSON.stringify(this.schema);
      //this.jsonSchema = JSON.stringify(this.objElement);
    }
  }
  cleanObj(){

   
      
    this.objElement= [{
            "-maxOccurs":0,
            "-minOccurs":0,
            "-name":"default",
            "-type":"default",
            "xsd:annotation":{
              "xsd:annotation":{"xsd:documentation":"default"},
            }

          }];

 
  }


  commitElements(){
        if(this.objElement){ 

            this.objComplexType.push({  
              "-name":this.serviceName+'Type',
              "xsd:sequence":{
              "xsd:element":this.objElement
           }
      })
  }
  }
}