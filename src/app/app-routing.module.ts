import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuicklinkStrategy } from 'ngx-quicklink';
import { AdminGuard } from './admin.guard';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: LayoutComponent,
    canActivate: [AdminGuard],
    children: [
      {
        path: 'products',
        loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
      },

    ]
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '**',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
