import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BlogTemplateComponent } from './component/blog-template/blog-template.component';

@NgModule({
  declarations: [
    BlogTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [BlogTemplateComponent]
})
export class AppModule { }
