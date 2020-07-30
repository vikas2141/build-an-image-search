import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageSearchComponent } from './component/image-search/image-search.component';

const routes: Routes = [
  {
   path:'user/vikas',
   component: ImageSearchComponent
  },
  {
   path:'**',
   redirectTo:'/user/vikas',
   pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
