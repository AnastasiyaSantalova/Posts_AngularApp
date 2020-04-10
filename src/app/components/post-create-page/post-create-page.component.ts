import { Component, OnInit } from '@angular/core';

import { PostsService } from 'src/app/services/posts/posts.service';
import { Post } from 'src/app/domain/Post';

@Component({
  selector: 'app-post-create-page',
  templateUrl: './post-create-page.component.html',
  styleUrls: ['./post-create-page.component.sass']
})
export class PostCreatePageComponent {

  constructor(private postsService: PostsService) { }

  onAddPost(post: Post) {
    this.postsService.addPost(post);
  }

}
