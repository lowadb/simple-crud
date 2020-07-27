import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RootComponent} from './root.component';
import {Route, RouterModule} from "@angular/router";
import {UserListComponent} from "../pages/user-list/user-list.component";
import {UserDetailComponent} from "../pages/user-detail/user-detail.component";
import {UserService} from "../services/user.service";
import {HttpClientModule} from "@angular/common/http";
import {UserDetailModule} from "../pages/user-detail/user-detail.module";
import {UserListModule} from "../pages/user-list/user-list.module";
import {NzDividerModule, NzGridModule, NzLayoutModule, NzMenuModule} from "ng-zorro-antd";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

const routes: Route[] = [
  {path: '', component: UserListComponent},
  {path: ':guid', component: UserDetailComponent},
]

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserAnimationsModule,
    UserListModule,
    UserDetailModule,
    NzLayoutModule,
    NzDividerModule,
    NzMenuModule,
    NzGridModule,
  ],
  declarations: [
    RootComponent,
  ],
  bootstrap: [RootComponent],
  providers: [
    UserService
  ]
})
export class RootModule {
}
