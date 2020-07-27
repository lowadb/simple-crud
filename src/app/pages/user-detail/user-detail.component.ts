import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable, Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";
import {User, UserService} from "../../services/user.service";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit, OnDestroy {
  destroyed$ = new Subject();
  creationMode = false;
  editingUser$: Observable<User>;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
  ) {
    this.setRouteParams();

    this.editingUser$.subscribe(user => console.log({user}));
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.destroyed$.next();
  }

  /* Подлучение данных из урла, установка режима созздания либо получение пользователя */
  private setRouteParams() {
    this.route.params
      .pipe(takeUntil(this.destroyed$))
      .subscribe(params => {
        const guid = params.guid;
        if (guid) {
          (guid === 'add')
            ? this.creationMode = true
            : this.editingUser$ = this.userService.getUser(guid);
        }
      });
  }
}
