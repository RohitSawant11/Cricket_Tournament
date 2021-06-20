import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { VenueComponent } from '../component/venue/venue.component';

const appRoutes: Routes = [
  { path: "", component: VenueComponent },
];

@NgModule({
  declarations: [VenueComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes)
  ]
})
export class VenueModule { }
