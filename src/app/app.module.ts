import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppComponent1 } from './article/app.component';
import { ArticleComponent} from './blog/app.component';
import { ArticledetailComponent} from './blogDetail/app.component';
import { AppRoutingModule } from './app-routing.module';
import {beautyDirective} from './directive/bg.directive'
import {MyUnlessDirective} from './directive/unless.directive'
import { HoverTextDirective } from './directive/tooltip.directive';
import { CountClicks } from './directive/count.directive';
import { HeroService } from './hero.service';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroesComponent }    from './heroes/heroes.component';
import { HeroSearchComponent }    from './hero-search/hero-search.component';
import { HeroDetailComponent }    from './hero-detail/hero-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    HeroSearchComponent,
    AppComponent1,
    ArticleComponent,
    ArticledetailComponent,
    beautyDirective,
    MyUnlessDirective,
    HoverTextDirective,
    CountClicks
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
 ],
 providers:[HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
