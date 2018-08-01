import { PipeTransform, Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name:'domseguro'
})

export class DomseguroPipe implements PipeTransform {

  constructor( private domSanitizer:DomSanitizer) { }

  transform( uri:string, url:string ):any {
    return this.domSanitizer.bypassSecurityTrustResourceUrl( url + uri );
  }

}
