import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ClientRoutingModule } from './client.routing';
import { AboutComponent } from './home/block/about/about.component';
import { BlogComponent } from './home/block/blog/blog.component';
import { BlogItemComponent } from './home/block/blog-item/blog-item.component';
import { TourComponent } from './home/block/tour/tour.component';
import { TestmonialComponent } from './home/block/testmonial/testmonial.component';
import { ServiceComponent } from './home/block/service/service.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogSingleComponent } from './blog-single/blog-single.component';

@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [HomeComponent, AboutComponent, BlogComponent, BlogItemComponent, TourComponent, TestmonialComponent, ServiceComponent, BlogDetailComponent, BlogSingleComponent],
  imports: [
    CommonModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }
