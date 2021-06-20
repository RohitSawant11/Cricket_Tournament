import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from '../component/home-page/home-page.component';
import { RouterModule, Routes } from '@angular/router';
const appRoutes: Routes = [{ path: "", component: HomePageComponent }];


@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes)
  ]
})
export class HomeModule { }
