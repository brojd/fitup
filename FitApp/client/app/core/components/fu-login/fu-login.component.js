import { Component } from '@angular/core';
import { Router } from '@angular/router';
import template from './fu-login.template.html';
import AuthService from '../../services/auth-service';

@Component({
  selector: 'login',
  template: template,
  styleUrls: ['./css/components/fu-login/fu-login.stylesheet.css'],
})
export class FuLoginComponent {
  constructor(authService: AuthService, router: Router) {
    this._authService = authService;
    this._router = router;
    this.loginFailed = false;
  }

  doLogin(email, password) {
    this._authService.login(email, password).subscribe(
      (result) => {
        if (result) {
          this._router.navigate(['']);
        }
      },
      () => { this.loginFailed = true; });
  }
}
