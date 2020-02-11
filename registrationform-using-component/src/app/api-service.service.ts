import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';  
import 'rxjs/add/operator/map';  
import 'rxjs/add/operator/do';

@Injectable({
  providedIn: 'root'
})

export class ApiServiceService {

  constructor( private http: HttpClient) { }

  getform()
  {
    return this.http.get('http://localhost:8080/api/forms')
  }
  postform(data)
  {
    return this.http.post('http://localhost:8080/api/forms',data)
  }
  deleteform(id)
  {
    return this.http.delete('http://localhost:8080/api/forms/'+id)
  }
  editform(id,newdata)
  {
    return this.http.put('http://localhost:8080/api/forms/'+id,newdata)
  }
}