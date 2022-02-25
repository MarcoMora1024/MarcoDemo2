import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <section class="hero is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Home</h1>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">

      <img src="/assets/img/under_construction_sign.jpg">

      </div>
    </section>  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
