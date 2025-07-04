import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterModule,NgIf],
  template: `
    <nav class="navbar">
      <div class="nav-container">
        <div class="nav-left">
          <button class="back-btn" (click)="goBack()">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>

        <div class="nav-center">
          <ul class="nav-links">
            <li><a routerLink="/learn" routerLinkActive="active" class="nav-link">Learn</a></li>
            <li><a routerLink="/about" routerLinkActive="active" class="nav-link">About</a></li>
            <li><a routerLink="/download" routerLinkActive="active" class="nav-link">Download</a></li>
            <li><a routerLink="/more" routerLinkActive="active" class="nav-link">More</a></li>
          </ul>
        </div>

        <div class="nav-right">
          <button class="nav-icon" title="Help">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
              <path d="M9.09 9A3 3 0 0 1 12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12V13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              <circle cx="12" cy="17" r="1" fill="currentColor"/>
            </svg>
          </button>

          <div class="dropdown-wrapper" (click)="toggleDropdown()" tabindex="0" (blur)="closeDropdown()">
            <button class="nav-icon" title="Language">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                <path d="M2 12H22M12 2A15.3 15.3 0 0 1 16 12A15.3 15.3 0 0 1 12 22A15.3 15.3 0 0 1 8 12A15.3 15.3 0 0 1 12 2Z" stroke="currentColor" stroke-width="2"/>
              </svg>
            </button>

            <ul *ngIf="dropdownOpen" class="lang-menu">
  <li (click)="selectLanguage('english')">
     English
  </li>
  <li (click)="selectLanguage('french')">
     French
  </li>
  <li (click)="selectLanguage('german')">German
  </li>
</ul>

          </div>

          <button routerLink="/profil" class="nav-icon" title="Profile">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
              <circle cx="12" cy="8" r="3" stroke="currentColor" stroke-width="2"/>
              <path d="M8.21 13.89A4 4 0 0 0 12 16A4 4 0 0 0 15.79 13.89" stroke="currentColor" stroke-width="2"/>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      background: rgba(15, 32, 39, 0.9);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid rgba(0, 212, 170, 0.2);
      z-index: 1000;
    }

    .nav-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 70px;
    }

    .nav-left, .nav-center, .nav-right {
      display: flex;
      align-items: center;
    }

    .nav-center {
      flex: 2;
      justify-content: center;
    }

    .nav-left, .nav-right {
      flex: 1;
      justify-content: space-between;
    }

    .back-btn {
      background: none;
      border: none;
      color: #00d4aa;
      padding: 8px;
      border-radius: 8px;
      transition: 0.3s;
      cursor: pointer;
    }

    .back-btn:hover {
      background: rgba(0, 212, 170, 0.1);
    }

    .nav-links {
      list-style: none;
      display: flex;
      gap: 32px;
      padding: 0;
      margin: 0;
    }

    .nav-link {
      color: white;
      text-decoration: none;
      font-weight: 500;
      font-size: 16px;
      position: relative;
      transition: 0.3s ease;
    }

    .nav-link.active,
    .nav-link.router-link-active,
    .nav-link:hover {
      color: #00d4aa;
    }

    .nav-icon {
      background: none;
      border: 1px solid rgba(0, 212, 170, 0.3);
      color: #00d4aa;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      transition: 0.3s ease;
    }

    .nav-icon:hover {
      background: rgba(0, 212, 170, 0.1);
      transform: scale(1.1);
    }

    .dropdown-wrapper {
      position: relative;
    }

    .lang-menu {
      position: absolute;
      top: 110%;
      right: 0;
      min-width: 160px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(0, 212, 170, 0.3);
      backdrop-filter: blur(12px);
      border-radius: 12px;
      box-shadow: 0 8px 24px rgba(0, 212, 170, 0.2);
      list-style: none;
      padding: 8px 0;
      z-index: 1001;
    }

    .lang-menu li {
      padding: 10px 16px;
      color: white;
      font-weight: 500;
      display: flex;
      align-items: center;
      gap: 10px;
      cursor: pointer;
      transition: background 0.2s;
    }

    .lang-menu li:hover {
      background: rgba(0, 212, 170, 0.1);
      border-radius: 10px;
    }
  `]
})
export class NavigationComponent {
  dropdownOpen = false;

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  closeDropdown() {
    this.dropdownOpen = false;
  }

  selectLanguage(lang: string) {
    console.log(`Language selected: ${lang}`);
    this.dropdownOpen = false;
  }

  goBack() {
    window.history.back();
  }
}
