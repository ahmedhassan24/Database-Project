import { Component, OnInit } from '@angular/core';
import{BackService} from '../services/back.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private backService: BackService,private route: ActivatedRoute) { }
user={};
listOfData = [

];
  ngOnInit() {
  
    
      this.getInfo()
      this.getPrevOrders()
 
  }

  getInfo():void{
    this.backService.getUserInfo().subscribe(async(res)=>{
      console.log(res)
    this.user= JSON.parse(res).user[0]
    console.log(this.user)
    })
  }
  getPrevOrders():void{
    this.backService.getPrevOrder().subscribe(async(res)=>{
      console.log(res)
      this.listOfData=JSON.parse(res).orders
    },(err)=>{
        console.log(err)
      })
  }
}
