import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective{
     constructor(private el:ElementRef){ 
	     el.nativeElement.style.background = '#333333';
		 el.nativeElement.style.color = '#ffffff';
		 el.nativeElement.style.padding = '5px';
	 }
     	 
	 @HostListener('mouseenter') onMouseEnter(){
		 this.highlight('yellow','blue');
	 }
	 
	 @HostListener('mouseleave') onMouseLeave(){
		  this.highlight('#333333','#ffffff');
	 }
	 
	 private highlight (bgColor:string, fcolor:string){
		 this.el.nativeElement.style.background = bgColor;
		 this.el.nativeElement.style.color = fcolor;
	 }
	 
}
