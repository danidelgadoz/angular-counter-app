import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  countersSubject = new Subject<any[]>();
  counters: Array<any> = [
    { id: 1, value: 4 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 }
  ];

  handleIncrement(counter) {
    const counters = [...this.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.counters = counters;
    this.countersSubject.next(this.counters);
  };

  handleReset() {
    const counters = this.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.counters = counters;
    this.countersSubject.next(this.counters);
  };

  handleDelete = counterId => {
    const counters = this.counters.filter(c => c.id !== counterId);
    this.counters = counters;
    this.countersSubject.next(this.counters);
  };


}
