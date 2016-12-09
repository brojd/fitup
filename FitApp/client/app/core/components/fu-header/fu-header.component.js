import { Component } from '@angular/core';
import template from './fu-header.template.html';
import GymsService from '../../services/gyms-service';
import AuthService from '../../services/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'fu-header',
  template: template,
  styleUrls: ['./css/components/fu-header/fu-header.stylesheet.css'],
})
export class FuHeaderComponent {

  constructor(gymsService: GymsService, authService: AuthService, router: Router) {
    this._gymsService = gymsService;
    this._authService = authService;
    this._router = router;
    this.logoUrl = 'https://s3.postimg.org/clf324bo3/Logomakr_8_M5l3_A.png';
  }
  logOut() {
    this._authService.logout();
    this._router.navigate(['/login']);
  }
  isLoggedIn() {
    return this._authService.isLoggedIn();
  }
  getCurrentGym() {
    if (this.allGyms) {
      let currGym = this.allGyms.find((gym) => gym._id === localStorage.getItem('gymId'));
      return currGym;
    }
  }
  ngOnInit() {
    this._gymsService.getAllGyms().subscribe(
      response => {
        if (response.success !== false) {
          this.allGyms = response;
        }
      }
    );
  }
}
