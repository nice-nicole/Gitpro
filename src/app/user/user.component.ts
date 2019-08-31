import { Component, OnInit } from '@angular/core';
// import { HttpClient} from '@angular/common/http';
import { User } from '../user';
// import {environment} from '../../environments/environment';
import { UserRequestService } from '../user-http/user-request.service';
import { RepoRequestService } from '../repo-http/repo-request.service';
import { Repository } from '../repository';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  // users:User[];
  user:User;
  repos:Repository[];

  constructor( private userService:UserRequestService, private repoService:RepoRequestService) { 
    // this.user= new User("","","",0);
  }


  ngOnInit() {
    this.userService.userRequest()
    this.repoService.repoRequest()
    // this.user= this.userService.user
    this.user= this.userService.user
   
    this.repos= this.repoService.repos;
    console.log(this.repos)
  }

}
