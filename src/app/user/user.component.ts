import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UserRequestService } from '../user-http/user-request.service';
import { RepoRequestService } from '../repo-http/repo-request.service';
import { Repository } from '../repository';
import { Location } from '@angular/common'


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  // users:User[];
  user: User;
  repos: Repository[];

  constructor(private userService: UserRequestService, private repoService: RepoRequestService, private route: ActivatedRoute) {
    // this.user= new User("","","",0);
  
  }

  ngOnInit() {
    let username = this.route.snapshot.paramMap.get('username');
    this.userService.userRequest(username)
    this.repoService.repoRequest(username);
  
    this.user = this.userService.user
    this.repos = this.repoService.repos;
  }


}
