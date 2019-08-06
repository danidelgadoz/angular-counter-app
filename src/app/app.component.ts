import {
  Component,
  OnInit,
  OnChanges,
  OnDestroy,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements
  OnInit,
  OnChanges,
  OnDestroy,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked {

  title = 'angular-counter-app';

  counters = [
    { id: 1, value: 4 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 }
  ];

  constructor() {
    console.log('%c App - constructor', 'background: #222; color: #bada55');
  }

  ngOnChanges() {
    console.log('%c App - ngOnChanges', 'background: #222; color: #bada55');
    // debugger;
  }

  ngOnInit() {
    console.log('%c App - ngOnInit', 'background: #222; color: #bada55');
    // debugger;
  }

  ngOnDestroy() {
    console.log('%c App - ngOnDestroy', 'background: #222; color: #bada55');
    // debugger;
  }

  // Hooks for the components children
  ngAfterContentInit() {
    console.log('%c App- ngAfterContentInit', 'background: #222; color: #bada55');
    // debugger;
  }

  ngAfterContentChecked() {
    console.log('%c App- ngAfterContentChecked', 'background: #222; color: #bada55');
    // debugger;
  }

  ngAfterViewInit() {
    console.log('%c App- ngAfterViewInit', 'background: #222; color: #bada55');
    // debugger;
  }

  ngAfterViewChecked() {
    console.log('%c App- ngAfterViewChecked', 'background: #222; color: #bada55');
    // debugger;
  }

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
