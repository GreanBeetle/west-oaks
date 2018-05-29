import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component'
import { DirectorsComponent } from './directors/directors.component'

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'directors',
    component: DirectorsComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
