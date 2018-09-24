import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserComponent } from '../User/create-user/create-user.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { TextMaskModule } from 'angular2-text-mask';
import { UpdateUserComponent } from '../User/update-user/update-user.component';

const routes: Routes = [
  {
    path: '', component: UserComponent,
    children: [
      { path: 'create', component: CreateUserComponent },
      { path: 'update', component: UpdateUserComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    Ng4LoadingSpinnerModule,
    TextMaskModule
  ],
  declarations: [UserComponent, CreateUserComponent, UpdateUserComponent]
})
export class UserModule { }
