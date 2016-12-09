import { FuDashboardComponent } from './components/fu-dashboard/fu-dashboard.component';
import { FuLoginComponent } from './components/fu-login/fu-login.component';
import { FuEditorComponent } from './components/fu-editor/fu-editor.component';
import { FuEditFormComponent } from './components/fu-edit-form/fu-edit-form.component';
import { FuAboutGymComponent } from './components/fu-about-gym/fu-about-gym.component';
import { FuScheduleComponent } from './components/fu-schedule/fu-schedule.component';
import LoggedInGuard from './guards/logged-in.guard.js';

export const routes = [
  {
    path: '',
    component: FuDashboardComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'login',
    component: FuLoginComponent
  },
  {
    path: 'trainers',
    component: FuEditorComponent,
    data: { listID: 1 },
    canActivate: [LoggedInGuard]
  },
  {
    path: 'addTrainer',
    component: FuEditFormComponent,
    data: { addTrainer: true, addClasses: false },
    canActivate: [LoggedInGuard]
  },
  {
    path: 'classes',
    component: FuEditorComponent,
    data: { listID: 2 },
    canActivate: [LoggedInGuard]
  },
  {
    path: 'addClasses',
    component: FuEditFormComponent,
    data: { addTrainer: false, addClasses: true },
    canActivate: [LoggedInGuard]
  },
  {
    path: 'editGym',
    component: FuAboutGymComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'schedule',
    component: FuScheduleComponent,
    canActivate: [LoggedInGuard]
  }
];
