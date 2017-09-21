import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { Main2Component } from './main-2/main-2.component';

export const routes: Routes = [
    { path: 'main', component: MainComponent },
    { path: 'main2', component: Main2Component },
    { path: '', redirectTo: '/main', pathMatch: 'full' },
  ];

  export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

