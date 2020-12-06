import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { slideInAnimation } from '../app/helpers/animations';
import { Location } from '@angular/common';
import { TranslocoService } from '@ngneat/transloco';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ slideInAnimation ]
})

export class AppComponent implements OnInit {
  title = 'ITS';
  constructor(private location: Location, private service: TranslocoService) {}

  ngOnInit(): void {
    const language = localStorage.getItem('language');
    if (language) {
      this.service.setActiveLang(language);
    }
  }
  goBack(): void {
    this.location.back();
  }

  goForward(): void {
    this.location.forward();
  }


  prepareRoute(outlet: RouterOutlet): void {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData["animation"]
  }
}
