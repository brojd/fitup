import { Component, Input } from '@angular/core';
import template from './fu-image.template.html';

@Component({
  selector: 'fu-image',
  template: template,
  styleUrls: ['./css/components/fu-image/fu-image.stylesheet.css'],
})
export class FuImageComponent {

  @Input() src = '';
  @Input() class = '';
  @Input() alt = '';
  @Input() width = 100;
  @Input() height = 100;

  constructor() {}
}
