import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {
  totalCounters;

  @Input() set counters(value) {
    this.totalCounters = value.filter(c => c.value > 0).length;
  };

  constructor() { }

  ngOnInit() {
  }

}
