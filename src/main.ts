import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { NavigationComponent } from './components/navigation.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { provideRouter } from '@angular/router';
import { HeroComponent } from './components/hero.component';
import { AboutComponent } from './components/about.component';
import { FormComponent }  from './components/form.component';
import {FooterComponent} from './components/footer.component';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavigationComponent, RouterModule, RouterOutlet, FooterComponent],
  template: `
    <div class="app">
      <app-navigation></app-navigation>
      <main class="content">
        <router-outlet></router-outlet>
      </main>
      <app-footer></app-footer>
    </div>
  `,
  styles: [`
    .app {
      position: relative;
      min-height: 100vh;
      overflow-x: hidden;
    }
    .content {
      padding: 24px;
    }
  `]
})
export class App {}

const routes = [
  { path: '', component: HeroComponent },
  { path: 'about', component: AboutComponent },
  { path: 'profil', component: FormComponent }
];

bootstrapApplication(App, {
  providers: [provideRouter(routes), provideHttpClient(), provideAnimations()]
});