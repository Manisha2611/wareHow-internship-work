import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editform',
  templateUrl: './editform.component.html',
  styleUrls: ['./editform.component.css']
})
export class EditformComponent implements OnInit {
newdata:any;
newusers:any;
  constructor() { 
    this.newdata = {fnames:"",lnames:""};
    this.newusers=[];
  }
  updateRowData(data,newdata){
    this.newusers = this.newusers.filter(ele=>{
      if(data.email == newdata.emails){
        data.name = newdata.names;
      }
      return true;
    });
  }
  add(newdata)
  {
    console.log(newdata);
    var obj = {fnames:newdata.fnames,lnames:newdata.lnames,emails:newdata.emails,passwords:newdata.passwords,repasswords:newdata.repasswords,addresss:newdata.addresss};
    this.newusers.push(obj);
    console.log(this.newusers);
  }

  ngOnInit() {
  }

}
