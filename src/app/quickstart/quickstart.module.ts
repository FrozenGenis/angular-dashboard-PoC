import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {QuickstartComponent} from "./quickstart.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [QuickstartComponent]
})
export class QuickstartModule {
  static getComponent(): typeof QuickstartComponent {
    return QuickstartComponent;
  }
}
