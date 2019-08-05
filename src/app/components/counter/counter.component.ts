import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styles: []
})
export class CounterComponent implements OnInit {
  @Input() counter: any;
  @Output() onIncrement = new EventEmitter<any>();
  @Output() onDelete = new EventEmitter();

  constructor() { }

  ngOnInit() {
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
