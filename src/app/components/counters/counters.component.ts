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
  selector: 'app-counters',
  templateUrl: './counters.component.html',
  styles: [':host { border: 3px cyan solid; display: block; }']
})
export class CountersComponent implements
  OnInit,
  OnChanges,
  OnDestroy,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked {

  @Input() counters: Array<any>;
  @Output() onIncrement = new EventEmitter();
  @Output() onDelete = new EventEmitter();
  @Output() onReset = new EventEmitter();

  constructor() {
    console.log('%c Counters - constructor', 'background: #222; color: cyan');
  }

  ngOnChanges() {
    console.log('%c Counters - ngOnChanges', 'background: #222; color: cyan');
    // debugger;
  }

  ngOnInit() {
    console.log('%c Counters - ngOnInit', 'background: #222; color: cyan');
    // debugger;
  }

  ngOnDestroy() {
    console.log('%c Counters - ngOnDestroy', 'background: #222; color: cyan');
    // debugger;
  }

  // Hooks for the components children
  ngAfterContentInit() {
    console.log('%c Counters - ngAfterContentInit', 'background: #222; color: cyan');
    // debugger;
  }

  ngAfterContentChecked() {
    console.log('%c Counters - ngAfterContentChecked', 'background: #222; color: cyan');
    // debugger;
  }

  ngAfterViewInit() {
    console.log('%c Counters - ngAfterViewInit', 'background: #222; color: cyan');
    // debugger;
  }

  ngAfterViewChecked() {
    console.log('%c Counters - ngAfterViewChecked', 'background: #222; color: cyan');
    // debugger;
  }

}
