import { Routes } from '@angular/router';
import { HeroComponent } from './components/hero.component';
import { AboutComponent } from './components/about.component';
import { FormComponent }  from './components/form.component';

export const appRoutes: Routes = [
  { path: '', component: HeroComponent },
  { path: 'about', component: AboutComponent }
  { path: 'form' ,component:FormComponent}
];
