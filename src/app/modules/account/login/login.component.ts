import {
  Component,
  HostBinding,
  OnDestroy,
  OnInit,
  Renderer2,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../../../services/authentication.service';
import { NotificationService } from '../../../services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  //@HostBinding('class') class = 'login-box';
  loginForm: FormGroup;
  isAuthLoading = false;
  submitted = false;
  returnUrl!: string;
  error = '';
  hide = true;
  rememberMe: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private renderer: Renderer2,
    private notifyService: NotificationService
  ) {}

  ngOnInit() {
    this.renderer.addClass(document.querySelector('app'), 'login-page');
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }
  async loginByAuth() {
    this.submitted = true;
    if (this.loginForm.valid) {
      this.isAuthLoading = true;
      this.authenticationService
        .login(this.f.username.value, this.f.password.value)
        .pipe(first())
        .subscribe(
          (data) => {
            this.router.navigate([this.returnUrl]);
          },
          (err) => {
            this.notifyService.showError(err, 'Login Error');
            this.isAuthLoading = false;
          }
        );
      this.isAuthLoading = false;
    } else {
      this.notifyService.showError('Form is not valid!', 'Form Error');
    }
  }
  public errorHandling = (control: string, error: string) => {
    return this.loginForm.controls[control].hasError(error);
  }
  ngOnDestroy() {
    this.renderer.removeClass(document.querySelector('app'), 'login-page');
  }
  someComplete(): boolean {
    return false;
  }

  setAll(completed: boolean) {
   return;
  }
}
