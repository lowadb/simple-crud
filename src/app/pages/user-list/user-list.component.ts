import {Component, OnInit} from '@angular/core';
import {User, UserService} from "../../services/user.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users$: Observable<User[]>;
  cols = COLS;

  constructor(
    private userService: UserService
  ) {
    this.users$ = this.userService.getUsers();
  }

  ngOnInit(): void {
  }

  /* Удаление пользователя */
  onDelete(guid: string) {
    this.userService.deleteUser(guid);
    this.users$ = this.userService.getUsers();
  }
}


const COLS = [
  {
    title: 'Avatar'
  },
  {
    title: 'Initials'
  },
  {
    title: 'First Name',
    compare: (a: User, b: User) => (a?.name?.first > b?.name?.first) ? 1 : -1,
    priority: 3
  },
  {
    title: 'Last Name',
    compare: (a: User, b: User) => (a?.name?.last > b?.name?.last) ? 1 : -1,
    priority: 2
  },
  {
    title: 'Age',
    compare: (a: User, b: User) => a?.age - b?.age,
    priority: 1
  },
  {
    title: 'Email',
  },
  {
    title: 'Actions',
  }
];
