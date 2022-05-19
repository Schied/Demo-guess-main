import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor( private auth:AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(user: string, pass: string){
        this.auth.registrar(user, pass).then( data => {
          localStorage.setItem("token", "1234");
          this.router.navigateByUrl('/home/products');
        } )
          .catch(err => alert(err.code));
  }

}
