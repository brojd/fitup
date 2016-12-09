import TrainersService from './services/trainers-service';
import ClassesService from './services/classes-service';
import GymsService from './services/gyms-service';
import EventsService from './services/events-service';
import AuthService from './services/auth-service';

import LoggedInGuard from './guards/logged-in.guard.js';

import { FuAppComponent } from './components/fu-app/fu-app.component';
import { FuButtonComponent } from './components/fu-button/fu-button.component';
import { FuHeaderComponent } from './components/fu-header/fu-header.component';
import { FuFilterFormComponent } from './components/fu-filter-form/fu-filter-form.component';
import { FuScheduleComponent } from './components/fu-schedule/fu-schedule.component';
import { FuEditorComponent } from './components/fu-editor/fu-editor.component';
import { FuAboutGymComponent } from './components/fu-about-gym/fu-about-gym.component';
import { FuFooterComponent } from './components/fu-footer/fu-footer.component';
import { FuImageComponent } from './components/fu-image/fu-image.component';
import { FuMainComponent } from './components/fu-main/fu-main.component';
import { FuTrainersComponent } from './components/fu-trainers/fu-trainers.component';
import { FuClassesComponent } from './components/fu-classes/fu-classes.component';
import { FuEditFormComponent } from './components/fu-edit-form/fu-edit-form.component';
import { FuDashboardComponent } from './components/fu-dashboard/fu-dashboard.component';
import { FuLoginComponent } from './components/fu-login/fu-login.component';

export { FuAppComponent };
export const CORE_PROVIDERS = [TrainersService, ClassesService, GymsService, EventsService, AuthService, LoggedInGuard];
export const CORE_DECLARATIONS = [FuButtonComponent, FuImageComponent, FuTrainersComponent, FuEditFormComponent,
                                  FuClassesComponent, FuFilterFormComponent, FuAppComponent, FuScheduleComponent,
                                  FuEditorComponent, FuAboutGymComponent, FuHeaderComponent, FuMainComponent,
                                  FuFooterComponent, FuDashboardComponent, FuLoginComponent];

