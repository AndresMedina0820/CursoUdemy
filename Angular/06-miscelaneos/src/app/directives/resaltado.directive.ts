import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  @Input("appResaltado") nuevoColor:string;

  constructor( private el:ElementRef ) { 
  }

  private cambioColor( color:string ){
    this.el.nativeElement.style.backgroundColor = color;
  }

  @HostListener('mouseenter') MouseEntro(){
    this.cambioColor(this.nuevoColor || 'green') 
  }

  @HostListener('mouseleave') MouseSalida(){
    this.cambioColor(null) 
  }

}
