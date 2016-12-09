import { Component, Input, EventEmitter, Output } from '@angular/core';
import template from './fu-edit-form.template.html';
import TrainersService from '../../services/trainers-service';
import ClassesService from '../../services/classes-service';
import validate from 'validate.js';
import { ActivatedRoute } from '@angular/router';
import AuthService from '../../services/auth-service';

@Component({
  selector: 'fu-edit-form',
  template: template,
  styleUrls: ['./css/components/fu-edit-form/fu-edit-form.stylesheet.css']
})
export class FuEditFormComponent {

  @Input() formID;
  @Input() currentTrainer;
  @Input() currentClasses;
  @Input() classesToDelete;
  @Output() onAddTrainer = new EventEmitter();
  @Output() onAddClasses = new EventEmitter();

  constructor(trainersService: TrainersService, classesService: ClassesService, route: ActivatedRoute,
              authService: AuthService) {
    this._route = route;
    this._trainersService = trainersService;
    this._classesService = classesService;
    this.specialties = [];
    this.trainerSaveSuccess = 2;
    this.classesSaveSuccess = 2;
    this._authService = authService;
  }
  editTrainer(trainerToEdit) {
    let trainerToSend = trainerToEdit;
    trainerToSend._id = this.currentTrainer._id;
    this._trainersService.putTrainer(trainerToSend).subscribe(
      response => { this.trainerSaveSuccess = 1; console.log(response); }
    );
  }
  addTrainer(trainer) {
    let trainerToAdd = trainer;
    trainerToAdd.gymId = this._authService.getGymId();
    this._trainersService.postTrainer(trainerToAdd).subscribe(
      response => { this.onAddTrainer.emit(response); this.trainerSaveSuccess = 1; console.log(response); },
      () => { this.trainerSaveSuccess = 0; }
    );
  }
  editClasses(classesToEdit) {
    let classesToSend = classesToEdit;
    classesToSend._id = this.currentClasses._id;
    this._classesService.putClasses(classesToSend).subscribe(
      response => { this.updateSpecialties(); this.classesSaveSuccess = 1; console.log(response); },
      () => { this.classesSaveSuccess = 0; }
    );
  }
  addClasses(classesToAdd) {
    this._classesService.postClasses(classesToAdd).subscribe(
      classes => {
        this.onAddClasses.emit(classes);
        this.updateSpecialties();
        this.classesSaveSuccess = 1;
        console.log(classes);
      },
      () => { this.classesSaveSuccess = 0; }
    );
  }
  updateSpecialties() {
    this._classesService.getSpecialties().subscribe(specialties => { this.specialties = specialties; });
  }
  isValidURL(urlToCheck) {
    if (urlToCheck.value === '') {
      return false;
    } else if (validate({ website: urlToCheck.value }, { website: { url: true } }) === undefined &&
      (urlToCheck.value !== undefined)) {
      return true;
    }
    return false;
  }
  hasProperSize(photoUrl, minResolution, maxResolution) {
    let img = new Image();
    img.src = photoUrl.value;
    if ((img.width / img.height) >= minResolution && (img.width / img.height) <= maxResolution) {
      return true;
    } else if (!photoUrl.value) {
      return true;
    }
    return false;
  }
  ngOnChanges() {
    this.updateSpecialties();
    this.trainerSaveSuccess = 2;
    this.classesSaveSuccess = 2;
  }
  ngOnInit() {
    this.updateSpecialties();
    if (this._route.data._value.addTrainer) {
      this.formID = 2;
    } else if (this._route.data._value.addClasses) {
      this.formID = 4;
    }
  }
}
