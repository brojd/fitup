import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { API2_URL } from '../../../config';

@Injectable()
export default class AuthService {

  constructor(http: Http) {
    this.loggedIn = !!localStorage.getItem('auth_token');
    this._http = http;
  }

  login(email, password) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this._http
      .post(
        `${API2_URL}/api/admin/gyms/login`,
        JSON.stringify({ email, password }),
        { headers }
      )
      .map(res => res.json())
      .map((res) => {
        localStorage.setItem('auth_token', res.token);
        localStorage.setItem('gymId', res.userId);
        this.loggedIn = true;
        return res;
      });
  }

  logout() {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('gymId');
    this.loggedIn = false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }

  getGymId() {
    return localStorage.getItem('gymId');
  }

  getAuthToken() {
    return localStorage.getItem('auth_token');
  }
}
