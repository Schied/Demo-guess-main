import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-lista-products',
  templateUrl: './lista-products.component.html',
  styleUrls: ['./lista-products.component.css']
})
export class ListaProductsComponent implements OnInit {

  products: any [] = [];
  constructor(
    firestore: AngularFirestore,
    private productService: ProductsService
  ) { }

  ngOnInit() {
    this.getProducts()
  }

  getProducts() {
    this.productService.read().subscribe(data => {
      this.products = [];
      data.forEach((element: any) => {
        this.products.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      // console.log(this.products);
    });
  }

}
