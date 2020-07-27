import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserListComponent} from './user-list.component';
import {
  NzButtonModule,
  NzDividerModule,
  NzGridModule,
  NzLayoutModule, NzMenuModule,
  NzTableModule,
  NzTypographyModule
} from "ng-zorro-antd";
import {RouterModule} from "@angular/router";


@NgModule({
  imports: [
    CommonModule,
    NzTableModule,
    NzDividerModule,
    RouterModule,
    NzButtonModule,
    NzTypographyModule,
    NzGridModule,
    NzLayoutModule,
    NzMenuModule,
  ],
  declarations: [UserListComponent],
  exports: [UserListComponent],
})
export class UserListModule {
}
