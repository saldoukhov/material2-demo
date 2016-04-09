import {Component} from 'angular2/core';

@Component({
  selector: 'radio-demo',
  template: require('./radio-demo.html'),
  styles: [ require('./radio-demo.css') ],
})
export class RadioDemo {
  isDisabled: boolean = false;
  favoriteSeason: string = 'Autumn';
  seasonOptions = [
    'Winter',
    'Spring',
    'Summer',
    'Autumn',
  ];
}
