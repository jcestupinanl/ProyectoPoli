import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  error_messages = {
    'email': [
      { type: 'required', message: 'El correo eléctronico es obligatorio.'},
      { type: 'pattern', message: 'El correo eléctronico no es valido.' }
    ],
    'password': [
      { type: 'required', message: 'La contraseña es obligatorio.'},
      { type: 'minlength', message: 'Mínimo escribir 8 caracteres.' },
      { type: 'maxlength', message: 'Máximo escribir 16 caracteres.' },
      { type: 'pattern', message: 'Escribir mínimo una letra minúscula, una letra mayúscula, un número y un caracter especial.' }
    ]
  }

  constructor(
    public formBuilder: FormBuilder,
    public _route: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('',[
        Validators.required,
        Validators.pattern(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/)
      ]),
      password: new FormControl('',[
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(16),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){4,}$/),
      ])
    })
  }

  login(){
    this._route.navigateByUrl('/trends');
  }

  ngOnInit() {}
}
