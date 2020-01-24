import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  datas = [];

  add(data) {
    this.datas.push(data.value);
    data.value = '';
  }

  check(data) {
    this.datas.filter(el => {
      return el === data;
    });
  }

  delete(data) {
    this.datas = this.datas.filter(el => {
      return el !== data;
    });
  }

}
