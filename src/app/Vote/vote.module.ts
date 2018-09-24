import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VoteComponent } from '../Vote/vote/vote.component';
import { Routes, RouterModule } from '@angular/router';
import { CreateVoteComponent } from '../Vote/create-vote/create-vote.component';
import { FormsModule } from '@angular/forms';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

const routes: Routes = [
  {
    path: '', component: VoteComponent,
    children: [
      { path: 'create', component: CreateVoteComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    Ng4LoadingSpinnerModule
  ],
  declarations: [VoteComponent, CreateVoteComponent]
})
export class VoteModule { }
