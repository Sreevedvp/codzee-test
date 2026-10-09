import { Component } from '@angular/core';
import { CounterComponent } from './counter/counter';
import { DisplayComponent } from './display/display';

@Component({
  selector: 'app-root',
  imports: [CounterComponent, DisplayComponent],
  template: `
    <h2>Angular State Management Demo</h2>

    <app-counter></app-counter>

    <hr>

    <app-display></app-display>
  `
})
export class App {}
