import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { DialogService } from '../../shared/services/dialog.service';
import { Observable } from 'rxjs';
import { BaseTab } from '../Base.Tab';

@Injectable({
  providedIn: 'root'
})
export class UnsavedChangesGuard implements CanDeactivate<BaseTab> {

  constructor(private dialogService: DialogService) { }
  canDeactivate(component: BaseTab): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(!component) return true;
    return component.hasUnsavedChanges()
      ? this.dialogService.createUnsavedLeaveDialogBox()
      : true
  }
}
