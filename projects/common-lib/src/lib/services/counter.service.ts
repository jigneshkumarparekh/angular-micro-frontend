import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  public _counter = new BehaviorSubject<number>(0);

  constructor() {}

  get counter(): Observable<number> {
    return this._counter.asObservable();
  }

  increaseCounter() {
    this._counter.next(this._counter.value + 1);
  }
}
