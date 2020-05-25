import { Component, OnInit } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  // send(){
  //   this.http.post('http://127.0.0.1:3001/post', {}).subscribe(data =>{
  //     console.log(data);
  //   })
  // }
  send(){
    this.http.post('http://127.0.0.1:3001/post', {}).subscribe({
      next(value){
        console.log('value',value);

      },
      error(error){
        console.log('error',error);



      },
      complete(){
        console.log('success');

      }
    })
  }

}
