import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  id = 1;

  constructor(private router: Router) {}

  redirect() {
    this.router.navigate(["/", "tabs", "items", this.id]);
  }

}
