import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Authenticationrequest } from 'src/app/shared/models/Authenticationrequest';
import { routes } from 'src/app/shared/routes/routes';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    standalone: false
})
export class LoginComponent implements OnInit {

  public routes = routes;

  loginForm: FormGroup;
  isLoading = false;
  errorMessage = '';
  authrequest : Authenticationrequest = new Authenticationrequest()


  constructor(private authService: AuthService ,
     private router: Router,
     private toastr: ToastrService
  ) {
    this.loginForm = new FormGroup({

                 email : new FormControl ('',[Validators.required,Validators.minLength(3)]),
                 password : new FormControl ('',[Validators.required,Validators.minLength(3)])
     })}


    role : any;
  ngOnInit(): void {

    // this.role = localStorage.getItem('role');
    // console.log("Role from localStorage:", this.role);

  }

  get password(){
    return this.loginForm.get('password')
  }
  get email(){
    return this.loginForm.get('email')
  }


  login(): void {
    this.authrequest.email = this.loginForm.value.email;
    this.authrequest.password = this.loginForm.value.password;

    console.log("Login Request:", this.authrequest);

    this.authService.login(this.authrequest).subscribe({
      next: (response: any) => {
        console.log("Login success");

        this.authService.setUserToken(response);

            this.toastr.success('Login successful!');
            this.router.navigate(['/dashboard/admin-dashboard']);




      },
      error: (error) => {
        console.error('Login error:', error);
      }
    });
  }





  gotoregister(){
    this.router.navigate(['/register']);

  }


















  // public routes = routes;
  // public passwordClass = false;

  // form = new FormGroup({
  //   email: new FormControl('admin@dreamguys.in', [
  //     Validators.required,
  //     Validators.email,
  //   ]),
  //   password: new FormControl('123456', [Validators.required]),
  // });

  // get f() {
  //   return this.form.controls;
  // }

  // constructor(public auth: AuthService) {}
  // ngOnInit(): void {
  //   if (localStorage.getItem('authenticated')) {
  //     localStorage.removeItem('authenticated');
  //   }
  // }

  // loginFormSubmit() {
  //   if (this.form.valid) {
  //     this.auth.login();
  //   }
  // }
  // togglePassword() {
  //   this.passwordClass = !this.passwordClass;
  // }
}
