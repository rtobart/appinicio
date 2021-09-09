import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SumarPage } from './sumar.page';

const routes: Routes = [
  {
    path: '',
    component: SumarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SumarPageRoutingModule {}
