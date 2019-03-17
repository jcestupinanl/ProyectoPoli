import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-trends',
  templateUrl: 'trends.page.html',
  styleUrls: ['trends.page.scss'],
})
export class TrendsPage {
  constructor(private router: Router) {}
  go() {
    this.router.navigateByUrl('/registration');
  }
}
