import { Injectable } from '@angular/core';
import { Post } from './post';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts = 'http://5dc26a3d87479d001443647f.mockapi.io/thaitph06858-web207/posts';
  constructor(
    private http: HttpClient
  ) { }
  // @ts-ignore
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.posts);
  }

  deletePost(id): Observable<Post> {
    return this.http.delete<Post>(`${this.posts}/${id}`);
  }
}
