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

  constructor() {
    console.log('%c Navbar - constructor', 'background: #222; color: pink');
  }

  ngOnChanges() {
    console.log('%c Navbar - ngOnChanges', 'background: #222; color: pink');
    // debugger;
  }

  ngOnInit() {
    console.log('%c Navbar - ngOnInit', 'background: #222; color: pink');
    // debugger;
  }

  ngOnDestroy() {
    console.log('%c Navbar - ngOnDestroy', 'background: #222; color: pink');
    // debugger;
  }

  // Hooks for the components children
  ngAfterContentInit() {
    console.log('%c Navbar - ngAfterContentInit', 'background: #222; color: pink');
    // debugger;
  }

  ngAfterContentChecked() {
    console.log('%c Navbar - ngAfterContentChecked', 'background: #222; color: pink');
    // debugger;
  }

  ngAfterViewInit() {
    console.log('%c Navbar - ngAfterViewInit', 'background: #222; color: pink');
    // debugger;
  }

  ngAfterViewChecked() {
    console.log('%c Navbar - ngAfterViewChecked', 'background: #222; color: pink');
    // debugger;
  }

}
