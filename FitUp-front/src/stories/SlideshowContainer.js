import React from 'react';
import { storiesOf} from '@kadira/storybook';
import SlideshowContainer from '../components/Slideshow/SlideshowContainer.component';

let slides = [
  {
    id: 1,
    imgSrc: 'https://download.fotolia.com/Content/CompImage500/FotoliaComp_92400845_yNUBTJ4Bvpkwv363xe3xHrHZVzRGlrOZ_W95',
    text: 'All fitness classes on one website',
    visible: true
  },
  {
    id: 2,
    imgSrc: 'https://download.fotolia.com/Content/CompImage500/FotoliaComp_97601477_foHvhsXT1YKOADmIBAEEJMBcW1sfZeX5_W95',
    text: 'Filter the schedule easily',
    visible: false
  },
  {
    id: 3,
    imgSrc: 'https://download.fotolia.com/Content/CompImage500/FotoliaComp_88907812_AG4DYlF9BUIYpV7uLELo4CtUKkHQh72i_W95',
    text: 'Review all trainers from Wroclaw',
    visible: false
  },
  {
    id: 4,
    imgSrc: 'https://download.fotolia.com/Content/CompImage500/FotoliaComp_97601519_BOdg5rxcK0FqhBNQ9BGobsg5dlSyYWFa_W95',
    text: 'Save your time',
    visible: false
  }
];

storiesOf('SlideshowContainer', module)
  .add('slideshow container', () => (
    <SlideshowContainer slides={slides}>
    </SlideshowContainer>
  ));
