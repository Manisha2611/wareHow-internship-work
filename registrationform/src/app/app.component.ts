import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'registrationform';
data:any;
users:any;
constructor(){
  this.data = {fname:"",lname:""};
  this.users=[];
}
  add(data)
  {
    console.log(data);
    var obj = {fname:data.fname,lname:data.lname,email:data.email,password:data.password,repassword:data.repassword,address:data.address};
    this.users.push(obj);
    console.log(this.users);
  }
  deleteRowData(data){
    this.users = this.users.filter(ele =>{
      return ele !== data;
    });
  }
  
}

  
  
  
  
