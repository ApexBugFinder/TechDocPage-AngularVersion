import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-devtools',
  templateUrl: './devtools.component.html',
  styleUrls: ['./devtools.component.scss']
})
export class DevtoolsComponent implements OnInit {

  myHeading = 'Dev Tools';

  constructor() { }

  ngOnInit(): void {
  }

}
