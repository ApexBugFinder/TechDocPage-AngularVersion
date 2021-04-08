import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggleTopMenu(): void {
    console.log('Toggling Top Menu');
    const topMenuContainer = document.getElementById('top-nav-bar');
    if (topMenuContainer === null) {
      console.log('sorry null');
    } else {
      if (topMenuContainer.classList.contains('hide-nav-bar')) {
      topMenuContainer.classList.remove('hide-nav-bar');
      console.log(topMenuContainer.classList);
      } else {
      topMenuContainer.classList.add('hide-nav-bar');
      console.log(topMenuContainer.classList);
    }
    }



    return;
  }

}
