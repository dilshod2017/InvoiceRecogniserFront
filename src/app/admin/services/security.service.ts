import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  isAuthenticated = () :boolean => true;
  currentUser = {
    isAdmin:true
  }
  constructor() { }
}
