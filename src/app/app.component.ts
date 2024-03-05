import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'news-letter';
  constructor(private route: ActivatedRoute, private router: Router){

  }

  onSubmit(form: NgForm) { 
    console.log(form)
    // this.router.navigate(['/success'], {relativeTo: this.route})
  }
}
