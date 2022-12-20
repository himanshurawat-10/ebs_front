import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Address } from './address';
import { AddressListComponent } from './address-list/address-list.component';
import { ConsumerListComponent } from './consumer-list/consumer-list.component';
import { RegisterConsumerComponent } from './register-consumer/register-consumer.component';
import { UpdateAddressComponent } from './update-address/update-address.component';

const routes: Routes = [
   { path : 'consumers', component : ConsumerListComponent },
    { path : 'addresses', component : AddressListComponent },
    { path : 'register-consumer', component : RegisterConsumerComponent },
    { path : 'updae-address', component : UpdateAddressComponent },
   { path : ' ', redirectTo  : 'consumers' , pathMatch : 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
