import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserListComponent} from './user-list.component';
import {
  NzAvatarModule,
  NzButtonModule,
  NzDividerModule,
  NzGridModule,
  NzIconModule,
  NzLayoutModule,
  NzMenuModule,
  NzTableModule,
  NzTypographyModule
} from "ng-zorro-antd";
import {RouterModule} from "@angular/router";
import {PipesModule} from "../../pipes/pipes.module";


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
    NzAvatarModule,
    NzIconModule,
    PipesModule,
  ],
  declarations: [UserListComponent],
  exports: [UserListComponent],
})
export class UserListModule {
}
