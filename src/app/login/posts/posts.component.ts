import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/service/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts = [];
  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.postsService.getPosts()
      .subscribe(
        res => {
          console.log(res);
          this.posts = res.posts;
        }

      );
  }

}
