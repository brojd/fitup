import { Component } from '@angular/core';
import template from './fu-main.template.html';
import AuthService from '../../services/auth-service';

@Component({
  selector: 'fu-main',
  template: template,
  styleUrls: ['./css/components/fu-main/fu-main.stylesheet.css'],
})
export class FuMainComponent {

  constructor(authService: AuthService) {
    this._authService = authService;
  }
  loggedIn() {
    return this._authService.isLoggedIn();
  }
  ngOnInit() {
    scheduler.config.lightbox.sections = [
      { name: 'Type of classes', height: 40, map_to: 'typeOfClassesId', type: 'select',
        options: scheduler.serverList('classesOptions'), default_value: '1' },
      { name: 'Trainer', height: 40, map_to: 'trainerId', type: 'select',
        options: scheduler.serverList('trainersOptions'), default_value: '1' },
      { name: 'time', height: 72, type: 'time', map_to: 'auto' }
    ];
  }
}
