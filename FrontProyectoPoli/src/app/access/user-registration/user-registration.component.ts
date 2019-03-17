import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss'],
})
export class UserRegistrationComponent implements OnInit {

  registrationForm: FormGroup;
  
  error_messages = {
    'nombres': [
      {type: 'required', message: 'Los nombres son obligatorio.'}
    ],
    'apellidos': [
      {type: 'required', message: 'Los apellidos son obligatorio.'}
    ],
    'genero': [
      {type: 'required', message: 'Seleccionar un genero.'}
    ],
    'ciudad': [
      {type: 'required', message: 'Seleccionar una ciudad.'}
    ],
    'edad': [
      {type: 'required', message: 'La edad es obligatorio.'}
    ],
    'email': [
      {type: 'required', message: 'El correo eléctronico es obligatorio.'}
    ],
    'password': [
      {type: 'required', message: 'La contraseña es obligatorio.'}
    ],
    'confirmPass': [
      {type: 'required', message: 'La confirmación de contraseña es obligatorio.'}
    ],
    'condiciones': [
      {type: 'required', message: 'Debe aceptar las condicones.'}
    ]
  }
  img1:any = 'assets/img/registry/prueba.png';

  constructor(
    public formBuilder: FormBuilder,
    public alertController: AlertController
  ) {
    this.registrationForm = this.formBuilder.group({
      nombres: new FormControl('',Validators.required),
      apellidos: new FormControl('',Validators.required),
      genero: new FormControl('',Validators.required),
      ciudad: new FormControl('',Validators.required),
      edad: new FormControl('',Validators.required),
      email: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),
      confirmPass: new FormControl('',Validators.required),
      condiciones: new FormControl('',Validators.required)
    })
  }

  ngOnInit(){ }

  imgProfile(event){
    if(event.target.files && event.target.files[0]){
      let reader = new FileReader();
      reader.onload = (event:any) =>
        this.img1 = event.target.result;
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  registro(){
    console.log('nombres: ',this.registrationForm.value.nombres)
    console.log('apellidos: ',this.registrationForm.value.apellidos)
    console.log('edad: ',this.registrationForm.value.edad)
  }

  async condicionesDeUso () {
    const alert = await this.alertController.create({
      header: 'Condiciones de uso de su información personal',
      subHeader: '',
      message: 'Autorizo de manera previa, expresa e irrevocable a AppRiks, para realizar con mis datos personales, operaciones de recolección, almacenamiento y/o uso de los mismos, con la finalidad de brindar y enviarme información relacionada con temas de educació y con fines estadísticos.',
      buttons: ['Cerrar','Acepto']
    });

    await alert.present();
  }
}
