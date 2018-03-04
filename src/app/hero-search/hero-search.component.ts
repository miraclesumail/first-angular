import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
import {HeroService} from '../hero.service'

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { Hero } from '../hero';

@Component({
  selector: 'hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: [ './hero-search.component.css' ],
})
export class HeroSearchComponent{
  heroes: Hero[];
  timmer:any;

  constructor(
    private heroService: HeroService,
    private router: Router) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    clearTimeout(this.timmer)  
    this.timmer = setTimeout(() => this.heroes = this.heroService.search(term),500)
  }
  
  gotoDetail(hero: Hero): void {
    let link = ['/detail', hero.id];
    this.router.navigate(link);
  }
}

