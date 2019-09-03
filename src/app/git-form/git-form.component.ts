import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-git-form',
  templateUrl: './git-form.component.html',
  styleUrls: ['./git-form.component.css']
})
export class GitFormComponent implements OnInit {


  goToUrl(username){
    this.router.navigate(['/user',username]);
  }

  constructor(private router:Router) { }

  ngOnInit() {
  }

}
