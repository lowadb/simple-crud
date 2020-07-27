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

  constructor(
    private userService: UserService
  ) {
    this.users$ = this.userService.getUsers();
  }

  ngOnInit(): void {
  }

  onDelete(guid: string) {
    this.userService.deleteUser(guid);
    this.users$ = this.userService.getUsers();
  }
}
