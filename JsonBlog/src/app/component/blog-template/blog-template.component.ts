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
    this.dataContext.BlogPage = "- RidiculousRJ -"
    this.dataContext.AuthorSite = "https://rahul.jedhe.in/";
    this.dataContext.PublishedDate = "1 Nov 2020";
    this.dataContext.MRQSection = "Archives";
    this.dataContext.MRQContent = [
      {
        name: "Link",
        tag: "h6",
        Content: [
          {
            name: "Text",
            textContent: "Jan 2020"
          }
        ]
      },{
        name: "Link",
        tag: "h6",
        Content: [
          {
            name: "Text",
            textContent: "Feb 2020"
          }
        ]
      }
    ];
    this.dataContext.About = "Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.";
    this.dataContext.Content = [
      {
        name: "Paragraph",
        tag: "p",
        Content: [
          {
            name: "Text",
            textContent: "This blog post shows a few different types of content that's supported and styled with Bootstrap. Basic typography, images, and code are all supported."
          }
        ]
      },
      {
        name: "Separator",
        tag: "hr"
      },
      {
        name: "Paragraph",
        tag: "p",
        Content: [
          {
            name: "Text",
            textContent: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum."
          }
        ]
      },
      {
        name: "Paragraph",
        tag: "p",
        Content: [
          {
            name: "Text",
            textContent: "Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit."
          }
        ]
      },
      {
        name: "Paragraph",
        tag: "p",
        Content: [
          {
            name: "Text",
            textContent: "Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur."
          }
        ]
      },
      {
        name: "BreakPoint",
        tag: "br"
      },
      {
        name: "Heading",
        tag: "h2",
        Content: [
          {
            name: "Text",
            textContent: "Heading"
          }
        ]
      },
      {
        name: "Paragraph",
        tag: "p",
        Content: [
          {
            name: "Text",
            textContent: "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta acconsectetur ac, vestibulum at eros."
          }
        ]
      },
      {
        name: "SubHeading",
        tag: "h3",
        Content: [
          {
            name: "Text",
            textContent: "Sub-heading"
          }
        ]
      },
      {
        name: "Paragraph",
        tag: "p",
        Content: [
          {
            name: "Text",
            textContent: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."
          }
        ]
      },
      {
        name: "Paragraph",
        tag: "p",
        Content: [
          {
            name: "Text",
            textContent: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."
          }
        ]
      },
      {
        name: "UnOrderedList",
        tag: "ul",
        Content: [
          {
            name: "List",
            tag: "li",
            Content: [
              {
                name: "Text",
                textContent: "Praesent commodo cursus magna, vel scelerisque nisl consectetur et."
              }
            ]
          },
          {
            name: "List",
            tag: "li",
            Content: [
              {
                name: "Text",
                textContent: "Nulla vitae elit libero, a pharetra augue."
              }
            ]
          },
          {
            name: "List",
            tag: "li",
            Content: [
              {
                name: "Text",
                textContent: "Donec id elit non mi porta gravida at eget metus."
              }
            ]
          }
        ]
      },
      {
        name: "Paragraph",
        tag: "p",
        Content: [
          {
            name: "Text",
            textContent: "Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue."
          }
        ]
      },
      {
        name: "OrderedList",
        tag: "ol",
        Content: [
          {
            name: "List",
            tag: "li",
            Content: [
              {
                name: "Text",
                textContent: "Vestibulum id ligula porta felis euismod semper."
              }
            ]
          },
          {
            name: "List",
            tag: "li",
            Content: [
              {
                name: "Text",
                textContent: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
              }
            ]
          },
          {
            name: "List",
            tag: "li",
            Content: [
              {
                name: "Text",
                textContent: "Maecenas sed diam eget risus varius blandit sit amet non magna."
              }
            ]
          }
        ]
      },
      {
        name: "Paragraph",
        tag: "p",
        Content: [
          {
            name: "Text",
            textContent: "Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis."
          }
        ]
      }
      
    ]

    //this.dataContext. = "";
  }

  ngOnInit(): void {
    let ContentElement = document.getElementById("content");
    this.RenderContent(ContentElement, this.dataContext.Content);
    ContentElement = document.getElementById("mrqcontent");
    this.RenderContent(ContentElement, this.dataContext.MRQContent);
  }

  RenderContent(container, content) {
    for (let item of content) {
      console.log("called - " + item.name);
      this.AddElement(container, item)
    }
  }

  AddElement(container, item) {
    var component;
    console.log(item.name);
    switch (item.name) {
      case "Text":
        container.textContent = item.textContent;
        break;
      default:
        component = document.createElement(item.tag);
        container.appendChild(component);
        break;
    }
    
    if(item.Content){
      for (let i of item.Content) {
        this.AddElement(component, i);
      }
    }
  }

}
