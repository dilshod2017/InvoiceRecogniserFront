import { Directive, HostListener } from "@angular/core";

@Directive()
export abstract class BaseTab {
  abstract hasUnsavedChanges(): boolean;

  @HostListener('window:beforeunload', ['$event'])
  onBeforeTabClose($event: { returnValue: string; }): void {
    if (this.hasUnsavedChanges()) {
      $event.returnValue = 'The unsaved changes will be lost if you leave unsaved'
    }
  }
}
