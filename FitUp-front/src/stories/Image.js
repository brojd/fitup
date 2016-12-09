import React from 'react';
import { storiesOf} from '@kadira/storybook';
import Image from '../components/Image/Image.component';

storiesOf('Image', module)
  .add('logo', () => (
    <Image src='https://s22.postimg.org/hx1k588kx/Logomakr_4x27d_Q.png' alt='logo' height={58} width={80} />
  ))
  .add('slide image 1', () => (
    <Image src='http://cdn.wallpapersafari.com/42/73/bc4rDB.jpg' alt='slide_image_1' height={600} width={950} />
  ))
  .add('slide image 2', () => (
    <Image src='http://womanhealthsolutions.com/wp-content/uploads/2016/05/fitness-014.jpg' alt='slide_image_2'
           height={600} width={950} />
  ))
  .add('slide image 3', () => (
    <Image src='http://imgview.info/download/20150902/sports-fitness-model-woman-ball-1920x1080.jpg' alt='slide_image_3'
           height={600} width={950} />
  ))
  .add('slide image 4', () => (
    <Image src='http://www.advancefitness.net/wp-content/uploads/2015/11/cover3.jpg' alt='slide_image_4'
           height={600} width={950} />
  ))
  .add('gyms list element', () => (
    <Image src='https://www.thegymgroup.com/fileadmin/uploads/gym/Photos/Gym_Leicester/Leicester14.jpg'
           alt='gym picture' height={200} width={200} className='uk-thumbnail uk-border-rounded' />
  ))
  .add('classes list element', () => (
    <Image src='http://przejrzystapolska.pl/wp-content/uploads/2015/07/zumba-3.jpg'
           alt='gym picture' height={200} width={200} className='uk-thumbnail uk-border-rounded' />
  ))
  .add('trainers list element', () => (
    <Image src='http://trener-personalny.fitness/images/lukasz-gliszczynski-trener-personalny-fitness-51.jpg'
           alt='gym picture' height={200} width={200} className='uk-thumbnail uk-border-rounded' />
  ));
