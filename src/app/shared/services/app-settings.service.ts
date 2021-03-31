import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
type AppSettingSet = {

}
@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {

  constructor(private http:HttpClient) { }
  loadSettings = (): Observable<AppSettingSet>=>{
    return this.http.get("uiConfig.json").pipe(
      tap((jsn:AppSettingSet)=>{
        console.log("set items here", jsn);
      })
    );
  }
}
