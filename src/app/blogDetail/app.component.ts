import { Component, OnInit,Input } from '@angular/core';

export class Blog{
    id:number;
    title:string;
}

@Component({
	selector: 'article-detail',
	templateUrl: './app.component.html',
	styleUrls:['./app.component.css']
})

export class ArticledetailComponent implements OnInit {
	@Input() blog:Blog;
	ngOnInit() { }
}