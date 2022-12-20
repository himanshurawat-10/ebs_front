import { Component, OnInit } from '@angular/core';
import { Address } from '../address';
import { AddressService } from '../address.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit{

      addresses ?: Address[] ;


      constructor ( private addressService : AddressService , private router : Router){

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

       updateAddress(id ?: number){
              this.router.navigate(['update-address' , id ]) ;
       }


  }



