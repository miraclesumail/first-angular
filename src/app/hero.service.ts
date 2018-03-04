import { Injectable } from '@angular/core';
import { Hero } from './hero';


@Injectable()
export class HeroService {
  HEROES:Hero[]  
  constructor(){
     this.HEROES = [
    {id: 11, name: 'Mr. Nice'},
    {id: 12, name: 'Narco'},
    {id: 13, name: 'Bombasto'},
    {id: 14, name: 'Celeritas'},
    {id: 15, name: 'Magneta'},
    {id: 16, name: 'RubberMan'},
    {id: 17, name: 'Dynama'},
    {id: 18, name: 'Dr IQ'},
    {id: 19, name: 'Magma'},
    {id: 20, name: 'Tornado'}
];
  }  
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(this.HEROES);
  }

  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getHeroes()), 2000);
    });
  }

  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
               .then(heroes => heroes.find(hero => hero.id === id));
  }

  getCount():number{
      return this.HEROES.filter((hero) => hero.name.length > 5).length
  }

  search(term:string):Hero[]{
      return this.HEROES.filter((hero) => hero.name.indexOf(term) > 0)
  }
}


