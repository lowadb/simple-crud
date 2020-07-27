import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RootComponent} from './root.component';
import {Route, RouterModule} from "@angular/router";
import {UserListComponent} from "../pages/user-list/user-list.component";
import {UserDetailComponent} from "../pages/user-detail/user-detail.component";

const routes: Route[] = [
  {path: '', component: UserListComponent},
  {path: ':id', component: UserDetailComponent},
]

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [
    RootComponent,
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class RootModule {
}
