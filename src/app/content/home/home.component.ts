import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}



  ngOnInit(): void {
    console.log(this.route.snapshot.params['name']);

    this.route.paramMap.subscribe((paramMap:ParamMap)=>{
      console.log(paramMap.get('name'));

    });

    // this.router.navigateByUrl('/home/1'); //傳入字串
    // this.router.navigate(['home', '1']); //傳入陣列

  }





}
