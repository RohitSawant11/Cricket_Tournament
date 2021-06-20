import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatchesComponent } from '../component/matches/matches.component';

const appRoutes: Routes = [
  { path: "", component: MatchesComponent },
];

@NgModule({
  declarations: [MatchesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes)
  ]
})
export class MatchModule { }
