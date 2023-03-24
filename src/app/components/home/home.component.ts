import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

estados:boolean= false;
items:any[]=[];
  constructor(private service:ServicesService) { }

  ngOnInit(): void {

    this.articulos();
    
  }

  articulos(){
  this.service.getpreguntas()
  .subscribe((res:any)=>{
  
    this.items =res.listCard;
    console.log(this.items);
  });
  }

  mostrar(){
    console.log('click');
    this.estados = !this.estados;
    
  }
}
