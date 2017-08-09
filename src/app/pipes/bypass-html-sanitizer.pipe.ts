import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({ name: 'bypassHtmlSanitizer', pure: false })
export class BypassHtmlSanitizerPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {}

  transform(content) {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }
}
