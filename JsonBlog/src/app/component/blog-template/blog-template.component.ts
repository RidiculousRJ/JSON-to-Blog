import { Component, OnInit } from '@angular/core';
import { BlogContext } from 'src/app/util/BlogContext';

@Component({
  selector: 'app-blog-template',
  templateUrl: './blog-template.component.html',
  styleUrls: ['./blog-template.component.css']
})
export class BlogTemplateComponent implements OnInit {

  dataContext: BlogContext;

  constructor() {
    this.dataContext = new BlogContext();
    this.dataContext.Title = "Lorem Ipsum"
    this.dataContext.Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut magna rutrum, volutpat tortor ut, vulputate sapien. Aliquam erat volutpat. Nam vestibulum urna dolor, mattis condimentum arcu tempor vel."
    this.dataContext.Home = "https://rahul.jedhe.in/";
    this.dataContext.Author = "Rahul Jedhe";
    this.dataContext.AuthorSite = "https://rahul.jedhe.in/";
    this.dataContext.PublishedDate = "1 Nov 2020";
    //this.dataContext. = "";
  }

  ngOnInit(): void {
  }

}
