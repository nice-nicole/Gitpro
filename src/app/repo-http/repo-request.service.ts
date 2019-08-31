import { Injectable } from '@angular/core';
import { Repository } from '../repository';
import { HttpClient } from '@angular/common/http';
// import { resolve } from 'path';
// import { reject } from 'q';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RepoRequestService {

  repos:Repository[];
  
  constructor( private http:HttpClient) { 
    // this.repos=new Repository("","",new Date());
    this.repos=[];
  }
  repoRequest(){
    interface ApiResponse{
      name:string;
      html_url:string;
      created_at:Date;
    }
    let promise= new Promise((resolve, reject)=>{
      this.http.get<ApiResponse>("https://api.github.com/users/nice-nicole/repos?access_token="+environment.key).toPromise().then(response=>{
        
      for(var i in response)
        this.repos.push(response[i])
 
        resolve()
      },
      error=>{
        reject(error)
      })
    })
    return promise
  }
}