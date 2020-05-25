import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// aqui los metodos de adminy publiser
@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private URL = 'http//localhost:3000/api';
  constructor(private http: HttpClient) { }


getPosts(){
  return this.http.get<any>(this.URL + '/posts');
}

getPrivatePosts(){
  return this.http.get(this.URL + '/private-posts');
}

}
