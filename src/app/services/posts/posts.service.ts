import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Post } from 'src/app/domain/Post';

@Injectable({
  providedIn: 'root'
})

export class PostsService {
  posts: Post[] = [
    {
      title: 'Third post',
      content: 'Some content of the third post',
    },
    {
      title: 'Second post',
      content: 'Some content of the second post',
    },
    {
      title: 'First post',
      content: 'Some content of the first post',
    },
  ]

  getPosts(): Observable<Post[]> {
    return of(this.posts);
  }

  addPost(post) {
    this.posts.unshift(post);
  }
}
