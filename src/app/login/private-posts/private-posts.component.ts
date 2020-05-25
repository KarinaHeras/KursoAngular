import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from 'src/app/service/posts.service';
@Component({
  selector: 'app-private-posts',
  templateUrl: './private-posts.component.html',
  styleUrls: ['./private-posts.component.css']
})
export class PrivatePostsComponent implements OnInit {

  privatePosts = [];
  constructor(private postsService: PostsService, private router: Router) { }


  ngOnInit(){
    this.postsService.getPrivatePosts()
      .subscribe(
        res => this.privatePosts = res,
        err => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              this.router.navigate(['/signin']);
            }
          }
        },
      );

  }

}
