import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { API2_URL } from '../../../config';
import AuthService from './auth-service';
import handleError from './handle-error';

@Injectable()
export default class ClassesService {
  constructor(http: Http, authService: AuthService) {
    this._http = http;
    this._authService = authService;
  }
  getAllGyms() {
    return this._http
      .get(`${API2_URL}/api/admin/gyms?access_token=${this._authService.getAuthToken()}`)
      .map(res => res.json())
      .catch(handleError);
  }
  getGym() {
    return this._http
      .get(`${API2_URL}/api/admin/gyms/${this._authService.getGymId()}?access_token=${this._authService.getAuthToken()}`)
      .map(res => res.json())
      .catch(handleError);
  }
  putGym(gym) {
    return this._http
      .put(`${API2_URL}/api/admin/gyms/${this._authService.getGymId()}?access_token=${this._authService.getAuthToken()}`, gym)
      .map(res => res.json() )
      .catch(handleError);
  }
}
