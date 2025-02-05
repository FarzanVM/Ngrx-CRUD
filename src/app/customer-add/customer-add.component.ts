import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'
import { Store, StoreModule } from '@ngrx/store';
import { addCustomer } from '../state/customer.actions';

@Component({
  selector: 'app-customer-add',
  standalone:true,
  imports: [ReactiveFormsModule],
  templateUrl: './customer-add.component.html',
  styleUrl: './customer-add.component.scss'
})
export class CustomerAddComponent {

  constructor(private store:Store){}
  customerForm = new FormGroup({
    name:new FormControl<string>("",Validators.required),
    address:new FormControl<string>("",Validators.required),
    phone:new FormControl<string>("",Validators.required),
    Id:new FormControl<number>(0,Validators.required)

  })
  addCustomer(){
    console.log(this.customerForm.value)
    if(this.customerForm.valid){
      this.store.dispatch(addCustomer(this.customerForm.value))
    }
   
  }
}
