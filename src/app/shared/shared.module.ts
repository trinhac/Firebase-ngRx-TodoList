import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbButtonModule, NbCardModule, NbIconModule, NbLayoutModule, NbWindowModule } from '@nebular/theme';
import { Router } from '@angular/router';
import { NbEvaIconsModule } from '@nebular/eva-icons';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NbButtonModule,
    NbLayoutModule,
    NbCardModule,
    NbWindowModule.forChild(),
    NbEvaIconsModule,
    NbIconModule,
  ],
  exports: [
    NbButtonModule,
    NbLayoutModule,
    NbCardModule,
    NbEvaIconsModule,
    NbIconModule,
  ]
})
export class SharedModule { }
