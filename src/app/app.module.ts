import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

/*
 * Platform and Environment providers/directives/pipes
 */
import { environment } from 'environments/environment';
import { ROUTES } from './app.routes';
// App is our top level component
import { AppComponent } from './app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { AppService } from './app.service';
import { FullPageService } from './full-page';
import { APP_DIRECTIVES } from './directives';
import { AboutComponent } from './about';
import { ContactComponent } from './contact';
import { CursorComponent, CursorService } from './cursor';
import { HomeComponent } from './home';
import { NavComponent, NavService } from './nav';
import { TopNavComponent } from './top-nav';
import { NoContentComponent } from './no-content';
import { ProjectsComponent, DeckBuilderComponent, MuskokaComponent,
  SmartComponent, SparkComponent, TempostormComponent } from './projects';
import { ServicesComponent, APIComponent, DesignComponent,
  HostingComponent, SecurityComponent, SEOComponent,
  WebsiteComponent } from './services';
import { PivotComponent, PivotService } from './pivot';
import { ScrollComponent, ScrollService } from './scroll';
import { TouchComponent, TouchService } from './touch';


import '../styles/styles.scss';


// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  AppService,
  FullPageService,
  CursorService,
  NavService, 
  PivotService,
  ScrollService,
  TouchService
];

const APP_DECLARATIONS = [
  AboutComponent,
  ContactComponent,
  CursorComponent,
  HomeComponent,
  NavComponent,
  TopNavComponent,
  NoContentComponent,
  ProjectsComponent,
  DeckBuilderComponent,
  MuskokaComponent,
  SmartComponent,
  SparkComponent,
  TempostormComponent,
  ServicesComponent,
  APIComponent,
  DesignComponent,
  HostingComponent,
  SecurityComponent,
  SEOComponent,
  WebsiteComponent,
  PivotComponent,
  ScrollComponent,
  TouchComponent,
  ...APP_DIRECTIVES
]

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    ...APP_DECLARATIONS
  ],
  /**
   * Import Angular's modules.
   */
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, {
      useHash: Boolean(history.pushState) === false,
      preloadingStrategy: PreloadAllModules
    }),

    AngularFontAwesomeModule

    /**
     * This section will import the `DevModuleModule` only in certain build types.
     * When the module is not imported it will get tree shaked.
     * This is a simple example, a big app should probably implement some logic
     */
    //...environment.showDevModule ? [ DevModuleModule ] : [],
  ],
  /**
   * Expose our Services and Providers into Angular's dependency injection.
   */
  providers: [
    environment.ENV_PROVIDERS,
    APP_PROVIDERS
  ]
})
export class AppModule {}
