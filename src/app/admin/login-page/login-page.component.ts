import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { IUser } from "../shared/interfaces/user.interface";
import { AuthService } from "../shared/services/auth.service";
import { ActivatedRoute, Params, Router } from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  form: FormGroup;
  submitted: boolean = false;
  message: string = ''

  constructor(
    public auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.form = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ])
    })
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      if (params['LoginAgain']) {
        this.message = 'Please Log in Again'
      } else if ( params['authFailed'] ) {
        this.message = 'End of time, please try again'
      }
    })
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  submit() {
    if(this.form.invalid) {
      return
    }

    this.submitted = true;

    const user: IUser = {
      email: this.email?.value,
      password: this.password?.value
    }

    this.auth.login(user).subscribe(() => {
      this.form.reset()
      this.router.navigate(['/admin', 'dashboard']);
      this.submitted = false;
    }, () => {
      this.submitted = false
    })
  }

}
