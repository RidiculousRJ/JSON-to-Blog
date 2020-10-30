import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogTemplateComponent } from './component/blog-template/blog-template.component';

const routes: Routes = [
  {path: '', component: BlogTemplateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
