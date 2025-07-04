import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

export interface Account {
  id: number;
  username: string;
  email: string;
  password: string;
  age: number;
  address: string;
  gender: string;
  date_of_birth: string;
  login_count: number;
  phone_number: string;
  country: string;
  role: string;
  created_at: string;
  status: string;
  followers: number[];
  following: number[];
}

export interface LoginResponse {
  success: boolean;
  message: string;
  user?: Account;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private accounts: Account[] = [];

  constructor(private http: HttpClient) {
    this.loadAccounts();
  }

  private loadAccounts(): void {
    this.http.get<Account[]>('assets/accounts.json').pipe(
      catchError(error => {
        console.error('Error loading accounts:', error);
        return of([]);
      })
    ).subscribe(accounts => {
      this.accounts = accounts;
    });
  }

  login(email: string, password: string): Observable<LoginResponse> {
    // Find user by email
    const user = this.accounts.find(account => 
      account.email.toLowerCase() === email.toLowerCase()
    );

    if (!user) {
      return of({
        success: false,
        message: 'User not found with this email address'
      });
    }

    // Check password
    if (user.password !== password) {
      return of({
        success: false,
        message: 'Invalid password'
      });
    }

    // Check if account is active
    if (user.status !== 'active') {
      return of({
        success: false,
        message: `Account is ${user.status}. Please contact support.`
      });
    }

    // Successful login - increment login count
    user.login_count += 1;

    return of({
      success: true,
      message: 'Login successful',
      user: user
    });
  }

  getUserByEmail(email: string): Account | undefined {
    return this.accounts.find(account => 
      account.email.toLowerCase() === email.toLowerCase()
    );
  }

  getAllAccounts(): Account[] {
    return this.accounts;
  }

  getAccountsByRole(role: string): Account[] {
    return this.accounts.filter(account => account.role === role);
  }

  getActiveAccounts(): Account[] {
    return this.accounts.filter(account => account.status === 'active');
  }
}