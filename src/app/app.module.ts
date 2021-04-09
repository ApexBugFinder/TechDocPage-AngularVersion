import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './helpers/shared.module';
import { HeaderComponent } from './header/header.component';
import { MenusModule } from './menus/menus.module';
import { ChapterHeadingComponent } from './chapter-heading/chapter-heading.component';
import { ChapterContentModule } from './chapter-content/chapter-content.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MenusModule,
    ChapterContentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
