import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { filter } from 'rxjs/operators';

declare var gtag: (arg0: string, arg1: string, arg2: { page_path: string; }) => void;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'final-angular-guess';

  constructor(
    private router: Router
  ) {
    const navEndEvents$ = this.router.events
    .pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    );

    navEndEvents$.subscribe((event: NavigationEnd) => {
      gtag('config', 'G-8HDXS9V7BR', {
        'page_path': event.urlAfterRedirects
      });
    });
  }
}
