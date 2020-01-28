import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'registrationform';
  isDisplay=false;
  toggleDisplay(i:any){
    this.isDisplay= !this.isDisplay;
    console.log(i);
    this.i = i; 
    this.newusers[0] = this.users[i];
  }
data:any;
users:any;
newusers:any;
i:any;
constructor(){
  this.data = {fname:"",lname:""};
  this.users=[];
  this.newusers=[];
}
  add(data)
  {
    console.log(data);
    var obj = {fname:data.fname, lname:data.lname, email:data.email, password:data.password, repassword:data.repassword, address:data.address};
    this.users.push(obj);
    console.log(this.users);
  }

  updateData(data)
  {
    console.log(data);
    var obj2 = {fname:data.fname, lname:data.lname, email:data.email, password:data.password, repassword:data.repassword, address:data.address};
    this.newusers.push(obj2);
  
    console.log(this.users);
    console.log(this.newusers);
    console.log(this.i);
    console.log(this.users[this.i].fname);
    console.log(this.newusers[0].fname);
    
    if(this.users[this.i].fname==this.newusers[0].fname)
    {
      this.users[this.i] = this.newusers[0];
    }
    console.log(this.users);
    console.log(this.newusers);
     
    
  }




  deleteRowData(data){
    this.users = this.users.filter(ele =>{
      return ele !== data;
    });
  }
  


  
  
  
}

  
  
  
  
