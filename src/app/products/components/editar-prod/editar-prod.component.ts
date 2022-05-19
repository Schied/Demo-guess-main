import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-editar-prod',
  templateUrl: './editar-prod.component.html',
  styleUrls: ['./editar-prod.component.css']
})
export class EditarProdComponent implements OnInit {

  products: any[] = [];
  updatedProduct: FormGroup = this.fb.group({});
  submitted = false;
  idprod: string = "";

  constructor(
    private productService: ProductsService,
    private fb: FormBuilder, private router: Router
  ) { }

  ngOnInit() {
    this.updatedProduct = this.fb.group({
      nombre: ['', Validators.required ],
      precio: ['', Validators.required ],
      descripcion: ['', Validators.required ],
      cantidad: ['', Validators.required ],
    })
    this.getProducts();
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
    });
  }
  llenarForm(producto: any){
    this.updatedProduct.setValue({
      nombre: producto.nombre,
      precio: producto.precio,
      descripcion: producto.descripcion,
      cantidad: producto.cantidad,
    })
    this.idprod = producto.id;
  }

  actualizarProducto(){
    const product:any = {
      nombre: this.updatedProduct.value.nombre,
      precio: this.updatedProduct.value.precio,
      descripcion: this.updatedProduct.value.descripcion,
      cantidad: this.updatedProduct.value.cantidad,
      fechaActualizacion: new Date()
    }
    this.productService.updated(this.idprod, product).then(() => {
      alert("Producto actualizado correctamente");
    }).catch( error => {
      console.log("Error:" + error);
    })
  }

  eliminarProducto(id: string){
    this.productService.delete(id).then(() => {
      alert('empelado eliminado con exito');
    }).catch(error => {
      console.log(error);
    })
  }

}
