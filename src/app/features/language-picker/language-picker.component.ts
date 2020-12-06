import { Platform } from '@angular/cdk/platform';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewService } from 'src/app/core/services/view.service';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-language-picker',
  templateUrl: './language-picker.component.html',
  styleUrls: ['./language-picker.component.css'],
})
export class LanguagePickerComponent {
  constructor(
    private router: Router,
    private platform: Platform,
    private service: TranslocoService
  ) {}

  changeSiteLanguage(language: string): void {
    this.service.setActiveLang(language);
    localStorage.setItem('language' , language);
    const isWeb = this.platform.isBrowser && window.innerWidth > 900;

    const routeToTake = isWeb ? '/checkout' : '/code-scan';

    this.router.navigateByUrl(routeToTake);
  }
}
