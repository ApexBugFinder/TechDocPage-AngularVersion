import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-redux-pattern',
  templateUrl: './redux-pattern.component.html',
  styleUrls: ['./redux-pattern.component.scss']
})
export class ReduxPatternComponent implements OnInit {
  myHeading = 'Redux Pattern';
  constructor() { }

  ngOnInit(): void {
  }

}
