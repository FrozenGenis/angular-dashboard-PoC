import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from "./dashboard.component";
import {GridsterModule} from "angular-gridster2/dist";
import {DashboardService} from "./dashboard.service";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    GridsterModule,
    SharedModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DashboardModule,
      providers: [DashboardService]
    }
  }

  static getComponent(): typeof DashboardComponent {
    return DashboardComponent;
  }
}
