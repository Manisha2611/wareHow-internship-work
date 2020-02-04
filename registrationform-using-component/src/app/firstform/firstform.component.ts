import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-firstform',
  templateUrl: './firstform.component.html',
  styleUrls: ['./firstform.component.css']
})

export class FirstformComponent implements OnInit 
{  
 
data:any;
users:any;
i:any;
newdata:any;

  constructor() 
  {
  this.data = {};
  this.users=JSON.parse(localStorage.getItem('passback_users_key'));
  }

  add(data)
  {
    console.log(data);
    var obj = {fname: data.fname, lname:data.lname, email:data.email, password:data.password, repassword:data.repassword,gender:data.gender, address:data.address};
    this.users.push(obj)
    console.log(this.users);
  }

  edit(i:any)
  {
    console.log(i);
    this.i = i; 
    this.newdata=this.users[i];
    localStorage.setItem('newdata_key',JSON.stringify(this.newdata));
    localStorage.setItem('users_key',JSON.stringify(this.users));
    localStorage.setItem('i_key',i);
    }

 
  
  deleteRowData(data)
  {
    this.users = this.users.filter(ele =>{
      return ele !== data;
    });
  }

  ngOnInit() 
  {
    if(this.users==null)
    {
      this.users=[];
    }
    
  }

}
