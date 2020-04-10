import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Post } from 'src/app/domain/Post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent {
  @Input() posts: Post[] = [];
  @Output() deletePost: EventEmitter<string> = new EventEmitter();

  onDelete(id) {
    this.deletePost.emit(id);
  }
}
