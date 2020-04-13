import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { Post } from 'src/app/domain/Post';

@Injectable({
  providedIn: 'root'
})

export class PostsService {
  private posts: Post[] = [];
  private postsUpdated: Subject<Post[]> = new Subject();

  url = 'http://localhost:3000/api/posts';

  constructor(private http: HttpClient) {}

  getPostsFromServer(): void {
    this.http.get<{ message: string, posts: any[] }>(this.url)
      .pipe(map(postData => {
        return postData.posts.map(post => {
          return {
            title: post.title,
            content: post.content,
            id: post._id,
          }
        })
      }))
      .subscribe(data => {
        this.posts = data;
        this.postsUpdated.next([...this.posts]);
      });
  }

  getPosts(): Observable<Post[]> {
    this.getPostsFromServer();
    return this.postsUpdated.asObservable();
  }

  getPost(id: string) {

  }

  addPost(post: Post): void {
    this.http.post<{ message: string, postId: string }>(this.url, post).subscribe(data => {
      post.id = data.postId;
      this.posts.push(post);
      this.postsUpdated.next([...this.posts]);
    });
  }

  deletePost(id: string): void {
    this.http.delete(`${this.url}/${id}`).subscribe(() => {
      this.posts = this.posts.filter(post => {
        return post.id !== id;
      });
      this.postsUpdated.next([...this.posts]);
    });
  }
}
