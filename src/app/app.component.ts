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

}
