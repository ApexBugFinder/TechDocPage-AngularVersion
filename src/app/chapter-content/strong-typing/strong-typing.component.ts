import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-strong-typing',
  templateUrl: './strong-typing.component.html',
  styleUrls: ['./strong-typing.component.scss']
})
export class StrongTypingComponent implements OnInit {

  myHeading = 'Strong Typing - Feature State Management';
  constructor() { }

  ngOnInit(): void {
  }

}
