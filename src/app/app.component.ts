import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('submit') submit: ElementRef;
  @ViewChild('header') header: ElementRef;

  title = 'AngularProject';
  data = 1;

  name = 'luke';

  addNumber(){
    this.data++;
    console.log(this.header);

  }
  showData(event: any){
    console.log('show Data:', event);

  }
}
