import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog/dialog.component';
import { GroundComponent } from './ground/ground.component';
import { RootComponent } from './root/root.component';
import { BaseRoutingModule } from './base.root';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';
import { Observable } from 'rxjs';
import { AppSettingsService } from '../shared/services/app-settings.service';
import { AuthenticationInterceptor } from './interceptor/authentication.interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
type AppSettingSet = {

}

export const settingsFactory = (appSettingsService: AppSettingsService) => {
  return (): Observable<AppSettingSet> => appSettingsService.loadSettings();
}
@NgModule({
  declarations: [DialogComponent, GroundComponent, RootComponent],
  imports: [
    BaseRoutingModule,
    BrowserModule,
    CommonModule,
    SharedModule
  ],
  providers:[
    {
      provide: APP_INITIALIZER,
      useFactory: settingsFactory,
      multi: true,
      deps: [AppSettingsService]
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptor,
      multi: true,
      deps: [AppSettingsService]
    },
  ],
  bootstrap: [GroundComponent, DialogComponent]
})
export class BaseModule { }

