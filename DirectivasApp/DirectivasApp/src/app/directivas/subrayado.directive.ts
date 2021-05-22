import { Directive, ElementRef, Renderer2, HostListener, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appSubrayado]'
})


export class SubrayadoDirective {  

  @Input() config:any;

  @HostBinding('class') isHover:string;

  constructor(private elem:ElementRef, private renderer: Renderer2) {
// elem.nativeElement.style.textDecoration = 'underline'
this.config ={
  colorHover: 'yellow',
  colorNoHover: 'orange'
}
this.renderer.setStyle(this.elem.nativeElement, 'text-decoration', 'underline');
this.renderer.setStyle(this.elem.nativeElement, 'color', 'indigo');
   }

@HostListener('mouseover') onHover(){
  this.renderer.setStyle(this.elem.nativeElement, 'color',this.config.colorHover);
  this.isHover = 'hover';
  
}
@HostListener('mouseout') onOut(){
  this.renderer.setStyle(this.elem.nativeElement, 'color', this.config.colorNoHover);
  this.isHover ='noHover';
}

}
