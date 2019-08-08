import {
  Component,
  Input,
  OnInit,
  OnChanges,
  OnDestroy,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked
} from '@angular/core';
import { StoreService } from '../../store.service';
import { filter, map } from 'rxjs/operators';

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

  @Input() counterId: number;
  counter: any;

  constructor(private storeService: StoreService) {
    console.log('%c Counter - constructor', 'background: #222; color: #f9551a');
  }

  ngOnChanges(changes) {
    console.log('%c Counter - ngOnChanges', 'background: #222; color: #f9551a', changes);
    // debugger;
  }

  ngOnInit() {
    console.log('%c Counter - ngOnInit', 'background: #222; color: #f9551a');
    // debugger;

    this.loadCounter();
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

  // Component functions
  onIncrement(counter) {
    this.storeService.handleIncrement(counter);
  }

  onDelete(id) {
    this.storeService.handleDelete(id);
  }

  private loadCounter() {
    this.counter = this.storeService.counters.find(c => c.id === this.counterId);

    this.storeService.countersSubject
      .pipe(
        filter((cs) => {
          const counterFinded = cs.find(c => c.id === this.counter.id)
          return counterFinded ? true : false
        }),
        map(counters => {
          return counters.find(c => c.id === this.counter.id)
        })
      )
      .subscribe(counter => {
        this.counter = counter;
      });
  }
}
