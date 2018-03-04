import { Component,EventEmitter,Input,Output } from '@angular/core';

export class Hero{
    id:number;
    name:String;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  
  @Input()  size: number;
  @Output() sizeChange = new EventEmitter<number>();  
  title = 'app';
  color = 'orange';
  init = 5;
  all = 10;
  condition = false;
  values = '';
  emotion = {'qwe':'asd'};
  gender:String;
  items:String[];
  selectedHero:Hero;
  heroes: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];
  isSpecial = true;

  constructor(){
    this.size = 1;
    this.gender = 'female';
    this.items = ['qqq','www','eee']
  }
  click($event){
    console.log($event.target.textContent)
  }
  onKey(value:String){
        this.values += value + ' | ';
}
  onSelect(hero: Hero): void {
  this.selectedHero = hero;
}

  dec() { this.resize(-1); }
  inc() { this.resize(+1); }
  resize(delta: number) {
    this.size = Math.min(40, Math.max(8, this.size + delta));
    this.sizeChange.emit(this.size);
  }

  countChange($event){
     this.init = $event;
  }

  totalChange($event){
    this.all = $event
  }
}

  
