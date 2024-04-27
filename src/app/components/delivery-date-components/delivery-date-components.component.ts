import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-delivery-date-components',
  templateUrl: './delivery-date-components.component.html',
  styleUrls: ['./delivery-date-components.component.scss'],
  
})
export class DeliveryDateComponentsComponent implements OnInit {

  formDeliveryDate!:FormGroup;
  picker!:Date;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.createForm()
  }

  createForm(){
    this.formDeliveryDate = this.formBuilder.group({
      date : ['',Validators.required],
      hour : ['',Validators.required]
    })
  }
 
  send(){
    debugger;
  }

}
