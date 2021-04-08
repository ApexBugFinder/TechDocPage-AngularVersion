import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})



export class TopMenuComponent implements OnInit, AfterViewInit {
  @ViewChild('topNavBar') topMenu: ElementRef | undefined;
  constructor() {

  }
  ngAfterViewInit(): void {
    if (this.topMenu != null) {
    this.topMenu.nativeElement.classList.add('hide-nav-bar');
    }
  }

  ngOnInit(): void {
  }

  // toggleTopMenu(): void {
  //   console.log('Toggling Top Menu');
  //   const topMenuContainer = document.getElementById('top-nav-bar');
  //   if (topMenuContainer === null) {
  //     console.log('sorry null');
  //   } else {
  //     if (topMenuContainer.classList.contains('hide-nav-bar')) {
  //     topMenuContainer.classList.remove('hide-nav-bar');
  //     console.log(topMenuContainer.classList);
  //     } else {
  //     topMenuContainer.classList.add('hide-nav-bar');
  //     console.log(topMenuContainer.classList);
  //   }
  //   }

  toggleTopMenu(): void {

    console.log('toggling commencing');
    console.log('top nav bar classes: ', this.topMenu?.nativeElement.classList);
    if (this.topMenu === undefined) {
      console.log('sorry null');
    } else {
      if (this.topMenu.nativeElement.classList.contains('hide-nav-bar')) {
        this.topMenu.nativeElement.classList.remove('hide-nav-bar');
        console.log(this.topMenu.nativeElement.classList);

      } else {
        this.topMenu.nativeElement.classList.add('hide-nav-bar');
        console.log(this.topMenu.nativeElement.classList);
      }
    }
    return;
  }

}
