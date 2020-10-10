import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  setUserSession(id: string): void {
    localStorage.setItem('@shopi-admin-lojistaId', id);
  }

  getUserInfos(): string {
    const sellerId = localStorage.getItem('@shopi-admin-lojistaId');
    if (!sellerId) {
      this.router.navigate(['login']);
    }
    return sellerId;
  }
}
