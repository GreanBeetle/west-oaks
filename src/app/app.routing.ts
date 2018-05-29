import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component'
import { DirectorsComponent } from './directors/directors.component'
import { MinutesComponent } from './minutes/minutes.component'
import { ManagementComponent } from './management/management.component'
import { BudgetComponent } from './budget/budget.component'
import { DocsComponent } from './docs/docs.component'
import { EncyclopediaComponent } from './encyclopedia/encyclopedia.component'

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'directors',
    component: DirectorsComponent
  },
  {
    path: 'minutes',
    component: MinutesComponent
  },
  {
    path: 'management',
    component: ManagementComponent
  },
  {
    path: 'budget',
    component: BudgetComponent
  },
  {
    path: 'docs',
    component: DocsComponent
  },
  {
    path: 'encyclopedia',
    component: EncyclopediaComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
