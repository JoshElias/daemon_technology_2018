import { Routes } from '@angular/router';

import { AboutComponent } from './about';
import { ContactComponent } from './contact';
import { HomeComponent } from './home';
import { NavComponent } from './nav';
import { NoContentComponent } from './no-content';
import { ProjectsComponent, DeckBuilderComponent, MuskokaComponent,
  SmartComponent, SparkComponent, TempostormComponent } from './projects';
import { ServicesComponent, APIComponent, DesignComponent,
  HostingComponent, SecurityComponent, SEOComponent,
  WebsiteComponent } from './services';


export const ROUTES: Routes = [
  { path: '',         component: HomeComponent },
  { path: 'about',     component: AboutComponent }, 
  { path: 'contact',  component: ContactComponent },
  { path: 'home',     component: HomeComponent },
  { path: 'nav',       component: NavComponent },
  { path: 'projects', component: ProjectsComponent },
    { path: 'projects/deck-builder', component: DeckBuilderComponent },
    { path: 'projects/muskoka', component: MuskokaComponent },
    { path: 'projects/smart', component: SmartComponent },
    { path: 'projects/spark', component: SparkComponent },
    { path: 'projects/tempostorm', component: TempostormComponent },
  { path: 'services', component: ServicesComponent },
    { path: 'services/api',      component: APIComponent },
    { path: 'services/design',   component: DesignComponent },
    { path: 'services/hosting',  component: HostingComponent },
    { path: 'services/security', component: SecurityComponent },
    { path: 'services/seo',      component: SEOComponent },
    { path: 'services/website',  component: WebsiteComponent },
  { path: '**',       component: NoContentComponent },
];
