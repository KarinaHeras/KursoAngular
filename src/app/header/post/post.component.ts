
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HeaderService } from '../header.service';
import { Post } from './post';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
getAllPost$: Observable<Post[]>;
  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
    this.getAllPost$ = this.headerService.getAllPost();
  }

}
