import { Component } from '@angular/core';
import template from './fu-editor.template.html';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'fu-editor',
  template: template,
  styleUrls: ['./css/components/fu-editor/fu-editor.stylesheet.css'],
})
export class FuEditorComponent {
  constructor(route: ActivatedRoute) {
    this._route = route;
    this.currentForm = 0;
    this.classesToDelete = 0;
    this.listID = 0;
  }
  setFormID(formID) {
    this.currentForm = formID;
  }
  setCurrentTrainer(trainerObject) {
    this.trainer = trainerObject;
  }
  setCurrentClasses(classesObject) {
    this.classes = classesObject;
  }
  passAddedTrainer(trainerToAdd) {
    this.trainerToAdd = trainerToAdd;
  }
  passAddedClasses(classesToAdd) {
    this.classesToAdd = classesToAdd;
  }
  passToDelete() {
    this.classesToDelete++;
    if (this.classesToDelete === 100) this.classesToDelete = 0;
  }
  ngOnInit() {
    this.listID = this._route.data._value.listID;
  }
}

