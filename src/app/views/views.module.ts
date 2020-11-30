import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderBodyFooterComponent } from './header-body-footer/header-body-footer.component';
import { HeaderBodyComponent } from './header-body/header-body.component';
import { BodyFooterComponent } from './body-footer/body-footer.component';



@NgModule({
  declarations: [
    HeaderBodyFooterComponent,
    HeaderBodyComponent,
    BodyFooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderBodyFooterComponent,
    HeaderBodyComponent,
    BodyFooterComponent
  ]
})
export class ViewsModule { }
