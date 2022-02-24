import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <section class="hero is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Contac US!</h1>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">

      <!-- Así es como se inyectaria la variable -->
      <!--{{name}}-->
        <!-- contact form -->
        <form (ngSubmit)="submitForm()" #contactForm="ngForm">
          <!-- name -->
          <div class="field">  
            <label class="label">Name</label>
            <input type="text" name="name" class="input" [(ngModel)]="name" #nameInput="ngModel" required>                      
            <div class="help is-error" *ngIf="nameInput.invalid && nameInput.touched">
              Your name is required
            </div>
          </div>

          <!-- email -->
          <div class="field">  
            <label class="label">Email</label>
            <input type="email" name="email" class="input" [(ngModel)]="email" #emailInput="ngModel" required email>          
            <div class="help is-error" *ngIf="emailInput.invalid && emailInput.touched">
              Your email is required and needs to be a valit email
            </div>
          </div>

          <!-- message -->
          <div class="field">            
            <label class="label">Message</label>
            <textarea name="message" class="textarea" [(ngModel)]="message" #messageTextArea="ngModel" required></textarea>
            <div class="help is-error" *ngIf="messageTextArea.invalid && messageTextArea.touched">
              Message is required
            </div>
          </div>

          <!-- sumit button -->
          <button type="submit" class="button is-large is-warning" [disabled]="contactForm.invalid">
            Send
          </button>

        </form>
      </div>
    </section>

  `,
  styles: [
  ]
})
export class ContactComponent implements OnInit {

  //name = "Alonso";
  name: any;
  email: any;
  message: any;

  constructor() { 

  }

  ngOnInit(): void {

    // create an API call

    // create the form based on API fields

  }
/*
  submitForm(){
    // grap all the fields and their values
    //const nameInput = document.querySelector('input[name=name]');
  }
*/

  submitForm(){
    //const alertMessage = `Mi nombre es ${this.name}`;
    //alert(alertMessage);


  }
}
