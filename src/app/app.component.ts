import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-counter-app';

  counters = [
    { id: 1, value: 4 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 }
  ];

  constructor() { }

  handleIncrement = counter => {
    const counters = [...this.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.counters = counters;
  };

  handleReset = () => {
    const counters = this.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.counters = counters;
  };

  handleDelete = counterId => {
    const counters = this.counters.filter(c => c.id !== counterId);
    this.counters = counters;
  };
}
