import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from './api/apiservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'drinksApi';

  cockTails:any=[]

  constructor(private api:ApiserviceService){}


  ngOnInit(): void {
    this.api.allDrinks().subscribe((result:any)=>{
      console.log(result.drinks);
      this.cockTails=result.drinks
      
    })
  }
}
