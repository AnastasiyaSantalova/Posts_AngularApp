import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostsPageComponent } from './components/posts-page/posts-page.component';
import { PostCreatePageComponent } from './components/post-create-page/post-create-page.component';
import { PostCreateComponent } from './components/post-create/post-create.component';

const routes: Routes = [
  { path: '', component: PostsPageComponent },
  { path: 'create', component: PostCreatePageComponent },
  { path: 'edit/:postId', component: PostCreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
