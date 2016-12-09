import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { API2_URL } from '../../../config';
import handleError from './handle-error';
import AuthService from './auth-service';

@Injectable()
export default class ClassesService {
  constructor(http: Http, authService: AuthService) {
    this._http = http;
    this._authService = authService;
  }
  getAllClasses() {
    return this._http.get(`${API2_URL}/api/admin/classes?access_token=${this._authService.getAuthToken()}`)
      .map(res => res.json()).catch(handleError);
  }
  getClasses() {
    return this._http
      .get(`${API2_URL}/api/admin/gymClasses?gymId=${this._authService.getGymId()}&access_token=${this._authService.getAuthToken()}`)
      .map(res => res.json())
      .catch(handleError);
  }
  getClassesInstance(id) {
    return this._http
      .get(`${API2_URL}/api/admin/gymClasses/${id}?gymId=${this._authService.getGymId()}&access_token=${this._authService.getAuthToken()}`)
      .map(res => res.json())
      .catch(handleError);
  }
  deleteClasses(id) {
    if (confirm('Do you want to delete classes?')) {
      return this._http
        .delete(`${API2_URL}/api/admin/classes/${id}?access_token=${this._authService.getAuthToken()}`)
        .map(res => res)
        .catch(handleError);
    }
    return Observable.empty();
  }
  putClasses(classes) {
    return this._http
      .put(`${API2_URL}/api/admin/classes/${classes._id}?gymId=${this._authService.getGymId()}&access_token=${this._authService.getAuthToken()}`, classes)
      .map(res => res.json())
      .catch(handleError);
  }
  postClasses(classes) {
    return this._http
      .post(`${API2_URL}/api/admin/gymClasses?gymId=${this._authService.getGymId()}&access_token=${this._authService.getAuthToken()}`, classes)
      .map(res => res.json())
      .catch(handleError);
  }
  getSpecialties() {
    return this._http
      .get(`${API2_URL}/api/admin/gymClasses?gymId=${this._authService.getGymId()}&access_token=${this._authService.getAuthToken()}`)
      .map(
      classes => {
        let newArray = [];
        classes.json().forEach((i) => { newArray.push(i['name']); });
        return newArray;
      },
      error => console.log(error),
    ).catch(handleError);
  }
}

