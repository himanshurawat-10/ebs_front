import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Address } from '../address';
import { AddressService } from '../address.service';

@Component({
  selector: 'app-update-address',
  templateUrl: './update-address.component.html',
  styleUrls: ['./update-address.component.css']
})
export class UpdateAddressComponent  implements OnInit {
     
      id !: number
           a : Address = new Address() ;
      
       constructor( private addressService : AddressService ,
       private route : ActivatedRoute ,
       private router : Router
       ) {  }


  ngOnInit(): void {
     this.id = this.route.snapshot.params['id']
     this.addressService.getAddresssById(this.id).subscribe(
      data => { this. a = data ;}
       
     )
  }
 
 saveAddress(){
      this.addressService.addAddress(this.a).subscribe(data => {
        console.log(data)
        this.goToAddressList() ;
      },
        error => console.log(error)
      )
     }

    goToAddressList(){
        this.router.navigate(['/addresses'])
      }


    onSubmit(){
               console.log(this.a) ;
               this.saveAddress() ;
        }

}

