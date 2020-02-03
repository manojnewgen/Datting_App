import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../_models/user';

const HttpOptions = {
  headers: new HttpHeaders({
    Authorization: 'Bearer ' + localStorage.getItem('token')
  })
};
@Injectable({
  providedIn: 'root'
})
export class UserService {
baseUrl = environment.apiUrl;
constructor(private http: HttpClient) { }

getUsers(): Observable<User[]> {
  return this.http.get<User[]>(this.baseUrl + 'Users/', HttpOptions);
}
getUser(id: string | number): Observable<User> {
  return this.http.get<User>(this.baseUrl + 'Users/' + id, HttpOptions);
}
updateUser(id: number, user: User){
  return this.http.put(this.baseUrl + 'Users/' + id, user);
}
}
