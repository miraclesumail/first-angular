import { Component,EventEmitter,Input,Output } from '@angular/core';
import * as $ from 'jquery';
import { HeroService } from './app.service';


@Component({
  selector: 'app-root1',
  templateUrl: './app.component.html',
  providers:[HeroService]
})
export class AppComponent1{
   title = '第二个组件';
   time:number;
   name:string;
   @Input()
   count: number;
   @Output()
   change = new EventEmitter();

   @Input()
   total: number;
   @Output()
   reduce = new EventEmitter(); 

  constructor(private heroService: HeroService) {
    this.name = '雷'
   }

  ngOnInit() {
        this.time = this.heroService.getTime()
        console.log(this.count);    // 父组件内传入的值或者我们自己设置的初始值0
    }

  ngAfterViewInit(){
        $('.test').click(function(){
          console.log(+new Date())
          console.log($(this).offset().top)
        })
  }  

  add(){
       this.count++;
       this.change.emit(this.count);
 }  

  decrease(){
       this.total--;
       this.reduce.emit(this.total)
  }
}

  
