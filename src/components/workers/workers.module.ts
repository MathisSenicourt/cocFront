import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms';
import { WorkersGlobalComponent } from './workers-global/workers-global.component';


@NgModule({
  declarations: [
    WorkersGlobalComponent
  ],
  exports: [
    WorkersGlobalComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class WorkersModule { }
