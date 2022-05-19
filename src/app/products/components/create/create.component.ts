import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  createProduct: FormGroup = this.fb.group({});
  submitted = false;
  constructor(
    private fb: FormBuilder,
    private productService: ProductsService,
    private router: Router
  )  { }

  ngOnInit() {
    this.createProduct = this.fb.group({
      nombre: ['', Validators.required ],
      precio: ['', Validators.required ],
      descripcion: ['', Validators.required ],
      cantidad: ['', Validators.required ],
    })
  }

  agregarProducto(){
    this.submitted = true;
    if(this.createProduct.invalid){
      return;
    }
    const product:any = {
      nombre: this.createProduct.value.nombre,
      precio: this.createProduct.value.precio,
      descripcion: this.createProduct.value.descripcion,
      cantidad: this.createProduct.value.cantidad,
      fechaCreacion: new Date(),
      fechaActualizacion: new Date()
    }
    console.log(product);
    this.productService.created(product).then( () =>{
      console.log("Producto registrado con exito");
      this.router.navigate(['home//products/productos'])
    }).catch( error => {
      console.log("Error:" + error);
    })

  }

}
