import { Component, EventEmitter, Output, Input } from '@angular/core';
import TrainersService from '../../services/trainers-service';
import ClassesService from '../../services/classes-service';
import template from './fu-trainers.template.html';
import remove from 'lodash/remove';

@Component({
  selector: 'fu-trainers',
  template: template,
  styleUrls: ['./css/components/fu-trainers/fu-trainers.stylesheet.css'],
})
export class FuTrainersComponent {

  @Input() newTrainer;
  @Output() onChosen = new EventEmitter();

  constructor(trainersService: TrainersService, classesService: ClassesService) {
    this._trainersService = trainersService;
    this._classesService = classesService;
  }
  passData(formID, trainer) {
    const data = {
      formID: formID,
      trainer: trainer
    };
    this.onChosen.emit(data);
  }
  addNewTrainer(trainer) {
    if (trainer) {
      this.trainers.push(trainer);
    }
  }
  ngOnInit() {
    this._trainersService.getTrainers().subscribe(
      trainers => { this.trainers = trainers; }
    );
    this._classesService.getClasses().subscribe(
      classes => { this.classes = classes; }
    );
    this.deleteTrainer = (id) => {
      this._trainersService.deleteTrainer(id)
        .subscribe(
          response => {
            if (response.status === 200) {
              remove(this.trainers, n => {
                return n._id === id;
              });
            }
          }
        );
    };
  }
  ngOnChanges() {
    this.addNewTrainer(this.newTrainer);
  }
}
