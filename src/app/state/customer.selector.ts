import { createSelector } from "@ngrx/store";
import { AppState } from "./customer.states";

export const appState = (state:AppState)=>state
export const customerSelecter = (state:AppState)=>state.customers

export const customerListLength= createSelector(customerSelecter,(state:any)=>{
    return state.customers.length
})

export const selectedCustomer = createSelector(appState,(state:AppState)=>{
    return state.customers.selectedCustomer
})