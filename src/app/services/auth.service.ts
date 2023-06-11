import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private firebaseUrl = 'https://gestion-1b7db-default-rtdb.firebaseio.com/';
  
  constructor(private http: HttpClient) {}

  checkEmailExists(email: string) {
    const url = `${this.firebaseUrl}/users.json`;
    return this.http.get(url).pipe(
      map(users => {
        const userArray = Object.values(users);
        return userArray.some((user: any) => user.mail === email);
      })
    );
  }
}
