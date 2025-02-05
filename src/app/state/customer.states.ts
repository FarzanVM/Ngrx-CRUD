import { Customer } from "../models/customer.model";

export interface AppState{
    customers:any;
    selectedCustomer:Customer;
    loading:boolean;
    loaded:boolean;
}