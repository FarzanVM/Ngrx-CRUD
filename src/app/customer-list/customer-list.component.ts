import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { deleteCustomer, editCustomer, loadUser, selectCustomer } from '../state/customer.actions';
import { CustomerService } from '../customer-service/customer.service';
import { customerListLength, customerSelecter } from '../state/customer.selector';
import { Customer } from '../models/customer.model';

@Component({
  selector: 'app-customer-list',
  standalone:true,
  imports: [],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.scss'
})
export class CustomerListComponent implements OnInit{
  customer_list:any[]=[]

  constructor(private store:Store<any>,private customerservice:CustomerService){}
  
  ngOnInit(): void {
    this.store.dispatch(loadUser())
    this.store.subscribe(state=>{
      // this.customer_list=state.customers.customers
      console.log("State",state)
    })
  
    this.store.select(customerSelecter).subscribe(customers=>{
      this.customer_list=customers.customers
      console.log(this.customer_list,"customer list")
    })
    this.store.select(customerListLength).subscribe(res=>{
      console.log("legnth",res)
    })
    // this.customerservice.getCustomerList().subscribe(res=>{
    //   console.log(res)
    // })
  }
  deleteCustomer(customer:Customer){
    this.store.dispatch(deleteCustomer(customer))
  }
  editCustomer(customer:Customer){
    this.store.dispatch(selectCustomer(customer))
  }

}
