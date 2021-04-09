import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './helpers/shared.module';
import { HeaderComponent } from './header/header.component';
import { MenusModule } from './menus/menus.module';
import { ChapterHeadingComponent } from './chapter-heading/chapter-heading.component';
import { ChapterContentModule } from './chapter-content/chapter-content.module';
import { environment } from 'src/environments/environment.prod';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule, MenusModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    ChapterContentModule,
   
    
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      name: 'NGRX - THE BASICS Dev Tools',
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
