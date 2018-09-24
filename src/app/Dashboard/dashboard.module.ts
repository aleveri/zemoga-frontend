import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../Dashboard/dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      { path: 'user', loadChildren: '../User/user.module#UserModule' },
      { path: 'vote', loadChildren: '../Vote/vote.module#VoteModule' }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Ng4LoadingSpinnerModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
