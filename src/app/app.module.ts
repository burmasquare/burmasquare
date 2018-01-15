import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchboxComponent } from './searchbox/searchbox.component';
import { TopoffersComponent } from './topoffers/topoffers.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SearchboxComponent,
    TopoffersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
