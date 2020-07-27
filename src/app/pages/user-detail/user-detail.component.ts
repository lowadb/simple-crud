import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Subject} from "rxjs";
import {filter, takeUntil, tap} from "rxjs/operators";
import {User, UserService} from "../../services/user.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import * as lodash from 'lodash';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit, OnDestroy {
  destroyed$ = new Subject();
  creationMode = false;
  editingUser: User;
  isEdited = false;

  userForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.pattern(/.+@.+\..+/i)]),
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
  ) {
    this.getRouteParams();
    this.userForm.valueChanges
      .pipe(takeUntil(this.destroyed$))
      .subscribe(changes => this.detectChanges(changes))
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.destroyed$.next();
  }

  /* Устаналиваем данные редактируемого пользователя в форму и сохраняем  для сравнения */
  private setUserData(user: User) {
    this.editingUser = lodash.clone(user);
    this.userForm.reset({
      firstName: user?.name.first,
      lastName: user?.name.last,
      age: user.age,
      email: user.email,
    }, {emitEvent: false});
    this.isEdited = false;
  }

  /* Получение данных из урла, установка режима созздания либо получение пользователя */
  private getRouteParams() {
    this.route.params
      .pipe(takeUntil(this.destroyed$))
      .subscribe(params => {
        const guid = params.guid;
        if (guid) {
          this.creationMode = guid === 'add';
          (this.creationMode)
            ? this.userForm.reset()
            : this.userService.getUser(guid)
              .pipe(takeUntil(this.destroyed$),
                filter(user => !!user))
              .subscribe(user => this.setUserData(user));
        }
      });
  }

  /* Отправка формы */
  submitForm() {
    const user = this.getUserData();
    (this.creationMode)
      ? this.userService.addUser(user).pipe(tap(user => this.router.navigate([user.guid]))).toPromise().then()
      : this.userService.updateUser(user);
    this.isEdited = false;
  }

  /* Получение данных пользователя из формы в виде модели User */
  private getUserData(): User {
    const formValue = this.userForm.getRawValue();
    const name = {
      first: formValue.firstName,
      last: formValue.lastName,
    };
    const {email, age} = formValue;
    return {
      ...(this.editingUser && {guid: this.editingUser.guid}),
      name,
      age,
      email,
    };
  }


  /* Проверка на наличие изменений */
  private detectChanges(changes: { [prop: string]: string | number }) {
    this.isEdited = this.creationMode || !lodash.isEqual(this.editingUser, this.getUserData());
  }
}
