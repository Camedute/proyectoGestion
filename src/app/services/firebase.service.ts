import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class FirebaseService {
  private firebaseUrl = 'https://gestion-1b7db-default-rtdb.firebaseio.com/';

  constructor(private http: HttpClient) { }

  sendData(username: string, mail: string, password: string) {
    const data = {
      username: username,
      mail: mail,
      password: password
    };

    const url = `${this.firebaseUrl}/users.json`;

    return this.http.post(url, data);
  }
}
