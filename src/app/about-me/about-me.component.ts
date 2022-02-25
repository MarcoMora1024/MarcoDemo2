import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  template: `
    <section class="hero is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">About Me</h1>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">

      <img src="/assets/img/AboutMe.png">

      </div>
    </section>
  `,
  styles: []
})
export class AboutMeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
