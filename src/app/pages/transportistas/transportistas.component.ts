import { Component } from '@angular/core';
import { Transportistas } from 'src/app/api/models';
import { TransportistasControllerService } from 'src/app/api/services';



@Component({
  selector: 'app-transportistas',
  templateUrl: './transportistas.component.html'
})
export class TransportistasComponent {
  listOfData: Transportistas[] = [];

  constructor(
    private regalosService:TransportistasControllerService
  ){}

  ngOnInit():void{
    this.getData();
  }

  getData():void{
    this.regalosService.find().subscribe(data=>this.listOfData=data);
  }
}
