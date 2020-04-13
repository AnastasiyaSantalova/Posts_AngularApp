import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { PostsService } from 'src/app/services/posts/posts.service';
import { Post } from 'src/app/domain/Post';

@Component({
  selector: 'app-post-create-page',
  templateUrl: './post-create-page.component.html',
  styleUrls: ['./post-create-page.component.sass']
})
export class PostCreatePageComponent implements OnInit {
  editMode: boolean = false;
  postId: string;

  constructor(private postsService: PostsService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.setMode();
  }

  setMode(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if(paramMap.has('postId')) {
        this.editMode = true;
        this.postId = paramMap.get('postId');
      }
    });
  }

  onAddPost(post: Post) {
    this.postsService.addPost(post);
  }
}
