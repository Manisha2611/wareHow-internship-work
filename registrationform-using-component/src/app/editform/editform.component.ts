import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiServiceService } from '../api-service.service';


@Component({
  selector: 'app-editform',
  templateUrl: './editform.component.html',
  styleUrls: ['./editform.component.css']
})
export class EditformComponent implements OnInit {

  newdata:any;
  users:any;
  id:any;

  constructor(private router:Router,private http:HttpClient,private apiService:ApiServiceService) 
  {
    this.newdata = {}
  }
  ngOnInit() 
  {
    this.newdata=JSON.parse(localStorage.getItem('newdata_key'));
    this.id=localStorage.getItem('id_key'); 
  }
  updateData(newdata)
  {
    // localStorage.setItem('passback_users_key',JSON.stringify(this.users));
      
    this.apiService.editform(this.id,newdata).subscribe(res => {
      alert("New user added");
      this.ngOnInit();
    })
    
    this.router.navigate(['/firstform']);
    
  }

}
