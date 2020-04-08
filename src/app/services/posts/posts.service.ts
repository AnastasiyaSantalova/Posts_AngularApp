import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Post } from 'src/app/domain/Post';

@Injectable({
  providedIn: 'root'
})

export class PostsService {
  url = 'http://localhost:3000/api/posts';

  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get<{ message: string, posts: any[] }>(this.url)
      .pipe(map(postData => {
        return postData.posts.map(post => {
          return {
            title: post.title,
            content: post.content,
            id: post._id,
          }
        })
      }));
  }

  addPost(post: Post) {
    this.http.post<{ message: string }>(this.url, post).subscribe(data => {
      console.log(data.message);
    });
  }
}
