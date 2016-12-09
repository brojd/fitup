import { Component } from '@angular/core';
import template from './fu-schedule.template.html';
import 'dhtmlx-scheduler';
import { Observable } from 'rxjs/Rx';
import ClassesService from '../../services/classes-service';
import TrainersService from '../../services/trainers-service';
import EventsService from '../../services/events-service';
import { COLORS } from './fu-schedule.colors';
import noop from 'lodash/noop';
import uniqBy from 'lodash/uniqBy';

@Component({
  selector: 'fu-schedule',
  template: template,
  styleUrls: ['./css/components/fu-schedule/fu-schedule.stylesheet.css']
})
export class FuScheduleComponent {
  constructor(classesService: ClassesService, trainersService: TrainersService, eventsService: EventsService) {
    this._classesService = classesService;
    this._trainersService = trainersService;
    this._eventsService = eventsService;
    this.events = [];
  }
  configureSchedule() {
    let durationInMinutes = function(event) {
      return (event.end_date - event.start_date) / 60000;
    };
    let saveEvent = (eventObject, isNewEvent) => {
      Observable.forkJoin(
        this._classesService.getClassesInstance(eventObject.typeOfClassesId),
        this._trainersService.getTrainerInstance(eventObject.trainerId)
      ).subscribe(
        (data) => {
          if (data) {
            Object.assign(eventObject, {
              classesName: data[0].name,
              trainerName: `${data[1].name} ${data[1].surname}`,
              duration_in_minutes: durationInMinutes(eventObject),
              color: this.allClassesByName.find((elem) => elem.name === data[0].name).color || '#22A1BC',
              text: ''
            });
            if (isNewEvent) {
              this._eventsService.postEvent(eventObject).subscribe(
                (res) => {
                  console.log(res);
                  scheduler.updateView();
                }
              );
            } else if (!isNewEvent) {
              this._eventsService.putEvent(eventObject).subscribe(
                (res) => {
                  console.log(res);
                  scheduler.updateView();
                }
              );
            }
          }
        }
      );
    };
    scheduler.attachEvent('onEventAdded', (id, event) => {
      let eventsWithSameTrainer = this.events.filter((n) => n.trainerId === event.trainerId);
      let isCollision = false;
      for (let eventToCheck of eventsWithSameTrainer) {
        if (eventToCheck.start_date <= event.end_date && event.start_date <= eventToCheck.end_date) {
          isCollision = true;
        }
      }
      if (!isCollision) {
        saveEvent(event, true);
      } else {
        alert('Trainer is not available at this time');
        scheduler.deleteEvent(id);
      }
    });
    scheduler.attachEvent('onEventChanged', (id, event) => {
      saveEvent(event, false);
    });
    scheduler.attachEvent('onEventDeleted', (id) => {
      this._eventsService.deleteEvent(id).subscribe(() => { scheduler.updateView(); });
    });

    scheduler.config.details_on_create = true;
    scheduler.config.details_on_dblclick = true;
    scheduler.config.event_duration = 60;
    scheduler.config.scroll_hour = new Date().getHours();
    scheduler.templates.event_header = function(start, end, event) {
      return `<b>${event.classesName || 'Type of classes'}</b>`;
    };
    scheduler.templates.event_text = function(start, end, event) {
      return `${scheduler.templates.event_date(start)} - ${scheduler.templates.event_date(end)}
              <i>${event.trainerName || 'Trainer'}</i>`;
    };
    scheduler.config.icons_select = [
      'icon_details',
      'icon_delete'
    ];
  }
  ngOnInit() {
    Observable.forkJoin(
      this._eventsService.getEvents(),
      this._classesService.getClasses(),
      this._trainersService.getTrainers(),
      this._classesService.getAllClasses()
    ).subscribe(
      data => {
        if (data) {
          data[0].forEach((elem) => {
            Object.assign(elem, {
              start_date: new Date(elem.start_date),
              end_date: new Date(elem.end_date)
            });
          });
          this.events = data[0];

          data[1].forEach((elem) => {
            Object.assign(elem, {
              key: elem._id,
              label: elem.name,
            });
          });
          this.classes = data[1];

          data[2].forEach((elem) => {
            Object.assign(elem, {
              key: elem._id,
              label: `${elem.name} ${elem.surname}`
            });
          });
          this.trainers = data[2];

          this.allClassesByName = uniqBy(data[3], (e) => e.name);
          this.allClassesByName.forEach((elem, i) => {
            Object.assign(elem, {
              color: COLORS[i]
            });
          });
        }
      },
      noop,
      () => {
        scheduler.updateCollection('classesOptions', this.classes);
        scheduler.updateCollection('trainersOptions', this.trainers);
        scheduler.clearAll();
        this.configureSchedule();
        scheduler.parse(this.events, 'json');
        scheduler.init('scheduler_here', new Date(), 'week');
      }
    );
  }
  ngOnChange() {
    scheduler.parse(this.events, 'json');
  }
}
