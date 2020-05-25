import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/service/posts.service';

@Component({
  selector: 'app-private-posts',
  templateUrl: './private-posts.component.html',
  styleUrls: ['./private-posts.component.css']
})
export class PrivatePostsComponent implements OnInit {
posts = [];
  constructor(private postsService: PostsService) { }

  ngOnInit(){
    this.postsService.getPrivatePosts();
      // .subscribe(
      //   res => {
      //     console.log(res);
      //     this.posts = res;
      //   },
      //   err => console.log(err)
      // );


  }

}
