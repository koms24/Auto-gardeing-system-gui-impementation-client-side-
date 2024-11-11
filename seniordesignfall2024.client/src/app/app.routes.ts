import { Routes } from "@angular/router";
import { HomePageComponent } from "./home-page/home-page.component";

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  //{ path: 'scan', component: },
  //{ path: 'hub', component: },
  //{ path: 'detaul/:id', component: }
];