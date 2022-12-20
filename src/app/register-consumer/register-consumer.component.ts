import { Component } from '@angular/core';
import { RegisterConsumer } from '../registerConsumer';
import { ConsumerService } from '../consumer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-consumer',
  templateUrl: './register-consumer.component.html',
  styleUrls: ['./register-consumer.component.css']
})
export class RegisterConsumerComponent {
         
        registerConsumer : RegisterConsumer =  new RegisterConsumer() ;
        constructor( private  consumerService : ConsumerService ,
        private router : Router ){}

        ngOnInit() : void{

        }

        saveConsumer() {
          this.consumerService.registerConsumer(this.registerConsumer).subscribe(
            data =>{
              console.log(data);
            } ,
            error => console.log(error)  ) ;
        }

        
          goToConsumerList(){
                      this.router.navigate(['/consumers']) ;
          }


        onSubmit(){

        }
         

}
