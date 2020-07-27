import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserListComponent} from './user-list.component';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [UserListComponent],
  exports: [UserListComponent],
})
export class UserListModule {
}
