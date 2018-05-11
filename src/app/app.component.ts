import { Component,Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
	xsdString:string='';
	currentNameSpace='';

  addNewType(currentType:string){
  	//console.log("esto es una prueba y funciono "+currentType);
	  	if(currentType){

  		this.xsdString=currentType;
  	}

  }

  passToXsd(){
 // 	console.log("entre a passToXsd()");
  	return this.xsdString;
  }

 passToEverything(){
 //	console.log("el nameSpace:"+this.currentNameSpace+"se esta compartiendo")
	return this.currentNameSpace;
 }

 addSharedNameSpace(currentNameSpace:string){
		//console.log("el nameSpace:"+currentNameSpace+"se esta compartiendo"+"addSharedNameSpace");
	if(currentNameSpace){
		this.currentNameSpace=currentNameSpace;	
	}
 }

}
