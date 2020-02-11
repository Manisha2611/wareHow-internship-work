import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiServiceService } from '../api-service.service';
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
apiarray:any;
apiobject:any;

  constructor(private http:HttpClient,private apiService:ApiServiceService ) 
  {
  this.data = {};
  // this.users=JSON.parse(localStorage.getItem('passback_users_key'));
  }

  add(data)
  {
    console.log(data);
    var obj = {fname: data.fname, lname:data.lname, email:data.email, password:data.password, repassword:data.repassword, address:data.address};
    this.users.push(obj)
    console.log(this.users);

    // this.http.post('http://localhost:8080/api/forms',obj)
    // .subscribe(res => {
    //   console.log("Done");
    //   this.ngOnInit();
    // })
    this.apiService.postform(data).subscribe(res => {
      alert("New user added");
      this.ngOnInit();
    })

  }

  edit(id,i)
  {
     this.newdata=this.apiarray[i];
     localStorage.setItem('newdata_key',JSON.stringify(this.newdata));
     localStorage.setItem('id_key',id);
    }

 
  
  deleteRowData(id)
  {
    // this.users = this.users.filter(ele =>{
    //   return ele !== data;
    // });
    this.apiService.deleteform(id).subscribe(res=>{
      alert("users successfully deleted")
      this.ngOnInit();
    })
  }


  ngOnInit() 
  {
  //   this.http.get("http://localhost:8080/api/forms").subscribe(data=>{
  //   console.log(data);
  //   this.apiobject = data;
  //   console.log(this.apiobject);
  //   this.apiarray = this.apiobject.data;
  //   console.log(this.apiarray);
  // });

  this.apiService.getform().subscribe(data=>{
    console.log(data);
    this.apiobject = data;
    console.log(this.apiobject);
    this.apiarray = this.apiobject.data;
    console.log(this.apiarray);
  });

    if(this.users==null)
    {
      this.users=[];
    }
    
  }

}
