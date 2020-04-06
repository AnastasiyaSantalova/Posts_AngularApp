import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms';

import { Post } from 'src/app/domain/Post';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})

export class PostCreateComponent implements OnInit {
  @Output() addPost: EventEmitter<Post> = new EventEmitter();

  postForm: FormGroup;
  enteredTitle: string;
  enteredContent: string;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createPostForm();
  }

  createPostForm() {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
    })
  }

  get title(): AbstractControl {
    return this.postForm.get('title');
  }

  get content(): AbstractControl {
    return this.postForm.get('content');
  }

  onAddPost(): void {
    const newPost: Post = {
      title: this.title.value,
      content: this.content.value,
    };

    this.addPost.emit(newPost);
    this.postForm.reset();
  }

  isFormValid(): boolean {
    return this.postForm.valid;
  }
}
