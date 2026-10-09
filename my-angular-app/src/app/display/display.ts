import { Component, inject } from '@angular/core';
import { StateService } from '../state.service';

@Component({
  selector: 'app-display',
  standalone: true,
  template: `
    <h3>Display Component</h3>

    <p>Shared Count: {{ state.count() }}</p>
    <p>Shared Message: {{ state.message() }}</p>

    <input
      #messageInput
      type="text"
      placeholder="Enter message"
    />

    <button (click)="state.updateMessage(messageInput.value)">
      Update Message
    </button>

    <button (click)="state.reset()">Reset State</button>
  `
})
export class DisplayComponent {
  state = inject(StateService);

  reset() {
    this.state.reset();
  }
}
