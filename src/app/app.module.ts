import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from '@angular/common/http';
import {GridsterModule} from 'angular-gridster2';
import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {QuickstartComponent} from './quickstart/quickstart.component';
import {BypassHtmlSanitizerPipe} from "./pipes/bypass-html-sanitizer.pipe";

const appRoutes: Routes = [
  {path: 'quickstart', component: QuickstartComponent},
  {path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    QuickstartComponent,
    BypassHtmlSanitizerPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: false}
    ),
    HttpClientModule,
    GridsterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
