import {Directive, ElementRef, Input} from "@angular/core";
@Directive({
  selector:'[beauty]'
})
export class beautyDirective{
  private _defaultColor='green';
  private el:HTMLElement;
  @Input('beauty')
  set backgroundColor(colorName:string){
    this.setStyle(colorName);
  };
  constructor(el:ElementRef){
    this.el=el.nativeElement;
    this.setStyle(this._defaultColor);
  }
  private setStyle(color:string){
    this.el.style.backgroundColor=color;
  }
}