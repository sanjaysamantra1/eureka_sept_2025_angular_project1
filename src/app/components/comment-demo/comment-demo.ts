import { Component } from '@angular/core';
import { CommentService } from '../../services/comment-service';
import { Comment } from '../../models/comment';

@Component({
  selector: 'app-comment-demo',
  imports: [],
  templateUrl: './comment-demo.html',
  styleUrl: './comment-demo.css'
})
export class CommentDemo {
  commentsArr: Comment[] = [];
  constructor(private commentService: CommentService) {
  }
  ngOnInit() {
    this.commentService.getAllComments().subscribe((response: Comment[]) => {
      this.commentsArr = response;
    })
  }
}
