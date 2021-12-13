import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {AuthGuard} from "./guards/auth.guard";

const routes: Routes = [
  {path: "dashboard", component: DashboardComponent},
  {path: "secret", loadChildren: () => import('./modules/secret/secret.module').then(x => x.SecretModule), canActivate: [AuthGuard]},
  {path: '**', redirectTo: 'dashboard'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
