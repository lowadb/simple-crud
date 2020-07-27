import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserListComponent} from './user-list.component';
import {NzButtonModule, NzDividerModule, NzTableModule} from "ng-zorro-antd";
import {RouterModule} from "@angular/router";


@NgModule({
  imports: [
    CommonModule,
    NzTableModule,
    NzDividerModule,
    RouterModule,
    NzButtonModule,
  ],
  declarations: [UserListComponent],
  exports: [UserListComponent],
})
export class UserListModule {
}
