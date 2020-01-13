import { Component, OnInit } from '@angular/core';
import { Post} from '../../../../../services/post/post';
import { PostService } from '../../../../../services/post/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: Post[];
  constructor(
    private postService: PostService
  ) { }

  ngOnInit() {
    this.getPosts();
  }
  // getPosts(){
  //   this.posts = this.postService.getPosts();
  // }
  // deletePost(id){
  //   this.posts = this.postService.deletePost(id);
  // }
  getPosts() {
    this.postService.getPosts().subscribe(data => {
      console.log(data);
      this.posts = data;
    });
  }
  deletePost(id){
    this.postService.deletePost(id).subscribe(data => {
      this.posts = this.posts.filter(post => post.id != data.id);
    });
  }
  selectedPost: Post;
  DetailPost(post) {
    this.selectedPost = post;
  }

}
