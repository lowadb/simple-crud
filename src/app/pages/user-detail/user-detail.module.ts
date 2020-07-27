import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserDetailComponent} from './user-detail.component';


@NgModule({
  imports: [CommonModule],
  declarations: [UserDetailComponent],
  exports: [UserDetailComponent],
})
export class UserDetailModule {
}
