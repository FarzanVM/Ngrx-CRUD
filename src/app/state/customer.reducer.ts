import { createReducer, on } from "@ngrx/store"
import { addCustomer, deleteCustomer, editCustomer, loadCustomerFailure, loadCustomerSuccess, loadUser, selectCustomer } from "./customer.actions"
import { AppState } from "./customer.states"

const initialState:AppState={
    customers:[
        {
            name:"john doe",
            address:"234 X thd",
            phone:"435435345",
            age:48,
            Id:20
        }
    ],
    selectedCustomer:{},
    loading:false,
    loaded:true
}

export const customerReducer = createReducer(initialState,
    // on(loadUser,(state)=> {return {
    //     ...state,
    //     loading:true,
    //     loaded:false
    // }}),
    on(loadCustomerSuccess,(state,payload)=>{
        console.log("load Success",payload)
        return {
            ...state,
            customers:payload.customers
        }
    }),
    // on(loadCustomerFailure,(state,payload)=>{

    // }),
    on(addCustomer,(state,customer)=>{
        return {
            ...state,
            customers:[...state.customers,customer]
        }

    }),
    on(selectCustomer,(state,customer)=>{
        // console.log("seelcted",customer)
        return {
            ...state,
            selectedCustomer:customer
        }
    }),
    on(editCustomer,(state,customer)=>{
        const newCustomers = state.customers.map((item:any)=>{
            if(item.Id==customer.Id){
                return customer
            }
            return item
        })
        return {
            ...state,
            customers:newCustomers
        }

    }),

    on(deleteCustomer,(state,customer)=>{
        const newCustomers = state.customers.filter((item:any)=>{
            return item.Id!=customer.Id
        })
        return {
            ...state,
            customers:newCustomers
        }
    })
)