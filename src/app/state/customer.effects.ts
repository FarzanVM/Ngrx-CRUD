import { Inject, Injectable } from "@angular/core";
import {Actions, createEffect, ofType} from '@ngrx/effects';
import { loadCustomerFailure, loadCustomerSuccess, loadUser } from "./customer.actions";
import { CustomerService } from "../customer-service/customer.service";
import { catchError, exhaustMap, map, mergeMap, Observable, of, tap } from "rxjs";

@Injectable()
export class CustomerEffects{

    constructor(private actions$:Actions,private customerService:CustomerService){}

    loadCustomer$ = createEffect(()=>this.actions$.pipe(
            ofType(loadUser),
            mergeMap(() => 
                    this.customerService.getCustomerList().pipe(
                    map((customerlist: any) => loadCustomerSuccess({customers:customerlist})),
                    catchError((error) => of(loadCustomerFailure({ error:"Error has Occured" }))))
            )
        )
    )


}