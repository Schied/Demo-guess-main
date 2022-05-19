import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { CreateComponent } from './components/create/create.component';
import { EditarProdComponent } from './components/editar-prod/editar-prod.component';
import { LayoutProductsComponent } from './components/layout-products/layout-products.component';
import { ListaProductsComponent } from './components/lista-products/lista-products.component';
import { NavLateralComponent } from './components/nav-lateral/nav-lateral.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreateComponent,
    EditarProdComponent,
    LayoutProductsComponent,
    ListaProductsComponent,
    NavLateralComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProductsModule { }
