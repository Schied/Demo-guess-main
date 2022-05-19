import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { EditarProdComponent } from './components/editar-prod/editar-prod.component';
import { LayoutProductsComponent } from './components/layout-products/layout-products.component';
import { ListaProductsComponent } from './components/lista-products/lista-products.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutProductsComponent,
    children: [
      { path: '', redirectTo: 'create', pathMatch: 'full' },
      { path: 'create', component: CreateComponent },
      { path: 'productos', component: ListaProductsComponent },
      { path: 'edit', component: EditarProdComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
