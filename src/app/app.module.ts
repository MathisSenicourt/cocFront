import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { WorkersModule } from "../components/workers/workers.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    WorkersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
