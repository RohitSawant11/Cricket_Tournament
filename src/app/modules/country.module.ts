import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesComponent } from '../component/countries/countries.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: "", component: CountriesComponent },
];


@NgModule({
  declarations: [
    CountriesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes)
  ]
})
export class CountryModule { }
