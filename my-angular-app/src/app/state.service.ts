import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  count = signal(0);
  message = signal('Initial state');

  increment() {
    this.count.update(value => this.count() + 1);
  }

  decrement() {
    this.count.update(value => this.count() - 1);
  }

  updateMessage(message: string) {
    this.message.set(message);
  }

  reset() {
    this.count.set(0);
    this.message.set('Initial state');
  }
}
