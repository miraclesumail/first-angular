import { Component} from '@angular/core';
import {HeroService} from '../hero.service'

export class Blog{
    id:number;
    title:string;
}
let BLOGS:Blog[]=[
    { id:1,title:"号外号外？奥巴马要下台啦"},
    { id:2,title:"什么？奥巴马要下台啦？"},
    { id:3,title:"号外号外？川普要上台了"},
    { id:4,title:"啥？我大四川人也要当美国总统了？"},
    { id:5,title:"mdzz,一群麻瓜，统统查杀"},
    { id:6,title:"首推龙文，必须出具"}
]

@Component({
	selector: 'ngarticle',
	templateUrl: './app.component.html',
    styleUrls:['./app.component.css']
})

export class ArticleComponent  {
	blogList:Blog[];
	count:number;
	selectedBlog:Blog;
	constructor(private heroService:HeroService)
	{
		this.blogList=BLOGS;
        this.count = this.heroService.getCount()
	}
	selectBlog(blog:Blog)
	{
		this.selectedBlog=blog;
	}
}