import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { API2_URL } from '../../../config';
import handleError from './handle-error';
import AuthService from './auth-service';

@Injectable()
export default class TrainersService {
  constructor(http: Http, authService: AuthService) {
    this._http = http;
    this._authService = authService;
  }
  getTrainers() {
    return this._http.get(`${API2_URL}/api/admin/gymTrainers?gymId=${this._authService.getGymId()}&access_token=${this._authService.getAuthToken()}`)
      .map(res => res.json())
      .catch(handleError);
  }
  getTrainerInstance(id) {
    return this._http
      .get(`${API2_URL}/api/admin/gymTrainers/${id}?gymId=${this._authService.getGymId()}&access_token=${this._authService.getAuthToken()}`)
      .map(res => res.json())
      .catch(handleError);
  }
  deleteTrainer(id) {
    if (confirm('Do you want to delete trainer?')) {
      return this._http
        .delete(`${API2_URL}/api/admin/trainers/${id}?access_token=${this._authService.getAuthToken()}`)
        .catch(handleError);
    }
    return Observable.empty().catch(handleError);
  }
  putTrainer(trainer) {
    return this._http
      .put(`${API2_URL}/api/admin/trainers/${trainer._id}?gymId=${this._authService.getGymId()}&access_token=${this._authService.getAuthToken()}`, trainer)
      .map(res => res.json())
      .catch(handleError);
  }
  postTrainer(trainer) {
    return this._http
      .post(`${API2_URL}/api/admin/gymTrainers?access_token=${this._authService.getAuthToken()}`, trainer)
      .map(res => res.json())
      .catch(handleError);
  }
}
