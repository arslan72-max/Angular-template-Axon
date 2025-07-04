import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService, LoginResponse } from '../services/auth.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <section class="form-section">
      <h1>Connect to Your Axon Account</h1>
      
      <!-- Login Status Messages -->
      <div *ngIf="loginMessage" class="message" [ngClass]="loginSuccess ? 'success' : 'error'">
        {{ loginMessage }}
      </div>

      <!-- User Profile Display (shown after successful login) -->
      <div *ngIf="loggedInUser" class="user-profile">
        <h2>Welcome, {{ loggedInUser.username }}!</h2>
        <div class="user-details">
          <p><strong>Email:</strong> {{ loggedInUser.email }}</p>
          <p><strong>Role:</strong> {{ loggedInUser.role }}</p>
          <p><strong>Country:</strong> {{ loggedInUser.country }}</p>
          <p><strong>Login Count:</strong> {{ loggedInUser.login_count }}</p>
          <p><strong>Status:</strong> {{ loggedInUser.status }}</p>
        </div>
        <button type="button" class="btn btn-secondary" (click)="logout()">Logout</button>
      </div>

      <!-- Login Form (hidden after successful login) -->
      <form *ngIf="!loggedInUser" class="form-submit" (ngSubmit)="onSubmit()" #loginForm="ngForm">
        <label for="name">Name:</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          [(ngModel)]="name" 
          placeholder="Enter your full name"
          required 
        />

        <label for="login">Email:</label>
        <input 
          type="email" 
          id="login" 
          name="login" 
          [(ngModel)]="email" 
          placeholder="Enter your email address"
          required 
        />

        <label for="password">Password:</label>
        <input 
          type="password" 
          id="password" 
          name="password" 
          [(ngModel)]="password" 
          placeholder="Enter your password"
          required 
        />

        <div class="submission">
          <button 
            type="submit" 
            class="btn btn-submit" 
            [disabled]="isLoading || !loginForm.valid"
          >
            {{ isLoading ? 'Logging in...' : 'Login' }}
          </button>
          <button type="button" class="btn btn-secondary">Sign Up</button>
        </div>
      </form>

      <!-- Demo Accounts Section -->
      <div *ngIf="!loggedInUser" class="demo-section">
        <h3>Demo Accounts</h3>
        <p>Try these demo accounts:</p>
        <div class="demo-accounts">
          <div class="demo-account" *ngFor="let account of demoAccounts">
            <div class="account-info">
              <strong>{{ account.username }}</strong> ({{ account.role }})
              <br>
              <small>{{ account.email }}</small>
            </div>
            <button 
              type="button" 
              class="btn btn-demo" 
              (click)="fillDemoAccount(account)"
            >
              Use Account
            </button>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .form-section {
      max-width: 600px;
      margin: 40px auto;
      margin-top: 100px;
      padding: 32px 24px;
      background: rgba(0, 212, 170, 0.1);
      border: 1px solid rgba(0, 212, 170, 0.3);
      border-radius: 15px;
      backdrop-filter: blur(12px);
      box-shadow: 0 0 30px rgba(0, 212, 170, 0.3);
      color: white;
      font-family: 'Inter', sans-serif;
    }

    .form-section h1 {
      text-align: center;
      margin-bottom: 24px;
      color: #00d4aa;
    }

    .message {
      padding: 12px;
      border-radius: 8px;
      margin-bottom: 20px;
      text-align: center;
      font-weight: 500;
    }

    .message.success {
      background: rgba(34, 197, 94, 0.2);
      border: 1px solid rgba(34, 197, 94, 0.5);
      color: #22c55e;
    }

    .message.error {
      background: rgba(239, 68, 68, 0.2);
      border: 1px solid rgba(239, 68, 68, 0.5);
      color: #ef4444;
    }

    .user-profile {
      text-align: center;
      padding: 24px;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 12px;
      margin-bottom: 20px;
    }

    .user-profile h2 {
      color: #00d4aa;
      margin-bottom: 16px;
    }

    .user-details {
      text-align: left;
      margin: 20px 0;
    }

    .user-details p {
      margin: 8px 0;
      color: rgba(255, 255, 255, 0.85);
    }

    .form-submit input {
      width: 100%;
      padding: 12px;
      margin-bottom: 16px;
      border: 1px solid rgba(0, 212, 170, 0.3);
      border-radius: 12px;
      background: rgba(255, 255, 255, 0.05);
      color: white;
      font-size: 16px;
    }

    .form-submit input::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }

    .form-submit input:focus {
      outline: none;
      border-color: #00d4aa;
      box-shadow: 0 0 0 2px rgba(0, 212, 170, 0.2);
    }

    label {
      display: block;
      margin-bottom: 4px;
      font-weight: 500;
      color: rgba(255, 255, 255, 0.85);
    }

    .submission {
      display: flex;
      justify-content: center;
      gap: 16px;
      margin-top: 24px;
    }

    .btn {
      padding: 12px 24px;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      font-weight: 600;
      font-size: 16px;
      transition: all 0.3s ease;
    }

    .btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .btn-submit {
      background: linear-gradient(45deg, #00d4aa, #00b4d8);
      color: white;
    }

    .btn-submit:hover:not(:disabled) {
      background: linear-gradient(45deg, #00b4d8, #00a8cc);
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(0, 212, 170, 0.3);
    }

    .btn-secondary {
      background: rgba(255, 255, 255, 0.1);
      color: white;
      border: 1px solid rgba(255, 255, 255, 0.3);
    }

    .btn-secondary:hover {
      background: rgba(255, 255, 255, 0.2);
    }

    .demo-section {
      margin-top: 32px;
      padding: 20px;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 12px;
    }

    .demo-section h3 {
      color: #00d4aa;
      margin-bottom: 12px;
    }

    .demo-accounts {
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin-top: 16px;
    }

    .demo-account {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 8px;
      border: 1px solid rgba(0, 212, 170, 0.2);
    }

    .account-info {
      flex: 1;
    }

    .account-info strong {
      color: #00d4aa;
    }

    .account-info small {
      color: rgba(255, 255, 255, 0.6);
    }

    .btn-demo {
      background: rgba(0, 212, 170, 0.2);
      color: #00d4aa;
      border: 1px solid rgba(0, 212, 170, 0.5);
      padding: 8px 16px;
      font-size: 14px;
    }

    .btn-demo:hover {
      background: rgba(0, 212, 170, 0.3);
    }

    @media (max-width: 768px) {
      .demo-account {
        flex-direction: column;
        gap: 8px;
        text-align: center;
      }

      .submission {
        flex-direction: column;
      }
    }
  `]
})
export class FormComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  isLoading: boolean = false;
  loginMessage: string = '';
  loginSuccess: boolean = false;
  loggedInUser: any = null;
  demoAccounts: any[] = [];

  constructor(private authService: AuthService) {
    // Get some demo accounts for testing
    setTimeout(() => {
      const allAccounts = this.authService.getAllAccounts();
      this.demoAccounts = allAccounts.filter(account => account.status === 'active').slice(0, 3);
    }, 1000);
  }

  onSubmit() {
    if (!this.email || !this.password) {
      this.showMessage('Please fill in all required fields', false);
      return;
    }

    this.isLoading = true;
    this.loginMessage = '';

    this.authService.login(this.email, this.password).subscribe({
      next: (response: LoginResponse) => {
        this.isLoading = false;
        this.showMessage(response.message, response.success);
        
        if (response.success && response.user) {
          this.loggedInUser = response.user;
          // Clear form
          this.clearForm();
        }
      },
      error: (error) => {
        this.isLoading = false;
        this.showMessage('An error occurred during login', false);
        console.error('Login error:', error);
      }
    });
  }

  fillDemoAccount(account: any) {
    this.email = account.email;
    this.password = account.password;
    this.name = account.username;
  }

  logout() {
    this.loggedInUser = null;
    this.loginMessage = '';
    this.clearForm();
  }

  private clearForm() {
    this.name = '';
    this.email = '';
    this.password = '';
  }

  private showMessage(message: string, success: boolean) {
    this.loginMessage = message;
    this.loginSuccess = success;
    
    // Clear message after 5 seconds
    setTimeout(() => {
      this.loginMessage = '';
    }, 5000);
  }
}