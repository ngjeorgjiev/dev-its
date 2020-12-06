import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Location } from '@angular/common';

@Component({
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnDestroy {
  progress = 0;
  loading = false;

  phoneId = '';
  sub: Subscription;
  constructor(private router: Router, private route: ActivatedRoute, private location: Location) {
    this.sub = this.route.paramMap
      .pipe(map((params: Params) => params.params))
      .subscribe((params) => {
        this.phoneId = params['phoneId'];
      });
  }

  goBack(): void {
    this.location.back();
  }

  goToVerify(): void {
    this.router.navigateByUrl(`/code-scan/valid-qr-code/registration/verification/unverified`);
  }

  interval: any;
  verification(): void {
    this.interval = setInterval(() => {
      this.loading = true;
      if (this.progress < 100) {
        this.progress = this.progress + 15;
      } else {
        this.loading = false;
        const isValid = true;

        if (isValid) {
          this.router.navigateByUrl(
            `/code-scan/valid-qr-code/registration/${this.phoneId}/verification/verified`
          );
        } else {
          this.router.navigateByUrl(
            `/code-scan/valid-qr-code/registration/${this.phoneId}/verification/unverified`
          );
        }
      }
    }, 200);
  }

  resendCode(): void {}

  ngOnDestroy(): void {
    clearInterval(this.interval);
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
