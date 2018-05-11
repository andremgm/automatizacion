import { Component, OnInit,Input } from '@angular/core';
import {objClass} from '../ObjClass';

@Component({
  selector: 'app-wsdl',
  templateUrl: './wsdl.component.html',
  styleUrls: ['./wsdl.component.css']
})
export class WsdlComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() operationNames:[string];
 



}
