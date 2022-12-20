import { Component, OnInit } from '@angular/core';
import { Address } from '../address';
import { AddressService } from '../address.service';


@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit{

      addresses ?: Address[] ;

      constructor ( private addressService : AddressService){

      }

       ngOnInit(): void {

 this.getAddress() ;
  }

 private  getAddress() {
      this.addressService.getAddressList().subscribe( data => {
      this.addresses = data
    }
      )
  }


  }



