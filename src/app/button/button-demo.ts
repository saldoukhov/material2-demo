import {Component} from 'angular2/core';

@Component({
    selector: 'button-demo',
    template: require('./button-demo.html'),
    styles: [ require('./button-demo.css') ],
})
export class ButtonDemo {
  isDisabled: boolean = false;
  clickCounter: number = 0;
}
