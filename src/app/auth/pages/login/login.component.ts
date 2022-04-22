import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css' ]
})
export class LoginComponent implements OnInit {

  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  loginForm: FormGroup = this._formBuilder.group({
    correo: [
      ,
      [
        Validators.required,
        Validators.pattern(this.emailPattern)
      ]
    ],
    password: [
      ,
      [
        Validators.required
      ]
    ]
  });

  recordar = new FormControl(false);




  get emailError(): string {
    const errors = this.loginForm.get('correo')?.errors;

    if (errors?.[ 'required' ]) {
      return 'El email es obligatorio';
    } else if (errors?.[ 'pattern' ]) {
      return 'El valor ingresado no tiene formato de correo electronico';
    } else {
      return '';

    }
  }
  constructor(
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  guardar() {
    console.log(this.loginForm.value)
    console.log('Recordar: ', this.recordar.value);

  }


  campoNoValido(campo: string) {
    return this.loginForm.controls[ campo ].errors && this.loginForm.controls[ campo ].touched
  }


}
