import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('my-angular-app');
  tabs = ['tab1', 'tab2', 'tab3']

  toggleTab(tab: string) {
    if (tab === 'tab1') {
      console.log('tab one clicked')
    }
    else if (tab === 'tab2') {
      console.log('tab two clicked')
    }
    else if (tab === 'tab3') {
      console.log('tab three clicked')
    }
  }
}
