import { Component, inject } from '@angular/core';
import { StateService } from '../state.service';

@Component({
  selector: 'app-counter',
  standalone: true,
  template: `
    <h3>Counter Component</h3>

    <p>Count: {{ state.count() }}</p>

    <button (click)="state.increment()">Increment</button>
    <button (click)="state.decrement()">Decrement</button>
  `
})
export class CounterComponent {
  state = inject(StateService);

  increment() {
    this.state.increment();
  }

  decrement() {
    this.state.decrement();
  }
}
