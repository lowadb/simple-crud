import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {filter, map, tap} from "rxjs/operators";

const localStorageKey = 'users';

@Injectable()
export class UserService {

  constructor(
    private http: HttpClient,
  ) {
  }

  /* Получение списка пользователей */
  getUsers(): Observable<User[]> {
    const users = this.getUsersFromLocalStorage();
    return (users)
      ? of(users)
      : this.http.get<User[]>('/assets/mates.json')
        .pipe(tap(users => localStorage.setItem(localStorageKey, JSON.stringify(users))));
  }

  /* Получение пользователя по guid */
  getUser(guid: string): Observable<User> {
    return this.getUsers()
      .pipe(
        filter(users => !!users),
        map(users => users.find(user => user.guid === guid))
      );
  }

  /* Удаление пользователя из списка */
  deleteUser(guid: string) {
    let users = this.getUsersFromLocalStorage() || [];
    users = users.filter(user => user.guid !== guid);
    localStorage.setItem(localStorageKey, JSON.stringify(users));
  }

  /* Получение списка пользователей из local storage */
  getUsersFromLocalStorage(): User[] {
    const usersString = localStorage.getItem(localStorageKey);
    if (!usersString) {
      return null;
    }
    try {
      return JSON.parse(usersString);
    } catch (e) {
      return null;
    }
  }


  /* Добавление пользователя */
  addUser(user: User): Observable<User> {
    const users = this.getUsersFromLocalStorage() || [];
    const currentUser = {...user, guid: generateGuid()};
    users.push(currentUser);
    localStorage.setItem(localStorageKey, JSON.stringify(users));
    return of(currentUser);
  }

  /* Редактирование пользователя */
  updateUser(user: User): Observable<User> {
    const users = this.getUsersFromLocalStorage() || [];
    const currentUserIndex = users.map(usr => usr.guid).indexOf(user.guid);
    users.splice(currentUserIndex, 1, user);
    localStorage.setItem(localStorageKey, JSON.stringify(users));
    return of(user);
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

export function generateGuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
