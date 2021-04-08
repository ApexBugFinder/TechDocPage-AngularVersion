import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-immutable-state',
  templateUrl: './immutable-state.component.html',
  styleUrls: ['./immutable-state.component.scss']
})
export class ImmutableStateComponent implements OnInit {

  myHeading = 'State - Immutable Store';

  constructor() { }

  ngOnInit(): void {
  }

}
