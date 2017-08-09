import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {DashboardModule} from "./dashboard/dashboard.module";
import {QuickstartModule} from "./quickstart/quickstart.module";

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
        {path: 'quickstart', component: QuickstartModule.getComponent()},
        {path: 'dashboard', component: DashboardModule.getComponent()}
      ]),
    HttpClientModule,
    QuickstartModule,
    DashboardModule.forRoot()
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
