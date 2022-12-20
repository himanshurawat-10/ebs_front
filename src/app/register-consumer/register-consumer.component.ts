import { Component } from '@angular/core';
import { RegisterConsumer } from '../registerConsumer';
import { ConsumerService } from '../consumer.service';
import { Router } from '@angular/router';
import { Address } from '../address';
import { AddressService } from '../address.service';

@Component({
  selector: 'app-register-consumer',
  templateUrl: './register-consumer.component.html',
  styleUrls: ['./register-consumer.component.css']
})
export class RegisterConsumerComponent {
         
       a : Address = new Address() ;

       constructor(private addressService : AddressService ,
         private router : Router
       ){}

        ngOnInit() : void{

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
