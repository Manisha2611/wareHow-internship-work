import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data:any;
  users:any;
  title = 'Form';
  

constructor(){
  this.data = {fname:""};
  this.users=[];
}
  add(data)
  {
    console.log(data);
  this.users.push(data);
  
  }
}

  
