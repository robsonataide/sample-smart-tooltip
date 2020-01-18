import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  myList = [
    'A short text',
    'A normal text',
    'A sample that have a text very very very large'
  ]
}
