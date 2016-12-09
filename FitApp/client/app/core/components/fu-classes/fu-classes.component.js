import { Component, EventEmitter, Output, Input } from '@angular/core';
import template from './fu-classes.template.html';
import remove from 'lodash/remove';
import ClassesService from '../../services/classes-service';

@Component({
  selector: 'fu-classes',
  template: template,
  styleUrls: ['./css/components/fu-classes/fu-classes.stylesheet.css'],
})
export class FuClassesComponent {

  @Input() newClasses;
  @Output() onChosen = new EventEmitter();
  @Output() onDeletedClass = new EventEmitter();

  constructor(classesService: ClassesService) {
    this._classesService = classesService;
  }
  deleteClasses(id) {
    this._classesService.deleteClasses(id)
      .subscribe(
        response => {
          if (response.status === 200) {
            remove(this.classes, n => {
              return n._id === id;
            });
            this.onDeletedClass.emit();
          }
        }
      );
  }
  passData(formID, classes) {
    const data = {
      formID: formID,
      classes: classes
    };
    this.onChosen.emit(data);
  }
  addNewClasses(classes) {
    if (classes) {
      this.classes.push(classes);
    }
  }
  ngOnInit() {
    this._classesService.getClasses().subscribe(
      classes => { this.classes = classes; }
    );
  }
  ngOnChanges() {
    this.addNewClasses(this.newClasses);
  }
}
