import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientLayoutComponent } from './layout/client/layout/client-layout/client-layout.component';
import { AdminLayoutComponent } from './layout/admin/layout/admin-layout/admin-layout.component';


const routes: Routes = [
  // { path: '', redirectTo: '/homepage', pathMatch: 'full'},
  // { path: 'products', component: ProductsComponent},
  // { path: 'products-manager', component: ProductStatisticalComponent},
  // { path: 'posts/:id', component: ProductDetailComponent},
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/admin/admin.module').then(m => m.AdminModule)
      },
    ]
  },
  {
    path: 'home',
    component: ClientLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/home/client.module').then(m => m.ClientModule)
      },
      // {
      //   path: 'about',
      //   loadChildren: () =>
      //     import('./modules/about/about.module').then(m => m.AboutModule)
      // },
      // {
      //   path: 'blog',
      //   loadChildren: () =>
      //     import('./client/modules/blog-single')
      // }
    ]

  },
  // { path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
