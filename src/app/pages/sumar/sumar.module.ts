import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SumarPageRoutingModule } from './sumar-routing.module';

import { SumarPage } from './sumar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SumarPageRoutingModule
  ],
  declarations: [SumarPage]
})
export class SumarPageModule {}
