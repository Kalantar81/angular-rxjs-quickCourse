import { NgModule } from '../../node_modules/@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroComponent } from './components/intro/intro.component';
import { SubjectComponent } from './components/subject/subject.component';
import { StreamsComponent } from './components/streams/streams.component';





const routes: Routes = [
  {path: '', redirectTo: 'intro', pathMatch: 'full'}, // '' will render to home component
  {path: 'subject', component: SubjectComponent},
  {path: 'streams', component: StreamsComponent},

  {path: '**', component: IntroComponent}  // '**' something goes wrong, will render to home component
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
