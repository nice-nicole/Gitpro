import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { User } from '../user';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  // users:User[];
  user:User;

  constructor( private http: HttpClient) { }

  ngOnInit() {

    interface ApiResponse{
      login:string;
      name:string;
      avatar_url:string;
      public_repos:number;

    }
    this.http.get<ApiResponse>("https://api.github.com/users/nice-nicole?access_token="+environment.key).subscribe(data=>{
        this.user= new User(data.login, data.name, data.avatar_url,data.public_repos);
        console.log(data)
    })
  }

}
