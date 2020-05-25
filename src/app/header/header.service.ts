import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Post } from './post/post';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor(private httpClient: HttpClient) { }

  getAllPost(): Observable<Post[]> {
    return this.httpClient.get<Post[]>('http://localhost:3000/api/posts');
  }
}
