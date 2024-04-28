import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  private _userName$ = new BehaviorSubject<string>('');

  get userName$() {
    return this._userName$.asObservable();
  }

  setUserName(name: string) {
    this._userName$.next(name);
  }
}
