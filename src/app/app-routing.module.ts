import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

let routes: Routes = [];

routes = [
  {
    path: "",
    loadChildren: () => import("./modules/home.module").then((m) => m.HomeModule),
  },
  {
    path: "products",
    loadChildren: () => import("./modules/products.module").then((m) => m.ProductsModule),
  },
  {
    path: "countries",
    loadChildren: () => import("./modules/country.module").then((m) => m.CountryModule),
  },
  {
    path: "teams",
    loadChildren: () => import("./modules/team.module").then((m) => m.TeamModule),
  },
  {
    path: "matches",
    loadChildren: () => import("./modules/match.module").then((m) => m.MatchModule),
  },
  {
    path: "table",
    loadChildren: () => import("./modules/scoretable.module").then((m) => m.ScoretableModule),
  },
  {
    path: "venues",
    loadChildren: () => import("./modules/venue.module").then((m) => m.VenueModule),
  },
  {
    path: "**",
    loadChildren: () =>
      import("./modules/fourofour.module").then(m => m.FourofourModule)
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
