import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedIn: boolean;
  private userNmae: string;

  constructor() { this.isLoggedIn=false; }

  login(username: string, password: string) {
    this.isLoggedIn=true;
    this.userNmae=username;
    return of(this.isLoggedIn);
  }

  isUserLoggedIn(): boolean {
    return this.isLoggedIn;
  }

  isAdminUser(): boolean {
    if (this.userNmae == 'Admin') {
      return true;
    }
    return false;
  }

  logoutUser(): void {
    this.isLoggedIn = false;
  }
}
