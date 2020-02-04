import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'registrationform';
  isDisplay=false;

  toggleDisplay(i:any)
  {
    this.isDisplay = !this.isDisplay;
    console.log(i);
    this.i = i; 
    this.newdata=this.users[i];
  }

data:any;
users:any;
i:any;
newdata:any;

constructor()
{
  this.data = {fname:"",lname:""};
  this.users=[];
}
  add(data)
  {
    console.log(data);
    var obj = {fname: data.fname, lname:data.lname, email:data.email, password:data.password, repassword:data.repassword,gender:data.gender, address:data.address};
    this.users.push(obj);
    console.log(this.users);
  }

  updateData(newdata)
  {
    // this.newdata = {fname: newdata.fname, lname : newdata.lname, email : newdata.email, password : newdata.password, repassword : newdata.repassword, address : newdata.address};
    // this.users[this.i].push(this.newdata);
    this.toggleDisplay(this.i);
  } 
  
  deleteRowData(data)
  {
    this.users = this.users.filter(ele =>{
      return ele !== data;
    });
  }
  


  
  
  
}

  
  
  
  
