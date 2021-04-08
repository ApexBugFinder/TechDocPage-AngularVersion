import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActionsComponent } from './actions/actions.component';
import { CreatingSelectorsComponent } from './creating-selectors/creating-selectors.component';
import { DevtoolsComponent } from './devtools/devtools.component';
import { DispatchingActionsComponent } from './dispatching-actions/dispatching-actions.component';
import { EffectsComponent } from './effects/effects.component';
import { FeatureStateManagementComponent } from './feature-state-management/feature-state-management.component';
import { GettingStartedComponent } from './getting-started/getting-started.component';
import { ImmutableStateComponent } from './immutable-state/immutable-state.component';
import { InitializeStateComponent } from './initialize-state/initialize-state.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { ReducersComponent } from './reducers/reducers.component';
import { ReduxPatternComponent } from './redux-pattern/redux-pattern.component';
import { StrongTypingComponent } from './strong-typing/strong-typing.component';
import { UtilizingFeatureSelectorsComponent } from './utilizing-feature-selectors/utilizing-feature-selectors.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './helpers/shared.module';
import { HeaderComponent } from './header/header.component';
import { MenusModule } from './menus/menus.module';
import { ChapterHeadingComponent } from './chapter-heading/chapter-heading.component';


@NgModule({
  declarations: [
    AppComponent,
    ActionsComponent,
    CreatingSelectorsComponent,
    DevtoolsComponent,
    DispatchingActionsComponent,
    EffectsComponent,
    FeatureStateManagementComponent,
    GettingStartedComponent,
    ImmutableStateComponent,
    InitializeStateComponent,
    IntroductionComponent,
    ReducersComponent,
    ReduxPatternComponent,
    StrongTypingComponent,
    UtilizingFeatureSelectorsComponent,
    HeaderComponent,
    ChapterHeadingComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MenusModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
