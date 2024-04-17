import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/subjects',
    pathMatch: 'full'
  },
  {
    path: 'subjects',
    loadComponent: () => import('./pages/subjects/subjects.component'),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
