import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { API2_URL } from '../../../config';
import handleError from './handle-error';
import AuthService from './auth-service';

@Injectable()
export default class EventsService {
  constructor(http: Http, authService: AuthService) {
    this._http = http;
    this._authService = authService;
  }
  getEvents() {
    return this._http
      .get(`${API2_URL}/api/admin/gymEvents?gymId=${this._authService.getGymId()}&access_token=${this._authService.getAuthToken()}`)
      .map(res => res.json())
      .catch(handleError);
  }
  postEvent(event) {
    return this._http
      .post(`${API2_URL}/api/admin/gymEvents?gymId=${this._authService.getGymId()}&access_token=${this._authService.getAuthToken()}`, event)
      .map(res => res.json())
      .catch(handleError);
  }
  putEvent(event) {
    return this._http
      .put(`${API2_URL}/api/admin/events/${event.id}?gymId=${this._authService.getGymId()}&access_token=${this._authService.getAuthToken()}`, event)
      .map(res => res.json())
      .catch(handleError);
  }
  deleteEvent(id) {
    return this._http
      .delete(`${API2_URL}/api/admin/events/${id}?access_token=${this._authService.getAuthToken()}`)
      .map(res => res)
      .catch(handleError);
  }
}
