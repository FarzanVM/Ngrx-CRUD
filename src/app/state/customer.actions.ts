import { createAction, props } from "@ngrx/store";
import { Customer } from "../models/customer.model";

export const loadUser = createAction('[ITEM] LOAD USER')

export const loadCustomerSuccess = createAction('[CUSTOMER] LOAD SUCCESS',props<{customers:Customer[]}>())

export const loadCustomerFailure = createAction('[CUSTOMER] LOAD FAILURE',props<{error:string}>())

export const addCustomer =  createAction('[CUSTOMER} ADD CUSTOMER',props<Customer>())

export const selectCustomer = createAction('[CUSTOMER] SELECT CUSTOMER',props<Customer>())

export const editCustomer =  createAction('[CUSTOMER] EDIT CUSTOMER',props<Customer>())

export const deleteCustomer = createAction('[CUSTOMER] DELETE CUSTOMER',props<Customer>())