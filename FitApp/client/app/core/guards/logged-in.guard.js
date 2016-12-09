import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import AuthService from '../services/auth-service';

@Injectable()
export default class LoggedInGuard implements CanActivate {
  constructor(authService: AuthService, router: Router) {
    this._authService = authService;
    this._router = router;
  }

  canActivate() {
    if (this._authService.loggedIn) {
      return true;
    }
    this._router.navigate(['/login']);
    return false;
  }
}
