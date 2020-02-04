import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editform',
  templateUrl: './editform.component.html',
  styleUrls: ['./editform.component.css']
})
export class EditformComponent implements OnInit {

  newdata:any;
  users:any;
  i:any;

  constructor(private router:Router) 
  {
    
  }
  ngOnInit() 
  {
    this.newdata=JSON.parse(localStorage.getItem('newdata_key'));
    this.users=JSON.parse(localStorage.getItem('users_key'));
    this.i=localStorage.getItem('i_key');
   
  }
  updateData(newdata)
  {
    this.users[this.i] = this.newdata;
    localStorage.setItem('passback_users_key',JSON.stringify(this.users));
    this.router.navigate(['/firstform']);
  }

}
