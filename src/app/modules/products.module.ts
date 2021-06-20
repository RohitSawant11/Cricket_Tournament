import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from '../component/products/products.component';
import { RouterModule, Routes } from '@angular/router';
const appRoutes: Routes = [
  { path: "", component: ProductsComponent },
];



@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes)
  ]
})
export class ProductsModule { }
