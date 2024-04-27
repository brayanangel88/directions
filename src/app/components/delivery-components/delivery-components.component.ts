import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-delivery-components',
  templateUrl: './delivery-components.component.html',
  styleUrls: ['./delivery-components.component.scss']
})
export class DeliveryComponentsComponent implements OnInit {
  formDelivery!:FormGroup
  
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.createForm()
  }

  createForm(){
    this.formDelivery = this.formBuilder.group({
      country : ['Colombia',],
      city : ['',Validators.required],
      department : ['',Validators.required]
    })
  }

}
