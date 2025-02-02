import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { RequestStatus } from '@models/request.status.model';
import { AuthService } from '@services/auth.service';
import { CustomValidators } from '@utils/validators';


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
})
export class RegisterFormComponent {

  // creamos estae formularios aparte para la validacion de el email 
  formUser = this.formBuilder.nonNullable.group({
    email: ['', [Validators.email, Validators.required]]
  });





  form = this.formBuilder.nonNullable.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.minLength(8), Validators.required]],
    confirmPassword: ['', [Validators.required]],
  }, {
    validators: [CustomValidators.MatchValidator('password', 'confirmPassword')]
  });
  status: RequestStatus = 'init';
  statusUser: RequestStatus = 'init'; // este es el statur del usuario en el nuevo formulario
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  showPassword = false;
  showRegister= false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router, private authService: AuthService
  ) { }

  register() {
    if (this.form.valid) {
      this.status = 'loading';
      const { name, email, password } = this.form.getRawValue();
      this.authService.registerAndLogin(name, email, password).subscribe({
        next: () => {
          this.status = 'success',
            this.router.navigate(['/app/boards']);
        },
        error: (error) => {
          this.status = 'failed';
          console.log(error);
        },
      });
    } else {
      this.form.markAllAsTouched();
    }
  }
  validateUser() {
    if (this.formUser.valid) {
      this.statusUser = 'loading';
      const { email } = this.formUser.getRawValue();

      this.authService.isAvailable(email).subscribe({
        
        next: (respuesta) => {
          this.statusUser = 'success';
          if (respuesta.isAvailable) {
            this.showRegister=true;
            this.form.controls.email.setValue(email);

          } else {
            this.router.navigate(['/login'],{
              queryParams: { email }// aqui mandamos el párametro que neseciyamos en el formluario de login para el prellenado
            });
          }
        }
      });
    }
  }
}
