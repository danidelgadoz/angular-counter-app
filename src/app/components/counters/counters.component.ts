import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-counters',
  templateUrl: './counters.component.html',
  styles: []
})
export class CountersComponent implements OnInit {
  @Input() counters: Array<any>;
  @Output() onIncrement = new EventEmitter();
  @Output() onDelete = new EventEmitter();
  @Output() onReset = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
