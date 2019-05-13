import { Component, OnInit } from '@angular/core';
import { BackService } from '../services/back.service';

import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  constructor(private backservice: BackService) { }
  listOfData = [


  ];
  active = false;
  selectedRest: any
  restaurantForm = new FormGroup({
    OrderId: new FormControl(''),
    Status: new FormControl(''),

  })
  modalOpen(name) {
    console.log("HI", this.listOfData[1])
    this.active = true;

    console.log("HI2")
    for (var i = 0; i < this.listOfData.length; i++) {
      console.log("HI", i)
      if (name == this.listOfData[i].Rname) {
        this.selectedRest = i
        //console.log(JSON.parse(this.listOfData[i]).Hotline)

        this.restaurantForm.setValue({
          OrderId: this.listOfData[i].OrderId, Status: this.listOfData[i].Status,
        })
      }
    }
  }
  modify():void{
    this.backservice.updateOrder(this.restaurantForm.get("Status").value,this.listOfData[this.selectedRest].OrderId).subscribe(res=>{
      console.log(res)
      this.backservice.getOrders().subscribe(res => {
        this.listOfData = JSON.parse(res).restaurants
        console.log(res)
      })
    })

  }
  delete(id):void{console.log(id,"IIDDD")
    this.backservice.deleteOrder(id).subscribe(res=>{console.log(res)})
    this.backservice.getOrders().subscribe(res => {
      this.listOfData = JSON.parse(res).restaurants
      console.log(res)
    })

  }
  ngOnInit() {

    this.backservice.getOrders().subscribe(res => {
      this.listOfData = JSON.parse(res).restaurants
      console.log(res)
    })
  }

}
