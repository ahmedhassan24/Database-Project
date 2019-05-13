import { Component, OnInit } from '@angular/core';
import { NzMenuModule } from 'ng-zorro-antd';
import{BackService} from '../services/back.service'
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(
    private backService: BackService) { }


  listOfData = [
    // {
    //   key: '1',
    //   name: 'John Brown',
    //   age: 32,
    //   address: 'New York No. 1 Lake Park'
    // },
    // {
    //   key: '2',
    //   name: 'Jim Green',
    //   age: 42,
    //   address: 'London No. 1 Lake Park'
    // },
    // {
    //   key: '3',
    //   name: 'Joe Black',
    //   age: 32,
    //   address: 'Sidney No. 1 Lake Park'
    // }
  ];

  list = [
    // {
    //   key: '1',
    //   name: 'John Brown',
    //   age: 32,
    //   address: 'New York No. 1 Lake Park'
    // },
    // {
    //   key: '2',
    //   name: 'Jim Green',
    //   age: 42,
    //   address: 'London No. 1 Lake Park'
    // },
    // {
    //   key: '3',
    //   name: 'Joe Black',
    //   age: 32,
    //   address: 'Sidney No. 1 Lake Park'
    // }
  ];
  isCollapsed = false;

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }
  ngOnInit() : void 
  {
    this.getStaff();
    this.getRestaurant();
    
  }


  getStaff(): void
  {
    this.backService.getAdmins("s").subscribe(async(res)=>{
      console.log(res)
      this.listOfData=JSON.parse(res).users})
  }

  getRestaurant(): void
  {
    this.backService.getRestaurants().subscribe(async(res)=>{this.list=JSON.parse(res).rests})
    // this.list=JSON.parse(res).rests
  }

 

  changePass(username):void{
    this.backService.editUser("123123",username).subscribe(async(res)=>{console.log(res)})
  }
  
  delete(id): void{
    this.backService.deleteUser(id).subscribe(async(res)=>{console.log(res)})
  }
}
