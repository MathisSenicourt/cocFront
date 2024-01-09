import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms';
import { WorkersGlobalComponent } from './workers-global/workers-global.component';
import { WorkersAvailableComponent } from './workers-available/workers-available.component';


@NgModule({
  declarations: [
    WorkersGlobalComponent,
    WorkersAvailableComponent
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
