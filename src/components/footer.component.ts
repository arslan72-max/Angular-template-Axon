import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="app-footer">
      <div class="footer-container">
        <p>&copy; 2025 Axon Platform. All rights reserved.</p>
        <div class="footer-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Support</a>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .app-footer {
      background: rgba(15, 32, 39, 0.95);
      border-top: 1px solid rgba(0, 212, 170, 0.2);
      color: rgba(255, 255, 255, 0.75);
      font-family: 'Inter', sans-serif;
      font-size: 14px;
      padding: 24px 0;
      text-align: center;
    }

    .footer-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 24px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
    }

    .footer-links {
      display: flex;
      gap: 20px;
    }

    .footer-links a {
      color: #00d4aa;
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .footer-links a:hover {
      color: #00b4d8;
    }

    @media (max-width: 768px) {
      .footer-container {
        flex-direction: column;
        gap: 12px;
      }
    }
  `]
})
export class FooterComponent {}
