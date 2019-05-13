import { Component, OnInit } from '@angular/core';
import{BackService} from '../services/back.service'
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {

  constructor(private backService: BackService,private fb: FormBuilder, private localstorage: LocalStorageService) { }

active:any;
admin= false;
user= false;
staff= false;
selectedRest:any
 x = [];
 restaurantForm= new FormGroup({
  hotline: new FormControl(''),
  Start_at: new FormControl(''),
  End_at: new FormControl(''),
  Cuisine:new FormControl('')
 })

listOfData=[]
  modalOpen(name){
    console.log("HI", this.listOfData[1])
    this.active = true;
   
    console.log("HI2")
for(var i =0;i<this.listOfData.length;i++)
{console.log("HI",i)
  if(name==this.listOfData[i].Rname){
    this.selectedRest=i
    //console.log(JSON.parse(this.listOfData[i]).Hotline)

this.restaurantForm.setValue({hotline:this.listOfData[i].Hotline, Start_at:this.listOfData[i].start_at,
  End_at:this.listOfData[i].end_at, Cuisine: this.listOfData[i].Cuisine})
}}
   
  }
// Modify(): void{
//   this.backService.modifyMenu(this.listOfData[this.selectedRest]).subscribe(async res=>{
//     console.log(res)
//   })
// }
// delete(name): void{
//   for(var i =0;i<this.listOfData.length;i++)
//   {console.log("HI",i)
//     if(name==this.listOfData[i].Rname){
//       this.selectedRest=i
//       //console.log(JSON.parse(this.listOfData[i]).Hotline)
  
//   this.backService.deleteRest(this.listOfData[i].RestId).subscribe(async res=> {
//     console.log(res)
//   })
//   }}
// }
  ngOnInit(): void {
   
    this.x =this.listOfData;
    console.log("HERE");
    this.backService.getlog().subscribe(async(res) => {
      console.log(res,"result");
      this.listOfData=JSON.parse(res).logs
    }
    )

    if(this.localstorage.get("type")=="a")
    this.admin=true;

    if(this.localstorage.get("type")=="u")
    this.user=true;

    if(this.localstorage.get("type")=="s")
    this.staff=true;


  
  }

}
