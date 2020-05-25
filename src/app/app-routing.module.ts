import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExamplesComponent } from './content/examples/examples.component';
import { HomeComponent } from './content/home/home.component';
import { PageComponent } from './content/page/page.component';
import { AntherComponent } from './content/anther/anther.component';
import { ContactComponent } from './content/contact/contact.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'contact' }, /**空白會跳轉到home */

  {
    path: 'content',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      }, /**空白會跳轉到home */
      { path: 'home', component: HomeComponent },
      { path: 'examples', component: ExamplesComponent },
      { path: 'page', component: PageComponent },
      { path: 'anther', component: AntherComponent },
      { path: 'contacts', component: ContactComponent },
    ],
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home',
  } /**萬用路由:隨便輸入都會到home */,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
