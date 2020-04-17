import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { UserService } from '../../services/user/user.service';

@Component({  selector: 'app-usersettings',
  templateUrl: 'usersettings.component.html',

  styleUrls: ['./usersettings.component.css']
})
export class UserSettingsComponent implements OnInit {
    userForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    error = '';

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private service: UserService
    ) {

    }

    ngOnInit() {
        this.userForm = this.formBuilder.group({
            idPartner: ['', Validators.required],

        });

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // convenience getter for easy access to form fields
    get f() { return this.userForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.userForm.invalid) {
            return;
        }

        this.loading = true;

        this.service.sincro(this.f.idPartner).subscribe(response => {
          console.log(response);
         // this.prodottiData = response;
        } , error => {
          this.error = error;
          this.loading = false;
      })}

     /*       .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.error = error;
                    this.loading = false;
                });
    }*/
}
