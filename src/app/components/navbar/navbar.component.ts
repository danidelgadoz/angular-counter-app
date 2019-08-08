import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../store.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {
  totalCounters: number;

  constructor(private storeService: StoreService) {
    console.log('%c Navbar - constructor', 'background: #222; color: pink');
  }

  ngOnChanges() {
    console.log('%c Navbar - ngOnChanges', 'background: #222; color: pink');
    // debugger;
  }

  ngOnInit() {
    console.log('%c Navbar - ngOnInit', 'background: #222; color: pink');
    // debugger;

    this.loadTotalCounters();
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

  private loadTotalCounters() {
    this.totalCounters = this.storeService.counters.filter(c => c.value > 0).length;

    this.storeService.countersSubject.subscribe(counters => {
      this.totalCounters = counters.filter(c => c.value > 0).length;
    });
  }

}
