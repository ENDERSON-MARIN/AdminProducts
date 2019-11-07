
import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from './@core/utils/analytics.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  constructor(private analytics: AnalyticsService,  private spinnerService: NgxSpinnerService) {
  }

    ngOnInit() {
      this.spinner();
  }

  spinner(): void {
      this.spinnerService.show();
      setTimeout(() => {
          this.spinnerService.hide();
      }, 2000);
  }
}

