import { Component, Input } from '@angular/core';
import template from './fu-button.template.html';
import classNames from 'classnames';

@Component({
  selector: 'fu-button',
  template: template,
  styleUrls: ['./css/components/fu-button/fu-button.stylesheet.css'],
})
export class FuButtonComponent {

  @Input() title;
  @Input() value;
  @Input() type;
  @Input() class;
  @Input() disabled = false;
  @Input() autofocus = false;
  @Input() text = '';

  constructor() {}

  ngOnInit() {
    this.class = classNames('uk-button', 'fu-button', this.class);
  }
}
