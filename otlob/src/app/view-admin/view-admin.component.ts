import { Component, OnInit } from '@angular/core';
import { BackService } from '../services/back.service';

@Component({
  selector: 'app-view-admin',
  templateUrl: './view-admin.component.html',
  styleUrls: ['./view-admin.component.css']
})
export class ViewAdminComponent implements OnInit {

  constructor(private backService: BackService) { }
listOfData=[]
  ngOnInit() {

    this.backService.getAdmins("a").subscribe((res)=>{
      console.log(res)
      this.listOfData= JSON.parse(res).users


    })
  }
  changePass(username):void{

    this.backService.editUser("123123",username).subscribe(async(res)=>{console.log(res)})
  }
  
  delete(id): void{
    this.backService.deleteUser(id).subscribe(async(res)=>{console.log(res)})
  }

}
