import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminRoutingModule } from './admin.routing';
import { PostListComponent } from './manager/posts/post-list/post-list.component';
import { PostDetailComponent } from './manager/posts/post-detail/post-detail.component';
import { PostAddComponent } from './manager/posts/post-add/post-add.component';

@NgModule({
  declarations: [DashboardComponent, PostListComponent, PostDetailComponent, PostAddComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
