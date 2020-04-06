import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts/posts.service';
import { Post } from 'src/app/domain/Post';

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.scss']
})
export class PostsPageComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.getAllPosts();
  }

  getAllPosts(): void {
    this.postsService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  onAddPost(post) {
    this.postsService.addPost(post);
  }
}
