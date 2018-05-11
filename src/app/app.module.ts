import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {Routes,RouterModule} from "@angular/router";
import { WsdlComponent } from './wsdl/wsdl.component';
import { XsdComponent } from './xsd/xsd.component';
import { TypeComponent } from './type/type.component';


const appRoutes:Routes = [
//each route is a JS object
  
  { path:'wsdl' ,  component:WsdlComponent },
  { path:'xsd'  ,  component:XsdComponent } ,
  { path:'type' ,  component:TypeComponent } 
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WsdlComponent,
    XsdComponent,
    TypeComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
