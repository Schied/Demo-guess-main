import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  email: string | null = "";
  token: string | null = "";
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.token = localStorage.getItem("token")
    if(this.token){
      this.authService.auth.authState.subscribe( user => {
        if( user != null){
          this.email = user.email;
        }
      })
    }else{
      this.router.navigateByUrl('/auth/login');
    }

  }

  salir(){
    this.authService.logOut();
    localStorage.removeItem("token");
    window.location.reload();
  }
}
