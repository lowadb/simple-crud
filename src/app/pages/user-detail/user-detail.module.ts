import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserDetailComponent} from './user-detail.component';
import {ReactiveFormsModule} from "@angular/forms";
import {NzButtonModule, NzFormModule, NzGridModule, NzInputModule, NzWaveModule} from "ng-zorro-antd";
import {RouterModule} from "@angular/router";


@NgModule({
  imports: [CommonModule, ReactiveFormsModule, NzGridModule, NzInputModule, NzFormModule, NzWaveModule, NzButtonModule, RouterModule],
  declarations: [UserDetailComponent],
  exports: [UserDetailComponent],
})
export class UserDetailModule {
}
