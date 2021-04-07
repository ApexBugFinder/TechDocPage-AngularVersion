import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { SideMenuComponent } from './side-menu/side-menu.component';



@NgModule({
  declarations: [
    TopMenuComponent,
    SideMenuComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MenusModule { }
