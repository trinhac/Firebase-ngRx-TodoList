import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ToDoList_Firebase';

  constructor(private router: Router){}
  ngOnInit(): void {}

  navigateTo(url:string){
    this.router.navigate([url])
  }
}
