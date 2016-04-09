/*
 * Angular 2 decorators and services
 */
import {Component} from 'angular2/core';
import {RouteConfig, Router} from 'angular2/router';

import {Home} from './home';
import {AppState} from './app.service';
import {RouterActive} from './router-active';
import {ButtonDemo} from './button/button-demo';
import {InputDemo} from './input/input-demo';
import {ToolbarDemo} from './toolbar/toolbar-demo';
import {CardDemo} from './card/card-demo';
import {RadioDemo} from './radio/radio-demo';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  pipes: [ ],
  providers: [ ],
  directives: [ RouterActive ],
  styles: [`
    h1 {
      font-family: Arial, Helvetica, sans-serif
    }
    nav ul {
      display: inline;
      list-style-type: none;
      margin: 0;
      padding: 0;
      width: 60px;
    }
    nav li {
      display: inline;
    }
    nav li.active {
      background-color: lightgray;
    }
  `],
  template: `
    <header>
      <nav>
        <h1>Hello {{ name }}</h1>
        <ul>
          <li router-active>
            <a [routerLink]=" ['Index'] ">Index</a>
          </li>
          <li router-active>
            <a [routerLink]=" ['Home'] ">Home</a>
          </li>
          <li router-active>
            <a [routerLink]=" ['ButtonDemo'] ">Button</a>
          </li>
          <li router-active>
            <a [routerLink]=" ['RadioDemo'] ">Radio</a>
          </li>
          <li router-active>
            <a [routerLink]=" ['InputDemo'] ">Input</a>
          </li>
          <li router-active>
            <a [routerLink]=" ['ToolbarDemo'] ">Toolbar</a>
          </li>
          <li router-active>
            <a [routerLink]=" ['CardDemo'] ">Card</a>
          </li>
        </ul>
      </nav>
    </header>

    <main>
      <router-outlet></router-outlet>
    </main>
  `
})
@RouteConfig([
  { path: '/',      name: 'Index', component: Home, useAsDefault: true },
  { path: '/home',  name: 'Home',  component: Home },
  { path: '/button-demo',  name: 'ButtonDemo',  component: ButtonDemo },
  { path: '/input-demo',  name: 'InputDemo',  component: InputDemo },
  { path: '/toolbar-demo',  name: 'ToolbarDemo',  component: ToolbarDemo },
  { path: '/card-demo',  name: 'CardDemo',  component: CardDemo },
  { path: '/radio-demo',  name: 'RadioDemo',  component: RadioDemo },
])
export class App {
  angularclassLogo = 'assets/img/angularclass-avatar.png';
  name = 'Angular 2 Webpack Starter';
  url = 'https://twitter.com/AngularClass';

  constructor(public appState: AppState) {}

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
