import { Injectable } from '@angular/core';
import { observable, Observable, Observer, of } from 'rxjs';
import { GlobalBussService } from './global-buss.service';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private globlaBussService: GlobalBussService) { }

  createDeleteWarningDialog = (text:string, delteCallback:()=>void, cancel:()=>void) =>{
    return new Observable((observer:Observer<boolean>)=>{
      this.globlaBussService.dialogInitializerSubj.next({
        text,
        title:"Deletion Confirmation",
        okButton:{
          name:"Delete",
          color:"Red",
          callback: delteCallback
        },
        cancelButton:{
          name:"Cancel",
          color:"Orange",
          callback: cancel
        }
      })
    })
  }


  createUnsavedLeaveDialogBox = () =>{
    return new Observable((observer:Observer<boolean>)=> {
      console.log("add dialog box with yes/no and returnign observalbe of URL to go to the target place");
      this.globlaBussService.dialogInitializerSubj.next({
        title: "Unsaved changes",
        text: "All unsaved changes will be discarted if you leave",
        okButton: {
          name: "Leave",
          color: "Red",
          callback: (): void => {
            observer.next(true);
            observer.complete();
          }
        },
        cancelButton:{
          name:"Stay",
          color: "Orange",
          callback: () :void =>{
            observer.next(false);
            observer.complete();
          }
        }
      })
    })
  }
}
