import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminHeaderComponent } from './layout/admin/layout/admin-header/admin-header.component';
import { AdminFooterComponent } from './layout/admin/layout/admin-footer/admin-footer.component';
import { AdminSidebarComponent } from './layout/admin/layout/admin-sidebar/admin-sidebar.component';
import { AdminLayoutComponent } from './layout/admin/layout/admin-layout/admin-layout.component';
import { ClientHeaderComponent } from './layout/client/layout/client-header/client-header.component';
import { ClientLayoutComponent } from './layout/client/layout/client-layout/client-layout.component';
import { ClientFooterComponent } from './layout/client/layout/client-footer/client-footer.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    AdminSidebarComponent,
    AdminLayoutComponent,
    ClientHeaderComponent,
    ClientLayoutComponent,
    ClientFooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
