import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnChanges,
  OnDestroy,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked
} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styles: [':host { border: 2px #f9551a solid; display: block; }']
})
export class CounterComponent implements
  OnInit,
  OnChanges,
  OnDestroy,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked {

  @Input() counter: any;
  @Output() onIncrement = new EventEmitter<any>();
  @Output() onDelete = new EventEmitter();

  constructor() {
    console.log('%c Counter - constructor', 'background: #222; color: #f9551a');
  }

  ngOnChanges() {
    console.log('%c Counter - ngOnChanges', 'background: #222; color: #f9551a');
    // debugger;
  }

  ngOnInit() {
    console.log('%c Counter - ngOnInit', 'background: #222; color: #f9551a');
    // debugger;
  }

  ngOnDestroy() {
    console.log('%c Counter - ngOnDestroy', 'background: #222; color: #f9551a');
    // debugger;
  }

  // Hooks for the components children
  ngAfterContentInit() {
    console.log('%c Counter - ngAfterContentInit', 'background: #222; color: #f9551a');
    // debugger;
  }

  ngAfterContentChecked() {
    console.log('%c Counter - ngAfterContentChecked', 'background: #222; color: #f9551a');
    // debugger;
  }

  ngAfterViewInit() {
    console.log('%c Counter - ngAfterViewInit', 'background: #222; color: #f9551a');
    // debugger;
  }

  ngAfterViewChecked() {
    console.log('%c Counter - ngAfterViewChecked', 'background: #222; color: #f9551a');
    // debugger;
  }

  getBadgeClasses() {
    let classes = 'badge m-2 badge-';
    classes += this.counter.value === 0 ? 'warning' : 'primary';
    return classes;
  }

  formatCount() {
    const { value } = this.counter;
    return value === 0 ? 'Zero' : value;
  }
}
