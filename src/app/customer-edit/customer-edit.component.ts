import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectedCustomer } from '../state/customer.selector';
import { AppState } from '../state/customer.states';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { editCustomer } from '../state/customer.actions';

@Component({
  selector: 'app-customer-edit',
  standalone:true,
  imports: [ReactiveFormsModule],
  templateUrl: './customer-edit.component.html',
  styleUrl: './customer-edit.component.scss'
})
export class CustomerEditComponent implements OnInit{

  constructor(private store:Store<AppState>){}
  customerForm =new FormGroup({
    name:new FormControl<string>("",Validators.required),
    address:new FormControl<string>("",Validators.required),
    phone:new FormControl<string>("",Validators.required),
    Id:new FormControl<number>(0,Validators.required)

  })
  ngOnInit(): void {
    this.store.select(selectedCustomer).subscribe(currentCustomer=>{
      if(currentCustomer)
      this.customerForm.patchValue({
        name:currentCustomer.name,
        phone:currentCustomer.phone,
        address:currentCustomer.address,
        Id:currentCustomer.Id
      })
    })
  }
  editCustomer(){
    this.store.dispatch(editCustomer(this.customerForm.value))
    this.customerForm.reset()
  }

}
