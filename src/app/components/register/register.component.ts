import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthenticationService } from '../../_services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component1.html',
  })
export class RegisterComponent implements OnInit {
  Roles: any = ['Cliente', 'Venditore', 'Shopper', 'Admin'];
  selected: any;

  form: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    error = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService


  ) { }

  ngOnInit(): void {
    this.selected = this.Roles[0];
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      indirizzo: ['',]

  });
  this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

}
  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
        return;
    }

    this.loading = true;
    this.authenticationService.register( this.f.username.value , this.f.email.value , this.f.password.value , this.f.indirizzo.value)
        .pipe(first())
        .subscribe(
            data => {
                this.router.navigate([this.returnUrl]);
            },
            error => {

                this.error = error;
                this.loading = false;
            });
}

}
