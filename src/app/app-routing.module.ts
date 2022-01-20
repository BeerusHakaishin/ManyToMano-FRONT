import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManoLimitStepOneComponent } from './mano-limit-step-one/mano-limit-step-one.component';
import { InspirationComponent } from './inspiration/inspiration.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'homepage',
    pathMatch: 'full',
  },
  {
    path: 'homepage',
    component: HomepageComponent,
  },
  {
    path: 'mano-limits',
    component: ManoLimitStepOneComponent,
  },
  {
    path: 'inspiration',
    component: InspirationComponent,
  },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
