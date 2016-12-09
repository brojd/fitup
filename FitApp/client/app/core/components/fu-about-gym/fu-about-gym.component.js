import { Component } from '@angular/core';
import template from './fu-about-gym.template.html';
import validate from 'validate.js';
import compact from 'lodash/remove';
import GymsService from '../../services/gyms-service';

@Component({
  selector: 'fu-about-gym',
  template: template,
  styleUrls: ['./css/components/fu-about-gym/fu-about-gym.stylesheet.css'],
})
export class FuAboutGymComponent {
  constructor(gymsService: GymsService) {
    this._gymsService = gymsService;
    this.currentGym = { address: {} };
    this.saveSuccess = 2;
  }
  isValidURL(urlToCheck) {
    if (urlToCheck === '') {
      return false;
    } else if (validate({ website: urlToCheck }, { website: { url: true } }) === undefined &&
      (urlToCheck !== undefined)) {
      return true;
    }
    return false;
  }
  isValidPrice(price, minValue, maxValue) {
    let nbToCheck = Number(price);
    if (nbToCheck >= minValue && nbToCheck <= maxValue) {
      return true;
    }
    return false;
  }
  addPrice() {
    this.currentGym.pricing.push({ name: 'Enter name', price: 1 });
  }
  addPhotoURL() {
    this.currentGym.photo_urls.push('Enter photo URL');
  }
  deletePrice(indexOfElem) {
    delete this.currentGym.pricing[indexOfElem];
    this.currentGym.pricing = compact(this.currentGym.pricing);
  }
  deletePhotoURL(indexOfElem) {
    delete this.currentGym.photo_urls[indexOfElem];
    this.currentGym.photo_urls = compact(this.currentGym.photo_urls);
  }
  trackBy(index) {
    return index;
  }
  editGym(gymToEdit) {
    let gymToSend = gymToEdit;
    gymToSend.photo_urls = compact(gymToSend.photo_urls);
    gymToSend.pricing = compact(gymToSend.pricing);
    delete gymToSend._id;
    this._gymsService.putGym(gymToSend).subscribe(
      response => { this.saveSuccess = 1; console.log(response); },
      error => { this.saveSuccess = 0; console.log(error); }
    );
  }
  ngOnInit() {
    this._gymsService.getGym().subscribe(
      gym => { this.currentGym = gym; }
    );
  }
}

