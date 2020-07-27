import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class UserService {

  constructor(
    private http: HttpClient,
  ) {
  }

  /* Получение списка пользователей */

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('/assets/mates.json');
  }
}


export interface User {
  guid: string;
  age: number;
  email: string;
  name: {
    first: string;
    last: string;
  },
}
