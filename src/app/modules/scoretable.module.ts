import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoretableComponent } from '../component/scoretable/scoretable.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: "", component: ScoretableComponent },
];

@NgModule({
  declarations: [ScoretableComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes)
  ]
})
export class ScoretableModule { }
