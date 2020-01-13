import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostManagerRoutingModule } from './postmanager-routing.module';
import {PostAddComponent} from './post-add/post-add.component';
import {PostDetailComponent} from './post-detail/post-detail.component';
import {PostListComponent} from './post-list/post-list.component';

@NgModule({
  declarations: [PostAddComponent, PostDetailComponent],
  imports: [
    CommonModule,
    PostManagerRoutingModule
  ]
})
export class PostManagerModule { }
