import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BypassSecurityTrustHtml} from "./bypass-security-trust-html.pipe";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BypassSecurityTrustHtml],
  exports: [BypassSecurityTrustHtml]
})
export class SharedModule { }
