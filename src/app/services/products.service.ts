import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private firestore: AngularFirestore) { }

  created(producto: any): Promise<any>{
    return this.firestore.collection('productos').add(producto);
  }
  read(){
    return this.firestore.collection('productos', ref => ref.orderBy('fechaCreacion', 'asc')).snapshotChanges();
  }
  updated(id: string, data:any){
    return this.firestore.collection('productos').doc(id).update(data);
  }
  delete(id: string){
    return this.firestore.collection('productos').doc(id).delete();
  }
  getProductById(id: string): Observable<any>{
    return this.firestore.collection('productos').doc(id).snapshotChanges();
  }
}
