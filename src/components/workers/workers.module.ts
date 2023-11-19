import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkersComponent } from './workers/workers.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    WorkersComponent
  ],
  exports: [
    WorkersComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class WorkersModule { }
