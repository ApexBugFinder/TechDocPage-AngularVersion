import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TopMenuComponent,
    SideMenuComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    RouterModule


  ],
  exports: [
    TopMenuComponent,
    SideMenuComponent
  ]
})
export class MenusModule { }
