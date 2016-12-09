import { Component, Inject } from '@angular/core'; // eslint-disable-line no-unused-vars
import { TranslateService } from 'ng2-translate/ng2-translate';
import { translation } from '../../../i18n/en';
import template from './fu-app.template.html';

@Component({
  selector: 'fu-app',
  template: template,
  styleUrls: ['./css/components/fu-app/fu-app.stylesheet.css']
})
export class FuAppComponent {

  constructor(@Inject('ENVIRONMENT') environment, translate: TranslateService) {
    this.environment = environment;

    translate.setTranslation('en', translation);
    translate.setDefaultLang('en');
    translate.use('en');
  }
}
