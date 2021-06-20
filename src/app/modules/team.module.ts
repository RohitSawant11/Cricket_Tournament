import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TeamsComponent } from '../component/teams/teams.component';

const appRoutes: Routes = [
  { path: "", component: TeamsComponent },
];

@NgModule({
  declarations: [TeamsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes)
  ]
})
export class TeamModule { }
