import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: '../app.component.css'
})
export class MainPageComponent {
  temp = true;

  constructor(private route: ActivatedRoute, private router: Router) {}

  onSubmit(form: NgForm) { 
    if (form.valid) {
      this.temp = true;
      this.router.navigate(['/success']);
    } else {
      this.temp = false;
    };
  }
}
