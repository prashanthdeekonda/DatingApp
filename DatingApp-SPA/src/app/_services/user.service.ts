import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../_models/user';

// const httpOptions = {
//   headers: new HttpHeaders({
//     Authorization: 'Bearer ' + localStorage.getItem('token')
//   })
// };

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseurl = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.baseurl}users`);
  }

  getUser(id: number): Observable<User> {
    return this.httpClient.get<User>(`${this.baseurl}users/${id}`);
  }

  updateUser(id: number, user: User) {
    return this.httpClient.put(`${this.baseurl}users/${id}`, user);
  }

  setMainPhoto(userId: number, id: number) {
    return this.httpClient.post(
      `${this.baseurl}users/${userId}/photos/${id}/setMain`,
      {}
    );
  }

  deletePhoto(userId: number, id: number) {
    return this.httpClient.delete(
      `${this.baseurl}users/${userId}/photos/${id}`
    );
  }
}
