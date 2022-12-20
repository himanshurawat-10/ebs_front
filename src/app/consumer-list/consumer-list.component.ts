import { Component, OnInit } from '@angular/core';
import { Consumer } from '../consumer';
import { ConsumerService } from '../consumer.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@Component({
  selector: 'app-consumer-list',
  templateUrl: './consumer-list.component.html',
  styleUrls: ['./consumer-list.component.css']
})
export class ConsumerListComponent implements OnInit{

  consumers ?: Consumer[] ;

  constructor( private consumerService : ConsumerService  ){} 

  ngOnInit(): void {
      // this.consumers = [
      //   {
      //   "id" : 1,
      //   "name" : "raman",
      //   "age" : 100
      // },

      //  {
      //   "id" : 2,
      //   "name" : "naman",
      //   "age" : 200
      // }
      // ]

 this.getConsumers() ;
  }

  private getConsumers(){
    this.consumerService.getConsumerList().subscribe( data => {
      this.consumers = data
    }
    )
  }

}
