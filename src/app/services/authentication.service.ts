import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { User } from '../models/user';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  private loggedInUser: User;
  finalURL: string;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('currentUser'))
    );
    this.currentUser = this.currentUserSubject.asObservable();
    this.finalURL = `${environment.proxy}/${environment.apiUrl}`;
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  public get SignedInUser() {
    return this.loggedInUser;
  }

  login(username: string, password: string) {
    return this.http.post('/api/auth/login', { username, password });
    return this.http.post<any>(`${environment.apiUrl}/api/auth/login`, {
      username,
      password,
    });
  }
  logout() {
    // remove user from local storage to log user out
    console.log('user to log out', this.currentUser);
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    this.currentUserSubject.next(null);
    console.log('currentUserSubject after logout', this.currentUserSubject);
  }

  getUserProfile() {
    const user = localStorage.getItem('currentUser');
    this.loggedInUser = JSON.parse(user);
    return this.loggedInUser;
  }
}
