import { Component, OnInit } from '@angular/core';
import{BackService} from '../services/back.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private backService: BackService) { }

  ngOnInit() {
    this.backService.getAdmins("e").subscribe(async(res)=>{
      console.log(res)
      //this.listOfData=JSON.parse(res).users}
  }
    )}

}
