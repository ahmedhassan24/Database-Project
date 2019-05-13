import { Component, OnInit } from '@angular/core';
import{BackService} from '../services/back.service'

@Component({
  selector: 'app-discounts',
  templateUrl: './discounts.component.html',
  styleUrls: ['./discounts.component.css']
})
export class DiscountsComponent implements OnInit {

  constructor(private backService: BackService) { }



  listOfData = [
  ];

  ngOnInit() {
    this.backService.getDiscount().subscribe(async(res)=>{
      console.log(res)
      this.listOfData=JSON.parse(res).discounts})
  }

}
