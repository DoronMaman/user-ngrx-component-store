import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UsersStore } from './users/user.component.store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FormsModule }   from '@angular/forms';
import { EditUserComponent } from './users/edit-user/edit-user.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    ],
  providers: [UsersStore],
  bootstrap: [AppComponent]
})
export class AppModule { }
