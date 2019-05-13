import { Component, OnInit } from '@angular/core';
import{BackService} from '../services/back.service'
import { ActivatedRoute } from '@angular/router';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HeaderService } from '../services/header.service';
import { LocalStorageService } from 'angular-2-local-storage';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  active = false;
rest_id: any;
user= false;
admin = false;
staff = false;
  constructor(private route: ActivatedRoute, private backService: BackService,
    private fb: FormBuilder, private header: HeaderService,
  private localstorage: LocalStorageService) { }

value = 0;

  listOfData = [
  
   
  ];
  listofItems=[];
  inviteMentorForm = new FormGroup({
    comment: new FormControl('', [Validators.required]),})
  getMenu(id):void{
    this.backService.getMenu(id).subscribe(async(res)=>{
      console.log(res)
      this.listOfData=JSON.parse(res).item
    console.log(this.listOfData)})


  }
  add(y){
  
    for (var i = 0; i<this.listofItems.length;i++)
    {
      if(this.listofItems[i].itemName==y)
      this.listofItems[i].Quantity+=1
    }
    
  }
  remove(x){
    for (var i = 0; i<this.listofItems.length;i++)
    {
      if(this.listofItems[i].itemName==x)
      this.listofItems[i].Quantity-=1
    }
  }
  addItem(data): void{
    const x = {
      "itemName":data.ItemName,
      "Price":data.Price,
      "Quantity": 1,
      "restId":this.rest_id ,
      "MenuId": data.MenuId,
      "ItemId":data.ItemId,
      "Discount": 0
    }
    if(this.listofItems.length==0){
      this.listofItems.push(x)
    }else{
   for(var i = 0 ; i< this.listofItems.length;i++)
   {
     if(this.listofItems[i].itemName==x.itemName)
     {
    this.listofItems[i].Quantity+=1
     }else{
       this.listofItems.push(x)
     }
   }}

   for(var i =0;i<this.listofItems.length;i++)
   {
        console.log(this.listOfData[i].Price, "Price");
        this.listOfData[i].Discount += (this.listofItems[i].Price);
        console.log(this.listOfData[i].Discount, "Discount");

   }

  }
   

  placeOrder(): void{
    // call endpoint for ordering
    this.backService.insertOrder(this.rest_id).subscribe(async (res) =>{
      console.log(res);
    })
    for (var i =0;i<this.listofItems.length;i++){
    this.backService.insertOrderItem(this.listofItems[i], this.inviteMentorForm.get('comment').value).subscribe(async res => console.log(res))
    }
  }
  
  ngOnInit() {
    if(this.localstorage.get("type")=="a")
    this.admin=true;

    if(this.localstorage.get("type")=="u")
    this.user=true;

    if(this.localstorage.get("type")=="s")
    this.staff=true;


    if(this.localstorage.get("type")=="s"){
      this.header.setStaff()
      this.header.staff.subscribe(user=>{
        this.user=user
        console.log(this.user)
      })
    }
// this.header.staff.subscribe(user=>{
//   this.user=user
//   console.log(this.user)
// })


    this.route.queryParams
    .subscribe(async params => {
      console.log(params,"PARAMS")
      this.rest_id = params.id;
      this.getMenu(this.rest_id)
  })}
  modalOpen(){
    this.active = true;
   
  }
  
}
