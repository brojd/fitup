import { configure } from '@kadira/storybook';
import 'dhtmlx-scheduler';
import 'dhtmlx-scheduler/codebase/dhtmlxscheduler.css';
import '../public/global_styles/app.global.css';

function loadStories() {
  require('../src/stories/');
}

configure(loadStories, module);
