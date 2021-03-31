import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GlobalBussService {
  dialogInitializerSubj:BehaviorSubject<DialogOptions>;
  collapsibleSectionClose: BehaviorSubject<string>;
  globalcollapsibleSectionClose: BehaviorSubject<string>;
  constructor() {
    this.dialogInitializerSubj = new BehaviorSubject<DialogOptions>(null);
    this.collapsibleSectionClose = new BehaviorSubject<string>(null);
    this.globalcollapsibleSectionClose = new BehaviorSubject<string>(null);
  }
}
