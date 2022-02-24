import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <!-- Header -->

    <app-header></app-header>

    <!--<app-home></app-home>-->
  <!-- routers gets injected here -->
    <router-outlet></router-outlet>

    <!-- footer -->
    <app-footer></app-footer>
  `,
  styles: []
})
export class AppComponent {
  title = 'MarcoDemo2';
}
