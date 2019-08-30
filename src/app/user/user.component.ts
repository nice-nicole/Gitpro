import { Component, OnInit } from '@angular/core';
// import { HttpClient} from '@angular/common/http';
import { User } from '../user';
// import {environment} from '../../environments/environment';
import { UserRequestService } from '../user-http/user-request.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  // users:User[];
  user:User;

  constructor( private userService:UserRequestService) { 
    // this.user= new User("","","",0);
  }
  search(username:string){
    
  }

  ngOnInit() {
    this.userService.userRequest()
    // this.user= this.userService.user
    this.user= this.userService.user
  }

}
