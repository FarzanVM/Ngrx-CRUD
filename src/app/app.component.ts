import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerListComponent } from "./customer-list/customer-list.component";
import { CustomerEditComponent } from "./customer-edit/customer-edit.component";

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [CustomerAddComponent, CustomerListComponent, CustomerEditComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'CRUD-App';
}
