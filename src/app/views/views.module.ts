import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderBodyFooterComponent } from './header-body-footer/header-body-footer.component';
import { HeaderBodyComponent } from './header-body/header-body.component';
import { BodyFooterComponent } from './body-footer/body-footer.component';
import { HeaderComponent } from './view-parts/header/header.component';
import { BodyComponent } from './view-parts/body/body.component';
import { FooterComponent } from './view-parts/footer/footer.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    HeaderBodyFooterComponent,
    HeaderBodyComponent,
    BodyFooterComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  exports: [
    HeaderBodyFooterComponent,
    HeaderBodyComponent,
    BodyFooterComponent
  ]
})
export class ViewsModule { }
